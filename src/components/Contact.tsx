import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

const CONTACT = {
  address: 'Plot 24, Industrial Estate, Pune, Maharashtra 411019, India',
  phone: '+91 80000 00000',
  email: 'sales@apexmanufacturing.in',
  hours: 'Mon – Sat: 9:00 AM – 6:30 PM IST',
};

export function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Contact Us
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            Let's Talk Manufacturing
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-300">
            Reach out to discuss your requirement, request a quote, or visit our facility.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Contact details */}
          <div className="reveal space-y-4" data-reveal-delay="80">
            <div className="card-surface flex items-start gap-4 p-6 hover:border-accent-400/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/20">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">Company Address</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel-300">{CONTACT.address}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="card-surface flex items-start gap-4 p-6 hover:border-accent-400/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/20">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">Phone</h3>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="mt-1 block text-sm text-steel-300 transition-colors hover:text-accent-400">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="card-surface flex items-start gap-4 p-6 hover:border-accent-400/40">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/20">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">Email</h3>
                  <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-sm text-steel-300 transition-colors hover:text-accent-400">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card-surface flex items-start gap-4 p-6 hover:border-accent-400/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-400 ring-1 ring-inset ring-accent-500/20">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">Business Hours</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel-300">{CONTACT.hours}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="btn-primary group">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a href={`mailto:${CONTACT.email}`} className="btn-outline group">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a
                href="https://wa.me/918000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal" data-reveal-delay="160">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-navy-900">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <span className="relative grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-white shadow-lg shadow-accent-500/30">
                  <MapPin className="h-8 w-8" />
                  <span className="absolute inset-0 rounded-full border border-accent-400/50 animate-pulse-ring" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                    Apex Manufacturing Industries
                  </h3>
                  <p className="mt-1 text-sm text-steel-300">Pune, Maharashtra, India</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel-300">
                  Google Maps Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
