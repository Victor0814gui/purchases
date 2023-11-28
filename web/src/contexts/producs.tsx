import { ReactNode, createContext, useContext } from "react";


const ProductContext = createContext({});

type Props = {
  children: ReactNode;
}

function ProductContextProvider({ children }: Props) {

  const addProduct = () => {

  }

  return (
    <ProductContext.Provider value={{}}>
      {children}
    </ProductContext.Provider>
  )
}

function useProductContextProvider() {
  const verifyContextAlreadyExists = useContext(ProductContext)
  if (verifyContextAlreadyExists) {
    throw new Error("[ProductContext] context does not exists")
  }
}

export {
  useProductContextProvider,
  ProductContextProvider
}