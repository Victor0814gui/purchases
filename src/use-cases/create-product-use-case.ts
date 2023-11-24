import Stripe from "stripe";
import { stripe } from "../configs/stripe";




type IRequest = {
  name: string;
  amount: number;
}

type IResponse = Stripe.Product;

export class CreateProductUseCase {
  async execute({ name, amount }: IRequest): Promise<IResponse> {

    const product = await stripe.products.create({
      name,
    });

    await stripe.prices.create({
      unit_amount: amount,
      currency: 'brl',
      active: true,
      product: product.id,
    });

    return product;
  }
}