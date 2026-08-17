import { FACILITY_IMAGES } from '@/data/content';
import { ArrowRight, MapPin } from 'lucide-react';

export function Facility() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-900">
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent-400" />
                Our Facility
              </span>
              <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
                A Modern Production Environment
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel-300">
                Our facility houses calibrated CNC, laser, fabrication and inspection
                equipment under one roof — giving us control over quality, lead time
                and traceability from start to finish.
              </p>
            </div>

            <div className="reveal mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4" data-reveal-delay="80">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
              <p className="text-sm leading-relaxed text-steel-200">
                Apex Manufacturing Industries
                <br />
                Plot 24, Industrial Estate, Pune, Maharashtra 411019, India
              </p>
            </div>

            <div className="reveal mt-7" data-reveal-delay="160">
              <a href="#contact" className="btn-primary group">
                Explore Our Facility
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {FACILITY_IMAGES.map((img, i) => (
                <figure
                  key={img.label}
                  className={`reveal group relative overflow-hidden rounded-xl border border-white/10 ${
                    i === 0 ? 'col-span-2 row-span-2 aspect-square sm:aspect-auto' : 'aspect-square'
                  }`}
                  data-reveal-delay={i * 60}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
