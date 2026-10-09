import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, MapPin, ShieldCheck, FileCheck, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-[#16181D] border-y border-[#262A35] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Item 1: Direct Phone Callout with Yellow Badge */}
          <div className="flex items-center gap-3 p-3 bg-[#1D2028] border border-[#2D3342] rounded-lg">
            <div className="w-10 h-10 rounded-md bg-[#F5B800] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-sm">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Телефон / Viber
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-sm sm:text-base font-extrabold text-white hover:text-[#F5B800] transition-colors truncate block"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Item 2: Territory */}
          <div className="flex items-center gap-3 p-3 bg-[#1D2028] border border-[#2D3342] rounded-lg">
            <div className="w-10 h-10 rounded-md bg-[#252A36] text-[#F5B800] flex items-center justify-center shrink-0 border border-[#3A4256]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Територија на дејствување
              </span>
              <span className="text-sm sm:text-base font-bold text-white truncate block">
                {COMPANY_INFO.location}
              </span>
            </div>
          </div>

          {/* Item 3: Agreement & On-Site Evaluation */}
          <div className="flex items-center gap-3 p-3 bg-[#1D2028] border border-[#2D3342] rounded-lg">
            <div className="w-10 h-10 rounded-md bg-[#252A36] text-[#F5B800] flex items-center justify-center shrink-0 border border-[#3A4256]">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Без скриени трошоци
              </span>
              <span className="text-sm sm:text-base font-bold text-white truncate block">
                Договор на лице место
              </span>
            </div>
          </div>

          {/* Item 4: Free Estimate */}
          <div className="flex items-center gap-3 p-3 bg-[#1D2028] border border-[#2D3342] rounded-lg">
            <div className="w-10 h-10 rounded-md bg-[#252A36] text-[#F5B800] flex items-center justify-center shrink-0 border border-[#3A4256]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                Гаранција и квалитет
              </span>
              <span className="text-sm sm:text-base font-bold text-white truncate block">
                Квалитетна изработка
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
