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
        className={`relative transition-all duration-300 ease-out flex ${isActive ? 'ring-2 ring-brand-oak/50 ring-inset' : ''}`}
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
    <section id="virtual-framer" className="py-24 bg-brand-surface/30">
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
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-sm border border-brand-surface shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-brand-oak/20 pb-2">
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
                    className={`p-4 border rounded-sm cursor-pointer transition-all ${activeLayerIndex === idx ? 'border-brand-oak bg-white ring-1 ring-brand-oak/20 shadow-md scale-[1.02]' : 'border-brand-surface bg-white/30 hover:bg-white/50'}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${activeLayerIndex === idx ? 'bg-brand-oak animate-pulse' : 'bg-brand-surface'}`} />
                        <span className="text-[11px] uppercase tracking-widest font-bold text-brand-text">
                          {idx === 0 ? (lang === 'en' ? 'Layer 1 (Innermost)' : 'Capa 1 (Interior)') : (lang === 'en' ? `Layer ${idx + 1}` : `Capa ${idx + 1}`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        {activeLayerIndex === idx ? <ChevronUp size={16} className="text-brand-oak" /> : <ChevronDown size={16} className="text-brand-text-muted" />}
                        {layers.length > 1 && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              removeLayer(idx);
                            }} 
                            className="text-red-400 hover:text-red-600 p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {activeLayerIndex === idx && (
                      <div className="space-y-5 mt-6 animate-in fade-in slide-in-from-top-2 duration-300" onClick={(e) => e.stopPropagation()}>
                        {/* Molding Grid */}
                        <div className="grid grid-cols-2 gap-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
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
                        <div className="bg-brand-surface/20 p-3 rounded-sm">
                          <label className="text-[10px] text-brand-text-muted uppercase mb-2 flex justify-between font-bold">
                            <span>{t('framer.thin')} — {t('framer.wide')}</span>
                            <span className="text-brand-oak text-xs">{layer.size}px</span>
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
            <div className="bg-white/40 backdrop-blur-sm p-6 rounded-sm border border-brand-surface shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-6 border-b border-brand-oak/20 pb-2 font-bold">
                {t('framer.step2')}
              </h3>

              <div className="mb-8 bg-brand-surface/20 p-3 rounded-sm">
                <label className="text-[10px] text-brand-text-muted uppercase mb-2 flex justify-between font-bold">
                  <span>{t('framer.matSize')}</span>
                  <span className="text-brand-oak text-xs">{matWidth}px</span>
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
                <label className="text-[10px] uppercase tracking-widest text-brand-text-muted font-bold block mb-2">
                  {t('framer.matColorCategory')}
                </label>
                {matColorGroups.map((group, gIdx) => (
                  <div key={group.name_en} className="border border-brand-surface rounded-sm overflow-hidden bg-white/50">
                    <button
                      onClick={() => setOpenMatGroupIndex(openMatGroupIndex === gIdx ? -1 : gIdx)}
                      className={`w-full flex justify-between items-center p-3 text-[11px] uppercase tracking-wider transition-colors ${openMatGroupIndex === gIdx ? 'bg-brand-oak text-brand-bg font-bold' : 'hover:bg-brand-surface/50'}`}
                    >
                      {lang === 'en' ? group.name_en : group.name_es}
                      {openMatGroupIndex === gIdx ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    
                    {openMatGroupIndex === gIdx && (
                      <div className="p-4 grid grid-cols-4 gap-3 animate-in fade-in duration-200">
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
            <div className="bg-amber-50/50 border border-amber-200/50 p-4 rounded-sm flex gap-3 items-start">
              <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-[10px] leading-relaxed text-amber-800/80 italic">
                {t('framer.disclaimer')}
              </p>
            </div>
          </div>

          {/* Preview Stage */}
          <div className="w-full lg:w-2/3 flex flex-col items-center sticky top-8">
            <div className="mb-8 w-full flex justify-center">
              <label className="cursor-pointer bg-brand-oak border border-brand-oak text-brand-bg px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-transparent hover:text-brand-oak transition-all duration-300 shadow-lg">
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

            <div className="relative p-12 md:p-20 shadow-2xl rounded-sm flex justify-center items-center bg-white/10 w-full min-h-[700px] border border-white/20 backdrop-blur-[2px]">
              <div className="scale-[0.8] md:scale-100 transition-transform duration-500">
                {renderLayer(layers.length - 1, (
                  <div
                    className="transition-all duration-300 ease-out flex items-center justify-center"
                    style={{
                      padding: `${matWidth}px`
                    }}
                  >
                    <img
                      src={previewImage}
                      alt="Artwork Preview"
                      className="max-w-full max-h-[50vh] object-contain block shadow-inner"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '50vh',
                        minWidth: '200px',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-brand-text-muted">
              <div className="w-12 h-[1px] bg-brand-surface" />
              <div className="text-[10px] uppercase tracking-[0.2em] font-medium">
                {lang === 'en' ? 'Professional Digital Visualization' : 'Visualización Digital Profesional'}
              </div>
              <div className="w-12 h-[1px] bg-brand-surface" />
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
