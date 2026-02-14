import React, { useState, useEffect, useRef } from 'react';
import '../../Calculator.css';
import ScaleImage from '../../assets/custom-scale.png';

import NewBottleImage from '../../assets/medication_bottle_new.png';
import TirzepatideImage from '../../assets/tirzepatide_viora.png';
import { MessageCircle } from 'lucide-react';

export function WeightCalculator() {
    const [currentWeight, setCurrentWeight] = useState(300);
    const [weightChange, setWeightChange] = useState(0);
    const trackRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleWeightChange = (e) => {
        const val = Number(e.target.value);
        if (!isNaN(val)) setCurrentWeight(val);
    };

    const handleTargetWeightChange = (e) => {
        const targetVal = Number(e.target.value);
        if (!isNaN(targetVal)) {
            setWeightChange(targetVal - currentWeight);
        }
    };

    const handleDrag = (clientX) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const trackWidth = rect.width;
        const startX = rect.left;

        let offsetX = clientX - startX;
        let percentage = offsetX / trackWidth;

        // Clamp between 0 and 1 for position
        // But we want 0.5 to be "0 change" (center)
        // Range: -1 (far left) to +1 (far right)

        // Let's map 0..1 to -50..+50 lbs change
        // center (0.5) -> 0 change

        // Visual clamp
        percentage = Math.max(0, Math.min(1, percentage));

        // internal value: -1 to 1
        const value = (percentage - 0.5) * 2;

        setWeightChange(Math.round(value * 50));
    };

    const startDrag = (e) => {
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        handleDrag(clientX);
    };

    useEffect(() => {
        const moveHandler = (e) => {
            if (isDragging) {
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                handleDrag(clientX);
            }
        };
        const upHandler = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', moveHandler);
            window.addEventListener('touchmove', moveHandler);
            window.addEventListener('mouseup', upHandler);
            window.addEventListener('touchend', upHandler);
        }
        return () => {
            window.removeEventListener('mousemove', moveHandler);
            window.removeEventListener('touchmove', moveHandler);
            window.removeEventListener('mouseup', upHandler);
            window.removeEventListener('touchend', upHandler);
        };
    }, [isDragging]);

    const estimatedWeight = currentWeight + weightChange;

    return (
        <div
            className="relative min-h-[70vh] flex items-center overflow-hidden mt-4"
            style={{
                backgroundColor: '#d0e8ec',
            }}
        >
            {/* Main Content Container */}
            <div className="w-full mx-auto px-4 md:px-8 relative z-10 py-8 lg:py-2 ">

                {/* Header Text - Now Above and Centered */}
                {/* Header Text - Based on Design Mock */}
                <div className="text-center w-[90%] mx-auto mb-8 mt-8 animate-fade-in-up space-y-4">
                    {/* Largest Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#28436F] font-lora leading-tight whitespace-nowrap">
                        Your Goal Weight Isn't a Dream. <br />
                        It's a Plan...
                    </h1>

                    {/* Larger Heading with Icon */}
                    {/* <div className="flex items-center justify-center gap-3 text-[#28436F] font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
                        <div className="flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-14 md:h-14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <path d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V75L75 90H16C12.6863 90 10 87.3137 10 84V25Z" fill="white" stroke="#28436F" strokeWidth="5" />
                                    <path d="M10 25C10 21.6863 12.6863 19 16 19H84C87.3137 19 90 21.6863 90 25V40H10V25Z" fill="#28436F" />
                                    <path d="M25 10V25M25 10C25 6 32 6 32 10V25M70 10V25M70 10C70 6 77 6 77 10V25" stroke="#28436F" strokeWidth="6" strokeLinecap="round" />
                                    <path d="M75 90V80C75 77.2386 77.2386 75 80 75H90" fill="#f1f5f9" stroke="#28436F" strokeWidth="4" strokeLinejoin="round" />
                                    <path d="M75 90L90 75" stroke="#28436F" strokeWidth="4" strokeLinecap="round" />
                                    <rect x="22" y="50" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="38" y="50" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="54" y="50" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="70" y="50" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="22" y="62" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="38" y="62" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="54" y="62" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="70" y="62" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="22" y="74" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="38" y="74" width="10" height="10" fill="#28436F" opacity="0.9" />
                                    <rect x="54" y="74" width="10" height="10" fill="#28436F" opacity="0.9" />
                                </g>
                            </svg>
                        </div>
                        <span>Same Day Appointment/ 7 Days a Week</span>
                    </div> */}

                    {/* Large Heading with Icon */}
                    {/* <div className="flex items-center justify-center gap-4 text-[#28436F]/90 font-semibold text-xl md:text-2xl lg:text-3xl whitespace-nowrap">
                        <MessageCircle size={30} className="text-[#2B4C9A]" />
                        <span>Effortless Text Consultation</span>
                    </div> */}
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12 w-full max-w-[1920px] mx-auto px-4">

                    {/* Left Bottle Image */}
                    <div className="hidden lg:flex flex-col items-center w-1/3 max-w-[400px] animate-fade-in-left mt-[550px]">
                        <img
                            src={NewBottleImage}
                            alt="Tirzepatide Bottle"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-[3rem] p-6 md:p-10 w-full lg:w-1/2 max-w-4xl mx-auto">

                        {/* Calculator Functions (Centered) */}
                        <div className="w-full flex flex-col items-center text-center space-y-6 animate-fade-in-up relative justify-center">

                            {/* 1. Current Weight Section */}
                            <div className="w-full flex flex-col items-center">
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <h3 className="text-3xl font-bold text-[#28436F]">Current Weight</h3>
                                </div>

                                <div className="relative w-full max-w-2xl transform transition-transform duration-300 hover:scale-[1.02] mx-auto">
                                    <img
                                        src={ScaleImage}
                                        alt="Digital Weight Scale"
                                        className="w-full h-auto mx-auto"
                                    />
                                    {/* Digital Overlay - Precisely positioned on the machine screen */}
                                    <div className="absolute top-[12%] left-1/2 -translate-x-1/3 w-[18%] h-[15%] bg-black rounded-sm border-2 border-gray-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center z-20">
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00FF41] font-mono tracking-widest drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
                                            {currentWeight}
                                        </div>
                                        <span className="text-xs font-bold text-[#00FF41]/70 mt-0.5 uppercase tracking-wider">LBS</span>
                                    </div>
                                </div>

                                {/* NEW: Input field below calculator picture */}
                                <div className="mt-8 w-full flex flex-col items-center mt-16">
                                    <h3 className="text-3xl font-bold text-[#28436F] mb-4">Enter Your Weight</h3>
                                    <input
                                        type="number"
                                        value={currentWeight}
                                        onChange={handleWeightChange}
                                        className="w-[200px] text-center bg-white rounded-2xl py-3 text-3xl font-bold text-[#28436F] transition-all outline-none shadow-sm no-arrow"
                                        placeholder="300"
                                    />
                                </div>
                            </div>

                            {/* 2. Slider Section */}
                            <div className="w-full max-w-2xl space-y-4 flex flex-col items-center mt-8">
                                <h3 className="text-3xl font-bold text-[#28436F]">
                                    How Much Weight You Wish To Lose
                                </h3>

                                <div className="w-full px-8">
                                    <div
                                        className="relative h-16 flex items-center select-none cursor-pointer"
                                        ref={trackRef}
                                        onMouseDown={startDrag}
                                        onTouchStart={startDrag}
                                    >
                                        {/* Track */}
                                        <div className="absolute w-full h-6 bg-white border-2 border-[#2B4C9A]/20 rounded-full shadow-inner relative z-0">
                                            {/* Red Center Markers (Outside) - Lengthened */}
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-red-600 rounded-full"></div>
                                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-red-600 rounded-full"></div>

                                            {/* Subtle internal indicator */}
                                            <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-red-600/30"></div>
                                        </div>

                                        {/* Slider Thumb - Now Circle */}
                                        <div
                                            className="absolute top-1/2 -translate-y-1/70 w-10 h-10 bg-white border-4 border-[#2B4C9A] rounded-full flex items-center justify-center z-20 shadow-lg transition-transform hover:scale-110 active:scale-95"
                                            style={{
                                                left: `${((weightChange / 50) + 1) / 2 * 100}%`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <div className="flex items-center gap-0.5 text-[#2B4C9A] font-bold text-lg select-none">
                                                <span>&lt;</span>
                                                <span>&gt;</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Weight Loss Result (Static Box with Section Background) */}
                            <div className="w-full max-w-[320px] mx-auto mt-6">
                                <div className="py-8 px-6 rounded-3xl bg-white shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[180px]">
                                    <div className="relative inline-flex items-center justify-center ">
                                        <span className="text-4xl md:text-5xl font-bold text-[#28436F] font-handwriting">
                                            {Math.abs(weightChange)}
                                        </span>
                                        <span className="absolute left-full ml-2 text-2xl text-[#28436F] font-bold top-1/2 -translate-y-1/2">
                                            lb
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Target Weight Section (Editable Field) */}
                            <div className="w-full flex flex-col items-center gap-2 mt-8">
                                <h3 className="text-3xl font-bold text-[#28436F]">Target Weight</h3>
                                <div className="relative group w-full flex flex-col items-center mt-4">
                                    <div className="w-[120px] bg-white rounded-2xl py-3 text-3xl font-bold text-[#28436F] shadow-sm cursor-default flex items-center justify-center">
                                        {estimatedWeight}
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Right Bottle Image */}
                    <div className="hidden lg:flex flex-col items-center w-1/3 max-w-[400px] animate-fade-in-right mt-[550px]">
                        <img
                            src={NewBottleImage}
                            alt="Medication Bottle"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
