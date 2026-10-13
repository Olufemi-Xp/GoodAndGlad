import Image from "next/image";
import { gallery } from "../content/site";

export default function Gallery() {
  return (
    <div className="gallery-grid">
      {gallery.map((item, index) => (
        <figure className={`gallery-item gallery-item--${index + 1}`} key={item.src}>
          <div className="gallery-item__image">
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          </div>
          <figcaption><span>{item.caption}</span><span className="gallery-item__index">0{index + 1}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}
