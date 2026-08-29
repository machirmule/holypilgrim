import React from 'react';
import { JOURNAL_ARTICLES } from '../data/mockData';
import { JournalArticle } from '../types';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

interface TravelJournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

export const TravelJournalSection: React.FC<TravelJournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-10">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
            Wisdom & Insights
          </span>
          <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
            From the Travel Journal
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {JOURNAL_ARTICLES.map((art) => (
          <div
            key={art.id}
            id={`article-card-${art.id}`}
            onClick={() => onSelectArticle(art)}
            className="group cursor-pointer rounded-3xl overflow-hidden bg-slate-900/70 border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all duration-300 flex flex-col sm:flex-row backdrop-blur-xl"
          >
            <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-slate-950">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 sm:hidden">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 border border-amber-500/30">
                  {art.category}
                </span>
              </div>
            </div>

            <div className="sm:w-3/5 p-5 flex flex-col justify-between bg-slate-900/90 border-l border-slate-800/60">
              <div>
                <div className="hidden sm:flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {art.readTime}
                  </span>
                </div>

                <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white group-hover:text-amber-300 transition-colors leading-snug mb-2">
                  {art.title}
                </h3>

                <p className="font-['Manrope',sans-serif] text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {art.summary}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-amber-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Article
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
