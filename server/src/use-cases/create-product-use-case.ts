import Stripe from "stripe";
import { stripe } from "../configs/stripe";
import { CreateProductRepository } from "../repositories/create-product-repository";
import { randomUUID } from "crypto";




type IRequest = {
  name: string;
  description: string;
  amount: number;
}

type IResponse = Stripe.Product;

export class CreateProductUseCase {
  constructor(
    private createProductRepository: CreateProductRepository
  ) { }
  async execute({ name, amount, description }: IRequest): Promise<IResponse> {


    const product = await stripe.products.create({
      name,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: amount,
      currency: 'brl',
    });

    if (!product.id && !price.id) {
      throw new Error("gateway error")
    }

    await this.createProductRepository.create({
      name,
      amount: price.unit_amount!,
      productId: price.id,
      id: randomUUID(),
      description,
      priceId: product.default_price! as string,
    })

    return product;
  }
}