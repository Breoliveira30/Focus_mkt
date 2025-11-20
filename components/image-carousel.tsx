"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CarouselImage {
  id: string
  src: string
  alt: string
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="w-full">
      {/* Image Container with Card Effect */}
      <div className="relative mb-8">
        {/* Card Background Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-purple-600 rounded-2xl blur-xl opacity-20 hover:opacity-30 transition-opacity" />

        {/* Image Frame */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
          <div className="aspect-square">
            <img
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Image Counter */}
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            {currentIndex + 1} de {images.length}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={prevImage}
            variant="outline"
            size="icon"
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary bg-transparent"
          >
            <ChevronLeft size={24} />
          </Button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-secondary w-8" : "bg-gray-400 w-3 hover:bg-gray-500"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextImage}
            variant="outline"
            size="icon"
            className="border-secondary text-secondary hover:bg-secondary hover:text-primary bg-transparent"
          >
            <ChevronRight size={24} />
          </Button>
        </div>
      )}
    </div>
  )
}
