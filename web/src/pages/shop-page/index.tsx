import { useEffect, useState } from "react";

import { api } from "../../service/api";
import { Product } from "../../components/products";

import styles from "./styles.module.css";

type IProducts = {
  id: string
  description: string
  name: string
  amount: number
  productId: string
  priceId: string
}

type APIResponse = {
  data: IProducts[]
}

export function ShopPage() {
  const [products, setProducts] = useState<IProducts[]>([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (products.length === 0) {
          const response = await api.get("/list-products") as APIResponse;
          console.log(response.data)
          setProducts(response.data);
        }
      } catch (err) {
        console.log({ err_ShopPage: err })
      }
    }
    fetchProducts();
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.listProducts}>
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  )
}