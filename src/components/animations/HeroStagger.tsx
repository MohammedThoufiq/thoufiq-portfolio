"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { ReactNode } from "react";

import { cubicBezier } from "framer-motion";

type Props = {
  children: ReactNode;
};

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export function HeroStagger({
  children,
}: Props) {
  const reduceMotion =
    useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({
  children,
}: Props) {
  return (
    <motion.div variants={item}>
      {children}
    </motion.div>
  );
}