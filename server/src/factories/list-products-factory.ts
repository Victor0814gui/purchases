import { ListProductsUseCase } from "../use-cases/list-products-use-case";
import { ListProductsController } from "../controllers/list-products-controller";




const listProductsUseCaseInstance = new ListProductsUseCase();
export const listProductsController = new ListProductsController(
  listProductsUseCaseInstance,
);