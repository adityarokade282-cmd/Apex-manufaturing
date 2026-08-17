import { ArrowRight, ShieldCheck, Cpu, BadgeCheck, Truck } from 'lucide-react';

const TRUST = [
  { icon: ShieldCheck, label: 'ISO Certified' },
  { icon: Cpu, label: 'Advanced Technology' },
  { icon: BadgeCheck, label: 'Quality Assured' },
  { icon: Truck, label: 'On-Time Delivery' },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/38427501/pexels-photo-38427501.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Industrial manufacturing facility with advanced machinery"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent-500/20 blur-[120px]" />

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="reveal is-visible animate-fade-up">
            <span className="eyebrow mb-5">
              <span className="h-px w-8 bg-accent-400" />
              Apex Manufacturing Industries
            </span>
          </div>

          <h1 className="reveal is-visible heading-display text-balance text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl" style={{ animationDelay: '80ms' }}>
            Precision Manufacturing.
            <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
              Built for Performance.
            </span>
          </h1>

          <p className="reveal is-visible mt-6 max-w-xl text-base leading-relaxed text-steel-200 sm:text-lg" style={{ animationDelay: '160ms' }}>
            Advanced manufacturing solutions engineered with precision, quality and
            reliability for modern industries.
          </p>

          <div className="reveal is-visible mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '240ms' }}>
            <a href="#quote" className="btn-primary group">
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#products" className="btn-ghost group">
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Trust bar */}
          <div className="reveal is-visible mt-14" style={{ animationDelay: '320ms' }}>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6">
              {TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-accent-400" />
                  <span className="text-sm font-semibold uppercase tracking-wider text-steel-200">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-steel-400 lg:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-3 w-px animate-float bg-accent-400" />
        </span>
      </div>
    </section>
  );
}
