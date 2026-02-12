import React from 'react';
import ProvenResultsImg from '../../assets/proven-results-graph.png';

export function TimelineSection() {
    return (
        <section id="timeline-section" className="pt-10 pb-0 bg-white px-4 md:px-8 overflow-hidden relative">
            <div className="w-full mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#28436F] mb-6 font-lora">
                        Healthy Weight Loss Proven Results
                    </h2>
                    <p className="text-2xl text-[#28436F] max-w-5xl mx-auto font-medium">
                        Real Data Showing the Expected Percentage of Body Weight Loss Over Time with Our Doctor-Guided Programs.
                    </p>
                </div>

                {/* Chart Image Container */}
                <div className="relative w-full max-w-7xl mx-auto">
                    <div className="bg-white p-2 md:p-6">
                        <img
                            src={ProvenResultsImg}
                            alt="Proven Weight Loss Results Graph"
                            className="w-full h-auto object-contain select-none pointer-events-none"
                            style={{
                                filter: 'contrast(1.05) saturate(1.1)',
                                mixBlendMode: 'multiply'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
