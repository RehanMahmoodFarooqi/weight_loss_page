import React from 'react';
import LogoImg from '../../assets/logo.png';

export function MedicationCard({ item }) {
    if (!item) return null;

    return (
        <div
            className="bg-[#d0e8ec] flex flex-col text-left hover:-translate-y-1 transition-all duration-300 transform group h-full relative overflow-hidden rounded-lg px-4 pt-0 pb-3"
            style={{ fontFamily: "'Lora', 'Roboto', sans-serif" }}
        >

            {/* Medication Name + Logo */}
            <div className="flex justify-between items-center mb-0 gap-2">
                <h4 className="text-[22px] font-extrabold text-[#28436F] leading-snug tracking-tight">
                    {item.name}
                    {item.showRx !== false && (
                        <span className="text-[11px] font-normal align-super ml-1 text-[#28436F]">
                            ® <span className="text-[10px] font-semibold">Rx</span>
                        </span>
                    )}
                </h4>
                <div className="w-32 h-32 flex-shrink-0 -mt-6 mr-2">
                    <img
                        src={LogoImg}
                        alt="Logo"
                        className="w-full h-full object-contain brightness-110"
                    />
                </div>
            </div>

            {/* Product Image — takes all remaining space */}
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-[260px] w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
            </div>

            {/* Bottom: As Low As + Price + Get Started */}
            <div className="mt-2">
                <p className="text-[15px] text-[#28436F] font-bold uppercase tracking-[0.12em] mb-1 text-center">
                    As Low As
                </p>
                <div className="flex items-stretch gap-2">
                    <button className="flex-1 bg-white border border-[#28436F] text-[#28436F] text-[17px] font-bold py-2.5 px-3 text-center transition-colors duration-200">
                        {item.price}
                    </button>
                    <button className="flex-1 bg-[#28436F] text-white text-[17px] font-semibold py-2.5 px-3 text-center rounded-sm hover:bg-[#1e3252] transition-all duration-200">
                        Get Now
                    </button>
                </div>
            </div>
        </div>
    );
}
