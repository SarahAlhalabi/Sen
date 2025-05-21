"use client"

import { Lightbulb, TrendingUp } from "lucide-react"
import { useState } from "react"

const UserRoles = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const roles = [
    {
      title: "Entrepreneur",
      icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
      description: "Showcase your innovative ideas and connect with potential investors.",
      benefits: [
        "AI-powered investor matching",
        "Secure project submission",
        "Feedback from industry experts",
        "Guided funding process",
      ],
      color: "bg-blue-50 dark:bg-blue-900/30",
      borderColor: "border-blue-200 dark:border-blue-700",
    },
    {
      title: "Investor",
      icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
      description: "Discover promising projects aligned with your investment criteria.",
      benefits: [
        "Smart project recommendations",
        "Detailed analytics and insights",
        "Direct communication channels",
        "Portfolio management tools",
      ],
      color: "bg-emerald-50 dark:bg-emerald-900/30",
      borderColor: "border-emerald-200 dark:border-emerald-700",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Choose Your Role</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          SmartBidder caters to different users with specialized features for each role.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`rounded-xl border ${role.borderColor} ${
              role.color
            } p-8 transition-all duration-500 transform hover:shadow-xl ${
              hoveredCard === index ? "scale-105" : ""
            } hover:-translate-y-1`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 transition-transform duration-500 transform">
                {hoveredCard === index ? <div className="animate-bounce">{role.icon}</div> : <div>{role.icon}</div>}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{role.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{role.description}</p>
              <ul className="space-y-2 text-left w-full">
                {role.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className={`flex items-start transition-all duration-300 ${
                      hoveredCard === index ? "translate-x-1" : ""
                    }`}
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <svg
                      className={`h-5 w-5 text-emerald-500 mr-2 mt-0.5 transition-transform duration-300 ${
                        hoveredCard === index ? "scale-110" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UserRoles
