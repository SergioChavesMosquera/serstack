"use client";

import { NumberTicker } from "./ui/number-ticker";
import { RainbowButton } from "./ui/rainbow-button";
import { CoolMode } from "./ui/cool-mode";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { Pointer } from "./ui/pointer";
import { Zap, Globe, Clock3, Users } from "lucide-react";

const stats = [
  { icon: Zap, value: 10, suffix: "+", label: "Proyectos entregados", color: "#00DFFF", neonColors: { firstColor: "#00DFFF", secondColor: "#005FFF" } },
  { icon: Globe, value: 4, suffix: "", label: "Países atendidos", color: "#FF00D4", neonColors: { firstColor: "#FF00D4", secondColor: "#00DFFF" } },
  { icon: Users, value: 100, suffix: "%", label: "Clientes satisfechos", color: "#00FF94", neonColors: { firstColor: "#00FF94", secondColor: "#0094FF" } },
  { icon: Clock3, value: 24, suffix: "h", label: "Tiempo de respuesta", color: "#FFB800", neonColors: { firstColor: "#FFB800", secondColor: "#FF00D4" } },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#0A0F1F] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#1E2A3A 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">
            Números reales
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados que <span className="text-[#00DFFF]">hablan solos.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, suffix, label, color, neonColors }) => (
            <CoolMode key={label}>
              <NeonGradientCard borderSize={2} borderRadius={16} neonColors={neonColors}>
                <div className="p-6 text-center relative cursor-pointer">
                  <Pointer style={{ fill: color }} />
                  <Icon className="w-5 h-5 mx-auto mb-3" style={{ color }} />
                  <p className="text-4xl font-bold mb-1" style={{ color }}>
                    <NumberTicker value={value} />
                    {suffix}
                  </p>
                  <p className="text-[#666] text-sm">{label}</p>
                </div>
              </NeonGradientCard>
            </CoolMode>
          ))}
        </div>

        <div className="text-center">
          <CoolMode>
            <RainbowButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Empezar mi proyecto →
            </RainbowButton>
          </CoolMode>
        </div>
      </div>
    </section>
  )
}