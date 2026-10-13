import BrandMark from "./BrandMark";
import { contact, whatsappLink } from "../content/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandMark light />
      <span className="footer-note">A thoughtful find. A good feeling.</span>
      <div className="footer-links">
        <a href={whatsappLink()}>WhatsApp · {contact.phoneDisplay}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <small>© Good &amp; Glad</small>
    </footer>
  );
}
