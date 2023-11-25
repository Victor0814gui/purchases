import { ListCustomerSubscriptionsUseCase } from "../use-cases/list-customer-subscriptions-use-case";
import { ListCustomerSubscriptionsController } from "../controllers/list-customer-subscriptions-controller";

const listCustomerSubscriptionsUseCaseInstance =
  new ListCustomerSubscriptionsUseCase()

export const listCustomerSubscriptionsController =
  new ListCustomerSubscriptionsController(
    listCustomerSubscriptionsUseCaseInstance
  )