// src/components/Home.jsx
export default function Home() {
  return (
    <section id="home" className="bg-black text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid gap-10 md:grid-cols-12">
        {/* LEFT: heading + about */}
        <div className="md:col-span-7">
          {/* thickness: use font-bold (not extrabold) */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Anirudh A
          </h1>

          {/* Larger paragraph size*/}
          <div className="mt-6 space-y-6 text-slate-300 leading-relaxed max-w-[62ch] text-[19px] md:text-[20px]">
            <p>
Hi, I’m Anirudh — currently a Data Science Intern at Sun Pharma. I began my career at o9 Solutions, where I was introduced to demand planning and time series forecasting. That experience sparked my passion for data science — turning raw data into meaningful insights and actionable business value.
            </p>
            <p>
At o9, I realized the importance of combining analytical skills with storytelling to influence decisions. I was also motivated to explore advanced, state-of-the-art machine learning techniques used across industries. Pursuing the PGDBA program gave me the perfect platform to deepen this expertise. It also reinforced the importance of framing problems clearly, identifying key stakeholders, and defining precise objectives before driving any project forward.
            </p>
          </div>
        </div>

        {/* RIGHT: circular photo with soft green glow + larger caption */}
        <aside className="md:col-span-5 md:pl-6">
<div
  className="group h-56 w-56 rounded-full ring-2 ring-emerald-400/30
             shadow-[0_0_0_10px_rgba(16,185,129,0.08),0_0_64px_rgba(16,185,129,0.28)]
             overflow-hidden"
>
  <img
    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
    alt="Anirudh"
    className="h-full w-full object-cover transition-transform duration-300 ease-out
               group-hover:scale-105"
  />
</div>

          <div className="mt-6 space-y-4">
            <Fact icon={<IconCap />} title="PGDBA"
                  subtitle="IIM Calcutta · IIT Kharagpur · ISI Kolkata" />
            <Fact icon={<IconBriefcase />} title="Ex-Senior Business Operations Specialist"
                  subtitle="o9 Solutions, India" />
            <Fact icon={<IconDoc />} title="Resume"
              subtitle={
                <span className="space-x-2">

<a href={`${import.meta.env.BASE_URL}assets/Resume.pdf`} target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-300">View</a>
                  <a href={`${import.meta.env.BASE_URL}assets/Resume.pdf`} download
                     className="underline hover:text-emerald-300">Download</a>
                </span>
              } />
          </div>

          <a href="#skills"
             className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500">
            Let’s take a Tour →
          </a>
        </aside>
      </div>
    </section>
  );
}

/* Fact + Icons */
function Fact({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid h-10 w-10 place-content-center rounded-lg bg-emerald-500/10 text-emerald-400">
        {icon}
      </span>
      <div>
        <div className="font-semibold text-slate-100">{title}</div>
        <div className="text-sm text-slate-300">{subtitle}</div>
      </div>
    </div>
  );
}
function IconCap(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 10L12 6 2 10l10 4 10-4Z" stroke="currentColor" strokeWidth="1.7"/><path d="M6 12v4c3.5 2.5 8.5 2.5 12 0v-4" stroke="currentColor" strokeWidth="1.7"/></svg>);}
function IconBriefcase(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.7"/></svg>);}
function IconDoc(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Z" stroke="currentColor" strokeWidth="1.7"/><path d="M14 2v5h5" stroke="currentColor" strokeWidth="1.7"/><path d="M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.5"/></svg>);}