import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const render = snippets.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return (
    <div>
      <h1>Home page</h1>
      <ul>{render}</ul>
    </div>
  );
}
