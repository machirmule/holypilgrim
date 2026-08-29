import React from 'react';
import { UPCOMING_FESTIVALS } from '../data/mockData';
import { FestivalEvent } from '../types';
import { Calendar, ChevronRight } from 'lucide-react';

interface UpcomingFestivalsProps {
  onOpenCalendarModal: () => void;
  onSelectFestival: (festival: FestivalEvent) => void;
}

export const UpcomingFestivals: React.FC<UpcomingFestivalsProps> = ({
  onOpenCalendarModal,
  onSelectFestival
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
            Sacred Calendar
          </span>
          <h2 className="font-['EB_Garamond',serif] text-2xl md:text-3xl text-white font-medium">
            Upcoming Festivals
          </h2>
        </div>
        <button
          onClick={onOpenCalendarModal}
          className="text-amber-400 hover:text-amber-300 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 group transition-colors px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Full Calendar</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {UPCOMING_FESTIVALS.map((fest) => (
          <div
            key={fest.id}
            id={`festival-card-${fest.id}`}
            onClick={() => onSelectFestival(fest)}
            className="flex items-center p-4 bg-slate-900/70 rounded-3xl border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all cursor-pointer group backdrop-blur-xl"
          >
            {/* Date Badge */}
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center flex-shrink-0 mr-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
              <span className="font-['Manrope',sans-serif] text-[10px] font-bold uppercase tracking-wider text-amber-400 group-hover:text-slate-950">
                {fest.month}
              </span>
              <span className="font-['EB_Garamond',serif] text-2xl font-bold leading-none text-white group-hover:text-slate-950">
                {fest.day}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-['EB_Garamond',serif] text-lg font-medium text-white group-hover:text-amber-300 transition-colors truncate">
                {fest.name}
              </h3>
              <p className="font-['Manrope',sans-serif] text-xs text-slate-400 truncate">
                {fest.locations.join(', ')}
              </p>
            </div>

            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform ml-2" />
          </div>
        ))}
      </div>
    </section>
  );
};
