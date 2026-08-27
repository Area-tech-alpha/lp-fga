import { Counter } from "./Counter";

const STATS = [
  { target: 230, suffix: "", label: "Agências Aceleradas" },
  { target: 720, suffix: "", label: "Gestores e vendedores treinados" },
  { target: 30, suffix: "M", label: "Em vendas em nossas operações" },
  { target: 13, suffix: "M", label: "De faturamento para Agências aceleradas" },
];

export function StatsSection() {
  return (
    <section className="bg-gold px-6 py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 py-6 text-center lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <h3 className="font-condensed text-5xl font-bold text-white lg:text-[75px]">
              <Counter target={stat.target} suffix={stat.suffix} />
            </h3>
            <p className="font-condensed text-lg text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
