import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Phone, MapPin, Send, CheckCircle2, Clock, Calendar, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactProps {
  initialNote?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ initialNote = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Карпош',
    service: 'Целосно реновирање (клуч на рака)',
    note: initialNote,
    onsiteVisit: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Внесете ваше име и презиме';
    }
    const phoneClean = formData.phone.replace(/[\s\-\/\(\)]/g, '');
    if (!phoneClean || phoneClean.length < 8) {
      newErrors.phone = 'Внесете валиден телефонски број (на пр. 070 123 456)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#111215] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with visual styling matching the yellow stamp from the photo */}
        <div className="bg-[#F5B800] text-slate-950 rounded-2xl p-6 sm:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider bg-black text-[#F5B800] px-3 py-1 rounded inline-block mb-3">
              КОНТАКТИРАЈТЕ НÈ ЗА
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-3">
              БЕСПЛАТНА ПРОЦЕНКА И ПОНУДА!
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-900 max-w-2xl mb-6">
              Без разлика дали ви треба целосно рушење со одвоз на шут или фино глетување и фасада, јавете ни се за договор на лице место.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-black text-white hover:bg-slate-900 text-base sm:text-lg font-extrabold rounded-lg shadow-md transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F5B800]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <span className="text-sm sm:text-base font-extrabold uppercase text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-black" />
                <span>{COMPANY_INFO.location}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 bg-[#171A21] border border-[#292F3E] rounded-xl p-6 sm:p-8 relative shadow-lg">
            <div className="plaque-screw absolute top-3 left-3" />
            <div className="plaque-screw absolute top-3 right-3" />

            <div className="mb-6 pt-2">
              <span className="font-script text-2xl text-[#F5B800] block mb-1">
                {COMPANY_INFO.motto2}
              </span>
              <h3 className="text-2xl font-black text-white">
                Директен контакт со DA Construction
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                За итни термини за рушење или проценка на станови пред купување/реновирање.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 bg-[#1F232D] border border-[#2F3646] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-[#F5B800] text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Телефонски контакт & Viber
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-base font-extrabold text-white hover:text-[#F5B800] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Достапни за повици и пораки преку Viber
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#1F232D] border border-[#2F3646] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-[#282E3B] text-[#F5B800] flex items-center justify-center shrink-0 border border-[#384155]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Опфат на терен
                  </span>
                  <span className="text-sm font-bold text-white block">
                    Скопје (сите населби) и околните региони
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Бесплатен излез на лице место
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-[#1F232D] border border-[#2F3646] rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-[#282E3B] text-[#F5B800] flex items-center justify-center shrink-0 border border-[#384155]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Работно време
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {COMPANY_INFO.workHours}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Недела по претходен договор
                  </span>
                </div>
              </div>
            </div>

            {/* Quick 1-click WhatsApp / Viber actions */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/38974206925?text=${encodeURIComponent('Здраво, заинтересиран сум за бесплатна проценка за реновирање.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-[#1F242C] hover:bg-[#282E39] border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-400 text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp порака</span>
              </a>
              <a
                href={`viber://chat?number=%2B38974206925`}
                className="py-2.5 px-3 bg-[#1F242C] hover:bg-[#282E39] border border-purple-500/30 rounded-lg text-xs font-bold text-purple-300 text-center flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>Viber контакт</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Booking & Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#171A21] border border-[#292F3E] rounded-xl p-6 sm:p-8 relative shadow-lg">
            
            {submitted ? (
              <div className="py-12 px-4 text-center">
                <div className="w-16 h-16 bg-[#F5B800]/20 text-[#F5B800] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#F5B800]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Барањето е успешно испратено!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                  Ви благодариме <strong>{formData.name}</strong>. Нашиот тим ќе ве контактира на бројот <strong>{formData.phone}</strong> во најкраток можен рок за договор на бесплатен термин.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      location: 'Карпош',
                      service: 'Целосно реновирање (клуч на рака)',
                      note: '',
                      onsiteVisit: true,
                    });
                  }}
                  className="px-6 py-2.5 bg-[#1F232D] hover:bg-[#292F3D] border border-slate-700 text-xs font-semibold text-white rounded-lg transition-colors"
                >
                  Испрати ново барање
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="border-b border-[#282D3B] pb-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">
                    Онлајн формулар за проценка
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Закажете бесплатен термин за вашиот проект
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Име и презиме <span className="text-[#F5B800]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="На пр. Александар Николовски"
                      className={`w-full px-3.5 py-2.5 bg-[#121418] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5B800] transition-colors ${
                        errors.name ? 'border-red-500' : 'border-[#2D3342]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Телефонски број <span className="text-[#F5B800]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="На пр. 074 206 925"
                      className={`w-full px-3.5 py-2.5 bg-[#121418] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5B800] transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-[#2D3342]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Location in Skopje */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Населба во Скопје / Локација
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#2D3342] rounded-lg text-sm text-white focus:outline-none focus:border-[#F5B800] transition-colors"
                    >
                      <option value="Центар">Центар</option>
                      <option value="Карпош (1, 2, 3, 4)">Карпош (1, 2, 3, 4)</option>
                      <option value="Аеродром / Ново Лисиче">Аеродром / Ново Лисиче</option>
                      <option value="Кисела Вода / Припор">Кисела Вода / Припор</option>
                      <option value="Ѓорче Петров / Влае">Ѓорче Петров / Влае</option>
                      <option value="Тафталиџе / Козле">Тафталиџе / Козле</option>
                      <option value="Водно / Црниче">Водно / Црниче</option>
                      <option value="Гази Баба / Автокоманда">Гази Баба / Автокоманда</option>
                      <option value="Чаир / Бутел">Чаир / Бутел</option>
                      <option value="Бардовци / Злокуќани">Бардовци / Злокуќани</option>
                      <option value="Илинден / Петровец">Илинден / Петровец</option>
                      <option value="Сопиште / Сончев Град">Сопиште / Сончев Град</option>
                      <option value="Околина на Скопје">Околина на Скопје</option>
                    </select>
                  </div>

                  {/* Service needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Главна потребна услуга
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#2D3342] rounded-lg text-sm text-white focus:outline-none focus:border-[#F5B800] transition-colors"
                    >
                      <option value="Целосно реновирање (клуч на рака)">Целосно реновирање (клуч на рака)</option>
                      <option value="Рушење, демонтажа и одвоз на шут">Рушење, демонтажа и одвоз на шут</option>
                      <option value="Подготовка и израмнување на ѕидови">Подготовка и израмнување на ѕидови</option>
                      <option value="Глетување и шпаклување">Глетување и шпаклување</option>
                      <option value="Молерисување (бојадисување)">Молерисување (бојадисување)</option>
                      <option value="Изработка или санација на фасада">Изработка или санација на фасада</option>
                      <option value="Реновирање на бања и санитарија">Реновирање на бања и санитарија</option>
                    </select>
                  </div>
                </div>

                {/* Additional Note */}
                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Опис на просторот или дополнителни барања
                  </label>
                  <textarea
                    rows={3}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="На пр. Стан од 65m2 на 3-ти кат со лифт, сакаме рушење на ѕид меѓу кујна и дневна и целосно глетување..."
                    className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#2D3342] rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F5B800] transition-colors resize-none"
                  />
                </div>

                {/* On-site visit toggle checkbox */}
                <div className="mb-6 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="onsite"
                    checked={formData.onsiteVisit}
                    onChange={(e) => setFormData({ ...formData, onsiteVisit: e.target.checked })}
                    className="w-4 h-4 rounded bg-[#121418] border-slate-600 accent-[#F5B800]"
                  />
                  <label htmlFor="onsite" className="text-xs text-slate-300 cursor-pointer">
                    Сакам <strong>бесплатна проценка на лице место</strong> со мерење и консултација.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#F5B800] hover:bg-[#E0A400] text-slate-950 font-black rounded-lg transition-all shadow-md flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  <Send className="w-4 h-4" />
                  <span>Испрати барање за бесплатна понуда</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center mt-3">
                  Вашите податоци се користат исклучиво за да стапиме во контакт за договорената понуда.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
