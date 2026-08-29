import React from 'react';
import { FaithCategory } from '../types';
import { Landmark, Sun, Sparkles, Users, HeartHandshake, Church, Activity } from 'lucide-react';

interface FaithCategoriesProps {
  selectedFaith: string | null;
  onSelectFaith: (faith: FaithCategory | null) => void;
}

export const FaithCategories: React.FC<FaithCategoriesProps> = ({ selectedFaith, onSelectFaith }) => {
  const categories: { name: FaithCategory; label: string; icon: any; symbol: string }[] = [
    { name: 'Hindu', label: 'Hindu', icon: Landmark, symbol: 'temple_hindu' },
    { name: 'Buddhist', label: 'Buddhist', icon: Sun, symbol: 'brightness_low' },
    { name: 'Jain', label: 'Jain', icon: Sparkles, symbol: 'flare' },
    { name: 'Sikh', label: 'Sikh', icon: Users, symbol: 'diversity_3' },
    { name: 'Sufi', label: 'Sufi', icon: HeartHandshake, symbol: 'auto_awesome' },
    { name: 'Christian', label: 'Christian', icon: Church, symbol: 'church' },
    { name: 'Wellness', label: 'Wellness', icon: Activity, symbol: 'self_improvement' }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-6 overflow-hidden">
      <div className="flex justify-between items-center mb-3.5">
        <h3 className="font-['Manrope',sans-serif] text-xs font-bold text-slate-400 uppercase tracking-widest">
          Explore by Faith
        </h3>
        {selectedFaith && (
          <button
            onClick={() => onSelectFaith(null)}
            className="text-xs text-amber-400 font-bold hover:underline"
          >
            Show All
          </button>
        )}
      </div>

      <div className="flex space-x-3.5 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => {
          const isSelected = selectedFaith === cat.name;
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              id={`faith-category-${cat.name.toLowerCase()}`}
              onClick={() => onSelectFaith(isSelected ? null : cat.name)}
              className={`flex flex-col items-center justify-center min-w-[95px] md:min-w-[110px] p-3.5 rounded-2xl border transition-all duration-200 group ${
                isSelected
                  ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)] text-amber-300'
                  : 'bg-slate-900/70 hover:bg-slate-850 border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <div className={`p-2 rounded-xl mb-1.5 transition-transform group-hover:scale-110 ${isSelected ? 'bg-amber-500 text-slate-950 shadow-sm' : 'bg-slate-800 text-amber-400 border border-slate-700'}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-['Manrope',sans-serif] text-xs font-semibold">
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
