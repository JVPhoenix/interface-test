import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import DashboardSelect from "@/components/DashboardSelect";
import CreateClient from "@/components/CreateClient";
import CreateProduct from "@/components/CreateProduct";
import { useState } from "react";
import { Creators } from "@/types/types";
import { useLogin } from "@/context/LoginContext";
import Link from "next/link";
import { Button } from "@/components/Button";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [creatorSelect, setCreatorSelect] = useState<Creators | null>(null);
  const { logged } = useLogin();

  if (logged) {
    return (
      <main className={twMerge("flex min-h-screen", inter.className)}>
        {creatorSelect === null ? (
          <DashboardSelect creatorSelect={creatorSelect} setCreatorSelect={setCreatorSelect} />
        ) : creatorSelect === Creators.Client ? (
          <CreateClient setCreatorSelect={setCreatorSelect} />
        ) : (
          creatorSelect === Creators.Product && <CreateProduct setCreatorSelect={setCreatorSelect} />
        )}
      </main>
    );
  } else {
    return (
      <main className={twMerge("flex min-h-screen", "text-blue-500 font-bold", inter.className)}>
        <div className="m-auto">
          <div className="flex items-center justify-center">
            <h1 className="text-9xl font-extrabold text-white tracking-widest select-none">404</h1>
            <h1 className="bg-gray-700 px-2 text-lg rounded rotate-12 absolute select-none">PAGE NOT FOUND</h1>
          </div>
          <Link href="/">
            <Button
              className={twMerge(
                "text-white border-white hover:text-blue-500 hover:scale-110 active:scale-90",
                "hover:border-blue-500 cursor-pointer"
              )}
              onClick={() => null}
            >
              <h1> Página Inicial </h1>
            </Button>
          </Link>
        </div>
      </main>
    );
  }
}
