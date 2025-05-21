"use client"

import { useState } from "react"
import { Home, User, Settings, Bell, Search, Briefcase, TrendingUp, PieChart, Users } from "lucide-react"

const Dashboard = ({ darkMode, direction }) => {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for dashboard
  const stats = [
    {
      name: "Total Projects",
      value: "12",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
    },
    {
      name: "Active Investments",
      value: "8",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400",
    },
    {
      name: "Total Returns",
      value: "$24,500",
      icon: <PieChart className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400",
    },
    {
      name: "Network Connections",
      value: "36",
      icon: <Users className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "overview"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                } transition-colors`}
              >
                <Home className="h-5 w-5 mr-3" />
                <span>{direction === "rtl" ? "نظرة عامة" : "Overview"}</span>
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "profile"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                } transition-colors`}
              >
                <User className="h-5 w-5 mr-3" />
                <span>{direction === "rtl" ? "الملف الشخصي" : "Profile"}</span>
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "notifications"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                } transition-colors`}
              >
                <Bell className="h-5 w-5 mr-3" />
                <span>{direction === "rtl" ? "الإشعارات" : "Notifications"}</span>
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "settings"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                } transition-colors`}
              >
                <Settings className="h-5 w-5 mr-3" />
                <span>{direction === "rtl" ? "الإعدادات" : "Settings"}</span>
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {direction === "rtl" ? "مرحبًا، المستخدم!" : "Welcome, User!"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {direction === "rtl"
                      ? "هذه هي لوحة التحكم الخاصة بك. يمكنك إدارة مشاريعك واستثماراتك من هنا."
                      : "This is your dashboard. You can manage your projects and investments from here."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-full ${stat.color}`}>{stat.icon}</div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.name}</p>
                          <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {direction === "rtl" ? "المشاريع النشطة" : "Active Projects"}
                    </h3>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder={direction === "rtl" ? "بحث..." : "Search..."}
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-slate-700">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {direction === "rtl" ? "المشروع" : "Project"}
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {direction === "rtl" ? "الحالة" : "Status"}
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {direction === "rtl" ? "التمويل" : "Funding"}
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            {direction === "rtl" ? "التقدم" : "Progress"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {[
                          { name: "EcoTech Solutions", status: "Active", funding: "$2.5M", progress: 75 },
                          { name: "MediSync", status: "Active", funding: "$1.8M", progress: 60 },
                          { name: "UrbanFarm", status: "Active", funding: "$3.2M", progress: 85 },
                        ].map((project, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                {project.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                              {project.funding}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                                <div
                                  className="bg-emerald-600 h-2.5 rounded-full"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.progress}%</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {direction === "rtl" ? "الملف الشخصي" : "Profile"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {direction === "rtl"
                    ? "هنا يمكنك عرض وتحديث معلومات ملفك الشخصي."
                    : "Here you can view and update your profile information."}
                </p>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {direction === "rtl" ? "الإشعارات" : "Notifications"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {direction === "rtl"
                    ? "هنا يمكنك عرض وإدارة إشعاراتك."
                    : "Here you can view and manage your notifications."}
                </p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {direction === "rtl" ? "الإعدادات" : "Settings"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {direction === "rtl"
                    ? "هنا يمكنك تخصيص إعدادات حسابك."
                    : "Here you can customize your account settings."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
