import React from 'react';
import { CheckCircle, Calendar, MessageCircle } from 'lucide-react';
import DoctorImg from '../../assets/doctor_consultation.png';

import TirzepatideVioraImg from '../../assets/tirzepatide_viora.png';
import SemaglutideVioraImg from '../../assets/new.png';

const InteractiveMedDisplay = ({ image, name, strengthData, volumeData }) => (
    <div className="w-full h-[500px] relative group overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-500">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[#d0e8ec]/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Central Bottle Image */}
        <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2">
            <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
                src={image}
                alt={`${name} Bottle`}
                className="h-[480px] w-auto object-contain drop-shadow-2xl relative z-10"
            />
        </div>

        {/* Left Card: Strengths */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-700 delay-100">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(40,67,111,0.1)] flex flex-col gap-3 min-w-[140px]">
                <h5 className="text-[#28436F] font-bold text-lg border-b border-[#28436F]/10 pb-2 mb-1">Strength</h5>
                <div className="flex flex-col gap-2">
                    {strengthData.map(s => (
                        <div key={s} className="text-[#28436F] font-semibold text-lg flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#2B4C9A]"></div>
                            {s}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Card: Volumes */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-700 delay-200">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(40,67,111,0.1)] flex flex-col gap-3 min-w-[140px] text-right items-end">
                <h5 className="text-[#28436F] font-bold text-lg border-b border-[#28436F]/10 pb-2 mb-1 w-full">Volume</h5>
                <div className="flex flex-col gap-2 items-end">
                    {volumeData.map(v => (
                        <div key={v} className="text-[#28436F] font-semibold text-lg flex items-center gap-2 flex-row-reverse">
                            <div className="w-2 h-2 rounded-full bg-[#2B4C9A] opacity-60"></div>
                            {v}
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Instruction Overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#28436F]/40 font-bold uppercase tracking-[0.2em] text-sm group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            Hover to reveal details
        </div>
    </div>
);

const CustomCalendarIcon = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="iconGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#28436F" />
                <stop offset="100%" stopColor="#1e3252" />
            </linearGradient>
            <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
                <feOffset dx="0.5" dy="0.5" result="offsetblur" />
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.15" />
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g filter="url(#subtleShadow)">
            {/* Main Page Shape with Dog-ear cutout */}
            <path
                d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V75L75 90H16C12.6863 90 10 87.3137 10 84V25Z"
                fill="white"
                stroke="#28436F"
                strokeWidth="5"
            />

            {/* Header / Top Section */}
            <path
                d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V40H10V25Z"
                fill="#28436F"
            />

            {/* Bold Hooks/Loops */}
            <path
                d="M25 10V25M25 10C25 6 32 6 32 10V25M70 10V25M70 10C70 6 77 6 77 10V25"
                stroke="#28436F"
                strokeWidth="6"
                strokeLinecap="round"
            />

            {/* Dog-ear Fold */}
            <path
                d="M75 90V80C75 77.2386 77.2386 75 80 75H90"
                fill="#f1f5f9"
                stroke="#28436F"
                strokeWidth="4"
                strokeLinejoin="round"
            />
            <path d="M75 90L90 75" stroke="#28436F" strokeWidth="4" strokeLinecap="round" />

            {/* Grid Squares */}
            {[
                [22, 50], [38, 50], [54, 50], [70, 50],
                [22, 62], [38, 62], [54, 62], [70, 62],
                [22, 74], [38, 74], [54, 74]
            ].map(([gx, gy], i) => (
                <rect key={i} x={gx} y={gy} width="10" height="10" fill="#28436F" opacity="0.9" />
            ))}
        </g>
    </svg>
);

export function DoctorHeroSection() {
    return (
        <section className="bg-white py-10 px-4 md:px-8 overflow-hidden">
            <div className="w-[90%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#28436F] mb-6 font-lora leading-tight whitespace-nowrap">
                        See What's Possible with Doctor-Guided Weight Loss
                    </h3>

                    {/* Features - Stacked Statements */}
                    <div className="flex flex-col items-center justify-center gap-4 mb-12">
                        {/* Statement 2: Same Day Appointment */}
                        <div className="flex items-center gap-3 text-[#28436F] font-bold text-3xl md:text-4xl">
                            <CustomCalendarIcon className="w-10 h-10 md:w-12 md:h-12" />
                            <span>Same Day Appointment/ 7 Days a Week</span>
                        </div>

                        {/* Statement 3: Effortless Text Consultation */}
                        <div className="flex items-center gap-3 text-[#28436F] font-semibold text-xl md:text-3xl">
                            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-[#28436F]" fill="#d0e8ec" />
                            <span>Effortless Text Consultation</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
                    {/* Content Box - Left side intro */}
                    <div className="order-2 lg:order-1 flex flex-col pt-0">
                        <div className="w-full">
                            <h4 className="text-4xl md:text-4xl font-bold text-[#28436F] mb-10 font-lora relative inline-block">
                                How Medical Weight Loss Works
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100/50 -z-10"></span>
                            </h4>

                            <p className="text-[#28436F] mb-12 text-2xl md:text-3xl leading-relaxed font-medium text-justify">
                                Your body signals hunger & fullness based on hormones—our medications mimic those signals so you feel fuller faster and longer.
                            </p>

                            <div className="flex flex-col">
                                <h2 className="text-5xl font-bold text-[#28436F] mb-4 text-center lg:text-left">GLP-1</h2>
                                <p className="text-2xl font-semibold text-[#28436F] mb-0 opacity-80 text-center lg:text-left">Most successful weight loss medicines</p>
                            </div>
                        </div>
                    </div>

                    {/* Doctor Image - Shortened to end at GLP-1 heading */}
                    <div className="order-1 lg:order-2 relative h-full">
                        <div className="relative h-full overflow-hidden group w-full min-h-[200px] lg:min-h-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#28436F]/40 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"></div>
                            <img
                                src={DoctorImg}
                                alt="Consulting Doctor"
                                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                            />

                            {/* Badger overlay */}
                            <div className="absolute bottom-8 left-4 right-4 z-10">
                                <div className="bg-white/90 backdrop-blur-md p-4 border border-white/50">
                                    <p className="text-[#28436F] font-bold text-2xl mb-1 text-justify">Board-Certified Weight Loss Specialists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medication Sections - Below the initial grid */}
                <div className="space-y-20 w-full">
                    {/* GLP-1 Semaglutide Details */}
                    <div className="flex flex-col items-start px-2">
                        <h3 className="text-4xl font-bold text-[#28436F] mb-8">Semaglutide</h3>
                        <InteractiveMedDisplay
                            image={SemaglutideVioraImg}
                            name="Semaglutide"
                            strengthData={["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg"]}
                            volumeData={["1mL", "2mL", "3mL", "4mL", "5mL"]}
                        />
                    </div>

                    {/* GIP/GLP-1 Section */}
                    <div className="flex flex-col">
                        <h2 className="text-5xl font-bold text-[#28436F] mb-12 text-center">GIP/GLP-1</h2>

                        <div className="flex flex-col items-start px-2">
                            <h3 className="text-4xl font-bold text-[#28436F] mb-8">Tirzepatide</h3>
                            <InteractiveMedDisplay
                                image={TirzepatideVioraImg}
                                name="Tirzepatide"
                                strengthData={["17mg", "34mg", "51mg", "68mg", "85mg"]}
                                volumeData={["1mL", "2mL", "3mL", "4mL", "5mL"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
