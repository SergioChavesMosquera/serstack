// app/components/ui/BuilderSection.tsx

"use client"

import { useBuilder } from "@/hooks/useBuilder"
import BuilderConfigurator from "@/app/components/ui/BuilderConfigurator"
import BuilderMockup from "@/app/components/ui/BuilderMockup"
import BuilderPriceSummary from "@/app/components/ui/BuilderPriceSummary"

export default function BuilderSection() {
  const builder = useBuilder()

  // Mantenemos el color de acento dinámico de tu palette para pasarlo al MOCKUP,
  // pero usaremos CIAN por defecto en la UI de SerStack.
  const dynamicPaletteHex = builder.palette?.hex || "#00DFFF"

  return (
    
    // CAMBIO 1: El fondo de la sección ahora es el mismo #0A0F1F
    <section id="builder" className="w-full py-24 px-4 bg-[#0A0F1F]">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        {/* CAMBIO 2: Título secundario en CIAN (#00DFFF) */}
        <p className="text-sm uppercase tracking-widest mb-4 font-semibold text-[#00DFFF]">
          Configura tu proyecto
        </p>
        {/* CAMBIO 3: Título en blanco y texto secundario en #888888 */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Arma tu sitio web ideal
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto leading-relaxed">
          Elige las secciones, funcionalidades y estilo que necesitas.
          El precio se calcula en tiempo real según lo que selecciones.
        </p>
      </div>

      {/* Builder grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start relative z-10">

        {/* Columna izquierda — configurador */}
        {/* CAMBIO 4: Contenedor oscuro translúcido con borde sutil (estilo testimonios) */}
        <div 
          className="rounded-2xl border border-white/5 bg-[#13151b]/80 backdrop-blur-md p-6 min-h-[640px] flex flex-col sticky top-6 shadow-[0_0_40px_-15px_rgba(255,255,255,0.05)]"
        >
          <BuilderConfigurator
            selectedWeb={builder.selectedWeb}
            selectedAuto={builder.selectedAuto}
            palette={builder.palette}
            toggleWeb={builder.toggleWeb}
            toggleAuto={builder.toggleAuto}
            setPalette={builder.setPalette}
          />
        </div>

        {/* Columna derecha — mockup + precio */}
        <div className="flex flex-col gap-6">

          {/* Mockup browser — más grande */}
          {/* CAMBIO 5: Glow dinámico basado en el color seleccionado SÓLO en el mockup */}
          <div
            className="rounded-2xl border border-white/10 bg-[#0f1117] p-5 relative overflow-hidden transition-all duration-500"
            style={{ 
              minHeight: "520px",
              boxShadow: `0 0 60px -20px ${dynamicPaletteHex}40` // Brillo dinámico
            }}
          >
            {/* Pequeño gradiente de fondo dinámico sólo en el mockup */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none transition-colors duration-500"
              style={{ background: `radial-gradient(circle at top right, ${dynamicPaletteHex}, transparent 70%)` }}
            />
            
            <div className="relative z-10 h-full">
              <BuilderMockup
                selectedWeb={builder.selectedWeb}
                selectedAuto={builder.selectedAuto}
                palette={builder.palette}
                businessName={builder.businessName}
                setBusinessName={builder.setBusinessName}
              />
            </div>
          </div>

          {/* Precio y CTA */}
          {/* CAMBIO 6: Contenedor oscuro translúcido con borde sutil (estilo testimonios) */}
          <div className="rounded-2xl border border-white/5 bg-[#13151b]/80 backdrop-blur-md p-6 relative">
             {/* Línea superior rainbow siempre visible (estilo testimonios) */}
             <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#00DFFF] via-[#FF00D4] to-[#00FF94]" />
            
            <BuilderPriceSummary
              totalUSD={builder.totalUSD}
              allSelectedLabels={builder.allSelectedLabels}
              selectedWeb={builder.selectedWeb}
              selectedAuto={builder.selectedAuto}
              palette={builder.palette}
              businessName={builder.businessName}
            />
          </div>

        </div>
      </div>
    </section>
  )
}