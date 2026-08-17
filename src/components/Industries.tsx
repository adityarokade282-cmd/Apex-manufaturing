import { INDUSTRIES } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function Industries() {
  return (
    <section id="industries" className="section-pad relative overflow-hidden bg-navy-900">
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Industries We Serve
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            Trusted Across Industries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-300">
            We manufacture components and assemblies for sectors where precision,
            reliability and consistency are non-negotiable.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <a
              key={ind.name}
              href="#quote"
              className="reveal group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
              data-reveal-delay={i * 60}
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent transition-opacity duration-300 group-hover:from-navy-950/90" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                    {ind.name}
                  </h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-accent-500 group-hover:border-accent-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <span className="mt-1 block h-0.5 w-0 bg-accent-500 transition-all duration-500 group-hover:w-12" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
