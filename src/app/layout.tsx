import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { getSEOTags } from "@/lib/seo";
import { cn } from "@/lib/utils";
import { AnalyticsScript } from "@/modules/analytics/plausible";
import { siteConfig } from "@/siteConfig";
import "@/styles/globals.css";
import type { Viewport } from "next";
import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: siteConfig.colors.main,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = getSEOTags({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-poppins text-foreground antialiased",
          poppins.variable,
        )}
      >
        <NextTopLoader color="hsl(var(--primary))" />
        <Providers>
          {children}
          <Toaster position="top-center" />
          <TailwindIndicator />
        </Providers>
        <AnalyticsScript
          domain={
            siteConfig.analytics.domain ||
            new URL(siteConfig.domainName).hostname
          }
          src={siteConfig.analytics.plausibleSrc}
        />
      </body>
    </html>
  );
}
