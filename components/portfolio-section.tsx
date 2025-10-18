"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

const portfolioItems = [
  {
    title: "E-commerce Fashion",
    category: "Tráfego Pago + Redes Sociais",
    image: "/modern-fashion-ecommerce-website-design.jpg",
    results: "+250% em vendas",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
  {
    title: "Clínica Médica Premium",
    category: "Site + SEO + Google Ads",
    image: "/modern-medical-clinic-website-design.jpg",
    results: "+180% em agendamentos",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
  {
    title: "Restaurante Gourmet",
    category: "Branding + Redes Sociais",
    image: "/elegant-restaurant-social-media-posts.jpg",
    results: "+400% seguidores",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
  {
    title: "Tech Startup",
    category: "Landing Page + Tráfego",
    image: "/modern-tech-startup-landing-page.jpg",
    results: "+320% conversões",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
  {
    title: "Academia Fitness",
    category: "Gestão Completa",
    image: "/fitness-gym-social-media-campaign.jpg",
    results: "+200 novos alunos",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
  {
    title: "Loja de Decoração",
    category: "E-commerce + Meta Ads",
    image: "/home-decor-online-store-design.jpg",
    results: "ROI de 450%",
    instagramUrl: "https://instagram.com/focusmarketingdigital",
  },
]

export function PortfolioSection() {
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
    <section id="portfolio" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Nosso Portfólio</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Conheça alguns dos projetos que desenvolvemos e os resultados extraordinários que alcançamos para nossos
              clientes.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <div className="text-2xl font-bold mb-2">{item.results}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.category}</p>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Instagram className="w-5 h-5" />
                      Ver no Instagram
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
