import type { LegalSection, Localized } from "./legalTypes";

export const privacyPolicyTitle: Localized = { en: "Privacy policy", ar: "سياسة الخصوصية" };

export const privacyPolicyIntro: Localized = {
  en: 'Nesma Infrastructure & Technology ("NIT") is committed to protecting your privacy and handling your personal information responsibly, securely, and transparently.',
  ar: "تلتزم نسما للبنية التحتية والتقنية بحماية خصوصيتك والتعامل مع معلوماتك الشخصية بمسؤولية وأمان وشفافية.",
};

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    heading: { en: "Introduction", ar: "المقدمة" },
    blocks: [
      {
        type: "p",
        en: "We respect your privacy and we are committed to protecting it through our compliance with this privacy policy. The Policy describes the types of Personal Information we may collect from you or that you may provide to us through the www.nesma-nit.com website and any of its related services; and our practices for collecting, using, maintaining, protecting, and disclosing that information.",
        ar: "نحترم خصوصيتك ونلتزم بحمايتها من خلال الامتثال لأحكام سياسة الخصوصية هذه. وتوضح هذه السياسة أنواع المعلومات الشخصية التي قد نجمعها منك أو التي قد تزودنا بها عبر الموقع الإلكتروني www.nesma-nit.com وأي من الخدمات المرتبطة به، كما توضح ممارساتنا المتعلقة بجمع هذه المعلومات واستخدامها والاحتفاظ بها وحمايتها والإفصاح عنها.",
      },
    ],
  },
  {
    id: "collection-of-personal-information",
    heading: { en: "Collection of Personal Information", ar: "جمع المعلومات الشخصية" },
    blocks: [
      {
        type: "p",
        en: "You can access and use this website and its services without telling us who you are or revealing any information by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the features offered on the website, you may be asked to provide certain Personal Information (for example, your name and e-mail address).",
        ar: "يمكنك الوصول إلى هذا الموقع واستخدام خدماته دون الإفصاح عن هويتك أو تقديم أي معلومات قد تتيح التعرف عليك بوصفك شخصًا محددًا. ومع ذلك، قد يُطلب منك تقديم بعض المعلومات الشخصية، مثل اسمك وعنوان بريدك الإلكتروني، إذا رغبت في استخدام بعض الميزات المتاحة على الموقع.",
      },
      {
        type: "p",
        en: "We receive and store any information you knowingly provide to us when you fill any forms on the website. When required, this information may include contact information (such as email address, phone number, etc.).",
        ar: "نتلقى المعلومات التي تقدمها إلينا بإرادتك ونحتفظ بها عند تعبئة أي من النماذج الموجودة على الموقع. وقد تشمل هذه المعلومات، عند الحاجة، بيانات الاتصال، مثل عنوان البريد الإلكتروني ورقم الهاتف وغيرهما.",
      },
      {
        type: "p",
        en: "You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the website. Users who are uncertain about what information is mandatory are welcome to contact us.",
        ar: "يمكنك اختيار عدم تقديم معلوماتك الشخصية إلينا، إلا أن ذلك قد يحول دون استفادتك من بعض ميزات الموقع. ونرحب بتواصلك معنا إذا لم تكن متأكدًا من المعلومات الإلزامية المطلوب تقديمها.",
      },
    ],
  },
  {
    id: "privacy-of-children",
    heading: { en: "Privacy of Children", ar: "خصوصية الأطفال" },
    blocks: [
      {
        type: "p",
        en: "We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the website and its services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us, please contact us to request that we delete that child's Personal Information.",
        ar: "لا نجمع عن علم أي معلومات شخصية من الأطفال دون سن الثامنة عشرة. فإذا كان عمرك أقل من 18 عامًا، يُرجى عدم تقديم أي معلومات شخصية عبر الموقع أو خدماته. وإذا كان لديك ما يدعوك إلى الاعتقاد بأن طفلًا دون سن الثامنة عشرة قد قدم إلينا معلومات شخصية، فيُرجى التواصل معنا لطلب حذف تلك المعلومات.",
      },
      {
        type: "p",
        en: "We encourage parents and legal guardians to monitor their children's internet usage and to help enforce this Policy by instructing their children never to provide Personal Information without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.",
        ar: "نشجع الوالدين والأوصياء القانونيين على مراقبة استخدام أطفالهم للإنترنت، والمساعدة في تطبيق هذه السياسة من خلال توجيههم إلى عدم تقديم أي معلومات شخصية دون إذنهم. كما نحث جميع الوالدين والأوصياء القانونيين المسؤولين عن رعاية الأطفال على اتخاذ الاحتياطات اللازمة لضمان عدم إفصاح الأطفال عن معلوماتهم الشخصية عبر الإنترنت دون إذنهم.",
      },
    ],
  },
  {
    id: "use-and-processing-of-collected-information",
    heading: { en: "Use and Processing of Collected Information", ar: "استخدام المعلومات التي جُمعت ومعالجتها" },
    blocks: [
      {
        type: "p",
        en: "In order to make the website and its services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested information, products or services. Any of the information we collect from you may be used for the following purposes:",
        ar: "قد نحتاج إلى جمع بعض المعلومات الشخصية واستخدامها لإتاحة الموقع وخدماته لك أو للوفاء بالتزام قانوني. وإذا لم تقدم المعلومات التي نطلبها، فقد يتعذر علينا تزويدك بالمعلومات أو المنتجات أو الخدمات المطلوبة. وقد نستخدم المعلومات التي نجمعها منك للأغراض التالية:",
      },
      {
        type: "ul",
        en: ["Respond to inquiries and offer support", "Run and operate the website and services"],
        ar: ["الرد على الاستفسارات وتقديم الدعم.", "تشغيل الموقع والخدمات وإدارتها."],
      },
      {
        type: "p",
        en: "Processing your Personal Information depends on how you interact with the website and its services, where you are located in the world and if one of the following applies:",
        ar: "تعتمد معالجة معلوماتك الشخصية على طبيعة تفاعلك مع الموقع وخدماته وموقعك الجغرافي، وعلى انطباق أحد الأسس التالية:",
      },
      {
        type: "ul",
        en: [
          "You have given your consent for one or more specific purposes;",
          "Provision of information is necessary for the performance of an agreement with you and/or for any pre-contractual obligations thereof;",
          "Processing is necessary for compliance with a legal obligation to which you are subject;",
          "Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us;",
          "Processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.",
        ],
        ar: [
          "أن تكون قد منحت موافقتك على المعالجة لغرض محدد أو أكثر.",
          "أن يكون تقديم المعلومات ضروريًا لتنفيذ اتفاق مبرم معك و/أو للوفاء بأي التزامات سابقة على إبرام ذلك الاتفاق.",
          "أن تكون المعالجة ضرورية للامتثال لالتزام قانوني يخضع له الشخص المعني.",
          "أن تكون المعالجة مرتبطة بمهمة تُنفذ تحقيقًا للمصلحة العامة أو في إطار ممارسة صلاحيات رسمية مخولة لنا.",
          "أن تكون المعالجة ضرورية لتحقيق المصالح المشروعة التي نسعى إليها أو التي يسعى إليها طرف ثالث.",
        ],
      },
    ],
  },
  {
    id: "disclosure-of-information",
    heading: { en: "Disclosure of Information", ar: "الإفصاح عن المعلومات" },
    blocks: [
      {
        type: "p",
        en: "Depending on the requested services or as necessary to complete any transaction or provide any service you have requested, we may share your information with our trusted third parties that work on our behalf or with us under confidentiality agreements. These third parties may use your Personal Information to help us communicate with you about offers from NIT and other parties; however, these third parties do not have any independent right to share this information.",
        ar: "بحسب الخدمات المطلوبة أو بالقدر اللازم لإتمام أي معاملة أو تقديم أي خدمة طلبتها، قد نشارك معلوماتك مع أطراف ثالثة موثوقة تعمل نيابةً عنا أو تتعاون معنا بموجب اتفاقيات سرية. وقد تستخدم هذه الأطراف معلوماتك الشخصية لمساعدتنا على التواصل معك بشأن العروض المقدمة من نسما للبنية التحتية والتقنية أو من أطراف أخرى، إلا أنه لا يحق لهذه الأطراف مشاركة تلك المعلومات بصورة مستقلة.",
      },
      {
        type: "p",
        en: "We may also disclose your Personal Information:",
        ar: "يجوز لنا أيضًا الإفصاح عن معلوماتك الشخصية في الحالات التالية:",
      },
      {
        type: "ul",
        en: [
          "To comply with any court order, law, or legal process, including responding to any government or regulatory request.",
          "To enforce or apply our terms of use and other agreements.",
          "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of NIT, our customers, or others.",
        ],
        ar: [
          "للامتثال لأي أمر قضائي أو قانون أو إجراء قانوني، بما في ذلك الاستجابة لأي طلب صادر عن جهة حكومية أو تنظيمية.",
          "لإنفاذ شروط الاستخدام والاتفاقيات الأخرى أو تطبيقها.",
          "إذا رأينا أن الإفصاح ضروري أو مناسب لحماية حقوق نسما للبنية التحتية والتقنية أو ممتلكاتها أو سلامتها، أو لحماية حقوق عملائنا أو غيرهم أو ممتلكاتهم أو سلامتهم.",
        ],
      },
    ],
  },
  {
    id: "retention-of-information",
    heading: { en: "Retention of Information", ar: "الاحتفاظ بالمعلومات" },
    blocks: [
      {
        type: "p",
        en: "We will retain and use your Personal Information for the period necessary to comply with our legal obligations, resolve disputes, and enforce our agreements, unless a longer retention period is required or permitted by law.",
        ar: "سنحتفظ بمعلوماتك الشخصية ونستخدمها للمدة اللازمة للوفاء بالتزاماتنا القانونية، وتسوية النزاعات، وإنفاذ اتفاقياتنا، ما لم يقتضِ القانون أو يسمح بالاحتفاظ بها لمدة أطول.",
      },
    ],
  },
  {
    id: "cookies",
    heading: { en: "Cookies", ar: "ملفات تعريف الارتباط" },
    blocks: [
      {
        type: "p",
        en: "The website and its services use \"cookies\" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.",
        ar: "يستخدم الموقع وخدماته «ملفات تعريف الارتباط» (Cookies) للمساعدة على تخصيص تجربتك عبر الإنترنت. وملف تعريف الارتباط هو ملف نصي يضعه خادم صفحة الويب على القرص الصلب لجهازك. ولا يمكن استخدام هذه الملفات لتشغيل البرامج أو نقل الفيروسات إلى جهاز الكمبيوتر الخاص بك. وتُخصّص ملفات تعريف الارتباط لك، ولا يمكن قراءتها إلا بواسطة خادم ويب تابع للنطاق الذي أصدرها.",
      },
      {
        type: "p",
        en: "We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website and improve our services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
        ar: "قد نستخدم ملفات تعريف الارتباط لجمع المعلومات وتخزينها وتتبعها لأغراض إحصائية أو تسويقية، ولتشغيل الموقع وتحسين خدماتنا. ويمكنك قبول ملفات تعريف الارتباط أو رفضها. وتقبل معظم متصفحات الويب هذه الملفات تلقائيًا، إلا أنه يمكنك عادةً تعديل إعدادات المتصفح لرفضها إذا رغبت في ذلك. وقد يؤدي رفضها إلى الحد من قدرتك على الاستفادة الكاملة من الموقع.",
      },
    ],
  },
  {
    id: "do-not-track-signals",
    heading: { en: "Do Not Track Signals", ar: "إشارات عدم التتبع" },
    blocks: [
      {
        type: "p",
        en: "Some browsers incorporate a Do Not Track (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time.",
        ar: "تتضمن بعض المتصفحات ميزة «عدم التتبع» (Do Not Track – DNT)، التي تُبلغ المواقع التي تزورها بأنك لا ترغب في تتبع نشاطك عبر الإنترنت. ويختلف التتبع عن استخدام المعلومات المرتبطة بموقع إلكتروني أو جمعها. ويُقصد بالتتبع هنا جمع المعلومات التي تتيح تحديد هوية المستخدمين الذين يزورون موقعًا إلكترونيًا أو يستخدمون خدمة عبر الإنترنت، أثناء تنقلهم بين مواقع مختلفة على مدى فترة زمنية.",
      },
      {
        type: "p",
        en: "Our website does not track its visitors over time and across third-party websites; however, some third-party sites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.",
        ar: "لا يتتبع موقعنا زواره بمرور الوقت أو عبر مواقع إلكترونية تابعة لأطراف ثالثة. ومع ذلك، قد تتتبع بعض مواقع الأطراف الثالثة أنشطة تصفحك عند تقديم محتواها لك، مما يتيح لها تخصيص المحتوى الذي تعرضه عليك.",
      },
    ],
  },
  {
    id: "links-to-other-resources",
    heading: { en: "Links to Other Resources", ar: "الروابط إلى مصادر أخرى" },
    blocks: [
      {
        type: "p",
        en: "The website and its services may contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the website and its services and to read the privacy statements of each and every resource that may collect Personal Information.",
        ar: "قد يحتوي الموقع وخدماته على روابط لمصادر أخرى لا نملكها ولا نتحكم فيها. ونود التنبيه إلى أننا غير مسؤولين عن ممارسات الخصوصية التي تتبعها تلك المصادر أو الأطراف الثالثة. لذا، نشجعك على الانتباه عند مغادرة الموقع أو استخدام خدماته والانتقال إلى مصادر أخرى، وعلى قراءة بيانات الخصوصية الخاصة بكل مصدر قد يجمع معلومات شخصية.",
      },
    ],
  },
  {
    id: "information-security",
    heading: { en: "Information Security", ar: "أمن المعلومات" },
    blocks: [
      {
        type: "p",
        en: "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.",
        ar: "نحفظ المعلومات التي تقدمها على خوادم حاسوبية ضمن بيئة آمنة وخاضعة للرقابة، ومحمية من الوصول إليها أو استخدامها أو الإفصاح عنها دون تصريح. ونتخذ تدابير إدارية وتقنية ومادية معقولة بهدف حماية المعلومات الشخصية الخاضعة لسيطرتنا أو الموجودة في عهدتنا من الوصول غير المصرح به أو الاستخدام أو التعديل أو الإفصاح. ومع ذلك، لا يمكن ضمان أمن نقل البيانات عبر الإنترنت أو الشبكات اللاسلكية بنسبة 100%.",
      },
      {
        type: "p",
        en: "Therefore, while we strive to protect your Personal Information, you acknowledge that there are security and privacy limitations inherent to the internet which are beyond our control, and the security, integrity, and privacy of any and all information and data exchanged between you and the website cannot be guaranteed.",
        ar: "وعليه، فإنك تقرّ بأنه رغم سعينا إلى حماية معلوماتك الشخصية، توجد قيود أمنية ومتعلقة بالخصوصية ملازمة لاستخدام الإنترنت وخارجة عن سيطرتنا، ولا يمكن ضمان أمن جميع المعلومات والبيانات المتبادلة بينك وبين الموقع أو سلامتها أو سريتها ضمانًا مطلقًا.",
      },
    ],
  },
  {
    id: "data-breach",
    heading: { en: "Data Breach", ar: "خرق أمن البيانات" },
    blocks: [
      {
        type: "p",
        en: "In the event we become aware that the security of the website has been compromised or users' Personal Information has been disclosed to unrelated third parties as a result of external activity, including but not limited to security attacks or fraud, we reserve the right to take reasonably appropriate measures, including but not limited to investigation and reporting, as well as notification to and cooperation with law enforcement authorities.",
        ar: "إذا علمنا بوقوع اختراق لأمن الموقع أو بالإفصاح عن المعلومات الشخصية للمستخدمين لأطراف ثالثة غير ذات صلة نتيجة نشاط خارجي، بما في ذلك الهجمات الأمنية أو الاحتيال على سبيل المثال لا الحصر، فإننا نحتفظ بحق اتخاذ التدابير المناسبة والمعقولة، بما في ذلك التحقيق والإبلاغ، وإخطار جهات إنفاذ القانون والتعاون معها.",
      },
      {
        type: "p",
        en: "In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm as a result of the breach, or if notice is otherwise required by law.",
        ar: "في حال وقوع خرق للبيانات، سنبذل جهودًا معقولة لإخطار الأفراد المتأثرين إذا رأينا أن الخرق قد يترتب عليه خطر معقول لوقوع ضرر، أو إذا كان الإخطار مطلوبًا بموجب القانون.",
      },
    ],
  },
  {
    id: "changes-and-amendments",
    heading: { en: "Changes and Amendments", ar: "التغييرات والتعديلات" },
    blocks: [
      {
        type: "p",
        en: "We reserve the right to modify this privacy policy relating to the website and its services at any time, effective upon posting of an updated version on the website. When we do, we will revise the updated date at the bottom of this page. Continued use of the website and its services after any such changes shall constitute your consent to such changes.",
        ar: "نحتفظ بحق تعديل سياسة الخصوصية هذه، المتعلقة بالموقع وخدماته، في أي وقت. وتسري التعديلات عند نشر النسخة المحدّثة على الموقع. وعند إجراء أي تعديل، سنحدّث تاريخ آخر تحديث الموضح أسفل هذه الصفحة. ويُعد استمرارك في استخدام الموقع وخدماته بعد إجراء التعديلات موافقةً منك عليها.",
      },
    ],
  },
  {
    id: "acceptance-of-this-policy",
    heading: { en: "Acceptance of this Policy", ar: "الموافقة على هذه السياسة" },
    blocks: [
      {
        type: "p",
        en: "You acknowledge that you have read this policy and agree to all its terms and conditions. By using the website and its services, you agree to be bound by this policy. If you do not agree to abide by the terms of this policy, you are not authorized to use or access the website and its services.",
        ar: "تقرّ بأنك قرأت هذه السياسة ووافقت على جميع أحكامها وشروطها. ويُعد استخدامك للموقع وخدماته موافقةً منك على الالتزام بأحكام هذه السياسة. وإذا لم توافق على الالتزام بها، فلا يُسمح لك باستخدام الموقع وخدماته أو الوصول إليهما.",
      },
    ],
  },
  {
    id: "contacting-us",
    heading: { en: "Contacting Us", ar: "التواصل معنا" },
    blocks: [
      {
        type: "p",
        en: "If you have any questions about this privacy policy, your Personal Information, or would like to exercise any of your rights, please feel free to contact us at: nit@nesmainfrastructure.com",
        ar: "إذا كانت لديك أي استفسارات بشأن سياسة الخصوصية هذه أو معلوماتك الشخصية، أو رغبت في ممارسة أي من حقوقك، فيُرجى التواصل معنا عبر البريد الإلكتروني التالي: nit@nesmainfrastructure.com",
      },
    ],
  },
];
