"use client"
import React from "react"
import BrandIcons from "./BrandIcons"

export default function ClientLogos() {
  const logos = [
    { name: "Amazon", icon: "amazon" },
    { name: "Spotify", icon: "spotify" },
    { name: "Slack", icon: "slack" },
    { name: "Google", icon: "google" },
    { name: "Netflix", icon: "netflix" }
  ]
  
  return (
    <div className="flex flex-wrap justify-between items-center">
      {logos.map((logo) => (
        <div key={logo.name} className="p-4 grayscale hover:grayscale-0 transition-all duration-300">
          <BrandIcons icon={logo.icon} className="w-24 h-12" />
        </div>
      ))}
    </div>
  )
}
