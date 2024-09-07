# sass-start-kit

This repo is from [T3 Stack](https://create.t3.gg/) and changed for my own use.

- [Next.js](https://nextjs.org)
- [Auth.js | Authentication for the Web](https://authjs.dev/)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

It was https://tx.shadcn.com/ but contentlayer is deprecated so I switched back to the original T3 Stack and create my own.

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Copy `.env.example` to `.env.local` and update the variables.

```sh
cp .env.example .env.local
```

3. Start the development server:

```sh
pnpm dev
```

## DB

Use [Neon](https://neon.tech/) for the database, but for local development, you can use Docker.

```sh
docker pull postgres:latest
docker run --name some-postgres -e POSTGRES_PASSWORD=my-secret-pw -p 5432:5432 -d postgres:latest
```

then use `DATABASE_URL="postgresql://postgres:my-secret-pw@localhost:5432/postgres"`

## Stripe

Stripe was removed in this [commit](https://github.com/futantan/sass-start-kit/commit/c22d45ce1b964cd202bb75dfedbd412f0e3b24fa)

## Auth

Here we use NextAuth with Discord as example

1. Go to https://discord.com/developers/applications and create a new application
2. set callback url to `http://localhost:3000/api/auth/callback/discord`

For simplicity, I added the client id and secret to `.env.example` remember to replace them with your own.
