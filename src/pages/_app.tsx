import { ClientsCreatorContextProvider } from "@/context/ClientCreatorContext";
import { LoginContextProvider } from "@/context/LoginContext";
import { ProductsCreatorContextProvider } from "@/context/ProductContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginContextProvider>
      <ProductsCreatorContextProvider>
        <ClientsCreatorContextProvider>
          <Component {...pageProps} />
        </ClientsCreatorContextProvider>
      </ProductsCreatorContextProvider>
    </LoginContextProvider>
  );
}
