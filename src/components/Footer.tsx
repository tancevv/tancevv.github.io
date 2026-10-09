import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onOpenExportModal?: () => void }> = ({ onOpenExportModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0E11] border-t border-[#22252F] text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-3">
              <span className="text-xl font-black text-white tracking-tight">
                DA <span className="text-[#F5B800]">CONSTRUCTION</span>
              </span>
            </a>
            <p className="font-script text-xl text-[#F5B800] mb-2">
              „Вашиот дом, наша мисија!“
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed mb-4">
              Комплетни градежни работи и реновирање на простори по систем клуч на рака. Рушење, одвоз на шут, подготовка на ѕидови, фасади, глетување и завршно молерисување во Скопје и околината.
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-white">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hover:text-[#F5B800] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>{COMPANY_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Брзи врски
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#F5B800] transition-colors">
                  Главни услуги и ценовник
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#F5B800] transition-colors">
                  Интерактивен калкулатор
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F5B800] transition-colors">
                  Реализирани проекти
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F5B800] transition-colors">
                  Процес на работа
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5B800] transition-colors">
                  Бесплатна проценка на терен
                </a>
              </li>
            </ul>
          </div>

          {/* Specialization */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Специјалности
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Рушење и демонтажа со одвоз на шут</li>
              <li>• Машинско израмнување на ѕидови</li>
              <li>• Полимерно глетување и шмирглање</li>
              <li>• Декоративни и термоизолациони фасади</li>
              <li>• Реновирање на бањи и станови</li>
            </ul>
            {onOpenExportModal && (
              <div className="mt-4 pt-3 border-t border-[#202430]">
                <button
                  type="button"
                  onClick={onOpenExportModal}
                  className="text-xs text-[#F5B800] hover:underline flex items-center gap-1"
                >
                  <span>Чист код за GitHub Pages (github.io)</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 border-t border-[#1F232D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {new Date().getFullYear()} DA CONSTRUCTION. Сите права се задржани.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">
              Договор и проценка на лице место · Скопје
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-[#181B22] hover:bg-[#232833] text-slate-300 hover:text-white transition-colors"
              aria-label="Врати се на почеток"
              title="Врати се на почеток"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
