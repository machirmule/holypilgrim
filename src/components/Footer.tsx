import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenAskDharma: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenAskDharma }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-14 pb-24 md:pb-14 mt-16 text-slate-300">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-1.5 font-['EB_Garamond',serif] text-2xl font-medium text-amber-400">
              <span className="text-amber-400">ॐ</span>
              <span>DharmaAI</span>
            </div>
            <p className="font-['Manrope',sans-serif] text-xs text-slate-400 leading-relaxed">
              Guiding every seeker on their sacred pilgrimage with reverence, verified darshan schedules, and heartfelt senior assistance.
            </p>
          </div>

          {/* Pilgrimages Col */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest text-white mb-4">
              Sacred Circuits
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onNavigateTab('pilgrimages')} className="hover:text-amber-400 transition-colors">
                  Char Dham Yatra
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('pilgrimages')} className="hover:text-amber-400 transition-colors">
                  12 Jyotirlingas Circuit
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('pilgrimages')} className="hover:text-amber-400 transition-colors">
                  51 Shakti Peethas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('pilgrimages')} className="hover:text-amber-400 transition-colors">
                  Buddhist Golden Trail
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Help */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest text-white mb-4">
              Pilgrim Assistance
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={onOpenAskDharma} className="hover:text-amber-400 transition-colors">
                  Ask Dharma AI Concierge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('guide')} className="hover:text-amber-400 transition-colors">
                  AI Sacred Journey Planner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('profile')} className="hover:text-amber-400 transition-colors">
                  Senior Assisted Passes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTab('profile')} className="hover:text-amber-400 transition-colors">
                  Temple Dress Codes & Etiquette
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest text-white mb-3">
              Sacred Updates
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Receive auspicious tithis, festival reminders, and travel advice.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Namaste! You are subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors font-bold"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} DharmaAI. Designed with reverence for all seekers and pilgrims.</p>
          <div className="flex items-center gap-4 text-amber-400/70">
            <span>Om Shanti Shanti Shanti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
