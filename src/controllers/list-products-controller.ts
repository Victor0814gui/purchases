import { Request, Response } from "express";
import { ListProductsUseCase } from "../use-cases/list-products-use-case";




export class ListProductsController {
  constructor(
    private listProductsUseCase: ListProductsUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {

    const listProductsUseCaseResponse =
      await this.listProductsUseCase.execute();

    return response.json(listProductsUseCaseResponse);
  }
}