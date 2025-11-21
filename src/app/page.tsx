import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const render = snippets.map((item) => {
    return (
      <Link
        key={item.id}
        href={`snippets/${item.id}`}
        className="border rounded p-4 flex justify-between items-center"
      >
        <div>{item.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div className="p-8">
      <h1 className="my-2 text-xl font-bold">Home page</h1>
      <div className="my-4 flex flex-col gap-4">{render}</div>
    </div>
  );
}
