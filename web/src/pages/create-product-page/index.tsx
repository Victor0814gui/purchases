
import { FormEvent, FormEventHandler, useState } from "react";
import styles from "./styles.module.css";
import { api } from "../../service/api";

export function CreateProductPage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  async function handlerSubmitForm(e: FormEvent) {
    e.preventDefault();
    const response = await api.post("/create-product", { name, amount: 120 })
    console.log(response)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handlerSubmitForm}>
        <input type="text" value={name} onChange={({ target: { value } }) => setName(value)} />
        <button type="submit">Criar</button>
      </form>
    </div>
  )
}