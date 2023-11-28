import { ReactNode } from "react";
import { ProductContextProvider } from "./producs";


type Props = {
  children: ReactNode;
}

export function Contexts({ children }: Props) {
  return (
    <ProductContextProvider>
      {children}
    </ProductContextProvider>
  )
}