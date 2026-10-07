import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-serif text-4xl">That page is not in the guide.</h1>
      <Link href="/" className="mt-4 inline-block text-sm underline">
        Back to the index
      </Link>
    </div>
  );
}
