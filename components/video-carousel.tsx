"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  title: string
  url: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Campanha de como começar no digital ",
    url: "https://www.youtube.com/embed/ice_xL6x4Qg?si=tSBGInSkXi7kOhBN",
  },
   {
    id: "2",
    title: "Campanha de Sucesso - E-commerce",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const videoRef = useRef<HTMLIFrameElement>(null)

  // Simulate video end to move to next video
  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 30000) // 30 segundos para simular duração do vídeo

    return () => clearTimeout(timer)
  }, [currentIndex, isAutoPlay])

  const goToVideo = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 2000)
  }

  const nextVideo = () => {
    goToVideo((currentIndex + 1) % videos.length)
  }

  const prevVideo = () => {
    goToVideo((currentIndex - 1 + videos.length) % videos.length)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Video Container with Card Effect */}
      <div className="relative mb-8">
        {/* Card Background Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />

        {/* Video Frame */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <iframe
              ref={videoRef}
              key={videos[currentIndex].id}
              width="100%"
              height="100%"
              src={videos[currentIndex].url}
              title={videos[currentIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Video Title */}
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold text-white">{videos[currentIndex].title}</h3>
          <p className="text-sm text-white/60 mt-2">
            {currentIndex + 1} de {videos.length}
          </p>
        </div>
      </div>

      {/* Navigation Controls - Only show if multiple videos */}
      {videos.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={prevVideo}
            variant="outline"
            size="icon"
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
          >
            <ChevronLeft size={24} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-white/30 w-3 hover:bg-white/50"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextVideo}
            variant="outline"
            size="icon"
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      )}
    </div>
  )
}
