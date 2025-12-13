import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-white">
      <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-white">Page Not Found</h2>
      <p className="mb-6 text-white">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded bg-accent text-white font-medium shadow transition-all hover:brightness-95"
      >
        Go Home
      </Link>
    </main>
  );
}
