"use client";

import { RainbowButton } from "./ui/rainbow-button";
import { ChevronRight } from "lucide-react";
import { SparklesText } from "./ui/sparkles-text";
// Ya no importamos SparklesText

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0A0F1F] px-4 pt-16">
      
      {/* Fondo con CSS puro */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#1E2A3A 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00DFFF]/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Badge de especialidad con pulso */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E2A3A] bg-[#0D1526] px-4 py-1.5 text-sm font-medium text-[#00DFFF]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00DFFF]"></span>
          </span>
          Expertos en desarrollo web & Automatización con IA
        </div>

        {/* Título Principal Corregido con Gradiente de Color */}
        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl leading-tight">
  Escalamos tu <br />
  
  <div className="relative inline-block mt-4 overflow-visible">
    <SparklesText 
      // QUITAMOS el prop 'text' que daba error
      className="text-[#00DFFF] text-5xl md:text-7xl lg:text-8xl font-black relative z-50 block" 
      sparklesCount={12}
    >
      Negocio Digital
    </SparklesText>
  </div>
</h1>

        {/* Subtítulo */}
        <p className="mt-8 max-w-2xl text-lg text-[#888888] md:text-xl font-medium">
          Creamos <span className="text-white font-semibold">Aplicaciones Web</span> de alto impacto y <span className="text-white font-semibold">Flujos de Trabajo</span> que trabajan por ti.
        </p>

        {/* Botones de Acción */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#contact">
            <RainbowButton className="h-14 px-10 text-lg font-bold">
              Agenda una Demo
            </RainbowButton>
          </a>
          
          <a href="#projects" className="group flex items-center gap-2 text-[#888888] hover:text-white transition-colors font-medium">
            Ver Proyectos
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Gradiente de salida */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F1F] to-transparent"></div>
    </section>
  );
}