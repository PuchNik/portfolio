import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      type: "Магистратура",
      degree: "Информационные системы и технологии (Технологии обработки больших данных)",
      institution: "МИРЭА – Российский технологический университет",
      period: "2023 - 2025 (обучаюсь)",
      location: "Москва",
      description:
        "Институт Кибербезопасности и цифровых технологий, Кафедра Цифровые технологии обработки данных. Форма обучения: очная.",
      achievements: [
        "Военный билет/звание: имеется/офицер запаса",
        "Степень: магистр",
        "Институт: Кибербезопасности и цифровых технологий",
        "Кафедра: Цифровые технологии обработки данных",
      ],
    },
    {
      type: "Бакалавриат",
      degree: "Информационные системы и технологии (Технологии искуственного интеллекта в безопасности)",
      institution: "МИРЭА – Российский технологический университет",
      period: "2019 - 2023",
      location: "Москва",
      description:
        "Институт Кибербезопасности и цифровых технологий, Кафедра Цифровые технологии обработки данных. Форма обучения: очная.",
      achievements: [
        "Степень: бакалавр",
        "Институт: Кибербезопасности и цифровых технологий",
        "Кафедра: Цифровые технологии обработки данных",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-2xl font-semibold text-primary/90">{edu.type}</h3>
          <Card className="glass-effect hover:shadow-md transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium">{edu.degree}</h4>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary/80" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-primary/80" />
                      {edu.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>

                  <div>
                    <h5 className="font-medium mb-2 text-primary/90">Дополнительная информация:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}
