import { Request, Response } from "express";
import { CancelSubscriptionUseCase } from "../use-cases/cancel-subscription-use-case";



type IRequest = {
  subscriptionId: string;
}


export class CancelSubscriptionController {
  constructor(
    private cancelSubscriptionUseCase: CancelSubscriptionUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {
    const query = request.query as IRequest;

    const cancelSubscriptionUseCase =
      await this.cancelSubscriptionUseCase.execute(query);

    return response.json(cancelSubscriptionUseCase);
  }
}