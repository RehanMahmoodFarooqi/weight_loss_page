import React from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WeightCalculator } from './components/interactive/WeightCalculator'
import { DoctorHeroSection } from './components/sections/DoctorHeroSection'
import { InjectableMedsSection } from './components/sections/InjectableMedsSection'
import { FeatureSection } from './components/sections/FeatureSection'
import { BMISection } from './components/sections/BmiSection'
import { OralMedsSection } from './components/sections/OralMedsSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { SuccessStorySection } from './components/sections/SuccessStorySection'
import { FAQSection } from './components/sections/FAQSection'
import { ScrollingBanner } from './components/layout/ScrollingBanner'
import './index.css'

function App() {
  return (
    <div className="bg-white min-h-screen font-lora w-full">
      <Navbar />

      <div className="pt-8 pb-8 text-center bg-white">
        <h2 className="text-4xl md:text-4xl lg:text-7xl font-bold font-lora mb-4 tracking-tight animate-fade-in">
          Dream Bigger. Lose Smarter
        </h2>
        {/* <h3 className="text-3xl md:text-3xl lg:text-5xl text-[#28436F] font-semibold opacity-90 animate-fade-in-up">
          Your Goal Weight Isn't a Dream. It's a Plan.
        </h3> */}
      </div>

      <WeightCalculator />
      <DoctorHeroSection />
      <InjectableMedsSection />
      <FeatureSection />
      <BMISection />
      <OralMedsSection />
      <SuccessStorySection />
      <TimelineSection />
      <FAQSection />

      <ScrollingBanner />
      <Footer />
    </div>
  )
}

export default App
