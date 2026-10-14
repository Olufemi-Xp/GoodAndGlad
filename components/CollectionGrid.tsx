import Image from "next/image";
import { collections, whatsappLink } from "../content/site";

export default function CollectionGrid() {
  return (
    <div className="collection-grid">
      {collections.map((item, index) => (
        <article className="collection-card" key={item.name}>
          <a className="collection-card__image" href={whatsappLink(`Hello Good & Glad, I am interested in ${item.name.toLowerCase()}. Is this still available, and could you please share the price?`)} aria-label={`Ask about ${item.name}`}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 680px) 90vw, (max-width: 1000px) 45vw, 30vw" />
            <span className="collection-card__count">0{index + 1}</span>
          </a>
          <div className="collection-card__body">
            <div>
              <h3>{item.name}</h3>
              <p>{item.note}</p>
              <span className="collection-card__disclaimer">Representative imagery · availability varies</span>
            </div>
            <a className="collection-card__action" href={whatsappLink(`Hello Good & Glad, I am interested in ${item.name.toLowerCase()}. Is this still available, and could you please share the price?`)}>
              Enquire for price <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
