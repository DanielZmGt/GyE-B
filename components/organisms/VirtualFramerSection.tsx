'use client';

import React, { useState, useRef } from 'react';
import SectionTitle from '../atoms/SectionTitle';
import ColorSwatch from '../atoms/ColorSwatch';
import MoldingOption from '../molecules/MoldingOption';
import { moldings, matColorGroups } from '../../data/moldings';
import { useLanguage } from '../../app/i18n-context';
import { Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, Layers } from 'lucide-react';

type FrameLayer = {
  id: string;
  moldingFile: string;
  size: number;
};

export default function VirtualFramerSection() {
  const { t, lang } = useLanguage();
  
  const [layers, setLayers] = useState<FrameLayer[]>([
    { id: '1', moldingFile: moldings[0].file, size: 40 }
  ]);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState('/assets/wedding-portrait.png');
  const [matColor, setMatColor] = useState(matColorGroups[0].colors[1].value);
  const [matWidth, setMatWidth] = useState(50);
  
  const [openMatGroupIndex, setOpenMatGroupIndex] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addLayer = () => {
    if (layers.length < 4) {
      const newLayer = {
        id: Math.random().toString(36).substr(2, 9),
        moldingFile: moldings[0].file,
        size: 30
      };
      setLayers([...layers, newLayer]);
      setActiveLayerIndex(layers.length);
    }
  };

  const removeLayer = (index: number) => {
    if (layers.length > 1) {
      const newLayers = layers.filter((_, i) => i !== index);
      setLayers(newLayers);
      setActiveLayerIndex(Math.max(0, activeLayerIndex >= index ? activeLayerIndex - 1 : activeLayerIndex));
    }
  };

  const updateLayer = (index: number, updates: Partial<FrameLayer>) => {
    const newLayers = layers.map((layer, i) => 
      i === index ? { ...layer, ...updates } : layer
    );
    setLayers(newLayers);
  };

  const renderLayer = (index: number, children: React.ReactNode) => {
    if (index < 0) return children;
    const layer = layers[index];
    const isInnermost = index === 0;
    const isActive = activeLayerIndex === index;
    
    return (
      <div
        className={`relative transition-all duration-300 ease-out flex ${isActive ? 'ring-2 ring-brand-oak ring-inset shadow-lg' : ''}`}
        style={{
          borderWidth: `${layer.size}px`,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderImageSource: `url(${layer.moldingFile})`,
          borderImageSlice: '33%',
          borderImageRepeat: 'stretch',
          backgroundColor: isInnermost ? matColor : 'transparent',
          position: 'relative',
          display: 'flex',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <div className="relative flex w-full h-full">
          {renderLayer(index - 1, children)}
        </div>
      </div>
    );
  };

  return (
    <section id="virtual-framer" className="py-24 bg-brand-surface/10 dark:bg-black/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            title={t('framer.title')}
            subtitle={t('framer.subtitle')}
            centered
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Controls Panel */}
          <div className="w-full lg:w-1/3 space-y-8">
            
            {/* Layer Management */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-sm border border-brand-surface/50 dark:border-white/10 shadow-xl transition-colors">
              <div className="flex justify-between items-center mb-6 border-b border-brand-oak/20 pb-4">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-brand-oak" />
                  <h3 className="text-sm uppercase tracking-widest text-brand-oak font-bold">
                    {lang === 'en' ? 'Frame Construction' : 'Construcción del Marco'}
                  </h3>
                </div>
                {layers.length < 4 && (
                  <button 
                    onClick={addLayer}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-tighter bg-brand-oak text-brand-bg px-3 py-1.5 rounded-sm hover:opacity-90 transition-opacity font-bold shadow-sm"
                  >
                    <Plus size={14} /> {lang === 'en' ? 'Add Layer' : 'Agregar Capa'}
                  </button>
                )}
              </div>

              <div className="space-y-4 mb-6">
                {layers.map((layer, idx) => (
                  <div 
                    key={layer.id}
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`p-4 border rounded-sm cursor-pointer transition-all ${activeLayerIndex === idx 
                      ? 'border-brand-oak bg-white dark:bg-white/10 ring-1 ring-brand-oak/20 shadow-md scale-[1.02]' 
                      : 'border-brand-surface dark:border-white/5 bg-white/30 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${activeLayerIndex === idx ? 'bg-brand-oak animate-pulse' : 'bg-brand-surface dark:bg-white/20'}`} />
                        <span className={`text-[11px] uppercase tracking-widest font-bold ${activeLayerIndex === idx ? 'text-brand-oak' : 'text-brand-text dark:text-white/70'}`}>
                          {idx === 0 ? (lang === 'en' ? 'Layer 1 (Innermost)' : 'Capa 1 (Interior)') : (lang === 'en' ? `Layer ${idx + 1}` : `Capa ${idx + 1}`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {activeLayerIndex === idx ? <ChevronUp size={16} className="text-brand-oak" /> : <ChevronDown size={16} className="text-brand-text-muted dark:text-white/40" />}
                        {layers.length > 1 && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeLayer(idx);
                            }} 
                            className="text-red-400 hover:text-red-600 p-1 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {activeLayerIndex === idx && (
                      <div className="space-y-5 mt-6 animate-in fade-in slide-in-from-top-2 duration-300" onClick={(e) => e.stopPropagation()}>
                        {/* Molding Grid */}
                        <div className="grid grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar border-t border-brand-oak/5 pt-4">
                          {moldings.map((molding) => (
                            <MoldingOption
                              key={molding.name_en}
                              molding={molding}
                              selected={layer.moldingFile === molding.file}
                              onClick={() => updateLayer(idx, { moldingFile: molding.file })}
                            />
                          ))}
                        </div>
                        
                        {/* Width Slider */}
                        <div className="bg-brand-surface/20 dark:bg-white/5 p-4 rounded-sm border border-brand-surface/30 dark:border-white/5">
                          <label className="text-[10px] text-brand-text-muted dark:text-white/50 uppercase mb-3 flex justify-between font-bold">
                            <span>{t('framer.thin')} — {t('framer.wide')}</span>
                            <span className="text-brand-oak text-xs font-mono">{layer.size}px</span>
                          </label>
                          <input
                            type="range"
                            min="2"
                            max="100"
                            value={layer.size}
                            onChange={(e) => updateLayer(idx, { size: parseInt(e.target.value) })}
                            className="w-full accent-brand-oak cursor-pointer h-1.5"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mat Board Settings */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-6 rounded-sm border border-brand-surface/50 dark:border-white/10 shadow-xl transition-colors">
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 border-b border-brand-oak/20 pb-4 font-bold">
                {t('framer.step2')}
              </h3>

              <div className="mb-8 bg-brand-surface/20 dark:bg-white/5 p-4 rounded-sm border border-brand-surface/30 dark:border-white/5">
                <label className="text-[10px] text-brand-text-muted dark:text-white/50 uppercase mb-3 flex justify-between font-bold">
                  <span>{t('framer.matSize')}</span>
                  <span className="text-brand-oak text-xs font-mono">{matWidth}px</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={matWidth}
                  onChange={(e) => setMatWidth(parseInt(e.target.value))}
                  className="w-full accent-brand-oak cursor-pointer h-1.5"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-brand-text-muted dark:text-white/50 font-bold block mb-3">
                  {t('framer.matColorCategory')}
                </label>
                {matColorGroups.map((group, gIdx) => (
                  <div key={group.name_en} className="border border-brand-surface/50 dark:border-white/10 rounded-sm overflow-hidden bg-white/50 dark:bg-transparent">
                    <button
                      onClick={() => setOpenMatGroupIndex(openMatGroupIndex === gIdx ? -1 : gIdx)}
                      className={`w-full flex justify-between items-center p-3 text-[11px] uppercase tracking-wider transition-all ${openMatGroupIndex === gIdx 
                        ? 'bg-brand-oak text-brand-bg font-bold' 
                        : 'hover:bg-brand-surface/50 dark:hover:bg-white/5 text-brand-text dark:text-white/80'}`}
                    >
                      {lang === 'en' ? group.name_en : group.name_es}
                      {openMatGroupIndex === gIdx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    
                    {openMatGroupIndex === gIdx && (
                      <div className="p-4 grid grid-cols-4 gap-3 animate-in fade-in duration-200 bg-white/30 dark:bg-black/20">
                        {group.colors.map((color) => (
                          <ColorSwatch
                            key={color.name_en}
                            color={color.value}
                            name={lang === 'en' ? color.name_en : color.name_es}
                            selected={matColor === color.value}
                            onClick={() => setMatColor(color.value)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50/80 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/30 p-5 rounded-sm flex gap-4 items-start shadow-sm">
              <AlertCircle size={20} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed text-amber-900/80 dark:text-amber-200/70 italic font-medium">
                {t('framer.disclaimer')}
              </p>
            </div>
          </div>

          {/* Preview Stage */}
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:sticky lg:top-24 order-first lg:order-last">
            <div className="mb-6 w-full flex justify-center">
              <label className="cursor-pointer bg-brand-oak border border-brand-oak text-brand-bg px-6 py-3 md:px-10 md:py-4 rounded-sm uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-transparent hover:text-brand-oak transition-all duration-500 shadow-xl font-bold text-center">
                {t('framer.upload')}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUpload}
                  ref={fileInputRef}
                />
              </label>
            </div>

            <div className="relative p-4 md:p-20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-sm flex justify-center items-center bg-white/5 dark:bg-white/[0.02] w-full min-h-[400px] md:min-h-[750px] border border-white/10 backdrop-blur-[4px] overflow-hidden">
              <div className="scale-[0.6] sm:scale-[0.8] md:scale-100 transition-all duration-700 ease-out">
                {renderLayer(layers.length - 1, (
                  <div
                    className="transition-all duration-300 ease-out flex items-center justify-center bg-white/5"
                    style={{
                      padding: `${matWidth}px`
                    }}
                  >
                    <img
                      src={previewImage}
                      alt="Artwork Preview"
                      className="max-w-full max-h-[55vh] object-contain block shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '55vh',
                        minWidth: '250px',
                        border: '2px solid white'
                      }}
                    />

                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 text-brand-text-muted dark:text-white/20">
              <div className="w-16 h-[1px] bg-brand-surface dark:bg-white/10" />
              <div className="text-[11px] uppercase tracking-[0.3em] font-bold">
                {lang === 'en' ? 'Professional Digital Visualization' : 'Visualización Digital Profesional'}
              </div>
              <div className="w-16 h-[1px] bg-brand-surface dark:bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(166, 124, 82, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(166, 124, 82, 0.5);
        }
      `}</style>
    </section>
  );
}
