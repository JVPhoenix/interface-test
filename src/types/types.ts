import { Dispatch, SetStateAction } from "react";

export type ClientCreatorType = {
  nome: string;
  telefone: string;
  endereço: string;
  estadoCivil: string;
  genero: Selectors | null;
};

export type ProductsCreatorType = {
  nome: string;
  codigo: string;
  custo: string;
  preço: string;
  estoque: string;
  estoqueMinimo: string;
  ativo: boolean;
};

export type LoginType = {
  username: string;
  password: string;
};

export enum Selectors {
  Male = "Masculino",
  Female = "Feminino",
  Cost = "Cost",
  Price = "Price",
}

export enum Creators {
  Client = 0,
  Product = 1,
}

export interface CreatorInterface {
  creatorSelect?: Creators | null;
  setCreatorSelect: Dispatch<SetStateAction<Creators | null>>;
}
