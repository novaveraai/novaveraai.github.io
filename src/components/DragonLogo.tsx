import Image from "next/image";

type Letter = "N" | "O" | "S" | "A" | "D";

interface DragonLogoProps {
  letter: Letter;
  size?: number;
  accent?: boolean;
  className?: string;
  label?: string;
}

const logoFiles: Record<Letter, string> = {
  N: "/logos/nova-vera.webp",
  O: "/logos/ordumind.webp",
  S: "/logos/dragon-sentinel.webp",
  A: "/logos/ordumind.webp",
  D: "/logos/dragon-sentinel.webp",
};

export default function DragonLogo({
  letter,
  size = 40,
  accent = true,
  className = "",
  label,
}: DragonLogoProps) {
  const src = logoFiles[letter];
  const alt = label ?? `${letter} logo`;

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-full w-full object-contain"
        priority={letter === "N"}
      />
    </span>
  );
}