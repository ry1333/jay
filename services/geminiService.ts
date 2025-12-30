
import { GoogleGenAI, Type } from "@google/genai";
import { AssessmentResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFireRiskAssessment = async (location: string, description: string): Promise<AssessmentResult> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a wildfire risk assessment for the following area: ${location}. Additional context: ${description}.`,
      config: {
        systemInstruction: "You are a world-class wildfire mitigation specialist. Analyze the input and provide a structured risk assessment including a risk level (Low, Medium, High, Extreme), a concise summary, and three actionable recommendations.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskLevel: { type: Type.STRING, enum: ['Low', 'Medium', 'High', 'Extreme'] },
            summary: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["riskLevel", "summary", "recommendations"]
        }
      }
    });

    const text = response.text || "{}";
    return JSON.parse(text) as AssessmentResult;
  } catch (error) {
    console.error("Gemini assessment error:", error);
    throw error;
  }
};
