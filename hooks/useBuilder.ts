// hooks/useBuilder.ts

import { useState, useMemo } from "react"
import {
  BASE_PRICE_USD,
  WEB_SECTIONS,
  WEB_FEATURES,
  AUTO_OPTIONS,
  DEFAULT_SELECTED_WEB,
  DEFAULT_PALETTE,
  type PaletteOption,
} from "@/app/components/ui/builder.config"

export type BuilderState = {
  selectedWeb: Set<string>
  selectedAuto: Set<string>
  palette: PaletteOption
  totalUSD: number
  allSelectedLabels: { id: string; name: string }[]
  businessName: string
  setBusinessName: (name: string) => void
  toggleWeb: (id: string) => void
  toggleAuto: (id: string) => void
  setPalette: (p: PaletteOption) => void
}

export function useBuilder(): BuilderState {
  const [selectedWeb, setSelectedWeb] = useState<Set<string>>(
    () => new Set(DEFAULT_SELECTED_WEB)
  )
  const [selectedAuto, setSelectedAuto] = useState<Set<string>>(
    () => new Set<string>()
  )
  const [palette, setPaletteState] = useState<PaletteOption>(
    () => DEFAULT_PALETTE
  )
  const [businessName, setBusinessName] = useState<string>("Tu negocio")

  const toggleWeb = (id: string): void => {
    if (id === "hero") return
    setSelectedWeb((prev) => {
      const next = new Set<string>(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const toggleAuto = (id: string): void => {
    setSelectedAuto((prev) => {
      const next = new Set<string>(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const setPalette = (p: PaletteOption): void => setPaletteState(p)

  const totalUSD = useMemo(() => {
    const allOptions = [...WEB_SECTIONS, ...WEB_FEATURES, ...AUTO_OPTIONS]
    let total = BASE_PRICE_USD
    for (const opt of allOptions) {
      if (selectedWeb.has(opt.id) || selectedAuto.has(opt.id)) {
        total += opt.priceUSD
      }
    }
    return total
  }, [selectedWeb, selectedAuto])

  const allSelectedLabels = useMemo(() => {
    const allOptions = [...WEB_SECTIONS, ...WEB_FEATURES, ...AUTO_OPTIONS]
    return allOptions
      .filter((o) => selectedWeb.has(o.id) || selectedAuto.has(o.id))
      .map((o) => ({ id: o.id, name: o.name }))
  }, [selectedWeb, selectedAuto])

  return {
    selectedWeb,
    selectedAuto,
    palette,
    totalUSD,
    allSelectedLabels,
    businessName,
    setBusinessName,
    toggleWeb,
    toggleAuto,
    setPalette,
  }
}