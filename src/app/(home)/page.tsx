import { Hero } from "@/modules/home/hero";
import { ProductCards } from "@/modules/home/product-cards";

export default async function Page() {
  return (
    <>
      <Hero />
      <ProductCards />
    </>
  );
}
