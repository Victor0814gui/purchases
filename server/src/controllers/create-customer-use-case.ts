import { Request, Response } from "express";
import { CreateCustomerUseCase } from "../use-cases/create-customer-use-case";



type IRequest = {
  email: string;
}

export class CreateCustomerController {
  constructor(
    private createCustomerUseCase: CreateCustomerUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {

    const body = request.body as IRequest;
    const createCustomerUseCaseResponse =
      await this.createCustomerUseCase.execute(body);

    return response.json(createCustomerUseCaseResponse);
  }
}