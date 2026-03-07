'use client';

import React, { useState, useRef } from 'react';
import SectionTitle from '../atoms/SectionTitle';
import ColorSwatch from '../atoms/ColorSwatch';
import MoldingOption from '../molecules/MoldingOption';
import { moldings, matColorGroups } from '../../data/moldings';

export default function VirtualFramerSection() {
  const [selectedMolding, setSelectedMolding] = useState(moldings[0].file);
  const [previewImage, setPreviewImage] = useState('/assets/wedding-portrait.png');
  const [frameSize, setFrameSize] = useState(40);
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

  return (
    <section id="virtual-framer" className="py-24 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            title="Virtual Framer"
            subtitle="Design your custom frame. Adjust the molding, matting size, and colors to create the perfect museum-quality piece."
            centered
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Controls Panel */}
          <div className="w-full lg:w-1/4 space-y-8">

            {/* Molding Selector */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">1. Frame Style</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {moldings.map((molding) => (
                  <MoldingOption
                    key={molding.name}
                    molding={molding}
                    selected={selectedMolding === molding.file}
                    onClick={() => setSelectedMolding(molding.file)}
                  />
                ))}
              </div>
            </div>

            {/* Mat Board Settings */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">2. Mat Board</h3>

              <div className="mb-6">
                <label className="text-xs text-brand-text-muted uppercase mb-2 block flex justify-between">
                  <span>Mat Size</span>
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
                  <div key={group.name}>
                    <h4 className="text-[10px] uppercase tracking-widest text-brand-text-muted mb-2">{group.name}</h4>
                    <div className="grid grid-cols-6 gap-2">
                      {group.colors.map((color) => (
                        <ColorSwatch
                          key={color.name}
                          color={color.value}
                          name={color.name}
                          selected={matColor === color.value}
                          onClick={() => setMatColor(color.value)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frame Width */}
            <div>
              <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">3. Frame Thickness</h3>
              <input
                type="range"
                min="20"
                max="100"
                value={frameSize}
                onChange={(e) => setFrameSize(parseInt(e.target.value))}
                className="w-full accent-brand-oak cursor-pointer"
              />
              <div className="flex justify-between text-[10px] uppercase tracking-tighter text-brand-text-muted mt-2">
                <span>Thin</span>
                <span>Wide</span>
              </div>
            </div>
          </div>

          {/* Preview Stage */}
          <div className="w-full lg:w-3/4 flex flex-col items-center sticky top-8">
            <div className="mb-8 w-full flex justify-center">
              <label className="cursor-pointer bg-brand-oak border border-brand-oak text-brand-bg px-8 py-3 rounded-sm uppercase tracking-widest text-sm hover:bg-transparent hover:text-brand-oak transition-all duration-300">
                Upload Your Artwork
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUpload}
                  ref={fileInputRef}
                />
              </label>
            </div>

            <div className="relative p-8 md:p-12 shadow-2xl rounded-sm flex justify-center items-center">
              <div
                className="relative transition-all duration-300 ease-out flex"
                style={{
                  border: `${frameSize}px solid transparent`,
                  borderImageSource: `url(${selectedMolding})`,
                  borderImageSlice: '30',
                  borderImageRepeat: 'round',
                  backgroundColor: matColor
                }}
              >
                <div
                  className="transition-all duration-300 ease-out flex items-center justify-center w-full h-full"
                  style={{
                    backgroundColor: matColor,
                    padding: `${matWidth}px`
                  }}
                >
                  <img
                    src={previewImage}
                    alt="Artwork Preview"
                    className="max-w-full max-h-[50vh] object-contain block"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '50vh',
                      minWidth: '200px',
                      border: '2px solid white'
                    }}
                  />
                </div>
              </div>
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
