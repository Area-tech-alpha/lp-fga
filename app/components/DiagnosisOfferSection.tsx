import { CtaButton } from "./CtaButton";
import { DiagnosisCarousel } from "./DiagnosisCarousel";
import { TrendUpIcon } from "./Icons";

export function DiagnosisOfferSection() {
  return (
    <section className="flex flex-col gap-10 border-y border-[#191919] bg-linear-to-r from-[#161616] to-black px-6 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <h2 className="max-w-[550px] font-heading text-[38px] leading-tight font-normal text-white">
          O que você vai obter de um <span className="accent">diagnóstico</span>{" "}
          de implementação comercial com a FGA?
        </h2>
        <div className="flex max-w-[550px] items-start gap-3">
          <TrendUpIcon className="mt-1 size-5 shrink-0" />
          <p className="font-heading text-lg text-muted">
            Descubra <b className="text-white">os gargalos que travam seu crescimento</b> e
            receba um plano claro para estruturar, escalar e automatizar sua
            operação comercial com previsibilidade.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <DiagnosisCarousel />
      </div>

      <CtaButton className="mx-auto w-full max-w-[330px]" />
    </section>
  );
}
