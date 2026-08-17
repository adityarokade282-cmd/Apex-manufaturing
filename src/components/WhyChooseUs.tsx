import { WHY_CHOOSE } from '@/data/content';

export function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Why Choose Us
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            The Apex Advantage
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-300">
            Six reasons leading industrial companies trust Apex with their critical
            manufacturing requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="reveal card-surface group relative overflow-hidden p-7 hover:-translate-y-1.5 hover:border-accent-400/40"
                data-reveal-delay={i * 70}
              >
                <span className="pointer-events-none absolute -right-4 -top-4 font-display text-7xl font-bold text-white/5 transition-colors duration-300 group-hover:text-accent-500/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative">
                  <span className="inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 text-accent-400 ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:from-accent-500 group-hover:to-accent-700 group-hover:text-white">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
