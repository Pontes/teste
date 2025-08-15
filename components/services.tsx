import { Code, Smartphone, Globe, Database, Shield, Cog } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description:
        "Sites institucionais, e-commerce, sistemas web e aplicações responsivas utilizando as mais modernas tecnologias.",
      features: ["React/Next.js", "Node.js", "PHP/Laravel", "WordPress"],
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Desenvolvimento de apps nativos e híbridos para iOS e Android com foco na experiência do usuário.",
      features: ["React Native", "Flutter", "iOS Nativo", "Android Nativo"],
    },
    {
      icon: Database,
      title: "Sistemas Personalizados",
      description: "Desenvolvimento de sistemas sob medida para atender às necessidades específicas do seu negócio.",
      features: ["ERP/CRM", "APIs REST", "Integrações", "Automação"],
    },
    {
      icon: Globe,
      title: "Consultoria em TI",
      description:
        "Análise e planejamento de soluções tecnológicas para otimizar processos e aumentar a produtividade.",
      features: ["Arquitetura", "Cloud Computing", "DevOps", "Segurança"],
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Implementação de medidas de segurança para proteger seus dados e sistemas contra ameaças.",
      features: ["SSL/HTTPS", "Backup", "Monitoramento", "Compliance"],
    },
    {
      icon: Cog,
      title: "Manutenção e Suporte",
      description: "Suporte técnico contínuo, atualizações e manutenção preventiva para seus sistemas.",
      features: ["Suporte 24/7", "Atualizações", "Monitoramento", "Backup"],
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-500 font-semibold text-lg mb-4">NOSSOS SERVIÇOS</div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Oferecemos uma Ampla
            <span className="text-cyan-500 block">Variedade de Serviços de TI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções completas em tecnologia da informação para impulsionar seu negócio e manter você sempre à frente da
            concorrência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-800 transition-colors">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </div>
    </section>
  )
}
