import Stripe from "stripe";
import { stripe } from "../configs/stripe";

import { Request, Response } from "express"
import { CreateProductUseCase } from "../use-cases/create-product-use-case";


type IRequest = {
  name: string;
  amount: number;
}

export class CreateProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IRequest;

    const createProductUseCaseResponse =
      await this.createProductUseCase.execute(body);

    return response.json(createProductUseCaseResponse);
  }
}