import React from 'react';
import { JournalArticle } from '../types';
import { X, Clock, BookOpen, Sparkles } from 'lucide-react';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 rounded-3xl w-full max-w-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] backdrop-blur-xl">
        {/* Header Photo */}
        <div className="relative h-56 bg-slate-950">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/70 border border-slate-700 text-white hover:bg-slate-900 transition-colors backdrop-blur-md"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-3 py-1 rounded-full mb-2 inline-block shadow-glow">
              {article.category}
            </span>
            <h3 className="font-['EB_Garamond',serif] text-2xl sm:text-3xl font-medium text-white leading-tight">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 font-['Manrope',sans-serif] text-sm text-slate-200 leading-relaxed bg-slate-900">
          <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{article.readTime}</span>
            <span>•</span>
            <span>Curated by DharmaAI Sacred Council</span>
          </div>

          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300 leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 mt-6 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <p className="text-xs text-slate-300">
              Have questions regarding specific temple wheelchair passes or senior accommodations mentioned in this article? Use <strong className="text-amber-300">Ask Dharma AI</strong> anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
