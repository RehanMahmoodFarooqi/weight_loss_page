import React, { useState } from 'react';
import BmiBg from '../../assets/bg.jpeg';
import image1 from "../../assets/transformation_story.png";
import programOverview from "../../assets/111.png";
import additionalSupport from "../../assets/222.png";

export function BMISection() {
    const [weight, setWeight] = useState('');
    const [heightFeet, setHeightFeet] = useState('');
    const [heightInches, setHeightInches] = useState('');
    const bmi = React.useMemo(() => {
        if (weight && heightFeet) {
            const w = parseFloat(weight);
            const hFt = parseFloat(heightFeet);
            const hIn = parseFloat(heightInches || 0);

            if (w > 0 && hFt > 0) {
                const totalInches = (hFt * 12) + hIn;
                const bmiValue = (703 * w) / (totalInches * totalInches);
                return bmiValue.toFixed(1);
            }
        }
        return null;
    }, [weight, heightFeet, heightInches]);

    return (
        <section className="bg-white pt-0 pb-0 overflow-hidden">
            {/* 1. Top Content with Geometric Background */}
            <div
                className="relative pt-16 pb-0"
                style={{
                    backgroundImage: `url(${BmiBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Desktop Left Image - Extreme Edge */}
                <div className="hidden lg:block w-[300px] xl:w-[380px] absolute left-0 bottom-0 transform transition-transform hover:scale-105 duration-500 z-10">
                    <img
                        src={programOverview}
                        alt="Program Overview"
                        className="w-full h-auto"
                    />
                </div>

                {/* Desktop Right Image - Extreme Edge */}
                <div className="hidden lg:block w-[300px] xl:w-[380px] absolute right-0 bottom-0 transform transition-transform hover:scale-105 duration-500 z-10">
                    <img
                        src={additionalSupport}
                        alt="Additional Support"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-[90%] mx-auto flex flex-col items-center gap-12 px-4 md:px-8 relative z-20">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-[#28436F] text-center font-lora">
                        Turn Your BMI Into a Personalized Weight Loss Plan
                    </h2>

                    {/* Inputs Row */}
                    <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center">
                        {/* ... (existing inputs) ... */}
                        <div className="flex-1">
                            <label className="block font-lora text-[20px] font-bold text-[#01578c] mb-2">Weight (lbs)</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="150"
                                value={weight}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (val === '' || parseFloat(val) >= 0) setWeight(val);
                                }}
                                className="w-full h-[50px] px-3 rounded-[6px] border-[4px] border-[#cae2eb] outline outline-4 outline-white !bg-white text-[20px] font-medium shadow-[0_3px_2px_rgba(233,236,239,0.05)] focus:ring-0 bmi-number-input placeholder:text-[#9ca3af] placeholder:font-bold text-[#0f0f0f] autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-lora text-[20px] font-bold text-[#01578c] mb-2">Height (ft)</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="5"
                                value={heightFeet}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (val === '' || parseFloat(val) >= 0) setHeightFeet(val);
                                }}
                                className="w-full h-[50px] px-3 rounded-[6px] border-[4px] border-[#cae2eb] outline outline-4 outline-white !bg-white text-[20px] font-medium shadow-[0_3px_2px_rgba(233,236,239,0.05)] focus:ring-0 bmi-number-input placeholder:text-[#9ca3af] placeholder:font-bold text-[#0f0f0f] autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-lora text-[20px] font-bold text-[#01578c] mb-2">Height (in)</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="10"
                                max="11"
                                value={heightInches}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    if (val === '' || parseFloat(val) >= 0) setHeightInches(val);
                                }}
                                className="w-full h-[50px] px-3 rounded-[6px] border-[4px] border-[#cae2eb] outline outline-4 outline-white !bg-white text-[20px] font-medium shadow-[0_3px_2px_rgba(233,236,239,0.05)] focus:ring-0 bmi-number-input placeholder:text-[#9ca3af] placeholder:font-bold text-[#0f0f0f] autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]"
                            />
                        </div>
                    </div>

                    {/* Central Area with BMI Circle */}
                    <div className="flex flex-col items-center justify-center w-full px-0 min-h-[300px] lg:min-h-[400px] mt-8">
                        {/* BMI Circle Display */}
                        <div className="w-[320px] h-[320px] bg-[#2B4C9A] rounded-full flex items-center justify-center relative flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] mx-auto z-10 lg:mb-20">
                            <div className="w-[220px] h-[220px] bg-white rounded-full flex flex-col items-center justify-center animate-bmi-pulse shadow-none">
                                <span className="font-sans text-[70px] font-bold text-[#2B4C9A] leading-[1.2]">
                                    {bmi || 'BMI'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Images - stacked below circle if screen is small */}
                    <div className="flex flex-col gap-6 lg:hidden w-full px-4">
                        <img
                            src={programOverview}
                            alt="Program Overview"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                        <img
                            src={additionalSupport}
                            alt="Additional Support"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Transformation Image - Clean Background */}
            {/* <div className="w-[90%] mx-auto px-4 md:px-8 mt-12">
                <div className="relative w-full">
                    <div className="absolute inset-x-0 bottom-0 top-10 bg-[#d0e8ec] blur-3xl opacity-30 -z-10"></div>
                    <img
                        src={image1}
                        alt="Weight Loss Transformation"
                        className="w-full h-auto border-4 border-white shadow-2xl"
                    />
                </div>
            </div> */}
        </section>
    );
}
