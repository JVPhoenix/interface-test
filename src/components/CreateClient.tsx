import { twMerge } from "tailwind-merge";
import { AdressIcon, CivilStatusIcon, GenderIcon, NameIcon, PhoneIcon } from "./Icons";
import { Button } from "./Button";
import { useState } from "react";
import { CreatorInterface, Creators, Selectors } from "@/types/types";
import { useClientCreator } from "@/context/ClientCreatorContext";

export default function CreateClient(props: CreatorInterface) {
  const { setClient } = useClientCreator();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [adress, setAdress] = useState<string>("");
  const [status, setStatus] = useState<string>("Solteiro");
  const [gender, setGender] = useState<Selectors | null>(null);

  const handleGender = (newState: Selectors) => {
    setGender((oldState) => (oldState === newState ? null : newState));
  };

  const PhoneMask = (value: string) => {
    if (!value) {
      return "";
    } else {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    setClient({
      nome: name,
      telefone: phone,
      endereço: adress,
      estadoCivil: status,
      genero: gender,
    });
    setName("");
    setPhone("");
    setAdress("");
    setStatus("Solteiro");
    setGender(null)
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full m-auto">
      <h1 className="text-white text-2xl response:text-3xl font-bold select-none">INSIRA OS DADOS DO CLIENTE ABAIXO</h1>
      <div className="flex flex-col items-center gap-3 rounded-lg border-2 p-5 w-auto">
        <div className="flex w-full items-center justify-center gap-1">
          <NameIcon width={60} stroke="white" />
          <input
            type="text"
            placeholder="Nome"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white")}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex w-full items-center justify-center gap-1">
          <PhoneIcon width={60} stroke="white" />
          <input
            type="text"
            maxLength={15}
            placeholder="Telefone"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white")}
            onChange={(e) => PhoneMask(e.target.value)}
            value={phone}
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <AdressIcon width={50} stroke="white" />
          <textarea
            placeholder="Endereço"
            cols={26}
            rows={3}
            className={twMerge("rounded-lg text-black p-2 border-4 border-white")}
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          />
        </div>
        <div className="flex items-center w-full gap-2">
          <CivilStatusIcon width={55} fill="white" stroke="white" />
          <select
            className="flex text-black text-md w-full rounded-lg p-2 border-4 border-white font-bold"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Solteiro">Solteiro(a)</option>
            <option value="Casado">Casado(a)</option>
            <option value="Divorciado">Divorciado(a)</option>
            <option value="Viuvo">Viúvo(a)</option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-1 w-full">
          <GenderIcon width={60} fill="none" stroke="white" />
          <div className="flex justify-around items-center w-full">
            <Button
              className={twMerge(
                "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
                "hover:border-yellow-500 cursor-pointer",
                gender === Selectors.Male && "bg-blue-500 border-blue-600 hover:border-blue-500 hover:text-white"
              )}
              onClick={() => handleGender(Selectors.Male)}
            >
              <h1> Masculino </h1>
            </Button>
            <Button
              className={twMerge(
                "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
                "hover:border-yellow-500 cursor-pointer",
                gender === Selectors.Female && "bg-blue-500 border-blue-600 hover:border-blue-500 hover:text-white"
              )}
              onClick={() => handleGender(Selectors.Female)}
            >
              <h1> Feminino </h1>
            </Button>
          </div>
        </div>
        <Button
          className={twMerge(
            "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
            "hover:border-yellow-500 cursor-pointer"
          )}
          onClick={() => handleSubmit()}
        >
          <h1> CRIAR CLIENTE</h1>
        </Button>
      </div>
      <Button
        className={twMerge(
          "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
          "hover:border-yellow-500 cursor-pointer"
        )}
        onClick={() => props.setCreatorSelect(Creators.Product)}
      >
        <h1> Alternar para: CRIAR PRODUTO </h1>
      </Button>
    </div>
  );
}
