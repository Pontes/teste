import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Portfolio() {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      category: "Sistema Web",
      description: "ERP completo para gestão de vendas, estoque e financeiro desenvolvido em React e Node.js.",
      image: "/business-management-dashboard.png",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    },
    {
      title: "App de Delivery",
      category: "Mobile App",
      description: "Aplicativo mobile para delivery de comida com sistema de pagamento integrado.",
      image: "/food-delivery-app.png",
      technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    },
    {
      title: "E-commerce Fashion",
      category: "E-commerce",
      description: "Loja virtual completa com catálogo de produtos, carrinho de compras e área administrativa.",
      image: "/fashion-ecommerce-website.png",
      technologies: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Portal Educacional",
      category: "Sistema Web",
      description: "Plataforma de ensino online com videoaulas, exercícios e acompanhamento de progresso.",
      image: "/educational-platform-interface.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    },
    {
      title: "App Financeiro",
      category: "Mobile App",
      description: "Aplicativo para controle financeiro pessoal com gráficos e relatórios detalhados.",
      image: "/financial-mobile-app-dashboard.png",
      technologies: ["Flutter", "Firebase", "Chart.js", "SQLite"],
    },
    {
      title: "Sistema de Agendamento",
      category: "Sistema Web",
      description: "Plataforma para agendamento de consultas médicas com integração de calendário.",
      image: "/medical-appointment-system.png",
      technologies: ["Angular", "Spring Boot", "MongoDB", "Docker"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-500 font-semibold text-lg mb-4">PORTFÓLIO</div>
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Projetos que
            <span className="text-cyan-500 block">Transformaram Negócios</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes a alcançar seus objetivos
            através da tecnologia.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-800 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <Button size="sm" variant="secondary" className="bg-white text-slate-800">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-cyan-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-slate-600 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white bg-transparent"
          >
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
