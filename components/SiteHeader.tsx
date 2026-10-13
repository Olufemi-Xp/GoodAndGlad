import BrandMark from "./BrandMark";
import { whatsappLink } from "../content/site";

const links = [
  ["About", "#about"],
  ["Collections", "#collections"],
  ["Gallery", "#gallery"],
  ["Our service", "#services"],
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href={whatsappLink()}>Enquire <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a href="#contact">Contact us</a>
        </nav>
      </details>
    </header>
  );
}
