import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ slug: params.slug });
};

export default function PostSlug() {
  const { slug } = useLoaderData();

  return (
    <main>
      <h1 className="text-2xl font-bold">Some Post</h1>
      <p>{slug}</p>
    </main>
  );
}
