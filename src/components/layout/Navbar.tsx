"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 30
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor:
          scrolled
            ? "rgba(0,0,0,0.75)"
            : "rgba(0,0,0,0)",

        backdropFilter:
          scrolled
            ? "blur(20px)"
            : "blur(0px)",
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        sticky
        top-0
        z-50
        border-b
        transition-colors
        ${
          scrolled
            ? "border-white/10"
            : "border-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-5">

          {/* Logo */}

          <Link
            href="/"
            className="
              text-lg
              font-semibold
              transition-colors
              hover:text-cyan-400
            "
          >
            Mohammed Thoufiq
          </Link>

          {/* Desktop */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-8
              text-sm
            "
          >
            {navLinks.map(
              (link) => (
                <Link
                  key={
                    link.href
                  }
                  href={
                    link.href
                  }
                  className={`
                    relative
                    transition-colors
                    duration-300

                    ${
                      pathname ===
                      link.href
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }

                    hover:text-cyan-400
                  `}
                >
                  {
                    link.label
                  }

                  {pathname ===
                    link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="
                        absolute
                        -bottom-2
                        left-0
                        right-0
                        h-[2px]
                        rounded-full
                        bg-cyan-400
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                      }}
                    />
                  )}
                </Link>
              )
            )}
          </div>

          {/* Mobile Button */}

          <button
            className="
              md:hidden
            "
            onClick={() =>
              setIsOpen(
                !isOpen
              )
            }
          >
            {isOpen ? (
              <X
                size={
                  24
                }
              />
            ) : (
              <Menu
                size={
                  24
                }
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              md:hidden
              flex
              flex-col
              gap-5
              pb-6
            "
          >
            {navLinks.map(
              (link) => (
                <Link
                  key={
                    link.href
                  }
                  href={
                    link.href
                  }
                  onClick={() =>
                    setIsOpen(
                      false
                    )
                  }
                  className={`
                    transition-colors

                    ${
                      pathname ===
                      link.href
                        ? "text-cyan-400"
                        : "text-gray-400"
                    }
                  `}
                >
                  {
                    link.label
                  }
                </Link>
              )
            )}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}