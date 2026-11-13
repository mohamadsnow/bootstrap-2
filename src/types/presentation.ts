export type LanguageMode = 'both' | 'en' | 'ar';

export type ViewMode = 'slides' | 'vocabulary' | 'glossary';

export type TeamMemberId = 'member-1' | 'member-2' | 'member-3' | 'member-4' | 'group';

export interface BilingualText {
  en: string;
  pronunciation: string;
  ar: string;
}

export interface CodeExampleData {
  id: string;
  title: BilingualText;
  language: 'html' | 'css' | 'bash';
  code: string;
  explanation: BilingualText;
  keyTermsPronunciation: {
    term: string;
    pronunciation: string;
    arMeaning: string;
  }[];
  expectedResult: BilingualText;
}

export interface SlideKeyPoint {
  id: string;
  emoji?: string;
  heading: BilingualText;
  body: BilingualText;
}

export interface SlideDefinition {
  id: number;
  slug: string;
  memberId: TeamMemberId;
  memberLabel: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  leadQuestion?: BilingualText;
  oralPresenterTip: BilingualText;
  keyPoints: SlideKeyPoint[];
  codeExample?: CodeExampleData;
  secondaryCodeExample?: CodeExampleData;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: BilingualText;
}

export interface CoreVocabularyItem {
  id: string;
  term: string;
  pronunciation: string;
  arMeaning: string;
  explanation: BilingualText;
  exampleSentence: BilingualText;
  codeSnippet?: string;
}

export type GlossaryCategory =
  | 'Core Web'
  | 'Layout & Grid'
  | 'Components'
  | 'Utilities & Tools';

export interface GlossaryTerm {
  id: string;
  term: string;
  pronunciation: string;
  arMeaning: string;
  category: GlossaryCategory;
  note: BilingualText;
}
