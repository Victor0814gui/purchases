import Stripe from "stripe";
import { stripe } from "../configs/stripe";

type IRequest = {
  productId: string;
  customerId: string;
}

type IResponse = {
  paymentIntent: string;
}

export class PurchaseProductUseCase {
  async execute(): Promise<IResponse> {

    // const customer = await stripe.customers.retrieve(
    //   customerId
    // );

    // if (!customer.id || customer.deleted) {
    //   throw new Error("customer does not exits or deleted");
    // }

    // const product = await stripe.products.retrieve(
    //   productId,
    // );

    // if (!product.id || product.deleted) {
    //   throw new Error("product does not exits or deleted");
    // }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 200,
      currency: 'brl',
      automatic_payment_methods: { enabled: true },
      description: `product purchased`,
    });
    return {
      paymentIntent: paymentIntent.client_secret!
    };
  }
}