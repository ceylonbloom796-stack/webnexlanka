
import { GoogleGenAI } from "@google/genai";

// Function to generate a response from the Gemini AI consultant using the correct SDK pattern
export const getGeminiResponse = async (userPrompt: string) => {
  try {
    // Correctly initialize GoogleGenAI using a named parameter with process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Call generateContent with the appropriate model for basic text Q&A tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Nex', the intelligent AI consultant for WebNexlanka, a premier web and AI agency. 
        Your goal is to help potential clients understand how WebNexlanka can help them. 
        Focus on: Web Development (React, Next.js), AI Integration (LLMs, Automation), and Mobile Apps. 
        Be professional, tech-savvy, and encouraging. Keep responses concise and formatted with markdown.
        If asked about pricing, say we offer custom quotes based on project complexity.`,
        temperature: 0.7,
      },
    });

    // Extract text output by accessing the .text property (getter), not by calling it as a method
    return response.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Let's try that again.";
  }
};
