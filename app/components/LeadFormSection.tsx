import { CircleXIcon } from "./Icons";
import { LeadForm } from "./LeadForm";

export function LeadFormSection() {
  return (
    <section
      id="inscricao"
      className="flex flex-col items-center gap-6 bg-[#03070CF2] px-6 py-12"
    >
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
    </section>
  );
}
