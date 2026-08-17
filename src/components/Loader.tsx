import { useEffect, useState } from 'react';
import { Cog } from 'lucide-react';

export function Loader() {
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 900);
    const t2 = setTimeout(() => setDone(true), 1500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-navy-950 transition-opacity duration-500 ${
        hidden ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <Cog className="h-12 w-12 animate-spin-slow text-accent-500" strokeWidth={1.5} />
          <span className="absolute inset-0 rounded-full border border-accent-500/30 animate-pulse-ring" />
        </div>
        <div className="flex flex-col items-center">
          <span className="font-display text-lg font-bold uppercase tracking-tightest text-white">
            Apex Manufacturing
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-steel-400">
            Loading
          </span>
        </div>
      </div>
    </div>
  );
}
