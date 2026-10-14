import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good & Glad | Premium luxury goods, glad customers",
  description: "Discover perfumes, bags, shoes, women's hair accessories, beauty accessories, and children's luxury accessories with Good & Glad.",
  applicationName: "Good & Glad",
  openGraph: {
    title: "Good & Glad | Premium luxury goods, glad customers",
    description: "A thoughtful selection of perfumes, bags, shoes, and accessories for women and children.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
