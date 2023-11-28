import { randomUUID } from "crypto";
import { Product } from "@prisma/client";
import { SyncProductsWithGatewayRepository } from "../repositories/sync-products-with-gateway-repository";
import { stripe } from "../configs/stripe";



type IParams = {
  productId: string;
}

export class SyncProductsWithGatewayUseCase {
  constructor(
    private syncProductsWithGatewayRepository: SyncProductsWithGatewayRepository
  ) { }
  async execute({ productId }: IParams): Promise<Product> {

    const verifyProductAlreadyExists =
      await this.syncProductsWithGatewayRepository.findById(productId)

    if (!!verifyProductAlreadyExists?.id) {
      throw new Error("product already exists")
    }

    const product = await stripe.products.retrieve(productId);

    if (!product?.id) {
      throw new Error("product does not exists")
    }

    const price = await stripe.prices.retrieve(product.default_price! as string);

    const syncProductsWithGatewayRepositoryResponse
      = await this.syncProductsWithGatewayRepository.create({
        amount: price.unit_amount!,
        id: randomUUID(),
        description: product.description!,
        name: product.name,
        productId,
        priceId: price.id,
      })

    return syncProductsWithGatewayRepositoryResponse;
  }
}