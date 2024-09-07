"use client";

import Script from "next/script";

export function AnalyticsScript(props: { domain: string; src: string }) {
  return (
    <Script
      defer
      type="text/javascript"
      data-domain={props.domain}
      src={props.src}
    />
  );
}

export function useAnalytics() {
  const trackEvent = (event: string, data?: Record<string, unknown>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
    if (typeof window === "undefined" || !(window as any).plausible) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    (window as any).plausible(event, {
      props: data,
    });
  };

  return {
    trackEvent,
  };
}
