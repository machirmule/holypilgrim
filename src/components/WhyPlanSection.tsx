import React from 'react';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

export const WhyPlanSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Trust & Verification',
      description: 'Every route, verified wheelchair ramp, and accommodation is cross-checked against official temple trust regulations for peace of mind.'
    },
    {
      icon: Clock,
      title: 'Optimized Timings',
      description: 'Synchronize your travel with auspicious Brahma Muhurta hours, special VIP darshan slots, and serene evening Ganga aarti ceremonies.'
    },
    {
      icon: Sparkles,
      title: 'Respect for Tradition',
      description: 'Accurate dress code guidelines, sacred mantras, footwear cloakroom instructions, and authentic ritual significance curated with reverence.'
    }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-5 md:px-12 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-amber-400 font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-widest block mb-1">
          Guiding With Devotion
        </span>
        <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-medium">
          Why Plan with DharmaAI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all flex flex-col items-start backdrop-blur-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 shadow-glow">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-2">
                {pillar.title}
              </h3>
              <p className="font-['Manrope',sans-serif] text-xs md:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
