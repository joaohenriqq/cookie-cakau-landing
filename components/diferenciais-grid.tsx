"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const diferenciais = [
  {
    num: "01",
    image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?w=500&q=80",
    title: "Assados na hora do pedido",
    desc: "Fomos os primeiros de Maceió a assar na hora. Nada de cookie velho de vitrine. Fresquinho sempre."
  },
  {
    num: "02",
    image: "https://images.unsplash.com/photo-1619149086588-1e1c997ce7e7?w=500&q=80",
    title: "Puro chocolate derretido",
    desc: "Pedaços de puro chocolate que derretem na massa. Nada de brigadeiro ou gotas genéricas."
  },
  {
    num: "03",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
    title: "Massa com sabor próprio",
    desc: "Molhadinha por dentro, crocante por fora. Sabor intenso que não depende de recheio."
  },
  {
    num: "04",
    image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?w=500&q=80",
    title: "Embalagem presenteável",
    desc: "Caixinha personalizada que já é um presente. Surpreenda quem você ama com um sorriso."
  },
  {
    num: "05",
    image: "https://images.unsplash.com/photo-1619149086588-1e1c997ce7e7?w=500&q=80",
    title: "Consistência garantida",
    desc: "Sempre as mesmas marcas de ingredientes. Zero decepção, o mesmo sorriso em cada mordida."
  }
]

export function DiferenciaisGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-stone-900 mb-3">
            5 razões para escolher Cookie Cakau
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            O que nos torna a escolha certa para quem valoriza qualidade
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {diferenciais.map((item) => (
            <Card key={item.num} className="border-0 shadow-md overflow-hidden group">
              <CardContent className="p-0">
                {/* Número */}
                <div className="px-5 pt-5 pb-2">
                  <span className="text-xs font-bold text-rose-500 tracking-wider">
                    {item.num}
                  </span>
                </div>
                
                {/* Imagem */}
                <div className="relative aspect-[4/3] mx-5 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>
                
                {/* Conteúdo */}
                <div className="px-5 pb-5">
                  <h3 className="font-semibold text-stone-900 mb-2 text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
