"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! tudo bem ? Meu nome é ${formData.name}.

*E-mail:* ${formData.email}
*WhatsApp:* ${formData.phone}

*Mensagem:*
${formData.message}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/556294031028?text=${encodedMessage}`, "_blank")

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Focus Marketing Digital.")
    window.open(`https://wa.me/556294031028?text=${message}`, "_blank")
  }

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Pronto para fazer sua marca crescer?</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Entre em contato conosco e descubra como podemos transformar sua presença digital em resultados reais e
              mensuráveis.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Nome Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      WhatsApp
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(62) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre seu projeto..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg py-6"
                  >
                    Solicitar Orçamento
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>

                <div className="mt-6">
                  
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">E-mail</h3>
                      <p className="text-muted-foreground">focusmarketingdigital1@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">Telefone</h3>
                      <p className="text-muted-foreground">(62)9403-1028</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">Localização</h3>
                      <p className="text-muted-foreground">
                        Goiânia, GO
                        <br />
                        Atendimento em todo Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 text-white/80">
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                    <p className="text-secondary font-semibold mt-4">WhatsApp disponível 24/7</p>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
