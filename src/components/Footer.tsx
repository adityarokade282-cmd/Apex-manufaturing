import { Linkedin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Quality', href: '#quality' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const INDUSTRY_LINKS = [
  { label: 'Automotive', href: '#industries' },
  { label: 'Engineering', href: '#industries' },
  { label: 'Construction', href: '#industries' },
  { label: 'Electronics', href: '#industries' },
];

const SOCIALS = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

      {/* Top CTA strip */}
      <div className="container-x relative border-b border-white/10 py-10">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="heading-display text-2xl text-white sm:text-3xl">
              Ready to Start Your Project?
            </h3>
            <p className="mt-2 text-sm text-steel-300">
              Get a detailed quotation within one business day.
            </p>
          </div>
          <a href="#quote" className="btn-primary group">
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="container-x relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-steel-300">
            Precision Manufacturing. Built for Performance.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-steel-400">
            Advanced manufacturing solutions engineered with precision, quality and
            reliability for modern industries.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-steel-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Industries</h4>
          <ul className="mt-5 space-y-3">
            {INDUSTRY_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-steel-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + socials */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">Get In Touch</h4>
          <address className="mt-5 space-y-2 not-italic">
            <p className="text-sm leading-relaxed text-steel-300">
              Plot 24, Industrial Estate,
              <br />
              Pune, Maharashtra 411019, India
            </p>
            <a href="tel:+918000000000" className="block text-sm text-steel-300 transition-colors hover:text-white">
              +91 80000 00000
            </a>
            <a href="mailto:sales@apexmanufacturing.in" className="block text-sm text-steel-300 transition-colors hover:text-white">
              sales@apexmanufacturing.in
            </a>
          </address>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-steel-200 transition-all duration-300 hover:border-accent-400 hover:bg-accent-500 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-steel-400">
            © 2026 Apex Manufacturing Industries. All Rights Reserved.
          </p>
          <p className="text-xs text-steel-500">
            Precision. Quality. Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
