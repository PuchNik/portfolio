"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProfileSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start md:justify-between gap-8">
      <div className="flex flex-col items-center md:items-start md:flex-1 order-2 md:order-1">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Пучков Никита Валерьевич
        </h1>
        <p className="text-xl text-muted-foreground mb-6">Frontend-developer</p>
        <p className="max-w-md text-muted-foreground mb-8">
          Стремлюсь к профессиональному развитию и изучению новых знаний. Открыт для обсуждения интересных идей и готов
          работать в динамичной команде, чтобы совместно достигать высоких результатов и продвигаться по карьерной
          лестнице.
        </p>
      </div>

      <div className="md:flex-shrink-0 order-1 md:order-2 mb-6 md:mb-0">
        <div
          className="relative h-72 w-60 sm:h-80 sm:w-64 overflow-hidden border-4 border-primary/20 shadow-xl"
          style={{
            borderRadius: "50% / 40%",
            background: "linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
          }}
        >
          {!imageError ? (
            <Image
              src="/profile.jpg"
              alt="Пучков Никита Валерьевич"
              fill={true}
              sizes="(max-width: 768px) 240px, 256px"
              className="object-cover"
              style={{
                objectPosition: "center 15%",
                transform: "scale(1.05)",
              }}
              priority={true}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary">
              Фото профиля
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
