"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/siteConfig";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const BANNER_HIDDEN_STORAGE_KEY = "banner-hidden";

export function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(BANNER_HIDDEN_STORAGE_KEY)) {
      setShowBanner(true);
    }
  }, []);

  function hideBanner() {
    localStorage.setItem(BANNER_HIDDEN_STORAGE_KEY, "true");
    setShowBanner(false);
  }

  const bannerContent = siteConfig.bannerContent;

  if (!showBanner || !bannerContent) {
    return null;
  }

  return (
    <div
      className="relative inset-0 bottom-auto bg-primary/10 px-8 py-3 text-center text-sm text-foreground data-[state='open']:block data-[state='closed']:hidden"
      data-test="banner"
    >
      <div>
        <strong>New:</strong> {bannerContent}
      </div>
      <Button
        variant="link"
        onClick={hideBanner}
        className="absolute right-1 top-1"
        aria-label="Hide banner"
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  );
}
