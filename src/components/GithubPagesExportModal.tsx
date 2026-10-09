import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2, Globe } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GithubPagesExportModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'instructions'>('html');

  if (!isOpen) return null;

  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="mk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DA Construction - Од рушење до готов простор | Скопје</title>
  <meta name="description" content="Професионално реновирање, рушење, фасади, глетување и молерисување во Скопје и околината. Вашиот дом, наша мисија!">
  <!-- Google Fonts: Montserrat & Plus Jakarta Sans & Caveat -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Montserrat:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* CSS Variables & Theme */
    :root {
      --gold: #F5B800;
      --gold-hover: #E0A400;
      --bg-dark: #111215;
      --surface: #171A21;
      --surface-elevated: #1F232D;
      --border: #2A303F;
      --text-white: #FFFFFF;
      --text-muted: #9CA3AF;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      background-color: var(--bg-dark);
      color: #E5E7EB;
      line-height: 1.6;
    }
    h1, h2, h3, h4 { font-family: 'Montserrat', sans-serif; }
    .font-script { font-family: 'Caveat', cursive; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    
    /* Header / Top Bar */
    header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(17, 18, 21, 0.95);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
      padding: 1rem 0;
    }
    .header-nav { display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
    .brand { font-size: 1.35rem; font-weight: 900; color: #fff; text-decoration: none; }
    .brand span { color: var(--gold); }
    nav ul { display: flex; list-style: none; gap: 1.5rem; }
    nav a { color: #D1D5DB; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; }
    nav a:hover { color: var(--gold); }
    .btn-gold {
      background: var(--gold); color: #000; padding: 0.65rem 1.25rem;
      border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 0.9rem;
      display: inline-flex; align-items: center; gap: 0.5rem; border: none; cursor: pointer;
    }
    .btn-gold:hover { background: var(--gold-hover); }

    /* Responsive CSS Grid */
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; }
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }

    /* Acrylic Plaque Styling */
    .plaque {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.75rem;
      position: relative;
    }
    .plaque-screw {
      width: 10px; height: 10px; border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #fff 0%, #e6b21e 40%, #7d5c07 90%);
      position: absolute;
    }
    .screw-tl { top: 12px; left: 12px; }
    .screw-tr { top: 12px; right: 12px; }
    .screw-bl { bottom: 12px; left: 12px; }
    .screw-br { bottom: 12px; right: 12px; }

    /* Yellow Stamped Banners */
    .stamp-banner {
      background: var(--gold); color: #000; border-radius: 8px;
      padding: 1rem 1.5rem; font-weight: 900;
    }

    /* Trust Strip */
    .trust-strip { background: #15171D; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 1.25rem 0; }
    .trust-card { background: var(--surface-elevated); border: 1px solid var(--border); padding: 0.85rem; border-radius: 8px; }

    /* Hero Section */
    .hero { padding: 4rem 0; }
    .hero h1 { font-size: 3rem; font-weight: 900; color: #fff; line-height: 1.1; margin: 1rem 0; }
    .hero h1 span { color: var(--gold); }

    /* Services List */
    .service-card {
      background: var(--surface-elevated); border: 1px solid var(--border);
      border-radius: 8px; padding: 1.25rem; margin-bottom: 1rem;
    }
    .service-card h4 { color: #fff; margin-bottom: 0.35rem; }

    /* Footer */
    footer { border-top: 1px solid var(--border); padding: 3rem 0; text-align: center; color: var(--text-muted); font-size: 0.85rem; }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container header-nav">
      <a href="#" class="brand">DA <span>CONSTRUCTION</span></a>
      <nav>
        <ul>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#about">За нас</a></li>
          <li><a href="#contact">Контакт</a></li>
        </ul>
      </nav>
      <a href="tel:+38974206925" class="btn-gold">074 206 925</a>
    </div>
  </header>

  <!-- Hero -->
  <main>
    <section class="hero container">
      <div class="grid-2" style="align-items: center;">
        <div>
          <p class="font-script" style="color: var(--gold); font-size: 1.8rem;">Вашиот дом, наша мисија!</p>
          <h1>ОД РУШЕЊЕ ДО <span>ГОТОВ ПРОСТОР</span></h1>
          <p style="color: #D1D5DB; margin-bottom: 2rem;">
            Комплетни градежни и завршни решенија во Скопје и околината. Од прецизно рушење и одвоз на шут, до врвно израмнување на ѕидови, фасади и реновирање по систем клуч на рака.
          </p>
          <a href="#contact" class="btn-gold" style="font-size: 1rem; padding: 0.9rem 1.8rem;">Бесплатна проценка на лице место</a>
        </div>
        <div class="plaque">
          <div class="plaque-screw screw-tl"></div><div class="plaque-screw screw-tr"></div>
          <div class="plaque-screw screw-bl"></div><div class="plaque-screw screw-br"></div>
          <div class="stamp-banner">
            <div style="font-size: 0.75rem; letter-spacing: 1px;">КОНТАКТИРАЈТЕ НÈ ЗА</div>
            <div style="font-size: 1.5rem; margin: 0.3rem 0;">БЕСПЛАТНА ПРОЦЕНКА И ПОНУДА!</div>
            <div style="font-size: 1.25rem;">074 206 925 · СКОПЈЕ И ОКОЛИНАТА</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <section class="trust-strip">
      <div class="container grid-4">
        <div class="trust-card"><strong>Телефон / Viber:</strong> 074 206 925</div>
        <div class="trust-card"><strong>Територија:</strong> Скопје и околината</div>
        <div class="trust-card"><strong>Пристап:</strong> Професионален договор</div>
        <div class="trust-card"><strong>Квалитет:</strong> Гарантирана изработка</div>
      </div>
    </section>

    <!-- Services Grid Section -->
    <section id="services" class="container" style="padding: 4rem 1.5rem;">
      <h2 style="font-size: 2.2rem; margin-bottom: 2rem; color: #fff;">Нашите услуги</h2>
      <div class="grid-2">
        <!-- Board 1 -->
        <article class="plaque">
          <div class="plaque-screw screw-tl"></div><div class="plaque-screw screw-tr"></div>
          <div class="plaque-screw screw-bl"></div><div class="plaque-screw screw-br"></div>
          <h3 style="color: var(--gold); margin-bottom: 1.5rem;">Главни изведбени работи</h3>
          <div class="service-card">
            <h4>Изработка и санација на фасади</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Термоизолација, арматурна мрежа, лепак и завршен декоративен абриб.</p>
          </div>
          <div class="service-card">
            <h4>Подготовка и израмнување на ѕидови</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Машинско малтерисување, Кнауф системи и ласерско нивелирање.</p>
          </div>
          <div class="service-card">
            <h4>Завршни работи при реновирање</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Керамика, санитарија, инсталации и амбиентално осветлување.</p>
          </div>
          <div class="service-card">
            <h4>Реновирање на станови, куќи и деловни простори</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Целосна реализација по систем „клуч на рака“ со фиксни рокови.</p>
          </div>
        </article>

        <!-- Board 2: НУДИМЕ -->
        <article class="plaque">
          <div class="plaque-screw screw-tl"></div><div class="plaque-screw screw-tr"></div>
          <div class="plaque-screw screw-bl"></div><div class="plaque-screw screw-br"></div>
          <div class="stamp-banner" style="margin-bottom: 1.5rem; padding: 0.6rem 1rem;">
            НУДИМЕ:
          </div>
          <div class="service-card">
            <h4>Рушење и демонтажа</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Рушење прегради, вадење плочки и столарија со професионален алат.</p>
          </div>
          <div class="service-card">
            <h4>Изнесување и одвоз на шут</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Пакување во вреќи, сопствен превоз и легален одвоз на депонија.</p>
          </div>
          <div class="service-card">
            <h4>Чистење по рушење</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Темелно расчистување на просторот и заедничките простории.</p>
          </div>
          <div class="service-card">
            <h4>Глетување и шпаклување</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Двослојно фино полимерно глетување до совршена рамност.</p>
          </div>
          <div class="service-card">
            <h4>Молерисување</h4>
            <p style="font-size: 0.85rem; color: #D1D5DB;">Ператливи бои, заштита и модерни декоративни ѕидни техники.</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="container" style="padding-bottom: 4rem;">
      <div class="plaque" style="text-align: center; padding: 3rem 1.5rem;">
        <p class="font-script" style="color: var(--gold); font-size: 2rem;">Вашиот проект, наша мисија!</p>
        <h2 style="font-size: 2.5rem; color: #fff; margin: 1rem 0;">Закажете бесплатна проценка</h2>
        <p style="margin-bottom: 2rem; color: #D1D5DB;">
          Јавете се на <strong>074 206 925</strong> за договор и преглед на лице место во Скопје и околината.
        </p>
        <a href="tel:+38974206925" class="btn-gold" style="font-size: 1.15rem; padding: 1rem 2.5rem;">
          Повикај: 074 206 925
        </a>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <p>&copy; DA Construction. Скопје и околината. Сите права се задржани.</p>
      <p style="margin-top: 0.5rem;">Од рушење до готов простор · Телефон: 074 206 925</p>
    </div>
  </footer>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#171A21] border border-[#2F3646] rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A3040]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-[#F5B800] text-slate-950 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                GitHub Pages / Чист HTML & CSS Експорт
              </h3>
              <p className="text-xs text-slate-400">
                Компатибилен со github.io со Responsive Grid и семантички HTML тагови
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-[#252A36]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs & Actions */}
        <div className="flex items-center justify-between px-6 py-3 bg-[#13151A] border-b border-[#252A36]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'html'
                  ? 'bg-[#F5B800] text-slate-950'
                  : 'text-slate-300 hover:text-white hover:bg-[#202532]'
              }`}
            >
              Чист HTML5 Код
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('instructions')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'instructions'
                  ? 'bg-[#F5B800] text-slate-950'
                  : 'text-slate-300 hover:text-white hover:bg-[#202532]'
              }`}
            >
              Упатство за GitHub Pages
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#202532] hover:bg-[#2C3344] text-xs font-semibold text-white rounded-md flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Копирано!' : 'Копирај код'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 bg-[#F5B800] hover:bg-[#E0A400] text-xs font-bold text-slate-950 rounded-md flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Преземи index.html</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs">
          {activeTab === 'html' ? (
            <div className="relative">
              <pre className="bg-[#0E1014] p-4 rounded-lg text-slate-300 border border-[#232835] overflow-x-auto leading-relaxed select-all">
                <code>{standaloneHtmlCode}</code>
              </pre>
            </div>
          ) : (
            <div className="font-sans text-sm text-slate-300 space-y-4 leading-relaxed">
              <div className="p-4 bg-[#1F2430] border border-[#2E3649] rounded-lg">
                <h4 className="text-base font-bold text-[#F5B800] mb-1">
                  Како да го поставите веб сајтот на GitHub Pages за 2 минути:
                </h4>
                <p className="text-xs text-slate-400">
                  Овој код е 100% чист HTML, CSS и JS без потреба од node_modules или build чекор.
                </p>
              </div>

              <ol className="list-decimal list-inside space-y-3 pl-2">
                <li>
                  <strong>Направете GitHub репозиториум:</strong> Отворете GitHub и креирајте ново репозиториум (на пример со име <code className="text-[#F5B800] bg-[#121418] px-1.5 py-0.5 rounded">da-construction</code> или <code className="text-[#F5B800] bg-[#121418] px-1.5 py-0.5 rounded">username.github.io</code>).
                </li>
                <li>
                  <strong>Зачувајте ја датотеката како <code className="text-[#F5B800] bg-[#121418] px-1.5 py-0.5 rounded">index.html</code>:</strong> Кликнете на копчето <em>„Преземи index.html“</em> погоре и ставете ја датотеката во главниот корен на вашиот репозиториум.
                </li>
                <li>
                  <strong>Вклучете GitHub Pages:</strong> Во GitHub одете во <em>Settings → Pages</em>, под <em>Branch</em> изберете <em>main</em> (root) и кликнете <em>Save</em>.
                </li>
                <li>
                  <strong>Подготвено!</strong> Вашиот сајт ќе биде достапен во живо на вашиот бесплатен линк: <code className="text-[#F5B800] bg-[#121418] px-1.5 py-0.5 rounded">https://vashe-korisnichko-ime.github.io/da-construction/</code>.
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#252A36] bg-[#13151A] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  );
};
