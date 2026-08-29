import React from 'react';
import { Menu, Sparkles, Compass } from 'lucide-react';

interface HeaderProps {
  onOpenPlanner: () => void;
  onOpenAskDharma: () => void;
  onNavigateHome: () => void;
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenMenuDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPlanner,
  onOpenAskDharma,
  onNavigateHome,
  currentTab,
  onSelectTab,
  onOpenMenuDrawer
}) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#080808]/85 backdrop-blur-xl border-b border-slate-800/80 transition-all">
      <div className="flex justify-between items-center px-5 md:px-12 py-3.5 w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-4">
          <button
            id="mobile-menu-button"
            onClick={onOpenMenuDrawer}
            aria-label="Open Navigation Menu"
            className="text-amber-400 hover:text-amber-300 transition-colors p-1.5 rounded-full hover:bg-slate-800/60 active:scale-95 border border-slate-800/60"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 ml-2">
            <button
              onClick={onNavigateHome}
              className={`text-xs font-bold tracking-widest transition-colors uppercase ${
                currentTab === 'explore' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Explore
            </button>
            <button
              onClick={() => onSelectTab('pilgrimages')}
              className={`text-xs font-bold tracking-widest transition-colors uppercase ${
                currentTab === 'pilgrimages' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sacred Circuits
            </button>
            <button
              onClick={() => onSelectTab('guide')}
              className={`text-xs font-bold tracking-widest transition-colors uppercase ${
                currentTab === 'guide' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              AI Planner
            </button>
            <button
              onClick={() => onSelectTab('profile')}
              className={`text-xs font-bold tracking-widest transition-colors uppercase ${
                currentTab === 'profile' ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              My Journeys
            </button>
          </nav>
        </div>

        {/* Central Logo */}
        <button
          onClick={onNavigateHome}
          className="font-['EB_Garamond',serif] text-2xl md:text-3xl font-medium tracking-tight text-white hover:text-amber-300 transition-colors flex items-center gap-1.5"
        >
          <span className="text-amber-400">ॐ</span>
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">DharmaAI</span>
        </button>

        {/* Right CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAskDharma}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Ask Dharma
          </button>
          <button
            id="plan-journey-header-button"
            onClick={onOpenPlanner}
            className="text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all font-['Manrope',sans-serif] text-xs md:text-xs font-bold tracking-widest uppercase py-2 px-3.5 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.2)] active:scale-95"
          >
            Plan Journey
          </button>
        </div>
      </div>
    </header>
  );
};
