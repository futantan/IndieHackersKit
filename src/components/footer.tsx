import Link from "next/link";

import { Logo } from "@/components/logo";
import { siteConfig } from "@/siteConfig";

const links: Array<{ href: string; label: string }> = [];

export function Footer() {
  return (
    <footer className="bg-muted py-12 text-muted-foreground">
      <div className="container grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div>
          <Logo withText />
          <p className="mt-3 text-sm opacity-70">
            © {new Date().getFullYear()} {siteConfig.slogan}. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block">
              {link.label}
            </Link>
          ))}
        </div>

        {/* <div className="flex flex-col gap-2">
          <Link href="/legal/privacy-policy" className="block">
            Privacy policy
          </Link>

          <Link href="/legal/tos" className="block">
            Terms and conditions
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
