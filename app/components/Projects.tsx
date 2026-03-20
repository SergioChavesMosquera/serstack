import { Marquee } from "./ui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos M.",
    role: "Dueño de restaurante · Colombia",
    review: "SerStack nos automatizó el proceso de reservas y confirmaciones. Ahora no perdemos ni un cliente por falta de respuesta.",
    color: "#00DFFF",
  },
  {
    name: "Laura P.",
    role: "CEO · Startup de moda · México",
    review: "La landing page que nos hicieron convierte el doble que la anterior. En 10 días teníamos todo listo y funcionando.",
    color: "#FF00D4",
  },
  {
    name: "Andrés R.",
    role: "Freelancer · Argentina",
    review: "Me conectaron Notion, Gmail y WhatsApp en un solo flujo. Ahora mis clientes reciben seguimiento automático sin que yo haga nada.",
    color: "#00FF94",
  },
  {
    name: "Sofía V.",
    role: "Directora de marketing · España",
    review: "Rápidos, profesionales y con precios muy competitivos para el nivel de trabajo que entregan. Los recomiendo sin dudarlo.",
    color: "#00DFFF",
  },
  {
    name: "Miguel T.",
    role: "E-commerce · Perú",
    review: "Automatizaron nuestros reportes de ventas diarios. Lo que nos tomaba 2 horas ahora llega solo a las 8am en Slack.",
    color: "#FF00D4",
  },
  {
    name: "Valentina C.",
    role: "Consultora · Chile",
    review: "El sitio web quedó espectacular. Mis clientes siempre me preguntan quién me lo hizo. Sin duda vuelvo para más proyectos.",
    color: "#00FF94",
  },
];

const ReviewCard = ({ name, role, review, color }: typeof reviews[0]) => (
  <div className="relative w-80 mx-3 flex-shrink-0 group">
    {/* Rainbow border animado */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#00DFFF] via-[#FF00D4] to-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
    
    <div className="relative rounded-2xl bg-[#0D1526] p-6 flex flex-col gap-4 border border-[#1E2A3A]">
      {/* Línea superior rainbow siempre visible */}
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-[#00DFFF] via-[#FF00D4] to-[#00FF94]" />
      
      <div className="flex gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-current" style={{ color }} />
        ))}
      </div>
      <p className="text-[#888888] text-sm leading-relaxed">{`"${review}"`}</p>
      <div className="mt-auto pt-2 border-t border-[#1E2A3A]">
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-[#888888] text-xs mt-0.5">{role}</p>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0A0F1F] overflow-hidden">
      <div className="text-center mb-16 px-8">
        <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">Testimonios</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Lo que dicen <span className="text-[#00DFFF]">nuestros clientes.</span>
        </h2>
        <p className="text-[#888888] text-lg max-w-2xl mx-auto">
          Resultados reales de negocios que confiaron en SerStack.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:25s] mt-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name + "-reverse"} {...review} />
        ))}
      </Marquee>
    </section>
  )
}