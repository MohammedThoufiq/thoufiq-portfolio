export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-4 md:px-6 py-8 flex justify-between flex-wrap gap-4">
        <p className="text-gray-500 text-sm">
          © 2026 Mohammed Thoufiq
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}