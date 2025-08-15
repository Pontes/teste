import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative bg-slate-800 text-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Desenvolvimento de
                <span className="text-cyan-400 block">Sistemas Completos</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Transformamos suas ideias em soluções tecnológicas inovadoras. Desenvolvimento web, mobile e sistemas
                personalizados para impulsionar seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent"
              >
                Ver Portfólio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-600">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-slate-300">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-slate-300">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-slate-300">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <Code className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Desenvolvimento Web</h3>
                  <p className="text-sm text-slate-300">Sites e sistemas web modernos e responsivos</p>
                </div>
                <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <Smartphone className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Apps Mobile</h3>
                  <p className="text-sm text-slate-300">Aplicativos nativos e híbridos</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
                  <Globe className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="font-semibold mb-2">Sistemas Personalizados</h3>
                  <p className="text-sm text-slate-300">Soluções sob medida para seu negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
