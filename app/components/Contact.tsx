"use client";

import { RainbowButton } from "./ui/rainbow-button";
import { ShinyButton } from "./ui/shiny-button";
import { CoolMode } from "./ui/cool-mode";
import { Dock, DockIcon } from "./ui/dock";
import { TypingAnimation } from "./ui/typing-animation";
import { MessageCircle, Instagram, Music2, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0A0F1F] text-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#1E2A3A 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-8">
        <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">
          Contacto
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¿Listo para <span className="text-[#00DFFF]">crecer?</span>
        </h2>
        <p className="text-[#888888] text-lg max-w-xl mx-auto mb-10">
          Cuéntanos tu proyecto y te respondemos en menos de 24 horas. Sin compromisos.
        </p>

        <div className="flex flex-col items-center gap-4 mb-16">
          <CoolMode>
            <RainbowButton onClick={() => window.open("https://wa.me/573128036725", "_blank")}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Escríbenos por WhatsApp 🎉
            </RainbowButton>
          </CoolMode>

          <ShinyButton
            onClick={() => window.open("mailto:serstack.business@gmail.com", "_blank")}
            className="bg-[#0D1526] border border-[#1E2A3A] text-white"
          >
            <Mail className="w-4 h-4 mr-2 inline" />
            O escríbenos por email
          </ShinyButton>
        </div>

        {/* Frase con typing */}
        <div className="mb-12 py-8 border-t border-b border-[#1E2A3A]">
          <TypingAnimation
            className="text-2xl font-bold text-white"
            duration={50}
          >
            El mejor momento para automatizar tu negocio fue ayer.
          </TypingAnimation>
          <p className="text-2xl font-bold text-[#00DFFF] mt-2">
            <TypingAnimation>
            El segundo mejor es hoy. 🚀
            </TypingAnimation>
          </p>
        </div>

        {/* Dock */}
        <div>
          <p className="text-[#888888] text-sm mb-6 uppercase tracking-widest">Síguenos</p>
          <Dock className="bg-[#0D1526] border border-[#1E2A3A] mx-auto">
            <DockIcon>
              <a href="https://instagram.com/ser_stack" target="_blank" className="flex items-center justify-center w-full h-full">
                <Instagram className="w-5 h-5 text-[#888888] hover:text-[#00DFFF] transition-colors" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://tiktok.com/@serstack" target="_blank" className="flex items-center justify-center w-full h-full">
                <Music2 className="w-5 h-5 text-[#888888] hover:text-[#00DFFF] transition-colors" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://wa.me/573128036725" target="_blank" className="flex items-center justify-center w-full h-full">
                <MessageCircle className="w-5 h-5 text-[#888888] hover:text-[#00DFFF] transition-colors" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="mailto:serstack.business@gmail.com" className="flex items-center justify-center w-full h-full">
                <Mail className="w-5 h-5 text-[#888888] hover:text-[#00DFFF] transition-colors" />
              </a>
            </DockIcon>
            <DockIcon>
              <a href="https://t.me/serstack" target="_blank" className="flex items-center justify-center w-full h-full">
                <Send className="w-5 h-5 text-[#888888] hover:text-[#00DFFF] transition-colors" />
              </a>
            </DockIcon>
          </Dock>
        </div>
      </div>
    </section>
  )
}