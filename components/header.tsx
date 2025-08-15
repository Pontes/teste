"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+55 (11) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@pontesti.com.br</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Siga-nos:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400">
                LinkedIn
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400">
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-slate-800">pontes</span>
                <span className="text-cyan-500">T.I.</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-slate-700 hover:text-cyan-500 font-medium transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-slate-700 hover:text-cyan-500 font-medium transition-colors">
                Sobre Nós
              </a>
              <a href="#servicos" className="text-slate-700 hover:text-cyan-500 font-medium transition-colors">
                Serviços
              </a>
              <a href="#portfolio" className="text-slate-700 hover:text-cyan-500 font-medium transition-colors">
                Portfólio
              </a>
              <a href="#contato" className="text-slate-700 hover:text-cyan-500 font-medium transition-colors">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Solicitar Orçamento</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-slate-700 hover:text-cyan-500 font-medium">
                  Início
                </a>
                <a href="#sobre" className="text-slate-700 hover:text-cyan-500 font-medium">
                  Sobre Nós
                </a>
                <a href="#servicos" className="text-slate-700 hover:text-cyan-500 font-medium">
                  Serviços
                </a>
                <a href="#portfolio" className="text-slate-700 hover:text-cyan-500 font-medium">
                  Portfólio
                </a>
                <a href="#contato" className="text-slate-700 hover:text-cyan-500 font-medium">
                  Contato
                </a>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white w-full mt-4">Solicitar Orçamento</Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
