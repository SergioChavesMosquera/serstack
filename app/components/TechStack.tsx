"use client";

import React from "react";
// Importamos los componentes de UI (revisa que las rutas coincidan con tu carpeta)
import { IconCloud } from "./ui/icon-cloud";
// Importamos los iconos de Lucide que vamos a usar
import { ChevronRight } from "lucide-react";
// Importamos SparklesText para que no dé error
import { SparklesText } from "./ui/sparkles-text";

const techImages = [
  // Generamos URLs directas a los iconos en color cian (hex: 00DFFF)
  "https://cdn.simpleicons.org/python",
  "https://cdn.simpleicons.org/fastapi",
  "https://cdn.simpleicons.org/n8n",
  "https://cdn.simpleicons.org/react",
  "https://cdn.simpleicons.org/nextdotjs/white", // Forzamos blanco porque Next es negro
  "https://cdn.simpleicons.org/vercel/white",   // Forzamos blanco porque Vercel es negro
  "https://cdn.simpleicons.org/firebase",
  "https://cdn.simpleicons.org/postgresql",
  "https://cdn.simpleicons.org/docker",
  "https://cdn.simpleicons.org/tailwindcss",
  "https://cdn.simpleicons.org/typescript",
  "https://cdn.simpleicons.org/javascript",
  "https://cdn.simpleicons.org/openai/white",
  "https://cdn.simpleicons.org/html",
  "https://cdn.simpleicons.org/css",
  "https://cdn.simpleicons.org/claude",
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 bg-[#0A0F1F] px-8 relative overflow-hidden">
      
      {/* Fondo con CSS puro */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#1E2A3A 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Contenido de Texto */}
          <div>
            <h2 className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">Arquitectura</h2>
            <div className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
              Tu tecnología es{" "}
              <SparklesText 
                className="inline text-[#00DFFF]" 
                sparklesCount={12}
              >
                nuestro
              </SparklesText>{" "}
              stack.
            </div>
            <p className="text-xl text-[#888888] mb-12 max-w-lg leading-relaxed font-medium">
              En SerStack no improvisamos. Usamos las herramientas líderes del mercado para garantizar eficiencia, escalabilidad y seguridad en cada proyecto de automatización y desarrollo.
            </p>
            
            {/* CTA Secundario */}
            <a href="#contact" className="group flex items-center gap-2 text-white hover:text-[#00DFFF] transition-colors font-semibold text-lg">
              Solicitar Demo Técnica
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* PIEZA CENTRAL: El Icon Cloud */}
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden">
            {/* IMPORTANTE: Cambiamos 'iconSlugs' por 'images' 
              y le pasamos la nueva lista de URLs.
            */}
            <IconCloud images={techImages} />
          </div>

        </div>
      </div>
    </section>
  );
}