import { ArrowRightIcon } from "./Icons";

export function CtaButton({
  className = "",
  align = "center",
}: {
  className?: string;
  align?: "center" | "start";
}) {
  return (
    <a
      href="#inscricao"
      className={`btn-shine group inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-linear-to-r from-gold to-[#996700] px-6 py-5 font-heading text-lg text-white transition-transform hover:scale-[1.02] ${
        align === "center" ? "self-center" : "self-start"
      } ${className}`}
    >
      <span>QUERO APLICAR AGORA</span>
      <ArrowRightIcon className="size-6 shrink-0" />
    </a>
  );
}
