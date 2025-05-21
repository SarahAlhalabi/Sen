"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Sun, Moon, Globe, Menu, X, LogOut, User } from "lucide-react"

const Navbar = ({ darkMode, toggleDarkMode, isAuthenticated, logout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en")
  }

  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password"

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? `${darkMode ? "bg-slate-800/95 backdrop-blur-sm" : "bg-white/95 backdrop-blur-sm"} shadow-md`
          : `${darkMode ? "bg-slate-800" : "bg-white"}`
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-emerald-600">Smart</span>
              <span className={darkMode ? "text-blue-400" : "text-blue-900"}>Bidder</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {!isAuthPage && !isAuthenticated && (
              <div className="flex items-center">
                {["Home", "About", "Features", "Projects", "Investors"].map((item, index) => (
                  <Link
                    key={index}
                    to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                    className="px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                  >
                    <span
                      className={`relative z-10 ${
                        darkMode ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-emerald-600"
                      }`}
                    >
                      {item}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
              </div>
            )}

            {isAuthenticated && (
              <div className="flex items-center">
                <Link
                  to="/dashboard"
                  className="px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  <span
                    className={`relative z-10 ${
                      darkMode ? "text-gray-300 group-hover:text-white" : "text-gray-700 group-hover:text-emerald-600"
                    }`}
                  >
                    Dashboard
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
            )}

            <div className="flex items-center pl-6 ml-6 border-l border-gray-200 dark:border-gray-700">
             

              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 ml-2 transition-colors duration-200"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {!isAuthPage && !isAuthenticated && (
                <div className="pl-4 ml-4 border-l border-gray-200 dark:border-gray-700 flex items-center">
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200"
                  >
                    Register
                  </Link>
                </div>
              )}

              {isAuthenticated && (
                <div className="pl-4 ml-4 border-l border-gray-200 dark:border-gray-700 flex items-center">
                  <div className="flex items-center mr-4">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <User className="h-4 w-4" />
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">User</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full">
          <div
            className={`px-4 pt-2 pb-4 space-y-1 shadow-lg ${
              darkMode ? "bg-slate-800 border-t border-slate-700" : "bg-white border-t border-gray-200"
            }`}
          >
            {!isAuthPage &&
              !isAuthenticated &&
              ["Home", "About", "Features", "Projects", "Investors"].map((item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                    darkMode
                      ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                  } transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}

            {isAuthenticated && (
              <Link
                to="/dashboard"
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  darkMode
                    ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                } transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            )}

            <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleLanguage}
                className={`flex items-center w-full px-3 py-2.5 rounded-md text-base font-medium ${
                  darkMode
                    ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                } transition-colors duration-200`}
              >
                <Globe className="h-5 w-5 mr-3" />
                <span>{language === "en" ? "English" : "العربية"}</span>
              </button>

              <button
                onClick={toggleDarkMode}
                className={`flex items-center w-full px-3 py-2.5 rounded-md text-base font-medium ${
                  darkMode
                    ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                } transition-colors duration-200`}
              >
                {darkMode ? <Sun className="h-5 w-5 mr-3" /> : <Moon className="h-5 w-5 mr-3" />}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>

            {!isAuthPage && !isAuthenticated && (
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className={`px-3 py-2.5 rounded-md text-base font-medium border ${
                    darkMode
                      ? "border-gray-700 text-gray-300 hover:bg-slate-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  } transition-colors duration-200 text-center`}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-3 py-2.5 rounded-md text-base font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}

            {isAuthenticated && (
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className={`flex items-center w-full px-3 py-2.5 rounded-md text-base font-medium ${
                    darkMode
                      ? "text-gray-300 hover:bg-slate-700 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                  } transition-colors duration-200`}
                >
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
