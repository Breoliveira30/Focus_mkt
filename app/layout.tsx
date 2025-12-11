import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Focus Marketing Digital",
  description:
    "Transformamos sua presença online em resultados reais. Gestão de tráfego pago, criação de sites, redes sociais, branding e consultoria de marketing digital.",
  keywords:
    "marketing digital, tráfego pago, google ads, meta ads, criação de sites, gestão de redes sociais, branding, SEO",
  icons: {
  icon: [
    { url: "/favicon-32x32.png", sizes: "32x32" },
    { url: "/favicon-16x16.png", sizes: "16x16" },
  ],
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Outros links adicionais que você já tinha */}
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}

