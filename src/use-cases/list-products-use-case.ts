import Stripe from "stripe";
import { stripe } from "../configs/stripe";



type IResponse = Stripe.ApiList<Stripe.Product>


export class ListProductsUseCase {
  async execute(): Promise<IResponse> {
    const products = await stripe.products.list({
      limit: 10,
    });

    return products
  }
}