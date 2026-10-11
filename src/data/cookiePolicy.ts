import type { LegalSection, Localized } from "./legalTypes";

export const cookiePolicyTitle: Localized = { en: "Cookie policy", ar: "سياسة ملفات تعريف الارتباط" };

export const cookiePolicySections: LegalSection[] = [
  {
    id: "introduction",
    heading: { en: "Introduction", ar: "مقدمة" },
    blocks: [
      {
        type: "p",
        en: "This Cookies Policy explains what cookies are and how we use them. For further information on how we use, store and keep your personal data secure, see our Privacy Policy",
        ar: "توضح سياسة ملفات تعريف الارتباط هذه ماهية ملفات تعريف الارتباط وكيفية استخدامنا لها. لمزيد من المعلومات حول كيفية استخدامنا لبياناتك الشخصية وتخزينها والحفاظ على أمانها، يُرجى الاطلاع على سياسة الخصوصية الخاصة بنا.",
      },
    ],
  },
  {
    id: "what-are-cookies",
    heading: { en: "What are Cookies?", ar: "ما هي ملفات تعريف الارتباط؟" },
    blocks: [
      {
        type: "p",
        en: "Cookies are small text files that are stored on the browser or hard drive of your computer or mobile device when you visit a webpage. Cookies work to make your experience browsing the site as smooth as possible. They can remember your preferences, so you don't have to repeatedly insert your details, and they can also help the owners of the website to analyze how their site is being used.",
        ar: "ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن في المتصفح أو على القرص الصلب لجهاز الحاسوب أو الجهاز المحمول الخاص بك عند زيارتك لصفحة ويب. وتعمل هذه الملفات على جعل تجربة تصفحك للموقع سلسة قدر الإمكان، إذ يمكنها تذكّر تفضيلاتك حتى لا تضطر إلى إدخال بياناتك بشكل متكرر، كما تساعد أصحاب الموقع على تحليل كيفية استخدام موقعهم.",
      },
      {
        type: "p",
        en: "There are different types of cookies. Some cookies come directly from the website you are browsing and others come from third parties which place cookies on the site. Cookies can be stored for varying lengths of time on your browser or device. Session cookies are deleted from your computer or device when you close your browser. Persistent cookies will remain stored on your computer or device until deleted or until they reach their expiry date.",
        ar: "توجد أنواع مختلفة من ملفات تعريف الارتباط؛ فبعضها يأتي مباشرة من الموقع الذي تتصفحه، بينما يأتي بعضها الآخر من أطراف ثالثة تضع ملفات تعريف ارتباط على الموقع. ويمكن تخزين ملفات تعريف الارتباط لمدد زمنية متفاوتة على متصفحك أو جهازك. وتُحذف ملفات ارتباط الجلسة من جهازك عند إغلاق المتصفح، في حين تبقى ملفات تعريف الارتباط الدائمة مخزَّنة على جهازك إلى أن يتم حذفها أو حتى تنتهي مدة صلاحيتها.",
      },
    ],
  },
  {
    id: "how-do-we-use-cookies",
    heading: { en: "How do we use Cookies?", ar: "كيف نستخدم ملفات تعريف الارتباط؟" },
    blocks: [
      {
        type: "p",
        en: "Session cookies enable us to keep track of you while you are on the site and to help you navigate the site better and faster. Persistent cookies enable the site to recognize you when you visit and keep track of your preferences in relation to your use of the site.",
        ar: "تمكّننا ملفات ارتباط الجلسة من تتبّع تواجدك أثناء تصفح الموقع ومساعدتك على التنقل فيه بشكل أفضل وأسرع. أما ملفات تعريف الارتباط الدائمة فتُمكّن الموقع من التعرف عليك عند زيارتك له، وتتبّع تفضيلاتك المتعلقة باستخدامك له.",
      },
    ],
  },
  {
    id: "third-party-cookies",
    heading: { en: "Third-Party Cookies", ar: "ملفات تعريف الارتباط الخاصة بأطراف ثالثة" },
    blocks: [
      {
        type: "p",
        en: "We use Google Analytics to analyze the use of our website. Google Analytics generates statistical and other information about website use by means of cookies which are stored on the users' computers.",
        ar: "نستخدم أداة Google Analytics لتحليل استخدام موقعنا الإلكتروني. وتُنشئ Google Analytics معلومات إحصائية وغيرها حول استخدام الموقع من خلال ملفات تعريف الارتباط المخزَّنة على أجهزة المستخدمين.",
      },
      {
        type: "p",
        en: "We may also use other third-party cookies from time to time, and for more information on these, you can contact us at the email below: NIT@nesma.com",
        ar: "وقد نستخدم أيضًا ملفات تعريف ارتباط أخرى تابعة لأطراف ثالثة من حين لآخر، ولمزيد من المعلومات حول ذلك، يمكنك التواصل معنا عبر البريد الإلكتروني أدناه: NIT@nesma.com",
      },
    ],
  },
  {
    id: "opting-out-and-disabling-cookies",
    heading: { en: "Opting Out & Disabling Cookies", ar: "إلغاء الاشتراك وتعطيل ملفات تعريف الارتباط" },
    blocks: [
      {
        type: "p",
        en: "You may disable cookies by changing the cookie preferences settings on your browser. However, if you do, this may affect your enjoyment of the website, and it may not work as it should.",
        ar: "يمكنك تعطيل ملفات تعريف الارتباط من خلال تغيير إعدادات تفضيلات ملفات تعريف الارتباط في متصفحك. غير أن القيام بذلك قد يؤثر على استمتاعك بالموقع، وقد لا يعمل بالشكل المطلوب.",
      },
    ],
  },
  {
    id: "changes-to-this-cookie-policy",
    heading: { en: "Changes to this Cookie Policy", ar: "التغييرات على سياسة ملفات تعريف الارتباط" },
    blocks: [
      {
        type: "p",
        en: "We may update this policy periodically, and you are advised to check it regularly so as to be aware of the latest version.",
        ar: "قد نقوم بتحديث هذه السياسة بشكل دوري، ونوصيك بمراجعتها بانتظام لتكون على اطلاع بأحدث نسخة منها.",
      },
      {
        type: "p",
        en: "This Policy was last updated on 8/03/2026",
        ar: "آخر تحديث لهذه السياسة كان بتاريخ 8/03/2026",
      },
    ],
  },
];
