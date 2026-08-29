import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { PopularPilgrimages } from './components/PopularPilgrimages';
import { FaithCategories } from './components/FaithCategories';
import { PlannerTeaser } from './components/PlannerTeaser';
import { SacredJourneysSection } from './components/SacredJourneysSection';
import { TrendingDestinations } from './components/TrendingDestinations';
import { UpcomingFestivals } from './components/UpcomingFestivals';
import { SpiritualRoutes } from './components/SpiritualRoutes';
import { SeniorModeCard } from './components/SeniorModeCard';
import { TravelJournalSection } from './components/TravelJournalSection';
import { WhyPlanSection } from './components/WhyPlanSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

import { DestinationDetailView } from './components/DestinationDetailView';
import { JourneyPlannerView } from './components/JourneyPlannerView';
import { PilgrimagesDirectoryView } from './components/PilgrimagesDirectoryView';
import { ProfileView } from './components/ProfileView';

import { AskDharmaModal } from './components/AskDharmaModal';
import { AssistedServicesModal } from './components/AssistedServicesModal';
import { FestivalCalendarModal } from './components/FestivalCalendarModal';
import { ArticleModal } from './components/ArticleModal';
import { MenuDrawer } from './components/MenuDrawer';

import { SACRED_DESTINATIONS } from './data/mockData';
import { SacredSite, PilgrimageCircuit, SpiritualRoute, FestivalEvent, JournalArticle, GeneratedItinerary, FaithCategory } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<'explore' | 'destination-detail' | 'guide' | 'pilgrimages' | 'profile'>('explore');
  const [selectedDestination, setSelectedDestination] = useState<SacredSite | null>(null);
  
  const [plannerDestination, setPlannerDestination] = useState<string>('Varanasi');
  const [plannerRouteTitle, setPlannerRouteTitle] = useState<string>('');
  const [selectedFaith, setSelectedFaith] = useState<FaithCategory | null>(null);

  // Senior mode
  const [seniorFriendly, setSeniorFriendly] = useState<boolean>(() => {
    const saved = localStorage.getItem('dharma_senior_mode');
    return saved ? JSON.parse(saved) : true;
  });

  // Saved destinations
  const [savedSiteIds, setSavedSiteIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('dharma_saved_sites');
    return saved ? JSON.parse(saved) : ['varanasi'];
  });

  // Saved itineraries
  const [savedItineraries, setSavedItineraries] = useState<GeneratedItinerary[]>(() => {
    const saved = localStorage.getItem('dharma_saved_itineraries');
    return saved ? JSON.parse(saved) : [];
  });

  // Modals state
  const [isAskDharmaOpen, setIsAskDharmaOpen] = useState(false);
  const [askDharmaQuery, setAskDharmaQuery] = useState('');
  const [askDharmaContext, setAskDharmaContext] = useState<any>(null);

  const [isAssistedModalOpen, setIsAssistedModalOpen] = useState(false);
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('dharma_senior_mode', JSON.stringify(seniorFriendly));
  }, [seniorFriendly]);

  useEffect(() => {
    localStorage.setItem('dharma_saved_sites', JSON.stringify(savedSiteIds));
  }, [savedSiteIds]);

  useEffect(() => {
    localStorage.setItem('dharma_saved_itineraries', JSON.stringify(savedItineraries));
  }, [savedItineraries]);

  // Handlers
  const handleToggleSaveSite = (id: string) => {
    if (savedSiteIds.includes(id)) {
      setSavedSiteIds(savedSiteIds.filter(item => item !== id));
    } else {
      setSavedSiteIds([...savedSiteIds, id]);
    }
  };

  const handleSaveItinerary = (itinerary: GeneratedItinerary) => {
    if (!savedItineraries.some(i => i.id === itinerary.id)) {
      setSavedItineraries([itinerary, ...savedItineraries]);
    }
  };

  const handleRemoveItinerary = (id: string) => {
    setSavedItineraries(savedItineraries.filter(i => i.id !== id));
  };

  const handleSelectDestination = (dest: SacredSite) => {
    setSelectedDestination(dest);
    setCurrentTab('destination-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlannerFor = (destinationName: string, routeTitle?: string) => {
    setPlannerDestination(destinationName);
    setPlannerRouteTitle(routeTitle || '');
    setCurrentTab('guide');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (searchQuery: string) => {
    setAskDharmaQuery(searchQuery);
    setIsAskDharmaOpen(true);
  };

  const handleAskDharmaWithContext = (query: string, context: any) => {
    setAskDharmaQuery(query);
    setAskDharmaContext(context);
    setIsAskDharmaOpen(true);
  };

  const handleSelectFestivalForTrip = (festival: FestivalEvent) => {
    handleOpenPlannerFor(festival.locations[0] || 'Varanasi', `Festival: ${festival.name}`);
  };

  const handleSelectCircuit = (circuit: PilgrimageCircuit) => {
    handleOpenPlannerFor(circuit.stops[0] || circuit.name, `Circuit: ${circuit.name}`);
  };

  const handlePlanRoute = (route: SpiritualRoute) => {
    handleOpenPlannerFor(route.stops[0] || 'Varanasi', `Route: ${route.title}`);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-slate-100 font-['Manrope',sans-serif] flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Fixed Top Header */}
      <Header
        onOpenPlanner={() => {
          setCurrentTab('guide');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAskDharma={() => {
          setAskDharmaQuery('');
          setIsAskDharmaOpen(true);
        }}
        onNavigateHome={() => {
          setCurrentTab('explore');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMenuDrawer={() => setIsMenuDrawerOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentTab === 'explore' && (
          <div className="animate-fadeIn">
            {/* 1. Hero Section with AI Search */}
            <HeroSection
              onSearch={handleHeroSearch}
              onQuickPlan={(dest) => handleOpenPlannerFor(dest)}
            />

            {/* 2. Popular Pilgrimages (Revered circuits horizontal cards) */}
            <PopularPilgrimages
              onSelectCircuit={handleSelectCircuit}
              onViewAllCircuits={() => {
                setCurrentTab('pilgrimages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 3. Explore by Faith */}
            <FaithCategories
              selectedFaith={selectedFaith}
              onSelectFaith={(faith) => setSelectedFaith(faith)}
            />

            {/* 4. Planner Teaser */}
            <PlannerTeaser
              onOpenPlanner={() => {
                setCurrentTab('guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Featured Sacred Journeys (Varanasi, Ayodhya, Rishikesh) */}
            <SacredJourneysSection
              onSelectDestination={handleSelectDestination}
              savedIds={savedSiteIds}
              onToggleSave={handleToggleSaveSite}
            />

            {/* 6. Trending Destinations Grid */}
            <TrendingDestinations
              onSelectDestination={handleSelectDestination}
              onOpenPlannerFor={handleOpenPlannerFor}
            />

            {/* 7. Upcoming Festivals list */}
            <UpcomingFestivals
              onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
              onSelectFestival={handleSelectFestivalForTrip}
            />

            {/* 8. Popular Spiritual Routes */}
            <SpiritualRoutes
              onPlanRoute={handlePlanRoute}
            />

            {/* 9. Senior-Friendly Pilgrimage Card & Toggle */}
            <SeniorModeCard
              seniorFriendly={seniorFriendly}
              onToggleSeniorFriendly={() => setSeniorFriendly(!seniorFriendly)}
              onOpenAssistedModal={() => setIsAssistedModalOpen(true)}
            />

            {/* 10. Travel Journal Articles */}
            <TravelJournalSection
              onSelectArticle={(art) => setSelectedArticle(art)}
            />

            {/* 11. Why Plan with DharmaAI */}
            <WhyPlanSection />

            {/* 12. Pilgrim Stories & Testimonials */}
            <TestimonialsSection />
          </div>
        )}

        {currentTab === 'destination-detail' && selectedDestination && (
          <DestinationDetailView
            destination={selectedDestination}
            onBack={() => {
              setCurrentTab('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onPlanTrip={(name) => handleOpenPlannerFor(name)}
            onOpenAssistedModal={() => setIsAssistedModalOpen(true)}
            isSaved={savedSiteIds.includes(selectedDestination.id)}
            onToggleSave={handleToggleSaveSite}
          />
        )}

        {currentTab === 'guide' && (
          <JourneyPlannerView
            initialDestination={plannerDestination}
            initialRouteTitle={plannerRouteTitle}
            seniorFriendlyGlobal={seniorFriendly}
            onSaveItinerary={handleSaveItinerary}
            onOpenAskDharmaWithContext={handleAskDharmaWithContext}
            isSavedItinerary={(id) => savedItineraries.some(i => i.id === id)}
          />
        )}

        {currentTab === 'pilgrimages' && (
          <PilgrimagesDirectoryView
            onSelectCircuit={handleSelectCircuit}
            onPlanCircuit={(name) => handleOpenPlannerFor(name)}
          />
        )}

        {currentTab === 'profile' && (
          <ProfileView
            savedItineraries={savedItineraries}
            savedSiteIds={savedSiteIds}
            onRemoveItinerary={handleRemoveItinerary}
            onRemoveSavedSite={handleToggleSaveSite}
            onSelectDestination={handleSelectDestination}
            onOpenPlanner={() => {
              setCurrentTab('guide');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAssistedModal={() => setIsAssistedModalOpen(true)}
          />
        )}
      </main>

      {/* Global Modals */}
      <AskDharmaModal
        isOpen={isAskDharmaOpen}
        onClose={() => setIsAskDharmaOpen(false)}
        initialQuery={askDharmaQuery}
        context={askDharmaContext}
      />

      <AssistedServicesModal
        isOpen={isAssistedModalOpen}
        onClose={() => setIsAssistedModalOpen(false)}
      />

      <FestivalCalendarModal
        isOpen={isCalendarModalOpen}
        onClose={() => setIsCalendarModalOpen(false)}
        onSelectFestivalForTrip={handleSelectFestivalForTrip}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
        onSelectTab={(tab) => {
          setCurrentTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAskDharma={() => {
          setAskDharmaQuery('');
          setIsAskDharmaOpen(true);
        }}
        onOpenAssistedModal={() => setIsAssistedModalOpen(true)}
        onOpenCalendarModal={() => setIsCalendarModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        onNavigateTab={(tab) => {
          setCurrentTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAskDharma={() => {
          setAskDharmaQuery('');
          setIsAskDharmaOpen(true);
        }}
      />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
export default App;
