import React, { useState, useMemo } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Calculator as CalcIcon, Check, ArrowRight, Phone, RefreshCw } from 'lucide-react';

interface SelectedPhases {
  demolition: boolean;
  wallPrep: boolean;
  skimming: boolean;
  painting: boolean;
  facade: boolean;
  finishing: boolean;
}

export const Calculator: React.FC<{ onApplyToForm?: (summary: string) => void }> = ({ onApplyToForm }) => {
  const [propertyType, setPropertyType] = useState<'apartment' | 'house' | 'office'>('apartment');
  const [area, setArea] = useState<number>(65);
  const [phases, setPhases] = useState<SelectedPhases>({
    demolition: true,
    wallPrep: true,
    skimming: true,
    painting: true,
    facade: false,
    finishing: false,
  });

  const togglePhase = (phaseKey: keyof SelectedPhases) => {
    setPhases(prev => ({
      ...prev,
      [phaseKey]: !prev[phaseKey],
    }));
  };

  // Calculation logic based on realistic typical rates in Skopje
  const estimate = useMemo(() => {
    let minRatePerM2 = 0;
    let maxRatePerM2 = 0;

    if (phases.demolition) {
      minRatePerM2 += 6;
      maxRatePerM2 += 11;
    }
    if (phases.wallPrep) {
      minRatePerM2 += 5;
      maxRatePerM2 += 9;
    }
    if (phases.skimming) {
      minRatePerM2 += 4;
      maxRatePerM2 += 7;
    }
    if (phases.painting) {
      minRatePerM2 += 3;
      maxRatePerM2 += 5;
    }
    if (phases.facade) {
      minRatePerM2 += 18;
      maxRatePerM2 += 28;
    }
    if (phases.finishing) {
      minRatePerM2 += 12;
      maxRatePerM2 += 20;
    }

    // Property multiplier
    let multiplier = 1;
    if (propertyType === 'house') multiplier = 1.05;
    if (propertyType === 'office') multiplier = 1.08;

    const minEur = Math.round(area * minRatePerM2 * multiplier);
    const maxEur = Math.round(area * maxRatePerM2 * multiplier);

    const minMkd = minEur * 61.5;
    const maxMkd = maxEur * 61.5;

    return {
      minEur,
      maxEur,
      minMkd: Math.round(minMkd).toLocaleString('de-DE'),
      maxMkd: Math.round(maxMkd).toLocaleString('de-DE'),
    };
  }, [propertyType, area, phases]);

  const summaryText = `Проценка за ${propertyType === 'apartment' ? 'Стан' : propertyType === 'house' ? 'Куќа' : 'Деловен простор'} (${area} m²): ${estimate.minEur}€ - ${estimate.maxEur}€`;

  const handleSendCalculation = () => {
    if (onApplyToForm) {
      onApplyToForm(summaryText);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-[#14161C] border-y border-[#262B36] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232D] border border-[#2D3444] text-[#F5B800] text-xs font-semibold mb-3">
            <CalcIcon className="w-3.5 h-3.5" />
            <span>Ориентациона пресметка за Скопје</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Интерактивен калкулатор за реновирање
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Изберете ја квадратурата и саканите работни фази за да добиете брза ориентациона проценка пред нашата посета на лице место.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1D25] border border-[#2A303F] rounded-xl p-6 sm:p-7 shadow-lg">
            
            {/* Step 1: Property Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Тип на простор
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'apartment', label: 'Стан' },
                  { id: 'house', label: 'Куќа' },
                  { id: 'office', label: 'Деловен простор' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPropertyType(item.id as any)}
                    className={`py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                      propertyType === item.id
                        ? 'bg-[#F5B800] text-slate-950 border-[#F5B800] font-bold shadow-sm'
                        : 'bg-[#15171D] text-slate-300 border-[#2C3342] hover:border-slate-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Area Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Површина на просторот
                </label>
                <span className="text-base font-extrabold text-[#F5B800] tabular-nums">
                  {area} m²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="250"
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-[#262C3A] rounded-lg appearance-none cursor-pointer accent-[#F5B800]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 tabular-nums">
                <span>20 m²</span>
                <span>80 m²</span>
                <span>150 m²</span>
                <span>250 m²</span>
              </div>
            </div>

            {/* Step 3: Phase Selection Checkboxes */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Изберете фази на изведба
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    key: 'demolition',
                    title: 'Рушење, демонтажа & одвоз на шут',
                    desc: 'Преградни ѕидови, стари плочки, пакување и депонија',
                  },
                  {
                    key: 'wallPrep',
                    title: 'Израмнување на ѕидови & гипс-картон',
                    desc: 'Кнауф прегради, нивелирање, мрежа и подготовка',
                  },
                  {
                    key: 'skimming',
                    title: 'Глетување и шпаклување',
                    desc: 'Двослојно фино полимерно глетување и шмирглање',
                  },
                  {
                    key: 'painting',
                    title: 'Молерисување (бојадисување)',
                    desc: 'Акрилни квалитетни бои, заштита и совршен финиш',
                  },
                  {
                    key: 'facade',
                    title: 'Фасадни работи & термоизолација',
                    desc: 'Стиропор/камена волна, лепак, мрежа и абриб',
                  },
                  {
                    key: 'finishing',
                    title: 'Завршни бањски и керамички работи',
                    desc: 'Хидроизолација, керамика, санитарија и столарија',
                  },
                ].map((p) => {
                  const isChecked = phases[p.key as keyof SelectedPhases];
                  return (
                    <div
                      key={p.key}
                      onClick={() => togglePhase(p.key as keyof SelectedPhases)}
                      className={`p-3 rounded-lg border flex items-start gap-3 cursor-pointer transition-colors ${
                        isChecked
                          ? 'bg-[#1F2430] border-[#F5B800]/60'
                          : 'bg-[#15171D] border-[#292F3E] hover:border-slate-600'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isChecked
                            ? 'bg-[#F5B800] border-[#F5B800] text-slate-950'
                            : 'border-slate-600 bg-transparent'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs sm:text-sm font-bold text-white block">
                          {p.title}
                        </span>
                        <span className="text-[11px] text-slate-400 block mt-0.5">
                          {p.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#171A21] border border-[#2D3342] rounded-xl p-6 sm:p-7 sticky top-28 shadow-xl">
            <div className="plaque-screw absolute top-3 left-3" />
            <div className="plaque-screw absolute top-3 right-3" />

            <div className="border-b border-[#2A303F] pb-4 mb-5 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5B800]">
                Резултат од калкулацијата
              </span>
              <h3 className="text-lg font-bold text-white">
                Ориентационен опсег
              </h3>
            </div>

            {/* Price Box */}
            <div className="bg-[#1D212A] border border-[#343B4E] rounded-xl p-5 mb-6 text-center">
              <span className="text-xs text-slate-400 block mb-1">
                Проценета вредност за {area} m²
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#F5B800] tabular-nums tracking-tight">
                {estimate.minEur.toLocaleString()} € – {estimate.maxEur.toLocaleString()} €
              </div>
              <div className="text-xs text-slate-400 mt-1 tabular-nums">
                ({estimate.minMkd} ден. – {estimate.maxMkd} ден.)
              </div>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2 mb-6 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-[#252A36]">
                <span className="text-slate-400">Тип:</span>
                <span className="font-semibold text-white capitalize">
                  {propertyType === 'apartment' ? 'Стан' : propertyType === 'house' ? 'Куќа' : 'Деловен простор'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252A36]">
                <span className="text-slate-400">Површина:</span>
                <span className="font-semibold text-white tabular-nums">{area} m²</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252A36]">
                <span className="text-slate-400">Одвоз на шут:</span>
                <span className="font-semibold text-white">
                  {phases.demolition ? 'Вклучен во депонија' : 'Не е избран'}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#252A36]">
                <span className="text-slate-400">Проценка на терен:</span>
                <span className="font-semibold text-[#F5B800]">БЕСПЛАТНА (Скопје)</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-normal mb-6">
              * Забелешка: Секој објект има специфичности (состојба на ѕидови, спратност, пристапност за возила). Точната фиксна цена се дефинира по бесплатниот увид на лице место.
            </p>

            <button
              type="button"
              onClick={handleSendCalculation}
              className="w-full py-3.5 bg-[#F5B800] hover:bg-[#E0A400] text-slate-950 font-extrabold rounded-lg transition-all shadow-md flex items-center justify-center gap-2 text-sm text-center mb-3"
            >
              <span>Побарај официјална понуда</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full py-2.5 bg-[#1F232D] hover:bg-[#282E3B] border border-[#343C4E] text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>Јави се директно: {COMPANY_INFO.phone}</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
