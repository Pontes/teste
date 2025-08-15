import { CheckCircle, Users, Target, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-cyan-500 font-semibold text-lg">SOBRE NÓS</div>
              <h2 className="text-4xl font-bold text-slate-800">
                Seu Parceiro na Inovação
                <span className="text-cyan-500 block">Utilizando Tecnologia</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Somos uma empresa especializada em desenvolvimento de software, comprometida em entregar soluções
                tecnológicas que transformam negócios. Nossa equipe combina experiência técnica com visão estratégica
                para criar sistemas que realmente fazem a diferença.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Metodologia Ágil</h4>
                  <p className="text-slate-600">
                    Desenvolvimento iterativo com entregas frequentes e feedback contínuo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Tecnologias Modernas</h4>
                  <p className="text-slate-600">
                    Utilizamos as mais recentes tecnologias e melhores práticas do mercado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Suporte Contínuo</h4>
                  <p className="text-slate-600">Acompanhamento e manutenção para garantir o sucesso do seu projeto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
              <Users className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="font-bold text-slate-800 mb-2">Equipe Especializada</h3>
              <p className="text-slate-600 text-sm">
                Profissionais experientes e certificados nas principais tecnologias do mercado
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-slate-800">
              <Target className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-slate-800 mb-2">Foco em Resultados</h3>
              <p className="text-slate-600 text-sm">
                Cada projeto é desenvolvido com foco nos objetivos e metas do cliente
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
              <Lightbulb className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="font-bold text-slate-800 mb-2">Inovação Constante</h3>
              <p className="text-slate-600 text-sm">
                Sempre buscando novas soluções e tecnologias para otimizar processos
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-slate-800">
              <CheckCircle className="w-10 h-10 text-slate-800 mb-4" />
              <h3 className="font-bold text-slate-800 mb-2">Qualidade Garantida</h3>
              <p className="text-slate-600 text-sm">
                Rigorosos testes e controle de qualidade em todas as etapas do desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
