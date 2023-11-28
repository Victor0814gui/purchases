import { SyncProductsWithGatewayController } from "../controllers/sync-products-with-gateway-controller";
import { SyncProductsWithGatewayRepository } from "../repositories/sync-products-with-gateway-repository";
import { SyncProductsWithGatewayUseCase } from "../use-cases/sync-products-with-gateway-use-case";




const syncProductsWithGatewayRepository = new SyncProductsWithGatewayRepository()
const syncProductsWithGatewayUseCase = new SyncProductsWithGatewayUseCase(
  syncProductsWithGatewayRepository
)
export const syncProductsWithGatewayController = new SyncProductsWithGatewayController(
  syncProductsWithGatewayUseCase
)