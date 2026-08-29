export type FaithCategory = 'Hindu' | 'Buddhist' | 'Jain' | 'Sikh' | 'Sufi' | 'Christian' | 'Wellness';

export interface SacredSite {
  id: string;
  name: string;
  location: string;
  state: string;
  faith: FaithCategory;
  categoryTag: string;
  subtitle: string;
  heroImage: string;
  description: string;
  spiritualEssence: string;
  walkingIntensity: 'Low' | 'Moderate' | 'High';
  wheelchairAccess: 'Limited' | 'Partial' | 'Good' | 'Full';
  accessibilityTips: string;
  bestTimeToVisit: string;
  darshanTimings: {
    morning: string;
    evening: string;
    specialAarti: string;
  };
  etiquette: {
    dressCode: string;
    footwear: string;
    photography: string;
    customs: string[];
  };
  keyAttractions: {
    id: string;
    name: string;
    image: string;
    description: string;
    highlight: string;
  }[];
  suggestedItinerary: {
    days: number;
    title: string;
    schedule: {
      day: number;
      dayTitle: string;
      events: {
        time?: string;
        icon: string;
        title: string;
        description: string;
      }[];
    }[];
  };
}

export interface PilgrimageCircuit {
  id: string;
  name: string;
  tagline: string;
  faith: FaithCategory;
  duration: string;
  intensity: 'Gentle' | 'Moderate' | 'High Intensity' | 'Reflective';
  image: string;
  description: string;
  stopsCount: number;
  stops: string[];
  keyTemples: string[];
  highlights: string[];
  seniorFriendly: boolean;
}

export interface FestivalEvent {
  id: string;
  name: string;
  month: string;
  day: string;
  dateStr: string;
  locations: string[];
  significance: string;
  rituals: string[];
}

export interface SpiritualRoute {
  id: string;
  title: string;
  route: string;
  duration: string;
  description: string;
  stops: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  readTime: string;
  category: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location?: string;
  rating: number;
  quote: string;
  trip: string;
}

export interface JourneyPlannerParams {
  destination: string;
  duration: string; // "1d" | "3d" | "5d" | "7+"
  companions: string; // "Solo Seeker" | "Family" | "Senior Citizens" | "Group Pilgrimage"
  intents: string[]; // ["Temples", "Meditation", "Festivals", "History", "Wellness"]
  seniorFriendly: boolean;
  notes?: string;
}

export interface GeneratedItinerary {
  id: string;
  title: string;
  destination: string;
  duration: string;
  spiritualFocus: string;
  seniorModeActive: boolean;
  dailyPlan: {
    day: number;
    theme: string;
    morningRitual: {
      time: string;
      activity: string;
      spiritualSignificance: string;
      seniorTip?: string;
    };
    afternoonDarshan: {
      time: string;
      activity: string;
      spiritualSignificance: string;
      dressCodeNote?: string;
    };
    eveningAarti: {
      time: string;
      activity: string;
      spiritualSignificance: string;
    };
    restAndReflection: string;
  }[];
  practicalTips: {
    dressCode: string;
    transportRecommendation: string;
    seniorAccessibilityNotes: string;
    auspiciousTimings: string;
    prasadEtiquette: string;
  };
  recommendedMantras: {
    name: string;
    sanskrit: string;
    meaning: string;
  }[];
}
