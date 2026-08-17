import { PROJECTS } from '@/data/content';
import { ArrowRight, Building2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-x relative">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-8 bg-accent-400" />
              Projects & Case Studies
            </span>
            <h2 className="heading-display mt-4 text-3xl text-white sm:text-4xl lg:text-5xl">
              Manufacturing That Delivers Results
            </h2>
          </div>
          <a href="#quote" className="btn-outline group">
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className="reveal card-surface group overflow-hidden hover:-translate-y-1.5 hover:border-accent-400/40"
              data-reveal-delay={i * 80}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-300 backdrop-blur-md">
                  <Building2 className="h-3 w-3" />
                  {project.industry}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-300">{project.solution}</p>

                <div className="mt-4 rounded-lg border-l-2 border-accent-500 bg-accent-500/5 px-4 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-400">Result</span>
                  <p className="mt-1 text-sm font-medium text-steel-100">{project.result}</p>
                </div>

                <a
                  href="#quote"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
