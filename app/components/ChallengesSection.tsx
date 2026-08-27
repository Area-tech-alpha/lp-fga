import { CtaButton } from "./CtaButton";

const CHALLENGES = [
  {
    title: "Desafio 01",
    description:
      "<b>Sua equipe operacional até parece estar bem treinada</b>, mas os processos continuam ineficientes, causando retrabalho e impactando diretamente na entrega para os clientes.",
  },
  {
    title: "Desafio 02",
    description:
      "<b>Sente que as vendas estão mais desafiadoras a cada dia</b>, e o esforço não tem mais o mesmo retorno, fazendo com que os resultados pareçam cada vez mais fora de alcance.",
  },
  {
    title: "Desafio 03",
    description:
      "<b>Mesmo com treinamentos e investimentos em sua equipe comercial</b>, percebe que muitos acabam não se adaptando, saem ou simplesmente não estão alinhados com a visão da sua agência e não conseguem lidar com a pressão.",
  },
  {
    title: "Desafio 04",
    description:
      "<b>Está preso em uma fase de crescimento limitado</b>, com os resultados sempre variando e você sem saber o que está impedindo sua operação de avançar.",
  },
  {
    title: "Desafio 05",
    description:
      "<b>O time de marketing está com dificuldade para gerar leads qualificados</b>, as campanhas estão perdendo performance, e você se sente preso em estratégias que não trazem os resultados desejados?",
  },
];

export function ChallengesSection() {
  return (
    <section className="border-y border-[#191919] bg-linear-to-r from-[#161616] to-black px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="flex flex-col items-start gap-6 lg:sticky lg:top-24 lg:self-start">
          <div>
            <h2 className="font-heading text-[38px] font-normal text-white">
              Se você é <span className="accent">dono de agência</span> e
              está enfrentando desafios para ter previsibilidade nos
              resultados do seu negócio, veja se isso se reflete na sua
              operação
            </h2>
            <p className="mt-4 font-heading text-lg text-[#AFAFAF]">
              Se você se identificou com alguns desses pontos, é sinal de que
              seu sistema precisa de ajustes estratégicos veja como
              estruturar um modelo realmente escalável.
            </p>
          </div>
          <CtaButton align="start" className="hidden lg:inline-flex" />
        </div>

        <div className="flex flex-col gap-5">
          {CHALLENGES.map((challenge) => (
            <div
              key={challenge.title}
              className="rounded-2xl border border-panel-border bg-panel p-8"
            >
              <h3 className="mb-2 font-condensed text-lg text-white">
                {challenge.title}
              </h3>
              <p
                className="font-heading text-lg text-[#AFAFAF] [&_b]:text-white"
                dangerouslySetInnerHTML={{ __html: challenge.description }}
              />
            </div>
          ))}
        </div>

        <CtaButton className="w-full lg:hidden" />
      </div>
    </section>
  );
}
