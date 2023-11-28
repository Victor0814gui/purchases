import { CreateProductController } from "../controllers/create-product-controller";
import { CreateProductRepository } from "../repositories/create-product-repository";
import { CreateProductUseCase } from "../use-cases/create-product-use-case";



const createProductRepository = new CreateProductRepository();
const createProductUseCaseInstance = new CreateProductUseCase(createProductRepository);
export const createProductController = new CreateProductController(
  createProductUseCaseInstance
);