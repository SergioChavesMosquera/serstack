import { NeonGradientCard } from "./ui/neon-gradient-card";
import { Pointer } from "./ui/pointer";
import { Terminal, Globe, Cpu, Check } from "lucide-react";

const services = [
  {
    icon: Cpu,
    iconColor: "#FF00D4",
    title: "n8n Automation",
    description: "Conectamos tus herramientas y automatizamos flujos que hoy haces a mano.",
    features: [
      "Automatización de emails y notificaciones",
      "Integración entre CRM, Sheets y Slack",
      "Flujos de onboarding de clientes",
      "Reportes automáticos y alertas",
      "Soporte y ajustes por 30 días",
    ],
    price: "Desde $150 USD",
    neonColors: { firstColor: "#FF00D4", secondColor: "#00DFFF" },
    pointerColor: "#FF00D4",
  },
  {
    icon: Terminal,
    iconColor: "#00FF94",
    title: "Arquitectura IT",
    description: "Diseñamos la infraestructura técnica de tu negocio para que todo funcione junto.",
    features: [
      "Auditoría de sistemas y herramientas actuales",
      "Diseño de flujo de datos entre plataformas",
      "Configuración de bases de datos y APIs",
      "Documentación técnica completa",
      "Consultoría mensual disponible",
    ],
    price: "Desde $200 USD",
    neonColors: { firstColor: "#00FF94", secondColor: "#0094FF" },
    pointerColor: "#00FF94",
  },
  {
    icon: Globe,
    iconColor: "#00DFFF",
    title: "Web & App Dev",
    description: "Sitios y apps rápidas, modernas y optimizadas para convertir visitantes en clientes.",
    features: [
      "Landing pages y sitios corporativos",
      "Apps web con React y Next.js",
      "Integración con Firebase o cualquier backend",
      "Diseño responsive y optimizado para SEO",
      "Entrega en 7-14 días hábiles",
    ],
    price: "Desde $300 USD",
    neonColors: { firstColor: "#00DFFF", secondColor: "#005FFF" },
    pointerColor: "#00DFFF",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-16 pb-24 bg-[#0A0F1F] px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">Servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soluciones que no duermen.
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            Cada servicio está diseñado para darte resultados reales — no solo código bonito.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, iconColor, title, description, features, price, neonColors, pointerColor }) => (
            <NeonGradientCard
              key={title}
              borderSize={2}
              borderRadius={20}
              neonColors={neonColors}
              className="h-full"
            >
              <div className="p-8 flex flex-col h-full relative">
                <Pointer style={{ fill: pointerColor }} />

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: `${iconColor}15` }}>
                    <Icon className="w-7 h-7" style={{ color: iconColor }} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{description}</p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-200 mb-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: iconColor }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-auto">
                  <p className="text-2xl font-bold mb-4" style={{ color: iconColor }}>{price}</p>
                  <a
                    href="#contact"
                    className="block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all hover:opacity-90"
                    style={{ backgroundColor: iconColor, color: "#0A0F1F" }}
                  >
                    Solicitar este servicio
                  </a>
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>

        {/* Trust line */}
        <p className="text-center text-[#888888] text-sm mt-12">
          💬 ¿No sabes cuál necesitas?{" "}
          <a href="#contact" className="text-[#00DFFF] hover:underline">
            Escríbenos y te asesoramos gratis.
          </a>
        </p>

      </div>
    </section>
  );
}