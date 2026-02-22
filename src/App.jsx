import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WeightCalculator } from './components/interactive/WeightCalculator'
import { DoctorHeroSection } from './components/sections/DoctorHeroSection'
import { InjectableMedsSection } from './components/sections/InjectableMedsSection'
import { OralMedication } from './components/sections/OralMedication'
import { FeatureSection } from './components/sections/FeatureSection'
import { BMISection } from './components/sections/BMISection'
// import { OralMedsSection } from './components/sections/OralMedsSection'
import { TimelineSection } from './components/sections/TimelineSection'
import { SuccessStorySection } from './components/sections/SuccessStorySection'
import { FAQSection } from './components/sections/FAQSection'
import { CompoundedInjectables } from './components/sections/CompoundedInjectables'
import { AdditionalMedication } from './components/sections/AdditionalMedication'
import { VideoSection } from './components/sections/VideoSection'
import { MainMedicineSection } from './components/sections/MainMedicineSection'
import { ScrollingBanner } from './components/layout/ScrollingBanner'
import { FAQsPage } from './components/pages/FAQsPage'
import './index.css'

function HomePage() {
  return (
    <>
      <div className="pt-8 pb-4 text-center bg-white">
        <h2 className="text-4xl md:text-4xl lg:text-7xl font-bold font-lora mb-4 tracking-tight animate-fade-in">
          Dream Bigger. Lose Smarter
        </h2>
      </div>

      <WeightCalculator />
      <DoctorHeroSection />
      <CompoundedInjectables />
      <AdditionalMedication />
      <MainMedicineSection />
      <VideoSection />
      <InjectableMedsSection />
      <BMISection />
      <OralMedication />
      <SuccessStorySection />
      <TimelineSection />
      <FAQSection />
    </>
  )
}

function App() {
  return (
    <div className="bg-white min-h-screen font-lora w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faqs" element={<FAQsPage />} />
      </Routes>
      <ScrollingBanner />
      <Footer />
    </div>
  )
}

export default App
