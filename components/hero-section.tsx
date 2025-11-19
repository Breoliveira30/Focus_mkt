"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/images/img_fundo1.png"
          alt="Focus Marketing Digital Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="absolute inset-0 z-0 md:hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image src="/images/logo.png" alt="Focus Logo" width={250} height={250} className="object-contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-balance drop-shadow-lg leading-tight">
            Transformamos sua presença online em <span className="text-secondary">resultados reais</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 text-pretty max-w-3xl mx-auto drop-shadow-md">
            A Focus Marketing Digital cria estratégias inteligentes para atrair, engajar e converter clientes todos os
            dias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-xl w-full sm:w-auto"
            >
              <Link href="#contato">
                Quero resultados
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent shadow-xl w-full sm:w-auto"
            >
              <Link href="#servicos">
                <Play className="mr-2" size={18} />
                Conhecer serviços
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-3xl mx-auto">
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2 drop-shadow-lg">
                +100
              </div>
              <div className="text-white/90 drop-shadow-md text-xs sm:text-sm md:text-base">Campanhas Otimizadas</div>
            </div>
            <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2 drop-shadow-lg">
                320%
              </div>
              <div className="text-white/90 drop-shadow-md text-xs sm:text-sm md:text-base">ROI Médio</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 backdrop-blur-sm bg-white/10 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-1 sm:mb-2 drop-shadow-lg">
                98%
              </div>
              <div className="text-white/90 drop-shadow-md text-xs sm:text-sm md:text-base">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
