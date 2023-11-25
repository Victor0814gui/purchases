import { PurchaseSubscriptionController } from "../controllers/purchase-subscription-controller";
import { PurchaseSubscriptionUseCase } from "../use-cases/purchase-subscription-use-case";



const purchaseSubscriptionUseCaseInstance = new PurchaseSubscriptionUseCase();
export const purchaseSubscriptionController = new PurchaseSubscriptionController(
  purchaseSubscriptionUseCaseInstance,
);