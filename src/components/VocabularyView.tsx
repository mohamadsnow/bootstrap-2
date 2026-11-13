import React, { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { CORE_VOCABULARY } from '../data/vocabularyData';
import { LanguageMode } from '../types/presentation';
import { BilingualBlock } from './BilingualBlock';

interface VocabularyViewProps {
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode: boolean;
}

export const VocabularyView: React.FC<VocabularyViewProps> = ({
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CORE_VOCABULARY;
    return CORE_VOCABULARY.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.arMeaning.toLowerCase().includes(q) ||
        item.pronunciation.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Essential Presentation Terms · {CORE_VOCABULARY.length} Core Words
            </span>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search word or Arabic meaning..."
              aria-label="Search core vocabulary"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>
        </div>

        <BilingualBlock
          content={{
            en: 'Essential Technical Vocabulary',
            pronunciation: 'إيسينشال تيكنيكال فوكابيولاري',
            ar: 'المفردات التقنية الأساسية للعرض التقديمي',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="hero"
        />

        <BilingualBlock
          content={{
            en: 'Practice pronouncing these 15 core web development words before presenting your slides.',
            pronunciation: 'براكتيس بروناونسينغ ذيس فيفتين كور ويب ديفيلوبمنت ووردز بيفور بريزينتينغ.',
            ar: 'تدرّب على نطق وفهم هذه الكلمات الخمس عشرة الأساسية قبل تقديم شرائحك أمام المعلم.',
          }}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
          variant="body"
        />
      </div>

      {/* Vocabulary Cards Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center text-slate-500 dark:text-slate-400">
          No matching vocabulary term found. Try another keyword.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Term + Pronunciation + Arabic Meaning */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-2.5" dir="ltr">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                      {item.term}
                    </h3>
                    {(languageMode === 'both' || showPronunciation) && (
                      <span className="font-arabic text-sm sm:text-base font-semibold text-violet-700 dark:text-violet-300">
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

                {/* Explanation */}
                <BilingualBlock
                  content={item.explanation}
                  languageMode={languageMode}
                  showPronunciation={showPronunciation}
                  englishFocusMode={englishFocusMode}
                  variant="compact"
                />

                {/* Example Sentence */}
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 space-y-1">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    Example Sentence · مثال في جملة
                  </div>
                  <BilingualBlock
                    content={item.exampleSentence}
                    languageMode={languageMode}
                    showPronunciation={showPronunciation}
                    englishFocusMode={false}
                    variant="compact"
                  />
                </div>
              </div>

              {item.codeSnippet && (
                <div
                  className="font-mono text-xs bg-slate-950 text-violet-300 px-3.5 py-2.5 rounded-lg overflow-x-auto"
                  dir="ltr"
                >
                  <code>{item.codeSnippet}</code>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
