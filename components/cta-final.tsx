"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CTAFinal() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-400 to-rose-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para descobrir novos sorrisos?
        </h2>
        <p className="text-xl text-white/95 mb-10">
          Cookies artesanais, puro chocolate derretido, assados na hora.
        </p>
        
        <Button 
          size="lg" 
          className="bg-white text-rose-600 hover:bg-gray-100 px-10 h-14 text-lg font-semibold rounded-full mb-8 shadow-lg"
          onClick={() => window.open("https://www.cookiecakau.com.br/cardapio", "_blank")}
        >
          Ver cardápio completo
        </Button>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
          <a 
            href="https://wa.me/5582998350060" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold hover:underline"
          >
            <Phone className="w-5 h-5" />
            WhatsApp: (82) 99835-0060
          </a>
          <span className="hidden sm:inline opacity-60">•</span>
          <span className="text-white/90">
            Funcionamento: Todos os dias, 15h às 23h
          </span>
        </div>
      </div>
    </section>
  )
}
