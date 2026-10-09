import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenExportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenExportModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#111215]/95 backdrop-blur-md border-b border-[#242730]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Wordmark Brand */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Architectural House / Roof Logo Motif from photo */}
            <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#1C1E24] to-[#121316] border border-[#F5B800]/50 rounded-lg shadow-sm group-hover:border-[#F5B800] transition-colors">
              <svg
                viewBox="0 0 40 40"
                className="w-8 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Roof silhouette */}
                <path
                  d="M6 22L20 9L34 22"
                  stroke="#F5B800"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 14V10H30V18"
                  stroke="#F5B800"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* DA monogram */}
                <text
                  x="11"
                  y="27"
                  fill="#FFFFFF"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="Montserrat, sans-serif"
                >
                  D
                </text>
                <text
                  x="20"
                  y="27"
                  fill="#F5B800"
                  fontSize="12"
                  fontWeight="900"
                  fontFamily="Montserrat, sans-serif"
                >
                  A
                </text>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#F5B800] transition-colors whitespace-nowrap">
                DA <span className="text-[#F5B800]">CONSTRUCTION</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
                Од рушење до готов простор
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-[#F5B800] transition-colors whitespace-nowrap shrink-0">
              Услуги
            </a>
            <a href="#projects" className="hover:text-[#F5B800] transition-colors whitespace-nowrap shrink-0">
              Проекти
            </a>
            <a href="#calculator" className="hover:text-[#F5B800] transition-colors whitespace-nowrap shrink-0">
              Калкулатор
            </a>
            <a href="#process" className="hover:text-[#F5B800] transition-colors whitespace-nowrap shrink-0">
              Процес
            </a>
            <a href="#contact" className="hover:text-[#F5B800] transition-colors whitespace-nowrap shrink-0">
              Контакт
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenExportModal && (
              <button
                type="button"
                onClick={onOpenExportModal}
                className="px-3 py-2 text-xs font-semibold text-slate-300 bg-[#1A1D23] hover:bg-[#252932] border border-slate-700/80 rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                title="Преглед на чист HTML/CSS за GitHub Pages"
              >
                <span>GitHub.io Код</span>
              </button>
            )}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-[#F5B800] hover:bg-[#E0A400] rounded-md transition-all shadow-sm hover:shadow-md hover:shadow-[#F5B800]/20 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Отвори мени"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#242730] flex flex-col gap-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
            >
              Услуги
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
            >
              Проекти
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
            >
              Калкулатор за проценка
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
            >
              Како работиме
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
            >
              Контакт & Бесплатна понуда
            </a>
            {onOpenExportModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExportModal();
                }}
                className="text-left px-3 py-2 text-sm font-medium text-[#F5B800] hover:bg-[#1A1D23] rounded-md"
              >
                Чист HTML/CSS код за GitHub Pages
              </button>
            )}
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full py-2.5 text-center text-sm font-bold text-slate-950 bg-[#F5B800] hover:bg-[#E0A400] rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Повикај веднаш: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
