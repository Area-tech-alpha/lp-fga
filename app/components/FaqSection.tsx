import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  return (
    <section className="flex flex-col gap-10 bg-black px-6 py-20 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
      <div className="flex w-full max-w-md flex-col gap-6">
        <h2 className="font-heading text-[32px] font-normal text-white">
          <span className="accent">Perguntas Frequentes</span>
          <br />
          Ficou com alguma dúvida? Talvez ela esteja aqui
        </h2>
        <video
          className="w-full rounded-2xl"
          src="https://fgaeducacao.com/wp-content/uploads/2026/05/logo-fga-liquid-metal.webm"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="w-full max-w-2xl">
        <FaqAccordion />
      </div>
    </section>
  );
}
