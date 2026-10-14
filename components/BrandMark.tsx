import Link from "next/link";

type BrandMarkProps = { light?: boolean };

export default function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <Link className={`brand-mark${light ? " brand-mark--light" : ""}`} href="/" aria-label="Good & Glad home">
      <span className="brand-mark__name">Good <i>&amp;</i> Glad</span>
      <svg className="brand-mark__star" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 1.5 11.8 8.2 18.5 10l-6.7 1.8L10 18.5l-1.8-6.7L1.5 10l6.7-1.8L10 1.5Z" fill="currentColor" />
      </svg>
    </Link>
  );
}
