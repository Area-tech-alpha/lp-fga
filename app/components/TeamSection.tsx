import Image from "next/image";
import { CtaButton } from "./CtaButton";

const TEAM = [
  {
    name: "Gustavo de Oliveira",
    role: "Founder & CSO da Alpha | Founder da FGA",
    bio: "Criador da estrutura comercial da Alpha. Já vendeu mais de R$30 MILHÕES em serviços com processos replicáveis para qualquer agência.",
    image:
      "https://fgaeducacao.com/wp-content/uploads/2026/03/IMG_9194-1-scaled-e1772825012847.jpg",
  },
  {
    name: "Athos Vilarins",
    role: "Founder & CEO da Alpha | Sócio da FGA",
    bio: "A mente por trás da Alpha. À frente da maior agência nichada do país, lidera um ecossistema que já movimentou mais de 120 milhões de reais.",
    image:
      "https://fgaeducacao.com/wp-content/uploads/2026/03/IMG_9314-scaled-e1772825032833.jpg",
  },
  {
    name: "Pedro Dias",
    role: "Diretor de Operações da Alpha & Sócio da FGA",
    bio: "Montou o operacional da Alpha com processos que escalam e sustentam milhares de clientes sem travar crescimento.",
    image:
      "https://fgaeducacao.com/wp-content/uploads/2026/03/IMG_9441-1-scaled-e1772825071864.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="flex flex-col items-center gap-10 border-y border-[#191919] bg-linear-to-r from-[#161616] to-black px-6 py-20">
      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-3">
        {TEAM.map((member) => (
          <div key={member.name} className="flex flex-col items-start gap-4">
            <div className="relative aspect-[1707/2260] w-full overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="font-heading text-[30px] font-normal text-white">
              {member.name}
            </h3>
            <div>
              <span className="mb-2 block font-heading text-sm font-medium text-gold">
                {member.role}
              </span>
              <p className="font-heading text-lg text-muted">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <CtaButton className="w-full max-w-[330px]" />
    </section>
  );
}
