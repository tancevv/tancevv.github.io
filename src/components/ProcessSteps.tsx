import React from 'react';
import { PROCESS_STEPS, COMPANY_INFO } from '../data/content';
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export const ProcessSteps: React.FC = () => {
  return (
    <section id="process" className="py-16 lg:py-24 bg-[#14161C] border-t border-[#262B36] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232D] border border-[#2D3444] text-[#F5B800] text-xs font-semibold mb-3">
            <span>Професионален пристап чекор по чекор</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Како работи DA Construction
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Обезбедуваме транспарентност од првиот телефонски разговор до предавањето на чистиот готов простор.
          </p>
        </div>

        {/* 4 Steps Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#191C24] border border-[#2A303F] hover:border-[#F5B800]/40 rounded-xl p-6 relative flex flex-col justify-between transition-colors shadow-md"
            >
              <div>
                {/* Clean editorial numbering */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#F5B800] tracking-tight">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 bg-[#222733] px-2 py-0.5 rounded">
                    Чекор {index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#262B37] flex items-center text-[11px] font-medium text-slate-400 gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B800]" />
                <span>Гаранција за договореното</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action quote bar */}
        <div className="mt-12 bg-gradient-to-r from-[#1B1E26] via-[#242A38] to-[#1B1E26] border border-[#32394A] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-[#F5B800] uppercase tracking-wider block mb-1">
              Договор и проценка на лице место
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Подготвени сте да започнете со реновирање?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Јавете се на <strong>{COMPANY_INFO.phone}</strong> за да закажеме бесплатен термин за преглед на просторот.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-5 py-3 bg-[#F5B800] hover:bg-[#E0A400] text-slate-950 font-extrabold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Повикај веднаш</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3 bg-[#171A21] hover:bg-[#20242E] border border-[#323847] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span>Испрати барање онлајн</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
