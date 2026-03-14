'use client';

import React, { useState, useRef } from 'react';
import SectionTitle from '../atoms/SectionTitle';
import ColorSwatch from '../atoms/ColorSwatch';
import MoldingOption from '../molecules/MoldingOption';
import { moldings, matColorGroups } from '../../data/moldings';
import { useLanguage } from '../../app/i18n-context';
import { Plus, Trash2 } from 'lucide-react';

type FrameLayer = {
  id: string;
  moldingFile: string;
  size: number;
};

export default function VirtualFramerSection() {
  const { t, lang } = useLanguage();
  
  // Stacking logic: 
  // layers[0] is the INNERMOST (Oldest).
  // layers[n] is the OUTERMOST (Newest).
  const [layers, setLayers] = useState<FrameLayer[]>([
    { id: '1', moldingFile: moldings[0].file, size: 40 }
  ]);
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState('/assets/wedding-portrait.png');
  const [matColor, setMatColor] = useState(matColorGroups[0].colors[1].value);
  const [matWidth, setMatWidth] = useState(50);

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
      // Newest layer is added to the END (becomes the new outermost)
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

  // Render from the OUTSIDE (last index) to the INSIDE (index 0)
  // Clean sequential nesting without overlap
  const renderLayer = (index: number, children: React.ReactNode) => {
    if (index < 0) return children;
    const layer = layers[index];
    const isInnermost = index === 0;
    
    return (
      <div
        className="relative transition-all duration-300 ease-out flex"
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
          boxShadow: '0 0 10px rgba(0,0,0,0.1)' // Minimal shadow for edge definition
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
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-brand-oak/20 pb-2">
                <h3 className="text-sm uppercase tracking-widest text-brand-oak">
                  {t('framer.step1')} - {lang === 'en' ? 'Frame Layers' : 'Capas del Marco'}
                </h3>
                {layers.length < 4 && (
                  <button 
                    onClick={addLayer}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-tighter bg-brand-oak text-brand-bg px-2 py-1 rounded-sm hover:opacity-90 transition-opacity"
                  >
                    <Plus size={12} /> {lang === 'en' ? 'Add Outer' : 'Agregar Exterior'}
                  </button>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {layers.map((layer, idx) => (
                  <div 
                    key={layer.id}
                    className={`p-3 border rounded-sm transition-all ${activeLayerIndex === idx ? 'border-brand-oak bg-brand-oak/5' : 'border-brand-surface bg-white/50'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <button 
                        onClick={() => setActiveLayerIndex(idx)}
                        className="text-[10px] uppercase tracking-widest font-bold text-brand-text"
                      >
                        {idx === 0 ? (lang === 'en' ? 'Layer 1 (Innermost)' : 'Capa 1 (Interior)') : (lang === 'en' ? `Layer ${idx + 1}` : `Capa ${idx + 1}`)}
                      </button>
                      {layers.length > 1 && (
                        <button onClick={() => removeLayer(idx)} className="text-red-500 hover:text-red-700">
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                    
                    {activeLayerIndex === idx && (
                      <div className="space-y-4 mt-4 animate-in fade-in slide-in-from-top-1 duration-200">
                        <div className="grid grid-cols-2 gap-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                          {moldings.map((molding) => (
                            <MoldingOption
                              key={molding.name_en}
                              molding={molding}
                              selected={layer.moldingFile === molding.file}
                              onClick={() => updateLayer(idx, { moldingFile: molding.file })}
                            />
                          ))}
                        </div>
                        
                        <div>
                          <label className="text-[10px] text-brand-text-muted uppercase mb-1 flex justify-between">
                            <span>{t('framer.thin')} - {t('framer.wide')}</span>
                            <span className="text-brand-oak font-bold">{layer.size}px</span>
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
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">{t('framer.step2')}</h3>

              <div className="mb-6">
                <label className="text-xs text-brand-text-muted uppercase mb-2 flex justify-between">
                  <span>{t('framer.matSize')}</span>
                  <span className="text-brand-oak font-bold">{matWidth}px</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="150"
                  value={matWidth}
                  onChange={(e) => setMatWidth(parseInt(e.target.value))}
                  className="w-full accent-brand-oak cursor-pointer"
                />
              </div>

              <div className="space-y-4">
                {matColorGroups.map((group) => (
                  <div key={group.name_en}>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-text-muted mb-2">
                      {lang === 'en' ? group.name_en : group.name_es}
                    </h4>
                    <div className="grid grid-cols-6 gap-2">
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview Stage */}
          <div className="w-full lg:w-2/3 flex flex-col items-center sticky top-8">
            <div className="mb-8 w-full flex justify-center">
              <label className="cursor-pointer bg-brand-oak border border-brand-oak text-brand-bg px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-transparent hover:text-brand-oak transition-all duration-300">
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

            <div className="relative p-8 md:p-12 shadow-2xl rounded-sm flex justify-center items-center bg-white/5 w-full min-h-[600px]">
              <div className="scale-[0.85] md:scale-100 transition-transform duration-500">
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

            <div className="mt-6 text-center text-[10px] uppercase tracking-widest text-brand-text-muted">
              {lang === 'en' ? 'Sequential Multi-Layer Frame System' : 'Sistema de Marco Multi-Capa Secuencial'}
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
