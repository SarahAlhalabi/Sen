"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TopProfiles = () => {
  const [activeTab, setActiveTab] = useState("projects")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [pagesCount, setPagesCount] = useState(1)

  const projectsContainerRef = useRef(null)
  const investorsContainerRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "EcoTech Solutions",
      category: "Clean Energy",
      description: "Innovative solar panel technology with 40% higher efficiency than market standards.",
      funding: "$2.5M",
      progress: 75,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "MediSync",
      category: "Healthcare",
      description: "AI-powered diagnostic tool for early detection of cardiovascular diseases.",
      funding: "$1.8M",
      progress: 60,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "UrbanFarm",
      category: "AgriTech",
      description: "Vertical farming solution for urban environments with minimal water consumption.",
      funding: "$3.2M",
      progress: 85,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "FinSecure",
      category: "FinTech",
      description: "Blockchain-based security system for financial transactions with zero fraud incidents.",
      funding: "$1.5M",
      progress: 45,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "AquaPure",
      category: "CleanTech",
      description: "Revolutionary water purification system using nano-filtration technology.",
      funding: "$2.1M",
      progress: 65,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "RoboAssist",
      category: "Robotics",
      description: "AI-powered robotic assistant for elderly care and medical monitoring.",
      funding: "$3.5M",
      progress: 80,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const investors = [
    {
      id: 1,
      name: "Green Future Capital",
      focus: "Sustainability, Clean Energy",
      investments: 24,
      successRate: "92%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Horizon Ventures",
      focus: "Technology, Healthcare",
      investments: 36,
      successRate: "88%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Innovation Partners",
      focus: "AI, Robotics, IoT",
      investments: 18,
      successRate: "94%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Global Growth Fund",
      focus: "Diverse Industries",
      investments: 42,
      successRate: "85%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Tech Accelerator Group",
      focus: "Software, SaaS, Mobile",
      investments: 31,
      successRate: "89%",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "BioMed Investments",
      focus: "Healthcare, Biotech",
      investments: 27,
      successRate: "91%",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Calculate pages count based on container width and number of cards
  useEffect(() => {
    const calculatePages = () => {
      const container = activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
      if (!container) return

      const containerWidth = container.clientWidth
      const cardWidth =
        containerWidth >= 1024 ? containerWidth / 4 : containerWidth >= 768 ? containerWidth / 2 : containerWidth
      const itemsCount = activeTab === "projects" ? projects.length : investors.length
      const visibleItems = containerWidth >= 1024 ? 4 : containerWidth >= 768 ? 2 : 1
      const pages = Math.ceil(itemsCount / visibleItems)

      setPagesCount(pages)
      // Reset current page when switching tabs
      setCurrentPage(0)

      // Reset scroll position
      if (container) {
        container.scrollLeft = 0
      }
    }

    calculatePages()
    window.addEventListener("resize", calculatePages)
    return () => window.removeEventListener("resize", calculatePages)
  }, [activeTab, projects.length, investors.length])

  const handleMouseDown = (e) => {
    const container = activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
    if (!container) return

    setIsDragging(true)
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
    container.style.cursor = "grabbing"
    container.style.userSelect = "none"
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    const container = activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
    if (!container) return

    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    const container = activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
    if (!container) return

    container.style.cursor = "grab"
    container.style.removeProperty("user-select")

    // Calculate current page based on scroll position
    const containerWidth = container.clientWidth
    const scrollPosition = container.scrollLeft
    const newPage = Math.round(scrollPosition / containerWidth)
    setCurrentPage(newPage)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp()
    }
  }

  const navigatePage = (direction) => {
    const container = activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
    if (!container) return

    const newPage = Math.max(0, Math.min(pagesCount - 1, currentPage + direction))
    setCurrentPage(newPage)

    const containerWidth = container.clientWidth
    container.scrollTo({
      left: newPage * containerWidth,
      behavior: "smooth",
    })
  }

  // Prevent click events during drag
  const handleCardClick = (e) => {
    if (isDragging) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Top Profiles</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover our featured projects and investors making waves on SmartBidder.
        </p>

        <div className="flex justify-center mt-8 mb-12 border-b border-gray-200 dark:border-gray-700">
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "projects"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            } transition-all duration-300`}
            onClick={() => setActiveTab("projects")}
          >
            Top Projects
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === "investors"
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            } transition-all duration-300`}
            onClick={() => setActiveTab("investors")}
          >
            Top Investors
          </button>
        </div>
      </div>

      <div className="relative">
        {activeTab === "projects" ? (
          <div
            ref={projectsContainerRef}
            className="overflow-x-auto hide-scrollbar flex snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex w-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4 snap-start"
                  onClick={handleCardClick}
                >
                  <div
                    className={`h-full bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
                      hoveredCard === `project-${index}` ? "shadow-xl transform -translate-y-2" : "hover:shadow-lg"
                    }`}
                    onMouseEnter={() => !isDragging && setHoveredCard(`project-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full h-48 object-cover transition-transform duration-700 ${
                          hoveredCard === `project-${index}` ? "scale-110" : ""
                        }`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${
                          hoveredCard === `project-${index}` ? "opacity-100" : ""
                        }`}
                      ></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 transition-all duration-300 ${
                            hoveredCard === `project-${index}` ? "bg-blue-200 dark:bg-blue-800" : ""
                          }`}
                        >
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="mb-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Funding Goal: {project.funding}
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                          <div
                            className={`bg-emerald-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: hoveredCard === `project-${index}` ? `${project.progress}%` : "0%",
                              transitionDelay: hoveredCard === `project-${index}` ? "200ms" : "0ms",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            ref={investorsContainerRef}
            className="overflow-x-auto hide-scrollbar flex snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex w-full">
              {investors.map((investor, index) => (
                <div
                  key={investor.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-4 snap-start"
                  onClick={handleCardClick}
                >
                  <div
                    className={`h-full bg-white dark:bg-slate-700 rounded-xl shadow-md overflow-hidden transition-all duration-500 ${
                      hoveredCard === `investor-${index}` ? "shadow-xl transform -translate-y-2" : "hover:shadow-lg"
                    }`}
                    onMouseEnter={() => !isDragging && setHoveredCard(`investor-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="p-6 flex flex-col items-center">
                      <div
                        className={`relative rounded-full overflow-hidden mb-4 transition-all duration-300 ${
                          hoveredCard === `investor-${index}` ? "ring-4 ring-emerald-500 ring-offset-2" : ""
                        }`}
                      >
                        <img
                          src={investor.image || "/placeholder.svg"}
                          alt={investor.name}
                          className={`w-24 h-24 object-cover transition-transform duration-700 ${
                            hoveredCard === `investor-${index}` ? "scale-110" : ""
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-2">
                        {investor.name}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4 text-center">
                        {investor.focus}
                      </p>
                      <div className="flex justify-between w-full">
                        <div
                          className={`text-center transition-all duration-300 ${
                            hoveredCard === `investor-${index}` ? "transform scale-110" : ""
                          }`}
                        >
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{investor.investments}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Investments</p>
                        </div>
                        <div
                          className={`text-center transition-all duration-300 ${
                            hoveredCard === `investor-${index}` ? "transform scale-110" : ""
                          }`}
                          style={{ transitionDelay: "100ms" }}
                        >
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{investor.successRate}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Success Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Swipe indicator overlay - only shows on first load or when needed */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 animate-fade-out">
          <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 animate-swipe-hint"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="font-medium">Swipe to explore</span>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-8">
          <button
            className={`p-2 rounded-full border ${
              currentPage === 0
                ? "border-gray-200 text-gray-300 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:scale-110"
            } mr-2 transition-all duration-300`}
            onClick={() => navigatePage(-1)}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center px-4">
            {[...Array(pagesCount)].map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                  currentPage === i
                    ? "bg-emerald-600 w-4"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => {
                  const container =
                    activeTab === "projects" ? projectsContainerRef.current : investorsContainerRef.current
                  if (!container) return

                  setCurrentPage(i)
                  container.scrollTo({
                    left: i * container.clientWidth,
                    behavior: "smooth",
                  })
                }}
              />
            ))}
          </div>

          <button
            className={`p-2 rounded-full border ${
              currentPage === pagesCount - 1
                ? "border-gray-200 text-gray-300 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 hover:scale-110"
            } transition-all duration-300`}
            onClick={() => navigatePage(1)}
            disabled={currentPage === pagesCount - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopProfiles
