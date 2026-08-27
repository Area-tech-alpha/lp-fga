import { CtaButton } from "./CtaButton";
import {
  IconBalance,
  IconFreedom,
  IconGrowth,
  IconPredictability,
  IconProfit,
  IconValuation,
} from "./BenefitIcons";

const BENEFITS = [
  {
    icon: IconPredictability,
    title: "Previsibilidade nos Resultados",
    description:
      "Com processos e time comercial bem alinhados, sua agência alcança resultados altos e previsíveis, eliminando surpresas.",
  },
  {
    icon: IconProfit,
    title: "Maximização de Lucros",
    description:
      "Adote uma abordagem de alta margem de lucro, permitindo que sua operação cresça com eficiência e segurança financeira.",
  },
  {
    icon: IconGrowth,
    title: "Crescimento Sem Limites",
    description:
      "Implante um modelo de escalabilidade claro e eficiente, multiplicando operações e faturamento baseado em dados.",
  },
  {
    icon: IconFreedom,
    title: "Liberdade para o Dono",
    description:
      "Transforme sua agência em uma operacionalidade independente, onde as vendas acontecem sem a necessidade constante do dono.",
  },
  {
    icon: IconValuation,
    title: "Aumento de Valor de Mercado",
    description:
      "Construa uma operação que agregue valor real e atraia investimentos, tornando sua agência um ativo altamente valorizado.",
  },
  {
    icon: IconBalance,
    title: "Equilíbrio Entre Vida Profissional e Pessoal",
    description:
      "Gere mais qualidade de vida, com a tranquilidade de saber que sua agência funciona de forma estruturada e livre de estresse excessivo.",
  },
];

export function BenefitsSection() {
  return (
    <section className="flex flex-col items-center gap-14 bg-black px-6 py-20">
      <h2 className="max-w-2xl text-center font-heading text-[38px] font-normal text-white">
        Conheça os benefícios que você terá após construir sua{" "}
        <span className="accent">máquina de vendas</span>
      </h2>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white/[0.03] p-8"
          >
            <benefit.icon />
            <h3 className="font-heading text-2xl text-white">{benefit.title}</h3>
            <p className="font-heading text-lg text-muted">{benefit.description}</p>
          </div>
        ))}
      </div>

      <CtaButton className="w-full max-w-[330px]" />
    </section>
  );
}
