import React, { useState, useEffect } from 'react';
import BmiBg from '../../assets/bg.jpeg';
import image1 from "src/assets/ChatGPT Image Feb 7, 2026, 06_24_15 PM.png";

export function BMISection() {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const [bmi, setBmi] = useState(null);

    useEffect(() => {
        if (weight && heightFeet) {
            const w = parseFloat(weight);
            const hFt = parseFloat(heightFeet);
            const hIn = parseFloat(heightInches || 0);

            if (w > 0 && hFt > 0) {
                const totalInches = (hFt * 12) + hIn;
                const bmiValue = (703 * w) / (totalInches * totalInches);
                setBmi(bmiValue.toFixed(1));
            } else {
                setBmi(null);
            }
        } else {
            setBmi(null);
        }
    }, [weight, heightFeet, heightInches]);

    return (
        <section className="bg-white pt-0 pb-10 border-b border-[#28436F]/10 overflow-hidden">
            {/* 1. Top Content with Geometric Background */}
            <div
                className="py-16 px-4 md:px-8 border-b border-[#28436F]/5"
                style={{
                    backgroundImage: `url(${BmiBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="w-[90%] mx-auto flex flex-col items-center gap-12">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-[#28436F] text-center font-lora">
                        Turn Your BMI Into a Personalized Weight Loss Plan
                    </h2>

                    {/* Inputs Row */}
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
                        <div className="flex-1">
                            <label className="block font-lora text-xl font-bold text-[#28436F] mb-2">Weight (lbs)</label>
                            <input
                                type="number"
                                placeholder="150"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full h-[80px] px-6 border border-[#28436F]/20 bg-white text-3xl font-medium focus:outline-none focus:border-[#2B4C9A] focus:ring-1 focus:ring-[#2B4C9A] bmi-number-input text-[#28436F]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-lora text-xl font-bold text-[#28436F] mb-2">Height (ft)</label>
                            <input
                                type="number"
                                placeholder="5"
                                value={heightFeet}
                                onChange={(e) => setHeightFeet(e.target.value)}
                                className="w-full h-[80px] px-6 border border-[#28436F]/20 bg-white text-3xl font-medium focus:outline-none focus:border-[#2B4C9A] focus:ring-1 focus:ring-[#2B4C9A] bmi-number-input text-[#28436F]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-lora text-xl font-bold text-[#28436F] mb-2">Height (in)</label>
                            <input
                                type="number"
                                placeholder="10"
                                max="11"
                                value={heightInches}
                                onChange={(e) => setHeightInches(e.target.value)}
                                className="w-full h-[80px] px-6 border border-[#28436F]/20 bg-white text-3xl font-medium focus:outline-none focus:border-[#2B4C9A] focus:ring-1 focus:ring-[#2B4C9A] bmi-number-input text-[#28436F]"
                            />
                        </div>
                    </div>

                    {/* BMI Circle Display */}
                    <div className="w-[450px] h-[450px] bg-[#2B4C9A] rounded-full flex items-center justify-center relative flex-shrink-0 shadow-[0_10px_40px_rgba(43,76,154,0.3)] animate-float">
                        <div className="w-[320px] h-[320px] bg-white rounded-full flex flex-col items-center justify-center animate-bmi-pulse shadow-inner">
                            <span className="font-sans text-[110px] font-bold text-[#2B4C9A] leading-tight">
                                {bmi || 'BMI'}
                            </span>
                            <span className="text-[12px] font-bold text-[#28436F]/30 uppercase tracking-[0.2em] -mt-2">
                                {bmi ? 'Result' : 'Calculating'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Transformation Image - Clean Background */}
            <div className="w-[90%] mx-auto px-4 md:px-8 mt-12">
                <div className="relative w-full">
                    <div className="absolute inset-x-0 bottom-0 top-10 bg-[#d0e8ec] blur-3xl opacity-30 -z-10"></div>
                    <img
                        src={image1}
                        alt="Weight Loss Transformation"
                        className="w-full h-auto border-4 border-white shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
