"use client"

import { useNavigate } from "react-router-dom"

const CallToAction = () => {
  const navigate = useNavigate()

  const handleSignUp = (role) => {
    navigate("/register", { state: { role } })
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900 to-emerald-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join SmartBidder?</h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-0">
                Choose your role and start connecting with the right partners today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleSignUp("entrepreneur")}
                className="px-8 py-4 rounded-md bg-white text-blue-900 font-medium hover:bg-gray-100 transition-colors"
              >
                Sign Up as Entrepreneur
              </button>
              <button
                onClick={() => handleSignUp("investor")}
                className="px-8 py-4 rounded-md bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
              >
                Sign Up as Investor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
