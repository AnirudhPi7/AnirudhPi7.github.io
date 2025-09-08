// src/components/Navbar.jsx
export default function Navbar() {
  const email = "anirudharunkumar77@gmail.com";

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* LEFT: links only (no brand/name) */}
<nav className="flex items-center gap-6">
  <a href="#home" className="text-slate-300 hover:text-slate-100 text-sm font-black">Home</a>
  <a href="#skills" className="text-slate-300 hover:text-slate-100 text-sm font-black">Tech Stack</a>
  <a href="#work" className="text-slate-300 hover:text-slate-100 text-sm font-black">Work Experience</a>
  <a href="#projects" className="text-slate-300 hover:text-slate-100 text-sm font-black">Projects</a>
  <a href="#achievements" className="text-slate-300 hover:text-slate-100 text-sm font-black">Achievements</a>
  <a href="#contact" className="text-slate-300 hover:text-slate-100 text-sm font-black">Contact</a>
</nav>

        {/* RIGHT: social icons */}
        <div className="flex items-center gap-4">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/anirudha7/" target="_blank" rel="noreferrer"
             className="text-slate-300 hover:text-emerald-400"><IconLinkedIn /></a>
          <a aria-label="GitHub" href="https://github.com/AnirudhPi7/" target="_blank" rel="noreferrer"
             className="text-slate-300 hover:text-emerald-400"><IconGitHub /></a>

          {/* Hardened mail link */}
          <a
            aria-label="Mail"
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            title={email}
            onClick={(e) => {
              // Fallback for environments that ignore mailto anchors
              try { window.location.href = `mailto:${email}`; } catch (_) {}
            }}
            className="text-slate-300 hover:text-emerald-400"
          >
            <IconMail />
          </a>
        </div>
      </div>
    </header>
  );
}

function IconLinkedIn(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-3.5 2.88V21h4v-6.5c0-.91.74-1.65 1.65-1.65s1.85.74 1.85 1.65V21h4v-7.5C22.5 10.57 20.43 9 18.15 9 16.82 9 15.68 9.56 15 10.45V9h-.5z"/></svg>);}
function IconGitHub(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.78-1.35-1.78-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5z"/></svg>);}
function IconMail(){return(<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16a2 2 0 0 1 2 2v.35l-10 5.62L2 8.35V8a2 2 0 0 1 2-2Zm16 12H4a2 2 0 0 1-2-2V9.76l9.38 5.27a2 2 0 0 0 1.94 0L22 9.76V16a2 2 0 0 1-2 2Z"/></svg>);}