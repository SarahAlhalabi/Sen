import { BrainCircuit } from "lucide-react"

const Introduction = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-6">
          <BrainCircuit className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Revolutionizing Investment Connections
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            SmartBidder is an innovative platform that leverages artificial intelligence to create meaningful
            connections between entrepreneurs with groundbreaking ideas and investors seeking promising opportunities.
            Our AI-enhanced matching algorithms analyze projects and investor preferences to suggest the most compatible
            partnerships, increasing the chances of successful funding and collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduction
