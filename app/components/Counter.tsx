"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatBR(n: number) {
  return Math.floor(n).toLocaleString("pt-BR");
}

export function Counter({
  target,
  prefix = "+",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const duration = 1200;

    const cancel = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = null;
    };

    const animate = () => {
      cancel();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        setValue(target * easeOutCubic(t));
        if (t < 1) {
          frame.current = requestAnimationFrame(tick);
        } else {
          setValue(target);
          frame.current = null;
        }
      };
      frame.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          cancel();
          setValue(0);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(el);
    return () => {
      cancel();
      observer.disconnect();
    };
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {formatBR(value)}
      {suffix}
    </span>
  );
}
