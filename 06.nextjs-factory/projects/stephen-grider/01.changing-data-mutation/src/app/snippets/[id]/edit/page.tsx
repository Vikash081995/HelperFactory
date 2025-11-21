import SnippetEditForm from "@/components/snippets-edit-form";
import { db } from "@/db";

interface SnippetEditProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditProps) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
