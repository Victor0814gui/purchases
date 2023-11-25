import { CreateProductController } from "../controllers/create-product-controller";
import { CreateProductUseCase } from "../use-cases/create-product-use-case";




const createProductUseCaseInstance = new CreateProductUseCase();
export const createProductController = new CreateProductController(
  createProductUseCaseInstance
);