const skills = [
  "Python", "R", "SQL", "Pandas", "NumPy", "scikit-learn", "XGBoost",
  "Time-series", "Forecasting", "GARCH/Volatility", "NLP", "RAG",
  "Recommenders", "Statistics", "Classification", "Regression"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-block rounded-md border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-200"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}