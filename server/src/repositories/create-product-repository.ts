import { PrismaClient } from "@prisma/client"


type IProduct = {
  id: string
  description: string
  name: string
  amount: number

  productId: string
  priceId: string
}

const database = new PrismaClient()

export class CreateProductRepository {
  async create(params: IProduct): Promise<IProduct> {
    const createProductResponse = await database.product.create({
      data: params
    })

    return createProductResponse;
  }
}