/* Static bilingual copy. Keep the English fallback in index.html in sync. */
const BRAND = { en: "Paddle Match", zh: "一拍即合" };
const CONTACT_EMAIL = "yrjmdqmmx@gmail.com";
const DEFAULT_LANG = "en";
const LANG_STORAGE_KEY = "site-lang";
const HTML_LANG = { en: "en", zh: "zh-Hans" };

const I18N = {
  "en": {
    "meta.title": "OEM T700 Carbon Pickleball Paddles, 100 pcs MOQ | {brand}",
    "meta.description": "Paddle Match T700 raw carbon fiber pickleball paddles, thermoformed with a 16mm PP honeycomb core. OEM MOQ 100 pcs; samples available. Contact us for pricing.",
    "a11y.skip": "Skip to content",
    "a11y.home": "Home",
    "a11y.primaryNav": "Primary",
    "a11y.language": "Language",
    "a11y.openMenu": "Open menu",
    "a11y.closeMenu": "Close menu",
    "a11y.backToTop": "Back to top",
    "a11y.footerNav": "Footer",
    "nav.why": "Why us",
    "nav.product": "Product",
    "nav.process": "OEM process",
    "nav.serve": "Who we serve",
    "nav.faq": "FAQ",
    "cta.quote": "Request a Quote",
    "hero.eyebrow": "OEM / Private label · Factory-direct",
    "hero.title": "T700 carbon pickleball paddles, built under <span class=\"hl\">your brand.</span>",
    "hero.lead": "T700 raw carbon fiber, a 16mm PP honeycomb core and a thermoformed unibody. Customize your logo, graphics, colors, grip and packaging. OEM starts at 100 pcs; samples available.",
    "hero.specs": "See the specs",
    "facts.face": "Face",
    "facts.faceValue": "T700 raw carbon",
    "facts.core": "Core",
    "facts.coreValue": "16mm PP honeycomb",
    "facts.moq": "MOQ",
    "facts.moqUnit": "pcs",
    "facts.origin": "Made in",
    "facts.originValue": "Dongguan, China",
    "why.eyebrow": "Why us",
    "why.title": "A short path from factory floor to your shelf.",
    "why.c1.title": "Factory direct",
    "why.c1.body": "Factory in Dongguan, Guangdong, China. Established in 2018, with 200+ staff.",
    "why.c2.title": "Custom OEM",
    "why.c2.body": "Make it your own with custom logo, graphics, colors, grip and packaging.",
    "why.c3.title": "Low MOQ",
    "why.c3.body": "Start from 100 pcs. Test a design or a new market without overcommitting on inventory.",
    "why.c4.title": "Flexible shipping",
    "why.c4.body": "FOB Shenzhen / CIF Rotterdam / DDP on request. Tell us your preferred trade terms.",
    "product.eyebrow": "Product spotlight",
    "product.title": "T700 Carbon Fiber 16mm Pickleball Paddle",
    "product.lead": "A T700 raw carbon fiber face and thermoformed (hot-pressed) unibody. The factory listing specifies a 16mm PP honeycomb core; a 14mm option is available on request.",
    "spec.caption": "Paddle specifications",
    "spec.face": "Face",
    "spec.faceValue": "T700 raw carbon fiber",
    "spec.core": "Core",
    "spec.coreValue": "16mm PP honeycomb (per factory listing); 14mm on request",
    "spec.construction": "Construction",
    "spec.constructionValue": "Thermoformed (hot-pressed) unibody",
    "spec.weight": "Weight",
    "spec.size": "Size",
    "spec.customization": "Customization",
    "spec.customizationValue": "Logo, graphics, colors, grip, packaging",
    "spec.moq": "MOQ",
    "spec.moqValue": "100 pcs (OEM); samples available",
    "spec.terms": "Trade terms",
    "spec.termsValue": "FOB Shenzhen / CIF Rotterdam / DDP on request",
    "spec.pricing": "Pricing",
    "spec.pricingValue": "On request – <a href=\"#quote\">request a quote</a>",
    "process.eyebrow": "OEM process",
    "process.title": "Plan your OEM order in six steps.",
    "process.s1.title": "Inquiry",
    "process.s1.body": "Send your quantity, destination and customization ideas. We reply with a quote.",
    "process.s2.title": "Sample",
    "process.s2.body": "Request a sample to review the paddle in person.",
    "process.s3.title": "Design approval",
    "process.s3.body": "Specify your logo, graphics, colors, grip and packaging.",
    "process.s4.title": "Order planning",
    "process.s4.body": "Plan your OEM quantity, starting from 100 pcs.",
    "process.s5.title": "Specification review",
    "process.s5.body": "Include your target dimensions, weight and core thickness in the inquiry.",
    "process.s6.title": "Shipping",
    "process.s6.body": "FOB Shenzhen / CIF Rotterdam / DDP on request.",
    "serve.eyebrow": "Who we serve",
    "serve.title": "Built for buyers who put their own name on the paddle.",
    "serve.c1.title": "Brands",
    "serve.c1.body": "Create a paddle line with your own logo, graphics, colors, grip and packaging on a T700 thermoformed paddle.",
    "serve.c2.title": "Clubs & academies",
    "serve.c2.body": "Club-branded paddles for members, coaching programs and pro shops, starting from 100 pcs.",
    "serve.c3.title": "Distributors",
    "serve.c3.body": "Factory supply with FOB Shenzhen, CIF Rotterdam or DDP on request.",
    "serve.c4.title": "Online retailers",
    "serve.c4.body": "Build your own paddle range with custom branding and packaging. OEM starts at 100 pcs.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Questions buyers ask first.",
    "faq.more": "Something else on your mind? <a href=\"#quote\">Ask us in the quote form.</a>",
    "faq.q1": "What is the minimum order quantity (MOQ)?",
    "faq.a1": "OEM orders start at 100 pcs. Logo, graphics, colors, grip and packaging can be customized.",
    "faq.q2": "What can I customize?",
    "faq.a2": "Logo, graphics, colors, grip and packaging. Weight and size are also customizable; share your requirements in the inquiry.",
    "faq.q3": "Can I test a sample before placing a bulk order?",
    "faq.a3": "Yes, samples are available. Tell us what you need in the quote form to discuss sample details.",
    "faq.q4": "How much does a paddle cost?",
    "faq.a4": "Prices are available on request. Include your quantity, customization requirements and preferred trade terms when requesting a quote.",
    "faq.q5": "Which shipping terms do you offer?",
    "faq.a5": "FOB Shenzhen / CIF Rotterdam / DDP on request. Include your destination and preferred terms in the inquiry.",
    "faq.q6": "What is the lead time?",
    "faq.a6": "Please include your target delivery date in the inquiry and ask us to confirm the production and shipping schedule for your order.",
    "faq.q7": "Is a 14mm core option available?",
    "faq.a7": "The factory listing specifies a 16mm PP honeycomb core. A 14mm option is available on request.",
    "quote.eyebrow": "Request a quote",
    "quote.title": "Tell us what you're planning.",
    "quote.lead": "Share a few details and we'll reply by email with indicative pricing and next steps.",
    "quote.listTitle": "Helpful to include",
    "quote.li1": "Target quantity (OEM starts at 100 pcs)",
    "quote.li2": "Customization: logo, graphics, colors, grip, packaging",
    "quote.li3": "Trade terms: FOB Shenzhen / CIF Rotterdam / DDP on request",
    "quote.li4": "Destination country",
    "quote.preferEmail": "Prefer email?",
    "form.name": "Name",
    "form.company": "Company",
    "form.country": "Country",
    "form.email": "Email",
    "form.qty": "Quantity <span class=\"label-hint\">(pcs)</span>",
    "form.qtyPlaceholder": "e.g. 500",
    "form.qtyHint": "OEM / private label starts at 100 pcs.",
    "form.message": "Message <span class=\"label-hint\">(optional)</span>",
    "form.messagePlaceholder": "Customization, trade term, timeline, questions…",
    "form.submitHint": "Opens your email app with the request pre-filled. Nothing is sent until you press send.",
    "form.status": "Your email app should now open with the request pre-filled — press send to submit it. If nothing opened, copy the request and email it to {email}.",
    "form.openDraft": "Open email draft",
    "form.copy": "Copy request text",
    "form.copied": "Copied",
    "form.copyFailed": "Copy failed — select and copy manually",
    "mail.subject": "Quote request: T700 16mm pickleball paddle – {company} ({qty} pcs)",
    "mail.heading": "Quote request — T700 Carbon Fiber 16mm Pickleball Paddle",
    "mail.name": "Name: {value}",
    "mail.company": "Company: {value}",
    "mail.country": "Country: {value}",
    "mail.email": "Email: {value}",
    "mail.qty": "Quantity: {value} pcs",
    "mail.message": "Message:",
    "mail.none": "(none)",
    "footer.tagline": "OEM / private-label T700 carbon fiber pickleball paddles, factory-direct from Dongguan, China.",
    "footer.explore": "Explore",
    "footer.contact": "Contact",
    "footer.address": "Dongguan, Guangdong, China",
    "footer.rights": ". All rights reserved.",
    "footer.note": "Custom specifications are available on request. Please include your requirements in the inquiry.",
    "brand": "{brand}",
    "meta.locale": "en_US",
    "meta.alternateLocale": "zh_CN",
    "photo.frontAlt": "Front view of the T700 factory sample paddle with blue graphics and a black grip on a white background",
    "photo.detailAlt": "Close-up of the factory sample carbon fiber face, surface texture and blue graphics",
    "photo.angleAlt": "Angled view of the factory sample paddle showing the face, edge guard and grip",
    "photo.note": "Factory sample shown. Your logo, graphics and colors are fully customizable.",
    "gallery.eyebrow": "Product gallery",
    "gallery.title": "A closer look at the factory sample.",
    "gallery.front": "Front view",
    "gallery.detail": "Carbon face detail",
    "gallery.angle": "Angled view",
    "spec.weightValue": "Approx. 225 g; customizable",
    "spec.sizeValue": "Approx. 398 × 198 mm; customizable",
    "spec.grip": "Grip",
    "spec.gripValue": "PU",
    "spec.edge": "Edge guard",
    "spec.edgeValue": "PVC",
    "form.namePlaceholder": "Your name",
    "form.companyPlaceholder": "Company name",
    "form.countryPlaceholder": "Destination country",
    "form.emailPlaceholder": "Your email address",
    "form.required": "Please complete this field.",
    "form.invalidEmail": "Please enter a valid email address.",
    "form.invalidQty": "Please enter a whole number of at least 1.",
    "form.manualCopy": "Request text for manual copying"
  },
  "zh": {
    "meta.title": "T700 碳纤维匹克球拍 OEM 定制，100 支起订 | {brand}",
    "meta.description": "一拍即合 T700 原碳纤维匹克球拍，16 毫米聚丙烯蜂窝芯，热压一体成型。OEM 100 支起订，可提供样品。欢迎咨询定制方案与报价。",
    "a11y.skip": "跳至正文",
    "a11y.home": "首页",
    "a11y.primaryNav": "主导航",
    "a11y.language": "语言",
    "a11y.openMenu": "打开菜单",
    "a11y.closeMenu": "关闭菜单",
    "a11y.backToTop": "返回顶部",
    "a11y.footerNav": "页脚导航",
    "nav.why": "合作优势",
    "nav.product": "产品",
    "nav.process": "OEM 流程",
    "nav.serve": "服务对象",
    "nav.faq": "常见问题",
    "cta.quote": "获取报价",
    "hero.eyebrow": "OEM / 自有品牌定制 · 工厂直供",
    "hero.title": "T700 碳纤维匹克球拍，<span class=\"hl\">专为您的品牌打造</span>。",
    "hero.lead": "T700 原碳纤维拍面，搭配 16 毫米聚丙烯蜂窝芯，热压一体成型。品牌标识、图案、颜色、握把及包装均可定制。OEM 100 支起订，可提供样品。",
    "hero.specs": "查看规格",
    "facts.face": "拍面",
    "facts.faceValue": "T700 原碳纤维",
    "facts.core": "芯材",
    "facts.coreValue": "16 毫米聚丙烯蜂窝芯",
    "facts.moq": "起订量",
    "facts.moqUnit": "支",
    "facts.origin": "产地",
    "facts.originValue": "中国东莞",
    "why.eyebrow": "合作优势",
    "why.title": "连接东莞工厂与您的品牌。",
    "why.c1.title": "工厂直供",
    "why.c1.body": "工厂位于中国广东省东莞市，成立于 2018 年，拥有 200 多名员工。",
    "why.c2.title": "OEM 定制",
    "why.c2.body": "从品牌标识、拍面图案和颜色，到握把及包装，按您的品牌需求定制。",
    "why.c3.title": "低起订量",
    "why.c3.body": "100 支起订，便于开展新设计或新市场的采购计划。",
    "why.c4.title": "灵活的交货方式",
    "why.c4.body": "支持 FOB 深圳、鹿特丹到岸价；完税后交货可按需咨询。请告知您希望采用的贸易条款。",
    "product.eyebrow": "主推产品",
    "product.title": "T700 碳纤维 16 毫米匹克球拍",
    "product.lead": "采用 T700 原碳纤维拍面，热压一体成型。根据工厂产品资料，芯材为 16 毫米聚丙烯蜂窝芯；14 毫米版本可按需咨询。",
    "spec.caption": "球拍规格",
    "spec.face": "拍面",
    "spec.faceValue": "T700 原碳纤维",
    "spec.core": "芯材",
    "spec.coreValue": "16 毫米聚丙烯蜂窝芯（以工厂产品资料为依据）；14 毫米版本可按需咨询",
    "spec.construction": "工艺",
    "spec.constructionValue": "热压一体成型",
    "spec.weight": "重量",
    "spec.size": "尺寸",
    "spec.customization": "定制项目",
    "spec.customizationValue": "品牌标识、图案、颜色、握把、包装",
    "spec.moq": "起订量",
    "spec.moqValue": "OEM 100 支起订；可提供样品",
    "spec.terms": "贸易条款",
    "spec.termsValue": "FOB 深圳 / 鹿特丹到岸价 / 完税后交货可按需咨询",
    "spec.pricing": "价格",
    "spec.pricingValue": "按需报价 – <a href=\"#quote\">获取报价</a>",
    "process.eyebrow": "OEM 流程",
    "process.title": "六个步骤，规划您的 OEM 订单。",
    "process.s1.title": "询盘",
    "process.s1.body": "告诉我们数量、目的地和定制想法，我们将回复报价。",
    "process.s2.title": "打样",
    "process.s2.body": "可申请样品，亲自了解球拍的外观与做工。",
    "process.s3.title": "设计确认",
    "process.s3.body": "明确您的品牌标识、图案、颜色、握把及包装需求。",
    "process.s4.title": "订单规划",
    "process.s4.body": "确定 OEM 订单数量，100 支起订。",
    "process.s5.title": "规格确认",
    "process.s5.body": "在询盘中注明所需尺寸、重量及芯材厚度。",
    "process.s6.title": "发货",
    "process.s6.body": "支持 FOB 深圳、鹿特丹到岸价；完税后交货可按需咨询。",
    "serve.eyebrow": "服务对象",
    "serve.title": "专为打造自有品牌球拍的买家服务。",
    "serve.c1.title": "品牌方",
    "serve.c1.body": "以 T700 热压一体成型球拍为基础，定制品牌标识、图案、颜色、握把和包装，打造自有产品线。",
    "serve.c2.title": "俱乐部与培训机构",
    "serve.c2.body": "为会员、教学课程和球馆专卖店定制俱乐部专属球拍，100 支起订。",
    "serve.c3.title": "经销商",
    "serve.c3.body": "东莞工厂供货，支持 FOB 深圳、鹿特丹到岸价；完税后交货可按需咨询。",
    "serve.c4.title": "电商卖家",
    "serve.c4.body": "通过品牌标识与包装定制，打造自有球拍产品。OEM 100 支起订。",
    "faq.eyebrow": "常见问题",
    "faq.title": "买家最关心的问题。",
    "faq.more": "还有其他疑问？<a href=\"#quote\">欢迎在报价表单中留言。</a>",
    "faq.q1": "起订量（MOQ）是多少？",
    "faq.a1": "OEM 订单 100 支起订。品牌标识、图案、颜色、握把及包装均可定制。",
    "faq.q2": "哪些部分可以定制？",
    "faq.a2": "品牌标识、图案、颜色、握把及包装均可定制。重量和尺寸也可按需定制，请在询盘中注明您的要求。",
    "faq.q3": "下批量订单前可以先试样吗？",
    "faq.a3": "可以提供样品。请在报价表单中说明您的需求，以便沟通样品细节。",
    "faq.q4": "球拍的价格是多少？",
    "faq.a4": "价格请咨询。询价时请提供订购数量、定制需求及希望采用的贸易条款。",
    "faq.q5": "支持哪些贸易条款？",
    "faq.a5": "支持 FOB 深圳、鹿特丹到岸价；完税后交货可按需咨询。请在询盘中注明目的地及希望采用的条款。",
    "faq.q6": "交期多长？",
    "faq.a6": "请在询盘中注明期望交付日期，并与我们确认订单的生产及运输安排。",
    "faq.q7": "可以选择 14 毫米芯材吗？",
    "faq.a7": "工厂产品资料标注为 16 毫米聚丙烯蜂窝芯。14 毫米版本可按需咨询。",
    "quote.eyebrow": "获取报价",
    "quote.title": "告诉我们您的计划。",
    "quote.lead": "留下几项基本信息，我们会通过邮件回复参考报价和后续步骤。",
    "quote.listTitle": "建议提供的信息",
    "quote.li1": "目标数量（OEM 100 支起订）",
    "quote.li2": "定制需求：品牌标识、图案、颜色、握把、包装",
    "quote.li3": "贸易条款：FOB 深圳 / 鹿特丹到岸价 / 完税后交货可按需咨询",
    "quote.li4": "目的国家",
    "quote.preferEmail": "更习惯发邮件？",
    "form.name": "姓名",
    "form.company": "公司",
    "form.country": "国家",
    "form.email": "邮箱",
    "form.qty": "数量<span class=\"label-hint\">（支）</span>",
    "form.qtyPlaceholder": "例如 500",
    "form.qtyHint": "OEM / 自有品牌定制 100 支起订。",
    "form.message": "留言<span class=\"label-hint\">（选填）</span>",
    "form.messagePlaceholder": "定制需求、贸易条款、时间安排、其他问题……",
    "form.submitHint": "点击后将打开您的邮件应用并自动填好询价内容；在您按下发送之前，不会发出任何信息。",
    "form.status": "您的邮件应用应已打开并填好询价内容，点击发送即可提交。如果没有打开，请复制询价内容并发送至 {email}。",
    "form.openDraft": "打开邮件草稿",
    "form.copy": "复制询价内容",
    "form.copied": "已复制",
    "form.copyFailed": "复制失败，请手动选择并复制",
    "mail.subject": "询价：T700 16 毫米匹克球拍 — {company}（{qty} 支）",
    "mail.heading": "询价 — T700 碳纤维 16 毫米匹克球拍",
    "mail.name": "姓名：{value}",
    "mail.company": "公司：{value}",
    "mail.country": "国家：{value}",
    "mail.email": "邮箱：{value}",
    "mail.qty": "数量：{value} 支",
    "mail.message": "留言：",
    "mail.none": "（无）",
    "footer.tagline": "OEM / 自有品牌定制 T700 碳纤维匹克球拍，中国东莞工厂直供。",
    "footer.explore": "导航",
    "footer.contact": "联系方式",
    "footer.address": "中国广东省东莞市",
    "footer.rights": " 版权所有",
    "footer.note": "如需定制规格，请在询盘中注明您的具体要求。",
    "brand": "{brand}",
    "meta.locale": "zh_CN",
    "meta.alternateLocale": "en_US",
    "photo.frontAlt": "白色背景下的 T700 工厂样品球拍正面，带蓝色图案和黑色握把",
    "photo.detailAlt": "工厂样品碳纤维拍面特写，展示表面纹理及蓝色图案",
    "photo.angleAlt": "工厂样品球拍斜角实拍，展示拍面、护边和握把",
    "photo.note": "图中为工厂样品。您的品牌标识、图案和颜色均可按需定制。",
    "gallery.eyebrow": "产品实拍",
    "gallery.title": "近距离了解工厂样品。",
    "gallery.front": "正面外观",
    "gallery.detail": "碳纤维拍面细节",
    "gallery.angle": "斜角外观",
    "spec.weightValue": "约 225 克；可定制",
    "spec.sizeValue": "约 398 × 198 毫米；可定制",
    "spec.grip": "握把",
    "spec.gripValue": "PU",
    "spec.edge": "护边",
    "spec.edgeValue": "PVC",
    "form.namePlaceholder": "请输入姓名",
    "form.companyPlaceholder": "请输入公司名称",
    "form.countryPlaceholder": "请输入目的国家",
    "form.emailPlaceholder": "请输入电子邮箱",
    "form.required": "请填写此项。",
    "form.invalidEmail": "请输入有效的电子邮箱地址。",
    "form.invalidQty": "请输入不小于 1 的整数。",
    "form.manualCopy": "可手动复制的询价内容"
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

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var header = document.getElementById("site-header");
    var toggle = header && header.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
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

  /* ---------- Scroll reveal ----------
     Only elements that start below the fold are hidden, and only once this
     script is running, so content is never stuck invisible. */
  var REVEAL_SELECTOR = [
    ".section-head",
    ".card-grid > li",
    ".product-figure",
    ".product-copy",
    ".gallery-card",
    ".steps > li",
    ".serve-grid > li",
    ".faq-list",
    ".quote-copy",
    ".quote-form",
    ".footer-grid > *"
  ].join(",");

  function initReveal() {
    if (reduceMotion || !canObserve) return;

    function finish(el) {
      el.classList.remove("reveal", "is-in");
      el.style.transitionDelay = "";
    }

    function show(el, delay) {
      el.style.transitionDelay = delay + "ms";
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

  /* ---------- Quote form (front-end only, mailto) ---------- */
  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    // Revalidate at submit time too, including values supplied by browser autofill.
    form.noValidate = true;

    var status = document.getElementById("form-status");
    var statusText = document.getElementById("form-status-text");
    var draftLink = document.getElementById("form-mailto-link");
    var copyBtn = document.getElementById("form-copy");
    var manualCopy = document.getElementById("manual-copy");
    var requestText = document.getElementById("request-text");
    var lastBody = "";
    var copyTimer = 0;

    function value(name) {
      var field = form.elements[name];
      return field ? field.value.trim() : "";
    }

    function buildRequest() {
      var company = value("Company");
      var qty = value("Quantity");
      var subject = t("mail.subject", { company: company, qty: qty });
      var lines = [
        t("mail.heading"),
        "",
        t("mail.name", { value: value("Name") }),
        t("mail.company", { value: company }),
        t("mail.country", { value: value("Country") }),
        t("mail.email", { value: value("Email") }),
        t("mail.qty", { value: qty }),
        "",
        t("mail.message"),
        value("Message") || t("mail.none")
      ];
      return { subject: subject, body: lines.join("\r\n") };
    }

    function refreshRequest() {
      var request = buildRequest();
      var href =
        "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(request.subject) +
        "&body=" + encodeURIComponent(request.body);

      lastBody = request.subject + "\r\n\r\n" + request.body;
      draftLink.setAttribute("href", href);
      requestText.value = lastBody;
      statusText.textContent = t("form.status");
      return href;
    }

    function validateField(field) {
      field.setCustomValidity("");
      if (field.validity.badInput || field.validity.rangeUnderflow || field.validity.stepMismatch) {
        field.setCustomValidity(t("form.invalidQty"));
      } else if (field.validity.valueMissing || (field.required && !field.value.trim())) {
        field.setCustomValidity(t("form.required"));
      } else if (field.validity.typeMismatch) {
        field.setCustomValidity(t("form.invalidEmail"));
      }
    }

    var fields = form.querySelectorAll("input, textarea:not([readonly])");
    fields.forEach(function (field) {
      field.addEventListener("invalid", function () { validateField(field); });
      field.addEventListener("input", function () {
        validateField(field);
        if (!status.hidden) refreshRequest();
      });
    });
    langListeners.push(function () {
      fields.forEach(validateField);
      window.clearTimeout(copyTimer);
      copyBtn.textContent = t("form.copy");
      if (!status.hidden) refreshRequest();
    });

    // Native constraints still gate submission, with validation text in the chosen language.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      fields.forEach(validateField);
      if (!form.reportValidity()) return;
      var href = refreshRequest();
      status.hidden = false;

      window.location.href = href;
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
    area.style.position = "fixed";
    area.style.opacity = "0";
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
    applyConstants();
    initNav();
    initQuoteForm();
    initLanguage();
    root.classList.replace("no-js", "js");
    initHeaderShadow();
    initReveal();

    // After the load-in, a language switch redraws the headline underline without the intro delay.
    window.setTimeout(function () { root.classList.add("intro-done"); }, 1800);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
