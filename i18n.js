/*!
 * JAM.26 — EN/AR internationalisation
 * Translates the static page in place and flips the layout to RTL.
 * Language choice is stored in localStorage under "jam-lang".
 */
(function () {
    "use strict";

    var AR = {
/* ---- common: nav, footer, shared UI ---- */
"HOME": "الرئيسية",
"WORKSHOPS": "الورش",
"COMPETITION": "المسابقة",
"RULES": "القوانين",
"FAQ": "الأسئلة الشائعة",
"TEAM": "الفريق",
"REGISTER_": "_سجّل",
"Home": "الرئيسية",
"Workshops": "الورش",
"Competition": "المسابقة",
"Rules": "القوانين",
"Team": "الفريق",
"Register": "التسجيل",
"© 2026 ACM Programming Jam": "© 2026 جام البرمجة ACM",
"Made by": "من صنع",
"Toggle navigation": "فتح القائمة",
"ORGANIZED BY ACM CLUB": "من تنظيم نادي ACM",
"ACM CLUB": "نادي ACM",
"Workshop Days": "أيام الورش",

/* ---- page titles / meta ---- */
"ACM Programming Jam 2026 | JAM.26": "جام البرمجة ACM 2026 | JAM.26",
"Competition | ACM Programming Jam 2026": "المسابقة | جام البرمجة ACM 2026",
"FAQ | JAM.26": "الأسئلة الشائعة | JAM.26",
"Rules | JAM.26": "القوانين | JAM.26",
"TEAM | JAM.26": "الفريق | JAM.26",
"Workshops | JAM.26": "الورش | JAM.26",
"Day 01 | Workshops | JAM.26": "اليوم 01 | الورش | JAM.26",
"Day 02 | Workshops | JAM.26": "اليوم 02 | الورش | JAM.26",
"Day 03 | Workshops | JAM.26": "اليوم 03 | الورش | JAM.26",
"Programming Jam 2026 - Team Formation": "جام البرمجة 2026 - تكوين الفريق",
"JAM.26 is an AI-assisted web engineering event: plan, design, build, deploy and present a working web application.": "JAM.26 حدث لهندسة الويب بمساعدة الذكاء الاصطناعي: تخطّط، تصمّم، تبني، تنشر، وتعرض تطبيق ويب شغّال.",

/* ---- index.html ---- */
"System Online.": "النظام يشتغل.",
"Awaiting user input": "بانتظار مدخلات المستخدم",
"Live Sync": "مزامنة مباشرة",
"SEASON 2026": "موسم 2026",
"Code.": "اكتب.",
"Construct.": "ابنِ.",
"Create.": "أبدع.",
"JOIN THE JAM": "انضم للجام",
"PROGRAMMING JAM 2026": "جام البرمجة 2026",
"CODE CONSTRUCT CREATE": "اكتب ابنِ أبدع",
"AI-ASSISTED WEB ENGINEERING": "هندسة ويب بمساعدة الذكاء الاصطناعي",
"# Programming Jam 2026": "# جام البرمجة 2026",
"An AI-assisted web engineering event. Every team receives the same application brief, then plans it, designs it, builds it, deploys it, and presents it.": "حدث لهندسة الويب بمساعدة الذكاء الاصطناعي. كل فريق يستلم نفس وصف التطبيق، ثم يخطّط له، يصمّمه، يبنيه، ينشره، ويعرضه.",
"## Format": "## الصيغة",
"Brief: One shared application challenge": "الوصف: تحدي تطبيق واحد مشترك",
"Preparation: 3 workshop days": "التحضير: 3 أيام ورش",
"Duration: TBD": "المدة: يُعلن لاحقًا",
"## Toolchain": "## الأدوات",
"The": "",
"Journey": "الرحلة",
"One brief. Four phases. A working application.": "وصف واحد. أربع مراحل. تطبيق شغّال.",
"Understand & Plan": "افهم وخطّط",
"Read the requirements, map how the system works in Excalidraw, and design the interface in Variant.": "اقرأ المتطلبات، ارسم طريقة عمل النظام في Excalidraw، وصمّم الواجهة في Variant.",
"Build & Connect": "ابنِ واربط",
"Develop in VS Code with Codex and Claude Code. Add authentication and persistent data with Firebase.": "طوّر في VS Code باستخدام Codex و Claude Code. أضف تسجيل الدخول وتخزين البيانات عبر Firebase.",
"Deploy & Measure": "انشر وقِس",
"Version with GitHub, deploy to Vercel, configure the domain in Cloudflare, then measure with PageSpeed Insights.": "أدر الإصدارات عبر GitHub، انشر على Vercel، اضبط النطاق في Cloudflare، ثم قِس الأداء بـ PageSpeed Insights.",
"Adapt & Present": "تكيّف واعرض",
"Respond to the unexpected change request, then demonstrate and explain what you built.": "استجب لطلب التغيير المفاجئ، ثم اعرض واشرح اللي بنيته.",
"/WORKSHOPS": "/الورش",
"Learn the": "تعلّم",
"Workflow.": "سير العمل.",
"Three workshop days that walk through the same workflow you will use on competition day.": "ثلاثة أيام ورش تمشي معك على نفس سير العمل اللي بتستخدمه يوم المسابقة.",
"WORKSHOP": "ورشة",
"Planning & Workflow": "التخطيط وسير العمل",
"Day 01": "اليوم 01",
"Day 02": "اليوم 02",
"Day 03": "اليوم 03",
"Turn requirements into a plan: understand the brief, map the system in Excalidraw, design the UI in Variant.": "حوّل المتطلبات إلى خطة: افهم الوصف، ارسم النظام في Excalidraw، وصمّم الواجهة في Variant.",
"Explore Day 01": "استكشف اليوم 01",
"Build & Debug": "البناء وتصحيح الأخطاء",
"Develop in VS Code with AI assistants, wire up Firebase auth and data, and debug systematically.": "طوّر في VS Code مع مساعدات الذكاء الاصطناعي، اربط تسجيل الدخول والبيانات في Firebase، وصحّح الأخطاء بمنهجية.",
"Explore Day 02": "استكشف اليوم 02",
"Ship it: GitHub, Vercel, Cloudflare DNS, search-engine setup, and PageSpeed Insights.": "أطلقه: GitHub، Vercel، إعدادات DNS في Cloudflare، تهيئة محركات البحث، و PageSpeed Insights.",
"Explore Day 03": "استكشف اليوم 03",
"THE_CHALLENGE": "التحدي",
"> STATUS: LOCKED UNTIL COMPETITION DAY": "> الحالة: مقفل حتى يوم المسابقة",
"Every team receives the same application brief on competition day. It defines the target user, the core functionality, the required features, the technical requirements, and the final deliverables. How you build it is up to your team.": "كل فريق يستلم نفس وصف التطبيق يوم المسابقة. الوصف يحدد المستخدم المستهدف، الوظائف الأساسية، الميزات المطلوبة، المتطلبات التقنية، والمخرجات النهائية. أما طريقة البناء فهي قرار فريقك.",
"How Competition Day Works": "كيف يشتغل يوم المسابقة",
"Dates & venue: TBD // Organized by ACM Club": "التواريخ والمكان: يُعلن لاحقًا // من تنظيم نادي ACM",
"Register Now": "سجّل الآن",
"LET'S GO": "يلا نبدأ",
/* ---- competition.html ---- */
"/COMPETITION": "/المسابقة",
"No Tutorial": "بدون شرح",
"This Time.": "هالمرة.",
"You Build It.": "أنت تبنيه.",
"Competition day puts everything from the workshops into practice. Your team receives a challenge, plans a solution, builds a working web application, and presents the final result.": "يوم المسابقة يحوّل كل شي تعلمته في الورش إلى تطبيق عملي. فريقك يستلم التحدي، يخطّط للحل، يبني تطبيق ويب شغّال، ويعرض النتيجة النهائية.",
"SEE HOW IT WORKS": "شوف كيف يشتغل",
"Loading environment variables...": "جاري تحميل متغيرات البيئة...",
"training_mode:": "وضع_التدريب:",
"disabled": "معطّل",
"team_mode:": "وضع_الفريق:",
"enabled": "مفعّل",
"challenge:": "التحدي:",
"locked": "مقفل",
"status: awaiting competition": "الحالة: بانتظار المسابقة",
"RECEIVE → PLAN → BUILD → ADAPT → SUBMIT → PRESENT": "استلم ← خطّط ← ابنِ ← تكيّف ← سلّم ← اعرض",
"The Competition Loop": "دورة المسابقة",
"01 / RECEIVE": "01 / الاستلام",
"Teams receive the official application challenge and requirements.": "الفرق تستلم تحدي التطبيق الرسمي ومتطلباته.",
"02 / PLAN": "02 / التخطيط",
"Understand the requirements, divide responsibilities, design the solution, and decide how the application will work.": "افهم المتطلبات، وزّع المهام، صمّم الحل، وقرّر كيف بيشتغل التطبيق.",
"03 / BUILD": "03 / البناء",
"Turn the plan into a functional web application.": "حوّل الخطة إلى تطبيق ويب شغّال.",
"04 / ADAPT": "04 / التكيّف",
"Respond to new information or requirements introduced during the competition.": "استجب للمعلومات أو المتطلبات الجديدة اللي تنزل أثناء المسابقة.",
"05 / SUBMIT": "05 / التسليم",
"Finalize the application and submit the required project materials before the deadline.": "أنهِ التطبيق وسلّم مواد المشروع المطلوبة قبل الموعد النهائي.",
"06 / PRESENT": "06 / العرض",
"Demonstrate the finished application and explain the team's engineering decisions.": "اعرض التطبيق النهائي واشرح القرارات الهندسية لفريقك.",
"The output is simple.": "المخرج بسيط.",
"Build something that works.": "ابنِ شيئًا يشتغل.",
"Teams will receive a web application challenge on competition day. You will be responsible for interpreting the requirements and deciding how to implement the solution.": "الفرق بتستلم تحدي تطبيق ويب يوم المسابقة. وأنت مسؤول عن فهم المتطلبات وتحديد طريقة تنفيذ الحل.",
"NOTE:": "ملاحظة:",
"Exact challenge details remain locked until competition day.": "تفاصيل التحدي الدقيقة تبقى مقفلة حتى يوم المسابقة.",
"requirements": "المتطلبات",
"architecture": "البنية",
"implementation": "التنفيذ",
"testing/": "الاختبار/",
"planning/": "التخطيط/",
"presentation/": "العرض/",
"// System Architecture Configuration": "// إعدادات بنية النظام",
"Frontend": "الواجهة الأمامية",
"Backend": "الواجهة الخلفية",
"Build as a team": "ابنوا كفريق",
"There is no required team structure. Teams decide how to divide the work based on their strengths and strategy.": "ما فيه هيكل فريق إلزامي. الفرق تقرر كيف توزّع الشغل حسب نقاط قوتها واستراتيجيتها.",
"Whether you pair program on a single monitor, split strictly into frontend and backend, or have one person write tests while another builds UI—the process is entirely up to you.": "سواء اشتغلتوا سوا على شاشة وحدة، أو قسّمتوا بين الواجهة الأمامية والخلفية، أو واحد يكتب الاختبارات وواحد يبني الواجهة — الطريقة تعود لكم بالكامل.",
"EXPECT CHANGE.": "توقّع التغيير.",
"Real software projects rarely stay exactly as planned. During the Programming Jam, teams should be prepared to adapt.": "مشاريع البرمجيات الحقيقية نادرًا تمشي بالضبط حسب الخطة. في جام البرمجة، لازم الفرق تكون جاهزة تتكيّف.",
"> monitoring requirements...": "> مراقبة المتطلبات...",
"> executing core build...": "> تنفيذ البناء الأساسي...",
"> running tests...": "> تشغيل الاختبارات...",
"WARNING": "تحذير",
"event: requirements_changed": "حدث: تغيّرت_المتطلبات",
"source: client_feedback": "المصدر: ملاحظات_العميل",
"> recalculating architecture...": "> إعادة حساب البنية...",
"What are we looking for?": "وش اللي ندوّر عليه؟",
"Projects are scored out of 100 points across seven categories.": "تُقيَّم المشاريع من 100 نقطة موزّعة على سبع فئات.",
"Functional Completeness": "اكتمال الوظائف",
"Does the application meet the provided requirements and function correctly?": "هل التطبيق يحقق المتطلبات المطلوبة ويشتغل صح؟",
"> RUNNING DIAGNOSTIC...": "> تشغيل الفحص...",
"STATUS:": "الحالة:",
"EVALUATING": "قيد التقييم",
"Technical Implementation": "التنفيذ التقني",
"How effectively were authentication, persistent data, application logic, GitHub, and deployment implemented?": "كيف نُفِّذت المصادقة، وتخزين البيانات، ومنطق التطبيق، و GitHub، والنشر؟",
"> ANALYZING STRUCTURE...": "> تحليل الهيكل...",
"UI/UX & Design": "الواجهة وتجربة المستخدم والتصميم",
"Is the application intuitive, coherent, responsive, and easy to use?": "هل التطبيق واضح ومتناسق ومتجاوب وسهل الاستخدام؟",
"> TESTING INTERFACE...": "> اختبار الواجهة...",
"Problem Solving & Adaptability": "حل المشكلات والتكيّف",
"How effectively did the team debug problems and respond to the unexpected requirement change?": "كيف عالج الفريق المشكلات واستجاب لتغيّر المتطلبات المفاجئ؟",
"> MEASURING DELTA...": "> قياس الفرق...",
"Final Demonstration": "العرض النهائي",
"Can the team clearly demonstrate and explain its solution?": "هل يقدر الفريق يعرض ويشرح حلّه بوضوح؟",
"> AWAITING DEMO...": "> بانتظار العرض...",
"PENDING": "قيد الانتظار",
"System Understanding & Planning": "فهم النظام والتخطيط",
"Can the team explain its Excalidraw diagram and how the major parts of the system interact?": "هل يقدر الفريق يشرح مخطط Excalidraw وكيف تتفاعل أجزاء النظام الرئيسية؟",
"> READING DIAGRAM...": "> قراءة المخطط...",
"Production Readiness & Performance": "الجاهزية للإنتاج والأداء",
"Has the application been deployed correctly, connected to a domain, prepared for search discovery, and evaluated with PageSpeed Insights?": "هل نُشِر التطبيق بشكل صحيح، ورُبِط بنطاق، وجُهِّز لمحركات البحث، وقُيِّم بـ PageSpeed Insights؟",
"> CHECKING DEPLOYMENT...": "> فحص النشر...",
"The Day": "اليوم",
"VIEW RULES": "شوف القوانين",
"CHECK_IN": "التسجيل_الحضوري",
"TBD": "يُعلن لاحقًا",
"CHALLENGE_RELEASE": "إطلاق_التحدي",
"PLANNING": "التخطيط",
"DEVELOPMENT": "التطوير",
"CHANGE_EVENT": "حدث_التغيير",
"FINAL_BUILD": "البناء_النهائي",
"SUBMISSION": "التسليم",
"PRESENTATIONS": "العروض",
"RESULTS": "النتائج",
"You already know the process.": "أنت أصلًا تعرف الطريقة.",
"The workshops give you the tools. Competition day tests what you can do with them.": "الورش تعطيك الأدوات. ويوم المسابقة يختبر وش تقدر تسوي فيها.",
"LEARNING": "التعلّم",
"PLAN": "خطّط",
"BUILD": "ابنِ",
"DEBUG": "صحّح",
"SHIP": "أطلق",
"PROVING": "الإثبات",
"Programming Jam": "جام البرمجة",
"HELP": "المساعدة",
"limited": "محدودة",
"TUTORIAL": "الشرح",
"none": "لا يوجد",
"SOLUTION": "الحل",
"yours": "حلّك أنت",
"> checking team...": "> فحص الفريق...",
"> checking skills...": "> فحص المهارات...",
"> checking challenge...": "> فحص التحدي...",
"LOCKED": "مقفل",
"status: READY": "الحالة: جاهز",
"> await launch_sequence...": "> بانتظار تسلسل_الإطلاق...",
"Think.": "فكّر.",
"Build.": "ابنِ.",
"Adapt.": "تكيّف.",
"Ship.": "أطلق.",
"\"You will not know exactly what you are building until the challenge drops.\"": "«ما راح تعرف وش بتبني بالضبط إلا لما ينزل التحدي.»",
"View The Challenge →": "شوف التحدي ←",
"Read The Rules": "اقرأ القوانين",
/* ---- faq.html ---- */
"/FAQ": "/الأسئلة",
"Questions?": "عندك أسئلة؟",
"Let's debug them.": "خلنا نحلها.",
"\"Everything you need to know before joining JAM.26.\"": "«كل اللي تحتاج تعرفه قبل ما تنضم لـ JAM.26.»",
"cmd+k to search": "cmd+k للبحث",
"Ask about teams, AI, workshops, competition...": "اسأل عن الفرق، الذكاء الاصطناعي، الورش، المسابقة...",
"SECTION: FAQ": "القسم: الأسئلة الشائعة",
"STATUS: ONLINE": "الحالة: متصل",
"Quick Actions:": "إجراءات سريعة:",
"> Do I need experience?": "> هل أحتاج خبرة؟",
"> Can AI build the whole website?": "> هل يقدر الذكاء الاصطناعي يبني الموقع كامل؟",
"> Can I use ChatGPT Plus?": "> أقدر أستخدم ChatGPT Plus؟",
"> Do I need a team?": "> هل أحتاج فريق؟",
"> What should I bring?": "> وش أجيب معي؟",
"404: Query not found.": "404: ما لقينا نتيجة.",
"Try adjusting your search terms or ask an organizer.": "جرّب تغيّر كلمات البحث أو اسأل أحد المنظمين.",
"01 / GETTING STARTED": "01 / البداية",
"02 / TEAMS": "02 / الفرق",
"03 / AI & TOOLS": "03 / الذكاء الاصطناعي والأدوات",
"04 / WORKSHOPS": "04 / الورش",
"05 / COMPETITION": "05 / المسابقة",
"06 / SUBMISSION": "06 / التسليم",
"Getting Started": "البداية",
"> Do I need web development experience?": "> هل أحتاج خبرة في تطوير الويب؟",
"No.": "لا.",
"The Programming Jam is designed to be approachable for participants who are still learning. Preparation workshops will introduce the development workflow and tools used throughout the event.": "جام البرمجة مصمّم ليكون مناسبًا للمشاركين اللي لسه يتعلمون. الورش التحضيرية بتعرّفك على سير العمل والأدوات المستخدمة طوال الحدث.",
"> Do I need to be an experienced programmer?": "> لازم أكون مبرمج محترف؟",
"You should be willing to learn, experiment, solve problems, and work with your team. AI is intentionally part of the development process.": "المطلوب استعدادك للتعلّم والتجريب وحل المشكلات والعمل مع فريقك. والذكاء الاصطناعي جزء أساسي ومقصود من عملية التطوير.",
"> Who can participate?": "> مين يقدر يشارك؟",
"Participants should bring their laptop and charger.": "على المشاركين إحضار اللابتوب والشاحن.",
"for any additional event-specific requirements that have not yet been finalized.": "لأي متطلبات إضافية خاصة بالحدث لم تُحدَّد بعد.",
"Teams": "الفرق",
"> Do I need a team before registering?": "> لازم يكون عندي فريق قبل التسجيل؟",
"Participants who do not already have a team can use the Programming Jam team formation process to create or join one.": "المشاركون اللي ما عندهم فريق يقدرون يستخدمون آلية تكوين الفرق في جام البرمجة لإنشاء فريق أو الانضمام لواحد.",
"> Can I participate alone?": "> أقدر أشارك لحالي؟",
"> How many people can be on a team?": "> كم عدد أعضاء الفريق؟",
"> Can I change teams?": "> أقدر أغيّر فريقي؟",
"Team changes are subject to organizer rules.": "تغيير الفرق يخضع لقواعد المنظمين.",
"AI & Tools": "الذكاء الاصطناعي والأدوات",
"> Can I use AI?": "> أقدر أستخدم الذكاء الاصطناعي؟",
"Yes.": "نعم.",
"Yes": "نعم",
"This is an AI Programming Jam. AI use is encouraged throughout the development process.": "هذا جام برمجة بالذكاء الاصطناعي، واستخدامه مُشجَّع طوال عملية التطوير.",
"> Can AI generate my entire website?": "> يقدر الذكاء الاصطناعي يولّد موقعي كامل؟",
"AI may generate part or all of your application. There is no requirement to manually write a specific percentage of the code.": "يمكن للذكاء الاصطناعي توليد جزء من تطبيقك أو كامله. ما فيه نسبة محددة لازم تكتبها بيدك.",
"Standard paid consumer AI plans such as ChatGPT Plus are allowed.": "الخطط المدفوعة الاعتيادية مثل ChatGPT Plus مسموحة.",
"> Can I use ChatGPT Pro?": "> أقدر أستخدم ChatGPT Pro؟",
"The highest-tier or advanced premium AI plans are restricted to maintain fairness between participants.": "الخطط الأعلى أو المتقدمة ممنوعة حفاظًا على العدالة بين المشاركين.",
"> What about Claude, Gemini, or other AI tools?": "> وش عن Claude أو Gemini أو غيرها من أدوات الذكاء الاصطناعي؟",
"Participants are not restricted to one AI provider. The same AI access principle applies: free and standard consumer paid tiers are permitted, while the highest-tier or advanced premium access is not.": "المشاركون غير ملزمين بمزوّد واحد. ينطبق نفس المبدأ: الخطط المجانية والمدفوعة الاعتيادية مسموحة، والخطط الأعلى أو المتقدمة ممنوعة.",
"If participants are unsure whether a specific plan is permitted, they should ask an organizer.": "إذا ما كنت متأكد إن خطة معينة مسموحة، اسأل أحد المنظمين.",
"> Can I use AI coding assistants?": "> أقدر أستخدم مساعدات البرمجة بالذكاء الاصطناعي؟",
", provided they comply with the competition's AI access policy.": "، بشرط التزامها بسياسة استخدام الذكاء الاصطناعي في المسابقة.",
"> Does my team have to understand AI-generated code?": "> لازم فريقي يفهم الكود اللي يولّده الذكاء الاصطناعي؟",
"Your team is responsible for the final application. If something breaks, you must be able to investigate the problem, direct your tools toward a solution, test the result, and verify that the application works.": "فريقك مسؤول عن التطبيق النهائي. إذا خرب شي، لازم تقدر تحقق في المشكلة، وتوجّه أدواتك للحل، وتختبر النتيجة، وتتأكد إن التطبيق يشتغل.",
"> Are there preparation workshops?": "> فيه ورش تحضيرية؟",
"JAM.26 includes three workshop days designed to prepare participants for the development workflow they will use during the competition.": "JAM.26 يتضمن ثلاثة أيام ورش مصمّمة لتجهيز المشاركين لسير العمل اللي بيستخدمونه في المسابقة.",
"> What will the workshops teach?": "> وش بتعلّم الورش؟",
"Day 01 covers planning and the development workflow. Day 02 covers full-stack development and debugging. Day 03 covers deployment, domains, search discovery, and performance. Together they walk through the same workflow used on competition day.": "اليوم 01 يغطي التخطيط وسير عمل التطوير. اليوم 02 يغطي التطوير المتكامل وتصحيح الأخطاء. اليوم 03 يغطي النشر والنطاقات ومحركات البحث والأداء. وكلها مع بعض تمشي على نفس سير العمل المستخدم يوم المسابقة.",
"> Do I have to attend the workshops to compete?": "> لازم أحضر الورش عشان أشارك في المسابقة؟",
"> Where can I find the workshop content?": "> وين ألقى محتوى الورش؟",
"All three workshop days, including what each one covers, are on the Workshops page.": "كل أيام الورش الثلاثة، وتفاصيل ما يغطيه كل يوم، موجودة في صفحة الورش.",
"VIEW WORKSHOPS →": "شوف الورش ←",
"> What are we building?": "> وش بنبني؟",
"That is part of the challenge.": "هذا جزء من التحدي.",
"Teams will receive the official application brief when the challenge is released. The exact application should remain secret beforehand.": "الفرق بتستلم وصف التطبيق الرسمي عند إطلاق التحدي. وتفاصيل التطبيق تبقى سرية قبل ذلك.",
"> When will the challenge be revealed?": "> متى ينكشف التحدي؟",
"The challenge will be released on competition day.": "التحدي بينزل يوم المسابقة.",
"> Can we start building before the competition?": "> نقدر نبدأ البناء قبل المسابقة؟",
"Teams may prepare and practice beforehand, but they may not begin building a solution specifically for the competition challenge before it is officially released.": "الفرق تقدر تتجهز وتتمرّن قبل الحدث، لكن ما يجوز تبدأ ببناء حل مخصص لتحدي المسابقة قبل إطلاقه رسميًا.",
"> Will the requirements change?": "> هل بتتغير المتطلبات؟",
"Teams should be prepared to adapt during the competition.": "لازم الفرق تكون جاهزة تتكيّف أثناء المسابقة.",
"> Can another person help us during the competition?": "> يقدر شخص من برا يساعدنا أثناء المسابقة؟",
"Only members of your registered team may provide human assistance with the competition project. AI assistance is allowed.": "المساعدة البشرية في مشروع المسابقة مقصورة على أعضاء فريقك المسجّلين فقط. أما مساعدة الذكاء الاصطناعي فمسموحة.",
"> Can teams help each other?": "> تقدر الفرق تساعد بعض؟",
"Competing teams may not share challenge-specific code, prompts, solutions, debugging solutions, implementation details, or strategies during the competition.": "لا يجوز للفرق المتنافسة تبادل الكود أو البرومبتات أو الحلول أو حلول تصحيح الأخطاء أو تفاصيل التنفيذ أو الاستراتيجيات المتعلقة بالتحدي أثناء المسابقة.",
"VIEW COMPETITION →": "شوف المسابقة ←",
"Submission": "التسليم",
"> What do we need to submit?": "> وش نسلّم؟",
"Each team submits:": "كل فريق يسلّم:",
"Live production website": "موقع منشور ويشتغل فعليًا",
"Custom domain or subdomain": "نطاق مخصص أو نطاق فرعي",
"GitHub repository": "مستودع GitHub",
"Excalidraw functional diagram": "مخطط وظيفي في Excalidraw",
"Working Firebase authentication": "تسجيل دخول شغّال عبر Firebase",
"Working persistent data functionality": "تخزين بيانات شغّال",
"Required application features": "ميزات التطبيق المطلوبة",
"Completed unexpected change request": "تنفيذ طلب التغيير المفاجئ",
"Google Search Console setup": "إعداد Google Search Console",
"Bing Webmaster Tools setup": "إعداد Bing Webmaster Tools",
"PageSpeed Insights result": "نتيجة PageSpeed Insights",
"The application must be functional during judging.": "لازم التطبيق يكون شغّال وقت التحكيم.",
"> Does the website need to be deployed?": "> لازم الموقع يكون منشور؟",
"The final application must be publicly accessible for judging, deployed and connected to a domain or subdomain.": "لازم التطبيق النهائي يكون متاح للجميع وقت التحكيم، منشورًا ومربوطًا بنطاق أو نطاق فرعي.",
"> Can we keep working after the deadline?": "> نقدر نكمل شغل بعد الموعد النهائي؟",
"The judged submission may not be modified after the official deadline unless organizers explicitly authorize it.": "لا يجوز تعديل التسليم المُحكَّم بعد الموعد النهائي الرسمي إلا بإذن صريح من المنظمين.",
"> How will projects be judged?": "> كيف بتتحكم المشاريع؟",
"Projects are scored out of 100 points across seven categories, covering functional completeness, technical implementation, problem solving and adaptability, UI/UX, system understanding, production readiness, and the final demonstration. The full breakdown is on the Competition page.": "تُقيَّم المشاريع من 100 نقطة موزّعة على سبع فئات: اكتمال الوظائف، التنفيذ التقني، حل المشكلات والتكيّف، الواجهة وتجربة المستخدم، فهم النظام، الجاهزية للإنتاج، والعرض النهائي. التفصيل الكامل في صفحة المسابقة.",
"Still Stuck?": "لسه محتار؟",
"\"If your question isn't answered here, ask an organizer before making assumptions about the competition.\"": "«إذا سؤالك ما لقى جواب هنا، اسأل أحد المنظمين قبل ما تفترض أي شي عن المسابقة.»",
"searching FAQ...": "جاري البحث في الأسئلة...",
"NO_MATCH_FOUND": "ما_في_نتيجة",
"next_action?": "الخطوة_التالية؟",
"ASK_AN_ORGANIZER": "اسأل_أحد_المنظمين",
"CONTACT:": "التواصل:",
"> faq --status": "> faq --status",
"questions_answered:": "أسئلة_تمت_الإجابة:",
"rules_loaded:": "القوانين_محمّلة:",
"team_ready:": "الفريق_جاهز:",
"registration:": "التسجيل:",
"pending": "قيد الانتظار",
"Ready to Join?": "جاهز تنضم؟",
"Register →": "سجّل ←",
"View Rules →": "شوف القوانين ←",
/* ---- rules.html ---- */
"/RULES": "/القوانين",
"Build": "ابنِ",
"Freely.": "بحرية.",
"Compete": "نافس",
"Fairly.": "بعدل.",
"The Programming Jam gives teams freedom to use AI and modern development tools. These rules exist to keep that freedom fair for everyone.": "جام البرمجة يعطي الفرق حرية استخدام الذكاء الاصطناعي وأدوات التطوير الحديثة. وهالقوانين موجودة عشان تبقى الحرية عادلة للجميع.",
"READ THE RULES": "اقرأ القوانين",
"RULESET: ACTIVE": "مجموعة القوانين: فعّالة",
"VERSION: 1.0": "الإصدار: 1.0",
"EVENT: JAM.26": "الحدث: JAM.26",
"AI_USAGE": "استخدام_الذكاء_الاصطناعي",
"ENABLED": "مفعّل",
"AI_CODE_GEN": "توليد_الكود_بالذكاء_الاصطناعي",
"CREATIVITY": "الإبداع",
"FAIR_PLAY": "اللعب_النظيف",
"REQUIRED": "مطلوب",
"// Rules enforce fair play boundaries": "// القوانين تضبط حدود اللعب النظيف",
"// while maintaining creative freedom.": "// مع الحفاظ على حرية الإبداع.",
"AI Use Is": "استخدام الذكاء الاصطناعي",
"Encouraged.": "مُشجَّع.",
"This is an AI Programming Jam. AI may be used to generate part or all of your application. There is no requirement to manually write a specific amount of code.": "هذا جام برمجة بالذكاء الاصطناعي. تقدر تستخدمه لتوليد جزء من تطبيقك أو كامله، وما فيه كمية كود لازم تكتبها بيدك.",
"\"The restrictions below exist to maintain fairness, not to limit AI-assisted development.\"": "«القيود التالية موجودة للحفاظ على العدالة، مو لتقييد التطوير بمساعدة الذكاء الاصطناعي.»",
"AI_GENERATED_CODE": "كود_مولّد_بالذكاء_الاصطناعي",
"ALLOWED": "مسموح",
"FULL_AI_BUILD": "بناء_كامل_بالذكاء_الاصطناعي",
"MANUAL_CODE_REQUIREMENT": "شرط_الكتابة_اليدوية",
"NONE": "لا يوجد",
"If it isn't prohibited,": "إذا ما كان ممنوعًا،",
"it's generally permitted.": "فهو مسموح غالبًا.",
"If you are uncertain whether something is permitted, ask an organizer before proceeding.": "إذا ما كنت متأكد إن شيئًا مسموح، اسأل أحد المنظمين قبل ما تكمل.",
"> checking action...": "> فحص الإجراء...",
"evaluating against 11 strict rules...": "المقارنة مع 11 قانونًا صارمًا...",
"no match found in prohibited list.": "ما فيه تطابق في قائمة الممنوعات.",
"STATUS: NOT_PROHIBITED": "الحالة: غير_ممنوع",
"> proceed": "> تابع",
"/PROHIBITED": "/الممنوعات",
"11 Things You Cannot Do.": "11 شيئًا ممنوع تسويها.",
"TOTAL_RULES: 11": "إجمالي_القوانين: 11",
"INDEX //": "الفهرس //",
"01 AI TIER": "01 فئة الذكاء الاصطناعي",
"02 OUTSIDE HELP": "02 مساعدة خارجية",
"03 CROSS-TEAM": "03 بين الفرق",
"04 PRE-BUILD": "04 بناء مسبق",
"05 COPIED WORK": "05 عمل منسوخ",
"06 CHANGE": "06 التغيير",
"07 INTERFERENCE": "07 التشويش",
"08 CREDENTIALS": "08 بيانات الدخول",
"09 REPRESENTATION": "09 التمثيل",
"10 DEADLINE": "10 الموعد النهائي",
"11 RULE EVASION": "11 التحايل على القوانين",
"AI Tier Limit": "حدود فئة الذكاء الاصطناعي",
"Do not use the highest-tier AI plans, models, or features prohibited by the organizers.": "ممنوع استخدام أعلى فئات خطط أو نماذج أو ميزات الذكاء الاصطناعي التي يمنعها المنظمون.",
"Standard paid consumer plans are allowed. For example: ChatGPT Plus is allowed, but ChatGPT Pro is not allowed. The same principle applies to other AI providers. Standard consumer paid tiers may be used, while the highest-tier or advanced premium access may not be used.": "الخطط المدفوعة الاعتيادية مسموحة. مثال: ChatGPT Plus مسموح، لكن ChatGPT Pro ممنوع. ونفس المبدأ ينطبق على بقية المزوّدين: الخطط المدفوعة الاعتيادية مسموحة، والخطط الأعلى أو المتقدمة ممنوعة.",
"// Note:": "// ملاحظة:",
"Organizers may publish an approved AI access list before the competition.": "قد ينشر المنظمون قائمة معتمدة بخطط الذكاء الاصطناعي قبل المسابقة.",
"METADATA": "بيانات وصفية",
"CATEGORY:": "الفئة:",
"FAIRNESS": "العدالة",
"ENFORCED": "مُطبَّق",
"Outside Human Assistance": "المساعدة البشرية الخارجية",
"Do not receive coding, debugging, design, architecture, implementation, or problem-solving assistance from anyone outside your registered team during the competition.": "ممنوع تلقّي أي مساعدة في البرمجة أو تصحيح الأخطاء أو التصميم أو البنية أو التنفيذ أو حل المشكلات من أي شخص خارج فريقك المسجّل أثناء المسابقة.",
"AI assistance is allowed.": "مساعدة الذكاء الاصطناعي مسموحة.",
"AI_ASSISTANCE": "مساعدة_الذكاء_الاصطناعي",
"TEAM_ASSISTANCE": "مساعدة_الفريق",
"OUTSIDE_HUMAN": "شخص_من_خارج_الفريق",
"PROHIBITED": "ممنوع",
"Cross-Team Collaboration": "التعاون بين الفرق",
"Do not share code, prompts, solutions, implementation details, debugging solutions, or challenge-specific strategies with another competing team.": "ممنوع مشاركة الكود أو البرومبتات أو الحلول أو تفاصيل التنفيذ أو حلول تصحيح الأخطاء أو الاستراتيجيات الخاصة بالتحدي مع أي فريق منافس.",
"Your registered team may collaborate freely internally.": "أما داخل فريقك المسجّل فالتعاون مفتوح تمامًا.",
"Building Before the Competition": "البناء قبل المسابقة",
"Do not begin building a solution specifically for the competition challenge before the challenge is officially released.": "ممنوع البدء ببناء حل مخصص لتحدي المسابقة قبل إطلاق التحدي رسميًا.",
"The competition begins when the official challenge is released.": "المسابقة تبدأ لحظة إطلاق التحدي الرسمي.",
"Pre-Built or Copied Solutions": "الحلول الجاهزة أو المنسوخة",
"Do not submit an existing application, another team's work, or a project substantially created before the competition as your competition solution.": "ممنوع تسليم تطبيق موجود مسبقًا، أو عمل فريق ثاني، أو مشروع أُنجز معظمه قبل المسابقة، كحل للمسابقة.",
"✓ PERMITTED:": "✓ مسموح:",
"Public libraries, frameworks, packages, documentation, and normal development resources are not considered pre-built solutions and may be used.": "المكتبات وأطر العمل والحزم والتوثيق وموارد التطوير الاعتيادية ما تُعتبر حلولًا جاهزة، ويجوز استخدامها.",
"Ignoring the Change Requirement": "تجاهل متطلب التغيير",
"Do not ignore the additional requirement introduced during the competition. Teams must adapt their existing application to satisfy the updated requirements.": "ممنوع تجاهل المتطلب الإضافي اللي ينزل أثناء المسابقة. على الفرق تعديل تطبيقها الحالي لتلبية المتطلبات المحدّثة.",
"CHANGE_DETECTED": "رُصد_تغيير",
"Interfering with Other Teams": "التشويش على الفرق الأخرى",
"Do not access, modify, sabotage, disrupt, or intentionally interfere with another team's:": "ممنوع الوصول إلى ما يلي لفريق آخر أو تعديله أو تخريبه أو تعطيله أو التشويش عليه عمدًا:",
"- application": "- التطبيق",
"- repository": "- المستودع",
"- accounts": "- الحسابات",
"- files": "- الملفات",
"- dev env": "- بيئة التطوير",
"Unauthorized Credentials or Secrets": "بيانات الدخول أو الأسرار غير المصرّح بها",
"Do not use another team's credentials, API keys, tokens, accounts, or private resources.": "ممنوع استخدام بيانات دخول أو مفاتيح API أو توكنات أو حسابات أو موارد خاصة تعود لفريق آخر.",
"Do not intentionally obtain or misuse private credentials belonging to another participant or team.": "ممنوع الحصول عمدًا على بيانات دخول خاصة بمشارك أو فريق آخر أو إساءة استخدامها.",
"False Representation": "التمثيل الكاذب",
"Do not intentionally misrepresent what your team built, who contributed, when work was completed, or whether functionality actually works.": "ممنوع التضليل المتعمد بخصوص ما بناه فريقك، أو من ساهم، أو متى أُنجز العمل، أو هل الوظائف تشتغل فعلًا.",
"Teams should present their project accurately.": "على الفرق عرض مشاريعها بدقة.",
"Working After the Deadline": "الشغل بعد الموعد النهائي",
"Do not modify the judged submission after the official submission deadline unless organizers explicitly authorize it.": "ممنوع تعديل التسليم المُحكَّم بعد الموعد النهائي الرسمي إلا بإذن صريح من المنظمين.",
"The submitted version at the deadline is the version that will be evaluated.": "النسخة المسلّمة عند الموعد النهائي هي النسخة اللي راح تُقيَّم.",
"SUBMISSION_STATUS: LOCKED": "حالة_التسليم: مقفلة",
"submission window closed": "نافذة التسليم مقفلة",
"push rejected by jam_server": "رُفض الرفع من jam_server",
"Rule Evasion": "التحايل على القوانين",
"Do not intentionally exploit ambiguities, loopholes, or technicalities in the rules to gain an unfair advantage.": "ممنوع استغلال الغموض أو الثغرات أو التفاصيل الشكلية في القوانين للحصول على أفضلية غير عادلة.",
"If you are unsure whether something is permitted, ask an organizer before doing it.": "إذا ما كنت متأكد إن شيئًا مسموح، اسأل أحد المنظمين قبل ما تسويه.",
"Primary Directive": "التوجيه الأساسي",
"When in": "إذا",
"doubt:": "شكيت:",
"ASK.": "اسأل.",
"AI is part of the jam.": "الذكاء الاصطناعي جزء من الجام.",
"Pay-to-win isn't.": "أما الدفع للفوز فلا.",
"RULE_01 VISUALIZATION": "توضيح القانون_01",
"FREE": "مجاني",
"Example:": "مثال:",
"ChatGPT Free ✓": "ChatGPT Free ✓",
"STANDARD PAID": "مدفوع اعتيادي",
"ChatGPT Plus ✓": "ChatGPT Plus ✓",
"HIGHEST / ADVANCED": "الأعلى / المتقدم",
"NOT ALLOWED": "غير مسموح",
"ChatGPT Pro ✕": "ChatGPT Pro ✕",
"\"The same principle applies to equivalent plans from other AI providers.\"": "«نفس المبدأ ينطبق على الخطط المكافئة من بقية مزوّدي الذكاء الاصطناعي.»",
"NOT SURE?": "مو متأكد؟",
"\"Can AI write my entire website?\"": "«يقدر الذكاء الاصطناعي يكتب موقعي كامل؟»",
"YES.": "نعم.",
"\"Can I use ChatGPT Plus?\"": "«أقدر أستخدم ChatGPT Plus؟»",
"\"Can I use ChatGPT Pro?\"": "«أقدر أستخدم ChatGPT Pro؟»",
"NO.": "لا.",
"\"Can my teammate help me debug?\"": "«يقدر زميلي في الفريق يساعدني في تصحيح الأخطاء؟»",
"\"Can my friend who isn't on my team help me debug?\"": "«يقدر صديقي اللي مو في فريقي يساعدني في تصحيح الأخطاء؟»",
"\"Can I use public libraries and frameworks?\"": "«أقدر أستخدم المكتبات وأطر العمل العامة؟»",
"\"Can another team send me their solution?\"": "«يقدر فريق ثاني يرسل لي حله؟»",
"\"Can I ignore the surprise requirement?\"": "«أقدر أتجاهل المتطلب المفاجئ؟»",
"When in doubt, ask.": "إذا شكيت، اسأل.",
"If a situation is unclear, ask an organizer before proceeding. Organizers may clarify the rules when necessary to maintain a fair competition.": "إذا كان الوضع غير واضح، اسأل أحد المنظمين قبل ما تكمل. وللمنظمين توضيح القوانين عند الحاجة للحفاظ على عدالة المسابقة.",
"> loading JAM.26 rules...": "> تحميل قوانين JAM.26...",
"] AI policy": "] سياسة الذكاء الاصطناعي",
"] team policy": "] سياسة الفرق",
"] submission policy": "] سياسة التسليم",
"] fair play": "] اللعب النظيف",
"11 / 11 RULES LOADED": "11 / 11 قانونًا تم تحميلها",
"STATUS: READY": "الحالة: جاهز",
"RULES LOADED": "القوانين محمّلة",
"Know the boundaries.": "اعرف الحدود.",
"Then go build.": "وبعدها ابنِ.",
"VIEW COMPETITION": "شوف المسابقة",
/* ---- team-formation.html ---- */
"Assemble Your": "جهّز",
"Squad": "فريقك",
"> Initializing collaborative workspace... Awaiting metadata.": "> تجهيز مساحة العمل المشتركة... بانتظار البيانات.",
"01 // Full Name": "01 // الاسم الكامل",
"02 // University ID": "02 // الرقم الجامعي",
"03 // University Email": "03 // الإيميل الجامعي",
"04 // Phone Number": "04 // رقم الجوال",
"05 // Team Name": "05 // اسم الفريق",
"06 // Team Members (Emails)": "06 // أعضاء الفريق (الإيميلات)",
"Press Enter or comma after each address. Leave empty if you are registering alone.": "اضغط Enter أو فاصلة بعد كل عنوان. اتركه فارغًا إذا كنت تسجّل بمفردك.",
"Team Registered": "تم تسجيل الفريق",
"> Your registration has been recorded. Check your email for confirmation from the organizers.": "> تم تسجيل طلبك. تابع إيميلك للتأكيد من المنظمين.",
"BACK TO JAM.26": "الرجوع إلى JAM.26",
"INITIATE FORMATION": "أنشئ الفريق",
"CANCEL": "إلغاء",
"System Online": "النظام يشتغل",
"Ready for Deployment": "جاهز للنشر",
"Form Teams Wisely": "كوّن فريقك بحكمة",
"e.g. NULL_POINTERS": "مثال: NULL_POINTERS",
"Type email and press enter...": "اكتب الإيميل واضغط Enter...",
"e.g. Shoug Alomran": "مثال: شوق العمران",
"e.g. 202012345": "مثال: 202012345",
"e.g. 05XXXXXXXX": "مثال: 05XXXXXXXX",

/* ---- team.html ---- */
"/TEAM": "/الفريق",
"MEET THE": "تعرّف على",
"PEOPLE BEHIND": "الناس ورا",
"JAM.26 is organized by students who want to create opportunities to learn, build, experiment, and solve problems together.": "JAM.26 ينظّمه طلاب يبون يصنعون فرصًا للتعلّم والبناء والتجريب وحل المشكلات مع بعض.",
"PROJECT:": "المشروع:",
"ORGANIZATION:": "الجهة:",
"ACTIVE": "نشط",
"DIRECTORY_STRUCTURE": "هيكل_المجلدات",
"organizers/": "المنظمون/",
"core_team": "الفريق_الأساسي",
"design": "التصميم",
"instructors/": "المدربون/",
"01 / ACM": "01 / ACM",
"PART OF A GLOBAL COMPUTING COMMUNITY": "جزء من مجتمع حوسبة عالمي",
"LEARN ABOUT ACM": "تعرّف على ACM",
"The Association for Computing Machinery (ACM) is a global computing organization that brings together students, educators, researchers, and professionals across computing.": "جمعية مكائن الحوسبة (ACM) منظمة حوسبة عالمية تجمع الطلاب والمعلمين والباحثين والمختصين في مجالات الحوسبة.",
"Our ACM Club brings that spirit into our university community through technical workshops, competitions, collaborative projects, and peer learning.": "ونادي ACM عندنا ينقل هالروح لمجتمع جامعتنا عبر ورش تقنية ومسابقات ومشاريع مشتركة وتعلّم بين الأقران.",
"GLOBAL": "عالمي",
"LOCAL": "محلي",
"UNIVERSITY": "الجامعة",
"COMMUNITY": "المجتمع",
"STUDENT": "طلابي",
"PROJECT": "مشروع",
"02 / WHY": "02 / ليه",
"WHY PROGRAMMING JAM?": "ليه جام البرمجة؟",
"Modern development is changing. AI can help developers plan, generate code, investigate bugs, and solve problems. JAM.26 gives students a place to learn how to work with these tools while developing the skills that matter: understanding problems, making decisions, debugging, adapting, and shipping something that works.": "التطوير الحديث يتغيّر. الذكاء الاصطناعي يقدر يساعد المطورين في التخطيط وتوليد الكود وتقصّي الأخطاء وحل المشكلات. و JAM.26 يعطي الطلاب مكانًا يتعلمون فيه كيف يشتغلون مع هالأدوات، وهم يطوّرون المهارات اللي تفرق فعلًا: فهم المشكلة، اتخاذ القرار، تصحيح الأخطاء، التكيّف، وإطلاق شي شغّال.",
"AI CAN WRITE THE CODE.": "الذكاء الاصطناعي يقدر يكتب الكود.",
"YOU STILL HAVE TO BUILD THE SOLUTION.": "لكن يبقى عليك أنت بناء الحل.",
"LEARN": "تعلّم",
"Practical AI-assisted workflows and methodologies.": "سير عمل ومنهجيات عملية بمساعدة الذكاء الاصطناعي.",
"Turn raw ideas into functioning applications.": "حوّل الأفكار الخام إلى تطبيقات شغّالة.",
"SOLVE": "حُل",
"Work through real architectural and logical problems.": "اشتغل على مشاكل حقيقية في البنية والمنطق البرمجي.",
"ADAPT": "تكيّف",
"Respond to changing requirements and unexpected bugs.": "استجب للمتطلبات المتغيرة والأخطاء المفاجئة.",
"Take something from abstract concept to production reality.": "خُذ الفكرة المجردة وحوّلها إلى منتج على أرض الواقع.",
"03 / ORGANIZERS": "03 / المنظمون",
"THE TEAM BEHIND THE JAM": "الفريق اللي ورا الجام",
"[ TOTAL_COUNT: 06 ]": "[ العدد_الإجمالي: 06 ]",
"NAME:": "الاسم:",
"[TBD]": "[يُعلن لاحقًا]",
"ROLE:": "الدور:",
"TEAM:": "الفريق:",
"04 / INSTRUCTORS": "04 / المدربون",
"THE PEOPLE HELPING YOU PREPARE": "الناس اللي بيجهّزونك",
"The preparation workshops are led by members helping participants understand the workflow before competition day.": "الورش التحضيرية يقودها أعضاء يساعدون المشاركين على فهم سير العمل قبل يوم المسابقة.",
"DAY_01": "اليوم_01",
"DAY_02": "اليوم_02",
"DAY_03": "اليوم_03",
"Planning & Development Workflow": "التخطيط وسير عمل التطوير",
"INSTRUCTOR": "مدرّب",
"VIEW WORKSHOP →": "شوف الورشة ←",
"Full-Stack Development & Debugging": "التطوير المتكامل وتصحيح الأخطاء",
"05 / BUILT": "05 / بُني",
"BUILT TOGETHER": "بنيناه سوا",
"Every workshop, challenge, design decision, and event detail is the result of students contributing their time and skills. JAM.26 is an open-source mindset applied to an event.": "كل ورشة وتحدٍ وقرار تصميم وتفصيلة في الحدث نتيجة طلاب قدّموا وقتهم ومهاراتهم. JAM.26 عقلية مفتوحة المصدر مطبّقة على حدث.",
"commit 001": "commit 001",
"Planning": "التخطيط",
"Workshop Development": "إعداد الورش",
"Website Design": "تصميم الموقع",
"Competition Design": "تصميم المسابقة",
"Event Preparation": "تجهيز الحدث",
"Still Building": "لسه نبني",
"06 / ACM_CLUB": "06 / نادي_ACM",
"JAM.26 IS ONE PROJECT.": "JAM.26 مشروع واحد.",
"THERE'S MORE TO BUILD.": "وفيه أكثر نبنيه.",
"The ACM Club works on technical activities beyond the Programming Jam. We organize programming events, CTFs, hackathons, technical workshops, collaborative projects, talks, and community gatherings throughout the year.": "نادي ACM يشتغل على أنشطة تقنية أبعد من جام البرمجة. ننظّم فعاليات برمجية، ومسابقات CTF، وهاكاثونات، وورشًا تقنية، ومشاريع مشتركة، ولقاءات ومحاضرات على مدار السنة.",
"Whether you want to build, compete, organize, teach, or learn, there are different ways to contribute.": "سواء تبي تبني أو تنافس أو تنظّم أو تعلّم أو تتعلّم، فيه طرق كثيرة تساهم فيها.",
"interests": "الاهتمامات",
"COMPETE": "نافس",
"TEACH": "علّم",
"ORGANIZE": "نظّم",
"READY": "جاهز",
"JOIN ACM CLUB": "انضم لنادي ACM",
"[LINK TBD]": "[الرابط لاحقًا]",
"NEED TO REACH THE TEAM?": "تبي توصل للفريق؟",
"For questions about JAM.26, registration, workshops, or the competition, contact the organizing team.": "لأي استفسار عن JAM.26 أو التسجيل أو الورش أو المسابقة، تواصل مع الفريق المنظّم.",
"EMAIL": "الإيميل",
"SOCIAL": "التواصل الاجتماعي",
"organizers ✓": "المنظمون ✓",
"instructors ✓": "المدربون ✓",
"participants ...": "المشاركون ...",
"WAITING FOR YOU": "بانتظارك",
"WE BUILT THE JAM.": "إحنا بنينا الجام.",
"NOW COME BUILD WITH US.": "الحين تعال ابنِ معنا.",
"EXPLORE WORKSHOPS →": "استكشف الورش ←",
/* ---- workshops.html ---- */
"Learn the workflow.": "تعلّم سير العمل.",
"Then build for real.": "وبعدها ابنِ على الحقيقي.",
"Three workshop days designed to take you from an idea to a working web application — with AI as part of your engineering workflow.": "ثلاثة أيام ورش تاخذك من فكرة إلى تطبيق ويب شغّال — والذكاء الاصطناعي جزء من سير عملك الهندسي.",
"initializing training sequence...": "بدء تسلسل التدريب...",
"3 modules detected": "تم رصد 3 وحدات",
"final destination: programming_jam": "الوجهة النهائية: جام_البرمجة",
"Planning &": "التخطيط",
"Development Workflow": "وسير عمل التطوير",
"Understand requirements & constraints": "افهم المتطلبات والقيود",
"Break a project into features": "قسّم المشروع إلى ميزات",
"Plan application structure": "خطّط هيكل التطبيق",
"Think about frontend/backend responsibilities": "فكّر في مسؤوليات الواجهة الأمامية والخلفية",
"Use AI strategically in planning": "استخدم الذكاء الاصطناعي باستراتيجية في التخطيط",
"JAM_PROJECT - Editor": "مشروع_الجام - المحرر",
"# requirements.md": "# requirements.md",
"## Core Objective": "## الهدف الأساسي",
"Build a scalable web application that allows users to...": "ابنِ تطبيق ويب قابل للتوسّع يسمح للمستخدمين بـ...",
"## Features": "## الميزات",
"- [x] User Authentication": "- [x] تسجيل دخول المستخدمين",
"- [ ] Real-time Dashboard": "- [ ] لوحة تحكم لحظية",
"- [ ] Data Visualization Widget": "- [ ] عنصر لعرض البيانات بصريًا",
"STATUS: FOUNDATION_READY": "الحالة: الأساس_جاهز",
"EXPLORE DAY_01": "استكشف اليوم_01",
"System Architecture & Server": "بنية النظام والخادم",
"frontend": "الواجهة الأمامية",
"backend": "الواجهة الخلفية",
"> starting development server...": "> تشغيل خادم التطوير...",
"✓ frontend ready on port 3000": "✓ الواجهة الأمامية جاهزة على المنفذ 3000",
"✓ API connected": "✓ تم الاتصال بالـ API",
"✕ error detected: connection refused (db:5432)": "✕ خطأ: رُفض الاتصال (db:5432)",
"> debugging initialized via AI assistant...": "> بدء التصحيح عبر مساعد الذكاء الاصطناعي...",
"✓ resolved: database credentials updated": "✓ تم الحل: تحديث بيانات دخول قاعدة البيانات",
"STATUS: SYSTEM_RUNNING": "الحالة: النظام_يشتغل",
"EXPLORE DAY_02": "استكشف اليوم_02",
"Turning the plan into a working application and learning how to diagnose problems when things break.": "تحويل الخطة إلى تطبيق شغّال، وتعلّم كيف تشخّص المشاكل لما تخرب الأمور.",
"Work with application state and data": "اشتغل على حالة التطبيق وبياناته",
"Understand errors and debug systematically": "افهم الأخطاء وصحّحها بمنهجية",
"Use AI to investigate, not just rewrite": "استخدم الذكاء الاصطناعي للتقصّي، مو بس لإعادة الكتابة",
"The final preparation stage. Take the application from localhost to a real production URL, point a domain at it, make it discoverable, and measure it.": "مرحلة التحضير الأخيرة. خُذ التطبيق من localhost إلى رابط إنتاج حقيقي، اربطه بنطاق، خلّه قابلًا للاكتشاف، وقِس أداءه.",
"MODULE_FOCUS:": "تركيز_الوحدة:",
"Deploy → Domain → Index → Measure.": "انشر ← اربط النطاق ← فهرِس ← قِس.",
"// Session times to be announced.": "// مواعيد الجلسات تُعلن لاحقًا.",
"Deployment Readiness Tracker": "متتبّع الجاهزية للنشر",
"Core Features": "الميزات الأساسية",
"PASS": "ناجح",
"Error Handling": "معالجة الأخطاء",
"UI Polish": "تحسين الواجهة",
"IN_PROGRESS": "قيد_التنفيذ",
"STATUS: JAM_READY": "الحالة: جاهز_للجام",
"EXPLORE DAY_03": "استكشف اليوم_03",
"How They Connect": "كيف ترتبط ببعض",
"Hover over the execution path to inspect stage capabilities.": "مرّر المؤشر على مسار التنفيذ لاستعراض قدرات كل مرحلة.",
"Gain the capability to dissect a problem and architect a robust solution before writing a single line of code.": "اكتسب القدرة على تفكيك المشكلة وتصميم حل متين قبل ما تكتب سطر كود واحد.",
"+ DEBUG": "+ التصحيح",
"Connect the pieces. Build the logic, manage state, and deploy systematic debugging techniques when issues arise.": "اربط الأجزاء ببعض. ابنِ المنطق، أدر الحالة، واستخدم تقنيات تصحيح منهجية لما تطلع المشاكل.",
"REFINE": "حسّن",
"Ship it. Deploy with Vercel, configure DNS with Cloudflare, submit to search engines, and measure with PageSpeed Insights.": "أطلقه. انشر عبر Vercel، اضبط DNS في Cloudflare، أرسله لمحركات البحث، وقِسه بـ PageSpeed Insights.",
"PROGRAMMING JAM": "جام البرمجة",
"Put it all together in a high-stakes environment. Build a working product from scratch without the tutorial wheels.": "اجمع كل شي مع بعض في بيئة ضغط حقيقية. ابنِ منتجًا شغّالًا من الصفر بدون عجلات مساعدة.",
"Not just three workshops.": "مو مجرد ثلاث ورش.",
"A Development Workflow.": "سير عمل تطوير كامل.",
"Plan": "خطّط",
"Turn requirements into an actionable development strategy.": "حوّل المتطلبات إلى استراتيجية تطوير قابلة للتنفيذ.",
"Translate that plan into a working web application.": "ترجم الخطة إلى تطبيق ويب شغّال.",
"Debug": "صحّح",
"Investigate problems systematically instead of guessing.": "حقّق في المشاكل بمنهجية بدل التخمين.",
"Ship": "أطلق",
"Finish and present something that actually works.": "أنهِ واعرض شيئًا يشتغل فعلًا.",
"./run_training_sequence.sh": "./run_training_sequence.sh",
"DAY_01 — COMPLETE": "اليوم_01 — مكتمل",
"DAY_02 — COMPLETE": "اليوم_02 — مكتمل",
"DAY_03 — COMPLETE": "اليوم_03 — مكتمل",
"BUILD STATUS:": "حالة البناء:",
"TEAM STATUS:": "حالة الفريق:",
"JAM STATUS: WAITING...": "حالة الجام: بالانتظار...",
"You've learned the workflow.": "تعلّمت سير العمل.",
"Now build without the tutorial.": "الحين ابنِ بدون شرح.",
"Enter the Competition": "ادخل المسابقة",
"View the Challenge": "شوف التحدي",
/* ---- workshop-day-01.html ---- */
"← ALL WORKSHOPS": "← كل الورش",
"Turning a problem into a structured development plan before writing code.": "تحويل المشكلة إلى خطة تطوير منظّمة قبل كتابة أي كود.",
"Day 01 is about understanding the system before asking AI to build it. You will read a set of requirements, work out how the application should behave, and produce a plan you can actually build against.": "اليوم 01 عن فهم النظام قبل ما تطلب من الذكاء الاصطناعي يبنيه. راح تقرأ مجموعة متطلبات، وتحدد كيف المفروض يتصرف التطبيق، وتطلع بخطة تقدر تبني عليها فعليًا.",
"What you will learn": "وش راح تتعلم",
"Understand and translate requirements into functionality": "فهم المتطلبات وترجمتها إلى وظائف",
"Plan how application components interact": "التخطيط لكيفية تفاعل مكونات التطبيق",
"Break a project into features and responsibilities": "تقسيم المشروع إلى ميزات ومسؤوليات",
"Design an effective user interface and user flow": "تصميم واجهة ومسار مستخدم فعّال",
"Decide what belongs on the frontend and what belongs on the backend": "تحديد ما يخص الواجهة الأمامية وما يخص الخلفية",
"Use AI strategically during planning, not just during coding": "استخدام الذكاء الاصطناعي باستراتيجية في التخطيط، مو بس في كتابة الكود",
"STAGE 01": "المرحلة 01",
"Understand the Requirements": "افهم المتطلبات",
"Before development begins, your team identifies what is actually being asked for.": "قبل ما يبدأ التطوير، فريقك يحدد وش المطلوب فعليًا.",
"Who will use the application": "مين بيستخدم التطبيق",
"What users need to accomplish": "وش يحتاج المستخدمون ينجزون",
"What information must be stored": "وش المعلومات اللي لازم تُخزَّن",
"What actions users can perform": "وش الإجراءات اللي يقدر يسويها المستخدم",
"How the different parts of the application should interact": "كيف المفروض تتفاعل أجزاء التطبيق مع بعض",
"The goal is to understand the system before asking AI to build it.": "الهدف إنك تفهم النظام قبل ما تطلب من الذكاء الاصطناعي يبنيه.",
"STAGE 02": "المرحلة 02",
"Plan with Excalidraw": "خطّط باستخدام Excalidraw",
"Create a simple functional diagram showing how the application works. This is a practical guide, not formal architecture documentation.": "ارسم مخططًا وظيفيًا بسيطًا يوضح كيف يشتغل التطبيق. هذا دليل عملي، مو توثيق معماري رسمي.",
"Main pages": "الصفحات الرئيسية",
"User actions": "إجراءات المستخدم",
"Navigation": "التنقل",
"Authentication": "تسجيل الدخول",
"Data storage": "تخزين البيانات",
"Important connections between components": "الروابط المهمة بين المكونات",
"User → Sign In → Application → User Action → Firebase → Stored Data": "المستخدم ← تسجيل الدخول ← التطبيق ← إجراء المستخدم ← Firebase ← بيانات مخزّنة",
"You should be able to answer: when a user performs an action, what happens next?": "لازم تقدر تجاوب: لما المستخدم يسوي إجراء، وش يصير بعدها؟",
"STAGE 03": "المرحلة 03",
"Design with Variant": "صمّم باستخدام Variant",
"Explore the visual design and user experience of your application.": "استكشف التصميم البصري وتجربة المستخدم في تطبيقك.",
"Layout": "التخطيط البصري",
"Responsiveness": "التجاوب مع الشاشات",
"Consistency": "التناسق",
"Accessibility": "إتاحة الوصول",
"Usability": "سهولة الاستخدام",
"Excalidraw = How it works": "Excalidraw = كيف يشتغل",
"Variant = How it looks and feels": "Variant = كيف يبان وكيف يحس فيه المستخدم",
"Tools used on this day": "الأدوات المستخدمة في هذا اليوم",
"// KEY PRINCIPLE": "// المبدأ الأساسي",
"Understand the system before you ask AI to build it.": "افهم النظام قبل ما تطلب من الذكاء الاصطناعي يبنيه.",
"DAY_02 →": "اليوم_02 ←",
"← DAY_01": "← اليوم_01",
"DAY_03 →": "اليوم_03 ←",
"← DAY_02": "← اليوم_02",
"COMPETITION DAY →": "يوم المسابقة ←",

/* ---- workshop-day-02.html ---- */
"Turning the plan into a working application, and diagnosing problems when things break.": "تحويل الخطة إلى تطبيق شغّال، وتشخيص المشاكل لما تخرب الأمور.",
"Day 02 moves from plan to product. You work in a real codebase, use AI assistants as engineering tools, connect authentication and persistent data, and learn to investigate failures instead of regenerating code until something works.": "اليوم 02 ينقلك من الخطة إلى المنتج. بتشتغل على كود حقيقي، وتستخدم مساعدات الذكاء الاصطناعي كأدوات هندسية، وتربط تسجيل الدخول وتخزين البيانات، وتتعلم تحقق في الأعطال بدل ما تعيد توليد الكود لين يشتغل بالصدفة.",
"Work with a real codebase in Visual Studio Code": "الشغل على كود حقيقي في Visual Studio Code",
"Use AI coding assistants effectively": "استخدام مساعدات البرمجة بالذكاء الاصطناعي بفعالية",
"Connect frontend and backend logic": "ربط منطق الواجهة الأمامية بالخلفية",
"Implement and consume APIs": "بناء واستهلاك واجهات API",
"Implement user authentication and persistent data": "تنفيذ تسجيل دخول المستخدمين وتخزين البيانات",
"Debug errors and evaluate AI-generated solutions": "تصحيح الأخطاء وتقييم حلول الذكاء الاصطناعي",
"Use Git and GitHub throughout development": "استخدام Git و GitHub طوال التطوير",
"STAGE 04": "المرحلة 04",
"Build in Visual Studio Code": "ابنِ في Visual Studio Code",
"Visual Studio Code is the primary development environment. You work directly with your application code.": "Visual Studio Code هو بيئة التطوير الأساسية. راح تشتغل مباشرة على كود تطبيقك.",
"Project files and folders": "ملفات المشروع ومجلداته",
"Source code": "الكود المصدري",
"Dependencies": "الاعتماديات",
"The terminal": "الطرفية",
"Running the application locally": "تشغيل التطبيق محليًا",
"Testing changes": "اختبار التعديلات",
"Reading errors": "قراءة رسائل الأخطاء",
"Troubleshooting problems": "معالجة المشاكل",
"STAGE 05": "المرحلة 05",
"Develop with Codex and Claude Code": "طوّر مع Codex و Claude Code",
"AI assistants act as engineering partners — for generating code, implementing features, explaining code, debugging, refactoring, reviewing implementations, and investigating technical problems.": "مساعدات الذكاء الاصطناعي تشتغل كشركاء هندسيين — لتوليد الكود، وتنفيذ الميزات، وشرح الكود، وتصحيح الأخطاء، وإعادة الهيكلة، ومراجعة التنفيذ، والتحقيق في المشاكل التقنية.",
"Describe the task → Generate or modify code → Review → Run → Test → Debug → Verify": "اوصف المهمة ← ولّد أو عدّل الكود ← راجع ← شغّل ← اختبر ← صحّح ← تأكد",
"Optional advanced activity": "نشاط متقدم اختياري",
"AI Workflow Automation with Hooks": "أتمتة سير العمل بالذكاء الاصطناعي عبر Hooks",
"An optional advanced activity. Rather than implementing hooks immediately, ask your AI assistant to analyse how you have been working and suggest useful automation — then evaluate the recommendations and implement selectively.": "نشاط متقدم اختياري. بدل ما تنفّذ الـ hooks على طول، اطلب من مساعدك الذكي يحلل طريقة شغلك ويقترح أتمتة مفيدة — ثم قيّم الاقتراحات ونفّذ اللي يستاهل.",
"Use AI → Identify repetitive work → Automate useful tasks → Improve the workflow": "استخدم الذكاء الاصطناعي ← حدّد الشغل المتكرر ← أتمت المهام المفيدة ← حسّن سير العمل",
"AI-generated code should never be assumed to be correct without testing.": "لا تفترض أبدًا إن الكود المولّد بالذكاء الاصطناعي صحيح بدون اختبار.",
"STAGE 06": "المرحلة 06",
"Authentication and Data with Firebase": "تسجيل الدخول والبيانات مع Firebase",
"Firebase introduces two core application concepts: who the user is, and what the application remembers.": "Firebase يقدّم مفهومين أساسيين في التطبيق: مين المستخدم، ووش اللي يتذكره التطبيق.",
"Sign up": "إنشاء حساب",
"Sign in": "تسجيل الدخول",
"Sign out": "تسجيل الخروج",
"User-specific access": "صلاحيات خاصة بكل مستخدم",
"Persistent Data": "البيانات المخزّنة",
"Store information": "تخزين المعلومات",
"Retrieve information": "استرجاع المعلومات",
"Update information": "تحديث المعلومات",
"Associate information with a specific user": "ربط المعلومات بمستخدم معيّن",
"Frontend ↔ Application Logic ↔ Authentication ↔ Database": "الواجهة الأمامية ↔ منطق التطبيق ↔ تسجيل الدخول ↔ قاعدة البيانات",
"STAGE 07": "المرحلة 07",
"Version Control with GitHub": "إدارة الإصدارات عبر GitHub",
"Use GitHub throughout development rather than uploading your code only at the end. Your repository should show the progression of the project.": "استخدم GitHub طوال التطوير بدل ما ترفع الكود في آخر لحظة. المستودع لازم يوضح تطوّر المشروع خطوة بخطوة.",
"Repositories": "المستودعات",
"Commits": "الـ Commits",
"Push and pull": "الرفع والسحب",
"Version history": "سجل الإصدارات",
"Collaboration": "التعاون",
"Basic project documentation": "توثيق أساسي للمشروع",
"/DEBUGGING": "/تصحيح الأخطاء",
"When something fails, ask:": "لما يخرب شي، اسأل:",
"What exactly is failing?": "وش اللي خربان بالضبط؟",
"Can the problem be reproduced?": "هل تقدر تعيد إنتاج المشكلة؟",
"What does the error message say?": "وش تقول رسالة الخطأ؟",
"Where is the likely source?": "وين المصدر المحتمل؟",
"What changed before the error appeared?": "وش تغيّر قبل ما يظهر الخطأ؟",
"What solution should be tested?": "وش الحل اللي المفروض نجربه؟",
"Did the solution actually fix the issue?": "هل الحل فعلًا صلّح المشكلة؟",
"Browser DevTools": "أدوات المطوّر في المتصفح",
"Investigate problems systematically instead of regenerating code until something works.": "حقّق في المشاكل بمنهجية بدل ما تعيد توليد الكود لين يشتغل بالصدفة.",

/* ---- workshop-day-03.html ---- */
"Deployment, Domains & Production Readiness": "النشر والنطاقات والجاهزية للإنتاج",
"Taking the application from localhost to a real production URL — and proving it holds up.": "نقل التطبيق من localhost إلى رابط إنتاج حقيقي — وإثبات إنه يصمد.",
"Day 03 covers everything between “it works on my machine” and “it works in production”: deploying, pointing a real domain at it, making it discoverable, and measuring it.": "اليوم 03 يغطي كل شي بين «يشتغل على جهازي» و«يشتغل في الإنتاج»: النشر، وربط نطاق حقيقي، وجعله قابلًا للاكتشاف، وقياس أدائه.",
"Deploy a production application": "نشر تطبيق في بيئة الإنتاج",
"Configure domains and DNS": "ضبط النطاقات و DNS",
"Prepare a website for search-engine discovery": "تجهيز الموقع لمحركات البحث",
"Measure and improve website performance": "قياس أداء الموقع وتحسينه",
"Explain and demonstrate a technical solution": "شرح الحل التقني وعرضه",
"STAGE 08": "المرحلة 08",
"Deploy with Vercel": "انشر عبر Vercel",
"Deploy your application so it is publicly accessible. The final application must be reachable during judging.": "انشر تطبيقك بحيث يكون متاحًا للجميع. ولازم التطبيق النهائي يكون قابلًا للوصول وقت التحكيم.",
"VS Code → GitHub → Vercel → Live Website": "VS Code ← GitHub ← Vercel ← موقع مباشر",
"STAGE 09": "المرحلة 09",
"Configure the Domain with Cloudflare": "اضبط النطاق عبر Cloudflare",
"Connect your deployed application to a domain or subdomain, and see how a name becomes an address.": "اربط تطبيقك المنشور بنطاق أو نطاق فرعي، وشوف كيف يتحوّل الاسم إلى عنوان.",
"Domains": "النطاقات",
"DNS records": "سجلات DNS",
"Subdomains": "النطاقات الفرعية",
"Routing a domain to a hosted application": "توجيه النطاق إلى تطبيق مستضاف",
"DISCOVERY": "الاكتشاف",
"Google and Bing Indexing": "الفهرسة في Google و Bing",
"Once the site is deployed, learn how search engines discover and index a website using Google Search Console and Bing Webmaster Tools.": "بعد نشر الموقع، تعلّم كيف تكتشف محركات البحث الموقع وتفهرسه باستخدام Google Search Console و Bing Webmaster Tools.",
"Site verification": "توثيق ملكية الموقع",
"Sitemaps": "خرائط الموقع",
"URL inspection": "فحص الروابط",
"Page titles": "عناوين الصفحات",
"Meta descriptions": "أوصاف الميتا",
"Basic technical SEO": "أساسيات السيو التقني",
"You are not judged on whether the site actually appears in search results — indexing time is controlled by the search engines. You are judged on whether it was properly prepared and submitted.": "ما راح تُقيَّم على ظهور موقعك فعليًا في نتائج البحث — وقت الفهرسة تحدده محركات البحث. التقييم على تجهيز الموقع وإرساله بشكل صحيح.",
"MEASURE": "القياس",
"Google PageSpeed Insights": "Google PageSpeed Insights",
"Evaluate the deployed application, investigate what the report flags, improve what is worth improving, and test again.": "قيّم التطبيق المنشور، وحقّق في الملاحظات اللي يرفعها التقرير، وحسّن اللي يستاهل، وأعد الاختبار.",
"Performance": "الأداء",
"Best practices": "أفضل الممارسات",
"Mobile experience": "تجربة الجوال",
"Core Web Vitals": "مؤشرات Core Web Vitals",
"Measure → Investigate → Improve → Measure Again": "قِس ← حقّق ← حسّن ← قِس مرة ثانية",
"The objective is not a perfect score. The objective is the loop.": "الهدف مو الدرجة الكاملة. الهدف هو الدورة نفسها.",
"A project isn’t finished when it runs. It’s finished when it ships.": "المشروع ما ينتهي لما يشتغل. ينتهي لما يُطلَق.",
/* ---- remaining UI strings ---- */
"> Loading modules...": "> تحميل الوحدات...",
"> Loading requirements...": "> تحميل المتطلبات...",
"> Preparing workshop modules...": "> تجهيز وحدات الورش...",
"DOCS: JAM.26": "التوثيق: JAM.26",
"ERROR:": "خطأ:",
"REGISTER →": "سجّل ←",
"Team_Formation_Protocol.exe": "بروتوكول_تكوين_الفريق.exe",
"Type email and press enter...": "اكتب الإيميل واضغط Enter...",
"Press Enter or comma after each address. At least one member is required.": "اضغط Enter أو فاصلة بعد كل عنوان. مطلوب عضو واحد على الأقل.",
"Team Registered": "تم تسجيل الفريق",
"> Your registration has been recorded. Check your email for confirmation from the organizers.": "> تم تسجيلك. راجع بريدك الإلكتروني لرسالة التأكيد من المنظمين.",
"BACK TO JAM.26": "الرجوع إلى JAM.26",
"++ BUILD TOGETHER ++ JAM.26 ++ ACM CLUB ++ BUILD TOGETHER ++ JAM.26 ++ ACM CLUB ++ BUILD TOGETHER ++ JAM.26 ++ ACM CLUB ++ BUILD TOGETHER ++ JAM.26 ++ ACM CLUB": "++ نبني سوا ++ JAM.26 ++ نادي ACM ++ نبني سوا ++ JAM.26 ++ نادي ACM ++ نبني سوا ++ JAM.26 ++ نادي ACM ++ نبني سوا ++ JAM.26 ++ نادي ACM",
    };

    var STORAGE_KEY = "jam-lang";
    var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
    var ATTRS = ["placeholder", "aria-label", "title", "alt"];

    var textNodes = [];   /* [node, originalValue] */
    var attrNodes = [];   /* [element, attr, originalValue] */
    var originalTitle = document.title;
    var current = "en";
    var collected = false;

    function stored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function remember(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
    }

    function translate(value) {
        var trimmed = value.trim();
        if (!trimmed) return null;
        var hit = AR[trimmed];
        if (hit === undefined) return null;
        var lead = value.slice(0, value.indexOf(trimmed[0]));
        var tail = value.slice(lead.length + trimmed.length);
        return lead + hit + tail;
    }

    function collectText(root) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                if (node.parentNode && SKIP_TAGS[node.parentNode.nodeName]) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        var found = [], node;
        while ((node = walker.nextNode())) found.push([node, node.nodeValue]);
        return found;
    }

    function collectAttrs(root) {
        var found = [];
        var all = root.querySelectorAll("[" + ATTRS.join("],[") + "]");
        for (var i = 0; i < all.length; i++) {
            for (var a = 0; a < ATTRS.length; a++) {
                var v = all[i].getAttribute(ATTRS[a]);
                if (v && v.trim()) found.push([all[i], ATTRS[a], v]);
            }
        }
        var meta = document.querySelector('meta[name="description"]');
        if (meta) found.push([meta, "content", meta.getAttribute("content") || ""]);
        return found;
    }

    function collect() {
        if (collected) return;
        textNodes = collectText(document.body);
        attrNodes = collectAttrs(document.body);
        collected = true;
    }

    /* Latin-only fragments we never translate (terminal output, code, file names)
       must keep reading left-to-right inside an RTL page. */
    var LATIN_ONLY = /^[\x20-\x7E]+$/;
    var HAS_LETTER = /[A-Za-z]/;

    function keepLtr(node, on) {
        var el = node.parentElement;
        if (!el) return;
        el.style.unicodeBidi = on ? "plaintext" : "";
    }

    function applyText(lang) {
        for (var i = 0; i < textNodes.length; i++) {
            var node = textNodes[i][0], original = textNodes[i][1];
            if (lang === "ar") {
                var out = translate(original);
                if (out !== null) {
                    node.nodeValue = out;
                } else if (LATIN_ONLY.test(original.trim()) && HAS_LETTER.test(original)) {
                    keepLtr(node, true);
                }
            } else {
                if (node.nodeValue !== original) node.nodeValue = original;
                keepLtr(node, false);
            }
        }
        for (var j = 0; j < attrNodes.length; j++) {
            var el = attrNodes[j][0], attr = attrNodes[j][1], orig = attrNodes[j][2];
            if (lang === "ar") {
                var t = translate(orig);
                if (t !== null) el.setAttribute(attr, t);
            } else {
                el.setAttribute(attr, orig);
            }
        }
        document.title = lang === "ar" ? (AR[originalTitle.trim()] || originalTitle) : originalTitle;
    }

    function ensureArabicFont() {
        if (document.getElementById("jam-ar-font")) return;
        var pre = document.createElement("link");
        pre.rel = "preconnect";
        pre.href = "https://fonts.gstatic.com";
        pre.crossOrigin = "anonymous";
        document.head.appendChild(pre);

        var font = document.createElement("link");
        font.id = "jam-ar-font";
        font.rel = "stylesheet";
        font.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap";
        document.head.appendChild(font);

        var style = document.createElement("style");
        style.textContent = [
            'html[dir="rtl"] body{font-family:"IBM Plex Sans Arabic","Noto Kufi Arabic",system-ui,sans-serif;}',
            'html[dir="rtl"] body *{letter-spacing:normal !important;}',
            'html[dir="rtl"] .font-mono{font-family:"IBM Plex Sans Arabic",ui-monospace,monospace;}',
            'html[dir="rtl"] .text-left{text-align:right;}',
            'html[dir="rtl"] .text-right{text-align:left;}'
        ].join("\n");
        document.head.appendChild(style);
    }

    function setLang(lang, persist) {
        collect();
        current = lang === "ar" ? "ar" : "en";
        document.documentElement.setAttribute("lang", current === "ar" ? "ar" : "en");
        document.documentElement.setAttribute("dir", current === "ar" ? "rtl" : "ltr");
        if (current === "ar") ensureArabicFont();
        applyText(current);
        updateToggle();
        if (persist) remember(current);
    }

    function updateToggle() {
        var buttons = document.querySelectorAll("[data-jam-lang]");
        for (var i = 0; i < buttons.length; i++) {
            var on = buttons[i].getAttribute("data-jam-lang") === current;
            buttons[i].setAttribute("aria-pressed", String(on));
            buttons[i].style.background = on ? "#6C4DFF" : "transparent";
            buttons[i].style.color = on ? "#FFFFFF" : "#111111";
        }
    }

    function buildToggle() {
        var wrap = document.createElement("div");
        wrap.className = "jam-lang-toggle";
        wrap.setAttribute("role", "group");
        wrap.setAttribute("aria-label", "Language / اللغة");
        wrap.style.cssText = "display:inline-flex;border:3px solid #111111;font-family:ui-monospace,monospace;" +
            "font-weight:700;font-size:12px;line-height:1;background:#FFFFFF;overflow:hidden;flex-shrink:0;";
        ["en", "ar"].forEach(function (lang, index) {
            var b = document.createElement("button");
            b.type = "button";
            b.textContent = lang === "en" ? "EN" : "ع";
            b.setAttribute("data-jam-lang", lang);
            b.style.cssText = "padding:8px 10px;border:0;cursor:pointer;background:transparent;color:#111111;" +
                (index ? "border-right:3px solid #111111;" : "");
            b.addEventListener("click", function () { setLang(lang, true); });
            wrap.appendChild(b);
        });
        return wrap;
    }

    function mountToggle() {
        var nav = document.querySelector("nav");
        var host = nav && (nav.querySelector(".flex.items-center.gap-3") || nav.querySelector(".max-w-7xl"));
        var toggle = buildToggle();
        if (host) {
            if (host.classList.contains("gap-3")) {
                host.insertBefore(toggle, host.firstChild);
            } else {
                toggle.style.marginInlineStart = "auto";
                host.appendChild(toggle);
            }
        } else {
            toggle.style.cssText += "position:fixed;bottom:16px;inset-inline-end:16px;z-index:60;" +
                "box-shadow:4px 4px 0 0 #111111;";
            document.body.appendChild(toggle);
        }
    }

    function watchDynamicNodes() {
        if (!window.MutationObserver) return;
        new MutationObserver(function (records) {
            if (current !== "ar") return;
            records.forEach(function (record) {
                for (var i = 0; i < record.addedNodes.length; i++) {
                    var added = record.addedNodes[i];
                    if (added.nodeType === 3) {
                        var out = translate(added.nodeValue || "");
                        if (out !== null) added.nodeValue = out;
                    } else if (added.nodeType === 1 && !SKIP_TAGS[added.nodeName]) {
                        collectText(added).forEach(function (pair) {
                            var t = translate(pair[1]);
                            if (t !== null) pair[0].nodeValue = t;
                        });
                    }
                }
            });
        }).observe(document.body, { childList: true, subtree: true });
    }

    function init() {
        collect();
        mountToggle();
        setLang(stored() === "ar" ? "ar" : "en", false);
        watchDynamicNodes();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.jamSetLanguage = function (lang) { setLang(lang, true); };
})();
