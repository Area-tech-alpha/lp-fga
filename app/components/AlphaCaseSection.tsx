import Image from "next/image";

export function AlphaCaseSection() {
  return (
    <section
      className="flex flex-col items-start gap-6 bg-black bg-cover bg-top px-6 py-20"
      style={{
        backgroundImage:
          "url(https://fgaeducacao.com/wp-content/uploads/2026/02/bg-sobre-deskt.webp)",
      }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6">
        <Image
          src="https://fgaeducacao.com/wp-content/uploads/2026/02/icon-gold.webp"
          alt=""
          width={88}
          height={102}
        />
        <h2 className="font-heading text-[38px] font-normal text-white">
          A Alpha é a prova viva de que a{" "}
          <span className="accent">metodologia da FGA funciona</span>
        </h2>
        <div className="flex flex-col gap-4 font-heading text-lg text-muted">
          <p>
            Com uma operação altamente estruturada, a{" "}
            <b className="text-white">
              Alpha ultrapassou R$ 1 milhão em faturamento mensal
            </b>
            , consolidando-se como referência em agências de marketing de
            alta performance.
          </p>
          <p>
            Todo o modelo de tráfego, vendas e operação aplicado na Alpha
            hoje é ensinado na FGA, permitindo que donos de agência e
            gestores de tráfego utilizem estratégias testadas e comprovadas
            no mercado real.
          </p>
          <p>
            Fundada por Athos Vilarins (CEO) e Gustavo de Oliveira (CSO), a
            Alpha alcançou R$ 15,5 milhões em faturamento anual em menos de 3
            anos, validando um modelo de crescimento replicável, previsível
            e escalável.
          </p>
        </div>
      </div>
    </section>
  );
}
