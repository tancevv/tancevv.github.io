import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, CheckCircle, ArrowRight, Shield, Award, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting and subtle wood slat texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B800]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C88D4D]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & Information (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline / Subtitle in script font like in the photo */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-script text-2xl sm:text-3xl text-[#F5B800] tracking-wide rotate-[-1deg] inline-block">
                {COMPANY_INFO.motto1}
              </span>
              <div className="h-[1px] w-12 bg-[#F5B800]/40 hidden sm:block" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance mb-5">
              ОД РУШЕЊЕ ДО <span className="text-[#F5B800] underline decoration-[#F5B800]/40 decoration-4 underline-offset-4">ГОТОВ ПРОСТОР</span>
            </h1>

            {/* Clear Value Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Комплетни решенија за реновирање на станови, куќи и деловни простории во <strong>Скопје и околината</strong>. 
              Од уредно рушење и одвоз на шут, до рамни ѕидови, премиум фасади и завршни финеси без стрес.
            </p>

            {/* 3 Core Trust Pillars directly from the circular badge in the photo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="flex items-center gap-2.5 p-2.5 bg-[#171920] border border-[#272B38] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#F5B800]/10 flex items-center justify-center text-[#F5B800] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  Професионален пристап
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-[#171920] border border-[#272B38] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#F5B800]/10 flex items-center justify-center text-[#F5B800] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  Квалитетна изработка
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 bg-[#171920] border border-[#272B38] rounded-md">
                <div className="w-5 h-5 rounded-full bg-[#F5B800]/10 flex items-center justify-center text-[#F5B800] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  Проценка на лице место
                </span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#F5B800] hover:bg-[#E0A400] text-slate-950 font-bold rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-[#F5B800]/25 flex items-center justify-center gap-2 text-base text-center"
              >
                <span>Побарајте бесплатна понуда</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-[#1A1D24] hover:bg-[#232731] border border-[#303646] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-base text-center"
              >
                <Phone className="w-4 h-4 text-[#F5B800]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Quick trust note */}
            <p className="text-xs text-slate-400">
              * Доаѓаме на терен во Скопје и околината за мерење и советување без никакви скриени обврски.
            </p>
          </div>

          {/* Right Column: Architectural Acrylic Plaque Showcase (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing Wood-Slat Texture panel */}
              <div className="absolute -inset-2 bg-wood-slats rounded-2xl opacity-70 blur-[1px] -z-10" />

              {/* Gloss Acrylic Plaque Frame with Gold Standoffs (screws) */}
              <div className="relative bg-[#15171D]/95 border border-[#323746] rounded-xl shadow-2xl p-4 sm:p-5 backdrop-blur-md">
                
                {/* 4 Corner Gold Standoff Screws like the physical boards */}
                <div className="plaque-screw absolute top-3 left-3" />
                <div className="plaque-screw absolute top-3 right-3" />
                <div className="plaque-screw absolute bottom-3 left-3" />
                <div className="plaque-screw absolute bottom-3 right-3" />

                {/* Hero Showcase Photography */}
                <div className="relative overflow-hidden rounded-lg border border-[#2D3342] mb-4 group aspect-[16/10]">
                  <img
                    src="/src/assets/images/hero_luxury_villa_1791556850783.jpg"
                    alt="Модерна куќа реновирана од DA Construction"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4">
                    <span className="font-script text-xl sm:text-2xl text-[#F5B800] leading-none mb-1">
                      {COMPANY_INFO.motto1}
                    </span>
                    <span className="text-xs text-slate-200 font-medium">
                      Комплетна изведба на надворешност, столарија и амбиент
                    </span>
                  </div>
                </div>

                {/* Yellow Highlight Banner directly modeled on the photo */}
                <div className="bg-[#F5B800] text-slate-950 p-4 rounded-lg shadow-inner">
                  <div className="flex items-center justify-between gap-2 border-b border-black/20 pb-2 mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-black">
                      Контактирајте нè за:
                    </span>
                    <span className="text-[11px] font-bold bg-black text-[#F5B800] px-2 py-0.5 rounded">
                      БЕСПЛАТНО
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase leading-tight tracking-tight text-slate-950 mb-2">
                    Бесплатна проценка и понуда!
                  </h3>
                  <div className="flex items-center justify-between">
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 text-base sm:text-lg font-black text-slate-950 hover:underline"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>{COMPANY_INFO.phone}</span>
                    </a>
                    <span className="text-xs font-bold text-slate-900 uppercase">
                      Скопје и околината
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
