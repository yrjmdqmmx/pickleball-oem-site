/* Static bilingual copy. Keep the English fallback in index.html in sync
   (node scripts/check.mjs reports any drift). */
const BRAND = { en: "Paddle Match", zh: "一拍即合" };
const CONTACT_EMAIL = "sales@paddlematch.yistar.online";
const MAIN_HOST = "paddlematch.yistar.online";
const INQUIRY_ENDPOINT = "/api/inquiry";
const DEFAULT_LANG = "en";
const LANG_STORAGE_KEY = "site-lang";
const HTML_LANG = { en: "en", zh: "zh-Hans" };

const I18N = {
  "en": {
    "brand": "{brand}",
    "meta.title": "Custom OEM / Private Label T700 Carbon Pickleball Paddles",
    "meta.description": "Custom OEM and private label T700 carbon pickleball paddles, made with our partner factory in Dongguan. MOQ 300 pcs. Samples about 12 days, bulk 35–40 days.",
    "meta.locale": "en_US",
    "meta.alternateLocale": "zh_CN",
    "meta.ogImageAlt": "Paddle Match: OEM / private label T700 carbon pickleball paddles under your brand, next to a factory sample paddle with blue graphics",
    "a11y.skip": "Skip to content",
    "a11y.home": "Home",
    "a11y.primaryNav": "Primary",
    "a11y.language": "Language",
    "a11y.openMenu": "Open menu",
    "a11y.closeMenu": "Close menu",
    "a11y.backToTop": "Back to top",
    "a11y.footerNav": "Footer",
    "nav.video": "Video",
    "nav.why": "Why us",
    "nav.product": "Product",
    "nav.factory": "Factory",
    "nav.process": "OEM process",
    "nav.serve": "Who we serve",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "cta.quote": "Request a Quote",
    "hero.eyebrow": "OEM / Private label · Partner factory in Dongguan",
    "hero.title": "T700 carbon pickleball paddles, built under <span class=\"hl\">your brand.</span>",
    "hero.lead": "Custom and private label paddles with your logo, graphics, colors, grip and packaging, made with our partner factory in Dongguan.",
    "hero.specs": "See the specs",
    "hero.watch": "▶ Watch the 1-min intro",
    "facts.moq": "Minimum order",
    "facts.moqValue": "300 pcs",
    "facts.samples": "Samples",
    "facts.samplesValue": "About 12 days",
    "facts.lead": "Bulk lead time",
    "facts.leadValue": "35–40 days",
    "facts.origin": "Made in",
    "facts.originValue": "Dongguan, China",
    "photo.frontAlt": "Front view of the T700 factory sample paddle with blue graphics and a black grip on a white background",
    "photo.detailAlt": "Close-up of the factory sample carbon fiber face, surface texture and blue graphics",
    "photo.angleAlt": "Angled view of the factory sample paddle showing the face, edge guard and grip",
    "photo.note": "Factory sample shown. Your logo, graphics and colors are fully customizable.",
    "video.eyebrow": "Watch · 1 min",
    "video.title": "Meet Paddle Match in one minute.",
    "video.lead": "Lily walks you through the T700 carbon paddle, what you can customize, and our MOQ, sample and bulk timelines.",
    "video.label": "Paddle Match one-minute introduction video",
    "video.fallback": "Download the Paddle Match video (MP4)",
    "video.caption": "English with captions · 62 s",
    "video.aiNote": "Presented by Lily, an AI-generated presenter. Product photos and factory images are real.",
    "video.prompt": "Ready to talk?",
    "video.transcriptToggle": "Read the transcript",
    "why.eyebrow": "Why us",
    "why.title": "Your partner for custom OEM pickleball paddles.",
    "why.c1.title": "Partner factory in Dongguan",
    "why.c1.body": "Your paddles are made with our partner factory in Dongguan, Guangdong, China, which specializes in carbon fiber pickleball paddles.",
    "why.c2.title": "Private label, your way",
    "why.c2.body": "Make it your own with a custom logo, graphics, colors, grip and packaging.",
    "why.c3.title": "Samples before bulk",
    "why.c3.body": "Order up to 10 samples and check the paddle in hand before you plan a bulk order.",
    "why.c4.title": "One contact, in English",
    "why.c4.body": "We handle specs, samples, artwork checks and shipping coordination with the factory for you.",
    "product.eyebrow": "Product spotlight",
    "product.title": "Custom T700 carbon fiber pickleball paddle",
    "product.lead": "A thermoformed (hot-pressed) unibody paddle with a T700 carbon fiber face and a PP honeycomb core, finished in your brand's design.",
    "spec.productTitle": "Product specs",
    "spec.face": "Face",
    "spec.faceValue": "T700 carbon fiber, 3K or 12K",
    "spec.core": "Core",
    "spec.coreValue": "PP honeycomb",
    "spec.thickness": "Thickness",
    "spec.thicknessValue": "16 mm (≈ 0.63 in) or 14 mm (≈ 0.55 in)",
    "spec.construction": "Construction",
    "spec.constructionValue": "Thermoformed (hot-pressed) unibody",
    "spec.weight": "Weight",
    "spec.weightValue": "About 225–230 g (≈ 7.9–8.1 oz)",
    "spec.size": "Size",
    "spec.sizeValue": "Approx. 398 × 198 mm; customizable",
    "spec.grip": "Grip",
    "spec.gripValue": "PU",
    "spec.edge": "Edge guard",
    "spec.edgeValue": "Standard; printed or electroplated edge guard available at extra cost",
    "spec.logo": "Logo",
    "spec.logoValue": "UV print, up to 2 colors",
    "spec.customization": "Customization",
    "spec.customizationValue": "Logo, graphics, colors, grip, packaging",
    "spec.weaveNote": "3K and 12K describe the visible carbon weave pattern; both use T700 fiber.",
    "spec.moreNote": "Shape, handle length, grip size and surface texture: tell us your target and we'll confirm with the factory.",
    "spec.termsTitle": "Order terms",
    "spec.moq": "MOQ",
    "spec.moqValue": "300 pcs",
    "spec.samplingTime": "Samples",
    "spec.samplingTimeValue": "About 12 days; up to 10 pcs",
    "spec.bulkLeadTime": "Bulk lead time",
    "spec.bulkLeadTimeValue": "35–40 days",
    "spec.packaging": "Packaging",
    "spec.packagingValue": "OPP bag; custom color box available (quoted after design)",
    "spec.packing": "Packing",
    "spec.packingValue": "Up to 20 pcs per carton with color box",
    "spec.terms": "Trade terms",
    "spec.termsValue": "FOB Shenzhen, or CIF / DDP to your port — tell us your destination.",
    "gallery.eyebrow": "Product gallery",
    "gallery.title": "A closer look at the factory sample.",
    "gallery.front": "Front view",
    "gallery.detail": "Carbon face detail",
    "gallery.angle": "Angled view",
    "factory.eyebrow": "Partner factory",
    "factory.title": "Inside our partner factory.",
    "factory.note": "Photos of our partner factory in Dongguan.",
    "factory.workshop": "Workshop floor",
    "factory.workshopAlt": "Long workshop floor with a row of printing stations and operators at work",
    "factory.printing": "UV printing on paddle faces",
    "factory.printingAlt": "Row of black paddle blanks lined up on the bed of a flatbed UV printer",
    "factory.pressing": "Hot-press molding line",
    "factory.pressingAlt": "Line of green hot-press machines with a worker handling molds",
    "factory.finishing": "Finishing and assembly",
    "factory.finishingAlt": "Workers at finishing tables surrounded by stacked paddles and blue crates",
    "factory.testing": "Testing equipment",
    "factory.testingAlt": "Two testing machines standing side by side in a test room",
    "factory.samples": "Paddle samples",
    "factory.samplesAlt": "Wall display with three rows of black paddle samples",
    "factory.packing": "Packed cartons ready to ship",
    "factory.packingAlt": "Stacks of sealed brown shipping cartons in a warehouse",
    "process.eyebrow": "OEM process",
    "process.title": "How a private label paddle order works, in six steps.",
    "process.s1.title": "Inquiry",
    "process.s1.body": "Send your quantity, destination and customization ideas.",
    "process.s2.title": "Confirm specs & artwork",
    "process.s2.body": "We confirm your target specs, check your logo and artwork files, and send a quote.",
    "process.s3.title": "Samples",
    "process.s3.body": "Order samples to test the paddle yourself: about 12 days, up to 10 pcs.",
    "process.s4.title": "Order confirmation & deposit",
    "process.s4.body": "Confirm the order and pay the deposit. Payment terms are confirmed in your quote.",
    "process.s5.title": "Production & quality checks",
    "process.s5.body": "The partner factory produces and checks your order. Bulk lead time is 35–40 days.",
    "process.s6.title": "Balance & shipping",
    "process.s6.body": "Pay the balance and we coordinate shipping on the trade terms in your quote.",
    "serve.eyebrow": "Who we serve",
    "serve.title": "Built for buyers who put their own name on the paddle.",
    "serve.c1.title": "Brands",
    "serve.c1.body": "Create a paddle line with your own logo, graphics, colors, grip and packaging on a T700 thermoformed paddle.",
    "serve.c2.title": "Clubs & academies",
    "serve.c2.body": "Club-branded paddles for members, coaching programs and pro shops.",
    "serve.c3.title": "Distributors",
    "serve.c3.body": "Private label paddles for your market, shipped on the trade terms that suit your destination.",
    "serve.c4.title": "Online retailers",
    "serve.c4.body": "Build your own paddle range with custom branding and packaging.",
    "about.eyebrow": "About",
    "about.title": "About Paddle Match",
    "about.p1": "Paddle Match is an export team, not a factory. We work with a partner factory in Dongguan, Guangdong, China, that makes our carbon fiber pickleball paddles.",
    "about.weTitle": "What we handle",
    "about.weBody": "Communication in English, specs, samples, artwork checks and shipping coordination.",
    "about.factoryTitle": "What the factory handles",
    "about.factoryBody": "Production.",
    "about.company": "Paddle Match is operated by <span lang=\"zh-Hans\">宁波义星互联网零售有限公司</span>, a company registered in Ningbo, Zhejiang, China.",
    "faq.eyebrow": "FAQ",
    "faq.title": "OEM pickleball paddle questions buyers ask first.",
    "faq.more": "Something else on your mind? <a href=\"#quote\">Ask us in the quote form.</a>",
    "faq.q1": "What is the minimum order quantity (MOQ)?",
    "faq.a1": "The MOQ for bulk orders is 300 pcs.",
    "faq.q2": "Can I order fewer than 300 pcs?",
    "faq.a2": "Not as a bulk order. You can order samples first: up to 10 pcs, in about 12 days. Bulk orders start at 300 pcs.",
    "faq.q3": "What can I customize?",
    "faq.a3": "Logo, graphics, colors, grip and packaging. Logos are UV printed in up to 2 colors. The standard edge guard can be upgraded to a printed or electroplated one at extra cost. Standard packaging is an OPP bag; a custom color box is quoted after design. Size can also be customized: share your requirements in the inquiry.",
    "faq.q4": "Can I test a sample before placing a bulk order?",
    "faq.a4": "Yes. Samples take about 12 days, up to 10 pcs.",
    "faq.q5": "What artwork files do you need?",
    "faq.a5": "AI, PDF, PNG or SVG. Mention your artwork in the inquiry and we'll reply with an address to send files.",
    "faq.q7": "Which shipping terms and ports do you offer?",
    "faq.a7": "FOB Shenzhen, or CIF / DDP to your port — tell us your destination.",
    "faq.q8": "What is the lead time?",
    "faq.a8": "Bulk lead time is 35–40 days. Include your target delivery date and destination in the inquiry so we can confirm shipping arrangements.",
    "faq.q9": "Is a 14 mm thickness option available?",
    "faq.a9": "Yes. Both 16 mm (≈ 0.63 in) and 14 mm (≈ 0.55 in) are available, each with a PP honeycomb core.",
    "faq.q10": "What is the difference between 3K and 12K?",
    "faq.a10": "3K and 12K describe the visible carbon weave pattern; both use T700 fiber.",
    "faq.q11": "Is Paddle Match the factory?",
    "faq.a11": "No. Paddle Match is an export team that works with a partner factory in Dongguan, Guangdong, China. We handle communication in English, specs, samples, artwork checks and shipping coordination; the factory handles production.",
    "quote.eyebrow": "Request a quote",
    "quote.title": "Request a quote for your custom paddles.",
    "quote.lead": "Share a few details and we'll reply by email with a quote and next steps.",
    "quote.listTitle": "Helpful to include",
    "quote.li1": "Target quantity",
    "quote.li2": "Customization: logo, graphics, colors, grip, packaging",
    "quote.li3": "Destination country or port",
    "quote.li4": "Target delivery date",
    "quote.preferEmail": "Prefer email?",
    "form.name": "Name",
    "form.namePlaceholder": "Your name",
    "form.email": "Email",
    "form.emailPlaceholder": "Your email address",
    "form.company": "Company",
    "form.companyPlaceholder": "Company name",
    "form.country": "Country",
    "form.countryPlaceholder": "Destination country",
    "form.qty": "Quantity",
    "form.qty.placeholder": "Select a quantity",
    "form.qty.samples": "Samples first (up to 10 pcs)",
    "form.qty.o300": "300–499 pcs",
    "form.qty.o500": "500–999 pcs",
    "form.qty.o1000": "1,000–2,999 pcs",
    "form.qty.o3000": "3,000+ pcs",
    "form.qty.unsure": "Not sure yet",
    "form.face": "Carbon face <span class=\"label-hint\">(optional)</span>",
    "form.thickness": "Thickness <span class=\"label-hint\">(optional)</span>",
    "form.terms": "Trade terms <span class=\"label-hint\">(optional)</span>",
    "form.unsure": "Not sure",
    "form.message": "Message",
    "form.messagePlaceholder": "Customization, timeline, questions…",
    "form.artworkHint": "Have artwork or a logo? Mention it here and we'll reply with an address to send files (AI, PDF, PNG or SVG).",
    "form.honeypot": "Leave this field empty",
    "form.submit": "Send inquiry",
    "form.sending": "Sending…",
    "form.replyPromise": "We reply within 1 business day (Mon–Fri, China time, UTC+8).",
    "form.submitHint": "JavaScript is off: sending opens your email app with your details. Nothing is sent until you press send there.",
    "form.privacy": "We use your details only to answer this inquiry. We don't share them or add you to mailing lists.",
    "form.required": "Please complete this field.",
    "form.invalidEmail": "Please enter a valid email address.",
    "form.selectQty": "Please choose a quantity.",
    "form.error": "Sorry, we couldn't send your inquiry from this page. Your details are in the email draft below: open it and press send, or email us directly.",
    "form.manualCopy": "Request text for manual copying",
    "form.openDraft": "Open email draft",
    "form.copy": "Copy request text",
    "form.copied": "Copied",
    "form.copyFailed": "Copy failed. Select and copy manually",
    "next.title": "What happens next",
    "next.s1": "We confirm your specs and send a quote.",
    "next.s2": "We propose a sample plan.",
    "next.s3": "We check your artwork and logo files.",
    "success.title": "Inquiry received. Thank you!",
    "success.more": "Something to add?",
    "mail.subject": "Quote request: T700 pickleball paddle – {company}",
    "mail.heading": "Quote request — T700 carbon fiber pickleball paddle",
    "mail.name": "Name: {value}",
    "mail.email": "Email: {value}",
    "mail.company": "Company: {value}",
    "mail.country": "Country: {value}",
    "mail.qty": "Quantity: {value}",
    "mail.face": "Carbon face: {value}",
    "mail.thickness": "Thickness: {value}",
    "mail.terms": "Trade terms: {value}",
    "mail.message": "Message:",
    "mail.none": "(none)",
    "footer.tagline": "Paddle Match OEM: custom and private label T700 carbon fiber pickleball paddles, made with our partner factory in Dongguan, China.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.address": "Partner factory: Dongguan, Guangdong, China",
    "footer.rights": ". All rights reserved.",
    "footer.legal": "Operated by <span lang=\"zh-Hans\">宁波义星互联网零售有限公司</span> (Ningbo, China) · USCC 91330212MAK5HGAJ3C",
    "language.en": "EN",
    "language.zh": "中文",
    "video.trackEn": "English",
    "video.trackZh": "中文",
    "video.transcriptLang": "en",
    "form.face3k": "3K",
    "form.face12k": "12K",
    "form.thickness16": "16 mm",
    "form.thickness14": "14 mm",
    "form.termsFob": "FOB",
    "form.termsCif": "CIF",
    "form.termsDdp": "DDP",
    "form.tooLong": "Please shorten this entry to the allowed length.",
    "form.invalidChoice": "Please choose one of the listed options.",
    "video.transcript1": "Hi, I’m Lily from Paddle Match. We make carbon fiber pickleball paddles under your brand. Meet our T700 carbon paddle.",
    "video.transcript2": "The face is T700 carbon fiber, in 3K or 12K weave, hot-pressed as a one-piece unibody for a solid, consistent feel. Inside is a PP honeycomb core, 16 or 14 millimeters thick, at about 225 to 230 grams, with a standard edge guard.",
    "video.transcript3": "Everything can carry your brand: logo, graphics, colors, grip and packaging. Orders start at 300 pieces. Samples take about 12 days, up to 10 pieces, and bulk production takes 35 to 40 days.",
    "video.transcript4": "Send us your design and target specs, and we’ll get back to you with a quote."
  },
  "zh": {
    "brand": "{brand}",
    "meta.title": "T700 碳纤维匹克球拍 OEM / 贴牌定制 | {brand}",
    "meta.description": "T700 碳纤维匹克球拍 OEM / 贴牌定制，由东莞合作工厂生产。起订量 300 支，打样约 12 天，大货交期 35–40 天。",
    "meta.locale": "zh_CN",
    "meta.alternateLocale": "en_US",
    "meta.ogImageAlt": "Paddle Match：以您的品牌定制 T700 碳纤维匹克球拍（OEM / 贴牌），右侧为带蓝色图案的工厂样品球拍",
    "a11y.skip": "跳至正文",
    "a11y.home": "首页",
    "a11y.primaryNav": "主导航",
    "a11y.language": "语言",
    "a11y.openMenu": "打开菜单",
    "a11y.closeMenu": "关闭菜单",
    "a11y.backToTop": "返回顶部",
    "a11y.footerNav": "页脚导航",
    "nav.video": "视频",
    "nav.why": "合作优势",
    "nav.product": "产品",
    "nav.factory": "工厂",
    "nav.process": "OEM 流程",
    "nav.serve": "服务对象",
    "nav.about": "关于我们",
    "nav.faq": "常见问题",
    "cta.quote": "获取报价",
    "hero.eyebrow": "OEM / 贴牌定制 · 东莞合作工厂",
    "hero.title": "T700 碳纤维匹克球拍，<span class=\"hl\">专为您的品牌打造</span>。",
    "hero.lead": "贴牌定制球拍：品牌标识、图案、颜色、握把及包装均可定制，由我们在东莞的合作工厂生产。",
    "hero.specs": "查看规格",
    "hero.watch": "▶ 观看 1 分钟介绍",
    "facts.moq": "起订量",
    "facts.moqValue": "300 支",
    "facts.samples": "打样",
    "facts.samplesValue": "约 12 天",
    "facts.lead": "大货交期",
    "facts.leadValue": "35–40 天",
    "facts.origin": "产地",
    "facts.originValue": "中国东莞",
    "photo.frontAlt": "白色背景下的 T700 工厂样品球拍正面，带蓝色图案和黑色握把",
    "photo.detailAlt": "工厂样品碳纤维拍面特写，展示表面纹理及蓝色图案",
    "photo.angleAlt": "工厂样品球拍斜角实拍，展示拍面、护边和握把",
    "photo.note": "图中为工厂样品。您的品牌标识、图案和颜色均可按需定制。",
    "video.eyebrow": "视频 · 1 分钟",
    "video.title": "一分钟认识 Paddle Match。",
    "video.lead": "Lily 为您介绍 T700 碳纤维球拍、可定制内容，以及起订量、打样和大货周期。",
    "video.label": "Paddle Match 一分钟介绍视频",
    "video.fallback": "下载 Paddle Match 视频（MP4）",
    "video.caption": "英文讲解，含字幕 · 62 秒",
    "video.aiNote": "主持人 Lily 为 AI 生成形象。产品照片与工厂照片均为实拍。",
    "video.prompt": "想进一步沟通？",
    "video.transcriptToggle": "查看文字稿",
    "why.eyebrow": "合作优势",
    "why.title": "您的 OEM 匹克球拍定制合作伙伴。",
    "why.c1.title": "东莞合作工厂",
    "why.c1.body": "球拍由我们在中国广东省东莞市的合作工厂生产，该工厂专注碳纤维匹克球拍。",
    "why.c2.title": "按您的品牌贴牌定制",
    "why.c2.body": "从品牌标识、拍面图案和颜色，到握把及包装，按您的品牌需求定制。",
    "why.c3.title": "先打样，再下大货",
    "why.c3.body": "可先订最多 10 支样品，拿到实物确认后再规划大货订单。",
    "why.c4.title": "一个对接窗口，英文沟通",
    "why.c4.body": "规格确认、打样、稿件检查和发运协调，都由我们与工厂对接。",
    "product.eyebrow": "主推产品",
    "product.title": "可定制 T700 碳纤维匹克球拍",
    "product.lead": "热压一体成型球拍，T700 碳纤维拍面，PP（聚丙烯）蜂窝芯材，按您的品牌设计完成外观。",
    "spec.productTitle": "产品规格",
    "spec.face": "拍面",
    "spec.faceValue": "T700 碳纤维，3K 或 12K 可选",
    "spec.core": "芯材",
    "spec.coreValue": "PP（聚丙烯）蜂窝芯",
    "spec.thickness": "厚度",
    "spec.thicknessValue": "16 mm（≈ 0.63 英寸）或 14 mm（≈ 0.55 英寸）",
    "spec.construction": "工艺",
    "spec.constructionValue": "热压一体成型",
    "spec.weight": "重量",
    "spec.weightValue": "约 225–230 g（≈ 7.9–8.1 盎司）",
    "spec.size": "尺寸",
    "spec.sizeValue": "约 398 × 198 毫米；可定制",
    "spec.grip": "握把",
    "spec.gripValue": "PU",
    "spec.edge": "护边",
    "spec.edgeValue": "标准护边；印刷或电镀护边可选，需另收费",
    "spec.logo": "品牌标识",
    "spec.logoValue": "UV 印刷，最多 2 色",
    "spec.customization": "定制项目",
    "spec.customizationValue": "品牌标识、图案、颜色、握把、包装",
    "spec.weaveNote": "3K 和 12K 指拍面可见的碳纤维编织纹路，两者均采用 T700 碳纤维。",
    "spec.moreNote": "拍型、手柄长度、握把尺寸和表面纹理：请告诉我们您的目标，我们会与工厂确认。",
    "spec.termsTitle": "订单条款",
    "spec.moq": "起订量",
    "spec.moqValue": "300 支",
    "spec.samplingTime": "打样",
    "spec.samplingTimeValue": "约 12 天；最多 10 支",
    "spec.bulkLeadTime": "大货交期",
    "spec.bulkLeadTimeValue": "35–40 天",
    "spec.packaging": "包装",
    "spec.packagingValue": "OPP 袋；可定制彩盒（设计后另行报价）",
    "spec.packing": "装箱",
    "spec.packingValue": "含彩盒每箱最多 20 支",
    "spec.terms": "贸易条款",
    "spec.termsValue": "FOB 深圳，或 CIF / DDP 至您的港口——请告知目的地。",
    "gallery.eyebrow": "产品实拍",
    "gallery.title": "近距离了解工厂样品。",
    "gallery.front": "正面外观",
    "gallery.detail": "碳纤维拍面细节",
    "gallery.angle": "斜角外观",
    "factory.eyebrow": "合作工厂",
    "factory.title": "走进我们的合作工厂。",
    "factory.note": "以下为东莞合作工厂的实拍照片。",
    "factory.workshop": "车间一览",
    "factory.workshopAlt": "狭长的车间内，一排印刷工位和正在操作的工人",
    "factory.printing": "拍面 UV 印刷",
    "factory.printingAlt": "平板 UV 打印机台面上整齐排列的一排黑色球拍坯",
    "factory.pressing": "热压成型产线",
    "factory.pressingAlt": "一排绿色热压机，一名工人正在处理模具",
    "factory.finishing": "后道加工与组装",
    "factory.finishingAlt": "工人在后道工作台前作业，周围堆放着球拍和蓝色周转箱",
    "factory.testing": "检测设备",
    "factory.testingAlt": "检测室内并排摆放的两台检测设备",
    "factory.samples": "球拍样品",
    "factory.samplesAlt": "墙面展示架上陈列的三排黑色球拍样品",
    "factory.packing": "装箱待发",
    "factory.packingAlt": "仓库中堆叠的已封箱棕色纸箱",
    "process.eyebrow": "OEM 流程",
    "process.title": "贴牌球拍订单的六个步骤。",
    "process.s1.title": "询盘",
    "process.s1.body": "告诉我们数量、目的地和定制想法。",
    "process.s2.title": "确认规格与稿件",
    "process.s2.body": "我们确认目标规格，检查您的标识和设计稿件，并发送报价。",
    "process.s3.title": "打样",
    "process.s3.body": "可订样品亲自试打：约 12 天，最多 10 支。",
    "process.s4.title": "确认订单并支付定金",
    "process.s4.body": "确认订单并支付定金。付款条款在报价中确认。",
    "process.s5.title": "生产与质量检查",
    "process.s5.body": "合作工厂生产并检查您的订单。大货交期 35–40 天。",
    "process.s6.title": "支付尾款并发货",
    "process.s6.body": "支付尾款后，我们按报价中的贸易条款协调发运。",
    "serve.eyebrow": "服务对象",
    "serve.title": "专为打造自有品牌球拍的买家服务。",
    "serve.c1.title": "品牌方",
    "serve.c1.body": "以 T700 热压一体成型球拍为基础，定制品牌标识、图案、颜色、握把和包装，打造自有产品线。",
    "serve.c2.title": "俱乐部与培训机构",
    "serve.c2.body": "为会员、教学课程和球馆专卖店定制俱乐部专属球拍。",
    "serve.c3.title": "经销商",
    "serve.c3.body": "为您的市场提供贴牌球拍，并按适合目的地的贸易条款发运。",
    "serve.c4.title": "电商卖家",
    "serve.c4.body": "通过品牌标识与包装定制，打造自有球拍产品。",
    "about.eyebrow": "关于我们",
    "about.title": "关于 Paddle Match",
    "about.p1": "Paddle Match 是一支外贸团队，而非工厂。我们与中国广东省东莞市的一家合作工厂合作，由该工厂生产碳纤维匹克球拍。",
    "about.weTitle": "我们负责",
    "about.weBody": "英文沟通、规格确认、打样、稿件检查和发运协调。",
    "about.factoryTitle": "工厂负责",
    "about.factoryBody": "生产。",
    "about.company": "Paddle Match 的运营主体为<span lang=\"zh-Hans\">宁波义星互联网零售有限公司</span>，注册地为中国浙江省宁波市。",
    "faq.eyebrow": "常见问题",
    "faq.title": "OEM 匹克球拍买家最关心的问题。",
    "faq.more": "还有其他疑问？<a href=\"#quote\">欢迎在报价表单中留言。</a>",
    "faq.q1": "起订量（MOQ）是多少？",
    "faq.a1": "大货订单起订量为 300 支。",
    "faq.q2": "可以订少于 300 支吗？",
    "faq.a2": "大货订单不可以。您可以先订样品：最多 10 支，约 12 天。大货订单 300 支起订。",
    "faq.q3": "哪些部分可以定制？",
    "faq.a3": "品牌标识、图案、颜色、握把及包装均可定制。品牌标识采用 UV 印刷，最多 2 色。标准护边可升级为印刷或电镀护边，需另收费。标准包装为 OPP 袋；定制彩盒在设计后另行报价。尺寸也可定制，请在询盘中注明您的要求。",
    "faq.q4": "下批量订单前可以先试样吗？",
    "faq.a4": "可以。打样约 12 天，最多 10 支。",
    "faq.q5": "需要提供什么格式的设计稿件？",
    "faq.a5": "AI、PDF、PNG 或 SVG 均可。请在询盘中说明您有稿件，我们会回复接收文件的地址。",
    "faq.q7": "支持哪些贸易条款和港口？",
    "faq.a7": "FOB 深圳，或 CIF / DDP 至您的港口——请告知目的地。",
    "faq.q8": "交期多长？",
    "faq.a8": "大货交期 35–40 天。请在询盘中注明期望交付日期及目的地，以便确认运输安排。",
    "faq.q9": "可以选择 14 mm 厚度吗？",
    "faq.a9": "可以。16 mm（≈ 0.63 英寸）和 14 mm（≈ 0.55 英寸）两种厚度均可选，均采用 PP（聚丙烯）蜂窝芯材。",
    "faq.q10": "3K 和 12K 有什么区别？",
    "faq.a10": "3K 和 12K 指拍面可见的碳纤维编织纹路，两者均采用 T700 碳纤维。",
    "faq.q11": "Paddle Match 是工厂吗？",
    "faq.a11": "不是。Paddle Match 是一支外贸团队，与中国广东省东莞市的一家合作工厂合作。我们负责英文沟通、规格确认、打样、稿件检查和发运协调；工厂负责生产。",
    "quote.eyebrow": "获取报价",
    "quote.title": "为您的定制球拍获取报价。",
    "quote.lead": "留下几项基本信息，我们会通过邮件回复报价和后续步骤。",
    "quote.listTitle": "建议提供的信息",
    "quote.li1": "目标数量",
    "quote.li2": "定制需求：品牌标识、图案、颜色、握把、包装",
    "quote.li3": "目的国家或港口",
    "quote.li4": "期望交付日期",
    "quote.preferEmail": "更习惯发邮件？",
    "form.name": "姓名",
    "form.namePlaceholder": "请输入姓名",
    "form.email": "邮箱",
    "form.emailPlaceholder": "请输入电子邮箱",
    "form.company": "公司",
    "form.companyPlaceholder": "请输入公司名称",
    "form.country": "国家",
    "form.countryPlaceholder": "请输入目的国家",
    "form.qty": "数量",
    "form.qty.placeholder": "请选择数量",
    "form.qty.samples": "先打样（最多 10 支）",
    "form.qty.o300": "300–499 支",
    "form.qty.o500": "500–999 支",
    "form.qty.o1000": "1,000–2,999 支",
    "form.qty.o3000": "3,000 支以上",
    "form.qty.unsure": "暂未确定",
    "form.face": "碳纤维拍面<span class=\"label-hint\">（选填）</span>",
    "form.thickness": "厚度<span class=\"label-hint\">（选填）</span>",
    "form.terms": "贸易条款<span class=\"label-hint\">（选填）</span>",
    "form.unsure": "暂未确定",
    "form.message": "留言",
    "form.messagePlaceholder": "定制需求、时间安排、其他问题……",
    "form.artworkHint": "有设计稿或品牌标识？请在此说明，我们会回复接收文件的地址（AI、PDF、PNG 或 SVG）。",
    "form.honeypot": "此项请留空",
    "form.submit": "发送询盘",
    "form.sending": "发送中……",
    "form.replyPromise": "我们会在 1 个工作日内回复（周一至周五，北京时间，UTC+8）。",
    "form.submitHint": "当前未启用 JavaScript：提交后将打开您的邮件应用并带上所填内容；在您于邮件应用中点击发送之前，不会发出任何信息。",
    "form.privacy": "您的信息仅用于回复本次询盘。我们不会与他人分享，也不会将您加入邮件列表。",
    "form.required": "请填写此项。",
    "form.invalidEmail": "请输入有效的电子邮箱地址。",
    "form.selectQty": "请选择数量。",
    "form.error": "抱歉，无法从本页面发送您的询盘。您填写的内容已放入下方的邮件草稿：请打开草稿并点击发送，或直接给我们发邮件。",
    "form.manualCopy": "可手动复制的询价内容",
    "form.openDraft": "打开邮件草稿",
    "form.copy": "复制询价内容",
    "form.copied": "已复制",
    "form.copyFailed": "复制失败，请手动选择并复制",
    "next.title": "接下来的步骤",
    "next.s1": "我们确认您的规格并发送报价。",
    "next.s2": "我们提出打样方案。",
    "next.s3": "我们检查您的设计稿和标识文件。",
    "success.title": "询盘已收到，谢谢！",
    "success.more": "还有需要补充的内容？",
    "mail.subject": "询价：T700 匹克球拍 — {company}",
    "mail.heading": "询价 — T700 碳纤维匹克球拍",
    "mail.name": "姓名：{value}",
    "mail.email": "邮箱：{value}",
    "mail.company": "公司：{value}",
    "mail.country": "国家：{value}",
    "mail.qty": "数量：{value}",
    "mail.face": "碳纤维拍面：{value}",
    "mail.thickness": "厚度：{value}",
    "mail.terms": "贸易条款：{value}",
    "mail.message": "留言：",
    "mail.none": "（无）",
    "footer.tagline": "Paddle Match OEM：T700 碳纤维匹克球拍 OEM / 贴牌定制，由中国东莞的合作工厂生产。",
    "footer.explore": "导航",
    "footer.contact": "联系方式",
    "footer.address": "合作工厂：中国广东省东莞市",
    "footer.rights": " 版权所有",
    "footer.legal": "运营主体：<span lang=\"zh-Hans\">宁波义星互联网零售有限公司</span> · 统一社会信用代码 91330212MAK5HGAJ3C",
    "language.en": "EN",
    "language.zh": "中文",
    "video.trackEn": "English",
    "video.trackZh": "中文",
    "video.transcriptLang": "zh-Hans",
    "form.face3k": "3K",
    "form.face12k": "12K",
    "form.thickness16": "16 毫米",
    "form.thickness14": "14 毫米",
    "form.termsFob": "FOB",
    "form.termsCif": "CIF",
    "form.termsDdp": "DDP",
    "form.tooLong": "请将内容缩短至允许的长度。",
    "form.invalidChoice": "请从列表中选择一项。",
    "video.transcript1": "大家好，我是 Paddle Match 的 Lily。我们为您的品牌定制碳纤维匹克球拍。来看看我们的 T700 碳纤维球拍。",
    "video.transcript2": "拍面采用 T700 碳纤维，可选 3K 或 12K 编织纹路，一体热压成型，击球手感扎实、稳定。内芯为 PP 蜂窝芯，厚度为 16 或 14 毫米，重量约 225 至 230 克，配标准护边。",
    "video.transcript3": "所有部分都可按您的品牌定制：品牌标识、图案、颜色、握把和包装。起订量为 300 支。打样约 12 天，最多 10 支，大货生产需要 35 至 40 天。",
    "video.transcript4": "把您的设计和目标规格发给我们，我们会给您报价。"
  }
};

(function () {
  "use strict";

  var root = document.documentElement;
  var currentLang = DEFAULT_LANG;
  var langListeners = [];
  var motionPreference = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  var reduceMotion = !!motionPreference && motionPreference.matches;
  var canObserve = "IntersectionObserver" in window;
  var languageTimer = 0;
  if (motionPreference && motionPreference.addEventListener) {
    motionPreference.addEventListener("change", function (event) { reduceMotion = event.matches; });
  }

  function onMediaChange(query, listener) {
    if (query.addEventListener) query.addEventListener("change", listener);
    else if (query.addListener) query.addListener(listener);
  }

  /* ---------- i18n ---------- */
  function t(key, vars) {
    var table = I18N[currentLang] || I18N[DEFAULT_LANG];
    var text = table[key];
    if (text == null) text = I18N[DEFAULT_LANG][key];
    if (text == null) return key;
    return text.replace(/\{(\w+)\}/g, function (match, name) {
      if (vars && Object.prototype.hasOwnProperty.call(vars, name)) return vars[name];
      if (name === "brand") return BRAND[currentLang];
      if (name === "email") return CONTACT_EMAIL;
      return match;
    });
  }

  function normalizeLang(value) {
    if (!value) return null;
    var v = String(value).toLowerCase();
    if (v === "cn" || v.indexOf("zh") === 0) return "zh";
    if (v.indexOf("en") === 0) return "en";
    return null;
  }

  function langFromUrl() {
    try {
      return normalizeLang(new URLSearchParams(window.location.search).get("lang"));
    } catch (err) {
      return null;
    }
  }

  function storedLang() {
    try {
      return normalizeLang(window.localStorage.getItem(LANG_STORAGE_KEY));
    } catch (err) {
      return null;
    }
  }

  function rememberLang(lang) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (err) {
      /* storage unavailable (private mode, blocked cookies): the choice lasts for this page view */
    }

    // Keep an explicit ?lang= in step with the toggle so a reload doesn't undo the choice.
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", lang);
        window.history.replaceState(window.history.state, "", url.toString());
      }
    } catch (err) {
      /* URL / History API unavailable */
    }
  }

  function applyLanguage(lang) {
    currentLang = I18N[lang] ? lang : DEFAULT_LANG;
    root.setAttribute("lang", HTML_LANG[currentLang] || currentLang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    // Markup strings come only from the dictionary above, never from user input.
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });

    // Keep machine-readable FAQ content aligned with the visible answers.
    var schema = document.getElementById("faq-schema");
    if (schema) {
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: Array.from(document.querySelectorAll(".faq-list details"), function (item) {
          return {
            "@type": "Question",
            name: item.querySelector("summary").textContent,
            acceptedAnswer: { "@type": "Answer", text: item.querySelector("p").textContent }
          };
        })
      });
    }

    langListeners.forEach(function (listener) { listener(); });
  }

  function initLanguage() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang === currentLang) return;
        applyLanguage(lang);
        rememberLang(currentLang);
        if (!reduceMotion) {
          root.classList.remove("lang-changing");
          void root.offsetWidth;
          root.classList.add("lang-changing");
          window.clearTimeout(languageTimer);
          languageTimer = window.setTimeout(function () { root.classList.remove("lang-changing"); }, 220);
        }
      });
    });

    applyLanguage(langFromUrl() || storedLang() || DEFAULT_LANG);
  }

  /* ---------- Contact and year ---------- */
  function applyConstants() {
    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.textContent = CONTACT_EMAIL;
      el.setAttribute("href", "mailto:" + CONTACT_EMAIL);
    });
    var formEl = document.getElementById("quote-form");
    if (formEl) formEl.setAttribute("action", "mailto:" + CONTACT_EMAIL);
    var draftLink = document.getElementById("form-mailto-link");
    if (draftLink) draftLink.setAttribute("href", "mailto:" + CONTACT_EMAIL);

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mirror and analytics ---------- */
  // The GitHub Pages mirror must stay out of search indexes (see also the inline script in <head>).
  function guardMirror() {
    if (!/(^|\.)github\.io$/.test(window.location.hostname)) return;
    document.querySelectorAll('meta[name="robots"]').forEach(function (meta) {
      meta.setAttribute("content", "noindex, follow");
    });
  }

  // Cloudflare Web Analytics: loaded only when a token is set in
  // <meta name="cf-beacon-token"> and only on the main domain. Nothing else is tracked.
  function initAnalytics() {
    var meta = document.querySelector('meta[name="cf-beacon-token"]');
    var token = meta ? (meta.getAttribute("content") || "").trim() : "";
    if (!token || window.location.hostname !== MAIN_HOST) return;
    var beacon = document.createElement("script");
    beacon.defer = true;
    beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
    beacon.setAttribute("data-cf-beacon", JSON.stringify({ token: token }));
    document.head.appendChild(beacon);
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var header = document.getElementById("site-header");
    var toggle = header && header.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("data-i18n-attr", "aria-label:" + (open ? "a11y.closeMenu" : "a11y.openMenu"));
      toggle.setAttribute("aria-label", t(open ? "a11y.closeMenu" : "a11y.openMenu"));
    }

    langListeners.push(function () {
      setOpen(header.classList.contains("is-open"));
    });

    toggle.addEventListener("click", function () {
      setOpen(!header.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (header.classList.contains("is-open") && !header.contains(event.target)) {
        setOpen(false);
      }
    });
  }

  /* ---------- Header shadow once the page is scrolled ---------- */
  function initHeaderShadow() {
    var header = document.getElementById("site-header");
    if (!header) return;
    var ticking = false;

    function update() {
      ticking = false;
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  /* ---------- Phone-only sticky quote button ----------
     Shown on small screens (CSS), hidden while the hero buttons or the quote
     section are on screen so it never duplicates or covers them. */
  function initStickyCta() {
    var bar = document.getElementById("sticky-cta");
    if (!bar) return;
    if (!canObserve) {
      bar.hidden = false;
      return;
    }
    var targets = [document.querySelector(".hero-actions"), document.getElementById("quote")]
      .filter(Boolean);
    if (!targets.length) return;
    var onScreen = targets.map(function () { return false; });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        onScreen[targets.indexOf(entry.target)] = entry.isIntersecting;
      });
      bar.classList.toggle("is-hidden", onScreen.indexOf(true) !== -1);
    });

    bar.classList.add("is-hidden");
    bar.hidden = false;
    targets.forEach(function (target) { observer.observe(target); });
  }

  /* ---------- Order terms: collapsible on phones, always open on larger screens ---------- */
  function initTermsDetails() {
    var details = document.getElementById("terms-details");
    var summary = details && details.querySelector("summary");
    if (!details || !summary || !window.matchMedia) return;
    var phone = window.matchMedia("(max-width: 620px)");

    function sync() {
      details.open = !phone.matches;
      if (phone.matches) summary.removeAttribute("tabindex");
      else summary.setAttribute("tabindex", "-1");
    }

    summary.addEventListener("click", function (event) {
      if (!phone.matches) event.preventDefault();
    });
    onMediaChange(phone, sync);
    sync();
  }

  /* ---------- Video: caption language and end-of-video prompt ---------- */
  function initVideo() {
    var video = document.getElementById("promo-video");
    if (!video) return;
    var cta = document.getElementById("video-cta");
    var prompt = document.getElementById("video-prompt");

    function setEnded(ended) {
      if (cta) cta.classList.toggle("is-highlight", ended);
      if (prompt) prompt.hidden = !ended;
    }

    video.addEventListener("ended", function () { setEnded(true); });
    video.addEventListener("play", function () { setEnded(false); });

    // Before playback starts, show the caption track that matches the page language.
    // Once the visitor has pressed play, their own caption choice is left alone.
    langListeners.push(function () {
      var tracks = video.textTracks;
      if (!tracks || (video.played && video.played.length)) return;
      var wanted = currentLang === "zh" ? "zh" : "en";
      var hasWanted = false;
      var i;
      for (i = 0; i < tracks.length; i += 1) {
        if (tracks[i].language === wanted) hasWanted = true;
      }
      if (!hasWanted) return;
      for (i = 0; i < tracks.length; i += 1) {
        tracks[i].mode = tracks[i].language === wanted ? "showing" : "disabled";
      }
    });
  }

  /* ---------- Scroll reveal ----------
     Only elements that start below the fold are hidden, and only once this
     script is running, so content is never stuck invisible. */
  var REVEAL_SELECTOR = [
    ".section-head",
    ".card-grid > li",
    ".video-figure",
    ".product-figure",
    ".product-copy",
    ".gallery-grid",
    ".factory-grid",
    ".steps > li",
    ".serve-grid > li",
    ".about-copy",
    ".faq-list",
    ".quote-copy",
    ".quote-panel",
    ".footer-grid > *"
  ].join(",");

  function initReveal() {
    if (reduceMotion || !canObserve) return;

    function finish(el) {
      el.classList.remove("reveal", "is-in");
      for (var i = 0; i <= 5; i += 1) el.classList.remove("reveal-delay-" + i);
    }

    function show(el, delay) {
      el.classList.add("reveal-delay-" + Math.round(delay / 80));
      el.classList.add("is-in");

      // Drop the reveal classes afterwards so hover transitions behave normally.
      var timer = window.setTimeout(function () { finish(el); }, delay + 1200);
      el.addEventListener("transitionend", function onEnd(event) {
        if (event.target !== el || event.propertyName !== "opacity") return;
        el.removeEventListener("transitionend", onEnd);
        window.clearTimeout(timer);
        finish(el);
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      var order = 0;
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        // Items that arrive together (a row of cards) are staggered.
        show(entry.target, Math.min(order, 5) * 80);
        order += 1;
      });
    }, { rootMargin: "0px 0px -10% 0px" });

    var viewportHeight = window.innerHeight || root.clientHeight;
    document.querySelectorAll(REVEAL_SELECTOR).forEach(function (el) {
      if (el.getBoundingClientRect().top < viewportHeight) return;
      el.classList.add("reveal");
      observer.observe(el);
    });

    // Keyboard focus must never land inside an invisible section.
    document.addEventListener("focusin", function (event) {
      var el = event.target.closest(".reveal");
      if (el) {
        observer.unobserve(el);
        finish(el);
      }
    });

    function updateMotion(event) {
      reduceMotion = event.matches;
      if (!reduceMotion) return;
      observer.disconnect();
      document.querySelectorAll(".reveal").forEach(finish);
    }
    if (motionPreference && motionPreference.addEventListener) {
      motionPreference.addEventListener("change", updateMotion);
    }
  }

  /* ---------- Quote form ----------
     Posts JSON to /api/inquiry. If that fails for any reason (network error,
     non-2xx, endpoint missing on the static mirror), the visitor gets a
     pre-filled email draft instead. Without JavaScript the form's own
     mailto action is the fallback. */
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    // Own validation with inline messages replaces the native bubbles.
    form.noValidate = true;

    var submitBtn = document.getElementById("form-submit");
    var status = document.getElementById("form-status");
    var success = document.getElementById("quote-success");
    var draftLink = document.getElementById("form-mailto-link");
    var copyBtn = document.getElementById("form-copy");
    var manualCopy = document.getElementById("manual-copy");
    var requestText = document.getElementById("request-text");
    var lastBody = "";
    var copyTimer = 0;
    var sending = false;

    var fields = Array.prototype.filter.call(form.elements, function (field) {
      return /^(INPUT|SELECT|TEXTAREA)$/.test(field.tagName) && field.name &&
        field.name !== "website" && !field.readOnly;
    });
    var errorKeys = {};
    var baseDescription = {};
    fields.forEach(function (field) {
      baseDescription[field.name] = field.getAttribute("aria-describedby") || "";
    });

    function value(name) {
      var field = form.elements[name];
      return field ? field.value.trim() : "";
    }

    // Text of the chosen option in the page language (for the email draft).
    function optionText(name) {
      var field = form.elements[name];
      if (!field || !field.value) return "";
      var option = field.options[field.selectedIndex];
      return option ? option.text.trim() : field.value;
    }

    /* --- inline validation --- */
    function errorKeyFor(field) {
      var text = field.value.trim();
      if (field.required && !text) {
        return field.tagName === "SELECT" ? "form.selectQty" : "form.required";
      }
      if (field.type === "email" && text &&
          (!EMAIL_PATTERN.test(text) || field.validity.typeMismatch)) return "form.invalidEmail";
      if (field.maxLength > 0 && text.length > field.maxLength) return "form.tooLong";
      if (field.tagName === "SELECT" && !Array.from(field.options).some(function (option) {
        return option.value === text;
      })) return "form.invalidChoice";
      return "";
    }

    function renderError(field) {
      var key = errorKeys[field.name] || "";
      var errorEl = document.getElementById(field.id + "-error");
      var described = baseDescription[field.name];
      if (errorEl) {
        if (key) errorEl.setAttribute("data-i18n", key);
        errorEl.textContent = key ? t(key) : "";
        errorEl.hidden = !key;
        if (key) described = (errorEl.id + " " + described).trim();
      }
      if (key) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      if (described) field.setAttribute("aria-describedby", described);
      else field.removeAttribute("aria-describedby");
    }

    function validateField(field) {
      errorKeys[field.name] = errorKeyFor(field);
      renderError(field);
      return !errorKeys[field.name];
    }

    /* --- email fallback --- */
    function buildRequest() {
      var company = value("company");
      var lines = [
        t("mail.heading"),
        "",
        t("mail.name", { value: value("name") }),
        t("mail.email", { value: value("email") }),
        t("mail.company", { value: company }),
        t("mail.country", { value: value("country") }),
        t("mail.qty", { value: optionText("quantity") || t("mail.none") }),
        t("mail.face", { value: optionText("face") || t("mail.none") }),
        t("mail.thickness", { value: optionText("thickness") || t("mail.none") }),
        t("mail.terms", { value: optionText("terms") || t("mail.none") }),
        "",
        t("mail.message"),
        value("message") || t("mail.none")
      ];
      return { subject: t("mail.subject", { company: company }), body: lines.join("\r\n") };
    }

    function refreshRequest() {
      var request = buildRequest();
      lastBody = request.subject + "\r\n\r\n" + request.body;
      draftLink.setAttribute(
        "href",
        "mailto:" + CONTACT_EMAIL +
          "?subject=" + encodeURIComponent(request.subject) +
          "&body=" + encodeURIComponent(request.body)
      );
      requestText.value = lastBody;
    }

    /* --- sending --- */
    function setSending(on) {
      sending = on;
      submitBtn.disabled = on;
      submitBtn.setAttribute("data-i18n", on ? "form.sending" : "form.submit");
      submitBtn.textContent = t(on ? "form.sending" : "form.submit");
      if (on) form.setAttribute("aria-busy", "true");
      else form.removeAttribute("aria-busy");
    }

    function payload() {
      return {
        name: value("name"),
        email: value("email"),
        company: value("company"),
        country: value("country"),
        quantity: value("quantity"),
        face: value("face"),
        thickness: value("thickness"),
        terms: value("terms"),
        message: value("message"),
        website: form.elements.website ? form.elements.website.value : "",
        lang: currentLang
      };
    }

    // Resolves to true only for a 2xx response whose JSON body is {"ok": true}.
    function send(data) {
      if (!window.fetch) return { then: function (done) { done(false); } };
      var controller = "AbortController" in window ? new AbortController() : null;
      var timer = controller ? window.setTimeout(function () { controller.abort(); }, 20000) : 0;
      return fetch(INQUIRY_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
        credentials: "same-origin",
        signal: controller ? controller.signal : undefined
      }).then(function (response) {
        if (!response.ok) return false;
        return response.json().then(function (body) { return !!body && body.ok === true; });
      }).catch(function () {
        return false;
      }).then(function (ok) {
        window.clearTimeout(timer);
        return ok;
      });
    }

    function showSuccess() {
      form.hidden = true;
      success.hidden = false;
      success.focus();
    }

    function showFailure() {
      refreshRequest();
      status.hidden = false;
      status.focus();
    }

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        // Don't nag about a required field the visitor has only tabbed through.
        if (field.value.trim() || errorKeys[field.name]) validateField(field);
      });
      function onEdit() {
        if (errorKeys[field.name]) validateField(field);
        if (!status.hidden) refreshRequest();
      }
      field.addEventListener("input", onEdit);
      field.addEventListener("change", onEdit);
    });

    langListeners.push(function () {
      fields.forEach(renderError);
      if (sending) submitBtn.textContent = t("form.sending");
      window.clearTimeout(copyTimer);
      copyBtn.textContent = t("form.copy");
      if (!status.hidden) refreshRequest();
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sending) return;

      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      status.hidden = true;
      setSending(true);
      send(payload()).then(function (ok) {
        setSending(false);
        if (ok) showSuccess();
        else showFailure();
      });
    });

    copyBtn.addEventListener("click", function () {
      refreshRequest();
      function done(ok) {
        manualCopy.hidden = ok;
        if (!ok) {
          requestText.focus();
          requestText.select();
        }
        copyBtn.textContent = t(ok ? "form.copied" : "form.copyFailed");
        window.clearTimeout(copyTimer);
        copyTimer = window.setTimeout(function () {
          copyBtn.textContent = t("form.copy");
        }, 2400);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(lastBody).then(
          function () { done(true); },
          function () { done(legacyCopy(lastBody)); }
        );
      } else {
        done(legacyCopy(lastBody));
      }
    });
  }

  function legacyCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.className = "visually-hidden";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function init() {
    guardMirror();
    applyConstants();
    initNav();
    initVideo();
    initQuoteForm();
    initLanguage();
    root.classList.replace("no-js", "js");
    initTermsDetails();
    initStickyCta();
    initHeaderShadow();
    initReveal();
    initAnalytics();

    // After the load-in, a language switch redraws the headline underline without the intro delay.
    window.setTimeout(function () { root.classList.add("intro-done"); }, 1800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
