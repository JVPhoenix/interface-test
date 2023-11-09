import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import DashboardSelect from "@/components/DashboardSelect";
import CreateClient from "@/components/CreateClient";
import CreateProduct from "@/components/CreateProduct";
import { useState } from "react";
import { Creators } from "@/types/types";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  const [creatorSelect, setCreatorSelect] = useState<Creators | null>(null);

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
}
