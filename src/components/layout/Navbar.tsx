"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import GooeyNav from "@/components/animations/GooeyNav";

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
        fixed
  top-0
  left-0
  right-0
  z-[9999]
  w-full
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
              text-base
              md:text-lg
              font-semibold
              transition-colors
              hover:text-cyan-400
              shrink-0
            "
          >
            Mohammed Thoufiq
          </Link>

          {/* Desktop Gooey Navigation */}

          <div
  className="
    hidden
    md:flex
    items-center
    ml-auto
  "
>
  <GooeyNav
    items={navLinks}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    animationTime={600}
    timeVariance={350}
    colors={[1, 2, 3, 2, 1]}
  />
</div>

          {/* Mobile Toggle */}

          <button
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
            className="md:hidden"
            onClick={() =>
              setIsOpen(
                !isOpen
              )
            }
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
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
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                md:hidden
                flex
                flex-col
                gap-3
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
                      px-4
                      py-3

                      rounded-xl

                      transition-all

                      ${
                        pathname ===
                        link.href
                          ? `
                            bg-cyan-400
                            text-black
                          `
                          : `
                            text-gray-400
                            hover:text-cyan-400
                            hover:bg-white/5
                          `
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
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}