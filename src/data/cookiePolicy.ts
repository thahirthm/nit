import type { LegalSection, Localized } from "./legalTypes";

export const cookiePolicyTitle: Localized = { en: "Cookie policy", ar: "سياسة ملفات تعريف الارتباط" };

export const cookiePolicySections: LegalSection[] = [
  {
    id: "introduction",
    heading: { en: "Introduction", ar: "المقدمة" },
    blocks: [
      {
        type: "p",
        en: "This Cookies Policy explains what cookies are and how we use them. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.",
        ar: "توضح سياسة ملفات تعريف الارتباط هذه ماهية ملفات تعريف الارتباط وكيفية استخدامها. ولمزيد من المعلومات حول كيفية استخدام بياناتكم الشخصية وتخزينها والحفاظ على أمنها، يُرجى الاطلاع على سياسة الخصوصية.",
      },
    ],
  },
  {
    id: "what-are-cookies",
    heading: { en: "What are Cookies?", ar: "ما ملفات تعريف الارتباط؟" },
    blocks: [
      {
        type: "p",
        en: "Cookies are small text files that are stored on the browser or hard drive of your computer or mobile device when you visit a webpage. Cookies work to make your experience browsing the site as smooth as possible. They can remember your preferences, so you don't have to repeatedly insert your details, and they can also help the owners of the website to analyze how their site is being used.",
        ar: "ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن في متصفح الإنترنت أو على القرص الصلب لحاسوبكم أو جهازكم المحمول عند زيارة إحدى صفحات الويب. وتساعد هذه الملفات على جعل تجربة تصفح الموقع أكثر سهولة وسلاسة؛ إذ يمكنها تذكّر تفضيلاتكم، مما يُغنيكم عن إدخال بياناتكم في كل مرة، كما تساعد القائمين على الموقع في تحليل كيفية استخدامه.",
      },
      {
        type: "p",
        en: "There are different types of cookies. Some cookies come directly from the website you are browsing and others come from third parties which place cookies on the site. Cookies can be stored for varying lengths of time on your browser or device. Session cookies are deleted from your computer or device when you close your browser. Persistent cookies will remain stored on your computer or device until deleted or until they reach their expiry date.",
        ar: "توجد أنواع مختلفة من ملفات تعريف الارتباط؛ فمنها ما يصدر مباشرةً عن الموقع الذي تتصفحونه، ومنها ما توفره جهات خارجية تضع ملفات تعريف الارتباط على الموقع. وقد تختلف مدة تخزين هذه الملفات في المتصفح أو على الجهاز. وتُحذف ملفات تعريف الارتباط الخاصة بالجلسة عند إغلاق المتصفح، في حين تظل الملفات الدائمة مخزَّنة على الحاسوب أو الجهاز إلى أن تُحذف أو تنتهي مدة صلاحيتها.",
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
        ar: "تتيح لنا ملفات تعريف الارتباط الخاصة بالجلسة متابعة تفاعلكم أثناء وجودكم على الموقع، ومساعدتكم على التنقل بين صفحاته بسهولة وسرعة أكبر. أما ملفات تعريف الارتباط الدائمة، فتتيح للموقع التعرّف عليكم عند زيارته مجددًا وتذكّر تفضيلاتكم المتعلقة باستخدامه.",
      },
    ],
  },
  {
    id: "third-party-cookies",
    heading: { en: "Third-Party Cookies", ar: "ملفات تعريف الارتباط التابعة لجهات خارجية" },
    blocks: [
      {
        type: "p",
        en: "We use Google Analytics to analyze the use of our website. Google Analytics generates statistical and other information about website use by means of cookies which are stored on the users' computers.",
        ar: "نستخدم خدمة Google Analytics لتحليل كيفية استخدام موقعنا الإلكتروني. وتُنشئ هذه الخدمة بيانات إحصائية وغيرها من المعلومات المتعلقة باستخدام الموقع، وذلك من خلال ملفات تعريف الارتباط التي تُخزَّن على أجهزة المستخدمين.",
      },
      {
        type: "p",
        en: "We may also use other third-party cookies from time to time, and for more information on these, you can contact us at the email below: NIT@nesma.com",
        ar: "قد نستخدم أيضًا، من حين إلى آخر، ملفات تعريف ارتباط أخرى تابعة لجهات خارجية. ولمزيد من المعلومات حول هذه الملفات، يمكنكم التواصل معنا عبر البريد الإلكتروني التالي: NIT@nesma.com",
      },
    ],
  },
  {
    id: "opting-out-and-disabling-cookies",
    heading: { en: "Opting Out & Disabling Cookies", ar: "إلغاء الاشتراك في ملفات تعريف الارتباط وتعطيلها" },
    blocks: [
      {
        type: "p",
        en: "You may disable cookies by changing the cookie preferences settings on your browser. However, if you do, this may affect your enjoyment of the website, and it may not work as it should.",
        ar: "يمكنكم تعطيل ملفات تعريف الارتباط من خلال تغيير إعدادات تفضيلاتها في متصفح الإنترنت الذي تستخدمونه. ومع ذلك، قد يؤثر تعطيلها في تجربة استخدامكم للموقع، وقد يؤدي إلى عدم عمل بعض وظائفه على النحو المطلوب.",
      },
    ],
  },
  {
    id: "changes-to-this-cookie-policy",
    heading: { en: "Changes to this Cookie Policy", ar: "التعديلات على سياسة ملفات تعريف الارتباط" },
    blocks: [],
  },
];
