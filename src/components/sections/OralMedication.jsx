import React from 'react';

// Oral medication pill bottle images
import TopiramateImg from '../../assets/topiramate_f.png';
import ContraveImg from '../../assets/contrave_f.png';
import MetforminImg from '../../assets/metformin_f.png';
import RybelsusImg from '../../assets/rhybelsus_ff.png';

const oralMeds = [
    {
        name: 'Topiramate',
        description: 'Boost energy, enhance metabolism',
        price: '$299',
        image: TopiramateImg,
    },
    {
        name: 'Contrave',
        description: 'Essential vitamin for energy and nerve health.',
        price: '$199',
        image: ContraveImg,
    },
    {
        name: 'Metformin',
        description: 'Powerful antioxidant for detox and skin support.',
        price: '$280',
        image: MetforminImg,
    },
    {
        name: 'Rybelsus',
        description: 'Cellular energy therapy for vitality and repair.',
        price: '$140',
        image: RybelsusImg,
    },
];

function OralMedCard({ item }) {
    return (
        <div
            className="bg-[#d0e8ec] rounded-lg flex flex-col text-left hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative px-4 pt-4 pb-3 h-full"
            style={{ fontFamily: "'Lora', 'Roboto', sans-serif" }}
        >
            {/* Name + Description */}
            <div className="mb-2">
                <h4 className="text-[24px] font-extrabold text-[#28436F] leading-snug tracking-tight">
                    {item.name}
                </h4>
                <p className="text-[15px] text-[#28436F]/80 mt-0.5 leading-snug">
                    {item.description}
                </p>
            </div>

            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center overflow-hidden -my-2">
                <img
                    src={item.image}
                    alt={item.name}
                    className="h-[260px] w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
                />
            </div>

            {/* Bottom: As Low As + Price + Get Started */}
            <div className="mt-2">
                <p className="text-[13px] text-[#28436F] font-bold uppercase tracking-[0.12em] mb-1.5 text-center">
                    As Low As
                </p>
                <div className="flex items-stretch gap-2">
                    <button className="flex-1 bg-white border border-[#28436F] text-[#28436F] text-[16px] font-bold py-2.5 px-3 text-center rounded-sm transition-colors duration-200">
                        {item.price}/monthly
                    </button>
                    <button className="flex-1 bg-[#28436F] text-white text-[16px] font-semibold py-2.5 px-3 text-center rounded-sm hover:bg-[#1e3252] transition-all duration-200">
                        Get Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export function OralMedication() {
    return (
        <section className="relative py-10 px-4 md:px-8 overflow-hidden bg-white">
            <div className="w-[90%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h3 className="text-5xl md:text-6xl font-bold text-[#28436F] tracking-tight">
                        Oral Medications
                    </h3>
                </div>

                {/* 4-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {oralMeds.map((item, index) => (
                        <OralMedCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
