"use client"

import { useEffect, useRef, useState } from "react"
import { Target, TrendingUp, Users } from "lucide-react"
import { ImageCarousel } from "./image-carousel"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const aboutImages = [
    {
      id: "1",
      src: "/images/img_fundo.png",
      alt: "Equipe Focus Marketing Digital",
    },
    {
      id: "2",
      src: "/images/img_fundo1.png",
      alt: "Estratégia de Marketing",
    },
    {
      id: "3",
      src: "/images/logo.png",
      alt: "Análise de Dados",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nosso Propósito</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
             Mais que uma agência, somos um time focado no crescimento do seu negócio. Na Focus, cada estratégia tem um propósito: fazer sua marca atingir o alvo certo. Nada de achismos — tudo é planejado com foco, análise e estratégia para gerar resultados reais.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <ImageCarousel images={aboutImages} />
            </div>

            {/* Values */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Target className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Estratégia Focada</h3>
                  <p className="text-muted-foreground">
                    Desenvolvemos planos personalizados que alinham seus objetivos de negócio com ações de marketing
                    eficazes e mensuráveis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Resultados Reais</h3>
                  <p className="text-muted-foreground">
                    Não prometemos milagres, entregamos crescimento sustentável baseado em análise de dados e otimização
                    contínua.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Parceria Verdadeira</h3>
                  <p className="text-muted-foreground">
                    Seu sucesso é o nosso sucesso. Trabalhamos lado a lado com você para alcançar e superar suas metas
                    de crescimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
