import React, { useState } from 'react';
import { CORE_SERVICES, SPECIFIC_SERVICES, ServiceItem } from '../data/content';
import {
  Building2,
  Layers,
  Sparkles,
  Home,
  Hammer,
  Truck,
  Paintbrush,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (name: string) => {
    const props = { className: "w-6 h-6 text-[#F5B800]" };
    switch (name) {
      case 'Building2': return <Building2 {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Hammer': return <Hammer {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Paintbrush': return <Paintbrush {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#111215] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-[#F5B800] tracking-wider uppercase">
              ОД РУШЕЊЕ ДО ГОТОВ ПРОСТОР
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Комплетни градежни фази</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Специјализирани услуги за реновирање
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Располагаме со комплетна опрема, стручни мајстори и сопствен транспорт за шут. 
            Секоја фаза се изведува со прецизност, договор и гарантиран квалитет.
          </p>
        </div>

        {/* 2-Plaque Layout inspired by the wall plaques in the image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Plaque 1: Главни изведбени работи (Left 6 cols) */}
          <div className="lg:col-span-6 bg-[#16181E] border border-[#2B303E] rounded-xl p-6 sm:p-7 relative shadow-xl">
            {/* 4 Corner Screws for acrylic aesthetic */}
            <div className="plaque-screw absolute top-3 left-3" />
            <div className="plaque-screw absolute top-3 right-3" />
            <div className="plaque-screw absolute bottom-3 left-3" />
            <div className="plaque-screw absolute bottom-3 right-3" />

            <div className="flex items-center justify-between border-b border-[#2B303E] pb-4 mb-6 pt-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">
                  Фаза 01 · Главни градежни работи
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  Санација, ѕидови & реновирање
                </h3>
              </div>
              <div className="hidden sm:block text-right">
                <span className="text-xs text-slate-400">4 клучни системи</span>
              </div>
            </div>

            <div className="space-y-4">
              {CORE_SERVICES.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  className="group p-4 bg-[#1B1E26] hover:bg-[#222631] border border-[#2B303E] hover:border-[#F5B800]/50 rounded-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#242834] group-hover:bg-[#2C3242] border border-[#373E50] flex items-center justify-center shrink-0 transition-colors">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white group-hover:text-[#F5B800] transition-colors">
                          {item.title}
                        </h4>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#F5B800] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                        {item.details.slice(0, 2).map((detail, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            <span className="text-[#F5B800]">✓</span>
                            <span>{detail}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plaque 2: "НУДИМЕ:" Специфични услуги (Right 6 cols) */}
          <div className="lg:col-span-6 bg-[#16181E] border border-[#2B303E] rounded-xl p-6 sm:p-7 relative shadow-xl">
            {/* 4 Corner Screws for acrylic aesthetic */}
            <div className="plaque-screw absolute top-3 left-3" />
            <div className="plaque-screw absolute top-3 right-3" />
            <div className="plaque-screw absolute bottom-3 left-3" />
            <div className="plaque-screw absolute bottom-3 right-3" />

            {/* Yellow Top Banner exactly like "НУДИМЕ:" in the photo */}
            <div className="bg-[#F5B800] text-slate-950 px-4 py-2.5 rounded-lg mb-6 flex items-center justify-between shadow-sm">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider">
                НУДИМЕ:
              </h3>
              <span className="text-xs font-bold bg-slate-950 text-white px-2.5 py-0.5 rounded">
                Чиста & прецизна изведба
              </span>
            </div>

            <div className="space-y-4">
              {SPECIFIC_SERVICES.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  className="group p-4 bg-[#1B1E26] hover:bg-[#222631] border border-[#2B303E] hover:border-[#F5B800]/50 rounded-lg transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#242834] group-hover:bg-[#2C3242] border border-[#373E50] flex items-center justify-center shrink-0 transition-colors">
                      {renderIcon(item.icon)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white group-hover:text-[#F5B800] transition-colors">
                          {item.title}
                        </h4>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#F5B800] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-400">
                        {item.details.slice(0, 2).map((detail, idx) => (
                          <span key={idx} className="flex items-center gap-1">
                            <span className="text-[#F5B800]">✓</span>
                            <span>{detail}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Banner with Quick Direct Booking */}
        <div className="mt-10 p-5 bg-gradient-to-r from-[#1A1D25] via-[#202530] to-[#1A1D25] border border-[#32394A] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#F5B800]/15 flex items-center justify-center text-[#F5B800] shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white">
                Ви треба специфична комбинација на работи или рушење со одвоз?
              </p>
              <p className="text-xs text-slate-400">
                Секој проект го прилагодуваме според вашите барања и димензии на објектот.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-[#F5B800] hover:bg-[#E0A400] rounded-md transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Закажи бесплатна проценка</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#181B22] border border-[#32394A] rounded-xl max-w-lg w-full p-6 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="plaque-screw absolute top-3 left-3" />
            <div className="plaque-screw absolute top-3 right-3" />
            
            <div className="flex items-start gap-4 mb-4 mt-2">
              <div className="w-12 h-12 rounded-lg bg-[#252A36] border border-[#3A4255] flex items-center justify-center shrink-0">
                {renderIcon(selectedService.icon)}
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">
                  Детали за услугата
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Што опфаќа оваа фаза:
              </h4>
              <ul className="space-y-2">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B800] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#2A2F3D]">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Затвори
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-[#F5B800] hover:bg-[#E0A400] rounded-md transition-colors"
              >
                Побарај понуда за оваа услуга
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
