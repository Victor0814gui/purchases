import { CancelSubscriptionController } from "../controllers/cancel-subscription-controller";
import { CancelSubscriptionUseCase } from "../use-cases/cancel-subscription-use-case";



const cancelSubscriptionUseCaseInstance = new CancelSubscriptionUseCase();
export const cancelSubscriptionController = new CancelSubscriptionController(
  cancelSubscriptionUseCaseInstance
);