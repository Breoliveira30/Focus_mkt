"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
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
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-primary/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center space-x-2 sm:space-x-3">
            {/* Desktop Logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary p-1 overflow-hidden hidden sm:block">
              <Image
                src="/images/logo.png"
                alt="Focus Marketing Digital Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <span className="text-white font-bold text-lg sm:text-xl hidden sm:inline">Focus Marketing Digital</span>

            <div className="flex items-center gap-1 sm:hidden">
              <span className="text-white font-bold text-xl">F</span>
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-primary flex-shrink-0">
                <Image src="/images/logo.png" alt="Focus Logo" fill className="object-cover rounded-full" />
              </div>
              <span className="text-white font-bold text-xl">CUS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-secondary transition-colors duration-200 text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-sm lg:text-base"
            >
              <Link href="#contato">Fale com um Especialista</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
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
