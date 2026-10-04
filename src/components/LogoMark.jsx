export default function LogoMark({ dark = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Ashraf home">
      <span className={`grid h-9 w-9 place-items-center rounded-lg text-sm font-black ${dark ? "bg-white text-wine" : "bg-wine text-white"}`}>
        A
      </span>
      <span className={`text-[11px] font-extrabold uppercase tracking-[.2em] ${dark ? "text-white" : "text-ink"}`}>
        Ashraf
      </span>
    </a>
  );
}