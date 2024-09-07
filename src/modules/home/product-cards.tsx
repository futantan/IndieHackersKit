/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { allTools } from "content-collections";

export function ProductCards() {
  return (
    <section className="container max-w-[900px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allTools.map((tool, index) => (
          <Card
            key={index}
            className="cursor-pointer rounded-md border-gray-300 bg-[#FAFAFA] shadow-none hover:bg-gray-100"
          >
            <CardContent className="p-5">
              <div className="mb-4 flex items-center space-x-4">
                <div className="h-9 w-9 rounded-md border border-gray-300 bg-white p-1">
                  <img
                    src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
                    alt={tool.title}
                    width={28}
                    height={28}
                  />
                </div>
                <h3 className="text-xl font-semibold">{tool.title}</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">{tool.summary}</p>
            </CardContent>
            <CardFooter className="px-5 py-3">
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs font-normal text-gray-500"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
