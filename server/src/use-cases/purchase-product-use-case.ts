import { ICreatePromotionalCodeUseCase } from "../interfaces/i-create-promotional-code-use-case";

type IRequest = {
  productId: string;
  customerId: string;
}

type IResponse = {}

export class PurchaseProductUseCase {
  async execute({ productId, customerId }: IRequest): Promise<IResponse> {

    const response = {} as Promise<IResponse>;

    return response;
  }
}