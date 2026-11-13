import { SlideDefinition } from '../types/presentation';

export const SLIDES_DATA: SlideDefinition[] = [
  // =========================================================================
  // MEMBER 1 — SLIDE 1
  // =========================================================================
  {
    id: 1,
    slug: 'introduction-to-bootstrap',
    memberId: 'member-1',
    memberLabel: {
      en: 'Member 1 · Student Presenter 1',
      pronunciation: 'ميمبر وان · ستودنت بريزينتر وان',
      ar: 'العضو الأول · الطالب المقدم الأول',
    },
    title: {
      en: 'Introduction to Bootstrap',
      pronunciation: 'إنتروداكشن تو بوتستراب',
      ar: 'مقدمة إلى إطار عمل بوتستراب',
    },
    subtitle: {
      en: 'Building clean, responsive websites rapidly with pre-designed styles and components.',
      pronunciation: 'بيلدينغ كلين ريسپونسيف ويبسايتس رابيدلي وذ بري ديزايند ستايلز آند كومبوننتس.',
      ar: 'بناء مواقع إلكترونية أنيقة ومتجاوبة بسرعة باستخدام تنسيقات ومكوّنات جاهزة.',
    },
    leadQuestion: {
      en: 'What is Bootstrap?',
      pronunciation: 'وات إز بوتستراب؟',
      ar: 'ما هو بوتستراب؟',
    },
    oralPresenterTip: {
      en: 'Start by greeting the teacher and explaining that Bootstrap is a CSS and JavaScript toolkit, not a separate programming language.',
      pronunciation: 'ستارت باي غريتينغ ذا تيتشر آند إكسبلينينغ ذات بوتستراب إز أ سي إس إس آند جافاسكريبت تولكيت.',
      ar: 'ابدأ بتحية المعلم وأوضح أن بوتستراب هو مجموعة أدوات لـ CSS وJavaScript وليس لغة برمجة مستقلة.',
    },
    imageSrc: '/src/assets/images/bootstrap_hero_illustration_1794599608097.jpg',
    imageAlt: 'Responsive web interface and 12-column grid layout across laptop, tablet, and smartphone',
    imageCaption: {
      en: 'One Bootstrap codebase adapts smoothly across laptop, tablet, and phone screens.',
      pronunciation: 'وان بوتستراب كود بيس أدابتس سموذلي أكروس لابتوب، تابلت، آند فون سكرينز.',
      ar: 'كود واحد في بوتستراب يتكيف بسلاسة مع شاشات اللابتوب والتابلت والهاتف.',
    },
    keyPoints: [
      {
        id: 'what-is-bs',
        emoji: '🧩',
        heading: {
          en: 'A Ready-to-Use Front-End Framework',
          pronunciation: 'أ ريدي تو يوز فرونت إند فريم وورك',
          ar: 'إطار عمل جاهز للواجهات الأمامية',
        },
        body: {
          en: 'Bootstrap is a CSS framework that helps developers build responsive websites quickly without starting from zero.',
          pronunciation: 'بوتستراب إز أ سي إس إس فريم وورك ذات هيلپس ديفيلوبرز بيلد ريسپونسيف ويبسايتس كويكلي وذاوت ستارتينغ فروم زيرو.',
          ar: 'بوتستراب هو إطار عمل CSS يساعد المطورين على إنشاء مواقع إلكترونية متجاوبة بسرعة دون البدء من الصفر.',
        },
      },
      {
        id: 'mobile-first',
        emoji: '📱',
        heading: {
          en: 'Mobile-First by Default',
          pronunciation: 'موبايل فيرست باي ديفولت',
          ar: 'مصمم للهواتف أولاً بشكل افتراضي',
        },
        body: {
          en: 'Every layout is designed to look sharp on smartphones first, then scale smoothly up to tablets and large desktop monitors.',
          pronunciation: 'إيفري لاي أوت إز ديزايند تو لوك شارب أون سمارت فونز فيرست، ذين سكيل سموذلي أب تو ديسكتوب مونيتورز.',
          ar: 'كل تخطيط مصمم ليظهر بوضوح على الهواتف أولاً، ثم يتوسع بسلاسة إلى الأجهزة اللوحية والشاشات الكبيرة.',
        },
      },
      {
        id: 'class-driven',
        emoji: '⚡',
        heading: {
          en: 'Class-Based Styling Simplicity',
          pronunciation: 'كلاس بيسد ستايلينغ سيمبليسيتي',
          ar: 'بساطة التنسيق عبر الكلاسات',
        },
        body: {
          en: 'Instead of writing hundreds of custom CSS lines, you add short class names directly to HTML tags.',
          pronunciation: 'إنستيد أوف رايتينغ هاندردز أوف كاستوم سي إس إس لاينز، يو آد شورت كلاس نيمز تو إتش تي إم إل تاغز.',
          ar: 'بدلاً من كتابة مئات الأسطر من CSS، تضيف أسماء كلاسات قصيرة مباشرة إلى وسوم HTML.',
        },
      },
    ],
    codeExample: {
      id: 'intro-btn-example',
      title: {
        en: 'First Look: Plain HTML Button vs. Bootstrap Button',
        pronunciation: 'فيرست لوك: بلين إتش تي إم إل باتن فيرسس بوتستراب باتن',
        ar: 'النظرة الأولى: زر HTML عادي مقابل زر بوتستراب',
      },
      language: 'html',
      code: `<!-- Standard HTML Button -->
<button>Click Me</button>

<!-- Styled with Bootstrap Classes -->
<button class="btn btn-primary btn-lg">
  Get Started
</button>`,
      explanation: {
        en: 'Adding just three class names transforms a plain browser button into a modern, accessible action button.',
        pronunciation: 'آدينغ جاست ثري كلاس نيمز ترانسفورمز أ بلين براوزر باتن إنتو أ مودرن أكشن باتن.',
        ar: 'إضافة ثلاثة أسماء كلاسات فقط تحوّل زر المتصفح البسيط إلى زر عصري واضح وسهل النقر.',
      },
      keyTermsPronunciation: [
        { term: 'class', pronunciation: 'كلاس', arMeaning: 'صفة لتطبيق التنسيق' },
        { term: 'btn', pronunciation: 'بي تي إن (اختصار باتن)', arMeaning: 'كلاس الزر الأساسي' },
        { term: 'btn-primary', pronunciation: 'بي تي إن برايمري', arMeaning: 'لون الزر الرئيسي' },
        { term: 'btn-lg', pronunciation: 'بي تي إن لارج', arMeaning: 'حجم زر كبير' },
      ],
      expectedResult: {
        en: 'A vibrant blue rounded button with balanced padding, crisp white text, and smooth hover feedback.',
        pronunciation: 'أ فايبرنت بلو راوندد باتن وذ بالانسد بادينغ آند كلير وايت تكست.',
        ar: 'زر أزرق أنيق بحواف دائرية ومسافات داخلية متوازنة ونص أبيض واضح وتفاعل ناعم عند التمرير.',
      },
    },
  },

  // =========================================================================
  // MEMBER 1 — SLIDE 2
  // =========================================================================
  {
    id: 2,
    slug: 'history-and-advantages',
    memberId: 'member-1',
    memberLabel: {
      en: 'Member 1 · Student Presenter 1',
      pronunciation: 'ميمبر وان · ستودنت بريزينتر وان',
      ar: 'العضو الأول · الطالب المقدم الأول',
    },
    title: {
      en: 'History and Core Advantages',
      pronunciation: 'هيستوري آند كور أدفانتيجيز',
      ar: 'تاريخ بوتستراب ومميزاته الأساسية',
    },
    subtitle: {
      en: 'From an internal Twitter tool in 2011 to the world’s most widely adopted front-end toolkit.',
      pronunciation: 'فروم أن إنتيرنال تويتر تول إن تو ثاوزند آند إيليفن تو ذا وورلدز موست وايدلي أدوبتد فرونت إند تولكيت.',
      ar: 'من أداة داخلية في شركة تويتر عام 2011 إلى أشهر إطار عمل للواجهات في العالم.',
    },
    leadQuestion: {
      en: 'Why did engineers create Bootstrap, and why is it still popular today?',
      pronunciation: 'واي ديد إنجينيرز كرييت بوتستراب، آند واي إز إت ستيل بوبيولار توداي؟',
      ar: 'لماذا ابتكر المهندسون بوتستراب، ولماذا لا يزال شائعاً حتى اليوم؟',
    },
    oralPresenterTip: {
      en: 'Mention the two creators—Mark Otto and Jacob Thornton—and walk through the four milestone versions on the timeline.',
      pronunciation: 'مينشن ذا تو كرييتورز مارك أوتو آند جايكوب ثورنتون آند ووك ثرو ذا فور فيرجنز.',
      ar: 'اذكر المؤسسين مارك أوتو وجايكوب ثورنتون، واستعرض المراحل الأربع على الخط الزمني.',
    },
    keyPoints: [
      {
        id: 'created-at-twitter',
        emoji: '🐦',
        heading: {
          en: 'Born at Twitter (2011)',
          pronunciation: 'بورن أت تويتر (تو ثاوزند آند إيليفن)',
          ar: 'وُلد في شركة تويتر (2011)',
        },
        body: {
          en: 'Mark Otto and Jacob Thornton built Bootstrap to solve inconsistent user interfaces across internal company tools.',
          pronunciation: 'مارك أوتو آند جايكوب ثورنتون بيلت بوتستراب تو سولف إنكونسيستينت يوزر إنترفيسيز.',
          ar: 'طوّر مارك أوتو وجايكوب ثورنتون بوتستراب لتوحيد شكل الواجهات وحل التضارب بين أدوات الشركة.',
        },
      },
      {
        id: 'speed-advantage',
        emoji: '⏱️',
        heading: {
          en: 'Rapid Development Speed',
          pronunciation: 'رابيد ديفيلوبمنت سبيد',
          ar: 'سرعة فائقة في التطوير',
        },
        body: {
          en: 'Teams ship prototypes and full student projects in hours instead of spending days debugging layout CSS.',
          pronunciation: 'تيمز شيب بروتوتايبس إن أورز إنستيد أوف سبيندينغ ديز ديباغينغ سي إس إس.',
          ar: 'تُنجز الفرق النماذج الأولية والمشاريع الطلابية في ساعات بدلاً من قضاء أيام في إصلاح أخطاء CSS.',
        },
      },
      {
        id: 'cross-browser',
        emoji: '🌐',
        heading: {
          en: 'Cross-Browser Consistency',
          pronunciation: 'كروس براوزر كونسيستينسي',
          ar: 'توافق ثابت عبر جميع المتصفحات',
        },
        body: {
          en: 'Bootstrap normalizes browser differences so pages look reliable in Chrome, Firefox, Edge, and Safari.',
          pronunciation: 'بوتستراب نورمالايزز براوزر ديفرينسيز سو بيجيز لوك ريلايابل إن كروم آند سفاري.',
          ar: 'يوحّد بوتستراب سلوك المتصفحات لتظهر الصفحات بشكل متطابق في كروم وفايرفوكس وإيدج وسفاري.',
        },
      },
    ],
    codeExample: {
      id: 'history-v5-variables',
      title: {
        en: 'Modern Bootstrap 5: Clean CSS Custom Properties',
        pronunciation: 'مودرن بوتستراب فايف: كلين سي إس إس كاستوم بروبرتيز',
        ar: 'بوتستراب 5 الحديث: استخدام متغيرات CSS المرنة',
      },
      language: 'css',
      code: `:root {
  --bs-primary: #6d28d9;
  --bs-border-radius: 0.75rem;
  --bs-body-font-family: 'Plus Jakarta Sans', sans-serif;
}`,
      explanation: {
        en: 'Modern Bootstrap 5 removed jQuery dependency and uses native CSS variables for instant theme customization.',
        pronunciation: 'مودرن بوتستراب فايف ريموفد جيكويري آند يوزز نيتيف سي إس إس فاريابلز.',
        ar: 'استغنى بوتستراب 5 الحديث عن مكتبة jQuery واعتمد على متغيرات CSS الأصلية لتخصيص التصميم بسهولة.',
      },
      keyTermsPronunciation: [
        { term: ':root', pronunciation: 'روت', arMeaning: 'الجذر العام للمتغيرات' },
        { term: '--bs-primary', pronunciation: 'داش داش بي إس برايمري', arMeaning: 'متغير اللون الأساسي' },
        { term: 'jQuery', pronunciation: 'جي كويري', arMeaning: 'مكتبة جافاسكريبت قديمة' },
      ],
      expectedResult: {
        en: 'All primary buttons, links, and active indicators automatically adopt the custom royal violet color.',
        pronunciation: 'أول برايمري باتنز أوتوماتيكالي أدوبت ذا كاستوم رويال فايوليت كولور.',
        ar: 'تتغير ألوان جميع الأزرار الرئيسية والروابط تلقائياً إلى اللون البنفسجي الملكي المخصص.',
      },
    },
  },

  // =========================================================================
  // MEMBER 2 — SLIDE 3
  // =========================================================================
  {
    id: 3,
    slug: 'how-bootstrap-works',
    memberId: 'member-2',
    memberLabel: {
      en: 'Member 2 · Student Presenter 2',
      pronunciation: 'ميمبر تو · ستودنت بريزينتر تو',
      ar: 'العضو الثاني · الطالب المقدم الثاني',
    },
    title: {
      en: 'How Bootstrap Works',
      pronunciation: 'هاو بوتستراب ووركس',
      ar: 'كيف يعمل بوتستراب؟',
    },
    subtitle: {
      en: 'Understanding how HTML structure, Bootstrap CSS classes, and JavaScript plugins work together.',
      pronunciation: 'أندرستاندينغ هاو إتش تي إم إل ستراكتشر، بوتستراب سي إس إس كلاسز، آند جافاسكريبت بلاغينز وورك توغيذر.',
      ar: 'فهم كيف تتعاون بنية HTML وكلاسات CSS وإضافات JavaScript معاً.',
    },
    leadQuestion: {
      en: 'What happens behind the scenes when you add a Bootstrap class?',
      pronunciation: 'وات هابينز بيهايند ذا سينز وين يو آد أ بوتستراب كلاس؟',
      ar: 'ماذا يحدث خلف الكواليس عندما تضيف كلاس بوتستراب؟',
    },
    oralPresenterTip: {
      en: 'Use the Interactive Class Inspector on this slide to click a class name and show the teacher the real CSS rules inside Bootstrap.',
      pronunciation: 'يوز ذا إنتراكتيف كلاس إنسبيكتور أون ذيس سلايد تو شو ذا ريل سي إس إس رولز.',
      ar: 'استخدم أداة فحص الكلاسات التفاعلية في هذه الشريحة لتُري المعلم قواعد CSS الحقيقية خلف كل كلاس.',
    },
    imageSrc: '/src/assets/images/html_css_js_trio_1794599608138.jpg',
    imageAlt: 'Isometric educational illustration of HTML structure, CSS styling, and JavaScript interactive layers',
    imageCaption: {
      en: 'HTML builds the skeleton, CSS paints the visual style, and JavaScript powers interactive behavior.',
      pronunciation: 'إتش تي إم إل بيلدز ذا سكيلتون، سي إس إس بينتس ذا ستايل، آند جافاسكريبت باورز إنتراكتيف بيهيفيور.',
      ar: 'لغة HTML تبني الهيكل، وCSS تمنح الشكل والجمال، وJavaScript تضيف التفاعل والحركة.',
    },
    keyPoints: [
      {
        id: 'layer-html',
        emoji: '🧱',
        heading: {
          en: '1. HTML Provides Semantic Structure',
          pronunciation: 'وان: إتش تي إم إل بروفايدز سيمانتيك ستراكتشر',
          ar: '١. لغة HTML تبني الهيكل الأساسي',
        },
        body: {
          en: 'You write clean HTML elements like <nav>, <button>, and <div> to define what appears on the page.',
          pronunciation: 'يو رايت كلين إتش تي إم إل إليمينتس لايك ناف آند باتن تو ديفاين وات أبيرز أون ذا بيج.',
          ar: 'تكتب وسوم HTML نظيفة مثل nav و button و div لتحديد عناصر الصفحة.',
        },
      },
      {
        id: 'layer-css',
        emoji: '🎨',
        heading: {
          en: '2. Bootstrap CSS Applies Pre-Written Rules',
          pronunciation: 'تو: بوتستراب سي إس إس أبلايز بري ريتين رولز',
          ar: '٢. ملف CSS يطبّق التنسيقات الجاهزة',
        },
        body: {
          en: 'Bootstrap’s stylesheet contains thousands of tested CSS rules mapped to memorable class names.',
          pronunciation: 'بوتسترابس ستايل شيت كونتينز ثاوزندز أوف تيستيد سي إس إس رولز مابد تو كلاس نيمز.',
          ar: 'يحتوي ملف تنسيق بوتستراب على آلاف قواعد CSS المختبرة والمربوطة بأسماء كلاسات سهلة الحفظ.',
        },
      },
      {
        id: 'layer-js',
        emoji: '⚙️',
        heading: {
          en: '3. Bootstrap JS Handles User Actions',
          pronunciation: 'ثري: بوتستراب جافاسكريبت هاندلز يوزر أكشنز',
          ar: '٣. جافاسكريبت تُشغّل التفاعلات',
        },
        body: {
          en: 'Using data-bs-* attributes, Bootstrap automatically opens dropdowns, modals, and mobile menus with zero custom JS.',
          pronunciation: 'يوزينغ داتا بي إس أتريبيوتس، بوتستراب أوتوماتيكالي أوبنز دروب داونز آند مودالز.',
          ar: 'باستخدام خصائص data-bs-*، يفتح بوتستراب القوائم المنسدلة والنوافذ المنبثقة تلقائياً دون كتابة كود JS.',
        },
      },
    ],
    codeExample: {
      id: 'how-it-works-data-bs',
      title: {
        en: 'HTML + CSS + JS Data Attribute Example',
        pronunciation: 'إتش تي إم إل بلس سي إس إس بلس جي إس داتا أتريبيوت إكزامبل',
        ar: 'مثال يجمع HTML و CSS وتفاعل JavaScript بدون كود إضافي',
      },
      language: 'html',
      code: `<button
  type="button"
  class="btn btn-dark"
  data-bs-toggle="collapse"
  data-bs-target="#infoBox">
  Toggle Details
</button>
<div id="infoBox" class="collapse mt-2 p-3 border rounded">
  Hidden details appear smoothly!
</div>`,
      explanation: {
        en: 'The data-bs-toggle attribute tells Bootstrap’s JavaScript to expand or hide the matching #infoBox element.',
        pronunciation: 'ذا داتا بي إس توغل أتريبيوت تيلز بوتستراب جافاسكريبت تو إكسباند أور هايد ذا إليمينت.',
        ar: 'تخبر الصفة data-bs-toggle ملف جافاسكريبت الخاص ببوتستراب بفتح أو إغلاق العنصر ذي المعرف #infoBox.',
      },
      keyTermsPronunciation: [
        { term: 'data-bs-toggle', pronunciation: 'داتا بي إس توغل', arMeaning: 'أمر التبديل التفاعلي' },
        { term: 'collapse', pronunciation: 'كولابس', arMeaning: 'طي وفتح العنصر' },
        { term: 'border rounded', pronunciation: 'بوردر راوندد', arMeaning: 'إطار بحواف دائرية' },
      ],
      expectedResult: {
        en: 'Clicking the dark button smoothly expands or collapses the bordered information box below it.',
        pronunciation: 'كليكينغ ذا دارك باتن سموذلي إكسباندز أور كولابسز ذا إنفورميشن بوكس.',
        ar: 'عند النقر على الزر الداكن ينفتح أو ينغلق صندوق المعلومات المؤطر بسلاسة.',
      },
    },
  },

  // =========================================================================
  // MEMBER 2 — SLIDE 4
  // =========================================================================
  {
    id: 4,
    slug: 'installing-bootstrap',
    memberId: 'member-2',
    memberLabel: {
      en: 'Member 2 · Student Presenter 2',
      pronunciation: 'ميمبر تو · ستودنت بريزينتر تو',
      ar: 'العضو الثاني · الطالب المقدم الثاني',
    },
    title: {
      en: 'Installing Bootstrap',
      pronunciation: 'إنستولينغ بوتستراب',
      ar: 'طرق تثبيت بوتستراب في مشروعك',
    },
    subtitle: {
      en: 'Comparing the instant CDN method for beginners and the NPM method for scalable projects.',
      pronunciation: 'كومبيرينغ ذا إنستانت سي دي إن ميثود فور بيغينرز آند ذا إن بي إم ميثود فور بروجيكتس.',
      ar: 'مقارنة بين طريقة رابط CDN السريعة للمبتدئين وطريقة NPM للمشاريع المتقدمة.',
    },
    leadQuestion: {
      en: 'How do we add Bootstrap to an HTML file or React project?',
      pronunciation: 'هاو دو وي آد بوتستراب تو أن إتش تي إم إل فايل أور رياكت بروجيكت؟',
      ar: 'كيف نضيف بوتستراب إلى ملف HTML أو مشروع برمجي؟',
    },
    oralPresenterTip: {
      en: 'Switch between the CDN and NPM tabs to show how beginners only need two HTML tags while developers use terminal commands.',
      pronunciation: 'سويتش بيتوين ذا سي دي إن آند إن بي إم تابس تو شو بوث ميثودز كليرلي.',
      ar: 'بدّل بين تبويب CDN و NPM لتوضيح أن المبتدئين يحتاجون وسمين فقط في HTML بينما يستخدم المطورون سطر الأوامر.',
    },
    keyPoints: [
      {
        id: 'cdn-method',
        emoji: '🌍',
        heading: {
          en: 'Method 1: CDN (Fastest Setup)',
          pronunciation: 'ميثود وان: سي دي إن (فاستست سيت أب)',
          ar: 'الطريقة الأولى: CDN (الإعداد الأسرع)',
        },
        body: {
          en: 'Copy the official <link> CSS tag into <head> and the <script> JS bundle before </body>. Ready in 10 seconds!',
          pronunciation: 'كوبي ذا أوفيشال لينك تاغ إنتو هيد آند ذا سكريبت تاغ بيفور ذا إند أوف بودي.',
          ar: 'انسخ وسم link الخاص بـ CSS داخل head ووسم script قبل نهاية body، وستكون جاهزاً خلال 10 ثوانٍ.',
        },
      },
      {
        id: 'npm-method',
        emoji: '📦',
        heading: {
          en: 'Method 2: NPM (Local Package)',
          pronunciation: 'ميثود تو: إن بي إم (لوكال باكيج)',
          ar: 'الطريقة الثانية: NPM (التثبيت المحلي)',
        },
        body: {
          en: 'Install Bootstrap inside Node.js, Vite, or React projects so it works offline and supports Sass customization.',
          pronunciation: 'إنستول بوتستراب إنسايد نود جي إس أور رياكت بروجيكتس سو إت ووركس أوفلاين.',
          ar: 'ثبّت بوتستراب داخل مشاريع Node.js أو React ليعمل دون إنترنت ويدعم التخصيص الكامل بـ Sass.',
        },
      },
      {
        id: 'viewport-meta',
        emoji: '📐',
        heading: {
          en: 'Essential Viewport Meta Tag',
          pronunciation: 'إيسينشال فيوبورت ميتا تاغ',
          ar: 'وسم Viewport الأساسي للتجاوب',
        },
        body: {
          en: 'Always include the viewport meta tag in your HTML head so mobile browsers scale Bootstrap grids accurately.',
          pronunciation: 'أولويز إنكلود ذا فيوبورت ميتا تاغ سو موبايل براوزرز سكيل غريدز أكيوريتلي.',
          ar: 'تأكد دائماً من وجود وسم meta viewport في رأس الصفحة لتعمل الشبكة بدقة على الهواتف.',
        },
      },
    ],
    codeExample: {
      id: 'install-cdn-code',
      title: {
        en: 'Method 1: Complete Bootstrap 5 CDN Starter HTML',
        pronunciation: 'ميثود وان: كومبليت بوتستراب فايف سي دي إن ستارتر إتش تي إم إل',
        ar: 'الطريقة الأولى: قالب HTML جاهز عبر رابط CDN',
      },
      language: 'html',
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Starter</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-center mt-5">Hello, Bootstrap!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`,
      explanation: {
        en: 'The CSS link loads all styles at the top, and bootstrap.bundle.min.js enables interactive components at the bottom.',
        pronunciation: 'ذا سي إس إس لينك لودز أول ستايلز أت ذا توب، آند ذا سكريبت إنيبلز إنتراكتيف كومبوننتس.',
        ar: 'رابط CSS يحمّل التنسيقات في الأعلى، وملف bootstrap.bundle.min.js يفعّل العناصر التفاعلية في الأسفل.',
      },
      keyTermsPronunciation: [
        { term: 'CDN', pronunciation: 'سي دي إن', arMeaning: 'شبكة توزيع المحتوى' },
        { term: 'stylesheet', pronunciation: 'ستايل شيت', arMeaning: 'ملف التنسيقات' },
        { term: 'bundle.min.js', pronunciation: 'باندل مين جي إس', arMeaning: 'الحزمة المضغوطة للجافاسكريبت' },
      ],
      expectedResult: {
        en: 'A clean HTML5 page displaying a centered "Hello, Bootstrap!" heading with Bootstrap typography.',
        pronunciation: 'أ كلين إتش تي إم إل بيج ديسبلاينغ أ سينترد هيلو بوتستراب هيدينغ.',
        ar: 'صفحة HTML5 نظيفة تعرض عنوان "Hello, Bootstrap!" في المنتصف بخطوط ومسافات بوتستراب.',
      },
    },
    secondaryCodeExample: {
      id: 'install-npm-code',
      title: {
        en: 'Method 2: Installing via NPM Terminal',
        pronunciation: 'ميثود تو: إنستولينغ فايا إن بي إم تيرمينال',
        ar: 'الطريقة الثانية: التثبيت عبر أوامر NPM',
      },
      language: 'bash',
      code: `# 1. Install Bootstrap package
npm install bootstrap

# 2. Import inside your main JavaScript or CSS entry
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`,
      explanation: {
        en: 'NPM downloads Bootstrap directly into node_modules for production bundling with Vite or Webpack.',
        pronunciation: 'إن بي إم داونلودز بوتستراب إنتو نود موديولز فور بروداكشن بروجيكتس.',
        ar: 'يقوم NPM بتنزيل حزمة بوتستراب محلياً داخل المشروع لدمجها مع أدوات البناء الحديثة مثل Vite.',
      },
      keyTermsPronunciation: [
        { term: 'npm install', pronunciation: 'إن بي إم إنستول', arMeaning: 'أمر تثبيت الحزمة' },
        { term: 'import', pronunciation: 'إيمبورت', arMeaning: 'استيراد الملف' },
      ],
      expectedResult: {
        en: 'Bootstrap is saved in package.json and compiled cleanly into your project build.',
        pronunciation: 'بوتستراب إز سيفد إن باكيج جيسون آند كومبايلد إنتو يور بيلد.',
        ar: 'يتم حفظ بوتستراب في package.json وتجميعه مع ملفات المشروع تلقائياً.',
      },
    },
  },

  // =========================================================================
  // MEMBER 3 — SLIDE 5
  // =========================================================================
  {
    id: 5,
    slug: 'grid-system-and-responsive-design',
    memberId: 'member-3',
    memberLabel: {
      en: 'Member 3 · Student Presenter 3',
      pronunciation: 'ميمبر ثري · ستودنت بريزينتر ثري',
      ar: 'العضو الثالث · الطالب المقدم الثالث',
    },
    title: {
      en: 'Grid System and Responsive Design',
      pronunciation: 'غريد سيستم آند ريسپونسيف ديزاين',
      ar: 'نظام الشبكة والتصميم المتجاوب',
    },
    subtitle: {
      en: 'Mastering Bootstrap’s 12-column Flexbox layout across containers, rows, and breakpoints.',
      pronunciation: 'ماستيرينغ بوتسترابس تويلف كولوم فليكس بوكس لاي أوت أكروس كونتينرز، روز، آند بريك بوينتس.',
      ar: 'إتقان نظام الـ 12 عموداً المرن عبر الحاويات والصفوف ونقاط التحول.',
    },
    leadQuestion: {
      en: 'How does Bootstrap organize a page for phones, tablets, and desktops at the same time?',
      pronunciation: 'هاو داز بوتستراب أورغانايز أ بيج فور فونز، تابلتس، آند ديسكتوبس أت ذا سيم تايم؟',
      ar: 'كيف يرتب بوتستراب الصفحة لتناسب الهاتف والتابلت والكمبيوتر في وقت واحد؟',
    },
    oralPresenterTip: {
      en: 'Use the Interactive 12-Column Grid Playground below to switch device widths and demonstrate how col-12 col-md-6 col-lg-4 behaves live!',
      pronunciation: 'يوز ذا إنتراكتيف تويلف كولوم غريد بلايغراوند تو سويتش ديفايس ويدثس لايف.',
      ar: 'استخدم محاكي الشبكة التفاعلي بالأسفل للتبديل بين الهاتف والكمبيوتر وإظهار تغير الأعمدة مباشرة أمام المعلم.',
    },
    imageSrc: '/src/assets/images/responsive_grid_architecture_1794599608283.jpg',
    imageAlt: 'Diagram illustrating 12-column responsive grid reflow across desktop, tablet, and mobile screens',
    imageCaption: {
      en: '12 columns can stay side-by-side on desktop (col-lg-4) and stack vertically on mobile (col-12).',
      pronunciation: 'تويلف كولومز كان ستاي سايد باي سايد أون ديسكتوب آند ستاك فيرتيكالي أون موبايل.',
      ar: 'يمكن أن تتجاور الأعمدة على الشاشة الكبيرة وتترتب عمودياً فوق بعضها على الهاتف.',
    },
    keyPoints: [
      {
        id: 'grid-hierarchy',
        emoji: '📐',
        heading: {
          en: 'Container → Row → Column',
          pronunciation: 'كونتينر ← رو ← كولوم',
          ar: 'التسلسل: حاوية ← صف ← عمود',
        },
        body: {
          en: 'Every grid follows three strict layers: .container centers content, .row holds columns horizontally, and .col-* sets width.',
          pronunciation: 'إيفري غريد فولوز ثري لايرز: كونتينر سنترز كونتنت، رو هولدز كولومز، آند كول سيتس ويدث.',
          ar: 'تتبع الشبكة ثلاث طبقات ثابتة: الحاوية للتوسيط، الصف لجمع الأعمدة، والعمود لتحديد العرض من 12.',
        },
      },
      {
        id: 'twelve-columns',
        emoji: '🔢',
        heading: {
          en: 'The Magic Number 12',
          pronunciation: 'ذا ماجيك نامبر تويلف',
          ar: 'الرقم الذهبي 12',
        },
        body: {
          en: '12 divides cleanly by 2, 3, 4, and 6—making halves (col-6), thirds (col-4), and quarters (col-3) effortless.',
          pronunciation: 'تويلف ديفايدز كلينلي باي تو، ثري، فور، آند سيكس.',
          ar: 'يقبل الرقم 12 القسمة على 2 و3 و4 و6، مما يسهّل تقسيم الصفحة إلى نصفين أو ثلاثة أو أربعة أقسام.',
        },
      },
      {
        id: 'breakpoints-rule',
        emoji: '🖥️',
        heading: {
          en: 'Responsive Breakpoints (sm, md, lg, xl)',
          pronunciation: 'ريسبونسيف بريك بوينتس (إس إم، إم دي، إل جي، إكس إل)',
          ar: 'نقاط التحول حسب حجم الشاشة',
        },
        body: {
          en: 'Combine classes like col-12 col-md-6 col-lg-4 to show 1 card per row on mobile, 2 on tablets, and 3 on laptops.',
          pronunciation: 'كومباين كلاسز لايك كول تويلف آند كول إم دي سيكس تو تشينج لاي أوت بير سكرين.',
          ar: 'ادمج الكلاسات مثل col-12 col-md-6 col-lg-4 لعرض بطاقة واحدة في الهاتف واثنتين في التابلت وثلاث في الحاسوب.',
        },
      },
    ],
    codeExample: {
      id: 'grid-responsive-code',
      title: {
        en: 'Responsive 3-Column Card Layout',
        pronunciation: 'ريسبونسيف ثري كولوم كارد لاي أوت',
        ar: 'تخطيط شبكي متجاوب من 3 أعمدة',
      },
      language: 'html',
      code: `<div class="container">
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-12 col-lg-4">Column 3</div>
  </div>
</div>`,
      explanation: {
        en: 'The g-3 class adds clean gutter spacing between columns, while col-lg-4 gives each column 4 out of 12 units on desktop.',
        pronunciation: 'ذا جي ثري كلاس آدز غاتار سبيسينغ، وايل كول إل جي فور غيفز إيتش كولوم فور يونتس.',
        ar: 'يضيف كلاس g-3 مسافات متساوية بين الأعمدة، بينما يمنح col-lg-4 كل عمود 4 وحدات من أصل 12 على الشاشات الكبيرة.',
      },
      keyTermsPronunciation: [
        { term: 'container', pronunciation: 'كونتينر', arMeaning: 'الحاوية الرئيسية' },
        { term: 'row g-3', pronunciation: 'رو جي ثري', arMeaning: 'صف بمسافة فاصلة درجة 3' },
        { term: 'col-lg-4', pronunciation: 'كول إل جي فور', arMeaning: '4 أعمدة على الشاشات الكبيرة' },
      ],
      expectedResult: {
        en: '3 equal columns side-by-side on desktop, 2+1 on tablet, and stacked 100% width on mobile.',
        pronunciation: 'ثري إيكوال كولومز أون ديسكتوب، آند ستاكد أون موبايل.',
        ar: 'ثلاثة أعمدة متساوية متجاورة على الحاسوب، وعمودان على التابلت، وصفوف متراصة بعرض كامل على الهاتف.',
      },
    },
  },

  // =========================================================================
  // MEMBER 3 — SLIDE 6
  // =========================================================================
  {
    id: 6,
    slug: 'bootstrap-components',
    memberId: 'member-3',
    memberLabel: {
      en: 'Member 3 · Student Presenter 3',
      pronunciation: 'ميمبر ثري · ستودنت بريزينتر ثري',
      ar: 'العضو الثالث · الطالب المقدم الثالث',
    },
    title: {
      en: 'Bootstrap Components',
      pronunciation: 'بوتستراب كومبوننتس',
      ar: 'مكوّنات بوتستراب الجاهزة',
    },
    subtitle: {
      en: 'Ready-made user interface blocks: Navbars, Cards, Buttons, Alerts, and Badges.',
      pronunciation: 'ريدي ميد يوزر إنترفيس بلوكس: ناف بارز، كاردز، باتنز، أليرتس، آند بادجيز.',
      ar: 'عناصر واجهة جاهزة للاستعمال المباشر: شريط التنقل، البطاقات، الأزرار، التنبيهات، والشارات.',
    },
    leadQuestion: {
      en: 'Which ready-made components do developers use most often?',
      pronunciation: 'ويتش ريدي ميد كومبوننتس دو ديفيلوبرز يوز موست أوفن؟',
      ar: 'ما هي المكونات الجاهزة الأكثر استخداماً في المواقع؟',
    },
    oralPresenterTip: {
      en: 'Click through the Interactive Component Lab tabs (Navbar, Card, Alert, Buttons) to demonstrate live working previews alongside their HTML code.',
      pronunciation: 'كليك ثرو ذا إنتراكتيف كومبوننت لاب تابس تو ديمونستريت لايف بريفيوز.',
      ar: 'تنقّل بين تبويبات مختبر المكونات التفاعلي لعرض شكل كل عنصر مباشرة بجانب كود HTML الخاص به.',
    },
    keyPoints: [
      {
        id: 'comp-navbar',
        emoji: '🧭',
        heading: {
          en: 'Navbar (Navigation Header)',
          pronunciation: 'ناف بار (نافيغيشن هيدر)',
          ar: 'شريط التنقل (Navbar)',
        },
        body: {
          en: 'Guides visitors across pages and automatically folds into a mobile menu button on small screens.',
          pronunciation: 'غايدز فيزيتورز أكروس بيجيز آند فولدز إنتو أ موبايل مينيو أون سمول سكرينز.',
          ar: 'يرشد الزوار بين صفحات الموقع وينطوي تلقائياً إلى زر قائمة على الهواتف.',
        },
      },
      {
        id: 'comp-card',
        emoji: '🃏',
        heading: {
          en: 'Card (Structured Content Box)',
          pronunciation: 'كارد (ستراكتشرد كونتنت بوكس)',
          ar: 'البطاقة (Card)',
        },
        body: {
          en: 'Groups a title, description, image, and action button inside a clean bordered container.',
          pronunciation: 'غروبس أ تايتل، ديسكريبشن، إيميج، آند أكشن باتن إنسايد أ كلين كونتينر.',
          ar: 'تجمع العنوان والوصف والصورة وزر الإجراء داخل إطار مرتب وأنيق.',
        },
      },
      {
        id: 'comp-alert-btn',
        emoji: '🔔',
        heading: {
          en: 'Alerts & Semantic Buttons',
          pronunciation: 'أليرتس آند سيمانتيك باتنز',
          ar: 'التنبيهات والأزرار الدلالية',
        },
        body: {
          en: 'Color-coded feedback banners (alert-success, alert-warning) and action buttons communicate state clearly.',
          pronunciation: 'كولور كوديد فيدباك بانرز آند أكشن باتنز كوميونيكيت ستيت كليرلي.',
          ar: 'أشرطة تنبيه ملونة وأزرار واضحة الدلالة توضح للمستخدم حالة النجاح أو التحذير.',
        },
      },
    ],
    codeExample: {
      id: 'component-card-code',
      title: {
        en: 'Beginner-Friendly Bootstrap Card Component',
        pronunciation: 'بيغينر فريندلي بوتستراب كارد كومبوننت',
        ar: 'كود بطاقة بوتستراب للمبتدئين',
      },
      language: 'html',
      code: `<div class="card shadow-sm" style="max-width: 20rem;">
  <div class="card-body">
    <h5 class="card-title">Web Design Course</h5>
    <p class="card-text">Learn responsive layouts with Bootstrap 5.</p>
    <a href="#" class="btn btn-primary">Enroll Now</a>
  </div>
</div>`,
      explanation: {
        en: 'Every card wraps content inside .card-body with dedicated classes for title, text, and action buttons.',
        pronunciation: 'إيفري كارد رابس كونتنت إنسايد كارد بودي وذ كلاسز فور تايتل آند تكست.',
        ar: 'تضع البطاقة المحتوى داخل card-body مع كلاسات مخصصة للعنوان والنص والزر.',
      },
      keyTermsPronunciation: [
        { term: 'card-body', pronunciation: 'كارد بودي', arMeaning: 'جسم البطاقة الداخلي' },
        { term: 'card-title', pronunciation: 'كارد تايتل', arMeaning: 'عنوان البطاقة' },
        { term: 'shadow-sm', pronunciation: 'شادو سمول', arMeaning: 'ظل خفيف أنيق' },
      ],
      expectedResult: {
        en: 'A clean white card with soft drop shadow, crisp title, short paragraph, and blue "Enroll Now" button.',
        pronunciation: 'أ كلين وايت كارد وذ سوفت شادو، تايتل، آند بلو باتن.',
        ar: 'بطاقة بيضاء أنيقة بظل خفيف تحتوي على عنوان واضح وفقرة قصيرة وزر أزرق.',
      },
    },
  },

  // =========================================================================
  // MEMBER 4 — SLIDE 7
  // =========================================================================
  {
    id: 7,
    slug: 'bootstrap-utilities',
    memberId: 'member-4',
    memberLabel: {
      en: 'Member 4 · Student Presenter 4',
      pronunciation: 'ميمبر فور · ستودنت بريزينتر فور',
      ar: 'العضو الرابع · الطالب المقدم الرابع',
    },
    title: {
      en: 'Bootstrap Utility Classes',
      pronunciation: 'بوتستراب يوتيليتي كلاسز',
      ar: 'كلاسات الأدوات السريعة في بوتستراب',
    },
    subtitle: {
      en: 'Styling spacing, colors, alignment, borders, and shadows directly in HTML without custom CSS.',
      pronunciation: 'ستايلينغ سبيسينغ، كولورز، ألاينمنت، بوردرز، آند شادوز دايركتلي إن إتش تي إم إل.',
      ar: 'التحكم في المسافات والألوان والمحاذاة والحدود والظلال مباشرة في HTML دون كتابة CSS.',
    },
    leadQuestion: {
      en: 'How can we adjust margins, padding, colors, and shadows in seconds?',
      pronunciation: 'هاو كان وي أدجاست مارجنز، بادينغ، كولورز، آند شادوز إن سيكوندز؟',
      ar: 'كيف نعدّل الهوامش والألوان والظلال في ثوانٍ معدودة؟',
    },
    oralPresenterTip: {
      en: 'Demonstrate the Interactive Utility Builder below—toggle padding, background color, rounded corners, and shadow live while explaining each letter.',
      pronunciation: 'ديمونستريت ذا إنتراكتيف يوتيليتي بيلدر بيلو آند إكسبلين إيتش ليتر.',
      ar: 'استعرض أداة بناء الكلاسات بالأسفل؛ غيّر الحشوة واللون والظل مباشرة مع شرح معنى كل حرف (m و p).',
    },
    keyPoints: [
      {
        id: 'util-spacing',
        emoji: '📏',
        heading: {
          en: 'Spacing Formula: {property}{side}-{size}',
          pronunciation: 'سبيسينغ فورميولا: بروبرتي سايد داش سايز',
          ar: 'قاعدة المسافات: m للهامش الخارجي و p للداخلي',
        },
        body: {
          en: 'm = margin, p = padding. Sides: t (top), b (bottom), s (start), e (end), x (horizontal), y (vertical). Sizes: 0 to 5.',
          pronunciation: 'إم فور مارجن، بي فور بادينغ. سايزز فروم زيرو تو فايف.',
          ar: 'الحرف m يعني الهامش الخارجي و p يعني المسافة الداخلية، مع أرقام من 0 إلى 5 لتحديد المقدار.',
        },
      },
      {
        id: 'util-colors',
        emoji: '🎨',
        heading: {
          en: 'Text & Background Color Utilities',
          pronunciation: 'تكست آند باكغراوند كولور يوتيليتيز',
          ar: 'أدوات ألوان النصوص والخلفيات',
        },
        body: {
          en: 'Combine bg-* and text-* classes like bg-primary text-white or bg-light text-dark for instant readable contrast.',
          pronunciation: 'كومباين بي جي آند تكست كلاسز فور إنستانت ريدابل كونتراست.',
          ar: 'ادمج كلاسات الخلفية bg-* ولون النص text-* لتحقيق تباين مقروء فوراً.',
        },
      },
      {
        id: 'util-flex',
        emoji: '🧲',
        heading: {
          en: 'Flexbox & Visual Polish',
          pronunciation: 'فليكس بوكس آند فيجوال بوليش',
          ar: 'المحاذاة واللمسات الجمالية',
        },
        body: {
          en: 'Use d-flex, justify-content-between, align-items-center, rounded-3, and shadow-sm to align any block cleanly.',
          pronunciation: 'يوز دي فليكس، راوندد ثري، آند شادو إس إم تو ألاين إني بلوك كلينلي.',
          ar: 'استخدم d-flex و rounded-3 و shadow-sm لمحاذاة العناصر وإضافة زوايا دائرية وظل ناعم.',
        },
      },
    ],
    codeExample: {
      id: 'utilities-code-example',
      title: {
        en: 'Combining Multiple Utilities on One Box',
        pronunciation: 'كومباينينغ مالتيبل يوتيليتيز أون وان بوكس',
        ar: 'دمج عدة كلاسات مساعدة على عنصر واحد',
      },
      language: 'html',
      code: `<div class="p-4 mb-3 bg-primary text-white rounded-3 shadow d-flex justify-content-between align-items-center">
  <span class="fw-bold">Course Progress</span>
  <span>85% Complete</span>
</div>`,
      explanation: {
        en: 'Seven short utility classes handle padding, margin, background, text color, corners, shadow, and horizontal alignment.',
        pronunciation: 'سيفن شورت يوتيليتي كلاسز هاندل بادينغ، مارجن، كولور، آند ألاينمنت.',
        ar: 'سبعة كلاسات قصيرة أنجزت الحشوة والهامش واللون والزوايا الدائرية والظل والمحاذاة الأفقية دون سطر CSS واحد.',
      },
      keyTermsPronunciation: [
        { term: 'p-4', pronunciation: 'بي فور (بادينغ درجة 4)', arMeaning: 'مسافة داخلية مريحة' },
        { term: 'mb-3', pronunciation: 'إم بي ثري', arMeaning: 'هامش سفلي درجة 3' },
        { term: 'd-flex', pronunciation: 'دي فليكس', arMeaning: 'تفعيل الصندوق المرن' },
        { term: 'fw-bold', pronunciation: 'إف دبليو بولد', arMeaning: 'خط عريض' },
      ],
      expectedResult: {
        en: 'A vibrant blue banner with white bold text on the left and percentage on the right, framed with rounded corners.',
        pronunciation: 'أ بلو بانر وذ وايت بولد تكست أون ذا ليفت آند بيرسينتيج أون ذا رايت.',
        ar: 'شريط أزرق أنيق بحواف دائرية وظل، يظهر النص العريض في جهة والنسبة المئوية في الجهة المقابلة.',
      },
    },
  },

  // =========================================================================
  // MEMBER 4 — SLIDE 8
  // =========================================================================
  {
    id: 8,
    slug: 'practical-html-and-bootstrap-project',
    memberId: 'member-4',
    memberLabel: {
      en: 'Member 4 · Student Presenter 4',
      pronunciation: 'ميمبر فور · ستودنت بريزينتر فور',
      ar: 'العضو الرابع · الطالب المقدم الرابع',
    },
    title: {
      en: 'Practical HTML & Bootstrap Project',
      pronunciation: 'براكتيكال إتش تي إم إل آند بوتستراب بروجيكت',
      ar: 'مشروع عملي متكامل بـ HTML وبوتستراب',
    },
    subtitle: {
      en: 'Combining Navbar, Container, Grid System, Cards, and Utilities into one working mini-website.',
      pronunciation: 'كومباينينغ ناف بار، كونتينر، غريد سيستم، كاردز، آند يوتيليتيز إنتو وان ووركينغ ميني ويبسايت.',
      ar: 'دمج شريط التنقل والحاوية والشبكة والبطاقات والأدوات في صفحة ويب متكاملة.',
    },
    leadQuestion: {
      en: 'How do all these Bootstrap pieces come together in a real student project?',
      pronunciation: 'هاو دو أول ذيس بوتستراب بيسز كام توغيذر إن أ ريل ستودنت بروجيكت؟',
      ar: 'كيف تجتمع كل أجزاء بوتستراب معاً لبناء صفحة حقيقية؟',
    },
    oralPresenterTip: {
      en: 'Switch between "Code" and "Live Output" in the Practical Project Lab to prove how little HTML is needed to build a clean landing page.',
      pronunciation: 'سويتش بيتوين كود آند لايف أوتبوت تو بروف هاو ليتل إتش تي إم إل إز نيديد.',
      ar: 'بدّل بين تبويب الكود وتبويب النتيجة المباشرة لإثبات كيف ينتج كود HTML قصير صفحة متكاملة.',
    },
    keyPoints: [
      {
        id: 'proj-step-1',
        emoji: '1️⃣',
        heading: {
          en: 'Step 1: Top Navigation Bar',
          pronunciation: 'ستيب وان: توب نافيغيشن بار',
          ar: 'الخطوة ١: شريط التنقل العلوي',
        },
        body: {
          en: 'Start with a dark or light navbar containing your club brand name and an action button.',
          pronunciation: 'ستارت وذ أ ناف بار كونتينينغ يور براند نيم آند أن أكشن باتن.',
          ar: 'ابدأ بشريط تنقل علوي يضم اسم المشروع أو النادي الطلابي مع زر إجراء واضح.',
        },
      },
      {
        id: 'proj-step-2',
        emoji: '2️⃣',
        heading: {
          en: 'Step 2: Centered Hero Banner',
          pronunciation: 'ستيب تو: سينترد هيرو بانر',
          ar: 'الخطوة ٢: قسم الترحيب الرئيسي',
        },
        body: {
          en: 'Use container py-5 text-center to frame your main headline, short subtitle, and primary button.',
          pronunciation: 'يوز كونتينر بي واي فايف تكست سنتر تو فريم يور مين هيدلاين.',
          ar: 'استخدم container مع py-5 و text-center لتوسيط العنوان الرئيسي والوصف والزر.',
        },
      },
      {
        id: 'proj-step-3',
        emoji: '3️⃣',
        heading: {
          en: 'Step 3: Responsive Feature Grid',
          pronunciation: 'ستيب ثري: ريسپونسيف فيتشر غريد',
          ar: 'الخطوة ٣: شبكة البطاقات المتجاوبة',
        },
        body: {
          en: 'Place three feature cards inside .row with col-md-4 so they arrange cleanly on tablets and desktops.',
          pronunciation: 'بليس ثري فيتشر كاردز إنسايد رو وذ كول إم دي فور.',
          ar: 'ضع ثلاث بطاقات داخل row بكلاس col-md-4 لتظهر متجاورة ومنظمة.',
        },
      },
    ],
    codeExample: {
      id: 'practical-mini-site',
      title: {
        en: 'Complete Mini-Website: Tech Club Landing Page',
        pronunciation: 'كومبليت ميني ويبسايت: تيك كلاب لاندينغ بيج',
        ar: 'كود مشروع مصغر متكامل: صفحة نادي التكنولوجيا',
      },
      language: 'html',
      code: `<nav class="navbar bg-dark navbar-dark px-4">
  <span class="navbar-brand fw-bold">Tech Club</span>
  <button class="btn btn-primary btn-sm">Join</button>
</nav>

<section class="container py-4 text-center">
  <h2 class="fw-bold">Build Faster with Bootstrap</h2>
  <p class="text-muted">Clean layout in under 20 lines of HTML.</p>
</section>

<section class="container pb-4">
  <div class="row g-3">
    <div class="col-md-4"><div class="card p-3">HTML Structure</div></div>
    <div class="col-md-4"><div class="card p-3">CSS Grid System</div></div>
    <div class="col-md-4"><div class="card p-3">JS Components</div></div>
  </div>
</section>`,
      explanation: {
        en: 'In under 20 lines, this code delivers a navigation bar, centered hero section, and a 3-column responsive card grid.',
        pronunciation: 'إن أندر توينتي لاينز، ذيس كود ديليفرز أ ناف بار، هيرو سيكشن، آند ثري كولوم غريد.',
        ar: 'في أقل من 20 سطراً، يقدّم هذا الكود شريط تنقل وقسماً ترحيبياً وثلاث بطاقات متجاوبة.',
      },
      keyTermsPronunciation: [
        { term: 'navbar-brand', pronunciation: 'ناف بار براند', arMeaning: 'اسم أو شعار الموقع' },
        { term: 'py-4', pronunciation: 'بي واي فور', arMeaning: 'مسافة داخلية عمودية' },
        { term: 'text-muted', pronunciation: 'تكست ميوتد', arMeaning: 'نص بلون ثانوي هادئ' },
      ],
      expectedResult: {
        en: 'A polished mini landing page with a dark header, centered title, and 3 equal feature cards below.',
        pronunciation: 'أ بوليشد ميني لاندينغ بيج وذ دارك هيدر آند ثري إيكوال كاردز.',
        ar: 'صفحة هبوط مصغرة متكاملة برأس داكن وعنوان متوسط وثلاث بطاقات متساوية بالأسفل.',
      },
    },
  },

  // =========================================================================
  // GROUP — SLIDE 9
  // =========================================================================
  {
    id: 9,
    slug: 'advantages-disadvantages-and-comparison',
    memberId: 'group',
    memberLabel: {
      en: 'Group Discussion · All 4 Members',
      pronunciation: 'غروب ديسكاشن · أول فور ميمبرز',
      ar: 'مناقشة المجموعة · جميع الأعضاء الأربعة',
    },
    title: {
      en: 'Advantages, Disadvantages & Comparison',
      pronunciation: 'أدفانتيجيز، ديس أدفانتيجيز آند كومباريسون',
      ar: 'المميزات والعيوب والمقارنة مع البدائل',
    },
    subtitle: {
      en: 'Evaluating when to choose Bootstrap versus Custom CSS or Tailwind CSS.',
      pronunciation: 'إيفاليويتينغ وين تو تشوز بوتستراب فيرسس كاستوم سي إس إس أور تايلويند سي إس إس.',
      ar: 'معرفة متى نختار بوتستراب مقارنة بكتابة CSS يدوياً أو استخدام Tailwind CSS.',
    },
    leadQuestion: {
      en: 'Is Bootstrap always the best tool, or does it have limitations?',
      pronunciation: 'إز بوتستراب أولويز ذا بيست تول، أور داز إت هاف ليميتيشنز؟',
      ar: 'هل بوتستراب هو الخيار الأفضل دائماً، أم أن له بعض القيود؟',
    },
    oralPresenterTip: {
      en: 'Share this slide across two students: one presents the strengths and limitations, while another walks through the comparison table.',
      pronunciation: 'شير ذيس سلايد أكروس تو ستودنتس: وان بريزينتس بروس آند كونز آند أنوذر ذا تيبل.',
      ar: 'وزّعوا هذه الشريحة على طالبين: الأول يشرح المميزات والعيوب، والثاني يشرح جدول المقارنة.',
    },
    keyPoints: [
      {
        id: 'pros-summary',
        emoji: '✅',
        heading: {
          en: 'Key Advantages (Pros)',
          pronunciation: 'كي أدفانتيجيز (بروس)',
          ar: 'أبرز المميزات',
        },
        body: {
          en: 'Very fast learning curve, massive documentation, built-in accessibility, and ready-to-use interactive components.',
          pronunciation: 'فيري فاست ليرنينغ كيرف، ماسيف دوكيومنتيشن، آند ريدي تو يوز كومبوننتس.',
          ar: 'سهل التعلم جداً، توثيق ضخم وواضح، دعم ممتاز لسهولة الوصول، ومكونات تفاعلية جاهزة.',
        },
      },
      {
        id: 'cons-summary',
        emoji: '⚠️',
        heading: {
          en: 'Key Limitations (Cons)',
          pronunciation: 'كي ليميتيشنز (كونز)',
          ar: 'أبرز العيوب والقيود',
        },
        body: {
          en: 'Websites can look similar if you do not customize colors, and unused CSS classes can add extra file weight.',
          pronunciation: 'ويبسايتس كان لوك سيميلار إف يو دونت كاستومايز كولورز، آند أنيوزد سي إس إس آدز ويت.',
          ar: 'قد تتشابه تصاميم المواقع إذا لم يتم تخصيص الألوان، كما أن الملف قد يحتوي على تنسيقات غير مستخدمة.',
        },
      },
    ],
    codeExample: {
      id: 'comparison-takeaway',
      title: {
        en: 'Quick Syntax Comparison: Same Button in 3 Approaches',
        pronunciation: 'كويك سينتاكس كومباريسون: سيم باتن إن ثري أبروتشيز',
        ar: 'مقارنة سريعة في كتابة الكود: نفس الزر بثلاث طرق',
      },
      language: 'html',
      code: `<!-- 1. Bootstrap (Component + Semantic Class) -->
<button class="btn btn-primary rounded-3">Save</button>

<!-- 2. Tailwind CSS (Atomic Utility Classes) -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>

<!-- 3. Custom CSS (Manual Stylesheet Rule) -->
<button class="my-save-btn">Save</button> <!-- + 10 lines in .css -->`,
      explanation: {
        en: 'Bootstrap gives semantic component shortcuts (btn-primary), Tailwind gives low-level utilities, and Custom CSS gives 100% manual control.',
        pronunciation: 'بوتستراب غيفز سيمانتيك شورتكاتس، تايلويند غيفز يوتيليتيز، آند كاستوم سي إس إس غيفز مانيوال كونترول.',
        ar: 'يمنحك بوتستراب اختصارات جاهزة للمكونات، بينما يمنحك Tailwind حرية دقيقة في كل تفصيل، وCSS اليدوي تحكماً كاملاً من الصفر.',
      },
      keyTermsPronunciation: [
        { term: 'Semantic', pronunciation: 'سيمانتيك', arMeaning: 'ذو دلالة واضحة' },
        { term: 'Atomic Utility', pronunciation: 'أتوميك يوتيليتي', arMeaning: 'أداة تنسيق ذرية منفردة' },
        { term: 'Custom CSS', pronunciation: 'كاستوم سي إس إس', arMeaning: 'تنسيق يدوي مخصص' },
      ],
      expectedResult: {
        en: 'All three produce a clean blue rounded button, but Bootstrap requires the fewest classes for beginners.',
        pronunciation: 'أول ثري بروديوس أ كلين بلو باتن، بات بوتستراب نيدز ذا فيوست كلاسز.',
        ar: 'جميعها تنتج زراً أزرق أنيقاً، لكن بوتستراب يتطلب أقل عدد من الكلاسات للمبتدئين.',
      },
    },
  },

  // =========================================================================
  // GROUP — SLIDE 10
  // =========================================================================
  {
    id: 10,
    slug: 'final-conclusion-and-thank-you',
    memberId: 'group',
    memberLabel: {
      en: 'Group Conclusion · All 4 Members',
      pronunciation: 'غروب كونكلوجن · أول فور ميمبرز',
      ar: 'الخاتمة الجماعية · جميع الأعضاء الأربعة',
    },
    title: {
      en: 'Final Conclusion & Thank You',
      pronunciation: 'فاينال كونكلوجن آند ثانك يو',
      ar: 'الخلاصة النهائية وشكراً لاستماعكم',
    },
    subtitle: {
      en: 'Summarizing what our four-student team learned about building responsive websites with Bootstrap.',
      pronunciation: 'سامارايزينغ وات أور فور ستودنت تيم ليرند أباوت بيلدينغ ريسپونسيف ويبسايتس وذ بوتستراب.',
      ar: 'ملخص ما تعلّمه فريقنا المكوّن من أربعة طلاب حول بناء مواقع متجاوبة باستخدام بوتستراب.',
    },
    leadQuestion: {
      en: 'What are our 4 golden takeaways from today’s Bootstrap Masterclass?',
      pronunciation: 'وات آر أور فور غولدن تيك أوايز فروم تودايز بوتستراب ماستركلاس؟',
      ar: 'ما هي الخلاصات الذهبية الأربع من عرضنا اليوم؟',
    },
    oralPresenterTip: {
      en: 'Have each student read one golden takeaway aloud, test the class with the Quick Interactive Quiz, and close together with "Thank you for listening!"',
      pronunciation: 'هاف إيتش ستودنت ريد وان تيك أواي ألاود، آند كلوز توغيذر وذ ثانك يو فور ليسينينغ.',
      ar: 'يقرأ كل طالب خلاصة واحدة بصوت واضح، ثم شاركوا الصف في الاختبار التفاعلي السريع واختموا معاً بـ "شكراً لاستماعكم!".',
    },
    keyPoints: [
      {
        id: 'takeaway-1',
        emoji: '1️⃣',
        heading: {
          en: 'Member 1 Takeaway: Purpose & Speed',
          pronunciation: 'ميمبر وان تيك أواي: بيربوس آند سبيد',
          ar: 'خلاصة العضو الأول: الهدف والسرعة',
        },
        body: {
          en: 'Bootstrap is the fastest bridge from basic HTML to clean, mobile-first websites.',
          pronunciation: 'بوتستراب إز ذا فاستست بريدج فروم بيسيك إتش تي إم إل تو كلين ويبسايتس.',
          ar: 'بوتستراب هو أسرع جسر للانتقال من HTML البسيطة إلى مواقع متجاوبة واحترافية.',
        },
      },
      {
        id: 'takeaway-2',
        emoji: '2️⃣',
        heading: {
          en: 'Member 2 Takeaway: Simple Setup',
          pronunciation: 'ميمبر تو تيك أواي: سيمبل سيت أب',
          ar: 'خلاصة العضو الثاني: سهولة التثبيت',
        },
        body: {
          en: 'Start in seconds with a CDN link or install locally via NPM for full projects.',
          pronunciation: 'ستارت إن سيكوندز وذ أ سي دي إن لينك أور إنستول فايا إن بي إم.',
          ar: 'ابدأ في ثوانٍ عبر رابط CDN أو ثبّته محلياً عبر NPM للمشاريع الكبيرة.',
        },
      },
      {
        id: 'takeaway-3',
        emoji: '3️⃣',
        heading: {
          en: 'Member 3 Takeaway: Grid & Components',
          pronunciation: 'ميمبر ثري تيك أواي: غريد آند كومبوننتس',
          ar: 'خلاصة العضو الثالث: الشبكة والمكونات',
        },
        body: {
          en: 'The 12-column grid plus ready components like Navbars and Cards solve 80% of layout tasks.',
          pronunciation: 'ذا تويلف كولوم غريد بلس ريدي كومبوننتس سولف إيتي بيرسينت أوف لاي أوت تاسكس.',
          ar: 'نظام الـ 12 عموداً مع المكونات الجاهزة مثل أشرطة التنقل والبطاقات يحل معظم تحديات التصميم.',
        },
      },
      {
        id: 'takeaway-4',
        emoji: '4️⃣',
        heading: {
          en: 'Member 4 Takeaway: Utilities in Action',
          pronunciation: 'ميمبر فور تيك أواي: يوتيليتيز إن أكشن',
          ar: 'خلاصة العضو الرابع: قوة الأدوات في التطبيق',
        },
        body: {
          en: 'Spacing, flex, and color utilities let you build real pages cleanly without bloated CSS.',
          pronunciation: 'سبيسينغ، فليكس، آند كولور يوتيليتيز ليت يو بيلد ريل بيجيز كلينلي.',
          ar: 'تتيح كلاسات المسافات والألوان والمحاذاة بناء صفحات حقيقية بأقل قدر ممكن من التعقيد.',
        },
      },
    ],
  },
];
