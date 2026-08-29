import React from 'react';
import { HeartHandshake, ShieldCheck, Check } from 'lucide-react';

interface SeniorModeCardProps {
  seniorFriendly: boolean;
  onToggleSeniorFriendly: () => void;
  onOpenAssistedModal: () => void;
}

export const SeniorModeCard: React.FC<SeniorModeCardProps> = ({
  seniorFriendly,
  onToggleSeniorFriendly,
  onOpenAssistedModal
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-6">
      <div className="bg-slate-900/80 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden backdrop-blur-xl">
        {/* Background Lotus decoration */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
          <span className="text-9xl text-amber-400">🪷</span>
        </div>

        <div className="space-y-2 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-glow">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
            <span>Senior Devotee Care</span>
          </div>

          <h3 className="font-['EB_Garamond',serif] text-2xl md:text-3xl text-white font-medium">
            Senior-Friendly Pilgrimage Mode
          </h3>

          <p className="font-['Manrope',sans-serif] text-sm text-slate-300 leading-relaxed">
            We prioritize zero-step access, prioritized VIP darshan entry, battery car escorts, and proximate accommodations to ensure a tranquil and physically effortless sacred journey for your parents and elders.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
              <Check className="w-3.5 h-3.5 text-amber-400" /> VIP Senior Passes
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
              <Check className="w-3.5 h-3.5 text-amber-400" /> Battery Carts & Ramps
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-amber-300 font-semibold bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
              <Check className="w-3.5 h-3.5 text-amber-400" /> Verified Wheelchair Access
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 w-full md:w-auto">
          {/* Interactive Toggle */}
          <div
            onClick={onToggleSeniorFriendly}
            className="cursor-pointer flex items-center justify-between gap-4 bg-slate-950/80 px-5 py-3.5 rounded-2xl border border-slate-800 shadow-sm hover:border-amber-500/50 transition-all w-full sm:w-auto"
          >
            <div className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                Senior Mode
              </span>
              <span className="block text-[11px] text-slate-400">
                {seniorFriendly ? 'Active on all itineraries' : 'Inactive'}
              </span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={seniorFriendly}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                seniorFriendly ? 'bg-amber-500' : 'bg-slate-700'
              }`}
            >
              <div
                className={`bg-slate-950 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  seniorFriendly ? 'translate-x-6 bg-white' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Book Assisted Services */}
          <button
            onClick={onOpenAssistedModal}
            className="w-full sm:w-auto px-5 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] active:scale-95 whitespace-nowrap flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Book Assisted Services</span>
          </button>
        </div>
      </div>
    </section>
  );
};
