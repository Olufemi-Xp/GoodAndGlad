import { collections, whatsappLink } from "../content/site";

const marks = [
  <svg key="fragrance" viewBox="0 0 100 100" aria-hidden="true"><path d="M39 22h22v12l10 8v38H29V42l10-8V22Zm0 12h22M40 54h20M50 42v24" /></svg>,
  <svg key="bags" viewBox="0 0 100 100" aria-hidden="true"><path d="M28 39h44l5 42H23l5-42Zm10 0v-9a12 12 0 0 1 24 0v9" /></svg>,
  <svg key="shoes" viewBox="0 0 100 100" aria-hidden="true"><path d="M19 64c15 0 20-16 27-29 4 13 10 19 19 22l15 5c5 2 8 7 8 13v7H19V64Zm0 9h68" /></svg>,
  <svg key="accessories" viewBox="0 0 100 100" aria-hidden="true"><path d="M19 48h62l-5 28H24l-5-28Zm-2-4h29l4 8H44c-2 8-7 12-14 12-8 0-13-5-13-13v-7Zm66 0H54l-4 8h6c2 8 7 12 14 12 8 0 13-5 13-13v-7Z" /></svg>,
];

export default function CollectionGrid() {
  return (
    <div className="collection-grid">
      {collections.map((item, index) => (
        <article className={`collection-card collection-card--${item.tone}`} key={item.name}>
          <span className="collection-card__number">{item.number} / COLLECTION</span>
          <div className="collection-card__mark">{marks[index]}</div>
          <h3>{item.name}</h3>
          <p>{item.note}</p>
          <a href={whatsappLink(`Hello Good & Glad, I’m interested in your ${item.name.toLowerCase()} collection. Please share what is currently available.`)}>
            Ask about {item.name.toLowerCase()} <span aria-hidden="true">↗</span>
          </a>
        </article>
      ))}
    </div>
  );
}
