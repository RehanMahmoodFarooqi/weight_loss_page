import React from 'react';
import { MedicationCard } from '../ui/MedicationCard';

// Importing Images
// Importing Latest High-Quality "removebg" Images from assetss
import MounjaroImg from '../../assets/mounjaro-removebg-preview.png';
import OzempicImg from '../../assetss/ozempic-removebg-preview.png';
import WegovyImg from '../../assetss/wegovypen-removebg-preview.png';
import ZepboundImg from '../../assetss/zepbound.png';
import SemaglutideImg from '../../assets/semaglutidee.png';
import TirzepatideImg from '../../assetss/tirzepatide_card.png';
import SaxendaImg from '../../assetss/saxenda-removebg-preview.png';
import LiraglutideImg from '../../assetss/liraglutide_card.png';
import MedBgImg from '../../assets/med-bg.jpg';

export function InjectableMedsSection() {
    const injectableMeds = [
        { name: 'Semaglutide', price: '$299/mo', image: SemaglutideImg },
        { name: 'Tirzepatide', price: '$299/mo', image: TirzepatideImg },
        { name: 'Ozempic®', price: '$299/mo', image: OzempicImg },
        { name: 'Wegovy®', price: '$299/mo', image: WegovyImg },
        { name: 'Mounjaro®', price: '$299/mo', image: MounjaroImg },
        { name: 'Zepbound®', price: '$299/mo', image: ZepboundImg },
        { name: 'Saxenda®', price: '$299/mo', image: SaxendaImg },
        { name: 'Liraglutide', price: '$299/mo', image: LiraglutideImg },
    ];

    return (
        <section className="relative py-10 px-4 md:px-8 overflow-hidden">
            {/* Background Image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${MedBgImg})` }}
            >
                <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="w-[90%] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-bold text-[#28436F] mb-3 font-lora">
                        Your Weight-Loss Medication is Just a One-Click Away.
                    </h2>

                    <h3 className="text-5xl font-bold text-[#28436F] tracking-tight">
                        Injectable Medication
                    </h3>
                    <div className="w-120 h-1 bg-[#28436F] mx-auto mb-6"></div>
                </div>

                <div className="space-y-8">
                    {/* Row 1: 1-3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {injectableMeds.slice(0, 3).map((item, index) => (
                            <MedicationCard key={`inj-r1-${index}`} item={item} />
                        ))}
                    </div>

                    {/* Row 2: 4-5 (Centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {injectableMeds.slice(3, 5).map((item, index) => (
                            <MedicationCard key={`inj-r2-${index}`} item={item} />
                        ))}
                    </div>

                    {/* Row 3: 6-8 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {injectableMeds.slice(5, 8).map((item, index) => (
                            <MedicationCard key={`inj-r3-${index}`} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
