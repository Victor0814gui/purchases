import Stripe from "stripe";
import { stripe } from "../configs/stripe";



type IRequest = {
  subscriptionId: string;
}

type IResponse = Stripe.Subscription;


export class CancelSubscriptionUseCase {
  async execute({ subscriptionId }: IRequest): Promise<IResponse> {
    const deletedSubscription = await stripe.subscriptions.cancel(
      subscriptionId
    );

    return deletedSubscription;
  }
}