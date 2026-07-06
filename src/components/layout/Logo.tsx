/**
 * Personal monogram mark — an "M" formed from distributed nodes, echoing
 * a backend / microservices motif. Used in the navbar and as the profile
 * fallback. Matches /app/icon.svg (the favicon).
 */
export default function Logo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0" stopColor="#0b1620" />
          <stop offset="1" stopColor="#04222b" />
        </linearGradient>
        <linearGradient id="logo-mark" x1="14" y1="18" x2="50" y2="48">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="0.55" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="16"
        fill="url(#logo-bg)"
        stroke="#22d3ee"
        strokeOpacity="0.4"
        strokeWidth="1.5"
      />
      <path
        d="M14 47 V21 L32 40 L50 21 V47"
        fill="none"
        stroke="url(#logo-mark)"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="21" r="3.6" fill="#0891b2" />
      <circle cx="50" cy="21" r="3.6" fill="#67e8f9" />
      <circle cx="32" cy="40" r="3" fill="#22d3ee" />
    </svg>
  );
}
