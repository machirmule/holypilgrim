import React from 'react';
import { SPIRITUAL_ROUTES } from '../data/mockData';
import { SpiritualRoute } from '../types';
import { Compass, Clock, MapPin } from 'lucide-react';

interface SpiritualRoutesProps {
  onPlanRoute: (route: SpiritualRoute) => void;
}

export const SpiritualRoutes: React.FC<SpiritualRoutesProps> = ({ onPlanRoute }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
      <div className="mb-6">
        <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
          Connected Sanctuaries
        </span>
        <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
          Popular Spiritual Routes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SPIRITUAL_ROUTES.map((item) => (
          <div
            key={item.id}
            id={`route-card-${item.id}`}
            className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  {item.duration}
                </span>
              </div>

              <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-2">
                {item.title}
              </h3>

              <div className="flex items-start gap-1.5 text-xs font-semibold text-amber-400 mb-3">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{item.route}</span>
              </div>

              <p className="font-['Manrope',sans-serif] text-xs md:text-sm text-slate-400 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="space-y-2 mb-6">
                {item.stops.map((stop, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>{stop}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onPlanRoute(item)}
              className="w-full py-3 rounded-2xl border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all font-['Manrope',sans-serif] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 active:scale-95 shadow-sm"
            >
              <Compass className="w-4 h-4" />
              <span>Generate Route Itinerary</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
