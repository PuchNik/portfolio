"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Education {
  type: string
  degree: string
  institution: string
  period: string
  location: string
  description: string
  achievements: string[]
}

interface EducationSectionProps {
  education: Education[]
  darkMode: boolean
}

export default function EducationSection({ education, darkMode }: EducationSectionProps) {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={cn(
              "overflow-hidden border-none hover:shadow-lg transition-all duration-300 group",
              darkMode ? "bg-gray-800/50 shadow-md" : "bg-white/80 shadow-sm backdrop-blur-sm",
            )}
          >
            <CardContent className="p-0">
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 sm:mb-6">
                  <div>
                    <div
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-medium mb-2",
                        darkMode ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-700",
                      )}
                    >
                      {edu.type}
                    </div>
                    <h3
                      className={cn(
                        "text-lg sm:text-xl font-bold group-hover:text-blue-500 transition-colors",
                        darkMode ? "text-gray-100" : "text-gray-800",
                      )}
                    >
                      {edu.degree}
                    </h3>
                    <p className={cn("font-medium mt-1", darkMode ? "text-blue-400" : "text-blue-600")}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0 flex flex-col sm:items-end">
                    <div className={cn("flex items-center text-sm", darkMode ? "text-gray-400" : "text-gray-600")}>
                      <Calendar className={cn("h-4 w-4 mr-1", darkMode ? "text-blue-400" : "text-blue-400")} />
                      {edu.period}
                    </div>
                    <div className={cn("flex items-center text-sm mt-1", darkMode ? "text-gray-400" : "text-gray-600")}>
                      <MapPin className={cn("h-4 w-4 mr-1", darkMode ? "text-blue-400" : "text-blue-400")} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p
                  className={cn(
                    "mb-5 leading-relaxed text-sm sm:text-base",
                    darkMode ? "text-gray-300" : "text-gray-700",
                  )}
                >
                  {edu.description}
                </p>

                <div>
                  <h4
                    className={cn(
                      "font-semibold mb-3 flex items-center text-sm sm:text-base",
                      darkMode ? "text-gray-200" : "text-gray-800",
                    )}
                  >
                    <span className={cn("w-5 h-0.5 mr-2", darkMode ? "bg-blue-500" : "bg-blue-500")}></span>
                    Дополнительная информация
                  </h4>
                  <ul className={cn("space-y-2", darkMode ? "text-gray-300" : "text-gray-700")}>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm sm:text-base">
                        <ArrowRight
                          className={cn(
                            "h-4 w-4 mt-1 mr-2 flex-shrink-0",
                            darkMode ? "text-blue-500" : "text-blue-500",
                          )}
                        />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
