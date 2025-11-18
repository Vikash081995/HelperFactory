import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map(
    (snippet: { id: string; title: string }) => {
      return (
        <Link href={`/snippets/${snippet.id}`} key={snippet.id}>
          {snippet.title}
        </Link>
      );
    }
  );

  return (
    <div>
      <div>
        <h1>Snippets</h1>
        <Link href="/snippets/new">New</Link>
      </div>
      {renderedSnippets}
    </div>
  );
}
