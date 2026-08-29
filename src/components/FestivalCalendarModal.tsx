import React from 'react';
import { UPCOMING_FESTIVALS } from '../data/mockData';
import { FestivalEvent } from '../types';
import { X, Calendar, MapPin, Sparkles } from 'lucide-react';

interface FestivalCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFestivalForTrip: (festival: FestivalEvent) => void;
}

export const FestivalCalendarModal: React.FC<FestivalCalendarModalProps> = ({
  isOpen,
  onClose,
  onSelectFestivalForTrip
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 rounded-3xl w-full max-w-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] backdrop-blur-xl">
        {/* Header */}
        <div className="p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-glow">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                Sacred Festival Calendar
              </h3>
              <p className="text-[11px] text-amber-400 font-semibold">
                Auspicious Tithis, Muhurtas, and Pilgrimage Celebrations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4">
          {UPCOMING_FESTIVALS.map((fest) => (
            <div
              key={fest.id}
              className="p-4 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col items-center justify-center flex-shrink-0 shadow-glow">
                  <span className="text-[10px] font-bold text-amber-400 uppercase">{fest.month}</span>
                  <span className="font-serif text-2xl font-bold leading-none text-white">{fest.day}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-['EB_Garamond',serif] text-xl font-medium text-white">
                    {fest.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{fest.locations.join(' • ')}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {fest.significance}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onSelectFestivalForTrip(fest);
                  onClose();
                }}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                Plan Yatra
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
