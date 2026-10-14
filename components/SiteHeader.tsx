import Link from "next/link";
import BrandMark from "./BrandMark";
import { whatsappLink } from "../content/site";

const links = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Collections", "/#collections"],
  ["Contact", "/#contact"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="header-cta" href={whatsappLink()}>Make an enquiry <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation menu"><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <a href={whatsappLink()}>Make an enquiry</a>
        </nav>
      </details>
    </header>
  );
}
