import BorderGlow from "@/components/animations/BorderGlow";
import type { ReactNode } from "react";

/**
 * Standard card with the site's cursor-tracking border glow. The fill is
 * driven by the theme token (--c-surface-strong) so it follows light/dark
 * mode; the cyan glow is the shared brand accent in both themes.
 *
 * Pass padding/height via `className`. For flex layouts inside, wrap the
 * children in your own `flex h-full` element (BorderGlow's root is a grid).
 */
export default function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <BorderGlow
      className={`h-full w-full overflow-hidden rounded-3xl ${className}`}
      edgeSensitivity={30}
      glowColor="34 211 238"
      backgroundColor="var(--c-surface-strong)"
      borderRadius={24}
      glowRadius={35}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={["#22d3ee", "#06b6d4", "#67e8f9"]}
    >
      {children}
    </BorderGlow>
  );
}
