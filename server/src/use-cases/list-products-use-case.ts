import { Product } from "@prisma/client";
import { ListProductsRepository } from "../repositories/list-products-repository";



type IResponse = Product[]


export class ListProductsUseCase {
  constructor(
    private listProductsRepository: ListProductsRepository
  ) { }
  async execute(): Promise<IResponse> {
    const listProductsResponse =
      await this.listProductsRepository.list();
    return listProductsResponse
  }
}