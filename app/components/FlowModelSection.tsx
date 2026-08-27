import Image from "next/image";

export function FlowModelSection() {
  return (
    <section className="flex flex-col items-center gap-10 bg-white px-6 py-20">
      <h2 className="max-w-2xl text-center font-heading text-[38px] leading-tight font-normal text-black">
        Como funciona um sistema comercial com a FGA{" "}
        <span className="accent">Flow Model</span>
      </h2>
      <Image
        src="https://fgaeducacao.com/wp-content/uploads/2026/01/img-blood-flow.webp"
        alt="FGA Flow Model"
        width={1120}
        height={462}
        className="w-full max-w-5xl"
        priority={false}
      />
    </section>
  );
}
