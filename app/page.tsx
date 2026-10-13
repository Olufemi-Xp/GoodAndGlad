import Image from "next/image";
import CollectionGrid from "../components/CollectionGrid";
import ContactSection from "../components/ContactSection";
import Gallery from "../components/Gallery";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import VideoShowcase from "../components/VideoShowcase";
import { whatsappLink } from "../content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">The good things, thoughtfully found</p>
            <h1 id="hero-title">Everyday,<br /><em>extraordinary.</em></h1>
            <p className="hero__lede">A considered edit of beautiful things to wear, carry and keep close. Find a little something that feels like you.</p>
            <div className="hero__actions">
              <a className="button button--green" href="#collections">Explore the edit <span aria-hidden="true">↓</span></a>
              <a className="text-link" href={whatsappLink()}>Make an enquiry <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero__seal" aria-hidden="true"><span>GOOD<br />THINGS<br />FOUND</span><i>✳</i></div>
          </div>
          <div className="hero__art" aria-label="Good & Glad — a thoughtful find, a good feeling">
            <div className="hero__image-frame">
              <Image src="/media/supplied/perfume-display.jpg" alt="A warmly lit display of perfume bottles" fill priority sizes="(max-width: 680px) 90vw, (max-width: 900px) 50vw, 42vw" />
            </div>
            <span className="hero__image-note">A THOUGHTFUL EDIT</span>
            <span className="hero__caption">GOOD THINGS, BEAUTIFULLY FOUND</span>
            <span className="hero__spark hero__spark--one" aria-hidden="true">✳</span><span className="hero__spark hero__spark--two" aria-hidden="true">✧</span>
          </div>
          <a className="hero__scroll" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="intro-section section-wrap" id="about" aria-labelledby="about-title">
          <div className="intro-section__marker"><span>01</span><span>OUR POINT OF VIEW</span></div>
          <div className="intro-section__body">
            <p className="eyebrow">A little more meaning in the everyday</p>
            <h2 id="about-title">Luxury is how<br />it <em>makes you feel.</em></h2>
            <div className="intro-section__details">
              <p>At Good &amp; Glad, we believe the right detail can change the feeling of a whole day. A favourite scent. A bag that goes everywhere. Shoes you feel yourself in.</p>
              <p>We bring together a thoughtful selection of perfumes, bags, shoes and useful little luxuries. Tell us what you’re looking for and we’ll help you find a good fit.</p>
            </div>
          </div>
          <div className="intro-section__stamp" aria-hidden="true"><span>GOOD</span><span className="stamp-star">✳</span><span>&amp; GLAD</span></div>
        </section>

        <section className="collections-section section-wrap" id="collections" aria-labelledby="collections-title">
          <div className="section-heading">
            <div><p className="eyebrow">A few lovely things</p><h2 id="collections-title">The <em>edit.</em></h2></div>
            <p>Explore a few of the things we love. Availability can change, so get in touch and ask us what’s here.</p>
          </div>
          <CollectionGrid />
        </section>

        <section className="service-band" id="services" aria-labelledby="service-title">
          <div className="service-band__inner">
            <span className="service-band__ornament" aria-hidden="true">✳</span>
            <p className="eyebrow">Personal, from the first hello</p>
            <h2 id="service-title">A lovely find<br /><em>starts with a conversation.</em></h2>
            <p>Looking for a gift, a particular fragrance or something just for you? Tell us what you need. We’ll share what’s currently available and help you make your choice.</p>
            <a className="text-link text-link--light" href={whatsappLink("Hello Good & Glad, I’m looking for a little help choosing something. Can you tell me what’s currently available?")}>Tell us what you’re looking for <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="gallery-section section-wrap" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading section-heading--gallery">
            <div><p className="eyebrow">A little inspiration</p><h2 id="gallery-title">The feeling <em>of it.</em></h2></div>
            <p>Beautiful things for everyday life and the moments worth celebrating.</p>
          </div>
          <p className="stock-note">A look at the Good &amp; Glad picture collection</p>
          <Gallery />
        </section>

        <VideoShowcase />

        <section className="promise-strip" aria-label="Good & Glad values">
          <span>Thoughtfully chosen</span><i aria-hidden="true">✳</i><span>Made for your everyday</span><i aria-hidden="true">✳</i><span>Always glad to help</span>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
