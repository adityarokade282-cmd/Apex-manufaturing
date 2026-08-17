import { STATS } from '@/data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const POINTS = [
  'Modern, calibrated production equipment',
  'Experienced engineering and quality team',
  'Full material traceability and documentation',
  'Flexible volumes from prototype to production',
];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-navy-600/20 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/32845683/pexels-photo-32845683.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Apex Manufacturing Industries engineering team"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6">
              <div className="glass rounded-xl p-5 shadow-2xl shadow-navy-950/50">
                <div className="font-display text-3xl font-bold text-accent-400">15+</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel-300">
                  Years of Manufacturing Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent-400" />
                About The Company
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                Engineering Reliability Into Every Component
              </h2>
            </div>

            <p className="reveal mt-6 text-base leading-relaxed text-steel-200" data-reveal-delay="80">
              We deliver reliable manufacturing and engineering solutions with a strong
              focus on precision, quality and customer satisfaction. Our modern production
              capabilities and experienced team allow us to manufacture products that meet
              demanding industrial requirements.
            </p>

            <ul className="reveal mt-7 grid gap-3 sm:grid-cols-2" data-reveal-delay="160">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                  <span className="text-sm leading-relaxed text-steel-200">{point}</span>
                </li>
              ))}
            </ul>

            <div className="reveal mt-8" data-reveal-delay="240">
              <a href="#capabilities" className="btn-outline group">
                Our Capabilities
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal group bg-navy-900/80 p-7 text-center transition-colors duration-300 hover:bg-navy-800/80 sm:p-9"
              data-reveal-delay={i * 80}
            >
              <div className="font-display text-4xl font-bold text-white transition-colors duration-300 group-hover:text-accent-400 sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-steel-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
