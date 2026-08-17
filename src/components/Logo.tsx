import { Cog } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`group flex items-center gap-2.5 ${className}`} aria-label="Apex Manufacturing Industries home">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 shadow-lg shadow-accent-500/30 transition-transform duration-300 group-hover:scale-105">
        <Cog className="h-6 w-6 text-white" strokeWidth={2.2} />
        <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-tightest text-white">
          Apex
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-steel-400">
          Manufacturing
        </span>
      </span>
    </a>
  );
}
