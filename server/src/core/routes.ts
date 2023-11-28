import { Router } from "express";

import {
  createCustomerController,
  createProductController,
  purchaseSubscriptionController,
  listCustomerSubscriptionsController,
  listProductsController,
  cancelSubscriptionController,
} from "../factories";
import { purchaseProductController } from "../factories/purchase-product-factory";
import { stripe } from "../configs/stripe";
import { syncProductsWithGatewayController } from "../factories/sync-products-with-gateway-factory";

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

routes.get("/list-products", async (request, response) => {
  await listProductsController.handler(request, response)
});

routes.post("/purchase-product", async (request, response) => {
  await purchaseProductController.handler(request, response)
});

routes.get('/subscriptions', async (request, response) => {
  await listCustomerSubscriptionsController.handler(request, response)
});

routes.delete("/cancel-subscription", async (request, response) => {
  await cancelSubscriptionController.handler(request, response);
})

routes.post("/sync-product", async (request, response) => {
  await syncProductsWithGatewayController.handler(request, response);
})

routes.get('/config', async (req, res) => {
  return res.json({
    client_secret: `${process.env.STRIPE_PUBLIC_KEY}`,
  });
});