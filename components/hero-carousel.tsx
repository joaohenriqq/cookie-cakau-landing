"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Award, Cookie } from "lucide-react"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?w=1400&q=80",
    caption: "Puro chocolate derretido na massa"
  },
  {
    image: "https://images.unsplash.com/photo-1619149086588-1e1c997ce7e7?w=1400&q=80",
    caption: "Crocante por fora, molhadinho por dentro"
  },
  {
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1400&q=80",
    caption: "Embalagem presenteável, pronta para surpreender"
  },
  {
    image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=1400&q=80",
    caption: "Assados artesanalmente na hora do pedido"
  }
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Badges Flutuantes */}
      <div className="absolute top-6 left-0 right-0 z-20 flex justify-center gap-3 px-4 flex-wrap">
        <Badge variant="secondary" className="bg-white/95 text-black hover:bg-white px-4 py-2 text-xs font-semibold backdrop-blur-sm">
          <Award className="w-4 h-4 mr-1.5" />
          TripAdvisor #1 Sobremesas Maceió
        </Badge>
        <Badge className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 text-xs font-semibold">
          <Star className="w-4 h-4 mr-1.5 fill-current" />
          iFood 5.0 (2.847 avaliações)
        </Badge>
        <Badge variant="outline" className="bg-white/90 text-black hover:bg-white border-0 px-4 py-2 text-xs font-semibold backdrop-blur-sm">
          <Cookie className="w-4 h-4 mr-1.5" />
          Google 4.9 (1.234 reviews)
        </Badge>
      </div>

      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Caption no centro da imagem */}
            <div className="absolute bottom-[35%] left-0 right-0 flex justify-center px-6">
              <Badge className="bg-white/95 text-black hover:bg-white px-6 py-3 text-sm font-semibold backdrop-blur-sm">
                {slide.caption}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black transition-all hover:scale-110"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black transition-all hover:scale-110"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-[32%] left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === current 
                ? "bg-white w-6" 
                : "bg-white/40 w-2.5 hover:bg-white/60"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>

      {/* Conteúdo Inferior */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/80 to-transparent pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Crocante por fora,
            <br />
            molhadinho por dentro
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Cookies artesanais com puro chocolate derretido na massa. 
            Assados na hora e entregues em minutos em Maceió.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 h-14 text-base font-semibold rounded-full">
              Ver cardápio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 h-14 text-base font-semibold rounded-full"
              onClick={() => window.open("https://wa.me/5582998350060", "_blank")}
            >
              Pedir no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
