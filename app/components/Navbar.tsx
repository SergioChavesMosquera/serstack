"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { RainbowButton } from "./ui/rainbow-button"

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Testimonios" },
  { href: "#solution", label: "Proceso" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map(l => l.href.replace("#", ""))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${section}`)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`flex justify-between items-center px-8 py-3 sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-[#0A0F1F]/95 border-b border-[#1E2A3A] shadow-lg shadow-black/20" : "bg-[#0A0F1F]/60 border-b border-transparent"}`}>

      <div className="flex items-center gap-3">
        <Image src="/Dark.png" alt="SerStack Logo" width={45} height={45} className="hover:rotate-6 transition-transform duration-300" />
        <a href="#hero" className="text-white font-bold text-xl tracking-tight hover:text-[#00DFFF] transition-colors">SerStack</a>
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={`relative py-1 transition-colors duration-200 group ${active === href ? "text-[#00DFFF]" : "text-[#888888] hover:text-white"}`}>
              {label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#00DFFF] rounded-full transition-all duration-300 ${active === href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact">
        <RainbowButton className="h-9 px-6 text-sm font-semibold">
          Contáctanos
        </RainbowButton>
      </a>
    </nav>
  )
}