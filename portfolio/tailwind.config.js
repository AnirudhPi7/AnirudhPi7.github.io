export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // layout / spacing
    "min-h-screen","fixed","top-0","left-0","right-0","z-50","backdrop-blur",
    "border-b","rounded-md","h-14","max-w-6xl","mx-auto","px-4","pt-28","pb-16",
    "mt-4","gap-4","flex","flex-wrap","items-center","justify-between","justify-center","text-center",
    // colors
    "bg-slate-900","bg-slate-900/80","bg-sky-500","hover:bg-sky-600","hover:bg-slate-700",
    "text-slate-100","text-slate-200","text-slate-300","text-white","text-sky-400",
    "border-slate-400","border-slate-700",
    // type sizes / weights
    "text-sm","text-lg","text-4xl","sm:text-5xl","font-bold","font-semibold",
  ],
  theme: { extend: {} },
  plugins: [],
};