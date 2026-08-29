import React from 'react';
import { SACRED_DESTINATIONS } from '../data/mockData';
import { SacredSite } from '../types';
import { MapPin, ChevronRight, Compass } from 'lucide-react';

interface TrendingDestinationsProps {
  onSelectDestination: (dest: SacredSite) => void;
  onOpenPlannerFor: (destinationName: string) => void;
}

export const TrendingDestinations: React.FC<TrendingDestinationsProps> = ({
  onSelectDestination,
  onOpenPlannerFor
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
            Pilgrim Favorites
          </span>
          <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
            Trending Destinations
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SACRED_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            id={`trending-card-${dest.id}`}
            onClick={() => onSelectDestination(dest)}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900/70 border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all duration-300 flex flex-col backdrop-blur-xl"
          >
            <div className="relative h-48 overflow-hidden bg-slate-950">
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 backdrop-blur-md shadow-sm border border-amber-500/30">
                  {dest.faith}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white group-hover:text-amber-300 transition-colors leading-tight">
                  {dest.name}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-0.5 opacity-90">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{dest.state}</span>
                </div>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow bg-slate-900/90 border-t border-slate-800/60">
              <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                {dest.description}
              </p>
              <div className="flex items-center justify-between pt-2.5 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPlannerFor(dest.name);
                  }}
                  className="text-[11px] text-amber-400 font-bold uppercase tracking-wider hover:text-amber-300 flex items-center gap-1"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Plan Yatra</span>
                </button>
                <span className="text-[11px] text-slate-400 font-medium flex items-center gap-0.5 group-hover:text-amber-400">
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
