const DemoPreview = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Platform Preview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of our intuitive interface and powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Intelligent Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our AI-powered dashboard provides real-time insights and analytics to help you make informed decisions.
              Track your projects, monitor investments, and receive personalized recommendations all in one place.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">
                  Customizable widgets for personalized experience
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">Real-time notifications and updates</p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-600 dark:text-gray-300">Advanced analytics and reporting tools</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoPreview
