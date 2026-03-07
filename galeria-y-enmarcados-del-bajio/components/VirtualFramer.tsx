'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const moldings = [
    { name: 'Dark Walnut', file: '/assets/moldings/walnut.svg', category: 'Wood' },
    { name: 'Classic Oak', file: '/assets/moldings/oak.svg', category: 'Wood' },
    { name: 'Cherry Wood', file: '/assets/moldings/cherry.svg', category: 'Wood' },
    { name: 'Classic Crown', file: '/assets/moldings/crown_molding.svg', category: 'Wood' },
    { name: 'Maple Base', file: '/assets/moldings/baseboard.svg', category: 'Wood' },
    { name: 'Mahogany Rail', file: '/assets/moldings/chair_rail.svg', category: 'Wood' },
    { name: 'Gold Leaf', file: '/assets/moldings/gold.svg', category: 'Metallic' },
];

const matColorGroups = [
    {
        name: 'Neutrals',
        colors: [
            { name: 'Pure White', value: '#FFFFFF' },
            { name: 'Antique White', value: '#F5F5F0' },
            { name: 'Cream', value: '#FFFDD0' },
            { name: 'Soft Gray', value: '#D3D3D3' },
            { name: 'Charcoal', value: '#36454F' },
            { name: 'Gallery Black', value: '#1a1a1a' },
        ]
    },
    {
        name: 'Bolds',
        colors: [
            { name: 'Navy Blue', value: '#1B2A4A' },
            { name: 'Burgundy', value: '#4A1B1B' },
            { name: 'Forest Green', value: '#1B3022' },
            { name: 'Deep Plum', value: '#361B30' },
        ]
    },
    {
        name: 'Earthy',
        colors: [
            { name: 'Sage Green', value: '#8A9A5B' },
            { name: 'Ochre', value: '#CC7722' },
            { name: 'Terracotta', value: '#E2725B' },
            { name: 'Slate Blue', value: '#708090' },
        ]
    }
];

export default function VirtualFramer() {
    const [selectedMolding, setSelectedMolding] = useState(moldings[0].file);
    const [previewImage, setPreviewImage] = useState('/assets/wedding-portrait.png');
    const [frameSize, setFrameSize] = useState(40);
    const [matColor, setMatColor] = useState(matColorGroups[0].colors[1].value); // Antique White
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
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 text-center">Virtual Framer</h2>
                    <p className="text-brand-text-muted max-w-xl mx-auto font-light text-center">
                        Design your custom frame. Adjust the molding, matting size, and colors to create the perfect museum-quality piece.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* --- CONTROLS PANEL (LEFT) --- */}
                    <div className="w-full lg:w-1/4 space-y-8">

                        {/* 1. Molding Selector */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">1. Frame Style</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {moldings.map((molding) => (
                                    <button
                                        key={molding.name}
                                        onClick={() => setSelectedMolding(molding.file)}
                                        className={`flex items-center gap-4 p-2 rounded-sm border transition-all ${selectedMolding === molding.file
                                            ? 'border-brand-oak bg-brand-oak/10'
                                            : 'border-brand-surface hover:border-brand-text-muted/50'
                                            }`}
                                    >
                                        <div className="relative w-12 h-12 flex-shrink-0 border border-brand-surface">
                                            <Image
                                                src={molding.file}
                                                alt={molding.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-xs uppercase tracking-wider text-left">{molding.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 2. Mat Board Settings */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-brand-oak mb-4 border-b border-brand-oak/20 pb-2">2. Mat Board</h3>

                            {/* Mat Width Slider */}
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

                            {/* Mat Color Categories */}
                            <div className="space-y-4">
                                {matColorGroups.map((group) => (
                                    <div key={group.name}>
                                        <h4 className="text-[10px] uppercase tracking-widest text-brand-text-muted mb-2">{group.name}</h4>
                                        <div className="grid grid-cols-6 gap-2">
                                            {group.colors.map((color) => (
                                                <button
                                                    key={color.name}
                                                    onClick={() => setMatColor(color.value)}
                                                    className={`w-7 h-7 rounded-full border shadow-sm transition-all hover:scale-110 flex-shrink-0 ${matColor === color.value ? 'border-brand-oak ring-1 ring-brand-oak ring-offset-1' : 'border-gray-300'
                                                        }`}
                                                    style={{ backgroundColor: color.value }}
                                                    title={color.name}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Frame Width */}
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

                    {/* --- PREVIEW STAGE (RIGHT) --- */}
                    <div className="w-full lg:w-3/4 flex flex-col items-center sticky top-8">
                        {/* Upload Button */}
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

                        {/* THE FRAME COMPONENT */}
                        {/* Container */}
                        <div className="relative p-8 md:p-12 shadow-2xl rounded-sm flex justify-center items-center">

                            {/* Layer 1: The Wood Frame (Outer) */}
                            <div
                                className="relative transition-all duration-300 ease-out flex" // Added flex to force child to fill
                                style={{
                                    border: `${frameSize}px solid transparent`,
                                    borderImageSource: `url(${selectedMolding})`,
                                    // CHANGED: Removed 'fill' so the center is transparent, preventing white gaps
                                    borderImageSlice: '30',
                                    borderImageRepeat: 'round',
                                    // Added background color match just in case, though slice change usually fixes it
                                    backgroundColor: matColor
                                }}
                            >
                                {/* Layer 2: The Mat Board (Middle) */}
                                <div
                                    className="transition-all duration-300 ease-out flex items-center justify-center w-full h-full"
                                    style={{
                                        backgroundColor: matColor,
                                        padding: `${matWidth}px`
                                    }}
                                >
                                    {/* Layer 3: The Artwork (Inner) */}
                                    {/* 2px White Border between Picture and Mat is kept here */}
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