"use client";

import { useState } from "react";

import Logo from "@/components/layout/Logo";

/**
 * Prominent profile image with four styled treatments used across the
 * resume page. Drop a photo at /public/profile.jpg to activate it — until
 * then each treatment falls back to the branded monogram mark in-theme.
 */

const SRC = "/profile_light.png";

type Variant = "hero" | "circle" | "glass" | "mono";

type Props = {
  variant?: Variant;
  className?: string;
  priority?: boolean;
};

function Monogram({ variant }: { variant: Variant }) {
  const mono = variant === "mono";
  return (
    <div
      className={`
        flex h-full w-full items-center justify-center p-[18%]
        ${
          mono
            ? "bg-gradient-to-br from-hairline to-surface"
            : "bg-gradient-to-br from-cyan-500/20 via-[#06121a] to-[#04222b]"
        }
      `}
    >
      <Logo size={160} className="h-full w-full max-h-[70%] max-w-[70%]" />
    </div>
  );
}

export default function ProfileImage({
  variant = "circle",
  className = "",
  priority = false,
}: Props) {
  const [errored, setErrored] = useState(false);

  const grayscale = variant === "mono";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {errored ? (
        <Monogram variant={variant} />
      ) : (
        // Plain <img> (not next/image) so onError can gracefully swap to
        // the monogram when the file hasn't been added yet.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={SRC}
          alt="Mohammed Thoufiq"
          loading={priority ? "eager" : "lazy"}
          onError={() => setErrored(true)}
          className={`
            h-full w-full object-cover
            ${grayscale ? "grayscale contrast-110" : ""}
          `}
        />
      )}
    </div>
  );
}
