import { NeonGradientCard } from "./ui/neon-gradient-card";
import { Pointer } from "./ui/pointer";
import { MessageCircle, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    iconColor: "#00DFFF",
    title: "Nos cuentas tu proyecto",
    description: "Escríbenos por WhatsApp o el formulario. En menos de 24h te respondemos con preguntas clave.",
    neonColors: { firstColor: "#00DFFF", secondColor: "#005FFF" },
  },
  {
    number: "02",
    icon: FileText,
    iconColor: "#FF00D4",
    title: "Te enviamos una propuesta",
    description: "Recibes un plan claro con alcance, tiempos y precio. Sin letra pequeña.",
    neonColors: { firstColor: "#FF00D4", secondColor: "#00DFFF" },
  },
  {
    number: "03",
    icon: Code2,
    iconColor: "#00FF94",
    title: "Desarrollamos con updates",
    description: "Trabajamos en sprints cortos y te mostramos avances reales. Tú siempre sabes qué está pasando.",
    neonColors: { firstColor: "#00FF94", secondColor: "#0094FF" },
  },
  {
    number: "04",
    icon: Rocket,
    iconColor: "#FFB800",
    title: "Entregamos y te acompañamos",
    description: "Lanzamos tu proyecto y te damos soporte post-entrega. No desaparecemos después del pago.",
    neonColors: { firstColor: "#FFB800", secondColor: "#FF00D4" },
  },
];

export default function Solution() {
  return (
    <section id="solution" className="px-8 pt-24 pb-0 bg-[#0A0F1F] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(#1E2A3A 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#00DFFF] font-semibold tracking-widest uppercase text-sm mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, claro y sin sorpresas.
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            De la idea al producto en 4 pasos. Así trabajamos con cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(({ number, icon: Icon, iconColor, title, description, neonColors }) => (
            <NeonGradientCard key={number} borderSize={2} borderRadius={20} neonColors={neonColors}>
              <div className="p-6 flex flex-col gap-4 relative">
                <Pointer style={{ fill: iconColor }} />
                <span className="text-5xl font-black opacity-10 text-white leading-none">{number}</span>
                <div className="p-2 rounded-xl w-fit" style={{ backgroundColor: `${iconColor}15` }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="text-neutral-900 font-bold text-lg leading-tight">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{description}</p>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
      <section id="solution" className="px-8 pt-24 pb-0 bg-[#0A0F1F] relative overflow-hidden"></section>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0A0F1F] z-20 pointer-events-none" />
    </section>
  )
}