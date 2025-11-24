"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Ana Maria Silva",
    position: "Fundadora e CEO da Focus Marketing Digital",
    description:
      "Ana é a fundadora da Focus Marketing Digital, atualmente finalizando o ensino superior em Publicidade e Propaganda. Na empresa, atua como estrategista principal, sendo responsável pelo desenvolvimento, planejamento e execução das estratégias de marketing que impulsionam resultados reais para os clientes.\n\nTambém é especialista em edição de vídeos, unindo criatividade, técnica e visão analítica para transformar conteúdos em peças de alto impacto.",
    image: "/images/ana_maria.JPG",
  },
  {
    name: "Izadora Aurélio",
    position: "CEO e Sócia da Focus Marketing Digital",
    description:
      "Izadora é CEO e sócia da Focus Marketing Digital. Formada em Design Gráfico, atua como especialista em análise de resultados, garantindo a interpretação estratégica dos dados e decisões orientadas por performance que elevam o impacto das campanhas.\n\nCom um olhar técnico e apurado para design e métricas, Izadora contribui para o crescimento dos clientes e para a evolução contínua da Focus, unindo estética, estratégia e resultados de forma precisa e eficiente.",
    image: "/images/izadora.JPG",
  },
]

export function TeamSection() {
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
    <section id="equipe" ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
              Conheça Nossa Equipe
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-secondary mx-auto mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4">
              Profissionais apaixonados por marketing digital, dedicados a transformar suas ideias em resultados
              extraordinários.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-card rounded-lg p-6 sm:p-8"
              >
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <div className="relative w-full max-w-xs">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur-xl opacity-20 hover:opacity-30 transition-opacity" />

                    <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-[4/5]">

                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 text-center">{member.name}</h3>
                <p className="text-secondary font-semibold mb-4 sm:mb-6 text-base sm:text-lg text-center">
                  {member.position}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-line">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
