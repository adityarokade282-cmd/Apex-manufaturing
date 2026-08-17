import { useMemo, useState } from 'react';
import { PRODUCTS, PRODUCT_FILTERS, type Product } from '@/data/content';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export function Products() {
  const [filter, setFilter] = useState<(typeof PRODUCT_FILTERS)[number]>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="products" className="section-pad relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-accent-500/10 blur-[100px]" />
      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-accent-400" />
            Our Products
            <span className="h-px w-8 bg-accent-400" />
          </span>
          <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
            Manufactured for Demanding Applications
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-300">
            A complete portfolio of precision-manufactured components and assemblies,
            built to specification and verified at every stage.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-2.5" data-reveal-delay="80">
          {PRODUCT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                filter === f
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'border border-white/10 bg-white/5 text-steel-200 hover:border-white/25 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid — keyed by filter so cards re-animate on each filter change */}
        <div key={filter} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <article
      className="reveal is-visible card-surface group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:border-accent-400/40 hover:shadow-2xl hover:shadow-navy-950/50"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-steel-300">{product.description}</p>

        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs text-steel-200">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between">
          <a
            href="#quote"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#quote"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-steel-200 transition-all duration-300 hover:border-accent-400 hover:text-accent-400"
            aria-label={`Request a quote for ${product.name}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
