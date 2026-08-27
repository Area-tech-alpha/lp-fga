import Image from "next/image";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-black px-6 py-20 text-center">
      <Image
        src="https://fgaeducacao.com/wp-content/uploads/2026/05/logo-fga.webp"
        alt="FGA"
        width={90}
        height={36}
      />
      <h1 className="max-w-xl font-heading text-3xl font-normal text-white">
        Obrigado pelo seu cadastro!
      </h1>
      <p className="max-w-md font-heading text-lg text-muted">
        Recebemos suas informações. Nossa equipe vai analisar seu momento
        atual e entrar em contato assim que possível.
      </p>
      <Link href="/" className="font-heading text-gold underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
