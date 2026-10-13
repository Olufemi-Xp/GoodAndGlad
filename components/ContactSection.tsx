import { contact, whatsappLink } from "../content/site";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <p className="eyebrow eyebrow--light">A good place to begin</p>
        <h2 id="contact-title">Find something<br /><em>to feel good in.</em></h2>
        <p className="contact-lede">Tell us what you have in mind. We’ll be glad to help you explore what’s available.</p>
        <div className="contact-actions">
          <a className="button button--cream" href={whatsappLink()}>Start a WhatsApp chat <span aria-hidden="true">↗</span></a>
          <a className="contact-email" href={`mailto:${contact.email}?subject=${encodeURIComponent("An enquiry for Good & Glad")}`}>or email us at {contact.email}</a>
        </div>
        <span className="contact-ornament" aria-hidden="true">✳</span>
      </div>
    </section>
  );
}
