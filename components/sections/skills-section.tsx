"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  description: string
  tags: string[]
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
  darkMode: boolean
}

export default function SkillsSection({ skillCategories, darkMode }: SkillsSectionProps) {
  const [expandedSkills, setExpandedSkills] = useState<Record<string, boolean>>({})
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({})

  const toggleSkill = (categoryIndex: number, skillIndex: number) => {
    const key = `${categoryIndex}-${skillIndex}`
    setExpandedSkills((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const toggleCategory = (categoryIndex: number) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }))
  }

  return (
    <div className="space-y-8">
      {skillCategories.map((category, categoryIndex) => {
        const isCategoryExpanded = expandedCategories[categoryIndex] !== false // По умолчанию открыто

        return (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="space-y-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer group"
              onClick={() => toggleCategory(categoryIndex)}
            >
              <h3
                className={cn(
                  "text-xl font-bold group-hover:text-blue-500 transition-colors flex items-center",
                  darkMode ? "text-gray-100" : "text-gray-800",
                )}
              >
                <span className={cn("w-6 h-0.5 mr-3", darkMode ? "bg-blue-500" : "bg-blue-500")}></span>
                {category.category}
              </h3>
              <button
                className={cn(
                  "p-2 rounded-full transition-colors",
                  darkMode ? "text-blue-400 hover:bg-gray-800" : "text-blue-600 hover:bg-blue-50",
                )}
                aria-label={isCategoryExpanded ? "Свернуть категорию" : "Развернуть категорию"}
              >
                {isCategoryExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </div>

            <div
              className={cn(
                "grid transition-all duration-500 overflow-hidden",
                isCategoryExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const isExpanded = expandedSkills[`${categoryIndex}-${skillIndex}`]
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * skillIndex }}
                      >
                        <Card
                          className={cn(
                            "transition-all duration-300 border-none",
                            darkMode
                              ? "bg-gray-800/50 hover:bg-gray-800/80"
                              : "bg-white/80 hover:bg-white/90 backdrop-blur-sm",
                            isExpanded ? "shadow-md" : "shadow-sm hover:shadow-md",
                          )}
                        >
                          <CardContent className="p-4 sm:p-5">
                            <div
                              className="flex justify-between items-center mb-3 cursor-pointer"
                              onClick={() => toggleSkill(categoryIndex, skillIndex)}
                              role="button"
                              tabIndex={0}
                              aria-expanded={isExpanded}
                              aria-controls={`skill-content-${categoryIndex}-${skillIndex}`}
                            >
                              <h4
                                className={cn(
                                  "text-base sm:text-lg font-semibold transition-colors",
                                  darkMode ? "text-gray-200" : "text-gray-800",
                                )}
                              >
                                {skill.name}
                              </h4>
                              <button
                                className={cn(
                                  "p-1.5 rounded-full transition-colors",
                                  darkMode ? "text-blue-400 hover:bg-gray-700" : "text-blue-600 hover:bg-blue-50",
                                )}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleSkill(categoryIndex, skillIndex)
                                }}
                                aria-label={isExpanded ? "Свернуть" : "Развернуть"}
                              >
                                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </button>
                            </div>

                            <div
                              className={cn(
                                "relative w-full h-2 rounded-full overflow-hidden mb-3",
                                darkMode ? "bg-gray-700" : "bg-gray-200",
                              )}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className={cn(
                                  "absolute top-0 left-0 h-full rounded-full",
                                  darkMode
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                                    : "bg-gradient-to-r from-blue-500 to-purple-500",
                                )}
                              ></motion.div>
                            </div>

                            <div
                              id={`skill-content-${categoryIndex}-${skillIndex}`}
                              className={cn(
                                "grid transition-all duration-300 overflow-hidden",
                                isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                              )}
                            >
                              <div className="overflow-hidden">
                                <p
                                  className={cn(
                                    "mb-3 leading-relaxed text-sm",
                                    darkMode ? "text-gray-300" : "text-gray-700",
                                  )}
                                >
                                  {skill.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {skill.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="secondary"
                                      className={cn(
                                        "text-xs",
                                        darkMode
                                          ? "bg-gray-700 text-blue-300 hover:bg-gray-600"
                                          : "bg-blue-50 text-blue-700 hover:bg-blue-100",
                                      )}
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
