import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { whatsappLink } from "../../content/site";

export const metadata = {
  title: "About Good & Glad | Premium luxury goods, glad customers",
  description: "Meet Good & Glad, a boutique for perfumes, bags, shoes, and thoughtful accessories for women and children.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <section className="about-hero section-wrap">
          <div className="about-hero__copy">
            <p className="eyebrow">A little about Good &amp; Glad</p>
            <h1>Premium luxury goods,<br /><em>glad customers.</em></h1>
            <p>Good &amp; Glad is a boutique for beautiful things that bring a little joy to everyday life and special occasions.</p>
            <a className="button button--wine" href={whatsappLink("Hello Good & Glad, I would love to learn more about your collections.")}>Talk with us <span aria-hidden="true">↗</span></a>
          </div>
          <div className="about-hero__image">
            <Image src="/media/perfume-editorial.jpg" alt="Representative fragrance image for Good & Glad" fill priority sizes="(max-width: 760px) 90vw, 50vw" />
            <span>Beautiful details, thoughtfully found</span>
          </div>
        </section>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-story__inner section-wrap">
            <p className="eyebrow">Our approach</p>
            <h2 id="about-story-title">A thoughtful edit<br /><em>for you and yours.</em></h2>
            <div className="about-story__body">
              <p>We bring together perfumes, bags, shoes, women’s hair and beauty accessories, and children’s accessories. Whether you know exactly what you want or are still exploring, our team is happy to help with your inquiry.</p>
              <p>Our website is a place to explore and ask. Product availability and prices can change, so contact us directly and we’ll confirm the details with you.</p>
            </div>
          </div>
        </section>

        <section className="about-help section-wrap" aria-labelledby="about-help-title">
          <div>
            <p className="eyebrow">Personal service</p>
            <h2 id="about-help-title">A conversation<br /><em>makes it personal.</em></h2>
          </div>
          <div className="about-help__copy">
            <p>Ask about a product, check current availability and pricing, or send us a note describing what you’re looking for. We’ll help you explore the options available.</p>
            <a className="button button--wine" href={whatsappLink()}>Make an enquiry <span aria-hidden="true">↗</span></a>
            <Link className="underlined-link" href="/#collections">Explore the collections <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
