"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

import { highlights } from "@/data/resume";
import GlowCard from "@/components/ui/GlowCard";

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}</span>;
}

/**
 * "Key Highlights" band — recruiter-scannable proof points from the résumé,
 * rendered as animated stat tiles. Theme-aware.
 */
export default function Highlights() {
  return (
    <section aria-label="Key highlights" className="py-10">
      <GlowCard className="p-6 md:p-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {highlights.map((stat, i) => {
          const isNumeric = /^\d+$/.test(stat.value);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-accent md:text-4xl">
                {isNumeric ? <CountUp to={Number(stat.value)} /> : stat.value}
                {stat.suffix}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
      </GlowCard>
    </section>
  );
}
