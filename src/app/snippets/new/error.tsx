"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => {};
}
export default function CreateSnippetErrorPage({ error }: ErrorPageProps) {
  return (
    <div className="mx-auto w-5/6">
      <div className="border rounded bg-red-200 text-red-600 p-2 px-4">
        {error.message}
      </div>
    </div>
  );
}
