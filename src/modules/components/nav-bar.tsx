"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Banner } from "@/modules/components/banner";
import { siteConfig } from "@/siteConfig";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounceCallback, useIsClient } from "usehooks-ts";

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isClient = useIsClient();
  const [isTop, setIsTop] = useState(true);

  const debouncedScrollHandler = useDebounceCallback(
    () => {
      setIsTop(window.scrollY <= 10);
    },
    150,
    {
      maxWait: 150,
    },
  );

  useEffect(() => {
    window.addEventListener("scroll", debouncedScrollHandler);
    debouncedScrollHandler();
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
    };
  }, [debouncedScrollHandler]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const menuItems: {
    label: string;
    href: string;
  }[] = [
    siteConfig.toggle.blog && {
      label: "Blog",
      href: "/blog",
    },
  ].filter(Boolean) as { label: string; href: string }[];

  const isMenuItemActive = (href: string) => {
    console.log(pathname, href);
    return pathname === href;
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-20 w-full ${isTop ? "shadow-none" : "bg-background/80 shadow-sm backdrop-blur-lg"} transition-[box-shadow] duration-200`}
      data-test="navigation"
    >
      <Banner />

      <div className="container">
        <div
          className={`flex items-center justify-stretch gap-6 ${isTop ? "py-8" : "py-4"} transition-[padding] duration-200`}
        >
          <div className="flex flex-1 justify-start">
            <Logo withText className="" />
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            {menuItems.map((menuItem) => (
              <Link
                key={menuItem.href}
                href={menuItem.href}
                className={cn(
                  "block px-3 py-2 text-lg",
                  isMenuItemActive(menuItem.href) ? "font-bold" : "",
                )}
              >
                {menuItem.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">
            {/* <LocaleSwitch /> */}

            <Sheet
              open={mobileMenuOpen}
              onOpenChange={(open) => setMobileMenuOpen(open)}
            >
              <SheetTrigger asChild>
                <Button
                  className="md:hidden"
                  size="icon"
                  variant="outline"
                  aria-label="Menu"
                >
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[250px]" side="right">
                <div className="flex flex-col items-start justify-center">
                  {menuItems.map((menuItem) => (
                    <Link
                      key={menuItem.href}
                      href={menuItem.href}
                      className={cn(
                        "block px-3 py-2 text-lg",
                        isMenuItemActive(menuItem.href) ? "font-bold" : "",
                      )}
                    >
                      {menuItem.label}
                    </Link>
                  ))}

                  <Button variant="dark" asChild>
                    <Link
                      href={"https://github.com/futantan/IndieHackersKit"}
                      target="_blank"
                      className="block px-3 py-2 text-lg"
                    >
                      Submit
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            {isClient && (
              <Button variant="dark" asChild>
                <Link
                  href={"https://github.com/futantan/IndieHackersKit"}
                  target="_blank"
                  className="block px-3 py-2 text-lg"
                >
                  Submit
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
