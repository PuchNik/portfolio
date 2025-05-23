export interface WorkExperience {
  company: string
  position: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export function parseDateFromPeriod(period: string): Date {
  // Extract the end date from period strings like "01.09.2024 - 31.12.2024" or "2023"
  const parts = period.split(" - ")
  const endDateStr = parts.length > 1 ? parts[1] : parts[0]

  // Handle different date formats
  if (endDateStr.includes("(обучаюсь)") || endDateStr.includes("настоящее время")) {
    return new Date() // Current date for ongoing positions
  }

  // Handle year only format like "2023"
  if (/^\d{4}$/.test(endDateStr.trim())) {
    return new Date(Number.parseInt(endDateStr.trim()), 11, 31) // December 31st of that year
  }

  // Handle DD.MM.YYYY format
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(endDateStr.trim())) {
    const [day, month, year] = endDateStr.trim().split(".").map(Number)
    return new Date(year, month - 1, day)
  }

  // Handle YYYY - YYYY format
  const yearMatch = endDateStr.match(/(\d{4})/)
  if (yearMatch) {
    return new Date(Number.parseInt(yearMatch[1]), 11, 31)
  }

  // Fallback to current date
  return new Date()
}

export function sortExperienceByDate(experiences: WorkExperience[]): WorkExperience[] {
  return [...experiences].sort((a, b) => {
    const dateA = parseDateFromPeriod(a.period)
    const dateB = parseDateFromPeriod(b.period)
    return dateB.getTime() - dateA.getTime() // Descending order (most recent first)
  })
}
