import React from 'react';
import { POPULAR_PILGRIMAGES } from '../data/mockData';
import { PilgrimageCircuit } from '../types';
import { ChevronRight } from 'lucide-react';

interface PopularPilgrimagesProps {
  onSelectCircuit: (circuit: PilgrimageCircuit) => void;
  onViewAllCircuits: () => void;
}

export const PopularPilgrimages: React.FC<PopularPilgrimagesProps> = ({
  onSelectCircuit,
  onViewAllCircuits
}) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-8 mt-2">
      <div className="flex justify-between items-end mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">
            <span>Sacred Circuits</span>
          </div>
          <h2 className="font-['EB_Garamond',serif] text-2xl md:text-3xl text-white font-medium">
            Popular Pilgrimages
          </h2>
          <p className="font-['Manrope',sans-serif] text-xs md:text-sm text-slate-400 mt-0.5">
            Revered circuits across India
          </p>
        </div>
        <button
          onClick={onViewAllCircuits}
          className="text-amber-400 hover:text-amber-300 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest flex items-center gap-1 group transition-colors px-3 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30"
        >
          <span>View All Circuits</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-amber-400" />
        </button>
      </div>

      <div className="flex space-x-5 overflow-x-auto no-scrollbar pb-4 snap-x">
        {POPULAR_PILGRIMAGES.map((circuit) => (
          <div
            key={circuit.id}
            id={`circuit-card-${circuit.id}`}
            onClick={() => onSelectCircuit(circuit)}
            className="snap-start min-w-[280px] sm:min-w-[320px] md:min-w-[350px] rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/70 hover:border-amber-500/50 shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer flex flex-col backdrop-blur-xl"
          >
            <div className="h-[200px] relative overflow-hidden bg-slate-950">
              <img
                src={circuit.image}
                alt={circuit.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-amber-300 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30">
                  {circuit.faith}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-slate-700 text-slate-200">
                  {circuit.duration}
                </span>
                <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  {circuit.intensity}
                </span>
              </div>
            </div>
            <div className="p-5 bg-slate-900/90 flex-grow flex flex-col justify-between border-t border-slate-800/60">
              <div>
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  {circuit.name}
                </h3>
                <p className="font-['Manrope',sans-serif] text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {circuit.tagline}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs text-amber-400 font-bold uppercase tracking-wider">
                <span>Explore Shrines</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
