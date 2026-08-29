import React from 'react';
import { X, Compass, Landmark, Sparkles, User, HeartHandshake, Calendar, HelpCircle, ShieldCheck } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: string) => void;
  onOpenAskDharma: () => void;
  onOpenAssistedModal: () => void;
  onOpenCalendarModal: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenAskDharma,
  onOpenAssistedModal,
  onOpenCalendarModal
}) => {
  if (!isOpen) return null;

  const navigateTo = (tab: string) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="relative w-4/5 max-w-sm bg-slate-900 h-full shadow-2xl border-r border-slate-800 p-6 flex flex-col justify-between z-10 overflow-y-auto backdrop-blur-xl">
        <div className="space-y-6">
          {/* Top Logo & Close */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2 font-['EB_Garamond',serif] text-2xl font-medium text-white">
              <span className="text-amber-400">ॐ</span>
              <span>DharmaAI</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            <button
              onClick={() => navigateTo('explore')}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Explore Sacred India</span>
            </button>

            <button
              onClick={() => navigateTo('pilgrimages')}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Landmark className="w-5 h-5 text-amber-400" />
              <span>Sacred Circuits (Char Dham & Jyotirlingas)</span>
            </button>

            <button
              onClick={() => navigateTo('guide')}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>AI Journey Planner</span>
            </button>

            <button
              onClick={() => navigateTo('profile')}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <User className="w-5 h-5 text-amber-400" />
              <span>My Devotional Diary</span>
            </button>
          </nav>

          {/* Dedicated Features */}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block px-3">
              Services & Rituals
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenAskDharma();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-xs font-bold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors shadow-glow"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Ask Dharma AI Concierge</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenCalendarModal();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80 transition-colors"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Annual Festival Calendar</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenAssistedModal();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl text-left text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800/80 transition-colors"
            >
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Senior Devotee Support</span>
            </button>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500">
          <p>DharmaAI • Sacred Pilgrimage Planner</p>
          <p className="mt-1 text-slate-400">Om Shanti Shanti Shanti</p>
        </div>
      </div>
    </div>
  );
};
