"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  level: number
  description: string
  tags: string[]
}

export default function SkillsSection() {
  // Существующий код с skillCategories...
  const skillCategories = [
    {
      category: "Веб-разработка",
      skills: [
        {
          name: "HTML5 и CSS3",
          level: 90,
          description:
            "Структура HTML-документов, семантические теги, Flexbox, Grid. Создание адаптивных и отзывчивых интерфейсов.",
          tags: ["HTML5", "CSS3", "Flexbox", "Grid", "Адаптивный дизайн"],
        },
        {
          name: "JavaScript",
          level: 85,
          description:
            "Переменные, функции, массивы, объекты, циклы, асинхронный код, промисы, async/await. Работа с DOM, манипуляции элементами страницы, обработка событий, работа с формами.",
          tags: ["ES6+", "Async/Await", "Промисы", "DOM"],
        },
        {
          name: "CSS препроцессоры",
          level: 80,
          description:
            "Опыт работы с Sass для улучшения организации и поддержки CSS-кода. Использование переменных, миксинов и вложенных селекторов.",
          tags: ["Sass", "SCSS", "Препроцессоры"],
        },
        {
          name: "Адаптивный дизайн",
          level: 85,
          description:
            "Базовые знания адаптивного дизайна и мобильной верстки. Создание интерфейсов, которые корректно отображаются на различных устройствах и размерах экранов.",
          tags: ["Медиа-запросы", "Мобильная верстка", "Responsive Design"],
        },
      ],
    },
    {
      category: "Фреймворки и библиотеки",
      skills: [
        {
          name: "React",
          level: 85,
          description:
            "Знание принципов работы с компонентами, состоянием и пропсами в React. Опыт работы с жизненным циклом компонентов и маршрутизаторами.",
          tags: ["React", "Компоненты", "Хуки", "Маршрутизация"],
        },
        {
          name: "Next.js",
          level: 80,
          description:
            "Опыт разработки с использованием фреймворка Next.js. Работа с серверным рендерингом (SSR), статической генерацией (SSG), инкрементальной статической регенерацией (ISR). Понимание маршрутизации на основе файловой системы, API-маршрутов и серверных компонентов.",
          tags: ["Next.js", "SSR", "SSG", "ISR", "App Router", "Server Components", "API Routes"],
        },
        {
          name: "Redux и Zustand",
          level: 80,
          description:
            "Опыт работы с React Context и Redux (Redux toolkit) для управления состоянием приложения. Понимание принципов работы с хранилищем, редьюсерами и действиями. Изучение основ Zustand для более простого управления состоянием.",
          tags: ["Redux", "Redux Toolkit", "Context API", "Zustand", "Управление состоянием"],
        },
        {
          name: "UI-библиотеки",
          level: 75,
          description:
            "Основы работы с UI-библиотеками (AntDesignI, Stylesd Components и CSS Modules). Опыт работы с UI-китами для разработки красивых и отзывчивых интерфейсов.",
          tags: ["AntDesignI", "Stylesd Components", "CSS Modules", "UI-киты"],
        },
        {
          name: "TypeScript",
          level: 70,
          description:
            "Основы TypeScript для типизации и статической проверки типов. Использование интерфейсов, типов и дженериков для повышения надежности кода.",
          tags: ["TypeScript", "Типизация", "Interfaces", "Classes", "Generics", "Utilities", "Decorators"],
        },
      ],
    },
    {
      category: "Инструменты и рабочий процесс",
      skills: [
        {
          name: "Git и GitHub",
          level: 85,
          description:
            "Основы работы с системами контроля версий (Git, GitHub). Создание репозиториев, ветвление, слияние, разрешение конфликтов.",
          tags: ["Git", "GitHub", "Контроль версий"],
        },
        {
          name: "REST API",
          level: 80,
          description:
            "Основы работы с REST API (Fetch API, Axios). Выполнение HTTP-запросов, обработка ответов, работа с JSON-данными. Опыт использования Axios для более удобной работы с запросами, включая настройку перехватчиков и обработку ошибок.",
          tags: ["REST API", "Fetch API", "Axios", "HTTP", "JSON", "Interceptors"],
        },
        {
          name: "Инструменты сборки",
          level: 75,
          description:
            "Основы работы с инструментами сборки (Webpack, Babel, Rollup, Vite). Настройка окружения для разработки и сборки проектов.",
          tags: ["Webpack", "Babel", "Rollup", "Vite"],
        },
        {
          name: "UX/UI дизайн",
          level: 70,
          description:
            "Понимание основ UX/UI дизайна. Работа с Figma, Adobe XD, Photoshop. Базовые знания принципов UX/UI и создания удобных интерфейсов для пользователей.",
          tags: ["Figma", "Adobe XD", "Photoshop", "UX/UI"],
        },
        {
          name: "Редакторы кода",
          level: 90,
          description:
            "Опыт работы с современными редакторами кода (Visual Studio Code, WebStorm). Использование расширений и настройка рабочего окружения для повышения продуктивности.",
          tags: ["Visual Studio Code", "WebStorm", "IDE"],
        },
      ],
    },
    {
      category: "Сетевые технологии",
      skills: [
        {
          name: "Сетевое оборудование",
          level: 85,
          description:
            "Опыт работы с различным сетевым оборудованием для построения и настройки локальных сетей. Настройка маршрутизации и обеспечение сетевой связности.",
          tags: ["Cisco", "MikroTik", "TP-Link", "Маршрутизация", "Локальные сети"],
        },
        {
          name: "Сетевая диагностика и мониторинг",
          level: 80,
          description:
            "Использование специализированных инструментов для анализа сетевого трафика, выявления проблем и оценки производительности сети.",
          tags: ["WireShark", "Nmap", "MTR", "Анализ трафика", "Диагностика сети"],
        },
        {
          name: "IP-телефония",
          level: 75,
          description:
            "Настройка и тестирование систем IP-телефонии, включая конфигурацию линий связи и шлюзов для передачи голосовых данных через IP-сети.",
          tags: ["SIP-линии", "VoIP-шлюзы", "Конфигурация телефонии", "Голосовая связь"],
        },
      ],
    },
    {
      category: "Информационная безопасность",
      skills: [
        {
          name: "Антивирусные системы",
          level: 85,
          description:
            "Установка, настройка и сопровождение антивирусных решений для защиты корпоративной сети и рабочих станций от вредоносного ПО и кибер-угроз.",
          tags: ["Kaspersky Endpoint Security", "Dr.Web", "Active Directory", "Политики безопасности"],
        },
        {
          name: "Видеонаблюдение",
          level: 80,
          description:
            "Проектирование и внедрение систем видеонаблюдения для обеспечения безопасности помещений с ограниченным доступом и повышенными требованиями к безопасности.",
          tags: ["Видеокамеры", "Видеорегистраторы", "Системы видеонаблюдения", "Безопасность помещений"],
        },
        {
          name: "Мониторинг действий пользователей",
          level: 85,
          description:
            "Настройка и сопровождение систем мониторинга действий пользователей, обеспечение контроля за соблюдением политик информационной безопасности и выявление потенциальных инцидентов.",
          tags: ["StaffCop Enterprise", "Active Directory", "Мониторинг пользователей", "Политики безопасности"],
        },
        {
          name: "Тестирование на уязвимости",
          level: 80,
          description:
            "Проведение тестирования безопасности беспроводных сетей и систем с использованием специализированных инструментов, выявление потенциальных уязвимостей и разработка рекомендаций по их устранению.",
          tags: [
            "Kali Linux",
            "aircrack-ng",
            "reaver",
            "brute force",
            "Wireshark",
            "Тестирование на проникновение",
            "Безопасность Wi-Fi",
          ],
        },
      ],
    },
  ]

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
          <div key={categoryIndex} className="space-y-4">
            <div
              className="flex justify-between items-center cursor-pointer sm:cursor-default"
              onClick={() => toggleCategory(categoryIndex)}
            >
              <h3 className="text-2xl font-semibold text-primary/90">{category.category}</h3>
              <button
                className="sm:hidden text-primary hover:text-primary/80 transition-colors p-2 rounded-full hover:bg-primary/10"
                aria-label={isCategoryExpanded ? "Свернуть категорию" : "Развернуть категорию"}
              >
                {isCategoryExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </div>

            <div
              className={cn(
                "grid transition-all duration-300 overflow-hidden",
                isCategoryExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const isExpanded = expandedSkills[`${categoryIndex}-${skillIndex}`]
                  return (
                    <Card
                      key={skillIndex}
                      className={cn(
                        "transition-all duration-300 hover:shadow-md glass-effect",
                        isExpanded ? "shadow-md" : "",
                      )}
                    >
                      <CardContent className="pt-6">
                        <div
                          className="flex justify-between items-center mb-2 cursor-pointer"
                          onClick={() => toggleSkill(categoryIndex, skillIndex)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                          aria-controls={`skill-content-${categoryIndex}-${skillIndex}`}
                        >
                          <h4 className="text-lg font-medium">{skill.name}</h4>
                          <button
                            className="text-primary hover:text-primary/80 transition-colors p-2 rounded-full hover:bg-primary/10"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleSkill(categoryIndex, skillIndex)
                            }}
                            aria-label={isExpanded ? "Свернуть" : "Развернуть"}
                          >
                            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                          </button>
                        </div>

                        <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-700"
                            style={{ width: isExpanded ? `${skill.level}%` : "0%" }}
                          ></div>
                        </div>

                        <div
                          id={`skill-content-${categoryIndex}-${skillIndex}`}
                          className={cn(
                            "grid transition-all duration-300 overflow-hidden",
                            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="text-muted-foreground mb-4">{skill.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {skill.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="secondary"
                                  className="bg-primary/10 text-primary hover:bg-primary/20"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
