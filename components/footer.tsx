import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">F</span>
              </div>
              <span className="text-white font-bold text-xl">Focus Marketing Digital</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Transformando presença digital em resultados reais através de estratégias inteligentes e orientadas por
              dados.
            </p>
            <p className="text-secondary font-semibold"> VAMOS JUNTOS RUMO AO ALVO!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-white/70 hover:text-secondary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-white/70 hover:text-secondary transition-colors">
                  Serviços
                </Link>
              </li>
  
              <li>
                <Link href="#depoimentos" className="text-white/70 hover:text-secondary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-white/70 hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/focusmkt.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contato@focusmarketing.com.br"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Focus Marketing Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
