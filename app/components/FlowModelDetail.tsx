import Image from "next/image";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FlowModelDetail() {
  return (
    <section className="flex flex-col items-center gap-10 bg-black px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
      <Reveal className="w-full max-w-[455px] shrink-0">
        <Image
          src="https://fgaeducacao.com/wp-content/uploads/2026/03/img-equipe-2.webp"
          alt="Equipe FGA"
          width={455}
          height={583}
          className="w-full rounded-2xl border border-[#333333]"
        />
      </Reveal>

      <div className="flex max-w-[550px] flex-col items-start gap-6">
        <div className="flex flex-col gap-4 font-heading text-lg text-muted">
          <p>
            A <b className="text-white">FGA Flow Model</b> é uma metodologia
            que transforma a forma como sua agência vende e cresce, começando
            no primeiro ponto de contato com o cliente e se expandindo por
            todas as etapas do processo. A ativação é feita através de
            tráfego pago, marketing de conteúdo, networking e vendas diretas.
          </p>
          <p>
            Cada uma dessas etapas é estruturada para garantir que sua
            operação comercial funcione como uma máquina bem azeitada, que
            traz resultados rápidos e consistentes.
          </p>
          <p>
            Cada peça bem estruturada faz com que a operação como um todo
            funcione com precisão, otimizando todos os processos de vendas e
            marketing.
          </p>
        </div>
        <CtaButton align="start" />
      </div>
    </section>
  );
}
