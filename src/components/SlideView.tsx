import React, { useState } from 'react';
import { ImageOff, Mic } from 'lucide-react';
import { motion } from 'motion/react';
import { LanguageMode, SlideDefinition } from '../types/presentation';
import { BilingualBlock } from './BilingualBlock';
import { CodeExampleCard } from './CodeExampleCard';
import { SlideInteractiveLab } from './SlideInteractiveLabs';

interface SlideViewProps {
  slide: SlideDefinition;
  totalSlides: number;
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode: boolean;
}

export const SlideView: React.FC<SlideViewProps> = ({
  slide,
  totalSlides,
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-8"
    >
      {/* Slide Hero Header Card */}
      <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />
        <div className="p-6 sm:p-8 space-y-6">
          {/* Unboxed Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
            <span className="font-mono tabular-nums text-violet-700 dark:text-violet-300 font-semibold">
              Slide {String(slide.id).padStart(2, '0')} of {totalSlides}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {languageMode === 'ar' ? slide.memberLabel.ar : slide.memberLabel.en}
            </span>
            {languageMode === 'both' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-arabic" dir="rtl">
                  {slide.memberLabel.ar}
                </span>
              </>
            )}
          </div>

          {/* Title + Subtitle + Optional Illustration Split */}
          <div
            className={`grid gap-8 items-stretch ${
              slide.imageSrc ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'
            }`}
          >
            <div className={`${slide.imageSrc ? 'lg:col-span-7' : ''} space-y-5 flex flex-col justify-center`}>
              <BilingualBlock
                content={slide.title}
                languageMode={languageMode}
                showPronunciation={showPronunciation}
                englishFocusMode={englishFocusMode}
                variant="hero"
              />

              <BilingualBlock
                content={slide.subtitle}
                languageMode={languageMode}
                showPronunciation={showPronunciation}
                englishFocusMode={englishFocusMode}
                variant="body"
              />

              {slide.leadQuestion && (
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50/70 dark:from-indigo-950/50 dark:to-violet-950/40 border border-indigo-200/70 dark:border-indigo-800/60">
                  <BilingualBlock
                    content={slide.leadQuestion}
                    languageMode={languageMode}
                    showPronunciation={showPronunciation}
                    englishFocusMode={englishFocusMode}
                    variant="heading"
                  />
                </div>
              )}
            </div>

            {slide.imageSrc && (
              <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 aspect-video lg:aspect-auto lg:h-full min-h-[220px]">
                  {!imgError ? (
                    <img
                      src={slide.imageSrc}
                      alt={slide.imageAlt || slide.title.en}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10 text-slate-600 dark:text-slate-300">
                      <ImageOff className="w-8 h-8 mb-2 opacity-60" />
                      <div className="text-sm font-semibold">{slide.title.en}</div>
                    </div>
                  )}
                </div>
                {slide.imageCaption && (
                  <BilingualBlock
                    content={slide.imageCaption}
                    languageMode={languageMode}
                    showPronunciation={showPronunciation}
                    englishFocusMode={false}
                    variant="compact"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Bilingual Key Points */}
      <section className="space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Key Concepts · المفاهيم الأساسية
        </div>
        <div
          className={`grid gap-5 ${
            slide.keyPoints.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : slide.keyPoints.length === 4
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-3'
          }`}
        >
          {slide.keyPoints.map((point) => (
            <div
              key={point.id}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-3"
            >
              <div className="flex items-start gap-3">
                {point.emoji && (
                  <span className="text-2xl leading-none select-none shrink-0" aria-hidden="true">
                    {point.emoji}
                  </span>
                )}
                <BilingualBlock
                  content={point.heading}
                  languageMode={languageMode}
                  showPronunciation={showPronunciation}
                  englishFocusMode={englishFocusMode}
                  variant="heading"
                />
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <BilingualBlock
                  content={point.body}
                  languageMode={languageMode}
                  showPronunciation={showPronunciation}
                  englishFocusMode={englishFocusMode}
                  variant="body"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Lab / Sandbox for this Slide */}
      <section>
        <SlideInteractiveLab
          slideId={slide.id}
          languageMode={languageMode}
          showPronunciation={showPronunciation}
          englishFocusMode={englishFocusMode}
        />
      </section>

      {/* Primary Code Example */}
      {slide.codeExample && (
        <section className="space-y-5">
          <CodeExampleCard
            example={slide.codeExample}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
          />
          {slide.secondaryCodeExample && (
            <CodeExampleCard
              example={slide.secondaryCodeExample}
              languageMode={languageMode}
              showPronunciation={showPronunciation}
              englishFocusMode={englishFocusMode}
            />
          )}
        </section>
      )}

      {/* Oral Presentation Coach Note */}
      <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/70 p-5 sm:p-6 flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-violet-600 text-white shrink-0 mt-0.5">
          <Mic className="w-4 h-4" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="text-xs font-semibold text-violet-700 dark:text-violet-300">
            Oral Presentation Speaker Cue · نصيحة الإلقاء أمام المعلم
          </div>
          <BilingualBlock
            content={slide.oralPresenterTip}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={false}
            variant="compact"
          />
        </div>
      </section>
    </motion.div>
  );
};
