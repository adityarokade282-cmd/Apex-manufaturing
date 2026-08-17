import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/data/content';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/85 backdrop-blur-xl shadow-lg shadow-navy-950/50'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3.5">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-md px-3.5 py-2 text-sm font-medium text-steel-200 transition-colors duration-200 hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent-500 transition-transform duration-300 hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918000000000"
            className="inline-flex items-center gap-2 text-sm font-semibold text-steel-200 transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4 text-accent-400" />
            +91 80000 00000
          </a>
          <a href="#quote" className="btn-primary">
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-steel-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <a href="#quote" onClick={() => setOpen(false)} className="btn-primary w-full">
              Request a Quote
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-ghost w-full">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
