export const contact = {
  phoneDisplay: "+234 806 284 6548",
  phoneForLink: "2348062846548",
  email: "teniolasusan@gmail.com",
};

export function whatsappLink(message = "Hello Good & Glad, I’d love to make an inquiry.") {
  return `https://wa.me/${contact.phoneForLink}?text=${encodeURIComponent(message)}`;
}

export const collections = [
  { number: "01", name: "Fragrance", note: "A little ritual, a lasting impression.", tone: "fragrance" },
  { number: "02", name: "Bags", note: "Considered companions for every day.", tone: "bags" },
  { number: "03", name: "Shoes", note: "The finishing touch to your own kind of style.", tone: "shoes" },
  { number: "04", name: "Accessories", note: "Small details that make a day feel special.", tone: "accessories" },
];

export const gallery = [
  { src: "/media/supplied/jewelry-set.jpg", alt: "A gold-tone jewelry set with black and clear stones", caption: "The finishing detail" },
  { src: "/media/supplied/designer-bags.jpg", alt: "A selection of designer handbags displayed on shelves", caption: "A bag for your edit" },
  { src: "/media/supplied/watch-set.jpg", alt: "A gold and silver-tone watch with a matching bracelet", caption: "A timeless accent" },
  { src: "/media/supplied/perfume-bottle.jpg", alt: "A rose-colored designer perfume bottle", caption: "A favourite fragrance" },
  { src: "/media/supplied/rose-bouquet.jpg", alt: "A generous bouquet of red roses wrapped in white paper", caption: "A thoughtful gift" },
  { src: "/media/supplied/coach-bags.jpg", alt: "Leather handbags displayed in their presentation boxes", caption: "Everyday companions" },
];

export const videos = [
  { src: "/media/perfume-stones.mp4", title: "A quiet moment with fragrance", credit: "Video by Mikhail Nilov via Pexels" },
];
