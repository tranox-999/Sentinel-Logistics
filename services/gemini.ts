import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Use gemini-3-flash-preview for general text tasks with grounding
export const getLogisticsInsights = async (query: string) => {
  // Always initialize GoogleGenAI with the API key from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the following logistics query in the context of professional, high-value medical and sensitive transport: ${query}`,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  
  return {
    text: response.text,
    // Extract website URLs from groundingMetadata as required by guidelines
    sources: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Resource',
      url: chunk.web?.uri || '#'
    })) || []
  };
};

// Use gemini-2.5-flash for Maps grounding tasks
export const findServiceCenters = async (location: string, lat?: number, lng?: number) => {
  // Always initialize GoogleGenAI with the API key from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Find medical logistics distribution hubs and specialized transport service areas near ${location}.`,
    config: {
      tools: [{ googleMaps: {} }],
      toolConfig: lat && lng ? {
        retrievalConfig: {
          latLng: { latitude: lat, longitude: lng }
        }
      } : undefined
    },
  });

  return {
    text: response.text,
    // Extract place URLs from groundingMetadata as required by guidelines
    places: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.maps?.title || 'Facility',
      url: chunk.maps?.uri || '#'
    })) || []
  };
};

// Use gemini-2.5-flash-image for image editing
export const editLogisticsImage = async (base64Image: string, prompt: string) => {
  // Always initialize GoogleGenAI with the API key from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { data: base64Image, mimeType: 'image/png' } },
        { text: prompt }
      ]
    }
  });

  // Iterate through parts to find the image part, do not assume order
  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

// Use veo-3.1-fast-generate-preview for video generation
export const animateLogisticsVisual = async (base64Image: string, prompt: string, aspectRatio: '16:9' | '9:16' = '16:9') => {
  // Mandatory check for user-selected API key when using Veo models
  if (!(await window.aistudio.hasSelectedApiKey())) {
    await window.aistudio.openSelectKey();
  }

  // Create a new GoogleGenAI instance right before making an API call to ensure fresh key usage
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      image: {
        imageBytes: base64Image,
        mimeType: 'image/png'
      },
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio
      }
    });

    while (!operation.done) {
      // Re-polling for operation status with standard 10s interval
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    // Append the API key when fetching MP4 bytes from the download link
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error: any) {
    // Reset key selection if entity not found, indicating project billing issues
    if (error.message?.includes("Requested entity was not found")) {
      await window.aistudio.openSelectKey();
    }
    throw error;
  }
};