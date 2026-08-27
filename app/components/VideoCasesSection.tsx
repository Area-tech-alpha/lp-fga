import { CtaButton } from "./CtaButton";

const VIDEO_IDS = [
  "59656020-9b23-4b3f-b7fa-275f6d2ea543",
  "845b1473-2f56-4c08-a42a-c724e3b48278",
  "d3a21740-898e-4585-af8d-53cdbea192eb",
  "f843254c-ca21-4508-bc81-a8ce78d5883a",
];

export function VideoCasesSection() {
  return (
    <section className="flex flex-col items-center gap-10 bg-black px-6 py-20">
      <div className="text-center">
        <h2 className="font-heading text-[38px] font-normal text-white">
          Cases de quem já passou por essa <span className="accent">análise</span>
        </h2>
        <p className="mt-2 font-heading text-lg text-muted">
          Aperte no botão abaixo para garantir sua vaga agora mesmo
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {VIDEO_IDS.map((id) => (
          <div key={id} className="relative overflow-hidden rounded-2xl pt-[177.78%]">
            <iframe
              src={`https://player-vz-d7b65cdb-efa.tv.pandavideo.com.br/embed/?v=${id}`}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      <CtaButton className="w-full max-w-[330px]" />
    </section>
  );
}
