"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Introduction from "./components/Introduction"
import UserRoles from "./components/UserRoles"
import Features from "./components/Features"
import TopProfiles from "./components/TopProfiles"
import DemoPreview from "./components/DemoPreview"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Dashboard from "./pages/Dashboard"

function HomePage({ darkMode }) {
  return (
    <>
      <main className="pt-20">
        <Hero />
        <Introduction />
        <UserRoles />
        <Features />
        <TopProfiles />
        <DemoPreview />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [direction, setDirection] = useState("ltr") // Default to LTR
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleDirection = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr")
  }

  // Mock login/logout functions
  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <div
        className={`min-h-screen ${darkMode ? "dark bg-slate-900 text-white" : "bg-gray-50 text-gray-900"}`}
        dir={direction}
      >
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} isAuthenticated={isAuthenticated} logout={logout} />
        <Routes>
          {/* Guest routes */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <HomePage darkMode={darkMode} />} />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login darkMode={darkMode} direction={direction} onLogin={login} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Register darkMode={darkMode} direction={direction} onRegister={login} />
              )
            }
          />
          <Route
            path="/forgot-password"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <ForgotPassword darkMode={darkMode} direction={direction} />
              )
            }
          />

          {/* Authenticated routes */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard darkMode={darkMode} direction={direction} /> : <Navigate to="/login" />
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
