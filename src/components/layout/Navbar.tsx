"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

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
            className="
              text-lg
              font-semibold
              hover:text-cyan-400
              transition-colors
            "
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  hover:text-cyan-400
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden
              text-white
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              md:hidden
              flex flex-col gap-5
              pb-6
              text-gray-400
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  hover:text-cyan-400
                  transition-colors
                "
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}