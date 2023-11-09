import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { NameIcon, PassowrdIcon } from "./Icons";
import { Button } from "./Button";

export default function Login() {
  const [effectOn, setEffectOn] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = () => {
    console.log("login sucess");
  };

  return (
    <div className="flex flex-col gap-4 items-center m-auto">
      <h1 className="text-whitetext-2xl response:text-3xl font-bold select-none">INSIRA SEU USUÁRIO E SENHA</h1>
      <div
        className={twMerge(
          "flex flex-col items-center gap-3 rounded-lg border-2 p-5 w-auto",
          effectOn && "animate-shake"
        )}
        onAnimationEnd={() => setEffectOn(false)}
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <NameIcon width={50} fill="none" stroke="white" />
            <PassowrdIcon width={50} fill="white" stroke="none" />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col py-1 gap-2 whitespace-nowrap response:w-96">
              <input
                type="text"
                placeholder="Digite o seu Usuário"
                className={twMerge("rounded-lg text-black p-2 border-4 border-white")}
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="password"
                placeholder="Digite sua Senha"
                className={twMerge(
                  "flex flex-col py-1 gap-2 whitespace-nowrap response:w-96",
                  "rounded-lg text-black p-2 border-4 border-white"
                )}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button
          className={twMerge(
            "text-gray-500 border-gray-500 cursor-not-allowed",
            user &&
              password &&
              "text-white border-white hover:text-blue-500 hover:scale-110 active:scale-90 hover:border-blue-500 cursor-pointer"
          )}
          onClick={() => user && password && handleSubmit}
        >
          <h1>LOGIN</h1>
        </Button>
      </div>
    </div>
  );
}
