import type { ReactNode } from "react";

export function Marquee({
  children,
  durationSeconds = 90,
  rotate,
  shadow,
  className = "",
}: {
  children: ReactNode;
  durationSeconds?: number;
  rotate?: number;
  shadow?: boolean;
  className?: string;
}) {
  const style = rotate
    ? { transform: `rotate(${rotate}deg) scale(1.02)`, ...(shadow ? { boxShadow: "0px 5px 20px #00000073" } : {}) }
    : undefined;

  return (
    <div className={`marquee ${className}`} style={style}>
      <div
        className="marquee-content"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {children}
      </div>
      <div
        className="marquee-content"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
