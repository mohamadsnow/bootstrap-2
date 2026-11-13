import React, { useCallback, useEffect, useState } from 'react';
import {
  BookMarked,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Maximize2,
  Minimize2,
  Moon,
  PanelLeft,
  Presentation,
  Sun,
  Volume2,
  X,
} from 'lucide-react';
import { BootstrapLogo } from './components/BootstrapLogo';
import { GlossaryView } from './components/GlossaryView';
import { SlideView } from './components/SlideView';
import { VocabularyView } from './components/VocabularyView';
import { SLIDES_DATA } from './data/slidesData';
import { LanguageMode, TeamMemberId, ViewMode } from './types/presentation';

const MEMBER_GROUPS: { id: TeamMemberId; en: string; ar: string }[] = [
  { id: 'member-1', en: 'Member 1', ar: 'العضو الأول' },
  { id: 'member-2', en: 'Member 2', ar: 'العضو الثاني' },
  { id: 'member-3', en: 'Member 3', ar: 'العضو الثالث' },
  { id: 'member-4', en: 'Member 4', ar: 'العضو الرابع' },
  { id: 'group', en: 'Group', ar: 'المجموعة' },
];

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [languageMode, setLanguageMode] = useState<LanguageMode>('both');
  const [showPronunciationInEnOnly, setShowPronunciationInEnOnly] = useState(true);
  const [englishFocusMode, setEnglishFocusMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bs-theme') === 'dark';
    }
    return false;
  });

  const totalSlides = SLIDES_DATA.length;
  const activeSlide = SLIDES_DATA[currentSlideIndex];
  const progressPercent = Math.round(((currentSlideIndex + 1) / totalSlides) * 100);

  // Sync dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('bs-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('bs-theme', 'light');
    }
  }, [isDark]);

  // Listen to browser fullscreen changes
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Gracefully ignore if iframe blocks fullscreen API
    }
  };

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(totalSlides - 1, index));
    setCurrentSlideIndex(clamped);
    setViewMode('slides');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [totalSlides]);

  const goNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, totalSlides, goToSlide]);

  const goPrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, goToSlide]);

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (viewMode === 'slides') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          e.preventDefault();
          goNext();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          goPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, goNext, goPrev]);

  const renderSidebarLinks = () => (
    <div className="space-y-6">
      {/* Slide Groups by 4 Students + Group */}
      {MEMBER_GROUPS.map((group) => {
        const groupSlides = SLIDES_DATA.filter((s) => s.memberId === group.id);
        return (
          <div key={group.id} className="space-y-1.5">
            <div className="px-3 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>{group.en}</span>
              <span className="font-arabic" dir="rtl">
                {group.ar}
              </span>
            </div>
            <div className="space-y-1">
              {groupSlides.map((slide) => {
                const idx = slide.id - 1;
                const isActive = viewMode === 'slides' && currentSlideIndex === idx;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-start gap-2.5 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold tabular-nums mt-0.5 shrink-0 ${
                        isActive ? 'text-violet-100' : 'text-slate-400 dark:text-slate-500'
                      }`}
                    >
                      {String(slide.id).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium leading-snug truncate">
                        {slide.title.en}
                      </span>
                      {languageMode !== 'en' && (
                        <span
                          dir="rtl"
                          className={`block font-arabic text-xs mt-0.5 truncate ${
                            isActive ? 'text-violet-100' : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {slide.title.ar}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Dedicated Reference Pages */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
        <div className="px-3 pb-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Reference Sections · المراجع
        </div>
        <button
          type="button"
          onClick={() => {
            setViewMode('vocabulary');
            setMobileMenuOpen(false);
          }}
          className={`w-full px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
            viewMode === 'vocabulary'
              ? 'bg-violet-600 text-white'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="truncate">Core Vocabulary (15)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setViewMode('glossary');
            setMobileMenuOpen(false);
          }}
          className={`w-full px-3 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
            viewMode === 'glossary'
              ? 'bg-violet-600 text-white'
              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookMarked className="w-4 h-4 shrink-0" />
          <span className="truncate">Full Glossary (34 Terms)</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Top Bar — 3-Zone Single-Row Contract */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <button
            type="button"
            onClick={() => goToSlide(0)}
            className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-violet-600 rounded-lg"
          >
            <BootstrapLogo size={32} />
            <span className="text-lg font-bold font-display tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0">
              Bootstrap Masterclass
            </span>
          </button>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              type="button"
              onClick={() => setViewMode('slides')}
              className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'slides'
                  ? 'border-violet-600 text-violet-700 dark:text-violet-300 font-semibold'
                  : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Slides
            </button>
            <button
              type="button"
              onClick={() => setViewMode('vocabulary')}
              className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'vocabulary'
                  ? 'border-violet-600 text-violet-700 dark:text-violet-300 font-semibold'
                  : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Vocabulary
            </button>
            <button
              type="button"
              onClick={() => setViewMode('glossary')}
              className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'glossary'
                  ? 'border-violet-600 text-violet-700 dark:text-violet-300 font-semibold'
                  : 'border-transparent text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Glossary
            </button>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span>Exit Fullscreen</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  <span>Fullscreen</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Presentation Workspace Controls Toolbar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Sidebar toggles & Slide Counter + Progress */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap cursor-pointer"
            >
              <PanelLeft className="w-4 h-4" />
              <span>Menu</span>
            </button>

            <button
              type="button"
              onClick={() => setSidebarOpen((prev) => !prev)}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap cursor-pointer"
            >
              <PanelLeft className="w-4 h-4" />
              <span>{sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}</span>
            </button>

            {viewMode === 'slides' && (
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs sm:text-sm font-semibold tabular-nums text-slate-700 dark:text-slate-200 whitespace-nowrap">
                  Slide {String(currentSlideIndex + 1).padStart(2, '0')} / {totalSlides}
                </span>
                <div
                  className="w-24 sm:w-36 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Presentation progress"
                >
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-200"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400 tabular-nums hidden sm:inline">
                  {progressPercent}%
                </span>
              </div>
            )}
          </div>

          {/* Right: Language Selector + Pronunciation Toggle + English Presentation Mode + Dark Mode */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Language Display Selector */}
            <div
              className="inline-flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-800"
              role="group"
              aria-label="Language display selector"
            >
              {(
                [
                  { id: 'both', label: 'EN + AR' },
                  { id: 'en', label: 'English' },
                  { id: 'ar', label: 'العربية' },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLanguageMode(opt.id)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    languageMode === opt.id
                      ? 'bg-white dark:bg-slate-700 text-violet-700 dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Optional Pronunciation Toggle when English Only is selected */}
            {languageMode === 'en' && (
              <button
                type="button"
                onClick={() => setShowPronunciationInEnOnly((prev) => !prev)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  showPronunciationInEnOnly
                    ? 'bg-violet-600 border-violet-600 text-white'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Pronunciation: {showPronunciationInEnOnly ? 'On' : 'Off'}</span>
              </button>
            )}

            {/* English Presentation Mode */}
            <button
              type="button"
              onClick={() => setEnglishFocusMode((prev) => !prev)}
              title="Enlarge English text for oral presentation"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                englishFocusMode
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Present Mode</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 whitespace-nowrap cursor-pointer"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
              <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Collapsible Sidebar + Presentation Stage */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex gap-8">
        {/* Desktop Sidebar */}
        {sidebarOpen && (
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {renderSidebarLinks()}
            </div>
          </aside>
        )}

        {/* Mobile Drawer Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-slate-950/60"
              onClick={() => setMobileMenuOpen(false)}
            />
            <aside className="relative w-80 max-w-[85vw] bg-white dark:bg-slate-900 h-full p-5 overflow-y-auto shadow-xl flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 dark:text-white">
                  <GraduationCap className="w-5 h-5 text-violet-600" />
                  <span>Navigation</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation drawer"
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile View Switcher */}
              <div className="grid grid-cols-3 gap-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                {(['slides', 'vocabulary', 'glossary'] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => {
                      setViewMode(v);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 rounded-md text-xs font-medium capitalize cursor-pointer ${
                      viewMode === v
                        ? 'bg-violet-600 text-white'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>

              {renderSidebarLinks()}
            </aside>
          </div>
        )}

        {/* Primary Stage */}
        <main className="flex-1 min-w-0 space-y-8">
          {viewMode === 'slides' && (
            <>
              <SlideView
                slide={activeSlide}
                totalSlides={totalSlides}
                languageMode={languageMode}
                showPronunciation={showPronunciationInEnOnly}
                englishFocusMode={englishFocusMode}
              />

              {/* Previous / Next Footer Navigation */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentSlideIndex === 0}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Slide</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {SLIDES_DATA.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goToSlide(idx)}
                      aria-label={`Go to slide ${s.id}: ${s.title.en}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentSlideIndex
                          ? 'w-7 bg-violet-600'
                          : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-violet-400'
                      }`}
                    />
                  ))}
                </div>

                {currentSlideIndex < totalSlides - 1 ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity cursor-pointer"
                  >
                    <span>Next Slide</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setViewMode('glossary')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:opacity-95 transition-opacity cursor-pointer"
                  >
                    <span>Open Final Glossary (34)</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}

          {viewMode === 'vocabulary' && (
            <VocabularyView
              languageMode={languageMode}
              showPronunciation={showPronunciationInEnOnly}
              englishFocusMode={englishFocusMode}
            />
          )}

          {viewMode === 'glossary' && (
            <GlossaryView
              languageMode={languageMode}
              showPronunciation={showPronunciationInEnOnly}
              englishFocusMode={englishFocusMode}
            />
          )}
        </main>
      </div>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>Bootstrap Masterclass · Bilingual English & Arabic Presentation (4-Student Group)</span>
          <span>Keyboard Navigation: ← Previous · → Next</span>
        </div>
      </footer>
    </div>
  );
}
