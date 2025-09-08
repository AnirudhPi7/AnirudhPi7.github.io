// src/components/Work.jsx
import Reveal from "./ui/Reveal.jsx";

const cardBase =
  "rounded-2xl bg-[#111111] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6";

const CheckIcon = () => (
  <svg
    className="h-4 w-4 flex-none text-emerald-400 mt-1"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0L3.293 9.957a1 1 0 111.414-1.414l3.04 3.04 6.543-6.543a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="h-4 w-4 text-emerald-400 mr-2 flex-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M8 7V3m8 4V3M4 11h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    className="h-4 w-4 text-emerald-400 mr-2 flex-none"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2m4 0h-14a2 2 0 00-2 
      2v10a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2z" />
  </svg>
);

const Skill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-3 py-1 text-sm">
    {children}
  </span>
);

export default function Work() {
  return (
    <section id="work" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 text-center mb-8">
          Work Experience
        </h2>

        <div className="mx-auto max-w-7xl space-y-8">

          {/* o9 Example */}
          <Reveal>
            <article className={cardBase}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Senior Business Operations Specialist
                  </h3>
                  <p className="mt-1 text-slate-300 flex items-center gap-2 text-base">
                    <BriefcaseIcon />
                    o9 Solutions
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-emerald-300 text-base">
                  <CalendarIcon />
                  <span>Aug 2022 – July 2024</span>
                </div>
              </div>

              <h4 className="mt-5 text-emerald-400 text-lg font-semibold">
                Responsibilities:
              </h4>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Played a key role in the successful transition from a weekly to monthly demand planning cycle for a client with
&gt;1L SKUs, resulting in better demand planning.
                  </span>
                </li>
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Introduced item demand segmentation using historical demand patterns, resulting in better algorithm selection
and a 30% increase in forecast accuracy along with a 40% reduction in user forecast overrides.
                  </span>
                </li>
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Conducted knowledge transfer sessions and specific training on demand planning workflows for new resources,
resulting in a reduction in onboarding time for new team members.
                  </span>
                </li>
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Created, tested, and debugged R plugins related to statistical forecasting and time series decomposition,
enabling accurate and reliable forecasting models.
                  </span>
                </li>
              </ul>

              <h4 className="mt-5 text-emerald-400 text-lg font-semibold">Skills:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                <Skill>Demand Planning</Skill>
                <Skill>Time Series Forecasting</Skill>
                <Skill>Supply Chain Analytics</Skill>
                <Skill>IBPL</Skill>
                <Skill>Mentorship</Skill>
              </div>
            </article>
          </Reveal>

          {/* o9 Intern Example */}
          <Reveal>
            <article className={cardBase}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-100">
                    Business Operations Specialist Intern
                  </h3>
                  <p className="mt-1 text-slate-300 flex items-center gap-2 text-base">
                    <BriefcaseIcon />
                    o9 Solutions
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-emerald-300 text-base">
                  <CalendarIcon />
                  <span>Feb 2022 – July 2022</span>
                </div>
              </div>

              <h4 className="mt-5 text-emerald-400 text-lg font-semibold">
                Responsibilities:
              </h4>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Collaborated with the demand planning team to gain comprehensive knowledge of diverse time series forecasting algorithms utilized in the industry.
                  </span>
                </li>
                <li className="flex gap-2 text-slate-300 text-base">
                  <CheckIcon />
                  <span>
                    Acquired proficient skills in IBPL, o9's proprietary SQL language, through hands-on learning and practical application.
                  </span>
                </li>
              </ul>
            </article>
          </Reveal>

        </div>
      </div>
    </section>
  );
}