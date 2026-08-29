import React from 'react';
import { Compass, Landmark, Sparkles, User } from 'lucide-react';

interface BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center pb-safe pt-2 px-3 bg-slate-950/90 backdrop-blur-2xl border-t border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.8)] rounded-t-2xl h-[76px]">
      {/* Explore */}
      <button
        id="nav-explore-tab"
        onClick={() => onSelectTab('explore')}
        className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-full transition-all active:scale-95 ${
          currentTab === 'explore'
            ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
            : 'text-slate-400 hover:bg-slate-800/50'
        }`}
      >
        <Compass className={`w-5 h-5 mb-1 ${currentTab === 'explore' ? 'text-amber-400' : 'text-slate-400'}`} />
        <span className="text-[10px] tracking-wider uppercase font-semibold">Explore</span>
      </button>

      {/* Pilgrimage */}
      <button
        id="nav-pilgrimage-tab"
        onClick={() => onSelectTab('pilgrimages')}
        className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-full transition-all active:scale-95 ${
          currentTab === 'pilgrimages'
            ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
            : 'text-slate-400 hover:bg-slate-800/50'
        }`}
      >
        <Landmark className={`w-5 h-5 mb-1 ${currentTab === 'pilgrimages' ? 'text-amber-400' : 'text-slate-400'}`} />
        <span className="text-[10px] tracking-wider uppercase font-semibold">Pilgrimage</span>
      </button>

      {/* Guide / AI Planner */}
      <button
        id="nav-guide-tab"
        onClick={() => onSelectTab('guide')}
        className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-full transition-all active:scale-95 ${
          currentTab === 'guide'
            ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
            : 'text-slate-400 hover:bg-slate-800/50'
        }`}
      >
        <Sparkles className={`w-5 h-5 mb-1 ${currentTab === 'guide' ? 'text-amber-400' : 'text-slate-400'}`} />
        <span className="text-[10px] tracking-wider uppercase font-semibold">Guide</span>
      </button>

      {/* Profile */}
      <button
        id="nav-profile-tab"
        onClick={() => onSelectTab('profile')}
        className={`flex flex-col items-center justify-center px-3.5 py-1.5 rounded-full transition-all active:scale-95 ${
          currentTab === 'profile'
            ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30'
            : 'text-slate-400 hover:bg-slate-800/50'
        }`}
      >
        <User className={`w-5 h-5 mb-1 ${currentTab === 'profile' ? 'text-amber-400' : 'text-slate-400'}`} />
        <span className="text-[10px] tracking-wider uppercase font-semibold">Profile</span>
      </button>
    </nav>
  );
};
