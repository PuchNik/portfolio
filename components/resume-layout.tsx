"use client"

import { useState, useEffect } from "react"
import { Menu, Sun, Moon, Briefcase, GraduationCap, Wrench } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import AboutMeSection from "@/components/sections/about-me-section"
import ExperienceSection from "@/components/sections/experience-section"
import EducationSection from "@/components/sections/education-section"
import SkillsSection from "@/components/sections/skills-section"
import PortfolioSidebar from "@/components/sidebar/portfolio-sidebar"

// Import data
import { experiences, education, skillCategories } from "@/data/portfolio-data"

export default function ResumeLayout() {
  const [activeTab, setActiveTab] = useState("experience")
  const [scrolled, setScrolled] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Close sidebar when clicking outside on mobile
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (sidebarOpen && !target.closest(".sidebar") && !target.closest(".sidebar-toggle")) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    // Check user's preferred color scheme
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [sidebarOpen])

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Data for sidebar
  const languages = [{ name: "Русский", level: "Родной", percent: 100 }]

  const generalInfo = [
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Занятость",
      description: "Полная, полный рабочий день",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Передислокация",
      description: "Не готов к переезду",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Командировки",
      description: "Готов к редким командировкам",
    },
  ]

  const personalInfo = [
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Гражданство",
      description: "Российская федерация",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Год рождения",
      description: "2001 (23 года)",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      title: "Образование",
      description: "Высшее",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Семейное положение",
      description: "Холост",
    },
  ]

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800",
      )}
    >
      {/* Background patterns */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full",
            darkMode
              ? "bg-[radial-gradient(circle_at_10%_20%,rgba(80,80,180,0.1)_0%,rgba(0,0,0,0)_80%)]"
              : "bg-[radial-gradient(circle_at_10%_20%,rgba(120,120,255,0.1)_0%,rgba(0,0,0,0)_80%)]",
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-0 right-0 w-full h-full",
            darkMode
              ? "bg-[radial-gradient(circle_at_90%_90%,rgba(80,80,180,0.1)_0%,rgba(0,0,0,0)_80%)]"
              : "bg-[radial-gradient(circle_at_90%_90%,rgba(120,120,255,0.1)_0%,rgba(0,0,0,0)_80%)]",
          )}
        ></div>
      </div>

      {/* Desktop Theme Toggle - Fixed in top-right corner */}
      <div className="fixed top-4 right-4 z-50 hidden lg:block">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "h-10 w-10 rounded-full transition-all duration-300 shadow-md",
            darkMode
              ? "bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700 hover:shadow-lg"
              : "bg-white/80 border-gray-200 text-gray-700 hover:bg-gray-50 hover:shadow-lg",
          )}
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Включить светлую тему" : "Включить темную тему"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 transition-transform hover:scale-110" />
          ) : (
            <Moon className="h-5 w-5 transition-transform hover:scale-110" />
          )}
        </Button>
      </div>

      {/* Mobile Header */}
      <header
        className={cn(
          "lg:hidden sticky top-0 z-50 w-full py-3 px-4 flex items-center justify-between transition-all duration-300",
          scrolled
            ? darkMode
              ? "bg-gray-900/90 backdrop-blur-md shadow-md"
              : "bg-white/90 backdrop-blur-md shadow-md"
            : "bg-transparent",
        )}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className={cn(
              "sidebar-toggle p-2 rounded-full transition-colors",
              darkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-200",
            )}
            aria-label="Открыть меню"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1
            className={cn(
              "text-xl font-bold bg-clip-text text-transparent",
              darkMode ? "bg-gradient-to-r from-blue-400 to-purple-400" : "bg-gradient-to-r from-primary to-primary/70",
            )}
          >
            Пучков Никита
          </h1>
        </div>
        <div className="flex items-center">
          <Button
            size="icon"
            variant="outline"
            className={cn(
              "h-9 w-9 rounded-full transition-all duration-300",
              darkMode
                ? "bg-gray-800/80 border-gray-700 text-gray-300 hover:bg-gray-700"
                : "bg-white/80 border-gray-200 text-gray-700 hover:bg-gray-50",
            )}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Включить светлую тему" : "Включить темную тему"}
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      <div className="relative z-10 flex flex-col lg:flex-row max-w-screen-2xl mx-auto">
        {/* Sidebar */}
        <PortfolioSidebar
          darkMode={darkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          generalInfo={generalInfo}
          personalInfo={personalInfo}
          languages={languages}
        />

        {/* Main Content */}
        <main className={cn("w-full lg:w-2/3 p-4 sm:p-6 lg:p-10", darkMode ? "text-gray-100" : "text-gray-800")}>
          {/* About Me Section */}
          <AboutMeSection darkMode={darkMode} />

          {/* Tabs for Experience, Education, Skills */}
          <Tabs
            defaultValue="experience"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-10 relative z-10"
          >
            <TabsList
              className={cn(
                "grid grid-cols-3 mb-8 sm:mb-10 p-1 rounded-full shadow-sm",
                darkMode ? "bg-gray-800/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm",
              )}
            >
              <TabsTrigger
                value="experience"
                className={cn(
                  "rounded-full py-2.5 sm:py-3 transition-all duration-300",
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                )}
              >
                <Briefcase className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Опыт работы</span>
                <span className="sm:hidden">Опыт</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className={cn(
                  "rounded-full py-2.5 sm:py-3 transition-all duration-300",
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                )}
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Образование</span>
                <span className="sm:hidden">Учеба</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className={cn(
                  "rounded-full py-2.5 sm:py-3 transition-all duration-300",
                  darkMode
                    ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    : "data-[state=active]:bg-blue-600 data-[state=active]:text-white",
                )}
              >
                <Wrench className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Навыки</span>
                <span className="sm:hidden">Навыки</span>
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <ExperienceSection experiences={experiences} darkMode={darkMode} />
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6">
              <EducationSection education={education} darkMode={darkMode} />
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-8">
              <SkillsSection skillCategories={skillCategories} darkMode={darkMode} />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
