"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star, Award, Globe, Utensils } from "lucide-react"

const reviews = [
  {
    source: "tripadvisor",
    sourceLabel: "TripAdvisor",
    icon: Award,
    color: "bg-emerald-100 text-emerald-700",
    stars: 5,
    text: "Nunca comi um cookie assim em Maceió. Dá pra sentir que é feito na hora, o chocolate derrete na boca de um jeito diferente. Virei fã!",
    author: "Ana Carolina",
    date: "outubro de 2025"
  },
  {
    source: "google",
    sourceLabel: "Google",
    icon: Globe,
    color: "bg-blue-100 text-blue-700",
    stars: 5,
    text: "A massa é molhadinha, não é seco igual os de vitrine. E a caixinha é tão linda que já comprei de presente 3 vezes. Atendimento impecável!",
    author: "Bruno Mendes",
    date: "novembro de 2025"
  },
  {
    source: "ifood",
    sourceLabel: "iFood",
    icon: Utensils,
    color: "bg-red-100 text-red-700",
    stars: 5,
    text: "Sou exigente com chocolate e aqui é puro, não é brigadeiro. Vocês ganharam uma cliente fiel desde a primeira mordida. Entrega sempre no prazo.",
    author: "Carla Dias",
    date: "dezembro de 2025"
  },
  {
    source: "tripadvisor",
    sourceLabel: "TripAdvisor",
    icon: Award,
    color: "bg-emerald-100 text-emerald-700",
    stars: 5,
    text: "O Red Velvet é simplesmente perfeito. Chega quentinho, sabor inigualável. Melhor cookie de Maceió sem dúvida alguma. Super recomendo!",
    author: "João Silva",
    date: "janeiro de 2026"
  },
  {
    source: "google",
    sourceLabel: "Google",
    icon: Globe,
    color: "bg-blue-100 text-blue-700",
    stars: 5,
    text: "Presenteei minha mãe e ela ficou encantada. A embalagem é um show à parte, e o sabor então, nem se fala. Já virou tradição de aniversário.",
    author: "Maria Fernanda",
    date: "janeiro de 2026"
  }
]

export function ReviewsCarousel() {
  return (
    <section className="py-16 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-stone-900">O que dizem sobre nós</h2>
          <div className="flex gap-3">
            <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <Award className="w-3.5 h-3.5 mr-1" />
              TripAdvisor
            </Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
              <Globe className="w-3.5 h-3.5 mr-1" />
              Google
            </Badge>
            <Badge className="bg-red-500 hover:bg-red-600 text-white">
              <Utensils className="w-3.5 h-3.5 mr-1" />
              iFood
            </Badge>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-0 shadow-sm">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="secondary" className={`${review.color} font-semibold text-xs uppercase`}>
                        <review.icon className="w-3 h-3 mr-1" />
                        {review.sourceLabel}
                      </Badge>
                      <div className="flex text-amber-400 text-sm">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Text */}
                    <p className="text-stone-700 text-sm leading-relaxed mb-4 italic">
                      "{review.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="pt-4 border-t border-stone-100">
                      <p className="font-semibold text-stone-900 text-sm">{review.author}</p>
                      <p className="text-stone-400 text-xs">Avaliou em {review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white border-stone-200 hover:bg-stone-100 hover:border-stone-300" />
          <CarouselNext className="hidden md:flex -right-4 bg-white border-stone-200 hover:bg-stone-100 hover:border-stone-300" />
        </Carousel>
      </div>
    </section>
  )
}
