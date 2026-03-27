"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { RainbowButton } from "./ui/rainbow-button"

// 1. Actualizamos los links para reflejar el orden real de page.tsx
const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#solution", label: "Proceso" },
  { href: "#services", label: "Servicios" },
  { href: "#builder", label: "Cotizador" }, // Nueva sección
  { href: "#projects", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      // Cambio de estado al hacer scroll
      setScrolled(window.scrollY > 20)

      // Lógica de Active Link (Scroll Spy)
      const scrollPosition = window.scrollY + 120 // Offset para detectar mejor el cambio
      
      const currentSection = links.find(link => {
        const el = document.getElementById(link.href.replace("#", ""))
        if (el) {
          const offsetTop = el.offsetTop
          const offsetHeight = el.offsetHeight
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight
        }
        return false
      })

      if (currentSection) {
        setActive(currentSection.href)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-3 backdrop-blur-md transition-all duration-500 ${
      scrolled 
        ? "bg-[#0A0F1F]/90 border-b border-[#1E2A3A] shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3 group">
          <div className="relative">
            <Image 
              src="/Dark.png" 
              alt="SerStack Logo" 
              width={40} 
              height={40} 
              className="group-hover:rotate-12 transition-transform duration-500 ease-out" 
            />
            {/* Pequeño resplandor tras el logo */}
            <div className="absolute inset-0 bg-[#00DFFF] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </div>
          <a href="#hero" className="text-white font-bold text-xl tracking-tighter hover:text-[#00DFFF] transition-colors duration-300">
            SerStack
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[13px] font-semibold tracking-wide uppercase">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href} 
                className={`relative py-2 transition-all duration-300 group ${
                  active === href ? "text-[#00DFFF]" : "text-[#888888] hover:text-white"
                }`}
              >
                {label}
                {/* Indicador inferior (Subrayado) */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#00DFFF] rounded-full shadow-[0_0_8px_#00DFFF] transition-all duration-500 ${
                  active === href ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Botón de Acción */}
        <div className="flex items-center gap-4">
          <a href="#contact">
            <RainbowButton className="h-10 px-6 text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
              Contáctanos
            </RainbowButton>
          </a>
        </div>
      </div>
    </nav>
  )
}