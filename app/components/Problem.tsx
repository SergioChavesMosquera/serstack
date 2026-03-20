"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./ui/animated-beam";
import { AuroraText } from "./ui/aurora-text";
import { Pointer } from "./ui/pointer";
import { NumberTicker } from "./ui/number-ticker";
import { NeonGradientCard } from "./ui/neon-gradient-card";
import { Clock3, Unplug, Zap, Globe } from "lucide-react";

const Circle = forwardRef<HTMLDivElement, { children?: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-[#0D1526] p-3 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  )
);
Circle.displayName = "Circle";

const FlowDiagram = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl border border-[#1E2A3A] bg-[#0D1526] p-10"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(#00DFFF 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 relative z-10">
        <div className="flex flex-col justify-center gap-6">
          <Circle ref={div1Ref} className="border-[#00DFFF]/50 hover:border-[#00DFFF] transition-colors">
            <span className="text-xl">📧</span>
          </Circle>
          <Circle ref={div2Ref} className="border-[#00DFFF]/50 hover:border-[#00DFFF] transition-colors">
            <span className="text-xl">📝</span>
          </Circle>
        </div>

        <div className="flex flex-col justify-center items-center gap-3">
          <Circle ref={div6Ref} className="size-24 border-[#00DFFF] p-0 overflow-hidden bg-black shadow-[0_0_30px_#00DFFF33]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cdn.simpleicons.org/n8n/white" alt="n8n" className="w-16 h-16" />
          </Circle>
          <span className="text-[#00DFFF] text-sm font-bold tracking-widest">SerStack</span>
        </div>

        <div className="flex flex-col justify-center gap-4">
          <Circle ref={div3Ref} className="border-[#00DFFF]/50 hover:border-[#00DFFF] transition-colors">
            <span className="text-xl">💬</span>
          </Circle>
          <Circle ref={div4Ref} className="border-[#00DFFF]/50 hover:border-[#00DFFF] transition-colors">
            <span className="text-xl">📊</span>
          </Circle>
          <Circle ref={div5Ref} className="border-[#00DFFF]/50 hover:border-[#00DFFF] transition-colors">
            <span className="text-xl">👤</span>
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} gradientStartColor="#00DFFF" gradientStopColor="#0A0F1F" />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} gradientStartColor="#00DFFF" gradientStopColor="#0A0F1F" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div3Ref} duration={3} gradientStartColor="#0A0F1F" gradientStopColor="#00DFFF" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} duration={3} gradientStartColor="#0A0F1F" gradientStopColor="#00DFFF" />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div5Ref} duration={3} gradientStartColor="#0A0F1F" gradientStopColor="#00DFFF" />
    </div>
  );
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 bg-[#0A0F1F] px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#1E2A3A 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">El Problema</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Tu negocio está perdiendo{" "}
            <AuroraText>horas en tareas manuales.</AuroraText>
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Procesos manuales, herramientas desconectadas y webs desactualizadas frenan tu crecimiento.
          </p>
        </div>

        {/* Cards + Diagrama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex flex-col gap-6">

            <NeonGradientCard borderSize={2} borderRadius={16} neonColors={{ firstColor: "#00DFFF", secondColor: "#005FFF" }}>
              <div className="p-6 relative">
                <Pointer className="fill-[#00DFFF]" />
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-[#00DFFF]/10 flex-shrink-0">
                    <Unplug className="w-6 h-6 text-[#00DFFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Herramientas Desconectadas</h3>
                    <p className="text-[#666] text-sm">Tus apps no se hablan. Copias datos manualmente todos los días.</p>
                  </div>
                </div>
              </div>
            </NeonGradientCard>

            <NeonGradientCard borderSize={2} borderRadius={16} neonColors={{ firstColor: "#FF00D4", secondColor: "#00DFFF" }}>
              <div className="p-6 relative">
                <Pointer className="fill-[#FF00D4]" />
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-[#FF00D4]/10 flex-shrink-0">
                    <Clock3 className="w-6 h-6 text-[#FF00D4]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Tiempo Perdido</h3>
                    <p className="text-[#666] text-sm">Tu equipo gasta el 40% de su tiempo en tareas de poco valor.</p>
                  </div>
                </div>
              </div>
            </NeonGradientCard>

            <NeonGradientCard borderSize={2} borderRadius={16} neonColors={{ firstColor: "#00FF94", secondColor: "#0094FF" }}>
              <div className="p-6 relative">
                <Pointer className="fill-[#00FF94]" />
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-[#00FF94]/10 flex-shrink-0">
                    <Globe className="w-6 h-6 text-[#00FF94]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-1">Web Desactualizada</h3>
                    <p className="text-[#666] text-sm">Tu sitio no convierte visitantes en clientes. Te está costando ventas.</p>
                  </div>
                </div>
              </div>
            </NeonGradientCard>

          </div>
          <FlowDiagram />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Clock3, stat: 40, suffix: "%", label: "del tiempo en tareas repetitivas", colors: { firstColor: "#00DFFF", secondColor: "#005FFF" }, color: "#00DFFF" },
            { icon: Zap, stat: 3, suffix: "x", label: "más leads con una web optimizada", colors: { firstColor: "#FF00D4", secondColor: "#00DFFF" }, color: "#FF00D4" },
            { icon: Unplug, stat: 70, suffix: "%", label: "de errores vienen de procesos manuales", colors: { firstColor: "#00FF94", secondColor: "#0094FF" }, color: "#00FF94" },
          ].map(({ icon: Icon, stat, suffix, label, colors, color }, i) => (
            <NeonGradientCard key={i} borderSize={2} borderRadius={16} neonColors={colors}>
              <div className="p-8 text-center relative">
                <Pointer style={{ fill: color }} />
                <div className="p-2 rounded-xl w-fit mx-auto mb-4" style={{ backgroundColor: `${color}15` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <p className="text-5xl font-bold mb-2">
  <span style={{ color }}>
    <NumberTicker value={stat} />
    {suffix}
  </span>
  </p>
                <p className="text-[#666] text-sm">{label}</p>
              </div>
            </NeonGradientCard>
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A0F1F] z-20 pointer-events-none" />
    </section>
  );
}