import { ProductsCreatorType } from "@/types/types";
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

// contexto criado
interface ProductsCreatorInterface {
  product: ProductsCreatorType;
  setProduct: Dispatch<SetStateAction<ProductsCreatorType>>;
}
export const ProductsCreatorContext = createContext<ProductsCreatorInterface>({
  product: {
    nome: "",
    codigo: "",
    custo: "",
    preço: "",
    estoque: "",
    estoqueMinimo: "",
    ativo: false,
  },
  setProduct: () => null,
});

// usar o contexto criado
export const useProductsCreator = () => {
  return useContext(ProductsCreatorContext);
};

// react func do context
export function ProductsCreatorContextProvider(props: React.PropsWithChildren) {
  const [product, setProduct] = useState<ProductsCreatorType>({
    nome: "",
    codigo: "",
    custo: "",
    preço: "",
    estoque: "",
    estoqueMinimo: "",
    ativo: false,
  });

  useEffect(() => {
    console.log(JSON.stringify(product));
  }, [product]);

  return (
    <ProductsCreatorContext.Provider value={{ product: product, setProduct: setProduct }}>
      {props.children}
    </ProductsCreatorContext.Provider>
  );
}
