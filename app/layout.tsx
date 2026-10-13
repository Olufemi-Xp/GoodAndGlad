import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Good & Glad — Everyday, extraordinary",
  description: "A thoughtful edit of perfumes, bags, shoes and beautiful little luxuries. Find something lovely with Good & Glad.",
  applicationName: "Good & Glad",
  openGraph: {
    title: "Good & Glad — Everyday, extraordinary",
    description: "A thoughtful edit of beautiful things to wear, carry and keep close.",
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
