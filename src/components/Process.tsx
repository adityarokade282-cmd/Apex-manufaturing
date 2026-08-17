import { PROCESS_STEPS } from '@/data/content';

export function Process() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Manufacturing Process
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            From Requirement to Delivery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-300">
            A structured, documented process that keeps quality and schedule under
            control at every step.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal relative flex flex-col items-center text-center"
                data-reveal-delay={i * 90}
              >
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-navy-800 font-display text-lg font-bold text-accent-400 shadow-lg shadow-navy-950/50 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500 hover:text-white">
                  {step.num}
                  <span className="absolute inset-0 rounded-full border border-accent-400/40 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold uppercase tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-steel-300">{step.desc}</p>

                {/* Mobile connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="mt-6 h-8 w-px bg-white/10 sm:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
