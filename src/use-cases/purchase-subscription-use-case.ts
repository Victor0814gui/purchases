import Stripe from "stripe";
import { stripe } from "../configs/stripe";


type Params = {
  priceId: string;
  customerId: string;
}

type Response = Stripe.Subscription

export class PurchaseSubscriptionUseCase {
  async execute({ priceId, customerId }: Params): Promise<Response> {

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{
        price: priceId,
      }],
      payment_behavior: 'default_incomplete',
      expand: ['latest_invoice.payment_intent'],
    });
    return subscription;
  }
}