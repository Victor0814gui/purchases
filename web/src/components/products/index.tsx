
import styles from "./styles.module.css";

type ProductProps = {
  name: string;
  description: string;
  amount: number;
}

export function Product(product: ProductProps) {
  return (
    <div className={styles.subscription}>
      <header>
        <h2>{product.name}</h2>
        <span>assinatura</span>
      </header>
      {/* <div className={styles.thumbnail} /> */}
      <p>{product.description}</p>
      <footer>
        <button>
          adicionar
        </button>
        <h2>{product.amount / 100}R$</h2>
      </footer>
    </div>
  )
}