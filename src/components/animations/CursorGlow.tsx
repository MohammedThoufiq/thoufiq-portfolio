"use client";

import {
  useEffect,
  useRef,
} from "react";

export default function CursorGlow() {
  const glowRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable for touch devices

    if (
      window.matchMedia(
        "(pointer: coarse)"
      ).matches
    ) {
      return;
    }

    let mouseX =
      window.innerWidth / 2;

    let mouseY =
      window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const handleMove = (
      e: MouseEvent
    ) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    let animationFrame: number;

    const animate = () => {
      currentX +=
        (mouseX - currentX) * 0.12;

      currentY +=
        (mouseY - currentY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${currentX - 150}px, ${
            currentY - 150
          }px,0)`;
      }

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
  <div
    ref={glowRef}
    className="
      fixed
      left-0
      top-0

      w-[300px]
      h-[300px]

      rounded-full

      pointer-events-none

      z-0

      hidden
      md:block
    "
    style={{
      background:
        "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.08) 35%, transparent 75%)",
      filter: "blur(60px)",
      willChange: "transform",
    }}
  />
);
}