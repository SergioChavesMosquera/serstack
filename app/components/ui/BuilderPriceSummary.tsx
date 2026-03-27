// app/components/ui/BuilderPriceSummary.tsx

"use client"

import { NumberTicker } from "@/app/components/ui/number-ticker"
import {
  BASE_PRICE_USD,
  WEB_SECTIONS,
  WEB_FEATURES,
  AUTO_OPTIONS,
  type PaletteOption,
} from "@/app/components/ui/builder.config"

type Props = {
  totalUSD: number
  allSelectedLabels: { id: string; name: string }[]
  selectedWeb: Set<string>
  selectedAuto: Set<string>
  palette: PaletteOption
  businessName: string
}

export default function BuilderPriceSummary({
  totalUSD,
  allSelectedLabels,
  selectedWeb,
  selectedAuto,
  businessName,
}: Props) {
  // Ignoramos `palette.hex` para la interfaz de SerStack y forzamos CIAN (#00DFFF)

  const allOptions = [...WEB_SECTIONS, ...WEB_FEATURES, ...AUTO_OPTIONS]

  const breakdown = [
    { name: "Sitio base", price: BASE_PRICE_USD },
    ...allOptions
      .filter(
        (o) =>
          o.priceUSD > 0 &&
          (selectedWeb.has(o.id) || selectedAuto.has(o.id))
      )
      .map((o) => ({ name: o.name, price: o.priceUSD })),
  ]

  const handleCotizar = () => {
    const lista = allSelectedLabels.map((l) => `• ${l.name}`).join("\n")
    const texto = `Hola SerStack! Me interesa cotizar un sitio web para *${businessName}* con las siguientes opciones:\n\n${lista}\n\nTotal estimado: $${totalUSD} USD`
    const url = `https://wa.me/573128036725?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank")
  }

  return (
    <div className="flex flex-col gap-4">

      {/* Precio total */}
      <div className="rounded-xl border border-white/5 p-4 bg-[#0D1526]/50">
        <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-1 font-semibold">
          Inversión estimada
        </p>

        <div className="flex items-baseline gap-1 pt-1">
          {/* CAMBIO 1: Símbolo de precio en CIAN (#00DFFF) */}
          <span className="text-3xl font-bold text-[#00DFFF]">
            $
          </span>
          {/* CAMBIO 2: NumberTicker en blanco para que destaque */}
          <NumberTicker
            value={totalUSD}
            className="text-3xl font-bold text-white"
          />
          <span className="text-sm font-medium text-[#888888] ml-1">
            USD
          </span>
        </div>

        {/* Desglose */}
        <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
          {breakdown.map((b) => (
            <div key={b.name} className="flex justify-between text-xs">
              <span className="text-[#888888]">{b.name}</span>
              <span className="text-white font-medium">${b.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags seleccionados */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-2 font-semibold">
          Incluye
        </p>
        {allSelectedLabels.length === 0 ? (
          <p className="text-xs text-[#888888]">
            Ninguna opción seleccionada
          </p>
        ) : (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {allSelectedLabels.map((l) => (
              <span
                key={l.id}
                // CAMBIO 3: Tags sutiles forzados a CIAN (#00DFFF)
                className="text-[11px] px-2.5 py-1 rounded-full border border-[#00DFFF]/20 font-medium transition-colors text-[#00DFFF] bg-[#00DFFF]/5"
              >
                {l.name}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      {/* CAMBIO 4: Botón de Cotizar forzado a CIAN (#00DFFF) con Glow Neón de ese color */}
      <button
        onClick={handleCotizar}
        className="w-full mt-3 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        style={{ 
          background: "#00DFFF", // CIAN Neón brillante
          color: "#0A0F1F", // Letra oscura para contrastar
          boxShadow: `0 0 40px -5px #00DFFF` // Brillo neón CIAN potente
        }}
      >
        Cotizar con SerStack
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <p className="text-[10px] text-[#888888] text-center mt-1">
        Precio estimado · El valor final se define en la consulta gratuita
      </p>
    </div>
  )
}