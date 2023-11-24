import "cors";
import express from "express";
import { stripe } from "./configs/stripe";
import { PurchaseSubscriptionUseCase } from "./use-cases/purchase-subscription-use-case";
import { PurchaseSubscriptionController } from "./controllers/create-subscription-controller";
import { CreateProductController } from "./controllers/create-product-controller";
import { ListProductsController } from "./controllers/list-products-controller";
import { ListCustomerSubscriptionsController } from "./controllers/list-customer-subscriptions-controller";
import { CreateCustomerController } from "./controllers/create-customer-use-case";
import { ListProductsUseCase } from "./use-cases/list-products-use-case";
import { CreateProductUseCase } from "./use-cases/create-product-use-case";
import { ListCustomerSubscriptionsUseCase } from "./use-cases/list-customer-subscriptions-use-case";
import { CreateCustomerUseCase } from "./use-cases/create-customer-use-case";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());


const purchaseSubscriptionUseCase = new PurchaseSubscriptionUseCase()
const createProductUseCase = new CreateProductUseCase();
const listProductsUseCase = new ListProductsUseCase();
const listCustomerSubscriptionsUseCase = new ListCustomerSubscriptionsUseCase();
const createCustomerUseCase = new CreateCustomerUseCase();

const purchaseSubscriptionController = new PurchaseSubscriptionController(purchaseSubscriptionUseCase)
const createProductController = new CreateProductController(createProductUseCase);
const listProductsController = new ListProductsController(listProductsUseCase);
const listCustomerSubscriptionsController = new ListCustomerSubscriptionsController(listCustomerSubscriptionsUseCase);
const createCustomerController = new CreateCustomerController(createCustomerUseCase);


app.post('/create-customer',  async (request,response) => {
  await createCustomerController.handler(request,response)
});

app.post("/create-subscription",  async (request,response) => {
  await purchaseSubscriptionController.handler(request,response)
});

app.post("/create-product",  async (request,response) => {
  await createProductController.handler(request,response)
});

app.get("/products-list", async (request,response) => {
  await listProductsController.handler(request,response)
});

app.get('/subscriptions', async (request,response) => {
  await listCustomerSubscriptionsController.handler(request,response)
});


app.post(
  '/webhook',
  async (req, res) => {
    // Retrieve the event by verifying the signature using the raw body and secret.
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.header('Stripe-Signature'),
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(err);
      console.log(`⚠️  Webhook signature verification failed.`);
      console.log(
        `⚠️  Check the env file and enter the correct webhook secret.`
      );
      return res.sendStatus(400);
    }

    // Extract the object from the event.
    const dataObject = event.data.object;

    // Handle the event
    // Review important events for Billing webhooks
    // https://stripe.com/docs/billing/webhooks
    // Remove comment to see the various objects sent for this sample
    switch (event.type) {
      case 'invoice.payment_succeeded':
        if (dataObject['billing_reason'] == 'subscription_create') {
          // The subscription automatically activates after successful payment
          // Set the payment method used to pay the first invoice
          // as the default payment method for that subscription
          const subscription_id = dataObject['subscription']
          const payment_intent_id = dataObject['payment_intent']

          // Retrieve the payment intent used to pay the subscription
          const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);

          try {
            const subscription = await stripe.subscriptions.update(
              subscription_id,
              {
                default_payment_method: payment_intent.payment_method,
              },
            );

            console.log("Default payment method set for subscription:" + payment_intent.payment_method);
          } catch (err) {
            console.log(err);
            console.log(`⚠️  Falied to update the default payment method for subscription: ${subscription_id}`);
          }
        };

        break;
      case 'invoice.payment_failed':
        // If the payment fails or the customer does not have a valid payment method,
        //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        // Use this webhook to notify your user that their payment has
        // failed and to retrieve new card details.
        break;
      case 'invoice.finalized':
        // If you want to manually send out invoices to your customers
        // or store them locally to reference to avoid hitting Stripe rate limits.
        break;
      case 'customer.subscription.deleted':
        if (event.request != null) {
          // handle a subscription cancelled by your request
          // from above.
        } else {
          // handle subscription cancelled automatically based
          // upon your subscription settings.
        }
        break;
      case 'customer.subscription.trial_will_end':
        // Send notification to your user that the trial will end
        break;
      default:
      // Unexpected event type
    }
    res.sendStatus(200);
  }
);


app.listen(PORT, () => {
  console.log(`✅Server is runing on http://localhost:${PORT}`)
})