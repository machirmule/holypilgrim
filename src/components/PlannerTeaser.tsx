import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

interface PlannerTeaserProps {
  onOpenPlanner: () => void;
}

export const PlannerTeaser: React.FC<PlannerTeaserProps> = ({ onOpenPlanner }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10 text-center">
      {/* Decorative Lotus Motif */}
      <div className="flex justify-center mb-4 opacity-70">
        <span className="text-2xl text-amber-400">🪷</span>
      </div>

      <div className="max-w-2xl mx-auto space-y-4 bg-slate-900/50 p-8 sm:p-10 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-soft">
        <div className="inline-flex items-center gap-2 text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-glow">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>DharmaAI Journey Planner</span>
        </div>

        <h2 className="font-['EB_Garamond',serif] text-3xl sm:text-4xl md:text-5xl text-white font-medium leading-tight">
          Personalized Spiritual Paths
        </h2>

        <p className="font-['Manrope',sans-serif] text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
          Let our AI curate a journey that respects your devotion, timeline, and physical needs. From temple timings to verified transport, we plan it all.
        </p>

        <div className="pt-2">
          <button
            id="teaser-try-planner-btn"
            onClick={onOpenPlanner}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl font-['Manrope',sans-serif] text-xs md:text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95 inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>Try Planner</span>
          </button>
        </div>
      </div>
    </section>
  );
};
