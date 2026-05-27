import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="max-w-2xl text-center">
        <h1 className="font-display text-[20vw] font-extrabold leading-none tracking-tighter md:text-[180px]">
          404
        </h1>
        <p className="mt-4 text-text-secondary">
          Looks like you&apos;ve ventured somewhere that doesn&apos;t exist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full bg-accent px-8 font-mono text-xs uppercase tracking-[0.2em] text-white"
          >
            Go Home
          </Link>
          <Link
            href="/work"
            className="inline-flex h-12 items-center rounded-full border border-text-primary px-8 font-mono text-xs uppercase tracking-[0.2em]"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
}
