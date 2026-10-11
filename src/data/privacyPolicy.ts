import type { LegalSection, Localized } from "./legalTypes";

export const privacyPolicyTitle: Localized = { en: "Privacy policy", ar: "سياسة الخصوصية" };

export const privacyPolicyIntro: Localized = {
  en: 'Nesma Infrastructure & Technology ("NIT") is committed to protecting your privacy and handling your personal information responsibly, securely, and transparently.',
  ar: 'تلتزم نسما للبنية التحتية والتقنية ("NIT") بحماية خصوصيتك والتعامل مع معلوماتك الشخصية بمسؤولية وأمان وشفافية.',
};

export const privacyPolicySections: LegalSection[] = [
  {
    id: "introduction",
    heading: { en: "Introduction", ar: "مقدمة" },
    blocks: [
      {
        type: "p",
        en: "We respect your privacy and we are committed to protecting it through our compliance with this privacy policy. The Policy describes the types of Personal Information we may collect from you or that you may provide to us through the www.nesma-nit.com website and any of its related services; and our practices for collecting, using, maintaining, protecting, and disclosing that information.",
        ar: "نحن نحترم خصوصيتك وملتزمون بحمايتها من خلال التزامنا بسياسة الخصوصية هذه. تصف هذه السياسة أنواع المعلومات الشخصية التي قد نجمعها منك أو التي قد تقدمها لنا من خلال موقع www.nesma-nit.com وأي من الخدمات المرتبطة به، وممارساتنا المتعلقة بجمع هذه المعلومات واستخدامها والاحتفاظ بها وحمايتها والإفصاح عنها.",
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
        ar: "يمكنك الوصول إلى هذا الموقع واستخدامه وخدماته دون الإفصاح عن هويتك أو الكشف عن أي معلومات قد تحدد هويتك كفرد معيّن. ومع ذلك، إذا رغبت في استخدام بعض الميزات المتاحة على الموقع، فقد يُطلب منك تقديم بعض المعلومات الشخصية (مثل اسمك وبريدك الإلكتروني).",
      },
      {
        type: "p",
        en: "We receive and store any information you knowingly provide to us when you fill any forms on the website. When required, this information may include contact information (such as email address, phone number, etc.)",
        ar: "نستقبل ونحتفظ بأي معلومات تقدمها لنا طواعيةً عند تعبئة أي نماذج على الموقع. وقد تشمل هذه المعلومات، عند الحاجة، بيانات التواصل (مثل البريد الإلكتروني ورقم الهاتف وغيرها).",
      },
      {
        type: "p",
        en: "You can choose not to provide us with your Personal Information, but then you may not be able to take advantage of some of the features on the website. Users who are uncertain about what information is mandatory are welcome to contact us.",
        ar: "يمكنك اختيار عدم تزويدنا بمعلوماتك الشخصية، إلا أن ذلك قد يحول دون استفادتك من بعض ميزات الموقع. ونرحب بتواصل المستخدمين الذين لا يعرفون بوضوح أي المعلومات إلزامية معنا.",
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
        ar: "لا نقوم عمدًا بجمع أي معلومات شخصية من الأطفال دون سن 18 عامًا. إذا كان عمرك أقل من 18 عامًا، يُرجى عدم تقديم أي معلومات شخصية عبر الموقع وخدماته. وإذا كان لديك ما يدعو للاعتقاد بأن طفلًا دون سن 18 عامًا قد قدّم لنا معلومات شخصية، يُرجى التواصل معنا لطلب حذف تلك المعلومات.",
      },
      {
        type: "p",
        en: "We encourage parents and legal guardians to monitor their children's internet usage and to help enforce this Policy by instructing their children never to provide Personal Information without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.",
        ar: "نشجّع الآباء وأولياء الأمور على مراقبة استخدام أبنائهم للإنترنت والمساعدة على تطبيق هذه السياسة بتوجيه أبنائهم إلى عدم تقديم أي معلومات شخصية دون إذنهم. كما نطلب من جميع الآباء وأولياء الأمور المشرفين على رعاية الأطفال اتخاذ الاحتياطات اللازمة للتأكد من توجيه أبنائهم إلى عدم الإفصاح عن أي معلومات شخصية عبر الإنترنت دون إذنهم.",
      },
    ],
  },
  {
    id: "use-and-processing-of-collected-information",
    heading: { en: "Use and Processing of Collected Information", ar: "استخدام المعلومات المجمعة ومعالجتها" },
    blocks: [
      {
        type: "p",
        en: "In order to make the website and its services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested information, products or services. Any of the information we collect from you may be used for the following purposes:",
        ar: "لإتاحة الموقع وخدماته لك، أو للوفاء بأي التزام قانوني، قد نحتاج إلى جمع واستخدام بعض المعلومات الشخصية. وإذا لم تقدم المعلومات التي نطلبها، فقد لا نتمكن من تزويدك بالمعلومات أو المنتجات أو الخدمات المطلوبة. وقد تُستخدم أي من المعلومات التي نجمعها منك للأغراض التالية:",
      },
      {
        type: "ul",
        en: ["Respond to inquiries and offer support", "Run and operate the website and services"],
        ar: ["الرد على الاستفسارات وتقديم الدعم", "تشغيل الموقع وخدماته وإدارتها"],
      },
      {
        type: "p",
        en: "Processing your Personal Information depends on how you interact with the website and its services, where you are located in the world and if one of the following applies:",
        ar: "تعتمد معالجة معلوماتك الشخصية على طريقة تفاعلك مع الموقع وخدماته، ومكان تواجدك في العالم، وما إذا كان أحد الحالات التالية ينطبق:",
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
          "منحتنا موافقتك على غرض أو أكثر من أغراض محددة؛",
          "كان تقديم المعلومات ضروريًا لتنفيذ اتفاق معك و/أو لأي التزامات سابقة للتعاقد؛",
          "كانت المعالجة ضرورية للامتثال لالتزام قانوني تخضع له؛",
          "كانت المعالجة متعلقة بمهمة تُنفَّذ تحقيقًا للمصلحة العامة أو في إطار ممارسة سلطة رسمية مخوّلة لنا؛",
          "كانت المعالجة ضرورية لتحقيق مصالح مشروعة نسعى إليها نحن أو طرف ثالث.",
        ],
      },
    ],
  },
  {
    id: "disclosure-of-information",
    heading: { en: "Disclosure of information", ar: "الإفصاح عن المعلومات" },
    blocks: [
      {
        type: "p",
        en: "Depending on the requested services or as necessary to complete any transaction or provide any service you have requested, we may share your information with our trusted third parties that work on our behalf or with us under confidentiality agreements. These third parties may use your Personal Information to help us communicate with you about offers from NIT and other parties; however, these third parties do not have any independent right to share this information.",
        ar: "بحسب الخدمة المطلوبة، أو عند الضرورة لإتمام أي معاملة أو تقديم أي خدمة طلبتها، قد نشارك معلوماتك مع أطراف ثالثة موثوقة تعمل نيابةً عنا أو معنا بموجب اتفاقيات سرية. وقد تستخدم هذه الأطراف الثالثة معلوماتك الشخصية لمساعدتنا على التواصل معك بشأن عروض نسما للبنية التحتية والتقنية وجهات أخرى؛ غير أنه لا يحق لهذه الأطراف الثالثة مشاركة هذه المعلومات بشكل مستقل.",
      },
      {
        type: "p",
        en: "We may also disclose your Personal Information:",
        ar: "قد نفصح أيضًا عن معلوماتك الشخصية في الحالات التالية:",
      },
      {
        type: "ul",
        en: [
          "To comply with any court order, law, or legal process, including responding to any government or regulatory request.",
          "To enforce or apply our terms of use and other agreements.",
          "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of NIT, our customers, or others.",
        ],
        ar: [
          "للامتثال لأي أمر قضائي أو قانون أو إجراء قانوني، بما في ذلك الاستجابة لأي طلب حكومي أو تنظيمي.",
          "لإنفاذ أو تطبيق شروط الاستخدام الخاصة بنا وأي اتفاقيات أخرى.",
          "إذا رأينا أن الإفصاح ضروري أو مناسب لحماية حقوق نسما للبنية التحتية والتقنية أو ممتلكاتها أو سلامتها، أو حقوق عملائنا أو الآخرين.",
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
        ar: "نحتفظ بمعلوماتك الشخصية ونستخدمها للمدة اللازمة للامتثال لالتزاماتنا القانونية، وتسوية أي نزاعات، وإنفاذ اتفاقياتنا، ما لم يتطلب القانون أو يسمح بفترة احتفاظ أطول.",
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
        ar: "يستخدم الموقع وخدماته \"ملفات تعريف الارتباط\" (الكوكيز) للمساعدة على تخصيص تجربتك عبر الإنترنت. وملف تعريف الارتباط هو ملف نصي يضعه خادم صفحة الويب على جهازك. ولا يمكن استخدام ملفات تعريف الارتباط لتشغيل برامج أو نقل فيروسات إلى جهازك، وهي مخصصة لك على وجه التحديد ولا يمكن قراءتها إلا من خلال خادم الويب الخاص بالنطاق الذي أصدرها لك.",
      },
      {
        type: "p",
        en: "We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website and improve our services. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
        ar: "قد نستخدم ملفات تعريف الارتباط لجمع المعلومات وتخزينها وتتبعها لأغراض إحصائية أو تسويقية، وذلك لتشغيل موقعنا وتحسين خدماتنا. ولديك إمكانية قبول ملفات تعريف الارتباط أو رفضها. وتقبل معظم المتصفحات ملفات تعريف الارتباط تلقائيًا، إلا أنه يمكنك عادةً تعديل إعدادات المتصفح لرفضها إذا رغبت في ذلك، وقد يحول ذلك دون استفادتك الكاملة من الموقع.",
      },
    ],
  },
  {
    id: "do-not-track-signals",
    heading: { en: "Do Not Track signals", ar: "إشارات عدم التتبع" },
    blocks: [
      {
        type: "p",
        en: "Some browsers incorporate a Do Not Track (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from consumers who use or visit a website or online service as they move across different websites over time. Our website does not track its visitors over time and across third-party websites; however, some third-party sites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you.",
        ar: "تتضمن بعض المتصفحات ميزة \"عدم التتبع\" (DNT) ترسل إشارة إلى المواقع التي تزورها بأنك لا ترغب في تتبع نشاطك عبر الإنترنت. ويختلف التتبع عن استخدام أو جمع المعلومات المرتبطة بموقع إلكتروني؛ إذ يشير التتبع، لهذه الأغراض، إلى جمع معلومات تعريف شخصية من المستخدمين أثناء تنقلهم بين مواقع مختلفة عبر الزمن. ولا يقوم موقعنا بتتبع زواره عبر الزمن وعبر مواقع الأطراف الثالثة؛ غير أن بعض مواقع الأطراف الثالثة قد تتتبع أنشطة تصفحك عند تقديم المحتوى لك، مما يمكّنها من تخصيص ما تعرضه عليك.",
      },
    ],
  },
  {
    id: "links-to-other-resources",
    heading: { en: "Links to Other Resources", ar: "روابط لمصادر أخرى" },
    blocks: [
      {
        type: "p",
        en: "The website and its services may contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the website and its services and to read the privacy statements of each and every resource that may collect Personal Information.",
        ar: "قد يحتوي الموقع وخدماته على روابط لمصادر أخرى لا نملكها ولا نتحكم بها. يُرجى العلم أننا لسنا مسؤولين عن ممارسات الخصوصية الخاصة بهذه المصادر أو الأطراف الثالثة. ونشجعك على الانتباه عند مغادرة الموقع وخدماته، وقراءة بيانات الخصوصية الخاصة بكل مصدر قد يجمع معلومات شخصية.",
      },
    ],
  },
  {
    id: "information-security",
    heading: { en: "Information Security", ar: "أمن المعلومات" },
    blocks: [
      {
        type: "p",
        en: "We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure. Therefore, while we strive to protect your Personal Information, you acknowledge that there are security and privacy limitations inherent to the internet which are beyond our control, and the security, integrity, and privacy of any and all information and data exchanged between you and the website cannot be guaranteed.",
        ar: "نحافظ على أمن المعلومات التي تقدمها عبر خوادم محمية ضمن بيئة آمنة ومضبوطة، محمية من الوصول أو الاستخدام أو الإفصاح غير المصرّح به. ونطبّق ضوابط إدارية وتقنية ومادية معقولة سعيًا لحماية المعلومات الشخصية الخاضعة لسيطرتنا وحفظنا من الوصول أو الاستخدام أو التعديل أو الإفصاح غير المصرّح به. ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت أو الشبكات اللاسلكية بنسبة 100%. لذا، وبينما نسعى جاهدين لحماية معلوماتك الشخصية، فإنك تقر بوجود حدود أمنية وخصوصية متأصلة في طبيعة الإنترنت خارجة عن سيطرتنا، ولا يمكننا ضمان أمان وسلامة وخصوصية أي من المعلومات والبيانات المتبادلة بينك وبين الموقع.",
      },
    ],
  },
  {
    id: "data-breach",
    heading: { en: "Data Breach", ar: "اختراق البيانات" },
    blocks: [
      {
        type: "p",
        en: "In the event we become aware that the security of the website has been compromised or users' Personal Information has been disclosed to unrelated third parties as a result of external activity, including but not limited to security attacks or fraud, we reserve the right to take reasonably appropriate measures, including but not limited to investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm as a result of the breach, or if notice is otherwise required by law.",
        ar: "في حال علمنا بأن أمن الموقع قد تعرض للاختراق أو أن المعلومات الشخصية للمستخدمين قد أُفصح عنها لأطراف ثالثة غير ذات صلة نتيجة نشاط خارجي، بما في ذلك على سبيل المثال لا الحصر الهجمات الأمنية أو الاحتيال، فإننا نحتفظ بالحق في اتخاذ التدابير المناسبة المعقولة، بما في ذلك على سبيل المثال لا الحصر التحقيق وإعداد التقارير، وكذلك إخطار جهات إنفاذ القانون والتعاون معها. وفي حال وقوع اختراق للبيانات، سنبذل جهودًا معقولة لإخطار الأفراد المتضررين إذا ارتأينا وجود خطر معقول للضرر نتيجة الاختراق، أو إذا كان الإخطار مطلوبًا بموجب القانون.",
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
        ar: "نحتفظ بالحق في تعديل سياسة الخصوصية هذه المتعلقة بالموقع وخدماته في أي وقت، ويسري التعديل فور نشر النسخة المحدثة على الموقع. وعند إجراء أي تعديل، سنقوم بتحديث تاريخ آخر تحديث أسفل هذه الصفحة. ويُعد استمرارك في استخدام الموقع وخدماته بعد إجراء أي من هذه التغييرات بمثابة موافقة منك عليها.",
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
        ar: "أنت تقر بأنك قرأت هذه السياسة وتوافق على جميع أحكامها وشروطها. وباستخدامك للموقع وخدماته، فإنك توافق على الالتزام بهذه السياسة. وإذا كنت لا توافق على الالتزام بأحكام هذه السياسة، فلا يحق لك استخدام الموقع وخدماته أو الوصول إليها.",
      },
    ],
  },
  {
    id: "contacting-us",
    heading: { en: "Contacting us", ar: "التواصل معنا" },
    blocks: [
      {
        type: "p",
        en: "If you have any questions about this privacy policy, your Personal Information, or would like to exercise any of your rights, please feel free to contact us at: info@Nesma-nit.com",
        ar: "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، أو بشأن معلوماتك الشخصية، أو ترغب في ممارسة أي من حقوقك، فلا تتردد في التواصل معنا عبر: info@Nesma-nit.com",
      },
    ],
  },
];
