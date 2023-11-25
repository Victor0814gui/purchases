import { CreateCustomerUseCase } from "../use-cases/create-customer-use-case";
import { CreateCustomerController } from "../controllers/create-customer-use-case";



const createCustomerUseCaseInstance = new CreateCustomerUseCase()
export const createCustomerController = new CreateCustomerController(
  createCustomerUseCaseInstance,
)
