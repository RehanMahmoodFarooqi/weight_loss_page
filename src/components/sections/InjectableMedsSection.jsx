import React from 'react';
import { MedicationCard } from '../ui/MedicationCard';

// Medication product images
import WegovyImg from '../../assets/wegovy_f.png';
import OzempicImg from '../../assets/Ozympic_f.png';
import ZepboundImg from '../../assets/zepbound_f.png';
import MounjaroImg from '../../assets/mounjaro_f.png';
import SaxendaImg from '../../assets/saxenda_ff.png';
import RybelsusImg from '../../assets/rhybelsus_ff.png';

export function InjectableMedsSection() {
    const injectableMeds = [
        { name: 'Wegovy', price: '$399/monthly', image: WegovyImg, showRx: true },
        { name: 'Ozempic', price: '$399/monthly', image: OzempicImg, showRx: true },
        { name: 'Zepbound', price: '$399/monthly', image: ZepboundImg, showRx: true },
        { name: 'Mounjaro', price: '$399/monthly', image: MounjaroImg, showRx: true },
        { name: 'Saxenda', price: '$399/monthly', image: SaxendaImg, showRx: true },
        { name: 'Rybelsus (Oral)', price: '$399/monthly', image: RybelsusImg, showRx: true },
    ];

    return (
        <section className="relative pt-0 pb-10 px-4 md:px-8 overflow-hidden bg-white">
            <div className="w-[90%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h3 className="text-4xl md:text-6xl font-extrabold text-[#28436F] tracking-tight font-lora">
                        Branded Medications
                    </h3>
                </div>

                {/* 3x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {injectableMeds.map((item, index) => (
                        <MedicationCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
