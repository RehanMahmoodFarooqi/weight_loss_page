import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import DoctorImg from '../../assets/doctor_resized.png';
import Slide2Img from "../../assets/ChatGPT Image Feb 18, 2026, 10_06_33 AM (2).png";

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
            <path
                d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V75L75 90H16C12.6863 90 10 87.3137 10 84V25Z"
                fill="white"
                stroke="#28436F"
                strokeWidth="5"
            />
            <path
                d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V40H10V25Z"
                fill="#28436F"
            />
            <path
                d="M25 10V25M25 10C25 6 32 6 32 10V25M70 10V25M70 10C70 6 77 6 77 10V25"
                stroke="#28436F"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M75 90V80C75 77.2386 77.2386 75 80 75H90"
                fill="#f1f5f9"
                stroke="#28436F"
                strokeWidth="4"
                strokeLinejoin="round"
            />
            <path d="M75 90L90 75" stroke="#28436F" strokeWidth="4" strokeLinecap="round" />
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
        <section className="bg-white py-12 px-4 md:px-8 overflow-hidden">
            <div className="w-[90%] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#28436F] mb-6 font-lora leading-tight whitespace-nowrap">
                        See What's Possible with Doctor-Guided Weight Loss
                    </h3>

                    <div className="flex flex-col items-center justify-center gap-4 mb-12">
                        <a
                            href="https://telehealthyou.com/book-appointment?flow=schedule"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-[#28436F] font-bold text-3xl md:text-4xl hover:opacity-80 transition-opacity cursor-pointer no-underline"
                        >
                            <CustomCalendarIcon className="w-10 h-10 md:w-12 md:h-12 animate-pulse-zoom" />
                            <span>Same Day Appointment/ 7 Days a Week</span>
                        </a>

                        <a
                            href="https://telehealthyou.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-[#28436F] font-semibold text-xl md:text-3xl hover:opacity-80 transition-opacity cursor-pointer no-underline"
                        >
                            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-[#2B4C9A] animate-pulse-zoom" fill="#d0e8ec" />
                            <span>Effortless Text Consultation</span>
                        </a>
                    </div>
                </div>

                {/* Hero Grid - Text Left, Image Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="flex flex-col max-w-xl">
                        <h4 className="text-4xl md:text-4xl font-bold text-[#28436F] mb-5 font-lora relative inline-block">
                            How Medical Weight Loss Works
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100/50 -z-10"></span>
                        </h4>

                        <p className="text-[#28436F] text-3xl md:text-3xl leading-relaxed font-lora text-left">
                            Your body signals hunger & fullness based on hormones—our medications mimic those signals so you feel fuller faster and longer.
                        </p>

                        <div className="mt-15 w-full overflow-hidden rounded-2xl shadow-xl relative z-20"
                            style={{ marginLeft: '17rem', marginTop: '1rem' }}>
                            <img
                                src={Slide2Img}
                                alt="Weight Loss Progress"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative w-full aspect-[4/3] overflow-hidden z-30">
                            <img
                                src={DoctorImg}
                                alt="Consulting Doctor"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
