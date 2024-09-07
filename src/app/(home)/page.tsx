import { Hero } from "@/modules/home/hero";
import { ToolsList } from "@/modules/home/tools-list";

export default async function Page() {
  return (
    <>
      <Hero />
      <ToolsList />
    </>
  );
}
