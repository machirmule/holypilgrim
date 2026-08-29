import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header telemetry
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Sacred Journey Planning Endpoint
app.post("/api/plan-journey", async (req, res) => {
  try {
    const { destination, duration, companions, intents, seniorFriendly, notes } = req.body;

    const ai = getGeminiClient();

    if (!ai) {
      // High quality structured fallback when GEMINI_API_KEY is not configured
      const durationNum = duration === "1d" ? 1 : duration === "3d" ? 3 : duration === "5d" ? 5 : 7;
      const targetDest = destination || "Varanasi";
      
      const fallbackItinerary = {
        id: `journey-${Date.now()}`,
        title: `${durationNum}-Day Sacred ${targetDest} Pilgrimage`,
        destination: targetDest,
        duration: duration || "3d",
        spiritualFocus: intents?.join(", ") || "Temples & Meditation",
        seniorModeActive: !!seniorFriendly,
        dailyPlan: Array.from({ length: durationNum }).map((_, i) => ({
          day: i + 1,
          theme: i === 0 ? "Purification & Sacred Arrival" : i === 1 ? "Deep Devotion & Main Sanctum Darshan" : "Sacred Contemplation & Heritage Exploration",
          morningRitual: {
            time: seniorFriendly ? "06:30 AM" : "05:00 AM",
            activity: `Morning Holy Snan and Prayers at ${targetDest} sacred waters/shrine`,
            spiritualSignificance: "Cleanses karmic burdens and aligns the mind with dawn auspicious energy (Brahma Muhurta).",
            seniorTip: seniorFriendly ? "Wheelchair/battery rickshaw transfer arranged directly from hotel to bathing platform." : undefined,
          },
          afternoonDarshan: {
            time: "10:30 AM",
            activity: `Sanctum Darshan at Principal Shrines in ${targetDest}`,
            spiritualSignificance: "Offering Bel leaves/flowers and receiving sanctified prasad from chief priests.",
            dressCodeNote: "Traditional attire required (Dhoti/Kurta or Saree/Salwar).",
          },
          eveningAarti: {
            time: "06:30 PM",
            activity: `Grand Evening Aarti & Diya Lamp Offering along the sacred river/courtyard`,
            spiritualSignificance: "The cosmic fire ritual dissipates darkness and uplifts spiritual consciousness.",
          },
          restAndReflection: seniorFriendly ? "Dedicated 2.5 hour afternoon rest window with light sattvic herbal tea." : "Evening meditation and silent walking contemplation."
        })),
        practicalTips: {
          dressCode: "Modest traditional attire. Natural cotton or silk in white, saffron, or ochre colors.",
          transportRecommendation: seniorFriendly ? "Verified low-floor air-conditioned cabs and pre-booked battery rickshaws for narrow lanes." : "Shared e-rickshaws and peaceful walking circuits.",
          seniorAccessibilityNotes: seniorFriendly ? "Prioritized VIP senior darshan gates selected; all rest intervals verified flat with minimum walking steps." : "Moderate walking required. Keep hydration flasks handy.",
          auspiciousTimings: "Brahma Muhurta (04:30 AM - 06:00 AM) and Sandhya Aarti (06:30 PM - 07:30 PM).",
          prasadEtiquette: "Receive sacred prasad with both hands cupped or right hand extended with left hand supporting.",
        },
        recommendedMantras: [
          { name: "Maha Mrityunjaya Mantra", sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥", meaning: "We worship the Three-Eyed Lord who is fragrant and nourishes all beings. May we be liberated from mortal bondage into immortality." },
          { name: "Gayatri Mantra", sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥", meaning: "We meditate on the divine light of the Sun that illuminates our intellect with spiritual wisdom." }
        ]
      };

      return res.json({ success: true, itinerary: fallbackItinerary, source: "curated-engine" });
    }

    // Call Gemini 3.7 Flash for bespoke AI spiritual generation
    const prompt = `You are DharmaAI, an empathetic, revered spiritual guide and pilgrimage planner across India's sacred heritage sites.
Create a detailed, respectful, and culturally authentic sacred pilgrimage itinerary based on these parameters:
- Destination: ${destination || "Varanasi"}
- Duration: ${duration || "3d"}
- Companions: ${companions || "Solo Seeker"}
- Spiritual Intents: ${intents ? intents.join(", ") : "Temples, Meditation"}
- Senior-Friendly Mode: ${seniorFriendly ? "YES (Strict requirement: flat terrain, zero steep stairs, frequent rest stops, wheelchair/e-rickshaw assistance, medical proximity, relaxed morning timings)" : "NO (Standard physical pace)"}
- Additional Notes: ${notes || "None"}

Respond strictly with valid JSON conforming to the following structure:
{
  "id": "journey-unique-id",
  "title": "Inspiring Title for the Pilgrimage",
  "destination": "${destination || "Varanasi"}",
  "duration": "${duration || "3d"}",
  "spiritualFocus": "Summary of devotional theme",
  "seniorModeActive": ${seniorFriendly ? true : false},
  "dailyPlan": [
    {
      "day": 1,
      "theme": "Theme of Day 1",
      "morningRitual": {
        "time": "e.g. 05:30 AM",
        "activity": "Detailed activity description",
        "spiritualSignificance": "Why this is sacred",
        "seniorTip": "Accessibility tip if applicable"
      },
      "afternoonDarshan": {
        "time": "e.g. 10:30 AM",
        "activity": "Temple Darshan specifics",
        "spiritualSignificance": "Devotional aspect",
        "dressCodeNote": "Clothing advice"
      },
      "eveningAarti": {
        "time": "e.g. 06:45 PM",
        "activity": "Evening prayer/aarti details",
        "spiritualSignificance": "Symbolic meaning"
      },
      "restAndReflection": "Guidance on rest & introspection"
    }
  ],
  "practicalTips": {
    "dressCode": "Strict clothing guidelines",
    "transportRecommendation": "Transport & accessibility mode",
    "seniorAccessibilityNotes": "Important notes on physical ease",
    "auspiciousTimings": "Darshan & puja hours",
    "prasadEtiquette": "How to receive and share prasad"
  },
  "recommendedMantras": [
    {
      "name": "Mantra Name",
      "sanskrit": "Devanagari text",
      "meaning": "English spiritual translation"
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        systemInstruction: "You are DharmaAI, an authentic and reverent Indian spiritual pilgrimage planning assistant. Provide accurate darshan details, respect traditions of all faiths (Hindu, Buddhist, Jain, Sikh, Sufi, Christian), and ensure thoughtful accommodations for seniors."
      }
    });

    const jsonText = response.text ? response.text.trim() : "";
    const parsedItinerary = JSON.parse(jsonText);

    return res.json({ success: true, itinerary: parsedItinerary, source: "gemini-ai" });
  } catch (error: any) {
    console.error("Error in /api/plan-journey:", error);
    res.status(500).json({ error: "Failed to generate sacred itinerary", details: error.message });
  }
});

// Ask Dharma AI: Spiritual & Practical Q&A Endpoint
app.post("/api/ask-dharma", async (req, res) => {
  try {
    const { query, context } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Helpful fallback response
      let fallbackAnswer = `Namaste. Regarding your query on "${query}": In our sacred traditions, maintaining sincere devotion (Shraddha), purity of intention, and respecting temple sanctity are paramount. Always verify darshan booking passes in advance and dress in modest traditional attire.`;
      
      if (query.toLowerCase().includes("senior") || query.toLowerCase().includes("wheelchair") || query.toLowerCase().includes("elderly")) {
        fallbackAnswer = `For senior pilgrims: Major holy shrines (Tirupati, Kashi Vishwanath, Somnath, Ayodhya) provide dedicated Special Senior Citizen queue lanes and battery-operated carts. We advise scheduling visits during early morning (6:30 AM) or after 5:00 PM to avoid intense midday sun, and ensuring accommodations are booked within 500 meters of the main entrance gate.`;
      } else if (query.toLowerCase().includes("dress") || query.toLowerCase().includes("wear") || query.toLowerCase().includes("clothes")) {
        fallbackAnswer = `Temple Dress Codes: Traditional Indian attire is warmly recommended. Men should wear Dhotis or Kurtas with Pyjamas (avoid western trousers or shorts in traditional sanctums). Women should wear Sarees, Salwar Suits with Dupatta, or long modest dresses covering shoulders and ankles. Always remove footwear and leather goods before entering the temple complex.`;
      } else if (query.toLowerCase().includes("varanasi") || query.toLowerCase().includes("kashi")) {
        fallbackAnswer = `In Varanasi (Kashi), begin with a sunrise boat ride from Assi Ghat to Dashashwamedh Ghat. The Mangala Aarti at Kashi Vishwanath starts at 3:00 AM (requires pre-booking). In the evening, arrive at Dashashwamedh Ghat by 6:00 PM for the iconic 6:45 PM Ganga Aarti.`;
      }

      return res.json({
        success: true,
        answer: fallbackAnswer,
        source: "curated-dharma"
      });
    }

    const systemPrompt = `You are DharmaAI, an enlightened, gentle, and knowledgeable spiritual guide. 
Answer the seeker's question with deep cultural reverence, practical precision (exact timings, accessibility notes, rituals, dress codes, auspicious practices), and warm compassion. Keep answers clear, beautifully formatted with concise paragraphs or bullet points where appropriate.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: `Seeker Question: "${query}"\n${context ? `Context: ${JSON.stringify(context)}` : ""}`,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return res.json({
      success: true,
      answer: response.text || "May your journey be blessed with peace and spiritual clarity.",
      source: "gemini-ai"
    });
  } catch (error: any) {
    console.error("Error in /api/ask-dharma:", error);
    res.status(500).json({ error: "Failed to answer query", details: error.message });
  }
});

// Setup Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`DharmaAI server running on http://localhost:${PORT}`);
  });
}

startServer();
