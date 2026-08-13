export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] py-10 dark:border-white/[.08]">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Kang JiYeon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
