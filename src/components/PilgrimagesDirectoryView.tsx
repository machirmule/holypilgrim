import React, { useState } from 'react';
import { POPULAR_PILGRIMAGES } from '../data/mockData';
import { PilgrimageCircuit, FaithCategory } from '../types';
import { Landmark, Clock, Compass, HeartHandshake, Check, Filter } from 'lucide-react';

interface PilgrimagesDirectoryViewProps {
  onSelectCircuit: (circuit: PilgrimageCircuit) => void;
  onPlanCircuit: (circuitName: string) => void;
}

export const PilgrimagesDirectoryView: React.FC<PilgrimagesDirectoryViewProps> = ({
  onSelectCircuit,
  onPlanCircuit
}) => {
  const [selectedFaith, setSelectedFaith] = useState<string>('All');
  const [seniorOnly, setSeniorOnly] = useState<boolean>(false);

  const circuits = [
    ...POPULAR_PILGRIMAGES,
    {
      id: 'southern-divya-desams',
      name: 'Southern Divya Desams',
      tagline: '108 Sacred Abodes of Lord Vishnu',
      faith: 'Hindu' as FaithCategory,
      duration: '10-15 Days',
      intensity: 'Moderate' as const,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo4tSggheRrAJaoJphIb9F0zHYXzwukll1Iq_3LPrHgPE79LenAKivLTfpgVy0ZEiMuBsIoik1i-_CwgQBS9Ezhzd-kZJJ0RpNCp5l3n7b_cs-ZuDIMbNNWCP7ESIVnlIepIs8qgr9kHPwKx6lMuhsa2qf2MZcZGMDNxX_V6-zsgSTdy56KvGrcEGfyKSMqR9D4N070tV6RpwFeYhsTaZN43nNvN_4s1PJp3_WnJDu1EOj7VRdzqw',
      description: 'Journey across ancient Tamil Nadu and Kerala through centuries-old Chola, Pandya, and Pallava architectural sanctuaries.',
      stopsCount: 12,
      stops: ['Srirangam Ranganathaswamy', 'Madurai Koodal Azhagar', 'Tirupati Venkateswara', 'Kanchipuram Varadharaja'],
      keyTemples: ['Sri Ranganathaswamy Temple', 'Thiruvellarai', 'Varadharaja Perumal'],
      highlights: ['Soaring Dravidian gopurams', 'Sacred hymns of the Alvars', 'Grand temple ponds (Pushkarini)'],
      seniorFriendly: true
    },
    {
      id: 'buddhist-eight-great-places',
      name: 'Ashtamahasthan (8 Holy Buddhist Sites)',
      tagline: 'The Eight Great Buddhist Pilgrimage Sites',
      faith: 'Buddhist' as FaithCategory,
      duration: '8-10 Days',
      intensity: 'Reflective' as const,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRsr5YMsv31VRtlKvR1NFwHEOL0dFrlygNuwVCzkvDymw993fqP_u4BCNRiLROhAc1wxKTu-AsOAeAwwXqTPAUl4wNAfuSBwbTWwwLwQqzT7eQeFUEVl3wiyYz_rZ6GkS8QI_4UVKjDMD__susFvttyzF8cenN1b0tDeJGerOPZnrWxRdLgWYpneyT3pIo67Ryxvz19mTb-W095o1ONnZS6KEtAOTV9OtbecgbA2SlNTU4F0ITcN8',
      description: 'Follow the life markers of Lord Buddha from Lumbini, Bodh Gaya, Sarnath, Sravasti, Sankassa, Rajgir, Vaishali to Kushinagar.',
      stopsCount: 8,
      stops: ['Bodh Gaya', 'Sarnath', 'Kushinagar', 'Lumbini', 'Rajgir', 'Sravasti', 'Vaishali', 'Sankassa'],
      keyTemples: ['Mahabodhi Temple', 'Dhamek Stupa', 'Mahaparinirvana Temple'],
      highlights: ['Silent meditation beneath the Bodhi tree', 'Ancient monastic ruins', 'Peace stupas'],
      seniorFriendly: true
    },
    {
      id: 'panj-takht-sikh',
      name: 'Panj Takht Yatra',
      tagline: 'The 5 Seats of Sikh Spiritual Authority',
      faith: 'Sikh' as FaithCategory,
      duration: '9 Days',
      intensity: 'Moderate' as const,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI5_Kc3j19qE__DfQgfB8pyMxRKBBn00mQ4_HM53c9b9Z4sjAqc_qBZoIXJcm6NDbYDw5mqSDoFxM_4DLauJv60viUYSMgVOzXiXNSYb-JvIzRW7A-9mbT_aqDLQxwIqKoXBhNiBwdSiwOBueuHHTk6tPvi4SkW9ISIFx3xce_NrebC6RfCMsbhlv4SfSSVpTq3JHpljlKQeDn71_rnKV8SxD6g1IlxnhnkTHkcIy-bUnUfgrhZIA',
      description: 'The five sacred Takhts spanning Punjab, Bihar, and Maharashtra representing divine justice, seva, and courage.',
      stopsCount: 5,
      stops: ['Akal Takht (Amritsar)', 'Takht Sri Damdama Sahib (Bathinda)', 'Takht Sri Keshgarh Sahib (Anandpur)', 'Takht Sri Patna Sahib (Bihar)', 'Takht Sachkhand Sri Hazur Sahib (Nanded)'],
      keyTemples: ['Akal Takht', 'Takht Sri Patna Sahib', 'Hazur Sahib Nanded'],
      highlights: ['24/7 Gurbani Kirtan', 'Grand Community Langar', 'Historical Relics of the Gurus'],
      seniorFriendly: true
    }
  ];

  const filteredCircuits = circuits.filter((c) => {
    const matchesFaith = selectedFaith === 'All' || c.faith === selectedFaith;
    const matchesSenior = !seniorOnly || c.seniorFriendly;
    return matchesFaith && matchesSenior;
  });

  return (
    <div className="min-h-screen bg-[#080808] pt-20 pb-28 text-slate-200">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-2 border border-amber-500/30 shadow-glow">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Sacred Circuits Directory</span>
          </div>
          <h1 className="font-['EB_Garamond',serif] text-4xl sm:text-5xl font-medium text-white">
            Major Pilgrimage Circuits
          </h1>
          <p className="font-['Manrope',sans-serif] text-base text-slate-300 mt-2">
            Revered multi-temple spiritual circuits across India, organized with verified road transit, resting ashrams, and sanctum protocols.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900/80 rounded-3xl border border-slate-800 shadow-soft mb-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" /> Faith:
            </span>
            {['All', 'Hindu', 'Buddhist', 'Sikh'].map((faith) => (
              <button
                key={faith}
                onClick={() => setSelectedFaith(faith)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedFaith === faith
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {faith}
              </button>
            ))}
          </div>

          <button
            onClick={() => setSeniorOnly(!seniorOnly)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              seniorOnly
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-glow'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-750'
            }`}
          >
            <HeartHandshake className="w-4 h-4 text-amber-400" />
            <span>Senior Friendly Only</span>
            {seniorOnly && <Check className="w-3.5 h-3.5 text-amber-400" />}
          </button>
        </div>

        {/* Circuits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCircuits.map((circuit) => (
            <div
              key={circuit.id}
              className="bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl"
            >
              <div>
                <div className="relative h-56 bg-slate-950 overflow-hidden">
                  <img
                    src={circuit.image}
                    alt={circuit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 backdrop-blur-md shadow-sm border border-amber-500/30">
                      {circuit.faith}
                    </span>
                    {circuit.seniorFriendly && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 backdrop-blur-md shadow-sm flex items-center gap-1 border border-amber-500/30">
                        <HeartHandshake className="w-3 h-3 text-amber-400" /> Senior Friendly
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                      {circuit.duration} • {circuit.stopsCount} Sacred Stops
                    </span>
                    <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white leading-tight">
                      {circuit.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 bg-slate-900/90 border-t border-slate-800/60">
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {circuit.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">
                      Key Highlights:
                    </span>
                    {circuit.highlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 bg-slate-900/90">
                <button
                  onClick={() => onPlanCircuit(circuit.name)}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl font-['Manrope',sans-serif] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                >
                  <Compass className="w-4 h-4 text-slate-950" />
                  <span>Customize with AI Planner</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
