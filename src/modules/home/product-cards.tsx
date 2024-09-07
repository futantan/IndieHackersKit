import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface Product {
  icon: string;
  name: string;
  description: string;
  tag: string;
}

const products: Product[] = [
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
  {
    icon: "/icons/vercel.png",
    name: "Vercel",
    description:
      "Vercel is a cloud platform for building modern web applications. It provides a comprehensive set of tools for building, deploying, and scaling web applications.",
    tag: "Deployment",
  },
];

export function ProductCards() {
  return (
    <section className="container max-w-4xl">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden bg-[#FAFAFA]">
            <CardContent className="p-5">
              <div className="mb-4 flex items-center space-x-4">
                <Image
                  src={product.icon}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="px-6 py-3">
              <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700">
                {product.tag}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
