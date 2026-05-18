"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-white/10
        bg-black/80
        backdrop-blur
      "
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold"
          >
            Mohammed Thoufiq
          </Link>

          {/* Desktop Navigation */}
          <div
            className="
              hidden md:flex
              items-center gap-8
              text-sm text-gray-400
            "
          >
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
              href="/case-studies"
              className="hover:text-cyan-400 transition-colors"
            >
              Case Studies
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            className="
              md:hidden
              flex flex-col gap-5
              pb-6
              text-gray-400
            "
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </Link>

            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              Blogs
            </Link>

            <Link
              href="/#experience"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              Experience
            </Link>

            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}