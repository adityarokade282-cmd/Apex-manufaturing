import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div className="container-x">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-6 py-16 sm:px-12 sm:py-20">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/8973680/pexels-photo-8973680.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="h-full w-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-900/60" />
          </div>
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent-500/20 blur-[100px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">
              <span className="h-px w-8 bg-accent-400" />
              Let's Build
              <span className="h-px w-8 bg-accent-400" />
            </span>
            <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
              Have a Manufacturing Requirement?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-200 sm:text-lg">
              Let's turn your specifications into high-quality manufactured products.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="#quote" className="btn-primary group">
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost group">
                <Phone className="h-4 w-4" />
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
