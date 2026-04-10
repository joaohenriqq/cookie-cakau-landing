import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cookie Cakau | Descubra novos sorrisos",
  description: "Cookies artesanais com puro chocolate derretido na massa. Assados na hora e entregues em minutos em Maceió. TripAdvisor #1 Sobremesas, iFood 5 estrelas.",
  keywords: ["cookie", "cookies", "chocolate", "Maceió", "sobremesa", "delivery", "artesanal"],
  openGraph: {
    title: "Cookie Cakau | Descubra novos sorrisos",
    description: "Cookies artesanais com puro chocolate derretido na massa. Assados na hora em Maceió.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className={`${montserrat.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
