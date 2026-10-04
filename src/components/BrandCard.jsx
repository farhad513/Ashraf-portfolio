export default function BrandCard({ item }) {
  return (
    <article className="glass-card flex gap-4 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-xl text-white ${item.tone}`}>
        <div className="text-center">
          <div className="text-xl font-black tracking-tight">{item.initials}</div>
          <div className="mt-0.5 text-[7px] uppercase tracking-[.18em] opacity-80">Brand</div>
        </div>
      </div>
      <div className="min-w-0 pt-1">
        <h3 className="text-sm font-bold text-ink">{item.title}</h3>
        <p className="mt-1 text-[9px] font-bold uppercase tracking-[.14em] text-wine">{item.category}</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">{item.description}</p>
      </div>
    </article>
  );
}