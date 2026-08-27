"use client";

import { useState } from "react";
import { ArrowRightIcon } from "./Icons";

const FAQ_ITEMS = [
  {
    question: "Quanto tempo dura o diagnóstico?",
    answer:
      "O diagnóstico tem duração média de 30 minutos, tempo ideal para analisarmos com profundidade os principais pontos da sua operação e identificarmos o que está limitando o crescimento da sua agência.",
  },
  {
    question: "Quem realiza o diagnóstico?",
    answer:
      "A conversa acontece 100% online, via Google Meet, conduzida por um dos nossos especialistas comerciais da FGA. É um bate-papo direto, sem compromisso, focado em gerar clareza real sobre o cenário da sua agência.",
  },
  {
    question: "Como devo me preparar para o diagnóstico?",
    answer:
      "Traga as principais dores e desafios que sua agência enfrenta, seja em vendas, marketing, time ou processos. Assim, conseguimos direcionar o diagnóstico para o que realmente importa e te mostrar o caminho mais rápido pra escalar.",
  },
  {
    question: "Posso convidar alguém para participar comigo?",
    answer:
      "Claro! Você pode convidar seu sócio ou alguém do time de liderança para participar da reunião. Isso ajuda a alinhar a visão e facilitar a aplicação das estratégias discutidas.",
  },
  {
    question: "O diagnóstico é personalizado para o meu negócio?",
    answer:
      "Sim. Cada diagnóstico é 100% individual e personalizado, com base nos dados e no momento atual da sua agência. Nosso objetivo é te mostrar exatamente onde estão os gargalos e como resolvê-los para alcançar o próximo nível de faturamento e previsibilidade.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden rounded-[10px]">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-white/10 bg-panel last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-condensed text-lg text-white"
            >
              <span>{item.question}</span>
              <ArrowRightIcon
                className={`size-6 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="font-heading text-base text-muted">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
