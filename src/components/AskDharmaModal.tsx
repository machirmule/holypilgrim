import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, RefreshCw, Volume2, HelpCircle } from 'lucide-react';

interface AskDharmaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  context?: any;
}

export const AskDharmaModal: React.FC<AskDharmaModalProps> = ({
  isOpen,
  onClose,
  initialQuery = '',
  context
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Namaste seeker. I am DharmaAI, your spiritual companion. Ask me anything about sanctum darshan timings, sacred mantras, Vedic rituals, dress codes, or senior-friendly accommodations across India’s holy sites.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialQuery && isOpen) {
      setQuery(initialQuery);
      handleSendMessage(initialQuery);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = textToSend || query;
    if (!messageContent.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, text: messageContent }];
    setMessages(newMessages);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ask-dharma', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: messageContent, context })
      });

      if (!response.ok) {
        throw new Error('Failed to query Dharma AI');
      }

      const data = await response.json();
      setMessages([...newMessages, { role: 'assistant', text: data.answer }]);
    } catch (err: any) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          text: 'Namaste. In sacred tradition, patience and humility are honored. Please ensure you carry traditional attire and check temple trust hours before darshan.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'What is the dress code for Kashi Vishwanath?',
    'How do I book senior citizen special darshan in Tirupati?',
    'What is the meaning of the Maha Mrityunjaya Mantra?',
    'Best time of day to attend Ganga Aarti in Varanasi?'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 rounded-3xl w-full max-w-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh] backdrop-blur-xl">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-glow">
              <span className="text-xl font-serif">ॐ</span>
            </div>
            <div>
              <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white flex items-center gap-1.5">
                <span>Dharma AI Sacred Concierge</span>
              </h3>
              <span className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Enlightened Guidance Ready</span>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-950/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium rounded-br-none'
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                }`}
              >
                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dharma Guide</span>
                  </div>
                )}
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-bl-none p-4 text-xs text-amber-400 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                <span>Consulting sacred lore and verified timings...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick prompt suggestions */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[10px] uppercase font-bold text-slate-400 whitespace-nowrap">Ask:</span>
          {sampleQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(q)}
              className="text-[11px] px-3 py-1 rounded-full bg-slate-900 text-slate-300 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/40 whitespace-nowrap border border-slate-800 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3.5 bg-slate-950/90 border-t border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about rituals, darshan rules, sacred mantras..."
              className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="p-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl transition-all disabled:opacity-50 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              aria-label="Send Query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
