import { type ReactNode } from "react";

export function HeroCentered(props: {
  title: string | ReactNode;
  description: string;
}) {
  return (
    <div className="container">
      <div className="relative isolate">
        <div className="mx-auto max-w-2xl pb-8 pt-10 lg:pt-20">
          <div className="text-center">
            {/* <PoweredByBadge /> */}
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {props.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/60">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
