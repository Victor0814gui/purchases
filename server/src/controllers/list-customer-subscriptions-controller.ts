import { Request, Response } from "express";
import { ListProductsUseCase } from "../use-cases/list-products-use-case";
import { ListCustomerSubscriptionsUseCase } from "../use-cases/list-customer-subscriptions-use-case";

type IRequest = {
  customerId: string;
}


export class ListCustomerSubscriptionsController {
  constructor(
    private listCustomerSubscriptionsUseCase: ListCustomerSubscriptionsUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {
    const query = request.query as IRequest;

    const listCustomerSubscriptionsUseCaseResponse =
      await this.listCustomerSubscriptionsUseCase.execute(query);

    return response.json(listCustomerSubscriptionsUseCaseResponse);
  }
}