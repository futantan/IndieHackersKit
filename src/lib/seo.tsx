import { siteConfig } from "@/siteConfig";
import type { Metadata } from "next";

// These are all the SEO tags you can add to your pages.
// It prefills data with default title/description/OG, etc.. and you can cusotmize it for each page.
// It's already added in the root layout.js so you don't have to add it to every pages
// But I recommend to set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)
export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
}: Metadata = {}): Metadata => {
  return {
    // up to 50 characters (what does your app do for the user?) > your main should be here
    title: title || siteConfig.appName,
    // up to 160 characters (how does your app help the user?)
    description: description || siteConfig.appDescription,
    // some keywords separated by commas. by default it will be your app name
    keywords: keywords || siteConfig.keywords || [siteConfig.appName],
    applicationName: siteConfig.appName,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : siteConfig.domainName,
    ),

    openGraph: {
      title: openGraph?.title || siteConfig.appName,
      description: openGraph?.description || siteConfig.appDescription,
      url: openGraph?.url || siteConfig.domainName,
      siteName: siteConfig.appName || "",
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${config.domainName}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      title: openGraph?.title || siteConfig.appName,
      description: openGraph?.description || siteConfig.appDescription,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: "summary_large_image",
    },
  };
};
