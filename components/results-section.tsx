"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Danilo Santana",
    company: "Expertise Contábil",
    text: "A parceria com a Focus transformou totalmente a presença digital da nossa contabilidade. Hoje, atraímos clientes qualificados de forma constante e conseguimos resultados que antes pareciam distantes. O atendimento é ágil e a equipe realmente entende o nosso negócio!",
    rating: 5,
  },
   {
    name: "Gabriel Borges",
    company: "Auto center Gomes",
    text: "Antes da Focus, tinha uma grande resistência com serviços de marketing. Mas hoje, tenho uma visão ampla com relação a importância da agência dentro da nossa empresa, tanto em posicionamento digital, quanto em campanhas bem segmentadas. Uma equipe de sucesso e confiança!",
    rating: 5,
  },
   {
    name: "Valmir Gomes",
    company: "Inovari Recrutamento",
    text: "O trabalho da Focus é essencial para o crescimento e posicionamento da Inovari. Parabéns a toda a equipe pela dedicação a nossa empresa. ",
    rating: 5,
  },	
   {
    name: "Bruno Ricardo",
    company: "Empresa de contabilidade",
    text: "O trabalho da equipe é incrível! O acompanhamento das campanhas, e relatórios que a agência entrega é o que nos dá confiança no investimento. Indico 100% para profissionais que queiram crescer e ter uma estrutura no digital.",
    rating: 5,
  },

]

export function ResultsSection() {
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
    <section id="depoimentos" ref={sectionRef} className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resultados que Falam por Si</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
              Veja o que nossos clientes têm a dizer sobre os resultados alcançados com nossas estratégias de marketing
              digital.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">+100</div>
              <div className="text-white/70">Campanhas Otimizadas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">320%</div>
              <div className="text-white/70">ROI Médio</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-white/70">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">+30</div>
              <div className="text-white/70">Clientes Ativos</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-xl">
                <CardContent className="p-8">
                  <Quote className="text-secondary mb-4" size={32} />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                  <div>
                    <div className="font-bold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
