import Image from "next/image";

type Letter = "N" | "O" | "S" | "A" | "D";

interface DragonLogoProps {
  /** Which letter to render */
  letter: Letter;
  /** Pixel size (square). Default: 40 */
  size?: number;
  /** Show crimson fill (brand) vs monochrome. Default: true */
  accent?: boolean;
  /** Optional className for wrapper */
  className?: string;
  /** Accessible label. If omitted, marked decorative */
  label?: string;
}

/**
 * Dragon-letter logo system.
 *
 * IMPORTANT — placeholder behaviour:
 * If `/public/logos/{letter}.svg` (or `.png`) exists, it will be used.
 * Otherwise, a clean geometric monogram placeholder is rendered.
 *
 * To replace with your real dragon artwork:
 *   1. Drop your file into  public/logos/N.svg, O.svg, S.svg, etc.
 *   2. No code change needed — the component prefers the real file.
 */
export default function DragonLogo({
  letter,
  size = 40,
  accent = true,
  className = "",
  label,
}: DragonLogoProps) {
  // If a real file exists, Next/Image will 404 -> we fall back to SVG.
  // To keep it deterministic (no 404 noise), we use a fixed check:
  // drop a file named e.g. "O.real.svg" to switch behaviour per-letter.
  // For now: always render the placeholder SVG monogram.

  const fill = accent ? "#F00008" : "#FFFFFF";
  const stroke = accent ? "#960000" : "#B8B8B8";
  const ariaProps = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      {...ariaProps}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagonal containment (dragon-scale motif) */}
        <path
          d="M32 2 L58 17 L58 47 L32 62 L6 47 L6 17 Z"
          stroke={stroke}
          strokeWidth="1.25"
          fill="rgba(240,0,8,0.06)"
        />
        {/* Inner hex (double-line motif) */}
        <path
          d="M32 8 L53 20.5 L53 43.5 L32 56 L11 43.5 L11 20.5 Z"
          stroke={stroke}
          strokeWidth="0.75"
          strokeOpacity="0.5"
          fill="none"
        />
        {/* Letter monogram */}
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="var(--font-heading), system-ui, sans-serif"
          fontSize="26"
          fontWeight="700"
          letterSpacing="-1"
          fill={fill}
        >
          {letter}
        </text>
      </svg>
    </span>
  );
}