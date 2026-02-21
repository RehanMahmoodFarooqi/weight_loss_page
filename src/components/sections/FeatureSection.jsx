import React from 'react';
import Slide1Img from "../../assets/program_overview.png";
import Slide2Img from "../../assets/ChatGPT Image Feb 18, 2026, 10_06_33 AM.png";
import Slide3Img from "../../assets/additional_support.png";

export function FeatureSection() {
    return (
        <section className="bg-white py-20 px-4 md:px-8 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-start">

                    {/* Image 1 - Top Step (Behind) */}
                    <div className="w-full md:w-[35%] z-10 animate-fade-in-up">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white">
                            <div className="absolute inset-0 bg-blue-900/10 blur-xl -z-10 transform scale-95"></div>
                            <img
                                src={Slide1Img}
                                alt="Feature 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Image 2 - Middle Step (Middle) */}
                    <div className="w-full md:w-[35%] z-20 md:-ml-12 md:mt-55 animate-fade-in-up animation-delay-200">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white">
                            <div className="absolute inset-0 bg-blue-900/10 blur-xl -z-10 transform scale-95"></div>
                            <img
                                src={Slide2Img}
                                alt="Feature 2"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Image 3 - Bottom Step (Front) */}
                    <div className="w-full md:w-[35%] z-30 md:-ml-12 md:mt-105 animate-fade-in-up animation-delay-400">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white">
                            <div className="absolute inset-0 bg-blue-900/10 blur-xl -z-10 transform scale-95"></div>
                            <img
                                src={Slide3Img}
                                alt="Feature 3"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

