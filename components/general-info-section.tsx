import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Plane } from "lucide-react"

export default function GeneralInfoSection() {
  const generalInfo = [
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Занятость",
      description: "Полная, полный рабочий день",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Передислокация",
      description: "Не готов к переезду",
    },
    {
      icon: <Plane className="h-5 w-5 text-primary" />,
      title: "Командировки",
      description: "Готов к редким командировкам",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {generalInfo.map((info, index) => (
        <Card key={index} className="glass-effect hover:shadow-md transition-all duration-300 group">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
              <h3 className="text-xl font-semibold text-primary/90">{info.title}</h3>
            </div>
            <p className="text-muted-foreground">{info.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
