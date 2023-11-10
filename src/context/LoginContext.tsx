import { LoginType } from "@/types/types";
import { createContext, useContext, useState, Dispatch, SetStateAction, useEffect } from "react";

// contexto criado
interface LoginContextInterface {
  logged: boolean;
  setLogged: Dispatch<SetStateAction<boolean>>;
  login: LoginType;
  setLogin: Dispatch<SetStateAction<LoginType>>;
}

export const LoginContext = createContext<LoginContextInterface>({
  logged: false,
  setLogged: () => false,
  login: {
    username: "",
    password: "",
  },
  setLogin: () => null,
});

// usar o contexto criado
export const useLogin = () => {
  return useContext(LoginContext);
};

// react func do context
export function LoginContextProvider(props: React.PropsWithChildren) {
  const [logged, setLogged] = useState<boolean>(false);
  const [login, setLogin] = useState<LoginType>({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(JSON.stringify(login));
  }, [login]);

  return (
    <LoginContext.Provider value={{ logged: logged, setLogged: setLogged, login: login, setLogin: setLogin }}>
      {props.children}
    </LoginContext.Provider>
  );
}
