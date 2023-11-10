import { twMerge } from "tailwind-merge";
import { AmountIcon, BarsCodeIcons, CostIcon, MinimumIcon, NameIcon, PriceIcon } from "./Icons";
import { Button } from "./Button";
import { useState } from "react";
import { CreatorInterface, Creators, Selectors } from "@/types/types";
import { useProductsCreator } from "@/context/ProductContext";

export default function CreateProduct(props: CreatorInterface) {
  const { setProduct } = useProductsCreator();
  const [name, setName] = useState<string>("");
  const [barsCode, setBarsCode] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [amount, setAmount] = useState<string>("0");
  const [minimum, setMinimum] = useState<string>("0");
  const [active, setActive] = useState<boolean>(true);

  const handleCost = (value: string, returnOption: Selectors) => {
    const onlyDigits = value
      .split("")
      .filter((s) => /\d/.test(s))
      .join("")
      .padStart(3, "0");
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    value = maskCurrency(digitsFloat);

    if (returnOption === Selectors.Cost) {
      setCost(value);
    } else if (returnOption === Selectors.Price) {
      setPrice(value);
    } else {
      return;
    }
  };

  const maskCurrency = (valor: any, locale = "pt-BR", currency = "BRL") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(valor);
  };

  const handleSubmit = () => {
    setProduct({
      nome: name,
      codigo: barsCode,
      custo: cost,
      preço: price,
      estoque: amount,
      estoqueMinimo: minimum,
      ativo: active,
    });
    setName("");
    setBarsCode("");
    setCost("");
    setPrice("");
    setAmount("0");
    setMinimum("0");
    setActive(true);
  };

  return (
    <div className="flex flex-col gap-5 items-center w-full m-auto">
      <h1 className="text-white text-2xl response:text-3xl font-bold select-none">INSIRA OS DADOS DO PRODUTO</h1>
      <div className="flex flex-col items-center gap-3 rounded-lg border-2 p-5 w-auto ">
        <div className="flex w-full items-center justify-center gap-1">
          <NameIcon width={60} stroke="white" />
          <input
            type="text"
            placeholder="Nome do Produto"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="flex w-full items-center justify-center gap-1">
          <BarsCodeIcons width={60} fill="none" stroke="white" />
          <input
            type="number"
            placeholder="Número do Código de Barras"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => setBarsCode(e.target.value)}
            value={barsCode}
          />
        </div>

        <div className="flex w-full items-center justify-center gap-1">
          <CostIcon width={60} fill="white" />
          <input
            type="text"
            placeholder="Custo"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => handleCost(e.target.value, Selectors.Cost)}
            value={cost}
          />
        </div>
        <div className="flex w-full items-center justify-center gap-1">
          <PriceIcon width={60} fill="white" />
          <input
            type="text"
            placeholder="Preço"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => handleCost(e.target.value, Selectors.Price)}
            value={price}
          />
        </div>

        <div className="flex w-full items-center justify-center gap-1">
          <AmountIcon width={60} fill="white" />
          <input
            type="number"
            placeholder="Quantidade em Estoque"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="flex w-full items-center justify-center gap-1">
          <MinimumIcon width={60} fill="white" />
          <input
            type="number"
            placeholder="Estoque Mínimo"
            className={twMerge("w-full rounded-lg text-black p-2 border-4 border-white placeholder:text-gray-700")}
            onChange={(e) => setMinimum(e.target.value)}
            value={minimum}
          />
        </div>
        <div className="flex gap-1 select-none items-center">
          <h1>Ativo?</h1>
          <input
            className={twMerge(
              "mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300",
              "before:pointer-events-none before:absolute before:h-3.5 before:w-3.5",
              "before:rounded-full before:bg-transparent before:content-['']",
              "after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full",
              "after:border-none after:bg-neutral-100",
              "after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)]",
              "after:transition-[background-color_0.2s,transform_0.2s] after:content-['']",
              "checked:bg-blue-500 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px]",
              "checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full",
              "checked:after:border-none checked:after:bg-blue-500",
              "checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)]",
              "checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-['']",
              "hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100",
              "focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]",
              "focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1]",
              "focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-['']",
              "checked:focus:border-blue-500 checked:focus:bg-blue-500 checked:focus:before:ml-[1.0625rem]",
              "checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]",
              "checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] bg-neutral-600",
              "after:bg-neutral-400 checked:bg-blue-500 checked:after:bg-blue-500"
            )}
            type="checkbox"
            defaultChecked
            onChange={() => setActive((prevState) => !prevState)}
          />
        </div>
        <Button
          className={twMerge(
            "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
            "hover:border-yellow-500 cursor-pointer"
          )}
          onClick={() => handleSubmit()}
        >
          <h1> CRIAR PRODUTO</h1>
        </Button>
      </div>
      <Button
        className={twMerge(
          "text-white border-white hover:text-yellow-500 hover:scale-110 active:scale-90",
          "hover:border-yellow-500 cursor-pointer"
        )}
        onClick={() => props.setCreatorSelect(Creators.Client)}
      >
        <h1> Alternar para: CRIAR CLIENTE </h1>
      </Button>
    </div>
  );
}
