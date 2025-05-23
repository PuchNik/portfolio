"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AboutMeSectionProps {
  darkMode: boolean
}

export default function AboutMeSection({ darkMode }: AboutMeSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 sm:mb-14"
    >
      <div className="flex items-center mb-6">
        <div
          className={cn(
            "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4",
            darkMode ? "bg-gray-800 text-blue-400" : "bg-blue-100 text-blue-600",
          )}
        >
          <User className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">Обо мне</h2>
      </div>

      <Card
        className={cn(
          "overflow-hidden border-none backdrop-blur-sm hover:shadow-lg transition-all duration-300",
          darkMode ? "bg-gray-800/50 shadow-lg" : "bg-white/80 shadow-md",
        )}
      >
        <CardContent className="p-5 sm:p-6 md:p-8">
          <p className={cn("leading-relaxed text-base sm:text-lg", darkMode ? "text-gray-300" : "text-gray-700")}>
            Стремлюсь к профессиональному развитию и изучению новых знаний. Открыт для обсуждения интересных идей и
            готов работать в динамичной команде, чтобы совместно достигать высоких результатов и продвигаться по
            карьерной лестнице.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  )
}
