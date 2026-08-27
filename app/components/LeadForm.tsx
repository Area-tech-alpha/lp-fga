"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const RENDA_OPTIONS = [
  "Abaixo de R$20k",
  "Entre R$20 mil e R$50 mil",
  "Entre R$50 mil e R$100 mil",
  "Acima de R$100 mil",
];

const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

const inputClass =
  "w-full rounded-[5px] border border-[#ACACAC40] bg-[#C5C5C540] px-4 py-3 font-condensed text-base text-white placeholder:text-white/70 focus:border-gold focus:outline-none";

export function LeadForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const urlFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const form = formRef.current;
    if (!form) return;

    for (const key of UTM_FIELDS) {
      const value = params.get(key);
      if (!value) continue;
      const input = form.elements.namedItem(key);
      if (input instanceof HTMLInputElement) input.value = value;
    }

    if (urlFieldRef.current) urlFieldRef.current.value = window.location.href;
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const renda = String(formData.get("renda") ?? "");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Falha ao enviar o formulário");

      router.push(renda === "Abaixo de R$20k" ? "/obrigado" : "/parabens");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex w-full max-w-[680px] flex-col gap-3 self-center"
    >
      <input ref={urlFieldRef} type="hidden" name="debug_full_url" defaultValue="" />
      {UTM_FIELDS.map((field) => (
        <input key={field} type="hidden" name={field} defaultValue="" />
      ))}

      <div>
        <label htmlFor="nome" className="sr-only">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Digite seu nome"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Digite seu melhor e-mail"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="telefone" className="sr-only">
          Whatsapp com DDD
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          placeholder="Whatsapp com DDD"
          pattern="[0-9()#&+*\-=.\s]+"
          title="Apenas números e caracteres de telefone (#, -, *, etc.) são aceitos."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="empresa" className="sr-only">
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          required
          placeholder="Nome da sua empresa"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="renda" className="sr-only">
          Renda
        </label>
        <select id="renda" name="renda" required defaultValue="" className={`${inputClass} appearance-none`}>
          <option value="" disabled className="bg-white text-black">
            Qual é o seu faturamento MENSAL aproximada?
          </option>
          {RENDA_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-white text-black">
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-shine mt-2 cursor-pointer rounded-[7px] border border-gold bg-gold px-5 py-6 font-condensed text-lg font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "QUERO APLICAR AGORA"}
      </button>

      {status === "error" && (
        <p className="text-center font-condensed text-sm text-white">
          Não foi possível enviar seus dados agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
}
