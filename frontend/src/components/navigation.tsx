import Link from "next/link";

export default function Navigation() {
  return (
    <div className="p-8">
      <Link href={"/"} className="p-2">
        Home
      </Link>
      <Link href={"/about-us"} className="p-2">
        About us
      </Link>
      <Link href={"/snippets"} className="p-2">
        Snippets App
      </Link>
      <Link href={"/snippets-obs"} className="p-2">
        Snippets Obs
      </Link>
      <Link href={"/reddit"} className="p-2">
        Reddit
      </Link>
    </div>
  );
}
