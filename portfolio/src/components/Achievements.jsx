// src/components/Achievements.jsx
import Reveal from "./ui/Reveal.jsx";
import { BookOpenIcon, TrophyIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const cardBase =
  "relative rounded-2xl bg-[#111111] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 flex gap-4 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-emerald-500 before:rounded-l-2xl";

export default function Achievements() {
  return (
    <section id="achievements" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-8">
          Achievements
        </h2>

        <div className="mx-auto max-w-7xl space-y-6">
          <Reveal>
            <article className={cardBase}>
              <BookOpenIcon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <header className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-100">
                    Article Contributor – The Bottomline (IIMs ABCL)
                  </h3>
                  <span className="text-sm text-slate-400">2025</span>
                </header>
                <p className="mt-2 text-slate-300">
  Contributed article on “Impact of Economic Uncertainty and Wars on
  Global Markets” to{" "}
  <a
    href="https://drive.google.com/file/d/1Usy48SgbzfVlua5xQfSo929s93xA1cpU/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:underline"
  >
    The Bottomline 
  </a>
   (flagship inter-IIM finance magazine), June 2025 edition.
</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className={cardBase}>
              <TrophyIcon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <header className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-100">
                    Winners - NEST'25 (Novartis)
                  </h3>
                  <span className="text-sm text-slate-400">2025</span>
                </header>
                <p className="mt-2 text-slate-300">
  Ranked 1st among 33,000+ registrations in{" "}
  <a
    href="https://www.linkedin.com/posts/novartis-india_nestbynovartis-reimaginingmedicine-novartisdevelopment-activity-7300049731764813824-rWQa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACsgMTABxTvnJPf9Om1K3R8fPt7RyHsBdv0"
    target="_blank"
    rel="noopener noreferrer"
    className="text-emerald-400 hover:underline"
  >
    NEST ’25
  </a>
  (healthcare) by Novartis, proposed an innovative solution for predicting completion of clinical trials using pre-trial data, and won cash prize worth ₹1.25L.
</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={200}>
            <article className={cardBase}>
              <ChartBarIcon className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div>
                <header className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-100">
                    Winners – Finlytics (IIM Calcutta)
                  </h3>
                  <span className="text-sm text-slate-400">2024</span>
                </header>
                <p className="mt-2 text-slate-300">
                  Developed data-driven ESG fund analysis using PCA, Factor Analysis, Power BI, and machine learning (Random Forest, Gradient Boosting) to predict returns and risk profiles, delivering insights for sustainable investment strategies.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}