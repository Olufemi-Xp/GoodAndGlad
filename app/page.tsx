import Image from "next/image";
import Link from "next/link";
import CollectionGrid from "../components/CollectionGrid";
import ContactSection from "../components/ContactSection";
import Gallery from "../components/Gallery";
import ShoppingAssistant from "../components/ShoppingAssistant";
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
          <iframe
            className="hero__video"
            src="https://player.vimeo.com/video/1235733342?context=Vimeo%5CController%5CApi%5CResources%5CVideoController.&h=945ceea5b2&s=deccef6bd961b1179ed2a0b5241602f0a6a6873c_1792063617&background=1"
            title="Good & Glad luxury goods background video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            aria-hidden="true"
            tabIndex={-1}
          />
          <div className="hero__shade" />
          <div className="hero__copy">
            <p className="hero__brand">GOOD &amp; GLAD</p>
            <h1 id="hero-title">Premium luxury goods,<br /><em>glad customers.</em></h1>
            <p className="hero__lede">A considered selection of beautiful things for you and the people you love.</p>
            <div className="hero__actions">
              <a className="button button--light" href="#collections">Explore the collections <span aria-hidden="true">↓</span></a>
              <a className="hero__text-link" href={whatsappLink()}>Ask us a question <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <p className="hero__caption">A GOOD FIND. A GLAD FEELING.</p>
        </section>

        <section className="welcome section-wrap" aria-labelledby="welcome-title">
          <div className="welcome__label"><span>Good &amp; Glad</span><span>Thoughtfully found</span></div>
          <div className="welcome__copy">
            <h2 id="welcome-title">Little luxuries.<br /><em>Lovely feelings.</em></h2>
            <p>Discover perfumes, bags, shoes and thoughtful accessories for women and children. Browse our edit, then message us to ask what is currently available and what it costs.</p>
            <Link className="underlined-link" href="/about">A little about us <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="welcome__image">
            <Image src="/media/craft-bag.jpg" alt="Representative detail of an embossed leather bag" fill sizes="(max-width: 760px) 90vw, 40vw" />
          </div>
        </section>

        <section className="collections-section section-wrap" id="collections" aria-labelledby="collections-title">
          <div className="section-heading">
            <div><p className="eyebrow">Find your favourite</p><h2 id="collections-title">The collections</h2></div>
            <p>From a favourite fragrance to the finishing detail, find something that feels like you. Ask us about current availability and pricing.</p>
          </div>
          <CollectionGrid />
        </section>

        <section className="service-band" id="services" aria-labelledby="service-title">
          <p className="eyebrow eyebrow--light">A personal touch</p>
          <h2 id="service-title">Tell us what<br /><em>you have in mind.</em></h2>
          <p>Looking for a gift, a particular style, or a little help choosing? Send us a note and we’ll be glad to help with your inquiry.</p>
          <a className="button button--light" href={whatsappLink("Hello Good & Glad, I am looking for something special. Could you please help me explore what is currently available?")}>Share what you’re looking for <span aria-hidden="true">↗</span></a>
        </section>

        <section className="gallery-section section-wrap" id="gallery" aria-labelledby="gallery-title">
          <div className="section-heading">
            <div><p className="eyebrow">A little inspiration</p><h2 id="gallery-title">The feeling of it</h2></div>
            <p>Representative imagery for inspiration. Please ask us about actual products and current availability.</p>
          </div>
          <Gallery />
        </section>
        <VideoShowcase />
        <ContactSection />
      </main>
      <SiteFooter />
      <ShoppingAssistant />
    </>
  );
}
