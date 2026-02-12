import React from 'react';

export function MedicationCard({ item }) {
    if (!item) return null;

    return (
        <div className="bg-white border border-blue-50 p-4 flex flex-col items-center text-center hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 transform group h-full relative overflow-hidden">
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <h4 className="text-2xl font-bold text-[#28436F] mb-1 font-lora relative z-10">{item.name}</h4>

            <p className="text-base text-[#28436F]/70 mb-4 font-medium relative z-10">{item.generic}</p>

            <div className="w-full flex items-center justify-center mb-6 relative z-10">
                {/* Product Wrapper with float animation - EVERYTHING inside moves together */}
                <div className="relative w-full h-48 flex items-center justify-center animate-float">

                    {/* The Tilted, Revolving Water-like Ring (Glassy & Transparent) */}
                    {/* This creates the "moving parallelogram" liquid ring effect */}
                    <div className="absolute w-52 h-52 bg-transparent border-[6px] border-[#d0e8ec]/80 rounded-full animate-revolve pointer-events-none z-0 shadow-[0_0_20px_rgba(208,232,236,0.6)] backdrop-blur-sm"></div>

                    {/* Secondary Tilted Ring for depth */}
                    <div className="absolute w-48 h-48 border border-[#d0e8ec]/50 rounded-full animate-revolve [animation-delay:-4s] pointer-events-none z-0"></div>

                    {/* Water-like liquid ripples underneath for modern feel */}
                    <div className="absolute w-44 h-44 border border-[#d0e8ec]/30 rounded-full animate-ripple pointer-events-none"></div>

                    {/* Subtle glow blur blob */}
                    <div className="absolute inset-0 bg-[#d0e8ec]/10 scale-90 blur-3xl -z-10 group-hover:bg-[#d0e8ec]/20 transition-all duration-700"></div>

                    <img
                        src={item.image}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-xl group-hover:scale-110 transition-all duration-500 relative z-10"
                    />
                </div>
            </div>

            <div className="mt-auto w-full relative z-10">
                <p className="text-xs text-[#28436F] font-bold uppercase tracking-widest mb-1">As low as</p>
                <div className="inline-block bg-[#28436F] px-6 py-2.5 border border-blue-900/10 text-white shadow-sm group-hover:bg-[#1e3252] transition-all duration-300">
                    <span className="text-3xl font-bold">
                        {item.price}
                    </span>
                </div>
                <div className="h-2"></div>
            </div>
        </div>
    );
}
