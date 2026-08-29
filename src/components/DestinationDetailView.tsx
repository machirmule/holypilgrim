import React, { useState } from 'react';
import { SacredSite } from '../types';
import { 
  ArrowLeft, MapPin, Heart, Sparkles, Clock, ShieldCheck, 
  ChevronDown, ChevronUp, AlertCircle, Accessibility, Compass,
  Shirt, EyeOff, Footprints, Check
} from 'lucide-react';

interface DestinationDetailViewProps {
  destination: SacredSite;
  onBack: () => void;
  onPlanTrip: (destinationName: string) => void;
  onOpenAssistedModal: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({
  destination,
  onBack,
  onPlanTrip,
  onOpenAssistedModal,
  isSaved,
  onToggleSave
}) => {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-[#080808] pt-16 pb-24 text-slate-200">
      {/* Top Back Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 py-4">
        <button
          id="back-to-explore-btn"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors py-1.5 px-3 rounded-xl hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-amber-400" />
          <span>Back to Explore</span>
        </button>
      </div>

      {/* Hero Banner matching Mockup */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 mb-8">
        <div className="relative h-[320px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-soft border border-slate-800 bg-slate-950">
          <img
            src={destination.heroImage}
            alt={destination.name}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

          {/* Top floating badges */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-center">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-amber-300 backdrop-blur-md border border-amber-500/30 shadow-sm uppercase tracking-wider">
              {destination.categoryTag}
            </span>
            <button
              onClick={() => onToggleSave(destination.id)}
              className={`p-2.5 rounded-2xl backdrop-blur-md transition-all active:scale-90 border ${
                isSaved ? 'bg-red-600 text-white border-red-500 shadow-glow' : 'bg-slate-900/80 text-white hover:bg-slate-800 border-slate-700'
              }`}
              aria-label="Save to Devotional Diary"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Bottom Title Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl">
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{destination.location}</span>
            </div>
            <h1 className="font-['EB_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-2 leading-tight">
              {destination.name}
            </h1>
            <p className="font-['Manrope',sans-serif] text-sm md:text-base text-slate-300 opacity-95">
              {destination.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Spiritual Essence, Sacred Sites, AI Suggested Itinerary */}
        <div className="lg:col-span-2 space-y-8">
          {/* Spiritual Essence Box */}
          <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Spiritual Essence</span>
            </div>
            <p className="font-['Manrope',sans-serif] text-sm md:text-base text-slate-200 leading-relaxed">
              {destination.spiritualEssence}
            </p>
          </div>

          {/* Sacred Sites in Destination */}
          <div>
            <h2 className="font-['EB_Garamond',serif] text-2xl md:text-3xl font-medium text-white mb-4">
              Sacred Sites in {destination.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.keyAttractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800/80 shadow-soft hover:shadow-glow hover:border-amber-500/50 transition-all flex flex-col backdrop-blur-xl"
                >
                  <div className="h-44 relative bg-slate-950 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover opacity-85"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-[10px] font-bold bg-slate-950/80 text-amber-300 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-amber-500/30">
                        {attraction.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex-grow flex flex-col justify-between bg-slate-900/90">
                    <div>
                      <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white mb-1">
                        {attraction.name}
                      </h3>
                      <p className="font-['Manrope',sans-serif] text-xs text-slate-400 leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggested Itinerary */}
          <div className="bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>AI Optimized Pilgrimage</span>
                </div>
                <h2 className="font-['EB_Garamond',serif] text-2xl md:text-3xl font-medium text-white">
                  {destination.suggestedItinerary.title}
                </h2>
              </div>
              <button
                onClick={() => onPlanTrip(destination.name)}
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <Compass className="w-3.5 h-3.5 text-slate-950" />
                <span>Customize with AI</span>
              </button>
            </div>

            {/* Schedule Accordion */}
            <div className="space-y-4">
              {destination.suggestedItinerary.schedule.map((dayPlan) => {
                const isExpanded = expandedDay === dayPlan.day;
                return (
                  <div
                    key={dayPlan.day}
                    className="border border-slate-800 rounded-2xl overflow-hidden transition-all bg-slate-950/60"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedDay(isExpanded ? null : dayPlan.day)}
                      className="w-full flex items-center justify-between p-4 bg-slate-900/80 hover:bg-slate-800/80 transition-colors text-left"
                    >
                      <span className="font-['EB_Garamond',serif] text-xl font-medium text-white">
                        {dayPlan.dayTitle}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-amber-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-500" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="p-4 space-y-4 bg-slate-950/90 border-t border-slate-800">
                        {dayPlan.events.map((evt, idx) => (
                          <div key={idx} className="flex items-start gap-3.5">
                            <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="material-symbols-outlined text-base">
                                {evt.icon}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-xs font-bold text-amber-400">
                                  {evt.time}
                                </span>
                                <h4 className="font-['Manrope',sans-serif] text-sm font-semibold text-white">
                                  {evt.title}
                                </h4>
                              </div>
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {evt.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Darshan Timings, Etiquette, Accessibility */}
        <div className="space-y-6">
          {/* Darshan & Aarti Timings */}
          <div className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft backdrop-blur-xl">
            <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Auspicious Timings</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="block font-bold text-amber-400 uppercase tracking-wider text-[10px] mb-0.5">
                  Morning Darshan
                </span>
                <span className="text-slate-200 font-medium">{destination.darshanTimings.morning}</span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <span className="block font-bold text-amber-400 uppercase tracking-wider text-[10px] mb-0.5">
                  Evening Darshan
                </span>
                <span className="text-slate-200 font-medium">{destination.darshanTimings.evening}</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <span className="block font-bold text-amber-300 uppercase tracking-wider text-[10px] mb-0.5">
                  Special Maha Aarti
                </span>
                <span className="text-amber-200 font-semibold">{destination.darshanTimings.specialAarti}</span>
              </div>
            </div>
          </div>

          {/* Temple Etiquette & Rituals */}
          <div className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft space-y-4 backdrop-blur-xl">
            <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Temple Etiquette</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Shirt className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Dress Code:</strong>
                  <span>{destination.etiquette.dressCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Footprints className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Footwear Deposit:</strong>
                  <span>{destination.etiquette.footwear}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <EyeOff className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Photography Rules:</strong>
                  <span>{destination.etiquette.photography}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1.5">
                Sacred Customs:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {destination.etiquette.customs.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Senior Accessibility Meter */}
          <div className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft space-y-3 backdrop-blur-xl">
            <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-amber-400" />
              <span>Senior Accessibility</span>
            </h3>

            <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
              <span className="text-slate-400">Walking Intensity:</span>
              <span className={`font-bold px-2 py-0.5 rounded-full ${
                destination.walkingIntensity === 'Low' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                destination.walkingIntensity === 'Moderate' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {destination.walkingIntensity}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs py-1 border-b border-slate-800">
              <span className="text-slate-400">Wheelchair Support:</span>
              <span className="font-bold text-amber-400">
                {destination.wheelchairAccess}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              {destination.accessibilityTips}
            </p>

            <button
              onClick={onOpenAssistedModal}
              className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] active:scale-95 mt-2"
            >
              Book Assisted Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
