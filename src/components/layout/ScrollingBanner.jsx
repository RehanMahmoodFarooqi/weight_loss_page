import React from 'react';
import { Calendar, ThumbsUp, ShieldCheck, Star, Award, Stethoscope } from 'lucide-react';

export function ScrollingBanner() {
    const bannerItems = [
        { icon: <Calendar size={32} />, text: 'Same Day Visits' },
        { icon: <ThumbsUp size={32} />, text: '95% patient satisfaction' },
        { icon: <ShieldCheck size={32} />, text: 'No insurance needed' },
        { icon: <ShieldCheck size={32} />, text: 'HIPAA Certified' },
        { icon: <Calendar size={32} />, text: 'Same-day visits' },
        { icon: <Star size={32} />, text: "Doctor's availability 365 days a year" },
        { icon: <Award size={32} />, text: '36 specialties offered' },
        { icon: <Stethoscope size={32} />, text: 'U.S. board-certified doctors' },
    ];

    return (
        <section className="bg-[#2B4C9A] py-12 overflow-hidden">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 60s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            <div className="px-4 md:px-6 lg:px-8">
                <div className="relative overflow-hidden">
                    <div className="animate-scroll">
                        {/* First set of items */}
                        <div className="flex items-center">
                            {bannerItems.map((item, index) => (
                                <div key={`banner-1-${index}`} className="flex items-center gap-4 whitespace-nowrap mx-12">
                                    <div className="text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-semibold text-2xl">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate set for seamless looping */}
                        <div className="flex items-center">
                            {bannerItems.map((item, index) => (
                                <div key={`banner-2-${index}`} className="flex items-center gap-4 whitespace-nowrap mx-12">
                                    <div className="text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="text-white font-semibold text-2xl">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
