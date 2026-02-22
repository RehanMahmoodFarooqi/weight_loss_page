import React from 'react';
import SuccessImg from '../../assets/success-story.jpg';

export function SuccessStorySection() {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
                <div className="relative group h-[350px] lg:h-[400px] w-full max-w-lg mx-auto lg:mx-0">
                    {/* Creative border frame */}
                    <div className="absolute top-3 left-3 w-full h-full border-2 border-[#2B4C9A] -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300 mt-2"></div>
                    <img
                        src={SuccessImg}
                        alt="Success Story"
                        className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                </div>

                <div className="text-left py-2 lg:py-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#28436F] mb-6 font-lora leading-tight whitespace-nowrap mt-0">
                        A Smarter Way to Lose Weight
                    </h2>
                    <p className="text-[#28436F] leading-relaxed text-xl md:text-2xl font-medium text-justify">
                        Achieve real, sustainable weight loss — safely, effectively, and with medical guidance you can trust. At TeleHealth.com, our program combines proven science, personalized treatment plans, and ongoing expert support to help you reach and maintain your goals.
                        Every step of your journey is guided by licensed medical professionals who adapt your plan as your body and needs evolve.
                    </p>
                </div>
            </div>
        </section>
    );
}
