"use client"

import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  const handleJoinClick = () => {
    navigate("/register")
  }

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-emerald-800 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=800&width=1600"
          alt="Business meeting"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Where Ideas Meet Investors
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200">
            Connect your innovative projects with the right investors through our AI-powered platform.
          </p>
          <div className="mt-10">
            <button
              onClick={handleJoinClick}
              className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-300"
            >
              Join SmartBidder
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill={`${document.documentElement.classList.contains("dark") ? "#0F172A" : "#F9FAFB"}`}
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
