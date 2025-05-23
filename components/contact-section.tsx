import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Github } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "puchkov_nik_01@mail.ru",
      href: "mailto:puchkov_nik_01@mail.ru",
    },
    { icon: <Phone className="h-5 w-5" />, label: "Телефон", value: "8 925 807 92 06", href: "tel:+79258079206" },
    { icon: <MapPin className="h-5 w-5" />, label: "Город", value: "Москва", href: null },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/PuchNik",
      href: "https://github.com/PuchNik",
    },
    { icon: <Globe className="h-5 w-5" />, label: "Telegram", value: "@Puchkov_7", href: "https://t.me/Puchkov_7" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="glass-effect hover:shadow-md transition-all duration-300">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Контактные данные</h3>
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className="mr-3 mt-0.5 text-primary group-hover:text-primary/80 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect hover:shadow-md transition-all duration-300">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Социальные сети</h3>
          <div className="space-y-4">
            {socialLinks.map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className="mr-3 mt-0.5 text-primary group-hover:text-primary/80 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
