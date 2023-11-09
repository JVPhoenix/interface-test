import { twMerge } from "tailwind-merge";
import { Button } from "../components/Button";
import { Creators } from "@/types/types";
import { Dispatch, SetStateAction } from "react";

interface DashboardSelectInterface {
  creatorSelect: Creators | null;
  setCreatorSelect: Dispatch<SetStateAction<Creators | null>>;
}

export default function DashboardSelect(props: DashboardSelectInterface) {
  return (
    <div className="flex flex-col gap-10 items-center m-auto">
      <h1 className="text-white text-2xl response:text-3xl font-bold select-none">
        Olá *USUÁRIO*, escolha o que deseja fazer!
      </h1>
      <div className="flex w-full justify-around">
        <Button
          className={twMerge(
            "text-white border-white hover:text-blue-500 hover:scale-110 active:scale-90",
            "hover:border-blue-500 cursor-pointer"
          )}
          onClick={() => props.setCreatorSelect(Creators.Client)}
        >
          <h1>CADASTRAR CLIENTE</h1>
        </Button>
        <Button
          className={twMerge(
            "text-white border-white hover:text-blue-500 hover:scale-110 active:scale-90",
            "hover:border-blue-500 cursor-pointer"
          )}
          onClick={() => props.setCreatorSelect(Creators.Product)}
        >
          <h1>CADASTRAR PRODUTO</h1>
        </Button>
      </div>
    </div>
  );
}
