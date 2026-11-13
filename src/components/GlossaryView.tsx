import React, { useMemo, useState } from 'react';
import { ArrowDownAZ, BookMarked, Search } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/vocabularyData';
import { GlossaryCategory, LanguageMode } from '../types/presentation';
import { BilingualBlock } from './BilingualBlock';

interface GlossaryViewProps {
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode: boolean;
}

const CATEGORIES: ('All' | GlossaryCategory)[] = [
  'All',
  'Core Web',
  'Layout & Grid',
  'Components',
  'Utilities & Tools',
];

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'All' | GlossaryCategory>('All');
  const [sortAlphabetical, setSortAlphabetical] = useState(true);

  const visibleTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = GLOSSARY_TERMS.filter((t) => {
      const matchesCategory = category === 'All' || t.category === category;
      const matchesQuery =
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.arMeaning.toLowerCase().includes(q) ||
        t.pronunciation.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });

    if (sortAlphabetical) {
      return [...filtered].sort((a, b) => a.term.localeCompare(b.term));
    }
    return filtered;
  }, [query, category, sortAlphabetical]);

  return (
    <div className="space-y-8">
      {/* Header & Controls */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
              <BookMarked className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 tabular-nums">
              Final Glossary Reference · {GLOSSARY_TERMS.length} Bootstrap & Web Terms
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter glossary terms..."
                aria-label="Filter glossary terms"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>

            <button
              type="button"
              onClick={() => setSortAlphabetical((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                sortAlphabetical
                  ? 'bg-violet-600 border-violet-600 text-white'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200'
              }`}
            >
              <ArrowDownAZ className="w-4 h-4" />
              <span>A–Z</span>
            </button>
          </div>
        </div>

        <BilingualBlock
          content={{
            en: 'Complete Bootstrap & Web Development Glossary',
            pronunciation: 'كومبليت بوتستراب آند ويب ديفيلوبمنت غلوساري',
            ar: 'المعجم الشامل لمصطلحات بوتستراب وتطوير الويب',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="hero"
        />

        {/* Category Segmented Filter */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                category === cat
                  ? 'bg-slate-900 text-white dark:bg-violet-600'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Table / Cards */}
      {visibleTerms.length === 0 ? (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center text-slate-500 dark:text-slate-400">
          No glossary terms match your filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {visibleTerms.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-mono tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{item.category}</span>
              </div>

              <div className="space-y-1 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white" dir="ltr">
                    {item.term}
                  </h3>
                  {(languageMode === 'both' || showPronunciation) && (
                    <span className="font-arabic text-sm font-medium text-violet-700 dark:text-violet-300" dir="rtl">
                      ({item.pronunciation})
                    </span>
                  )}
                </div>
                {(languageMode === 'both' || languageMode === 'ar') && (
                  <div className="font-arabic text-base font-bold text-indigo-700 dark:text-indigo-300" dir="rtl">
                    {item.arMeaning}
                  </div>
                )}
              </div>

              <BilingualBlock
                content={item.note}
                languageMode={languageMode}
                showPronunciation={showPronunciation}
                englishFocusMode={false}
                variant="compact"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
