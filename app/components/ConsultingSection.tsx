import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { ArrowTopRightIcon } from "./Icons";
import { Reveal } from "./Reveal";

const POINTS = [
  "Montar e treinar times comerciais de alta performance",
  "Otimizar processos e funis de vendas",
  "Aumentar lucratividade, previsibilidade e resultados consistentes",
];

export function ConsultingSection() {
  return (
    <section className="flex flex-col items-center gap-10 bg-white px-6 py-20 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
      <div className="flex max-w-[550px] flex-col items-start gap-6">
        <h2 className="font-heading text-[38px] leading-[1.1] font-normal text-black">
          Nessas consultorias, você recebe{" "}
          <span className="accent">análise estratégica</span> personalizada e
          orientação prática para:
        </h2>

        <ul className="flex flex-col gap-3">
          {POINTS.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <ArrowTopRightIcon className="size-6 shrink-0" />
              <span className="font-label text-2xl text-body">{point}</span>
            </li>
          ))}
        </ul>

        <p className="font-heading text-lg text-body">
          O resultado é um só, <b className="text-black">uma operação estruturada e escalável</b>,
          capaz de gerar crescimento previsível, mais margem e liberdade para
          focar no que realmente importa: expandir sua agência sem depender
          da presença constante do dono.
        </p>

        <CtaButton align="start" />
      </div>

      <Reveal className="w-full max-w-[455px] shrink-0">
        <Image
          src="https://fgaeducacao.com/wp-content/uploads/2026/03/img-equipe-1.webp"
          alt="Equipe FGA"
          width={455}
          height={467}
          className="w-full rounded-2xl border border-[#33333352]"
        />
      </Reveal>
    </section>
  );
}
