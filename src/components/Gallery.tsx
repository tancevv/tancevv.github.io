import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '../data/content';
import { MapPin, Clock, Maximize2, X, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'living' | 'bath' | 'facade'>('all');
  const [activeLightbox, setActiveLightbox] = useState<PortfolioItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#111215] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-[#F5B800] tracking-wider uppercase">
                РЕАЛИЗИРАНИ ПРОЕКТИ
              </span>
              <span className="text-slate-600">·</span>
              <span className="font-script text-lg text-slate-300">Вашиот проект, наша мисија!</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Галерија на завршени изведби
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Погледнете дел од нашите завршени проекти низ населбите во Скопје — од целосно рушење и ѕидање до финални декоративни детали.
            </p>
          </div>

          {/* Interactive Category Filter (Functional buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1A1D24] border border-[#2D3342] rounded-lg">
            {[
              { id: 'all', label: 'Сите' },
              { id: 'living', label: 'Ентериер & Дневни' },
              { id: 'bath', label: 'Модерни бањи' },
              { id: 'facade', label: 'Фасади & Облоги' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#F5B800] text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#252A35]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#16181E] border border-[#2B303E] hover:border-[#F5B800]/50 rounded-xl overflow-hidden shadow-lg transition-all flex flex-col cursor-pointer"
              onClick={() => setActiveLightbox(project)}
            >
              {/* Image Frame with Corner Stand-Off and Yellow Bottom Plaque */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Expand overlay button */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Yellow Title Strip at bottom of image matching the physical board photo style */}
                <div className="absolute bottom-0 inset-x-0 bg-[#F5B800] text-slate-950 px-4 py-2 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-wide truncate">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[11px] font-bold bg-slate-950 text-white px-2 py-0.5 rounded">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-[#F5B800]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                    </span>
                    <span>·</span>
                    <span>Реновирање со клуч на рака</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#F5B800] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#252A36] flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Кликнете за зголемен преглед
                  </span>
                  <span className="text-xs font-bold text-[#F5B800] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Погледни</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Slogan from Photo */}
        <div className="mt-12 text-center p-6 bg-[#161921] border border-[#282F3E] rounded-xl">
          <p className="font-script text-2xl sm:text-3xl text-[#F5B800] mb-2">
            „Вашиот дом, наша мисија!“
          </p>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Секој простор го третираме со максимална грижа, чистота и прецизност. Погледнете ги вашите идеи претворени во реалност.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-[#171A21] border border-[#333A4C] rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-[#F5B800] hover:text-black transition-colors"
              aria-label="Затвори"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#F5B800] text-slate-950 px-5 py-2.5 flex items-center justify-between">
                <span className="text-sm font-black uppercase">
                  {activeLightbox.categoryLabel}
                </span>
                <span className="text-xs font-bold bg-slate-950 text-white px-2.5 py-0.5 rounded">
                  Времетраење: {activeLightbox.period}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-[#F5B800] font-semibold mb-2">
                <MapPin className="w-4 h-4" />
                <span>{activeLightbox.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeLightbox.scope}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#272C3A]">
                <span className="text-xs text-slate-400">
                  Сакате слична изведба во вашиот простор?
                </span>
                <a
                  href="#contact"
                  onClick={() => setActiveLightbox(null)}
                  className="px-5 py-2.5 bg-[#F5B800] hover:bg-[#E0A400] text-slate-950 text-xs sm:text-sm font-bold rounded-lg transition-colors text-center"
                >
                  Закажи бесплатна проценка за сличен проект
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
