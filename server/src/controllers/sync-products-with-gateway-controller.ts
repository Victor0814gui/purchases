import {
  Request,
  Response,
} from "express"
import { Product } from "@prisma/client";
import { SyncProductsWithGatewayUseCase } from "../use-cases/sync-products-with-gateway-use-case";



type IParams = {
  amount: number;
  name: string;
  description: string;

  productId: string;
  priceId: string;
}

export class SyncProductsWithGatewayController {
  constructor(
    private syncProductsWithGatewayUseCase: SyncProductsWithGatewayUseCase
  ) { }
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IParams;

    const syncProductsWithGatewayUseCaseResponse =
      await this.syncProductsWithGatewayUseCase.execute(body)

    return response.json(syncProductsWithGatewayUseCaseResponse);
  }
}

