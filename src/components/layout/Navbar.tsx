export default function Navbar() {
  return (
    <nav className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          Mohammed Thoufiq
        </h1>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}