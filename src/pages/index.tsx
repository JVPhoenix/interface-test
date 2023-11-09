import Login from "@/components/Login";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={twMerge("flex min-h-screen", inter.className)}>
      <Login />
    </main>
  );
}
