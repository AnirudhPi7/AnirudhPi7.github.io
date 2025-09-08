// src/components/Gallery.jsx
import { useEffect, useState, useMemo } from "react";

const images = [
  `${import.meta.env.BASE_URL}images/ach1.jpg`,
  `${import.meta.env.BASE_URL}images/ach2.jpg`,
  `${import.meta.env.BASE_URL}images/ach3.jpg`,
  `${import.meta.env.BASE_URL}images/ach4.jpg`,
];

function useIsMdUp() {
  const [isMd, setIsMd] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setIsMd(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return isMd;
}

export default function Gallery() {
  const isMd = useIsMdUp();
  const perView = isMd ? 3 : 1; // how many visible at once
  const pageCount = useMemo(
    () => Math.ceil(images.length / perView),
    [perView]
  );

  const [page, setPage] = useState(0);
  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  const itemWidth = 100 / perView; // each item width in %
  const trackWidth = (images.length * 100) / perView; // flex track total width

  return (
    <section id="gallery" className="bg-black py-10 select-none">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* slider viewport */}
        <div className="overflow-hidden" aria-roledescription="carousel">
          {/* slider track */}
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${trackWidth}%`,
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="px-2 box-border"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] bg-[#0b0b0b] group">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-600/40 hover:bg-emerald-600/60 text-white grid place-items-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-600/40 hover:bg-emerald-600/60 text-white grid place-items-center"
        >
          ›
        </button>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-emerald-500" : "w-2 bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}