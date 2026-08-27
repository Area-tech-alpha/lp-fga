import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 bg-footer px-6 py-14">
      <Image
        src="https://fgaeducacao.com/wp-content/uploads/2026/01/logo.webp"
        alt="FGA"
        width={180}
        height={72}
      />
      <p className="font-label text-sm text-white/70">
        Política de privacidade | Termos de uso
      </p>
    </footer>
  );
}
