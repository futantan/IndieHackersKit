/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-6a97ef78a5dd450398fce26f09b262ab.r2.dev",
        port: "",
        pathname: "/screenshots/**",
      },
      {
        protocol: "https",
        hostname: "backup15.terasp.net",
        port: "",
        pathname: "/api/screenshot/**", // Updated pathname
      },
    ],
  },
};

export default config;
