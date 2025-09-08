// src/components/Projects.jsx
import Reveal from "./ui/Reveal.jsx";

const cardBase = "rounded-2xl bg-[#111111] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-4 md:p-5 transition-transform duration-300 ease-out transform-gpu hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]";


function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-900/30 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 text-xs md:text-sm">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-8">
          Projects
        </h2>

        {/* Grid: make cards bigger horizontally */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* RAG CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Tata-Car-Sales-Chatbot-using-RAG"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Persuasive Car Sales Chatbot (RAG)"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/chatbot.jpg`}
                    alt="Chatbot illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Persuasive Car Sales Chatbot for Tata Motors (RAG)
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Retrieval-Augmented Generation chatbot tailored for Tata Motors. It
                  combines a vector search knowledge base with a fine-tuned generator to
                  deliver grounded, persuasive sales conversations that handle detailed
                  questions on models, features and comparisons while staying factual.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>RAG</Tag>
                  <Tag>NLP</Tag>
                  <Tag>LoRA</Tag>
                  <Tag>Python</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* NEST CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Predicting-Completion-of-Clinical-Trials-Novartis-"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Prediction of Clinical Trial Completion (NEST)"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/nest.avif`}
                    alt="Clinical trials illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Prediction of Clinical Trial Completion (NEST)
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Machine learning system for predicting clinical trial completion at the
                  design stage. It integrates structured and unstructured features,
                  employs ensemble modeling, and provides explainable insights to
                  proactively flag at-risk trials for sponsors and researchers.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>XGBoost</Tag>
                  <Tag>BERT</Tag>
                  <Tag>Causal Inference</Tag>
                  <Tag>Python</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* VOLATILITY CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Volatility-Modeling-for-Nifty-50"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: ARCH–GARCH Volatility Modeling for NIFTY50"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/Nifty50.png`}
                    alt="Volatility modeling illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    ARCH–GARCH Volatility Modeling for NIFTY50
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Financial econometrics project modeling Nifty 50 one-day-ahead volatility
                  using ARCH and GARCH frameworks. Forecasts conditional variance and
                  translates it into 99% Value-at-Risk, providing insights into clustering
                  and tail risk in Indian equity markets.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>ARCH</Tag>
                  <Tag>GARCH</Tag>
                  <Tag>VaR</Tag>
                  <Tag>Python</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* ALUMINUM PRICE FORECASTING CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Forecasting-Global-Price-of-Aluminum"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Forecasting Global Price of Aluminum (ARIMAX)"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/aluminium.jpg`}
                    alt="Aluminum price forecasting illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Forecasting Global Price of Aluminum (ARIMAX)
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Monthly aluminum price forecasting with a parsimonious ARIMA baseline
                  and ARIMAX event dummies for COVID phases and the Russia–Ukraine war,
                  delivering accurate, interpretable predictions for hedging and
                  procurement planning.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>ARIMA</Tag>
                  <Tag>ARIMAX</Tag>
                  <Tag>Time Series</Tag>
                  <Tag>Python</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* INSURANCE PAYOUT MODELING CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Insurance-Payout-Modeling-for-U.S.-Federal-Flood-Claims"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Insurance Payout Modeling for U.S. Federal Flood Claims"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/regression.jpg`}
                    alt="Insurance payout modeling illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Insurance Payout Modeling for U.S. Federal Flood Claims
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Assumption-aware modeling of flood insurance payouts using FEMA NFIP claims,
                  combining log/signed-log transforms, robust diagnostics, and IV-2SLS to handle
                  heteroskedasticity and endogeneity for policy-grade inference.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>OLS</Tag>
                  <Tag>IV-2SLS</Tag>
                  <Tag>Econometrics</Tag>
                  <Tag>Regression</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* HYBRID RECOMMENDER CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Hybrid-Product-Recommender-for-Amazon-Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Hybrid Product Recommender for Amazon Reviews"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/recommender.jpeg`}
                    alt="Recommender system illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Hybrid Product Recommender for Amazon Reviews
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  This project builds a hybrid Amazon product recommender that blends collaborative
                  and content-based filtering with LightFM (WARP) to deliver top-10 recommendations
                  and handle cold-start via metadata.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>CF</Tag>
                  <Tag>CBF</Tag>
                  <Tag>LightFM</Tag>
                  <Tag>SVD</Tag>
                </div>
              </article>
            </a>
          </Reveal>

          {/* EARLY WARNING CREDIT DEFAULTS CARD */}
          <Reveal>
            <a
              href="https://github.com/AnirudhPi7/Early-Warning-Model-for-Consumer-Defaults"
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-2xl"
              aria-label="Open GitHub repository: Early Warning Model for Consumer Loan Defaults"
            >
              <article className={`${cardBase} group`}>
                <div className="mb-3">
                  <img
                    src={`${import.meta.env.BASE_URL}images/classification.webp`}
                    alt="Credit risk classification illustration"
                    className="w-full h-40 object-cover rounded-lg
                 transition-transform duration-300 ease-out transform-gpu
                 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <header className="mb-1">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                    Early Warning Model for Consumer Loan Defaults
                  </h3>
                </header>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  An auditable credit-risk pipeline using robust feature engineering with
                  Random Forest and XGBoost, post-hoc calibration, and recall-oriented
                  thresholding to catch likely defaulters at application time.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Tag>Random Forest</Tag>
                  <Tag>XGBoost</Tag>
                  <Tag>Logistic Regression</Tag>
                  <Tag>Python</Tag>
                </div>
              </article>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}