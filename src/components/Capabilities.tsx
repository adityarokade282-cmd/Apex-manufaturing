import { CAPABILITIES } from '@/data/content';

export function Capabilities() {
  return (
    <section id="capabilities" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div className="reveal">
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent-400" />
              Manufacturing Capabilities
            </span>
            <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
              A Complete Production Ecosystem
            </h2>
          </div>
          <p className="reveal text-base leading-relaxed text-steel-300" data-reveal-delay="80">
            From raw material to finished, inspected component — our integrated
            capabilities let us control quality and lead time across the entire
            manufacturing process.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="reveal card-surface group p-6 hover:-translate-y-1.5 hover:border-accent-400/40"
                data-reveal-delay={i * 60}
              >
                <div className="relative mb-5 inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-800 ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:from-accent-500 group-hover:to-accent-700">
                  <Icon className="h-7 w-7 text-accent-400 transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
