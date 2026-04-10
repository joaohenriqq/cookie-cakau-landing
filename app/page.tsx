import { HeroCarousel } from "@/components/hero-carousel"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { DiferenciaisGrid } from "@/components/diferenciais-grid"
import { CTAFinal } from "@/components/cta-final"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero - Primeira Dobra Matadora */}
      <HeroCarousel />
      
      {/* Reviews Integrado */}
      <ReviewsCarousel />
      
      {/* 5 Diferenciais Principais */}
      <DiferenciaisGrid />
      
      {/* CTA Final */}
      <CTAFinal />
    </main>
  )
}
