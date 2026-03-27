// app/components/ui/BuilderConfigurator.tsx

"use client"

import { useState } from "react"
import {
  WEB_SECTIONS,
  WEB_FEATURES,
  AUTO_OPTIONS,
  PALETTES,
  type OptionItem,
  type PaletteOption,
} from "@/app/components/ui/builder.config"
import { Check } from "lucide-react" // Necesitas instalar lucide-react si no lo tienes

type Props = {
  selectedWeb: Set<string>
  selectedAuto: Set<string>
  palette: PaletteOption
  toggleWeb: (id: string) => void
  toggleAuto: (id: string) => void
  setPalette: (p: PaletteOption) => void
}

type Tab = "web" | "auto"

// CAMBIO 1: Reemplazamos la tarjeta blanca/MagicCard por una oscura estilo testimonios
function OptionCard({
  item,
  selected,
  onToggle,
}: {
  item: OptionItem
  selected: boolean
  onToggle: () => void
}) {
  const isBase = item.id === "hero"

  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-2xl p-4 flex items-start gap-4 border transition-all duration-300 relative group
        ${isBase ? "cursor-default" : "hover:border-[#1E2A3A]"}
        ${selected ? "bg-[#13151b] border-[#1E2A3A]" : "bg-[#0D1526] border-[#1E2A3A]/40"}`}
    >
      {/* Línea superior rainbow siempre visible (estilo testimonios) */}
      <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#00DFFF] via-[#FF00D4] to-[#00FF94] opacity-50 transition-opacity group-hover:opacity-100" />
      
      {/* Checkbox personalizado estilo SerStack (siempre en CIAN) */}
      <span
        className={`mt-1 flex-shrink-0 w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 
          ${selected ? "border-[#00DFFF] bg-[#00DFFF]" : "border-white/20 bg-transparent group-hover:border-white/40"}`}
      >
        {selected && <Check className="w-3.5 h-3.5 text-[#0A0F1F]" />}
      </span>

      <span className="flex-1 min-w-0 pt-1">
        {/* CAMBIO 2: Título en blanco, descripción en #888888 (legible) */}
        <span className="block text-sm font-semibold text-white">
          {item.name}
        </span>
        <span className="block text-xs text-[#888888] mt-1 leading-relaxed">
          {item.desc}
        </span>
      </span>

      {/* CAMBIO 3: Precio en CIAN (#00DFFF) */}
      <span className="flex-shrink-0 text-xs font-bold pt-1 text-[#00DFFF]">
        {item.priceUSD === 0 ? "base" : `+$${item.priceUSD}`}
      </span>
    </div>
  )
}

export default function BuilderConfigurator({
  selectedWeb,
  selectedAuto,
  palette,
  toggleWeb,
  toggleAuto,
  setPalette,
}: Props) {
  const [tab, setTab] = useState<Tab>("web")
  // El selector afecta SÓLO al mockup, pero la UI usa CIAN (#00DFFF)
  const uiAccent = "#00DFFF"

  return (
    <div className="flex flex-col h-full">
      {/* Tabs — Forzamos CIAN (#00DFFF) */}
      <div className="flex border-b border-white/5 mb-6">
        {(["web", "auto"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-5 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-150 border-b-2 -mb-px"
            style={{
              borderBottomColor: tab === t ? uiAccent : "transparent",
              color: tab === t ? uiAccent : "#888888",
            }}
          >
            {t === "web" ? "Sitio web" : "Automatización"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-6">
        {tab === "web" && (
          <>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3 font-semibold">
                Secciones
              </p>
              <div className="space-y-2">
                {WEB_SECTIONS.map((item) => (
                  <OptionCard
                    key={item.id}
                    item={item}
                    selected={selectedWeb.has(item.id)}
                    onToggle={() => toggleWeb(item.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3 font-semibold">
                Funcionalidades
              </p>
              <div className="space-y-2">
                {WEB_FEATURES.map((item) => (
                  <OptionCard
                    key={item.id}
                    item={item}
                    selected={selectedWeb.has(item.id)}
                    onToggle={() => toggleWeb(item.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#888888] mb-3 font-semibold">
                Paleta de Colores para tu Web
              </p>
              {/* CAMBIO 4: Selector de colores con borde CIAN (#00DFFF) */}
              <div className="flex gap-2 flex-wrap bg-[#0D1526] p-3 rounded-xl border border-[#1E2A3A]/40">
                {PALETTES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPalette(p)}
                    title={p.label}
                    className="w-8 h-8 rounded-full transition-all duration-200 shadow-xl relative"
                    style={{
                      background: p.hex,
                      outline:
                        palette.id === p.id
                          ? `3px solid ${uiAccent}`
                          : "2px solid rgba(255,255,255,0.2)",
                      outlineOffset: "3px",
                      transform:
                        palette.id === p.id ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    {palette.id === p.id && (
                       <span className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center">
                          <Check className="w-5 h-5 text-white" />
                       </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-[#888888] mt-2 italic">
                Elige el color principal que tendrá tu sitio web.
              </p>
            </div>
          </>
        )}

        {tab === "auto" && (
          <>
            <p className="text-sm text-[#888888] leading-relaxed">
              Elige las automatizaciones según lo que ya tiene el negocio. Son independientes del sitio web.
            </p>
            <div className="space-y-2">
              {AUTO_OPTIONS.map((item) => (
                <OptionCard
                  key={item.id}
                  item={item}
                  selected={selectedAuto.has(item.id)}
                  onToggle={() => toggleAuto(item.id)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}