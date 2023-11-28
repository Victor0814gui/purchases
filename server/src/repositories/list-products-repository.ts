import Stripe from "stripe";
import { stripe } from "../configs/stripe";
import { PrismaClient, Product } from "@prisma/client";



const database = new PrismaClient();


export class ListProductsRepository {
  async list(): Promise<Product[]> {
    const listProducts = await database.product.findMany()
    return listProducts
  }
}