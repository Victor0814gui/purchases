import { PrismaClient, Product } from "@prisma/client";


const database = new PrismaClient();

export class SyncProductsWithGatewayRepository {
  async findById(productId: string): Promise<Product | null> {
    const findByIdResponse = await database.product.findFirst({
      where: {
        productId,
      }
    })

    return findByIdResponse;
  }

  async create(params: Product): Promise<Product> {
    const findByIdResponse = await database.product.create({
      data: params
    })

    return findByIdResponse;
  }
}