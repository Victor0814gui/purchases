import { Request, Response } from "express";
import { PurchaseSubscriptionUseCase } from "../use-cases/purchase-subscription-use-case";


type IRequest = {
  priceId: string;
  customerId: string;
}

export class PurchaseSubscriptionController {
  constructor(
    private purchaseSubscriptionUseCase: PurchaseSubscriptionUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IRequest;

    const purchaseSubscriptionUseCaseResponse =
      await this.purchaseSubscriptionUseCase.execute(body);


    return response.json(purchaseSubscriptionUseCaseResponse);
  }
}