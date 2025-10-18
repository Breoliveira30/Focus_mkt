"use client"

import { useEffect, useRef, useState } from "react"
import { Megaphone, Globe, Share2, Palette, LineChart, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Megaphone,
    title: "Gestão de Tráfego Pago",
    description: "Campanhas otimizadas no Google Ads e Meta Ads para maximizar seu ROI e atrair clientes qualificados.",
  },
  {
    icon: Globe,
    title: "Criação de Sites e Landing Pages",
    description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão e experiência do usuário.",
  },
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Estratégia completa de conteúdo e engajamento para construir sua presença digital e comunidade.",
  },
  {
    icon: Palette,
    title: "Branding e Identidade Visual",
    description: "Criação de marcas memoráveis com identidade visual única que conecta com seu público-alvo.",
  },
  {
    icon: LineChart,
    title: "Consultoria de Marketing Digital",
    description: "Análise estratégica e planejamento personalizado para impulsionar seu crescimento digital.",
  },
  {
    icon: Sparkles,
    title: "SEO e Marketing de Conteúdo",
    description: "Otimização para mecanismos de busca e criação de conteúdo relevante para atrair tráfego orgânico.",
  },
]

export function ServicesSection() {
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

  return (
    <section id="servicos" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Soluções completas de marketing digital para transformar sua presença online e gerar resultados
              mensuráveis.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
