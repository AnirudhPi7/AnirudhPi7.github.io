// src/components/TechStack.jsx
import Reveal from "./ui/Reveal.jsx";

const cardBase =
  "rounded-2xl bg-[#111111] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6";

export default function TechStack() {
  return (
    <section id="skills" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-8">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 gap-15">
          {/* Column 1 */}
          <div className="space-y-6">
            <Reveal>
              {/* Education */}
              <article className={cardBase}>
                <header className="flex items-center gap-2 mb-2">
                  <IconBook />
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Education
                  </h3>
                </header>

                <div className="mt-4">
                  <h4 className="text-emerald-400 text-xl font-semibold">
                    PGDBA(IIM C, IIT KGP, ISI)
                  </h4>
                  <p className="italic text-slate-400">
                    Master's Degree, Business Analytics (2024 - 2026)
                  </p>
                  <p className="text-slate-400">Grade:</p>
                  <p className="mt-3 text-slate-300 font-semibold">Coursework:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 mt-1">
                    <li>CS60050 Machine Learning</li>
                    <li>MA31020 Regression and Time Series</li>
                    <li>BAAIM E308 Advanced Predictive Modeling</li>
                    <li>BAAIM E310 Financial Risk Management</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h4 className="text-emerald-400 text-xl font-semibold">
                    PSG College of Technology, Coimbatore, India
                  </h4>
                  <p className="italic text-slate-400">Bachelor of Engineering, Mechanical Engineering (2018 - 2022)</p>
                  <p className="text-slate-400">Grade: 8.58 / 10</p>
                  <p className="mt-3 text-slate-300 font-semibold">Coursework:</p>
                  <ul className="list-disc list-inside text-slate-300 space-y-1 mt-1">
                    <li>Programming with Python</li>
                    <li>Supply Chain Management</li>
                    <li>Optimization Techniques</li>
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <Reveal delay={60}>
              {/* Programming Languages */}
              <article className={cardBase}>
                <header className="flex items-center gap-2 mb-2">
                  <IconCode />
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Programming Languages
                  </h3>
                </header>
                <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1">
                  <li>Python</li>
                  <li>R</li>
                  <li>SQL</li>
                </ul>
              </article>
            </Reveal>

            <Reveal delay={120}>
              {/* Machine Learning */}
              <article className={cardBase}>
                <header className="flex items-center gap-2 mb-2">
                  <IconChip />
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Machine Learning
                  </h3>
                </header>
                <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1">
                  <li>Pandas</li>
                  <li>Scikit-learn</li>
                  <li>Time Series</li>
                  <li>Regression</li>
                  <li>Classification</li>
                  <li>Inference</li>
                  <li>NLP</li>
                  <li>LLM</li>
                  <li>Recommenders</li>
                </ul>
              </article>
            </Reveal>
          </div>
          </div>
        </div>
      
    </section>
  );
}

/* ===== Minimal inline icons (emerald, same vibe) ===== */
function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
      <path d="M4 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M6 5h10" stroke="currentColor" strokeWidth="1.7"/>
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
      <path d="M9 18L3 12l6-6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconChip() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
function IconWrench() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
      <path d="M21 7a6 6 0 0 1-8 7L7.5 19.5a2.1 2.1 0 1 1-3-3L10 11a6 6 0 0 1 7-8l-3 3 4 1 3-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-400" fill="none">
      <path d="M12 2l3 6 6 .9-4.5 4.3 1.1 6.5L12 17l-5.6 2.7 1.1-6.5L3 8.9 9 8l3-6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  );
}