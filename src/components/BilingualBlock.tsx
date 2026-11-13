import React from 'react';
import { BilingualText, LanguageMode } from '../types/presentation';

interface BilingualBlockProps {
  content: BilingualText;
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode?: boolean;
  variant?: 'hero' | 'heading' | 'body' | 'compact';
  className?: string;
}

export const BilingualBlock: React.FC<BilingualBlockProps> = ({
  content,
  languageMode,
  showPronunciation,
  englishFocusMode = false,
  variant = 'body',
  className = '',
}) => {
  const showEn = languageMode === 'both' || languageMode === 'en';
  const showAr = languageMode === 'both' || languageMode === 'ar';
  const displayPronunciation =
    languageMode === 'both' || (languageMode === 'en' && showPronunciation);

  const enClasses = {
    hero: englishFocusMode
      ? 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight [text-wrap:balance]'
      : 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight [text-wrap:balance]',
    heading: englishFocusMode
      ? 'text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-snug'
      : 'text-lg sm:text-xl font-semibold text-slate-900 dark:text-white leading-snug',
    body: englishFocusMode
      ? 'text-lg sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed font-medium'
      : 'text-base sm:text-[17px] text-slate-700 dark:text-slate-200 leading-relaxed',
    compact: 'text-sm sm:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed font-medium',
  }[variant];

  const pronClasses = {
    hero: 'text-base sm:text-lg text-violet-700 dark:text-violet-300 font-medium',
    heading: 'text-sm sm:text-base text-violet-700 dark:text-violet-300 font-medium',
    body: 'text-sm sm:text-[15px] text-violet-700 dark:text-violet-300',
    compact: 'text-xs sm:text-sm text-violet-700 dark:text-violet-300',
  }[variant];

  const arClasses = {
    hero:
      languageMode === 'ar'
        ? 'text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-snug'
        : 'text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 leading-snug',
    heading:
      languageMode === 'ar'
        ? 'text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug'
        : 'text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 leading-snug',
    body:
      languageMode === 'ar'
        ? 'text-lg sm:text-xl text-slate-800 dark:text-slate-100 leading-relaxed'
        : 'text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed',
    compact: 'text-sm text-slate-600 dark:text-slate-300 leading-relaxed',
  }[variant];

  return (
    <div className={`space-y-1.5 ${className}`}>
      {showEn && (
        <div dir="ltr" className={enClasses}>
          {content.en}
        </div>
      )}

      {displayPronunciation && (
        <div dir="rtl" className={`font-arabic ${pronClasses}`}>
          ({content.pronunciation})
        </div>
      )}

      {showAr && (
        <div dir="rtl" className={`font-arabic ${arClasses}`}>
          {content.ar}
        </div>
      )}
    </div>
  );
};
