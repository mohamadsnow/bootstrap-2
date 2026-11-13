import React, { useState } from 'react';
import {
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Laptop,
  Monitor,
  Smartphone,
  Sparkles,
  Tablet,
} from 'lucide-react';
import { LanguageMode } from '../types/presentation';
import { BilingualBlock } from './BilingualBlock';

interface SlideInteractiveLabProps {
  slideId: number;
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode: boolean;
}

export const SlideInteractiveLab: React.FC<SlideInteractiveLabProps> = ({
  slideId,
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  switch (slideId) {
    case 1:
      return (
        <IntroComparisonLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 2:
      return (
        <HistoryTimelineLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 3:
      return (
        <ClassInspectorLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 4:
      return (
        <InstallComparisonLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 5:
      return (
        <GridPlaygroundLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 6:
      return (
        <ComponentLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 7:
      return (
        <UtilityBuilderLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 8:
      return (
        <PracticalProjectPreviewLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 9:
      return (
        <ComparisonMatrixLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    case 10:
      return (
        <ConclusionQuizLab
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      );
    default:
      return null;
  }
};

/* -------------------------------------------------------------------------- */
/* SLIDE 1: Plain HTML vs Bootstrap Interactive Switcher                       */
/* -------------------------------------------------------------------------- */
const IntroComparisonLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [useBootstrap, setUseBootstrap] = useState(true);

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BilingualBlock
          content={{
            en: 'Interactive Demo: Plain HTML vs. Bootstrap',
            pronunciation: 'إنتراكتيف ديمو: بلين إتش تي إم إل فيرسس بوتستراب',
            ar: 'تجربة تفاعلية: HTML بدون تنسيق مقابل بوتستراب',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="heading"
        />

        <div className="inline-flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setUseBootstrap(false)}
            className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              !useBootstrap
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Plain HTML Only
          </button>
          <button
            type="button"
            onClick={() => setUseBootstrap(true)}
            className={`px-3.5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
              useBootstrap
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            With Bootstrap 5
          </button>
        </div>
      </div>

      {/* Preview Stage */}
      <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        {!useBootstrap ? (
          <div className="space-y-2 text-slate-900 dark:text-slate-100 font-serif" dir="ltr">
            <h4 className="text-xl font-bold underline">Student Profile Card</h4>
            <p className="text-sm">Name: Sara Ahmed — Computer Science Class</p>
            <button
              type="button"
              className="border border-slate-500 bg-slate-200 text-black px-2 py-0.5 text-sm cursor-pointer"
            >
              View Project
            </button>
          </div>
        ) : (
          <div
            className="max-w-md rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md p-5 space-y-3"
            dir="ltr"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Student Profile Card
              </h4>
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">
                Bootstrap Ready
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Name: Sara Ahmed — Computer Science Class
            </p>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            >
              View Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 2: Interactive History Timeline                                       */
/* -------------------------------------------------------------------------- */
const MILESTONES = [
  {
    year: '2011',
    version: 'Bootstrap 1.0 (Twitter Blueprint)',
    pronunciation: 'توينتي إيليفن · بوتستراب وان',
    arTitle: 'الانطلاقة من شركة تويتر',
    enDesc: 'Created by Mark Otto and Jacob Thornton at Twitter and released as open-source software in August 2011.',
    pronDesc: 'كرييتد باي مارك أوتو آند جايكوب ثورنتون أت تويتر إن تو ثاوزند إيليفن.',
    arDesc: 'ابتكره مارك أوتو وجايكوب ثورنتون في تويتر وتم إطلاقه كمصدر مفتوح في أغسطس 2011.',
  },
  {
    year: '2013',
    version: 'Bootstrap 3 (Mobile-First Revolution)',
    pronunciation: 'توينتي ثيرتين · بوتستراب ثري',
    arTitle: 'ثورة التصميم للهواتف أولاً',
    enDesc: 'Introduced the flat design style and the famous 12-column mobile-first responsive grid system.',
    pronDesc: 'إنتروديوسد ذا فلات ديزاين آند ذا تويلف كولوم موبايل فيرست غريد سيستم.',
    arDesc: 'قدّم التصميم المسطح ونظام الشبكة الشهير المكوّن من 12 عموداً للهواتف أولاً.',
  },
  {
    year: '2018',
    version: 'Bootstrap 4 (Flexbox Era)',
    pronunciation: 'توينتي إيتين · بوتستراب فور',
    arTitle: 'الانتقال إلى نظام Flexbox',
    enDesc: 'Rebuilt using CSS Flexbox and Sass, introducing utility classes and the modern Card component.',
    pronDesc: 'ريبيلت يوزينغ سي إس إس فليكس بوكس آند ساس، إنتروديوسينغ يوتيليتي كلاسز آند كاردز.',
    arDesc: 'أُعيد بناؤه بتقنية Flexbox ولغة Sass مع تقديم كلاسات الأدوات ومكوّن البطاقة.',
  },
  {
    year: '2021–2026',
    version: 'Bootstrap 5 (No jQuery & Dark Mode)',
    pronunciation: 'توينتي توينتي وان · بوتستراب فايف',
    arTitle: 'الاستغناء عن jQuery والوضع الداكن',
    enDesc: 'Removed jQuery for pure Vanilla JavaScript, added CSS custom properties, RTL support, and built-in Dark Mode.',
    pronDesc: 'ريموفد جيكويري فور بيور جافاسكريبت، آدد آر تي إل سبورت آند دارك مود.',
    arDesc: 'استغنى عن مكتبة jQuery لصالح JavaScript الخالصة وأضاف دعم اللغة العربية RTL والوضع الداكن.',
  },
];

const HistoryTimelineLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [activeIdx, setActiveIdx] = useState(3);
  const active = MILESTONES[activeIdx];

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <BilingualBlock
        content={{
          en: 'Interactive Timeline: Evolution of Bootstrap',
          pronunciation: 'إنتراكتيف تايم لاين: إيفولوشن أوف بوتستراب',
          ar: 'الخط الزمني التفاعلي: تطور بوتستراب عبر السنوات',
        }}
        languageMode={languageMode}
        showPronunciation={showPronunciation}
        englishFocusMode={englishFocusMode}
        variant="heading"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {MILESTONES.map((m, idx) => (
          <button
            key={m.year}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`p-3 rounded-lg border text-left transition-colors cursor-pointer ${
              idx === activeIdx
                ? 'bg-violet-600 border-violet-600 text-white'
                : 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-violet-400'
            }`}
          >
            <div className="font-mono text-sm font-bold tabular-nums">{m.year}</div>
            <div className="text-xs opacity-90 truncate mt-0.5">{m.version.split('(')[0]}</div>
          </button>
        ))}
      </div>

      <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="text-xs font-mono text-violet-700 dark:text-violet-300 font-semibold">
          {active.year} · {active.version}
        </div>
        <BilingualBlock
          content={{
            en: active.enDesc,
            pronunciation: active.pronDesc,
            ar: `${active.arTitle}: ${active.arDesc}`,
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="body"
        />
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 3: Interactive Class Inspector                                        */
/* -------------------------------------------------------------------------- */
const INSPECTOR_CLASSES = [
  {
    name: 'btn btn-primary',
    pronunciation: 'بي تي إن · بي تي إن برايمري',
    cssRules: `display: inline-block;
padding: 0.375rem 0.75rem;
font-weight: 400;
color: #ffffff;
background-color: #0d6efd;
border-radius: 0.375rem;`,
    en: 'Applies button layout, comfortable padding, rounded corners, and Bootstrap’s signature primary blue color.',
    ar: 'يطبّق تنسيق الزر ومسافاته الداخلية وحوافه الدائرية مع اللون الأزرق الأساسي.',
  },
  {
    name: 'p-4',
    pronunciation: 'بي فور',
    cssRules: `padding: 1.5rem !important; /* 24px on all 4 sides */`,
    en: 'Adds 1.5rem (24 pixels) of inner breathing space around all four sides of an element.',
    ar: 'يضيف 24 بكسل من المسافة الداخلية حول الجوانب الأربعة للعنصر.',
  },
  {
    name: 'rounded-3',
    pronunciation: 'راوندد ثري',
    cssRules: `border-radius: var(--bs-border-radius-lg); /* 0.5rem */`,
    en: 'Softens sharp rectangular box corners using Bootstrap’s large border-radius token.',
    ar: 'ينعّم زوايا الصندوق الحادة ليمنحه مظهر الزوايا الدائرية الحديثة.',
  },
  {
    name: 'shadow',
    pronunciation: 'شادو',
    cssRules: `box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;`,
    en: 'Creates clean visual elevation so cards and containers stand out from the background.',
    ar: 'ينشئ ظلاً ناعماً يبرز البطاقة أو الصندوق فوق خلفية الصفحة.',
  },
];

const ClassInspectorLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [selected, setSelected] = useState(0);
  const current = INSPECTOR_CLASSES[selected];

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <BilingualBlock
        content={{
          en: 'Interactive Class Inspector: See the Real CSS Behind Each Class',
          pronunciation: 'إنتراكتيف كلاس إنسبيكتور: سي ذا ريل سي إس إس بيهايند إيتش كلاس',
          ar: 'فاحص الكلاسات التفاعلي: شاهد كود CSS الحقيقي خلف كل كلاس',
        }}
        languageMode={languageMode}
        showPronunciation={showPronunciation}
        englishFocusMode={englishFocusMode}
        variant="heading"
      />

      <div className="flex flex-wrap gap-2">
        {INSPECTOR_CLASSES.map((cls, i) => (
          <button
            key={cls.name}
            type="button"
            onClick={() => setSelected(i)}
            className={`px-3.5 py-2 rounded-lg font-mono text-sm font-medium border transition-colors cursor-pointer ${
              selected === i
                ? 'bg-violet-600 border-violet-600 text-white'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-violet-400'
            }`}
          >
            .{cls.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        <div className="bg-slate-950 text-emerald-300 rounded-xl p-4 font-mono text-xs sm:text-sm overflow-x-auto" dir="ltr">
          <div className="text-slate-400 mb-2">/* Compiled Bootstrap CSS */</div>
          <pre className="leading-relaxed">
            <code>{current.cssRules}</code>
          </pre>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
          <BilingualBlock
            content={{
              en: current.en,
              pronunciation: current.pronunciation,
              ar: current.ar,
            }}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
            variant="compact"
          />
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 4: CDN vs NPM Interactive Comparison                                  */
/* -------------------------------------------------------------------------- */
const InstallComparisonLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [choice, setChoice] = useState<'cdn' | 'npm'>('cdn');

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BilingualBlock
          content={{
            en: 'Which Installation Method Should You Choose?',
            pronunciation: 'ويتش إنستوليشن ميثود شود يو تشوز؟',
            ar: 'أي طريقة تثبيت تختار لمشروعك؟',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="heading"
        />

        <div className="inline-flex p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setChoice('cdn')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              choice === 'cdn'
                ? 'bg-violet-600 text-white'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            CDN Link
          </button>
          <button
            type="button"
            onClick={() => setChoice('npm')}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              choice === 'npm'
                ? 'bg-violet-600 text-white'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            NPM Package
          </button>
        </div>
      </div>

      {choice === 'cdn' ? (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <BilingualBlock
            content={{
              en: 'Best for beginners, school homework, single HTML pages, and quick classroom demos. Requires an active internet connection.',
              pronunciation: 'بيست فور بيغينرز، سكول هوموورك، آند كويك كلاس روم ديموز.',
              ar: 'الأفضل للمبتدئين والواجبات المدرسية وصفحات HTML السريعة. يتطلب اتصالاً بالإنترنت لتحميل الملفات.',
            }}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
            variant="body"
          />
        </div>
      ) : (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
          <BilingualBlock
            content={{
              en: 'Best for React, Vite, Angular, or large websites. Works offline and lets you customize theme colors using Sass.',
              pronunciation: 'بيست فور رياكت، فايت، أور لارج ويبسايتس. ووركس أوفلاين آند سبورتس ساس.',
              ar: 'الأفضل لمشاريع React و Vite والمواقع الكبيرة. يعمل بدون إنترنت ويتيح تخصيص الألوان عبر Sass.',
            }}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
            variant="body"
          />
        </div>
      )}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 5: Interactive 12-Column Grid Playground                              */
/* -------------------------------------------------------------------------- */
type DeviceSize = 'mobile' | 'tablet' | 'desktop';
type SplitPreset = 'thirds' | 'sidebar' | 'halves' | 'responsive';

const GridPlaygroundLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [device, setDevice] = useState<DeviceSize>('desktop');
  const [preset, setPreset] = useState<SplitPreset>('responsive');

  const getColumns = (): { label: string; cols: number; classText: string }[] => {
    if (preset === 'thirds') {
      return [
        { label: 'Col 1', cols: 4, classText: 'col-4' },
        { label: 'Col 2', cols: 4, classText: 'col-4' },
        { label: 'Col 3', cols: 4, classText: 'col-4' },
      ];
    }
    if (preset === 'sidebar') {
      return [
        { label: 'Sidebar', cols: device === 'mobile' ? 12 : 4, classText: 'col-12 col-md-4' },
        { label: 'Main Content', cols: device === 'mobile' ? 12 : 8, classText: 'col-12 col-md-8' },
      ];
    }
    if (preset === 'halves') {
      return [
        { label: 'Left Half', cols: device === 'mobile' ? 12 : 6, classText: 'col-12 col-md-6' },
        { label: 'Right Half', cols: device === 'mobile' ? 12 : 6, classText: 'col-12 col-md-6' },
      ];
    }
    // responsive: col-12 col-md-6 col-lg-4
    const span = device === 'mobile' ? 12 : device === 'tablet' ? 6 : 4;
    return [
      { label: 'Card A', cols: span, classText: 'col-12 col-md-6 col-lg-4' },
      { label: 'Card B', cols: span, classText: 'col-12 col-md-6 col-lg-4' },
      { label: 'Card C', cols: device === 'tablet' ? 12 : span, classText: 'col-12 col-md-12 col-lg-4' },
    ];
  };

  const columns = getColumns();
  const containerWidthClass =
    device === 'mobile' ? 'max-w-[320px]' : device === 'tablet' ? 'max-w-[580px]' : 'max-w-full';

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BilingualBlock
          content={{
            en: 'Interactive 12-Column Grid Playground',
            pronunciation: 'إنتراكتيف تويلف كولوم غريد بلايغراوند',
            ar: 'محاكي نظام الشبكة التفاعلي (12 عموداً)',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="heading"
        />

        {/* Device Width Buttons */}
        <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setDevice('mobile')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              device === 'mobile' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile (&lt;576px)</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('tablet')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              device === 'tablet' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet (md)</span>
          </button>
          <button
            type="button"
            onClick={() => setDevice('desktop')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              device === 'desktop' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop (lg)</span>
          </button>
        </div>
      </div>

      {/* Layout Split Presets */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'responsive', label: 'Responsive (12 → 6 → 4)' },
          { id: 'thirds', label: '3 Equal Columns (col-4)' },
          { id: 'sidebar', label: 'Sidebar + Main (4 + 8)' },
          { id: 'halves', label: '2 Halves (col-6)' },
        ].map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPreset(p.id as SplitPreset)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              preset === p.id
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Visual Grid Stage */}
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-x-auto">
        <div
          className={`mx-auto transition-all duration-200 border border-dashed border-violet-400/70 rounded-lg p-3 bg-white dark:bg-slate-900 ${containerWidthClass}`}
          dir="ltr"
        >
          {/* 12-track faint background guide */}
          <div className="grid grid-cols-12 gap-2 mb-2 text-[10px] font-mono text-center text-slate-400">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="bg-slate-100 dark:bg-slate-800/80 py-0.5 rounded">
                {idx + 1}
              </div>
            ))}
          </div>

          {/* Live Columns */}
          <div className="grid grid-cols-12 gap-3">
            {columns.map((col, idx) => (
              <div
                key={idx}
                style={{ gridColumn: `span ${col.cols} / span ${col.cols}` }}
                className="p-3 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-center shadow-sm"
              >
                <div className="text-sm font-semibold">{col.label}</div>
                <div className="font-mono text-[11px] opacity-90 mt-1">
                  .{col.classText} ({col.cols}/12)
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 6: Interactive Component Lab                                          */
/* -------------------------------------------------------------------------- */
type CompTab = 'navbar' | 'card' | 'buttons' | 'alert';

const COMPONENT_DEMOS: Record<
  CompTab,
  {
    label: string;
    arLabel: string;
    code: string;
  }
> = {
  navbar: {
    label: 'Navbar',
    arLabel: 'شريط التنقل',
    code: `<nav class="navbar navbar-expand-lg bg-dark navbar-dark px-3 rounded">
  <a class="navbar-brand fw-bold" href="#">StudyHub</a>
  <div class="navbar-nav ms-auto">
    <a class="nav-link active" href="#">Home</a>
    <a class="nav-link" href="#">Lessons</a>
  </div>
</nav>`,
  },
  card: {
    label: 'Card',
    arLabel: 'بطاقة',
    code: `<div class="card shadow-sm" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Bootstrap Module</h5>
    <p class="card-text">Build clean responsive UI blocks fast.</p>
    <a href="#" class="btn btn-primary">Open Lesson</a>
  </div>
</div>`,
  },
  buttons: {
    label: 'Buttons',
    arLabel: 'الأزرار',
    code: `<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-outline-secondary">Outline</button>`,
  },
  alert: {
    label: 'Alert',
    arLabel: 'تنبيه',
    code: `<div class="alert alert-success" role="alert">
  Well done! Your Bootstrap project is ready.
</div>`,
  },
};

const ComponentLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [tab, setTab] = useState<CompTab>('navbar');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(COMPONENT_DEMOS[tab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <BilingualBlock
          content={{
            en: 'Interactive Component Gallery',
            pronunciation: 'إنتراكتيف كومبوننت غاليري',
            ar: 'معرض المكونات التفاعلي',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="heading"
        />

        <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
          {(Object.keys(COMPONENT_DEMOS) as CompTab[]).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                tab === key
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {COMPONENT_DEMOS[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
        {/* Live Preview */}
        <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-center" dir="ltr">
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
            Live Rendered Output
          </div>

          {tab === 'navbar' && (
            <div className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-900 text-white">
              <span className="font-bold text-base">StudyHub</span>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-white font-medium">Home</span>
                <span className="text-slate-400">Lessons</span>
                <span className="text-slate-400">Contact</span>
              </div>
            </div>
          )}

          {tab === 'card' && (
            <div className="max-w-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-2.5">
              <h5 className="font-bold text-slate-900 dark:text-white text-base">
                Bootstrap Module
              </h5>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Build clean responsive UI blocks fast.
              </p>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded-md bg-blue-600 text-white text-sm font-medium cursor-pointer"
              >
                Open Lesson
              </button>
            </div>
          )}

          {tab === 'buttons' && (
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium cursor-pointer"
              >
                Primary
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium cursor-pointer"
              >
                Success
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md border border-slate-400 text-slate-700 dark:text-slate-200 text-sm font-medium cursor-pointer"
              >
                Outline
              </button>
            </div>
          )}

          {tab === 'alert' && (
            <div
              role="alert"
              className="flex items-center gap-2.5 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm font-medium"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Well done! Your Bootstrap project is ready.</span>
            </div>
          )}
        </div>

        {/* Code */}
        <div className="rounded-xl bg-slate-950 text-slate-100 p-4 flex flex-col justify-between" dir="ltr">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-slate-400">HTML</span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-violet-600 text-xs text-white transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
            <code>{COMPONENT_DEMOS[tab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 7: Interactive Utility Builder                                        */
/* -------------------------------------------------------------------------- */
const UtilityBuilderLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [pad, setPad] = useState<'p-2' | 'p-4' | 'p-5'>('p-4');
  const [bg, setBg] = useState<'bg-primary text-white' | 'bg-dark text-white' | 'bg-light text-dark'>('bg-primary text-white');
  const [rounded, setRounded] = useState<'rounded-0' | 'rounded-3' | 'rounded-4'>('rounded-3');
  const [shadow, setShadow] = useState<'shadow-none' | 'shadow-sm' | 'shadow-lg'>('shadow-sm');

  const classString = `${pad} ${bg} ${rounded} ${shadow}`;

  const previewPadClass = pad === 'p-2' ? 'p-2' : pad === 'p-4' ? 'p-5' : 'p-7';
  const previewBgClass =
    bg === 'bg-primary text-white'
      ? 'bg-blue-600 text-white'
      : bg === 'bg-dark text-white'
      ? 'bg-slate-900 text-white'
      : 'bg-slate-100 text-slate-900 border border-slate-300';
  const previewRoundClass =
    rounded === 'rounded-0' ? 'rounded-none' : rounded === 'rounded-3' ? 'rounded-xl' : 'rounded-2xl';
  const previewShadowClass =
    shadow === 'shadow-none' ? 'shadow-none' : shadow === 'shadow-sm' ? 'shadow-sm' : 'shadow-xl';

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
      <BilingualBlock
        content={{
          en: 'Interactive Utility Builder: Mix Classes Live',
          pronunciation: 'إنتراكتيف يوتيليتي بيلدر: ميكس كلاسز لايف',
          ar: 'أداة بناء الكلاسات التفاعلية: جرّب دمج الأدوات مباشرة',
        }}
        languageMode={languageMode}
        showPronunciation={showPronunciation}
        englishFocusMode={englishFocusMode}
        variant="heading"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" dir="ltr">
        <div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            Padding (p-*)
          </div>
          <div className="flex gap-1">
            {(['p-2', 'p-4', 'p-5'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setPad(v)}
                className={`flex-1 py-1.5 rounded text-xs font-mono cursor-pointer ${
                  pad === v ? 'bg-violet-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            Color Theme
          </div>
          <div className="flex gap-1">
            {[
              { val: 'bg-primary text-white' as const, label: 'Primary' },
              { val: 'bg-dark text-white' as const, label: 'Dark' },
              { val: 'bg-light text-dark' as const, label: 'Light' },
            ].map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setBg(v.val)}
                className={`flex-1 py-1.5 rounded text-xs font-medium cursor-pointer ${
                  bg === v.val ? 'bg-violet-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            Corners
          </div>
          <div className="flex gap-1">
            {(['rounded-0', 'rounded-3', 'rounded-4'] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setRounded(v)}
                className={`flex-1 py-1.5 rounded text-xs font-mono cursor-pointer ${
                  rounded === v ? 'bg-violet-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                {v.replace('rounded-', 'r-')}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            Shadow
          </div>
          <div className="flex gap-1">
            {[
              { val: 'shadow-none' as const, label: 'None' },
              { val: 'shadow-sm' as const, label: 'Small' },
              { val: 'shadow-lg' as const, label: 'Large' },
            ].map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setShadow(v.val)}
                className={`flex-1 py-1.5 rounded text-xs font-medium cursor-pointer ${
                  shadow === v.val ? 'bg-violet-600 text-white' : 'bg-slate-100 dark:bg-slate-800'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Preview Box */}
      <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4" dir="ltr">
        <div className={`transition-all duration-200 ${previewPadClass} ${previewBgClass} ${previewRoundClass} ${previewShadowClass}`}>
          <div className="font-bold text-base">Live Bootstrap Utility Box</div>
          <div className="text-sm opacity-90 mt-1">
            All styling applied using only Bootstrap utility classes!
          </div>
        </div>

        <div className="font-mono text-xs sm:text-sm bg-slate-900 text-violet-300 p-3 rounded-lg overflow-x-auto">
          {`<div class="${classString}">...</div>`}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 8: Practical Mini-Website Live Preview                                */
/* -------------------------------------------------------------------------- */
const PracticalProjectPreviewLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <BilingualBlock
          content={{
            en: 'Live Project Output: Tech Club Landing Page',
            pronunciation: 'لايف بروجيكت أوتبوت: تيك كلاب لاندينغ بيج',
            ar: 'معاينة النتيجة المباشرة للمشروع العملي',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="heading"
        />

        <div className="inline-flex p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              viewport === 'desktop' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              viewport === 'mobile' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
        <div
          className={`mx-auto rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 transition-all duration-200 ${
            viewport === 'mobile' ? 'max-w-[330px]' : 'w-full'
          }`}
          dir="ltr"
        >
          {/* Rendered Mini Site */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white">
            <span className="font-bold text-sm">Tech Club</span>
            <button
              type="button"
              className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-medium cursor-pointer"
            >
              Join
            </button>
          </div>

          <div className="px-4 py-6 text-center space-y-1.5">
            <h4 className="font-bold text-lg text-slate-900 dark:text-white">
              Build Faster with Bootstrap
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Clean layout in under 20 lines of HTML.
            </p>
          </div>

          <div
            className={`px-4 pb-5 grid gap-3 ${
              viewport === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
            }`}
          >
            {['HTML Structure', 'CSS Grid System', 'JS Components'].map((item) => (
              <div
                key={item}
                className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/70 text-center text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 9: Comparison Matrix                                                  */
/* -------------------------------------------------------------------------- */
const ComparisonMatrixLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const rows = [
    {
      feature: 'Setup Speed · سرعة الإعداد',
      bootstrap: 'Fastest (CDN or NPM)',
      tailwind: 'Medium (Build config)',
      custom: 'Slow (Write from scratch)',
    },
    {
      feature: 'Ready Components · مكونات جاهزة',
      bootstrap: 'Yes (Navbar, Modal, Card)',
      tailwind: 'No (Build your own)',
      custom: 'No (Build your own)',
    },
    {
      feature: 'Design Freedom · حرية التصميم',
      bootstrap: 'Moderate (Themeable)',
      tailwind: 'Very High',
      custom: '100% Unlimited',
    },
    {
      feature: 'Beginner Friendly · سهولة للمبتدئين',
      bootstrap: 'High (Ideal for students)',
      tailwind: 'Moderate',
      custom: 'Requires deep CSS knowledge',
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4">
      <BilingualBlock
        content={{
          en: 'Side-by-Side Framework Comparison',
          pronunciation: 'سايد باي سايد فريم وورك كومباريسون',
          ar: 'مقارنة شاملة بين بوتستراب وتايلويند و CSS اليدوي',
        }}
        languageMode={languageMode}
        showPronunciation={showPronunciation}
        englishFocusMode={englishFocusMode}
        variant="heading"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
              <th className="py-3 pr-4 font-semibold">Criteria</th>
              <th className="py-3 px-4 font-semibold text-violet-700 dark:text-violet-300">Bootstrap 5</th>
              <th className="py-3 px-4 font-semibold">Tailwind CSS</th>
              <th className="py-3 pl-4 font-semibold">Custom CSS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {rows.map((r) => (
              <tr key={r.feature} className="text-slate-700 dark:text-slate-200">
                <td className="py-3 pr-4 font-medium">{r.feature}</td>
                <td className="py-3 px-4 font-semibold text-violet-700 dark:text-violet-300">
                  {r.bootstrap}
                </td>
                <td className="py-3 px-4">{r.tailwind}</td>
                <td className="py-3 pl-4">{r.custom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SLIDE 10: Interactive Class Quiz & Thank You                                */
/* -------------------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  {
    q: 'How many columns are in the Bootstrap Grid System?',
    qAr: 'كم عدد الأعمدة في نظام الشبكة داخل بوتستراب؟',
    options: ['8 columns', '10 columns', '12 columns', '16 columns'],
    correct: 2,
  },
  {
    q: 'Which class adds inner padding inside an element?',
    qAr: 'أي كلاس يضيف مسافة داخلية (Padding) للعنصر؟',
    options: ['m-4', 'p-4', 'g-4', 'col-4'],
    correct: 1,
  },
  {
    q: 'What does CDN stand for?',
    qAr: 'ما معنى اختصار CDN؟',
    options: [
      'Code Design Network',
      'Content Delivery Network',
      'Central Data Node',
      'CSS Document Name',
    ],
    correct: 1,
  },
];

const ConclusionQuizLab: React.FC<Omit<SlideInteractiveLabProps, 'slideId'>> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const score = QUIZ_QUESTIONS.reduce((acc, q, idx) => {
    return acc + (answers[idx] === q.correct ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <BilingualBlock
            content={{
              en: 'Quick Classroom Check: Test Your Knowledge',
              pronunciation: 'كويك كلاس روم تشيك: تيست يور نوليدج',
              ar: 'اختبار صفّي سريع: اختبر معلوماتك مع زملائك',
            }}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
            variant="heading"
          />

          <div className="text-sm font-mono font-semibold tabular-nums text-violet-700 dark:text-violet-300">
            Score: {score} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        <div className="space-y-4">
          {QUIZ_QUESTIONS.map((item, qIdx) => (
            <div
              key={item.q}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div>
                <div className="font-semibold text-slate-900 dark:text-white" dir="ltr">
                  {qIdx + 1}. {item.q}
                </div>
                {(languageMode === 'both' || languageMode === 'ar') && (
                  <div className="font-arabic text-sm text-slate-600 dark:text-slate-300 mt-1" dir="rtl">
                    {item.qAr}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" dir="ltr">
                {item.options.map((opt, oIdx) => {
                  const chosen = answers[qIdx] === oIdx;
                  const isCorrect = oIdx === item.correct;
                  const answered = answers[qIdx] !== undefined;

                  let style =
                    'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-violet-400';
                  if (answered && chosen && isCorrect) {
                    style = 'bg-emerald-600 border-emerald-600 text-white';
                  } else if (answered && chosen && !isCorrect) {
                    style = 'bg-rose-600 border-rose-600 text-white';
                  } else if (answered && isCorrect) {
                    style =
                      'bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-800 dark:text-emerald-200';
                  }

                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))}
                      className={`px-3.5 py-2.5 rounded-lg border text-sm font-medium text-left transition-colors cursor-pointer ${style}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Closing Banner */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 text-white p-6 sm:p-8 text-center space-y-3 shadow-md">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 mx-auto">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-display">
          Thank You for Listening! · Any Questions?
        </h3>
        <div className="font-arabic text-base sm:text-lg text-violet-100" dir="rtl">
          (ثانك يو فور ليسينينغ! إني كويستشنز؟)
        </div>
        <div className="font-arabic text-lg sm:text-xl font-semibold text-white" dir="rtl">
          شكراً لحسن استماعكم! هل لديكم أي أسئلة؟
        </div>
        <div className="pt-2 text-xs sm:text-sm text-violet-100">
          Presented by Team Bootstrap (Members 1, 2, 3 & 4) · Web Development Masterclass
        </div>
      </div>
    </div>
  );
};
