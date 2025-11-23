import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const render = snippets.map((item) => {
    return (
      <Link
        key={item.id}
        href={`snippets/${item.id}`}
        className="border rounded p-4 flex justify-between items-center cursor-pointer hover:bg-sky-700"
      >
        <div>{item.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="my-2 text-xl font-bold">Home page</h1>
        <Link
          href="/snippets/new"
          className=" py-2 px-4  border rounded cursor-pointer hover:bg-sky-700"
        >
          New
        </Link>
      </div>
      <div className="my-4 flex flex-col gap-4">{render}</div>
    </div>
  );
}
