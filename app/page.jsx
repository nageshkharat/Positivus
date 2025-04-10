"use client"
import React from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import WorkingProcessSection from "../components/WorkingProcessSection"
import TestimonialsSection from "../components/TestimonialsSection"
import TrustedBySection from "../components/TrustedBySection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <WorkingProcessSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 