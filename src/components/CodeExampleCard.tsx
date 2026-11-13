import React, { useState } from 'react';
import { Check, Copy, Eye, Terminal } from 'lucide-react';
import { CodeExampleData, LanguageMode } from '../types/presentation';
import { BilingualBlock } from './BilingualBlock';

interface CodeExampleCardProps {
  example: CodeExampleData;
  languageMode: LanguageMode;
  showPronunciation: boolean;
  englishFocusMode: boolean;
}

export const CodeExampleCard: React.FC<CodeExampleCardProps> = ({
  example,
  languageMode,
  showPronunciation,
  englishFocusMode,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback copy if clipboard permission is restricted
      const textarea = document.createElement('textarea');
      textarea.value = example.code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/80">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <div className="mt-1 p-2 rounded-lg bg-violet-600/10 text-violet-700 dark:text-violet-300 shrink-0">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
              {example.language}
            </div>
            <BilingualBlock
              content={example.title}
              languageMode={languageMode}
              showPronunciation={showPronunciation}
              englishFocusMode={englishFocusMode}
              variant="heading"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Block — Never translated */}
      <div className="bg-slate-950 text-slate-100 p-5 overflow-x-auto border-b border-slate-800" dir="ltr">
        <pre className="font-mono text-sm sm:text-[15px] leading-relaxed">
          <code>{example.code}</code>
        </pre>
      </div>

      {/* Bilingual Explanation + Key Terms Pronunciation + Expected Result */}
      <div className="p-5 space-y-5">
        <div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
            Code Explanation · شرح الكود
          </div>
          <BilingualBlock
            content={example.explanation}
            languageMode={languageMode}
            showPronunciation={showPronunciation}
            englishFocusMode={englishFocusMode}
            variant="body"
          />
        </div>

        {example.keyTermsPronunciation.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Key Technical Terms Pronunciation · نطق المصطلحات البرمجية
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {example.keyTermsPronunciation.map((item) => (
                <div
                  key={item.term}
                  className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70"
                >
                  <div className="font-mono text-sm font-semibold text-violet-700 dark:text-violet-300" dir="ltr">
                    {item.term}
                  </div>
                  <div className="font-arabic text-sm text-slate-700 dark:text-slate-200 mt-0.5" dir="rtl">
                    ({item.pronunciation})
                  </div>
                  <div className="font-arabic text-xs text-slate-500 dark:text-slate-400 mt-1" dir="rtl">
                    {item.arMeaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
            <Eye className="w-4 h-4" />
            <span>Expected Visual Result · النتيجة المرئية المتوقعة</span>
          </div>
          <BilingualBlock
            content={example.expectedResult}
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
