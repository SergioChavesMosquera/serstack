// app/components/ui/builder.config.ts

export type OptionItem = {
  id: string
  name: string
  desc: string
  priceUSD: number
  mockKey?: string
}

export type PaletteOption = {
  id: string
  label: string
  hex: string
}

export const BASE_PRICE_USD = 150
export const COP_RATE = 4000

export const WEB_SECTIONS: OptionItem[] = [
  {
    id: "hero",
    name: "Hero / portada",
    desc: "Título, subtítulo y llamado a acción principal",
    priceUSD: 0,
    mockKey: "hero",
  },
  {
    id: "servicios",
    name: "Sección de servicios",
    desc: "Tarjetas con tus productos o servicios",
    priceUSD: 20,
    mockKey: "servicios",
  },
  {
    id: "galeria",
    name: "Galería / portafolio",
    desc: "Grid de fotos o trabajos realizados",
    priceUSD: 15,
    mockKey: "galeria",
  },
  {
    id: "contacto",
    name: "Formulario de contacto",
    desc: "Recibe mensajes directo al correo",
    priceUSD: 12,
    mockKey: "contacto",
  },
  {
    id: "blog",
    name: "Blog / noticias",
    desc: "Publicar artículos para posicionamiento SEO",
    priceUSD: 22,
    mockKey: "blog",
  },
]

export const WEB_FEATURES: OptionItem[] = [
  {
    id: "pagos",
    name: "Pagos en línea",
    desc: "Integración con Wompi, PayU o Stripe",
    priceUSD: 38,
    mockKey: "pagos",
  },
  {
    id: "bd",
    name: "Base de datos + panel admin",
    desc: "Panel para gestionar contenido y clientes",
    priceUSD: 50,
    mockKey: "bd",
  },
  {
    id: "hosting",
    name: "Hosting + dominio",
    desc: "Despliegue y dominio .com por 1 año incluido",
    priceUSD: 20,
    mockKey: "hosting",
  },
  {
    id: "chat",
    name: "Chat en vivo",
    desc: "Botón de WhatsApp o chat integrado en la web",
    priceUSD: 18,
    mockKey: "chat",
  },
]

export const AUTO_OPTIONS: OptionItem[] = [
  {
    id: "bot-whatsapp",
    name: "Bot de WhatsApp",
    desc: "Responde preguntas frecuentes, agenda citas y confirma pedidos automáticamente",
    priceUSD: 45,
    mockKey: "bot",
  },
  {
    id: "reservas",
    name: "Sistema de reservas",
    desc: "Agenda citas y envía recordatorios por WhatsApp o email",
    priceUSD: 38,
  },
  {
    id: "crm",
    name: "CRM automático",
    desc: "Guarda leads del formulario en Google Sheets o Notion automáticamente",
    priceUSD: 30,
  },
  {
    id: "email-mkt",
    name: "Email marketing",
    desc: "Secuencias automáticas para nuevos clientes o carritos abandonados",
    priceUSD: 32,
  },
  {
    id: "resenas",
    name: "Solicitud de reseñas",
    desc: "Después de cada compra pide reseña automáticamente en Google Maps",
    priceUSD: 25,
  },
]

export const PALETTES: PaletteOption[] = [
  { id: "cian", label: "Cian", hex: "#00DFFF" }, // Por defecto
  { id: "magenta", label: "Magenta", hex: "#FF00D4" },
  { id: "verde", label: "Verde Neón", hex: "#00FF94" },
  { id: "rojo", label: "Rojo Fuego", hex: "#FF3B3B" }, // Nuevo
  { id: "azul", label: "Azul Eléctrico", hex: "#3B82F6" }, // Nuevo 
  { id: "naranja", label: "Naranja Atardecer", hex: "#F97316" }, // El de tu imagen actual
  { id: "gris", label: "Gris Cemento", hex: "#6B7280" },
];

export const DEFAULT_SELECTED_WEB = new Set<string>(["hero", "servicios"])
export const DEFAULT_PALETTE = PALETTES[0]