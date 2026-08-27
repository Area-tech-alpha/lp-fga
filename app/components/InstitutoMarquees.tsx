import { Marquee } from "./Marquee";

function Item() {
  return (
    <>
      <span className="font-condensed text-3xl leading-none font-bold text-black uppercase">
        INSTITUTO FGA
      </span>
      <span className="font-condensed text-3xl leading-none font-bold text-black">•</span>
    </>
  );
}

export function InstitutoMarquees() {
  return (
    <div className="relative overflow-hidden bg-black py-5">
      <div className="[transform:rotate(-2deg)_scale(1.02)] [filter:blur(2px)]">
        <div className="bg-[#FFB400] py-5">
          <Marquee durationSeconds={90}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Item key={i} />
            ))}
          </Marquee>
        </div>
      </div>
      <div className="relative z-10 -mt-[70px] [transform:rotate(4deg)_scale(1.02)] [box-shadow:0px_5px_20px_#00000073]">
        <div className="bg-[#FFB400] py-5">
          <Marquee durationSeconds={190}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Item key={i} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
