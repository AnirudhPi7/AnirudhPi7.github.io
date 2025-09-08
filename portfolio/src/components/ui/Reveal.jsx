// src/components/ui/Reveal.jsx
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, amount = 0.15, once = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // if you want "animate once", keep it visible and don't toggle off
          if (once) return;
        } else {
          // allow re-trigger when it leaves and comes back
          if (!once) setVisible(false);
        }
      },
      { threshold: amount }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [amount, once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
}