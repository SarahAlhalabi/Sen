"use client"

import { BrainCircuit, Bell, Filter, Shield } from "lucide-react"
import { useState } from "react"

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-emerald-600" />,
      title: "AI Deal Analysis",
      description:
        "Our advanced algorithms analyze projects and investor preferences to suggest the most compatible matches.",
    },
    {
      icon: <Bell className="h-8 w-8 text-emerald-600" />,
      title: "Smart Notifications",
      description: "Stay updated with real-time alerts about new opportunities that match your criteria.",
    },
    {
      icon: <Filter className="h-8 w-8 text-emerald-600" />,
      title: "Offer Filtering",
      description: "Customize your search with advanced filters to find exactly what you're looking for.",
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Secure Project Submission",
      description: "Submit your projects with confidence knowing your intellectual property is protected.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Platform Features</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            SmartBidder offers a suite of powerful tools designed to streamline the investment process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-700 rounded-xl shadow-md p-6 transition-all duration-500 ${
                hoveredFeature === index
                  ? "shadow-xl transform -translate-y-2 border-b-4 border-emerald-500"
                  : "hover:shadow-lg"
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full mb-4 transition-all duration-300 ${
                    hoveredFeature === index ? "bg-emerald-200 dark:bg-emerald-800 scale-110" : ""
                  }`}
                >
                  <div className={`transition-transform duration-300 ${hoveredFeature === index ? "rotate-12" : ""}`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p
                  className={`text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                    hoveredFeature === index ? "text-gray-800 dark:text-gray-200" : ""
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
