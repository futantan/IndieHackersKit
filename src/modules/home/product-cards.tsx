/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { allPosts } from "content-collections";

export function ProductCards() {
  return (
    <section className="container max-w-4xl">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden bg-[#FAFAFA]">
            <CardContent className="p-5">
              <div className="mb-4 flex items-center space-x-4">
                <img
                  src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
                  alt={post.title}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </div>
              <p className="mb-4 text-sm text-gray-600">{post.summary}</p>
            </CardContent>
            <CardFooter className="px-6 py-3">
              <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700">
                {post.tag.join(", ")}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
