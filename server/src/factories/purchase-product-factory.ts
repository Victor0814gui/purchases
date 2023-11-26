import { PurchaseProductUseCase } from "../use-cases/purchase-product-use-case";
import { PurchaseProductController } from "../controllers/purchase-product-controller";



const purchaseProductUseCaseInstance = new PurchaseProductUseCase()
export const purchaseProductController = new PurchaseProductController(
  purchaseProductUseCaseInstance,
);