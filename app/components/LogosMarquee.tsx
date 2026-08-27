import Image from "next/image";
import { Marquee } from "./Marquee";

const LOGOS = [
  { file: "CERBERUS", alt: "CERBERUS" },
  { file: "BROOK", alt: "BROOK" },
  { file: "AVANTE", alt: "AVANTE" },
  { file: "ATHENAS-ODONTO", alt: "ATHENAS ODONTO" },
  { file: "YUKI", alt: "YUKI" },
  { file: "RX-DIGITAL", alt: "RX DIGITAL" },
  { file: "NEXTAGE", alt: "NEXTAGE" },
  { file: "NEXMA", alt: "NEXMA" },
  { file: "NBF-MIDIA", alt: "NBF MIDIA" },
  { file: "MDZ", alt: "MDZ" },
  { file: "LUMINA-TECH", alt: "LUMINA TECH" },
  { file: "LAQUILA", alt: "LAQUILA" },
  { file: "KOTTA-DIGITAL", alt: "KOTTA DIGITAL" },
  { file: "IMPULSO-JURIDICO", alt: "IMPULSO JURÍDICO" },
  { file: "HUNT-CO", alt: "HUNT CO" },
  { file: "E3-DIGITAL", alt: "E3 DIGITAL" },
  { file: "DKF", alt: "DKF" },
  { file: "DENTEX", alt: "DENTEX" },
];

export function LogosMarquee() {
  return (
    <Marquee durationSeconds={45}>
      {LOGOS.map((logo) => (
        <div
          key={logo.file}
          className="relative h-16 w-32 shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-40"
        >
          <Image
            src={`https://fgaeducacao.com/wp-content/uploads/2025/11/${logo.file}.webp`}
            alt={logo.alt}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      ))}
    </Marquee>
  );
}
