import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
  onQuickPlan: (destination: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onQuickPlan }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const samplePrompts = [
    'Plan a 5-day temple journey in Tamil Nadu',
    '3 days in Varanasi for senior parents',
    'Ayodhya Ram Mandir darshan guide',
    'Rishikesh meditation & Ganga Aarti'
  ];

  return (
    <section className="relative w-full min-h-[580px] md:min-h-[640px] flex flex-col items-center justify-center px-5 md:px-12 pt-20 pb-14 overflow-hidden bg-bento-grid">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-1000 scale-105 opacity-40 mix-blend-luminosity"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLFk_0_AW03EVQQ7TXwHqlaH4W2J61jCr3dzdbOpe1bbDfMr1Gf7lN6YCKPcJZuzSEyx7c3PWQnzwddyAYLAKBmL967mrdiaE1IUk5NvV8bw5DEvP4qOSn4T_Jafbo2B27Yzhojjxey47ldRop2H4iHQUOIsa9B_PSiWEAVQYnVoXQm0srWTTRDRvtbwjK5MgZsKk7oDb2fm2SbqY6guD2ghXWf9OIEYylL6q5958ipguFJItLjq4')`
          }}
        />
        {/* Gradients for Bento Dark Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/90 via-[#080808]/60 to-[#080808]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center mt-6 mb-8">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-xl mb-5 shadow-glow">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            India's Sacred AI Concierge
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="text-[11px] text-slate-400 font-medium">Brahma Muhurta Sync</span>
        </div>

        <h2 className="font-['EB_Garamond',serif] text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.12] mb-4 drop-shadow-md">
          Your Journey. Your Faith.<br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
            Your Spiritual Experience.
          </span>
        </h2>
        
        <p className="font-['Manrope',sans-serif] text-sm md:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
          Discover sacred pilgrimage sites and let technology guide your spiritual path with reverence, verified accessibility, and auspicious timings.
        </p>
      </div>

      {/* AI Search Box Bento Container */}
      <div className="relative z-20 w-full max-w-3xl mx-auto bg-slate-900/70 backdrop-blur-2xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-slate-700/60 p-4 md:p-6 transition-all hover:border-amber-500/40">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex-1 w-full relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
            <input
              id="hero-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-950/70 border border-slate-800 focus:border-amber-500 focus:bg-slate-950 focus:outline-none rounded-2xl font-['Manrope',sans-serif] text-sm md:text-base text-white placeholder-slate-500 transition-all shadow-inner"
              placeholder="Plan a 5-day temple journey in Tamil Nadu..."
            />
          </div>
          <button
            id="hero-ask-ai-button"
            type="submit"
            className="w-full md:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl font-['Manrope',sans-serif] text-xs md:text-sm font-bold tracking-wider transition-all whitespace-nowrap shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 active:scale-95 uppercase"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Ask Dharma AI</span>
          </button>
        </form>

        {/* Quick prompt suggestions */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold whitespace-nowrap">Try:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSearchQuery(p);
                onSearch(p);
              }}
              className="text-xs px-3 py-1.5 rounded-full bg-slate-800/60 text-slate-300 hover:bg-amber-500/20 hover:text-amber-300 transition-colors whitespace-nowrap text-left border border-slate-700/40 hover:border-amber-500/40"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
