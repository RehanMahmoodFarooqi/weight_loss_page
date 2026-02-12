import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import WeightCalculator from './interactive/WeightCalculator';
import { DoctorHeroSection } from './sections/DoctorHeroSection';
import { InjectableMedsSection } from './sections/InjectableMedsSection';
import { FeatureSection } from './sections/FeatureSection';
import { BMISection } from './sections/BmiSection';
import { OralMedsSection } from './sections/OralMedsSection';
import { SuccessStorySection } from './sections/SuccessStorySection';
import { FAQSection } from './sections/FAQSection';
import './WeightLossPage.css';

export default function WeightLossPage() {
    return (
        <div className="bg-white min-h-screen font-lora">
            <Navbar />

            {/* Section 1: Interactive Weight Calculator */}
            {/* Added a subtle divider/spacing if needed, but Calculator has its own layout */}
            <div className="bg-white">
                <WeightCalculator />
            </div>

            {/* Section 2: Hero Intro & Doctor */}
            <DoctorHeroSection />

            {/* Section 3: Injectable Medications Carts */}
            <InjectableMedsSection />

            {/* Section 4: Feature / Slide1 Section */}
            <FeatureSection />

            {/* Section 5: BMI & Picture */}
            <BMISection />

            {/* Section 6: Oral Medications & Success Story */}
            <div className="bg-white">
                <OralMedsSection />
                <SuccessStorySection />
            </div>

            {/* Section 7: FAQs */}
            <FAQSection />

            <Footer />
        </div>
    );
}
