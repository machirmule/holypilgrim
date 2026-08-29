import React, { useState, useEffect } from 'react';
import { JourneyPlannerParams, GeneratedItinerary } from '../types';
import { 
  Sparkles, Compass, Clock, Users, HeartHandshake, 
  MapPin, CheckCircle2, BookmarkPlus, Printer, 
  HelpCircle, AlertCircle, RefreshCw, Sun, Moon, 
  Flame, BookOpen, ChevronRight, Check
} from 'lucide-react';

interface JourneyPlannerViewProps {
  initialDestination?: string;
  initialRouteTitle?: string;
  seniorFriendlyGlobal: boolean;
  onSaveItinerary: (itinerary: GeneratedItinerary) => void;
  onOpenAskDharmaWithContext: (query: string, context: any) => void;
  isSavedItinerary: (id: string) => boolean;
}

export const JourneyPlannerView: React.FC<JourneyPlannerViewProps> = ({
  initialDestination = 'Varanasi',
  initialRouteTitle,
  seniorFriendlyGlobal,
  onSaveItinerary,
  onOpenAskDharmaWithContext,
  isSavedItinerary
}) => {
  const [destination, setDestination] = useState(initialDestination);
  const [duration, setDuration] = useState('3d');
  const [companions, setCompanions] = useState('Family');
  const [selectedIntents, setSelectedIntents] = useState<string[]>(['Temples', 'Meditation']);
  const [seniorFriendly, setSeniorFriendly] = useState(seniorFriendlyGlobal);
  const [notes, setNotes] = useState('');
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<GeneratedItinerary | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync with global senior friendly state
  useEffect(() => {
    setSeniorFriendly(seniorFriendlyGlobal);
  }, [seniorFriendlyGlobal]);

  // Sync initial destination
  useEffect(() => {
    if (initialDestination) {
      setDestination(initialDestination);
    }
  }, [initialDestination]);

  const intentOptions = ['Temples', 'Meditation', 'Festivals', 'History', 'Wellness', 'Sacred Waters'];
  const durationOptions = [
    { label: '1 Day', value: '1d' },
    { label: '3 Days', value: '3d' },
    { label: '5 Days', value: '5d' },
    { label: '7+ Days', value: '7+' }
  ];
  const companionOptions = ['Solo Seeker', 'Family', 'Senior Citizens', 'Group Pilgrimage'];

  const toggleIntent = (intent: string) => {
    if (selectedIntents.includes(intent)) {
      setSelectedIntents(selectedIntents.filter(i => i !== intent));
    } else {
      setSelectedIntents([...selectedIntents, intent]);
    }
  };

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/plan-journey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination,
          duration,
          companions,
          intents: selectedIntents,
          seniorFriendly,
          notes: initialRouteTitle ? `Custom route based on: ${initialRouteTitle}. ${notes}` : notes
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate journey');
      }

      const data = await response.json();
      if (data.itinerary) {
        setGeneratedPlan(data.itinerary);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMessage('Unable to generate custom itinerary at this moment. Showing curated plan.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] pt-20 pb-28 text-slate-200">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Planner Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-2 border border-amber-500/30 shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Sacred Guide</span>
          </div>
          <h1 className="font-['EB_Garamond',serif] text-4xl sm:text-5xl font-medium text-white leading-tight">
            AI Journey Planner
          </h1>
          <p className="font-['Manrope',sans-serif] text-base text-slate-300 mt-2">
            Customized sacred paths aligned with your spiritual intentions, auspicious temple schedules, and physical comfort.
          </p>
        </div>

        {/* Form and Generated Result Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Planner Configuration Card */}
          <div className="lg:col-span-5 bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-soft sticky top-24 backdrop-blur-xl">
            <h2 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-5 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <span>Configure Your Pilgrimage</span>
            </h2>

            <form onSubmit={handleGenerate} className="space-y-5">
              {/* Destination Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Destination / Circuit
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Varanasi, Ayodhya, Tirupati, Kedarnath..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Duration Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setDuration(opt.value)}
                      className={`py-2 px-2 rounded-2xl text-xs font-bold transition-all ${
                        duration === opt.value
                          ? 'bg-amber-500 text-slate-950 shadow-sm'
                          : 'bg-slate-950/80 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Companions Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Companions
                </label>
                <select
                  value={companions}
                  onChange={(e) => setCompanions(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-all"
                >
                  {companionOptions.map((comp) => (
                    <option key={comp} value={comp} className="bg-slate-900 text-slate-200">
                      {comp}
                    </option>
                  ))}
                </select>
              </div>

              {/* Spiritual Intent */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Intent (Select Multiple)
                </label>
                <div className="flex flex-wrap gap-2">
                  {intentOptions.map((intent) => {
                    const isSelected = selectedIntents.includes(intent);
                    return (
                      <button
                        key={intent}
                        type="button"
                        onClick={() => toggleIntent(intent)}
                        className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-glow'
                            : 'bg-slate-950/80 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                        }`}
                      >
                        {intent}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Senior-Friendly Mode Switch */}
              <div
                onClick={() => setSeniorFriendly(!seniorFriendly)}
                className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between cursor-pointer hover:border-amber-500/40 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">
                      Senior-Friendly Mode
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Prioritize ramps, minimal stairs, battery carts & rest windows
                  </p>
                </div>

                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                    seniorFriendly ? 'bg-amber-500' : 'bg-slate-800'
                  }`}
                >
                  <div
                    className={`bg-slate-950 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      seniorFriendly ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Special Wishes or Dietary Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need pure sattvic meals, avoiding steep stair climbs..."
                  className="w-full px-3.5 py-2 bg-slate-950/80 border border-slate-700 focus:border-amber-500 rounded-2xl text-xs font-medium text-white focus:outline-none focus:ring-1 focus:ring-amber-500/50 resize-none placeholder:text-slate-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                id="generate-journey-submit-btn"
                type="submit"
                disabled={isGenerating}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl font-['Manrope',sans-serif] text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Curating Sacred Path...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>Generate My Journey</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Generated Itinerary Output Column */}
          <div className="lg:col-span-7 space-y-6">
            {isGenerating && (
              <div className="bg-slate-900/80 rounded-3xl p-10 border border-slate-800 text-center space-y-4 shadow-soft backdrop-blur-xl">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto animate-pulse shadow-glow">
                  <span className="text-2xl font-serif">ॐ</span>
                </div>
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                  Harmonizing Auspicious Timings...
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  DharmaAI is consulting verified temple trust schedules, Brahma Muhurta hours, and accessibility coordinates for {destination}.
                </p>
              </div>
            )}

            {!isGenerating && !generatedPlan && (
              <div className="bg-slate-900/70 rounded-3xl p-8 border border-slate-800 text-center space-y-4 backdrop-blur-xl">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-glow">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                  Ready to Craft Your Sacred Yatra
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Configure your preferences on the left or tap "Generate My Journey" to instantly receive an authentic, step-by-step spiritual itinerary.
                </p>
                <button
                  type="button"
                  onClick={() => handleGenerate()}
                  className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-sm"
                >
                  Generate Default 3-Day Varanasi Yatra
                </button>
              </div>
            )}

            {!isGenerating && generatedPlan && (
              <div className="space-y-6">
                {/* Result Header Card */}
                <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-soft backdrop-blur-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                          {generatedPlan.duration.toUpperCase()} • {generatedPlan.destination}
                        </span>
                        {generatedPlan.seniorModeActive && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                            <HeartHandshake className="w-3 h-3 text-amber-400" /> Senior Mode Active
                          </span>
                        )}
                      </div>
                      <h2 className="font-['EB_Garamond',serif] text-2xl sm:text-3xl font-medium text-white">
                        {generatedPlan.title}
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Focus: {generatedPlan.spiritualFocus}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSaveItinerary(generatedPlan)}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                          isSavedItinerary(generatedPlan.id)
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-950 text-amber-300 hover:bg-slate-800 border border-amber-500/30'
                        }`}
                      >
                        <BookmarkPlus className="w-4 h-4" />
                        <span>{isSavedItinerary(generatedPlan.id) ? 'Saved' : 'Save Itinerary'}</span>
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="p-2.5 rounded-2xl bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800"
                        aria-label="Print Itinerary"
                      >
                        <Printer className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Daily Schedule Breakdown */}
                  <div className="space-y-6 pt-6">
                    {generatedPlan.dailyPlan.map((day) => (
                      <div
                        key={day.day}
                        className="bg-slate-950/70 rounded-3xl p-5 border border-slate-800 space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-['EB_Garamond',serif] text-xl font-medium text-white">
                            Day {day.day}: {day.theme}
                          </h3>
                        </div>

                        {/* Morning */}
                        <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sun className="w-4 h-4" />
                          </div>
                          <div className="text-xs space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-amber-400">{day.morningRitual.time}</span>
                              <strong className="text-white">{day.morningRitual.activity}</strong>
                            </div>
                            <p className="text-slate-400">{day.morningRitual.spiritualSignificance}</p>
                            {day.morningRitual.seniorTip && (
                              <p className="text-[11px] text-amber-300 font-medium mt-1">
                                💡 Senior Care: {day.morningRitual.seniorTip}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Afternoon */}
                        <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="text-xs space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-amber-400">{day.afternoonDarshan.time}</span>
                              <strong className="text-white">{day.afternoonDarshan.activity}</strong>
                            </div>
                            <p className="text-slate-400">{day.afternoonDarshan.spiritualSignificance}</p>
                            {day.afternoonDarshan.dressCodeNote && (
                              <p className="text-[11px] text-slate-400 italic">
                                Note: {day.afternoonDarshan.dressCodeNote}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Evening */}
                        <div className="flex items-start gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Flame className="w-4 h-4" />
                          </div>
                          <div className="text-xs space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-amber-400">{day.eveningAarti.time}</span>
                              <strong className="text-white">{day.eveningAarti.activity}</strong>
                            </div>
                            <p className="text-slate-400">{day.eveningAarti.spiritualSignificance}</p>
                          </div>
                        </div>

                        {/* Rest Note */}
                        {day.restAndReflection && (
                          <div className="text-[11px] text-slate-400 px-3.5 py-2 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-2">
                            <Moon className="w-3.5 h-3.5 text-amber-400" />
                            <span>Reflection: {day.restAndReflection}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Practical Guidance */}
                  {generatedPlan.practicalTips && (
                    <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                      <h4 className="font-['EB_Garamond',serif] text-xl font-medium text-white">
                        Practical & Devotional Guidance
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                          <strong className="text-amber-400 block mb-0.5">Attire Guidelines:</strong>
                          <span className="text-slate-300">{generatedPlan.practicalTips.dressCode}</span>
                        </div>
                        <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                          <strong className="text-amber-400 block mb-0.5">Transport & Ramps:</strong>
                          <span className="text-slate-300">{generatedPlan.practicalTips.transportRecommendation}</span>
                        </div>
                        <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                          <strong className="text-amber-400 block mb-0.5">Auspicious Timings:</strong>
                          <span className="text-slate-300">{generatedPlan.practicalTips.auspiciousTimings}</span>
                        </div>
                        <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl">
                          <strong className="text-amber-400 block mb-0.5">Prasad Protocol:</strong>
                          <span className="text-slate-300">{generatedPlan.practicalTips.prasadEtiquette}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Recommended Mantras */}
                  {generatedPlan.recommendedMantras && generatedPlan.recommendedMantras.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                      <h4 className="font-['EB_Garamond',serif] text-xl font-medium text-white flex items-center gap-2">
                        <span className="text-amber-400">ॐ</span>
                        <span>Sacred Chants for this Pilgrimage</span>
                      </h4>
                      <div className="space-y-3">
                        {generatedPlan.recommendedMantras.map((m, idx) => (
                          <div key={idx} className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                              {m.name}
                            </span>
                            <p className="font-serif text-base text-amber-200 font-medium leading-relaxed">
                              {m.sanskrit}
                            </p>
                            <p className="text-xs text-slate-300 italic">
                              "{m.meaning}"
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ask Dharma AI CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs text-slate-400 text-center sm:text-left">
                      Have questions about this route or need temple priest contacts?
                    </span>
                    <button
                      onClick={() => onOpenAskDharmaWithContext(`Can you explain more details about the ${generatedPlan.title}?`, generatedPlan)}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-slate-950" />
                      <span>Consult Dharma AI</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
