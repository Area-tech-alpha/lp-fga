import Image from "next/image";
import { CircleXIcon } from "./Icons";
import { LeadForm } from "./LeadForm";
import { LogosMarquee } from "./LogosMarquee";

export function Hero() {
  return (
    <section
      id="inscricao"
      className="flex flex-col items-center gap-8 px-6 py-16 text-center"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "url(https://fgaeducacao.com/wp-content/uploads/2025/10/img-grid-layout.webp)",
        backgroundPosition: "top center",
        backgroundRepeat: "repeat-x",
        backgroundSize: "contain",
      }}
    >
      <div className="flex w-full max-w-[780px] flex-col items-center gap-4">
        <Image
          src="https://fgaeducacao.com/wp-content/uploads/2026/05/logo-fga.webp"
          alt="FGA"
          width={90}
          height={36}
          priority
        />
        <h1 className="font-condensed text-[28px] font-normal text-white">
          Cadastre-se abaixo para ser selecionado para um{" "}
          <span className="accent">diagnóstico estratégico</span> com um
          especialista da FGA, focado em escalar e otimizar suas operações
          comerciais.
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <CircleXIcon className="size-6 shrink-0" />
        <span className="font-label text-2xl text-white">
          Preencha os dados abaixo e cadastre-se
        </span>
      </div>

      <LeadForm />

      <p className="max-w-[720px] text-center font-label text-[13px] text-[#C0C0C0]">
        Ao se inscrever você concorda com o tratamento de seus dados pessoais
        para receber comunicações via whatsapp, sms, ligações e e-mails da
        FGA. Seus dados apenas serão utilizados para fins de comunicação e
        marketing. Você pode cancelar o recebimentos desses e-mails quando
        quiser.
      </p>

      <p className="font-condensed text-base text-[#D3D3D3]">
        Quem já participou da FGA
      </p>

      <div className="w-full">
        <LogosMarquee />
      </div>
    </section>
  );
}
