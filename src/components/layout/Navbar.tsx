import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-lg font-semibold">
          Mohammed Thoufiq
        </h1>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
  <Link
    href="/"
    className="hover:text-cyan-400 transition-colors"
  >
    Home
  </Link>
  <Link
    href="/projects"
    className="hover:text-cyan-400 transition-colors"
  >
    Projects
  </Link>
  <Link
    href="/blogs"
    className="hover:text-cyan-400 transition-colors"
  >
    Blogs
  </Link>
  <Link
  href="/#experience"
  className="hover:text-cyan-400 transition-colors"
>
  Experience
</Link>

<Link
  href="/#contact"
  className="hover:text-cyan-400 transition-colors"
>
  Contact
</Link>
        </div>
      </div>
    </nav>
  );
}