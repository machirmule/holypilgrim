import React, { useState } from 'react';
import { GeneratedItinerary, SacredSite } from '../types';
import { SACRED_DESTINATIONS } from '../data/mockData';
import { 
  User, Bookmark, Heart, CheckSquare, ShieldCheck, 
  MapPin, Clock, Trash2, ExternalLink, Sparkles, Check, Plus
} from 'lucide-react';

interface ProfileViewProps {
  savedItineraries: GeneratedItinerary[];
  savedSiteIds: string[];
  onRemoveItinerary: (id: string) => void;
  onRemoveSavedSite: (id: string) => void;
  onSelectDestination: (dest: SacredSite) => void;
  onOpenPlanner: () => void;
  onOpenAssistedModal: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  savedItineraries,
  savedSiteIds,
  onRemoveItinerary,
  onRemoveSavedSite,
  onSelectDestination,
  onOpenPlanner,
  onOpenAssistedModal
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'itineraries' | 'sites' | 'checklist' | 'passes'>('itineraries');

  // Default checklist items
  const [checklist, setChecklist] = useState([
    { id: '1', text: 'Printed Temple Special Entry / VIP Darshan Passes', completed: true },
    { id: '2', text: 'Government ID Cards (Aadhaar / Passport for sanctum entry)', completed: true },
    { id: '3', text: 'Modest Traditional Attire (Dhoti/Kurta or Saree/Salwar)', completed: false },
    { id: '4', text: 'Thick White Cotton Socks (for hot/cold marble courtyards)', completed: false },
    { id: '5', text: 'Brass/Copper Container for Holy Ganga / Saryu Jal', completed: false },
    { id: '6', text: 'Daily Medications & Emergency Contact Card', completed: true },
    { id: '7', text: 'Cash in small denominations for prasad & dakshina', completed: false },
  ]);

  const toggleChecklistItem = (id: string) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const savedSitesList = SACRED_DESTINATIONS.filter(site => savedSiteIds.includes(site.id));

  return (
    <div className="min-h-screen bg-[#080808] pt-20 pb-28 text-slate-200">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12">
        {/* Profile Card Header */}
        <div className="bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-soft mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 backdrop-blur-xl">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-glow">
            <span className="text-3xl font-serif">ॐ</span>
          </div>
          <div className="flex-1 text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" /> Devotee Account
            </div>
            <h1 className="font-['EB_Garamond',serif] text-3xl font-medium text-white">
              My Devotional Diary
            </h1>
            <p className="text-xs text-slate-400">
              Manage your saved itineraries, bookmarked sanctuaries, sacred checklists, and assisted care requests.
            </p>
          </div>

          <button
            onClick={onOpenAssistedModal}
            className="px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)] active:scale-95 whitespace-nowrap"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>Request Senior Escort</span>
          </button>
        </div>

        {/* Sub-tab navigation */}
        <div className="flex space-x-2 border-b border-slate-800 pb-3 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveSubTab('itineraries')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeSubTab === 'itineraries'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved Itineraries ({savedItineraries.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sites')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeSubTab === 'sites'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>Saved Sanctuaries ({savedSitesList.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('checklist')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeSubTab === 'checklist'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Yatra Checklist ({checklist.filter(c => c.completed).length}/{checklist.length})</span>
          </button>
        </div>

        {/* Itineraries Tab Content */}
        {activeSubTab === 'itineraries' && (
          <div>
            {savedItineraries.length === 0 ? (
              <div className="bg-slate-900/60 rounded-3xl p-12 border border-slate-800 text-center space-y-3 backdrop-blur-xl">
                <Bookmark className="w-10 h-10 text-slate-600 mx-auto" />
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                  No Saved Itineraries Yet
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Use the AI Journey Planner to generate and bookmark custom sacred routes.
                </p>
                <button
                  onClick={onOpenPlanner}
                  className="px-6 py-2.5 bg-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors inline-block mt-2"
                >
                  Create New Journey
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedItineraries.map((itinerary) => (
                  <div
                    key={itinerary.id}
                    className="bg-slate-900/70 rounded-3xl p-6 border border-slate-800/80 shadow-soft flex flex-col justify-between backdrop-blur-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                          {itinerary.duration} • {itinerary.destination}
                        </span>
                        <button
                          onClick={() => onRemoveItinerary(itinerary.id)}
                          className="text-red-400 hover:text-red-300 p-1.5 rounded-xl hover:bg-red-950/40"
                          aria-label="Remove Itinerary"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-1">
                        {itinerary.title}
                      </h3>
                      <p className="text-xs text-slate-400 mb-4">
                        Focus: {itinerary.spiritualFocus}
                      </p>

                      <div className="space-y-2 text-xs">
                        {itinerary.dailyPlan.map((d) => (
                          <div key={d.day} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                            <strong className="text-amber-400 block">Day {d.day}: {d.theme}</strong>
                            <span className="text-slate-300 line-clamp-1">{d.morningRitual.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500">Saved to device</span>
                      <button
                        onClick={onOpenPlanner}
                        className="text-amber-400 font-bold uppercase tracking-wider hover:underline"
                      >
                        Open in Planner
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Saved Sites Content */}
        {activeSubTab === 'sites' && (
          <div>
            {savedSitesList.length === 0 ? (
              <div className="bg-slate-900/60 rounded-3xl p-12 border border-slate-800 text-center space-y-3 backdrop-blur-xl">
                <Heart className="w-10 h-10 text-slate-600 mx-auto" />
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                  No Bookmarked Sanctuaries
                </h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Click the heart icon on any temple or destination to save it for quick reference.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedSitesList.map((site) => (
                  <div
                    key={site.id}
                    className="bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800/80 shadow-soft flex flex-col justify-between backdrop-blur-xl"
                  >
                    <div>
                      <div className="relative h-48 bg-slate-950">
                        <img
                          src={site.heroImage}
                          alt={site.name}
                          className="w-full h-full object-cover opacity-85"
                        />
                        <button
                          onClick={() => onRemoveSavedSite(site.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-red-600 text-white shadow-sm hover:scale-105 active:scale-95"
                          aria-label="Remove"
                        >
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                      <div className="p-4 bg-slate-900/90">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                          {site.categoryTag}
                        </span>
                        <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white mb-1">
                          {site.name}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {site.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-0 bg-slate-900/90">
                      <button
                        onClick={() => onSelectDestination(site)}
                        className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        View Sanctum Guide
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Checklist Content */}
        {activeSubTab === 'checklist' && (
          <div className="bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-soft max-w-2xl mx-auto backdrop-blur-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-['EB_Garamond',serif] text-2xl font-medium text-white">
                  Pilgrim Preparation Checklist
                </h3>
                <p className="text-xs text-slate-400">
                  Ensure all sacred and logistical essentials are prepared before starting your yatra.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {checklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 cursor-pointer ${
                    item.completed
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-colors ${
                      item.completed
                        ? 'bg-amber-500 border-amber-500 text-slate-950'
                        : 'border-slate-600 bg-slate-900'
                    }`}
                  >
                    {item.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-xs font-medium ${item.completed ? 'line-through opacity-70' : ''}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
