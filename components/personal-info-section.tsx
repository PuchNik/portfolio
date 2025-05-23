import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Flag, GraduationCap, Heart } from "lucide-react"

export default function PersonalInfoSection() {
  const personalInfo = [
    {
      icon: <Flag className="h-5 w-5 text-primary" />,
      title: "Гражданство",
      description: "Российская федерация",
    },
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      title: "Год рождения",
      description: "2001 (23 года)",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      title: "Образование",
      description: "Высшее",
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "Семейное положение",
      description: "Холост",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {personalInfo.map((info, index) => (
        <Card key={index} className="glass-effect hover:shadow-md transition-all duration-300 group">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
              <h4 className="font-medium text-primary/90">{info.title}</h4>
            </div>
            <p className="text-sm text-muted-foreground">{info.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
