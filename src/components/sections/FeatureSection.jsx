import React from 'react';
import Slide1Img from '../../assets/slide1.png';
import Slide4Img from '../../assets/slide4.png';

export function FeatureSection() {
    return (
        <section className="bg-white pt-2 pb-10 px-4 md:px-8 overflow-hidden border-t border-gray-50">
            <div className="w-[90%] mx-auto flex flex-col items-center">

                {/* 1. Top Image - Aligned Left (Z-Index 20 to stay on top) */}
                <div className="w-full lg:w-[40%] self-start z-20 animate-fade-in-left mt-[30px]">
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#d0e8ec]/30 blur-2xl -z-10 transform scale-95"></div>
                        <img
                            src="src/assets/ChatGPT Image Feb 7, 2026, 06_10_33 PM.png"
                            alt="Program Overview"
                            className="w-full h-auto object-cover border-4 border-white"
                        />
                    </div>
                </div>

                {/* 2. Tall Text Container - Overlaps images slightly (-mt-12) */}
                <div className="w-full max-w-2xl bg-white p-8 md:p-14 border-4 border-[#d0e8ec] relative z-10 animate-fade-in-up -mt-12 -mb-12">


                    <div className="flex flex-col items-center mb-6">
                        <h3
                            className="text-lg md:text-3xl lg:text-3xl font-bold text-[#28436F] font-lora inline-block lg:whitespace-nowrap border-b-2 border-[#d0e8ec] mb-1"
                            style={{ color: 'rgb(40, 67, 111)' }}
                        >
                            Weight Loss Starting With You
                        </h3>
                        <h2
                            className="text-lg md:text-2xl lg:text-3xl font-bold text-[#28436F] font-lora inline-block lg:whitespace-nowrap border-b-2 border-[#d0e8ec] pb-1"
                            style={{ color: 'rgb(40, 67, 111)' }}
                        >
                            Personalized Prescription...
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="group/item">
                            <h5 className="font-bold text-black text-xl mb-2">Appetite Control</h5>
                            <p className="text-[#28436F] text-base md:text-lg leading-relaxed text-justify">Prescription treatments can help reduce hunger, control cravings, and promote fullness, making it easier to stick to your plan and maintain consistent progress.</p>
                        </div>
                        <div className="group/item">
                            <h5 className="font-bold text-black text-xl mb-2">Metabolic & Blood Sugar Support</h5>
                            <p className="text-[#28436F] text-base md:text-lg leading-relaxed text-justify">Some weight-loss medications help regulate metabolism and blood sugar, supporting fat loss while maintaining energy and overall metabolic health.</p>
                        </div>
                        <div className="group/item">
                            <h5 className="font-bold text-black text-xl mb-2">Longterm Lifestyle Integration</h5>
                            <p className="text-[#28436F] text-base md:text-lg leading-relaxed text-justify">Weight loss is sustainable when paired with healthy habits. Our program includes guidance on nutrition, activity, and behavior changes, ensuring you keep the weight off long-term.</p>
                        </div>
                        <div className="group/item">
                            <h5 className="font-bold text-black text-xl mb-2">Convenient Online Access</h5>
                            <p className="text-[#28436F] text-base md:text-lg leading-relaxed text-justify">All weight-loss care is 100% online — consultations, follow-ups, and prescription management are accessible from home, saving time and stress while staying on track.</p>
                        </div>
                        <div className="group/item">
                            <h5 className="font-bold text-black text-xl mb-2">Safe & Responsible Prescribing</h5>
                            <p className="text-[#28436F] text-base md:text-lg leading-relaxed text-justify">Medications are prescribed only when clinically appropriate, with careful oversight to maximize results.</p>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Image - Aligned Right (Z-Index 20 to stay on top) */}
                <div className="w-full lg:w-[40%] self-end z-20 animate-fade-in-right">
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#28436F]/10 blur-2xl -z-10 transform scale-95"></div>
                        <img
                            src="src/assets/ChatGPT Image Feb 7, 2026, 06_05_12 PM.png"
                            alt="Additional Support"
                            className="w-full h-auto object-cover border-4 border-white"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

