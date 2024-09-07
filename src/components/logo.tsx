import { cn } from "@/lib/utils";
import { siteConfig } from "@/siteConfig";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: string;
  withText?: boolean;
  className?: string;
}

export function Logo({ size = "w-7 h-7", withText, className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-row items-end justify-start ",
        withText && "gap-3",
        className,
      )}
    >
      <div className={cn("relative", size)}>
        <Image src="/logo.png" alt="Logo" fill priority />
      </div>
      {withText && (
        <p className="text-lg font-semibold">{siteConfig.appName}</p>
      )}
    </Link>
  );
}
