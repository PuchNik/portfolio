"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Github, MapPin, User, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarInfo {
  icon: React.ReactNode
  title: string
  description: string
}

interface Language {
  name: string
  level: string
  percent: number
}

interface PortfolioSidebarProps {
  darkMode: boolean
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  generalInfo?: SidebarInfo[]
  personalInfo?: SidebarInfo[]
  languages?: Language[]
}

export default function PortfolioSidebar({
  darkMode,
  sidebarOpen,
  setSidebarOpen,
  generalInfo = [],
  personalInfo = [],
  languages = [],
}: PortfolioSidebarProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Left Sidebar */}
      <aside
        className={cn(
          "sidebar fixed lg:relative inset-y-0 left-0 z-50 w-[85%] sm:w-[350px] lg:w-1/3 transition-all duration-300 overflow-hidden",
          darkMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-b from-gray-900 to-gray-800 text-white",
          "lg:h-screen lg:sticky top-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 text-gray-300 hover:bg-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Закрыть меню"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <div className="flex flex-col items-center p-6 sm:p-8 lg:p-10">
            {/* Profile Image with Gradient Border */}
            <div className="relative mb-6 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800">
                {!imageError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Пучков Никита"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <User className="h-16 w-16 text-gray-700" />
                  </div>
                )}
              </div>
            </div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mb-6"
            >
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Пучков Никита
              </h1>
              <p className="text-blue-300 mt-1 font-medium">Frontend Developer</p>
            </motion.div>

            {/* Sidebar spacing element */}
            <div className="hidden lg:block w-full mb-6"></div>

            <div className="w-full border-t border-gray-700/50 my-4"></div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full space-y-3 mb-6"
            >
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-blue-300 group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href="mailto:puchkov_nik_01@mail.ru"
                  className="text-gray-300 hover:text-white transition-colors group-hover:text-blue-200"
                >
                  puchkov_nik_01@mail.ru
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-blue-300 group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <a
                  href="tel:+79258079206"
                  className="text-gray-300 hover:text-white transition-colors group-hover:text-blue-200"
                >
                  8 925 807 92 06
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-blue-300 group-hover:bg-blue-900/30 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </div>
                <a
                  href="https://github.com/PuchNik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors group-hover:text-blue-200"
                >
                  github.com/PuchNik
                </a>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-blue-300 group-hover:bg-blue-900/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-300 group-hover:text-blue-200 transition-colors">Москва</span>
              </div>
            </motion.div>

            {/* General Information */}
            {generalInfo.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full mb-6"
              >
                <h2 className="text-lg font-semibold mb-3 text-white/90 border-b border-gray-700/50 pb-2">
                  Общая информация
                </h2>
                <div className="space-y-3">
                  {generalInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 text-blue-300 group-hover:text-blue-200 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-300 font-medium">{info.title}</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Personal Information */}
            {personalInfo.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full mb-6"
              >
                <h2 className="text-lg font-semibold mb-3 text-white/90 border-b border-gray-700/50 pb-2">
                  Личная информация
                </h2>
                <div className="space-y-3">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 text-blue-300 group-hover:text-blue-200 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-300 font-medium">{info.title}</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full"
              >
                <h2 className="text-lg font-semibold mb-3 text-white/90 border-b border-gray-700/50 pb-2">Языки</h2>
                <div className="space-y-3">
                  {languages.map((language, index) => (
                    <div key={index} className="space-y-2 group">
                      <div className="flex justify-between">
                        <span className="text-gray-300 group-hover:text-white transition-colors">{language.name}</span>
                        <span className="text-blue-300 group-hover:text-blue-200 transition-colors">
                          {language.level}
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${language.percent}%` }}
                          transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
