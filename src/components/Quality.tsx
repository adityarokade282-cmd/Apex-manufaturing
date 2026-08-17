import { QUALITY_ITEMS, CERTIFICATIONS } from '@/data/content';
import { Award, Info } from 'lucide-react';

export function Quality() {
  return (
    <section id="quality" className="section-pad relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent-400" />
                Quality Assurance
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                Quality Is Built Into Every Process
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-300">
                Quality is not an inspection at the end — it is engineered into every
                stage of our process. From material verification to final dispatch,
                every component is measured, documented and traceable.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {QUALITY_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="reveal card-surface group flex items-start gap-4 p-5 hover:border-accent-400/40"
                    data-reveal-delay={i * 70}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/20 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-steel-300">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal" data-reveal-delay="120">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950/60 p-8">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative">
                <div className="flex items-center gap-2 text-steel-300">
                  <Info className="h-4 w-4 text-accent-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Demo Certification Data</span>
                </div>
                <h3 className="heading-display mt-3 text-2xl text-white">Certifications & Standards</h3>

                <div className="mt-6 space-y-4">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.title}
                      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/10"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-lg shadow-accent-500/20">
                        <Award className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <div>
                        <h4 className="font-display text-base font-bold uppercase tracking-tight text-white">
                          {cert.title}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-steel-300">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
