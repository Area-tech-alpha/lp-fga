"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

const SLIDES = [
  {
    tag: "//01",
    title: "Construa seu time comercial de alta performance",
    description:
      "Como montar e estruturar um time comercial de alta performance com SDRs, Closers, Social Sellers e Customer Success para gerar ROI e LTV consistentes, acelerando a jornada do cliente em sua agência.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-01.webp",
  },
  {
    tag: "//02",
    title: "Otimização do time - cresça sem limites",
    description:
      "Como fazer o dimensionamento estratégico do seu time comercial, garantindo que você tenha os profissionais certos nas áreas chave para escalar sem perder a qualidade e a eficiência.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-02.webp",
  },
  {
    tag: "//03",
    title: "Gestão inteligente - resultados que conectam",
    description:
      "Identificar e monitorar os indicadores essenciais que garantem a alta performance da sua operação comercial, criando uma base sólida para o crescimento consistente.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-03.webp",
  },
  {
    tag: "//04",
    title: "A arte de maximizar a receita",
    description:
      "Estruturar seu comercial em 5 áreas estratégicas, criando uma alavanca de receita que te permita independência de tráfego pago e maximizando cada ponto de contato com o cliente.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-04.webp",
  },
  {
    tag: "//05",
    title: "Montando um time comercial campeão",
    description:
      "Como estruturar um processo seletivo eficiente, contratar os melhores talentos e manter sua equipe comercial engajada, garantindo que você nunca perca os high performers e elimine os low performers.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-05.webp",
  },
  {
    tag: "//06",
    title: "Automação de processos",
    description:
      "Implementar CRMs e automações que aumentam a produtividade em até 4x, otimizando a gestão de leads e ajudando seu time a performar com mais eficiência em cada oportunidade.",
    image: "https://fgaeducacao.com/wp-content/uploads/2026/05/img-06.webp",
  },
];

export function DiagnosisCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 380) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.tag}
            data-card
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl bg-white p-7 sm:w-[60%] lg:w-[calc((100%-40px)/3)]"
          >
            <div className="relative mb-4 aspect-[519/346] w-full overflow-hidden rounded-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(min-width: 1024px) 380px, 80vw"
                className="object-cover"
              />
            </div>
            <h3 className="mb-2 font-condensed text-2xl font-bold text-black">
              <span className="accent">{slide.tag}</span> {slide.title}
            </h3>
            <p className="font-condensed text-base text-[#494949]">{slide.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Anterior"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition hover:border-gold hover:text-gold"
        >
          <ArrowRightIcon className="size-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Próximo"
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition hover:border-gold hover:text-gold"
        >
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
