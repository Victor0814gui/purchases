import Stripe from "stripe";
import { stripe } from "../configs/stripe";



type IRequest = {
  email: string;
}

type IResponse = Stripe.Customer;

export class CreateCustomerUseCase {
  async execute({ email }: IRequest): Promise<IResponse> {
    // Create a new customer object
    const customer = await stripe.customers.create({
      email,
    });

    return customer;
  }
}