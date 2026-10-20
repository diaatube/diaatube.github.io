// ===== Theme toggle =====
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== Translations =====
// English text lives in the HTML; Arabic lives here, keyed by data-i18n.
const ar = {
  'nav.about': 'نبذة عني',
  'nav.skills': 'المهارات',
  'nav.experience': 'الخبرات',
  'nav.projects': 'المشاريع',
  'nav.contact': 'تواصل',

  'hero.hello': '<span class="wave">👋</span> مرحباً، أنا',
  'hero.name': 'محمد <span class="gradient-text">ضياء</span>',
  'hero.desc': 'مطوّر Full Stack أبني تطبيقات ويب قابلة للتوسّع باستخدام <strong>.NET Core</strong> و<strong>Angular</strong> — من معمارية SaaS متعددة المستأجرين إلى لوحات تحكّم لحظية عالية الأداء.',
  'hero.work': 'شاهد أعمالي',
  'hero.cv': 'تحميل السيرة الذاتية',

  'about.title': 'نبذة <span class="gradient-text">عني</span>',
  'about.p1': 'أنا <strong>مطوّر Full Stack</strong> مقيم في دمشق، سوريا، متخصص في بناء تطبيقات ويب قابلة للتوسّع باستخدام <strong>.NET Core</strong> و<strong>Angular</strong>.',
  'about.p2': 'أستمتع بتصميم <strong>حلول SaaS متعددة المستأجرين</strong>، وتطبيق <strong>التصميم الموجّه بالمجال (DDD)</strong>، وبناء ميزات <strong>لحظية (Real-time)</strong>، وتحويل سير العمل المعقّد إلى برمجيات نظيفة وسهلة الصيانة وعالية الأداء.',
  'about.p3': 'أعمل حالياً في <strong>Varx</strong> على تطوير تطبيقات ويب للمؤسسات باستخدام ABP Framework.',
  'about.ar': '🇸🇾 العربية — اللغة الأم',
  'about.en': '🇬🇧 الإنجليزية — مستوى متوسط',

  'stats.projects': 'مشاريع منجزة',
  'stats.companies': 'شركات',
  'stats.tech': 'تقنيات',
  'stats.coffee': 'فناجين قهوة',

  'skills.title': 'المهارات <span class="gradient-text">التقنية</span>',
  'skills.backend': 'الواجهة الخلفية',
  'skills.frontend': 'الواجهة الأمامية',
  'skills.db': 'قواعد البيانات',
  'skills.arch': 'المعمارية والأدوات',

  'exp.title': 'الخبرات <span class="gradient-text">العملية</span>',
  'exp.role': 'مطوّر Full-Stack',
  'exp.varx.date': '2025 — حتى الآن',
  'exp.varx.list': `
    <li>تصميم وتطوير تطبيقات ويب مؤسسية متعددة المستأجرين باستخدام ABP Framework و.NET Core وAngular.</li>
    <li>تطبيق مبادئ التصميم الموجّه بالمجال (DDD) ونمط المستودع (Repository Pattern) لبناء معمارية نظيفة وقابلة للتوسّع وسهلة الصيانة.</li>
    <li>تصميم نماذج قواعد البيانات العلائقية وتحسينها باستخدام SQL Server وEF Core وADO.NET.</li>
    <li>تنفيذ أتمتة في الخلفية عبر Cron Jobs وBackground Jobs، وإشعارات لحظية باستخدام SignalR، والتحقق عبر البريد الإلكتروني.</li>
    <li>المشاركة في تحويل نظام نقاط بيع (POS) قديم أحادي المستأجر إلى منصة SaaS حديثة متعددة المستأجرين تدعم قواعد بيانات متعددة.</li>
    <li>بناء لوحات تحكّم إدارية حديثة ومتجاوبة باستخدام Angular وTailwind CSS وPrimeNG.</li>`,
  'exp.gamma.list': `
    <li>تطوير تطبيقات ويب قابلة للتوسّع وواجهات RESTful API تربط لوحات تحكّم Angular بقواعد بيانات SQL Server.</li>
    <li>تطوير منصة تجارة إلكترونية للأزياء تتضمن إدارة كتالوج المنتجات وسلة التسوّق ومعالجة الطلبات.</li>`,
  'edu.degree': 'دبلوم في تقانة الحاسوب',
  'edu.school': 'معهد تقانة الحاسوب — الجامعة الافتراضية السورية',
  'edu.date': 'متخرّج',

  'projects.title': 'أبرز <span class="gradient-text">المشاريع</span>',
  'badge.enterprise': 'مؤسسي',
  'badge.ecommerce': 'تجارة إلكترونية',
  'badge.restaurant': 'مطاعم',
  'p1.title': 'نظام إدارة الجلسات الطبية والدور',
  'p1.desc': 'تطبيق متعدد المستأجرين يتيح للأطباء إدارة مواعيد العيادة وقوائم الانتظار وسجلات المرضى — مع إشعارات لحظية عبر SignalR، ومهام مجدولة باستخدام Cron Jobs، وتحقق تلقائي عبر البريد الإلكتروني.',
  'p2.title': 'تحويل نظام نقاط البيع إلى SaaS',
  'p2.desc': 'تحويل نظام نقاط بيع أحادي المستأجر إلى منصة SaaS متعددة المستأجرين تدعم قواعد بيانات منفصلة ومشتركة.',
  'p3.title': 'نظام إدارة سير العمل — بنك وربة',
  'p3.desc': 'تطبيق رقمي لتتبّع سير العمل يدير توقيعات المستندات المتسلسلة والموافقات بين الأقسام.',
  'p4.title': 'متجر أزياء إلكتروني',
  'p4.desc': 'منصة متجر ملابس إلكتروني مع إدارة كتالوج المنتجات ونظام سلة التسوّق ومعالجة الطلبات.',
  'p5.title': 'EMenu — نظام إدارة قوائم المطاعم',
  'p5.desc': 'نظام رقمي يمكّن المطاعم من إدارة القوائم الإلكترونية والطلبات مع أدوار وصلاحيات للمستخدمين.',
  'badge.marketplace': 'سوق إلكتروني',
  'project.code': 'كود الواجهة',
  'p6.title': 'CarVex — قطع السيارات والإصلاح الطارئ',
  'p6.desc': 'منصة تربط أصحاب السيارات بتجار قطع الغيار — يطلب العملاء القطع حسب نوع السيارة والمحافظة أو يرسلون طلبات إصلاح طارئ، مع تسجيل منفصل للعملاء والتجار ولوحة تحكّم إدارية متكاملة.',

  'contact.title': 'لنبنِ شيئاً <span class="gradient-text">رائعاً</span> معاً',
  'contact.desc': 'أنا منفتح على فرص العمل والتعاون الجديدة. لا تتردد في التواصل معي — سأرد عليك بأسرع وقت ممكن.',
  'contact.whatsapp': 'واتساب',
  'contact.location': '📍 دمشق، سوريا',

  'footer.text': 'محمد ضياء. صُمّم باستخدام HTML وCSS وقليل من JS.',
};

const rolesByLang = {
  en: ['Full Stack Developer', '.NET Core Developer', 'Angular Developer', 'SaaS Architect'],
  ar: ['مطوّر Full Stack', 'مطوّر .NET Core', 'مطوّر Angular', 'مهندس أنظمة SaaS'],
};
const titles = {
  en: 'Mohammed Diaa | Full Stack Developer',
  ar: 'محمد ضياء | مطوّر Full Stack',
};

const i18nEls = document.querySelectorAll('[data-i18n]');
const en = {};
i18nEls.forEach(el => { en[el.dataset.i18n] ??= el.innerHTML; });

const langToggle = document.getElementById('langToggle');
let lang = root.lang === 'ar' ? 'ar' : 'en';

function setLang(next) {
  lang = next;
  root.lang = next;
  root.dir = next === 'ar' ? 'rtl' : 'ltr';
  const dict = next === 'ar' ? ar : en;
  i18nEls.forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = dict[key] ?? en[key];
  });
  document.title = titles[next];
  langToggle.textContent = next === 'ar' ? 'EN' : 'ع';
  restartTyping();
  try { localStorage.setItem('lang', next); } catch (e) {}
}

langToggle.addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

// ===== Navbar background on scroll =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Typing effect =====
const typed = document.getElementById('typed');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let roleIndex = 0, charIndex = 0, deleting = false, typingTimer;

function type() {
  const current = rolesByLang[lang][roleIndex];
  typed.textContent = current.slice(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    typingTimer = setTimeout(type, 80);
  } else if (!deleting) {
    deleting = true;
    typingTimer = setTimeout(type, 1800);
  } else if (charIndex > 0) {
    charIndex--;
    typingTimer = setTimeout(type, 40);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % rolesByLang[lang].length;
    typingTimer = setTimeout(type, 300);
  }
}

function restartTyping() {
  clearTimeout(typingTimer);
  roleIndex = 0; charIndex = 0; deleting = false;
  if (reduceMotion) typed.textContent = rolesByLang[lang][0];
  else type();
}

setLang(lang);

// ===== Scroll reveal + counters =====
function animateCount(el) {
  const target = +el.dataset.count;
  const duration = 1200;
  const start = performance.now();
  const step = now => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    entry.target.querySelectorAll('[data-count]').forEach(animateCount);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Active nav link =====
const sections = document.querySelectorAll('main section[id]');
const linkObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.querySelectorAll('a').forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id)
    );
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => linkObserver.observe(s));

// ===== Spotlight effect on skill cards =====
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
