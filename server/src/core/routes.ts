import { Router } from "express";

import {
  createCustomerController,
  createProductController,
  purchaseSubscriptionController,
  listCustomerSubscriptionsController,
  listProductsController,
  cancelSubscriptionController,
} from "../factories";

export const routes = Router();


routes.post('/create-customer', async (request, response) => {
  await createCustomerController.handler(request, response)
});

routes.post("/create-subscription", async (request, response) => {
  await purchaseSubscriptionController.handler(request, response)
});

routes.post("/create-product", async (request, response) => {
  await createProductController.handler(request, response)
});

routes.get("/products-list", async (request, response) => {
  await listProductsController.handler(request, response)
});

routes.get('/subscriptions', async (request, response) => {
  await listCustomerSubscriptionsController.handler(request, response)
});

routes.delete("/cancel-subscription", async (request, response) => {
  await cancelSubscriptionController.handler(request, response);
})