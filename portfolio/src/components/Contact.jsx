// src/components/Contact.jsx
import Reveal from "./ui/Reveal.jsx";

const EMAIL = "anirudharunkumar77@gmail.com";

const cardBase =
  "rounded-2xl bg-[#111111] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6";

export default function Contact() {
  return (
    <section id="contact" className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-14">
        {/* Center-aligned section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 text-center mb-8">
          Contact Me
        </h2>

        {/* Two-card layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT: Get In Touch */}
          <Reveal>
            <article className={cardBase}>
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Get In Touch</h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5"><IconMail /></span>
                  <div>
                    <div className="text-slate-200 font-semibold">Email</div>

<a
  href={`mailto:anirudharunkumar77@gmail.com`}
  className="text-slate-300 transition-all duration-200
             hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]"
>
  anirudharunkumar77@gmail.com
</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5"><IconLinkedIn /></span>
                  <div>
                    <div className="text-slate-200 font-semibold">LinkedIn</div>
<a
  href="https://www.linkedin.com/in/anirudha7/"
  target="_blank"
  rel="noreferrer"
  className="text-slate-300 transition-all duration-200
             hover:text-emerald-400 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]"
>
  https://www.linkedin.com/in/anirudha7/
</a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-0.5"><IconLocation /></span>
                  <div>
                    <div className="text-slate-200 font-semibold">Location</div>
                    <div className="text-slate-300">Madurai, India</div>
                  </div>
                </li>
              </ul>
            </article>
          </Reveal>

          {/* RIGHT: Send Me a Message */}
          <Reveal delay={120}>
            <article className={cardBase}>
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Send Me a Message</h3>

<form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(data.get("subject") || "Hello");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );

    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL
    )}&su=${subject}&body=${body}`;

    // try native mail app
    const a = document.createElement("a");
    a.href = mailto;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();

    // open Gmail fallback shortly after
    setTimeout(() => {
      window.open(gmail, "_blank", "noopener,noreferrer");
    }, 600);
  }}
>
                <Field label="Name">
                  <input
                    name="name"
                    required
                    className="w-full rounded-xl bg-[#0A0A0A] ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-emerald-500/40"
                    placeholder="Your name"
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl bg-[#0A0A0A] ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-emerald-500/40"
                    placeholder="Your email"
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="w-full rounded-xl bg-[#0A0A0A] ring-1 ring-white/10 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-emerald-500/40"
                    placeholder="Your message"
                  />
                </Field>

                {/* Hidden subject just so the email has a title; you can expose it if you like */}
                <input type="hidden" name="subject" value="Portfolio Message" />

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  Send Message <IconPaperPlane />
                </button>
              </form>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-slate-300 mb-2">{label}</span>
      {children}
    </label>
  );
}

/* Icons */
function IconMail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h16a2 2 0 0 1 2 2v.35l-10 5.62L2 8.35V8a2 2 0 0 1 2-2Zm16 12H4a2 2 0 0 1-2-2V9.76l9.38 5.27a2 2 0 0 0 1.94 0L22 9.76V16a2 2 0 0 1-2 2Z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM14.5 9c-2.21 0-3.5 1.204-3.5 2.88V21h4v-6.5c0-.91.74-1.65 1.65-1.65s1.85.74 1.85 1.65V21h4v-7.5C22.5 10.57 20.43 9 18.15 9 16.82 9 15.68 9.56 15 10.45V9h-.5z"/>
    </svg>
  );
}
function IconLocation() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
    </svg>
  );
}
function IconPaperPlane() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/>
    </svg>
  );
}