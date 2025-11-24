"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Equipe", href: "#equipe" },
    { label: "Serviços", href: "#servicos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Desktop */}
          <Link href="#inicio" className="hidden lg:flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full bg-primary p-1 overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Focus Marketing Digital Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-white font-bold text-xl">Focus Marketing Digital</span>
          </Link>

          {/* Logo - Mobile */}
          <Link href="#inicio" className="flex lg:hidden items-center gap-1">
            <span className="text-white font-bold text-xl">F</span>
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-primary flex-shrink-0">
              <Image src="/images/logo.png" alt="Focus Logo" fill className="object-cover rounded-full" />
            </div>
            <span className="text-white font-bold text-xl">CUS</span>
          </Link>

          {/* Desktop Navigation - Only visible on lg screens */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-secondary transition-colors duration-200 text-base"
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
              <Link href="#contato">Fale com um Especialista</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button - Only visible below lg screens */}
          <button className="lg:hidden text-white p-2 ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Only visible below lg screens */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-secondary transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-secondary text-primary hover:bg-secondary/90 font-semibold w-full mt-2">
                <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  Fale com um Especialista
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
