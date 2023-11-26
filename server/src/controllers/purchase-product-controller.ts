import { Request, Response } from "express";
import { PurchaseProductUseCase } from "../use-cases/purchase-product-use-case";

type IRequest = {
  productId: string;
  customerId: string;
}


export class PurchaseProductController {
  constructor(
    private purchaseProductUseCase: PurchaseProductUseCase,
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {

    // const body = request.body as IRequest;
    const purchaseProductUseCaseResponse =
      await this.purchaseProductUseCase.execute()

    return response.json(purchaseProductUseCaseResponse);
  }
}