// app/components/ui/BuilderMockup.tsx

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { type PaletteOption } from "@/app/components/ui/builder.config"

type Props = {
  selectedWeb: Set<string>
  selectedAuto: Set<string>
  palette: PaletteOption
  businessName: string
  setBusinessName: (name: string) => void
}

const sectionVariants = {
  initial: { opacity: 0, y: -8, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -8, height: 0 },
}

function BrowserBar({ businessName, setBusinessName, accent }: {
  businessName: string
  setBusinessName: (n: string) => void
  accent: string
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 bg-[#13151b] flex-shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 flex-shrink-0" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 flex-shrink-0" />
      <div
        className="ml-2 flex-1 rounded flex items-center gap-1.5 px-2 py-1 bg-[#0A0F1F]"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
          <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1" className="text-[#888888]" />
          <path d="M5 1C5 1 3 3 3 5s2 4 2 4" stroke="currentColor" strokeWidth="1" className="text-[#888888]" />
          <path d="M1 5h8M1.5 3h7M1.5 7h7" stroke="currentColor" strokeWidth="0.8" className="text-[#888888]" />
        </svg>
        <input
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          className="flex-1 bg-transparent text-[10px] text-white outline-none min-w-0 placeholder-[#888888]/50"
          placeholder="tunegocio.com"
          style={{ caretColor: accent }}
        />
      </div>
    </div>
  )
}

export default function BuilderMockup({
  selectedWeb,
  selectedAuto,
  palette,
  businessName,
  setBusinessName,
}: Props) {
  const accent = palette.hex
  const has = (id: string) => selectedWeb.has(id) || selectedAuto.has(id)

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden bg-[#0A0F1F] flex flex-col h-full shadow-2xl">
      <BrowserBar
        businessName={businessName}
        setBusinessName={setBusinessName}
        accent={accent}
      />

      <div className="flex-1 overflow-y-auto">

        {/* Hero — siempre visible */}
        <div className="relative px-6 py-8 text-center border-b border-white/10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${accent} 0%, transparent 70%)`,
            }}
          />
          <motion.div
            key={accent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-bold text-base text-white mb-1">
              {businessName || "Tu negocio"}
            </p>
            <p className="text-[#888888] text-xs mb-4 max-w-[200px] mx-auto">
              Descripción breve de lo que ofreces a tus clientes
            </p>
            <div className="flex gap-2 justify-center">
              <span
                className="inline-block px-4 py-1.5 rounded-md text-white text-[11px] font-medium transition-colors duration-300"
                style={{ background: accent }}
              >
                Contáctanos
              </span>
              <span className="inline-block px-4 py-1.5 rounded-md text-[11px] font-medium border border-white/20 text-[#888888] hover:text-white transition-colors">
                Ver más
              </span>
            </div>
          </motion.div>
        </div>

        <AnimatePresence initial={false}>

          {/* Navbar simulado */}
          <motion.div
            key="navbar"
            className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#13151b]"
            style={{ fontSize: "9px", color: "#888888" }}
          >
            <span className="font-semibold text-white" style={{ color: accent }}>
              {businessName || "Logo"}
            </span>
            <div className="flex gap-3">
              <span className="hover:text-white transition-colors">Inicio</span>
              <span className="hover:text-white transition-colors">Servicios</span>
              {has("blog") && <span className="hover:text-white transition-colors">Blog</span>}
              <span className="hover:text-white transition-colors">Contacto</span>
            </div>
          </motion.div>

          {/* Servicios */}
          {has("servicios") && (
            <motion.div
              key="servicios"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-4 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-3 font-semibold"
                style={{ color: accent }}
              >
                Nuestros servicios
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["Servicio 1", "Servicio 2", "Servicio 3"].map((s, i) => (
                  <div
                    key={s}
                    className="rounded-lg p-2.5 border border-white/10 bg-[#13151b]"
                  >
                    <div
                      className="w-5 h-5 rounded mb-1.5"
                      style={{ background: `${accent}30` }}
                    />
                    <p className="font-semibold text-white text-[9px]">{s}</p>
                    <p className="text-[#888888] text-[8px] mt-0.5 leading-relaxed">
                      {["Descripción breve del servicio", "Lo que ofrecemos aquí", "Beneficio clave"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Galería */}
          {has("galeria") && (
            <motion.div
              key="galeria"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-4 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-3 font-semibold"
                style={{ color: accent }}
              >
                Portafolio
              </p>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-md border border-white/5"
                    style={{
                      background: i % 2 === 0
                        ? `${accent}15`
                        : "rgba(255,255,255,0.03)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Blog */}
          {has("blog") && (
            <motion.div
              key="blog"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-4 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-3 font-semibold"
                style={{ color: accent }}
              >
                Blog
              </p>
              <div className="space-y-2">
                {["Artículo reciente", "Novedades del sector"].map((t) => (
                  <div key={t} className="flex gap-2 items-start">
                    <div
                      className="w-10 h-8 flex-shrink-0 rounded border border-white/10"
                      style={{ background: `${accent}15` }}
                    />
                    <div>
                      <p className="font-semibold text-white text-[9px]">{t}</p>
                      <p className="text-[#888888] text-[8px] mt-0.5">
                        Resumen breve del artículo...
                      </p>
                      <p className="text-[8px] mt-0.5" style={{ color: accent }}>
                        Leer más →
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pagos */}
          {has("pagos") && (
            <motion.div
              key="pagos"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-3 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-2 font-semibold"
                style={{ color: accent }}
              >
                Pago seguro
              </p>
              <div className="flex gap-2 flex-wrap">
                {["Visa", "Mastercard", "PSE", "Wompi"].map((m) => (
                  <span
                    key={m}
                    className="text-[8px] px-2 py-0.5 rounded border border-white/10 text-[#888888] bg-[#13151b]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contacto */}
          {has("contacto") && (
            <motion.div
              key="contacto"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-4 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-3 font-semibold"
                style={{ color: accent }}
              >
                Contáctanos
              </p>
              <div className="space-y-1.5">
                <div className="h-5 rounded border border-white/10 bg-[#13151b] px-2 flex items-center">
                  <span className="text-[8px] text-[#888888]">Nombre</span>
                </div>
                <div className="h-5 rounded border border-white/10 bg-[#13151b] px-2 flex items-center">
                  <span className="text-[8px] text-[#888888]">Email</span>
                </div>
                <div className="h-8 rounded border border-white/10 bg-[#13151b] px-2 flex items-start pt-1">
                  <span className="text-[8px] text-[#888888]">Mensaje...</span>
                </div>
                <div
                  className="h-6 rounded flex items-center justify-center"
                  style={{ background: accent }}
                >
                  <span className="text-[9px] text-[#0A0F1F] font-bold">Enviar mensaje</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bot WhatsApp */}
          {has("bot-whatsapp") && (
            <motion.div
              key="bot"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="px-4 py-3 border-b border-white/10 overflow-hidden"
            >
              <p
                className="text-[9px] uppercase tracking-widest mb-2 font-semibold"
                style={{ color: accent }}
              >
                Asistente virtual
              </p>
              <div
                className="flex items-start gap-2 rounded-lg p-2.5"
                style={{ background: `${accent}10` }}
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: accent }}
                >
                  <span className="text-[#0A0F1F] font-bold text-[8px]">AI</span>
                </div>
                <div className="bg-[#13151b] border border-white/10 rounded-lg px-2 py-1.5">
                  <p className="text-white text-[9px]">
                    ¡Hola! ¿En qué te puedo ayudar hoy? 👋
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Estado vacío */}
          {selectedWeb.size <= 1 && selectedAuto.size === 0 && (
            <motion.div
              key="empty"
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="px-4 py-8 text-center text-[#888888] text-[10px]"
            >
              Selecciona opciones para ver el mockup
            </motion.div>
          )}

        </AnimatePresence>

        {/* Footer del mockup */}
        <div className="px-4 py-3 border-t border-white/10 bg-[#13151b] mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-semibold" style={{ color: accent }}>
              {businessName || "Tu negocio"}
            </span>
            <span className="text-[8px] text-[#888888]">
              © 2026 · Hecho con SerStack
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}