"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

const Login = ({ darkMode, direction, onLogin }) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const response = await fetch("http://127.0.0.1:8000/accounts/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })

    const data = await response.json()

    if (response.ok) {
      // حفظ التوكنات في localStorage (أو context إذا تحب)
      localStorage.setItem("accessToken", data.access)
      localStorage.setItem("refreshToken", data.refresh)

      // تابع تسجيل الدخول إن وجد
      if (onLogin) onLogin()

      // التوجيه بعد النجاح
      navigate("/dashboard")
    } else {
      alert(data.detail || "Login failed: Check username or password.")
    }
  } catch (error) {
    console.error("Login error:", error)
    alert("An error occurred during login. Please try again.")
  } finally {
    setIsLoading(false)
  }
}


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block">
            <h2 className="text-3xl font-bold">
              <span className="text-emerald-600">Smart</span>
              <span className={darkMode ? "text-blue-400" : "text-blue-900"}>Bidder</span>
            </h2>
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Where Ideas Meet Investors</p>
        </div>

        <div
          className={`mt-8 bg-white dark:bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 ${
            direction === "rtl" ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            {direction === "rtl" ? "تسجيل الدخول" : "Login to Your Account"}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {direction === "rtl" ? "اسم المستخدم" : "Username"}
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder={direction === "rtl" ? "أدخل اسم المستخدم" : "Enter your username"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {direction === "rtl" ? "كلمة المرور" : "Password"}
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  placeholder={direction === "rtl" ? "أدخل كلمة المرور" : "Enter your password"}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-emerald-600 hover:text-emerald-500">
                  {direction === "rtl" ? "نسيت كلمة المرور؟" : "Forgot your password?"}
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-400 disabled:cursor-not-allowed"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {isLoading ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <ArrowRight
                      className={`h-5 w-5 text-emerald-500 group-hover:text-emerald-400 ${
                        direction === "rtl" ? "transform rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </span>
                {direction === "rtl" ? "تسجيل الدخول" : isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400">
                  {direction === "rtl" ? "أو" : "Or"}
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {direction === "rtl" ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
                <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500">
                  {direction === "rtl" ? "سجل الآن" : "Register now"}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
