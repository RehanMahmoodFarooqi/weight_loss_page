import React from 'react';
import SuccessImg from '../../assets/success.png';

export function SuccessStorySection() {
    return (
        <section className="bg-white py-10 px-4 md:px-8">
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                <div className="relative group h-[400px] lg:h-full">
                    {/* Creative border frame */}
                    <div className="absolute top-4 left-4 w-full h-[calc(100%-1rem)] border-2 border-[#2B4C9A] -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
                    <img
                        src={SuccessImg}
                        alt="Success Story"
                        className="w-full h-full absolute inset-0 object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                </div>

                <div className="relative">

                    <h2 className="text-4xl md:text-4xl font-bold text-[#28436F] mb-10 font-lora leading-tight">A Smarter Way to Lose Weight</h2>
                    <p className="text-[#28436F]/80 leading-relaxed mb-12 text-xl md:text-2xl font-medium text-justify">
                        Achieve real, sustainable weight loss — safely, effectively, and with medical guidance. At TeleHealth.com, our program combines science, personalized care, and ongoing support to help you reach your goals.
                    </p>

                    <div className="space-y-10">
                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-[#28436F] mb-4">Clinically Proven Results</h4>
                            <p className="text-[#28436F]/70 text-lg md:text-xl leading-relaxed text-justify">
                                Our medically guided program uses evidence-based treatments, including GLP-1–based medications when appropriate, shown in studies to support 15–20% average body-weight loss over 12 months.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-[#28436F] mb-4">Personalized Weight-Loss Plan</h4>
                            <p className="text-[#28436F]/70 text-lg md:text-xl leading-relaxed text-justify">
                                Your provider designs a plan tailored to your body, goals, and lifestyle, combining medications, nutrition guidance, and behavioral strategies to maximize fat loss while preserving lean muscle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
