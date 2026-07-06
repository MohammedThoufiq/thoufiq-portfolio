export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="max-w-6xl mx-auto px-4 md:px-4 md:px-6 py-8 flex justify-between flex-wrap gap-4">
        <p className="text-faint text-sm">
          © 2026 Mohammed Thoufiq
        </p>

        <div className="flex gap-6 text-sm text-muted">
          <a
            href="https://github.com/MohammedThoufiq"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-thoufiq-s/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}