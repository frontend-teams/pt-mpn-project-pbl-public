import React from 'react'
import HeroSection from '../../components/sections/HeroSection'
import TrainingPreview from '../../components/sections/TrainingPreview'
import ServicePreview from '../../components/sections/ServicePreview'
import Partners from '../../components/sections/Partners'

const Home = () => {
  return (
    <div>
      {/* 1. Hero Section (Judul & CTA) */}
      <HeroSection />

      {/* 2. Preview Pelatihan */}
      <TrainingPreview />

      {/* 3. Preview Layanan */}
      <ServicePreview />

      {/* 4. Mitra Kerja Sama */}
      <Partners />
    </div>
  )
}

export default Home