import { ListProductsUseCase } from "../use-cases/list-products-use-case";
import { ListProductsController } from "../controllers/list-products-controller";
import { ListProductsRepository } from "../repositories/list-products-repository";



const listProductsRepository = new ListProductsRepository()
const listProductsUseCaseInstance = new ListProductsUseCase(listProductsRepository);
export const listProductsController = new ListProductsController(
  listProductsUseCaseInstance,
);