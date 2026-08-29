import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
          Real Journeys, Deep Blessings
        </span>
        <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
          Pilgrim Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft hover:border-slate-700 transition-all flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-700" />
              </div>

              <p className="font-['Manrope',sans-serif] text-sm text-slate-300 italic leading-relaxed mb-6">
                {t.quote}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <h4 className="font-['EB_Garamond',serif] text-lg font-medium text-white">
                {t.author}
              </h4>
              <p className="text-xs text-amber-400 font-medium">
                {t.trip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
