export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I’m <span className="text-sky-400">Anirudh</span>
        </h1>
        <p className="mt-4 text-slate-300 text-lg">
          PGDBA (IIMC · IITKGP · ISI). I build forecasts, risk models & ML systems for business impact.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#skills" className="px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white text-sm">
            View Tech Stack
          </a>
          <a
            href={`${import.meta.env.BASE_URL}assets/Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md border border-slate-400 text-slate-200 hover:bg-slate-700 text-sm"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}