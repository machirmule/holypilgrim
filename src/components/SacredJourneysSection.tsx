import React from 'react';
import { SACRED_DESTINATIONS } from '../data/mockData';
import { SacredSite } from '../types';
import { ChevronRight, Heart, Sparkles } from 'lucide-react';

interface SacredJourneysSectionProps {
  onSelectDestination: (dest: SacredSite) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

export const SacredJourneysSection: React.FC<SacredJourneysSectionProps> = ({
  onSelectDestination,
  savedIds,
  onToggleSave
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-2">
        <div>
          <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
            Curated Experiences
          </span>
          <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
            Featured Sacred Journeys
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SACRED_DESTINATIONS.slice(0, 3).map((site) => {
          const isSaved = savedIds.includes(site.id);
          return (
            <div
              key={site.id}
              id={`featured-card-${site.id}`}
              className="bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all duration-300 flex flex-col group backdrop-blur-xl"
            >
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={site.heroImage}
                  alt={site.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-amber-300 backdrop-blur-md shadow-sm border border-amber-500/30">
                    {site.categoryTag}
                  </span>
                </div>

                {/* Bookmark Heart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleSave(site.id);
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all active:scale-90 border ${
                    isSaved ? 'bg-red-600 text-white border-red-500 shadow-glow' : 'bg-slate-900/60 text-slate-300 hover:text-white border-slate-700/60 hover:bg-slate-800'
                  }`}
                  aria-label="Save to Devotional Diary"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-xs text-amber-300 font-semibold tracking-wide">
                    {site.location}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between bg-slate-900/90 border-t border-slate-800/60">
                <div>
                  <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {site.name}
                  </h3>
                  <p className="font-['Manrope',sans-serif] text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {site.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>AI Guides Ready</span>
                  </div>
                  <button
                    onClick={() => onSelectDestination(site)}
                    className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest hover:text-amber-300 flex items-center gap-1 group/btn"
                  >
                    <span>Explore Shrines</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
