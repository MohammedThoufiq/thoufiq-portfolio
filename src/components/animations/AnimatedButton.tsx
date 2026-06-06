"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
};

export default function AnimatedButton({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}