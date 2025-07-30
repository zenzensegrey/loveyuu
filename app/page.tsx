"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LovePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/couple-photo.jpg" alt="Beautiful couple" fill className="object-cover" priority />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <h1
          className={`
            text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 
            text-white 
            text-center leading-none
            drop-shadow-2xl
            transition-all duration-3000 ease-out
            ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
          `}
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)",
            fontFamily: "Courier, 'Courier New', monospace",
            letterSpacing: "0.05em",
          }}
        >
          I LOOOOVE YUU
        </h1>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute text-red-500 text-4xl animate-bounce
              transition-opacity duration-2000 delay-${i * 500}
              ${isVisible ? "opacity-70" : "opacity-0"}
            `}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  )
}
