'use client'
import { useActionState, startTransition } from "react";
import * as actions from '@/actions'

export default function SnippetsCreatePage() {

  const [formState,action] = useActionState(actions.createSnippets,{message:''})
 
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      startTransition(() => {
        action(formData);
      });
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="code" className="w-12">
              Title
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <button type="submit" className="border rounded  text-amber-300">
            create
          </button>
        </div>
        <div>{formState.message}</div>
      </form>
    </>
  );
}
