
import React, { useState, useRef } from 'react';
import { getLogisticsInsights, findServiceCenters, editLogisticsImage, animateLogisticsVisual } from '../services/gemini';
import { Icons } from '../constants';

const AIHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState<{ text: string, sources: any[] } | null>(null);
  const [locationQuery, setLocationQuery] = useState('');
  const [mapResult, setMapResult] = useState<{ text: string, places: any[] } | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [editPrompt, setEditPrompt] = useState('');
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading('search');
    try {
      const res = await getLogisticsInsights(searchQuery);
      setSearchResult(res);
    } catch (e) { console.error(e); }
    setLoading(null);
  };

  const handleMaps = async () => {
    setLoading('maps');
    try {
      const res = await findServiceCenters(locationQuery);
      setMapResult(res);
    } catch (e) { console.error(e); }
    setLoading(null);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageFile(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleEditImage = async () => {
    if (!imageFile) return;
    setLoading('edit');
    try {
      const base64 = imageFile.split(',')[1];
      const res = await editLogisticsImage(base64, editPrompt);
      setEditedImage(res);
    } catch (e) { console.error(e); }
    setLoading(null);
  };

  const handleAnimate = async () => {
    if (!imageFile) return;
    setLoading('video');
    try {
      const base64 = imageFile.split(',')[1];
      const res = await animateLogisticsVisual(base64, "Animate this professional logistics scene with smooth motion.");
      setGeneratedVideo(res);
    } catch (e) { console.error(e); }
    setLoading(null);
  };

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-navy mb-4">Partner Intelligence Hub</h1>
          <p className="text-slate-500">Advanced AI tools for our logistics partners and clients to analyze routes, regulations, and branding visuals.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Logistics Search */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
              <Icons.Compliance /> Market Insights & Regulations
            </h3>
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                className="flex-grow border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-navy/20 bg-white text-slate-900"
                placeholder="Ex: Recent medical logistics regulations 2026"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={handleSearch}
                className="bg-navy text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50"
                disabled={loading === 'search'}
              >
                {loading === 'search' ? 'Searching...' : 'Search'}
              </button>
            </div>
            {searchResult && (
              <div className="prose prose-sm max-w-none text-slate-600">
                <p className="mb-4">{searchResult.text}</p>
                <div className="flex flex-wrap gap-2">
                  {searchResult.sources.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-xs bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 transition-colors">
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Regional Map Coverage */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
              <Icons.Tracking /> Service Hub Finder
            </h3>
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                className="flex-grow border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-navy/20 bg-white text-slate-900"
                placeholder="Ex: Aurora CO distribution center"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
              <button 
                onClick={handleMaps}
                className="bg-navy text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50"
                disabled={loading === 'maps'}
              >
                {loading === 'maps' ? 'Finding...' : 'Find'}
              </button>
            </div>
            {mapResult && (
              <div className="prose prose-sm max-w-none text-slate-600">
                <p className="mb-4">{mapResult.text}</p>
                <div className="grid grid-cols-1 gap-2">
                  {mapResult.places.map((p, i) => (
                    <a key={i} href={p.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-navy flex items-center gap-2">
                      <Icons.Tracking /> {p.title}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visual Brand Studio */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border">
          <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
            <Icons.Security /> Logistics Brand Studio
          </h3>
          <p className="text-sm text-slate-500 mb-6">Upload photos of your delivery vehicles or equipment to visualize professional Sentinel branding or animate marketing materials.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Upload Reference Photo</label>
                <input type="file" onChange={onFileChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-navy file:text-white hover:file:bg-charcoal" />
              </div>
              
              {imageFile && (
                <div className="space-y-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border">
                    <img src={imageFile} className="w-full h-full object-cover" alt="Source" />
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      className="flex-grow border rounded-lg px-4 py-2 text-sm outline-none bg-white text-slate-900"
                      placeholder="Ex: Add professional logos to the vehicle"
                      value={editPrompt}
                      onChange={(e) => setEditPrompt(e.target.value)}
                    />
                    <button onClick={handleEditImage} className="bg-navy text-white px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-50" disabled={loading === 'edit'}>
                      {loading === 'edit' ? 'Editing...' : 'Edit Image'}
                    </button>
                  </div>
                  <button onClick={handleAnimate} className="w-full bg-green-700 text-white px-4 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50" disabled={loading === 'video'}>
                    {loading === 'video' ? 'Animating (takes ~2 mins)...' : '✨ Animate Scene (Veo)'}
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {editedImage && (
                <div>
                  <h4 className="text-sm font-bold text-navy mb-2">Edited Visualization:</h4>
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border">
                    <img src={editedImage} className="w-full h-full object-cover" alt="Edited" />
                  </div>
                </div>
              )}
              {generatedVideo && (
                <div>
                  <h4 className="text-sm font-bold text-navy mb-2">Animated Showcase (Veo):</h4>
                  <div className="aspect-video rounded-xl overflow-hidden bg-black border">
                    <video src={generatedVideo} className="w-full h-full" controls autoPlay loop />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHub;
