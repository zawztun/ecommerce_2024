import { Header } from "@/app/components/Header";
import Image from "next/image";
import { ProductList } from "./components/ProductList";

export default function Home() {
  return (
    <main className="bg-bg-bg h-[100vh] w-full">
      <Header />
      <div className="w-[90%] md:w-[70%] mx-auto mx">
        <ProductList />
      </div>
    </main>
  );
}
