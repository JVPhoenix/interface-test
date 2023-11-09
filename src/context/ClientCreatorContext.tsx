import { ClientCreatorType } from "@/types/types";
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";


interface ClientCreatorInterface {
  client: ClientCreatorType;
  setClient: Dispatch<SetStateAction<ClientCreatorType>>;
}

// contexto criado
export const ClientCreatorContext = createContext<ClientCreatorInterface>({
  client: {
    nome: "",
    telefone: "",
    endereço: "",
    estadoCivil: "",
    genero: null,
  },
  setClient: () => null,
});

// usar o contexto criado
export const useClientCreator = () => {
  return useContext(ClientCreatorContext);
};

// react func do context
export function ClientsCreatorContextProvider(props: React.PropsWithChildren) {
  const [client, setClient] = useState<ClientCreatorType>({
    nome: "",
    telefone: "",
    endereço: "",
    estadoCivil: "",
    genero: null,
  });

  useEffect(() => {
    console.log(JSON.stringify(client));
  }, [client]);

  return <ClientCreatorContext.Provider value={{ client, setClient }}>{props.children}</ClientCreatorContext.Provider>;
}
