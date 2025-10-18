"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Focus Marketing Digital.")
    window.open(`https://wa.me/556294031028?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl p-0 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </Button>
  )
}
