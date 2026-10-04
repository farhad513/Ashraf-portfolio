export default function MediaCard({ item }) {
  return (
    <article className="glass-card group overflow-hidden p-2 transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="px-3 pb-3 pt-4">
        <h3 className="text-sm font-bold text-ink">{item.title}</h3>
        <p className="mt-1 text-[11px] font-medium text-wine">{item.tag}</p>
      </div>
    </article>
  );
}