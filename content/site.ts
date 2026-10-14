export const contact = {
  phoneDisplay: "+234 806 284 6548",
  phoneForLink: "2348062846548",
  email: "teniolasusan@gmail.com",
};

export function whatsappLink(message = "Hello Good & Glad, I would love to make an inquiry.") {
  return `https://wa.me/${contact.phoneForLink}?text=${encodeURIComponent(message)}`;
}

export const collections = [
  {
    name: "Perfumes",
    note: "Find a fragrance for your own kind of everyday ritual.",
    image: "/media/perfume-editorial.jpg",
    alt: "Representative fragrance styling on sculptural stone",
  },
  {
    name: "Bags",
    note: "Considered companions for work, weekends and everything between.",
    image: "/media/leather-bag-editorial.jpg",
    alt: "Representative leather handbag styling",
  },
  {
    name: "Shoes",
    note: "Finishing touches for the occasions that make you feel your best.",
    image: "/media/gold-heels.jpg",
    alt: "Representative gold evening shoe styling",
  },
  {
    name: "Women's hair accessories",
    note: "Beautiful finishing details for every kind of look.",
    image: "/media/supplied/jewelry-set.jpg",
    alt: "Representative decorative accessories styling",
  },
  {
    name: "Beauty accessories",
    note: "Little luxuries to bring into your daily routine.",
    image: "/media/sunglasses.jpg",
    alt: "Representative beauty and personal accessory styling",
  },
  {
    name: "Children's beauty & luxury accessories",
    note: "Special finds for the little ones in your life.",
    image: "/media/supplied/rose-bouquet.jpg",
    alt: "Representative gift styling for a special occasion",
  },
];

export const gallery = [
  { src: "/media/perfume-editorial.jpg", alt: "Perfume bottle arranged on sculptural stones", caption: "A signature scent" },
  { src: "/media/leather-bag-editorial.jpg", alt: "Close detail of a leather handbag", caption: "Everyday elegance" },
  { src: "/media/gold-heels.jpg", alt: "Detail of a gold evening shoe", caption: "A finishing touch" },
  { src: "/media/sunglasses.jpg", alt: "Dark framed sunglasses on a light surface", caption: "A considered detail" },
];

export const videos = [
  { src: "/media/perfume-stones.mp4", title: "A quiet moment with fragrance", credit: "Video by Mikhail Nilov via Pexels" },
];
