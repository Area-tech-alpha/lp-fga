import type { Metadata } from "next";
import { Archivo, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const aspekta = localFont({
  variable: "--font-aspekta",
  src: [
    {
      path: "../public/fonts/Aspekta-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aspekta-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const editorial = localFont({
  variable: "--font-editorial",
  src: [
    {
      path: "../public/fonts/PPEditorialOld-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "FGA – Diagnóstico Exclusivo para Donos de Agências",
  description:
    "Cadastre-se para ser selecionado para um diagnóstico estratégico com um especialista da FGA, focado em escalar e otimizar suas operações comerciais.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${montserrat.variable} ${aspekta.variable} ${editorial.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
