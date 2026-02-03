import { GoogleGenAI, Type } from "@google/genai";
import { GrowthStrategy } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateGrowthStrategy = async (brandName: string, niche: string): Promise<GrowthStrategy> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a quick social media growth strategy for a brand named "${brandName}" in the "${niche}" niche. Provide 3 specific content ideas and 1 recommended focus platform.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brandName: { type: Type.STRING },
            niche: { type: Type.STRING },
            ideas: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            focusPlatform: { type: Type.STRING },
          },
          required: ["brandName", "niche", "ideas", "focusPlatform"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini");
    }
    return JSON.parse(text) as GrowthStrategy;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback mock data in case of API failure or missing key for demo purposes
    return {
      brandName,
      niche,
      ideas: [
        "Behind-the-scenes video showing your daily process.",
        "User-generated content campaign featuring top customers.",
        "Educational carousel posts breaking down complex topics."
      ],
      focusPlatform: "Instagram"
    };
  }
};