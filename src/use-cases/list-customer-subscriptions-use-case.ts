import Stripe from "stripe";
import { stripe } from "../configs/stripe";



type IRequest = {
  customerId: string;
}

type IResponse = Stripe.ApiList<Stripe.Subscription>


export class ListCustomerSubscriptionsUseCase {
  async execute({ customerId }: IRequest): Promise<IResponse> {

    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: 'all',
      expand: ['data.default_payment_method'],
    });

    return subscriptions
  }
}