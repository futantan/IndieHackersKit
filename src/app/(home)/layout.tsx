import { Footer } from "@/components/footer";
import { NavBar } from "@/modules/components/nav-bar";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-28">{children}</main>
      <Footer />
    </>
  );
}
