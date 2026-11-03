// ==========================================
// 1. قاموس الترجمة (أضف أي لغة هنا)
// ==========================================
const translations = {
    ar: {
        page_title: "حيدر عبدالله | مهندس برمجيات",
        logo: "حيدر عبدالله",
        nav_home: "الرئيسية",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_contact: "تواصل",
        hero_greeting: "مرحباً، أنا",
        hero_name: "حيدر عبدالله",
        hero_desc: "مهندس برمجيات ومطور حلول تقنية. أعمل على دمج الذكاء الاصطناعي (AI) في المشاريع، وحل المشاكل التقنية المعقدة، وإغلاق الثغرات. لدي شغف ببناء أنظمة متكاملة وأتمتة العمليات.",
        btn_contact: "تواصل معي",
        btn_cv: "تحميل السيرة الذاتية",
        skills_title: "مجالات <span>الخبرة</span>",
        skill_1_t: "تطوير البرمجيات",
        skill_1_d: "بناء وإدارة المشاريع البرمجية، وتطوير حلول ويب متكاملة باستخدام (Python, HTML, JS).",
        skill_2_t: "دمج الذكاء الاصطناعي",
        skill_2_d: "تطبيق نماذج الذكاء الاصطناعي في المشاريع، وأتمتة المهام لزيادة الكفاءة.",
        skill_3_t: "حل المشاكل والأمن",
        skill_3_d: "تحليل الأنظمة، حل المشاكل التقنية المعقدة، وإغلاق الثغرات البرمجية.",
        skill_4_t: "إنترنت الأشياء (IoT)",
        skill_4_d: "ربط الأجهزة الحساسة (مثل ESP32) بالأنظمة لبناء أنظمة مراقبة ذكية.",
        projects_title: "أحدث <span>المشاريع</span>",
        proj_1_t: "مطحنة الذهب الذكية",
        proj_1_d: "نظام مؤقت ذكي يعمل بدون إنترنت (PWA) لإدارة أوقات طحن الحجر، مع إشعارات صوتية واهتزاز.",
        proj_2_t: "نظام مراقبة بالذكاء الاصطناعي",
        proj_2_d: "لوحة تحكم بلغة بايثون (Streamlit) تستقبل بيانات من حساسات ESP32 لمراقبة الماكينات عن بُعد.",
        code_title: "مقتطفات <span>برمجية</span>",
        btn_github: "زيارة حسابي في GitHub",
        contact_title: "لنتحدث عن مشروعك القادم",
        contact_desc: "أنا متاح دائماً للتواصل والفرص التقنية الجديدة.",
        footer_name: "حيدر عبدالله",
        footer_rights: "جميع الحقوق محفوظة."
    },
    en: {
        page_title: "Haider Abdalla | Software Engineer",
        logo: "Haider Abdalla",
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_name: "Haider Abdalla",
        hero_desc: "Software Engineer and Tech Solutions Developer. I integrate Artificial Intelligence (AI) into projects, solve complex technical problems, and close security gaps. I am passionate about building integrated systems and automating processes.",
        btn_contact: "Contact Me",
        btn_cv: "Download CV",
        skills_title: "Areas of <span>Expertise</span>",
        skill_1_t: "Software Development",
        skill_1_d: "Building and managing software projects, and developing integrated web solutions using (Python, HTML, JS).",
        skill_2_t: "AI Integration",
        skill_2_d: "Applying AI models in projects and automating tasks to increase efficiency.",
        skill_3_t: "Problem Solving & Security",
        skill_3_d: "System analysis, solving complex technical problems, and closing security gaps.",
        skill_4_t: "Internet of Things (IoT)",
        skill_4_d: "Connecting sensors (like ESP32) to systems to build smart monitoring solutions.",
        projects_title: "Latest <span>Projects</span>",
        proj_1_t: "Smart Gold Mill",
        proj_1_d: "A smart offline timer system (PWA) to manage stone grinding times, with audio and vibration alerts.",
        proj_2_t: "AI Monitoring System",
        proj_2_d: "A Python (Streamlit) dashboard that receives data from ESP32 sensors to monitor machines remotely.",
        code_title: "Code <span>Snippets</span>",
        btn_github: "Visit my GitHub",
        contact_title: "Let's talk about your next project",
        contact_desc: "I am always available for communication and new tech opportunities.",
        footer_name: "Haider Abdalla",
        footer_rights: "All rights reserved."
    }
};

// ==========================================
// 2. محرك الترجمة
// ==========================================
function changeLanguage(lang) {
    // تغيير اتجاه الصفحة (عربي من اليمين، إنجليزي من اليسار)
    document.getElementById('html-root').setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.getElementById('html-root').setAttribute('lang', lang);
    
    // تغيير عنوان الصفحة (Tab)
    document.title = translations[lang].page_title;

    // تغيير جميع النصوص التي تحمل data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // نستخدم innerHTML لدعم وسوم مثل <span>
        }
    });

    // تفعيل الزر النشط
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    // حفظ اللغة في ذاكرة المتصفح
    localStorage.setItem('site_lang', lang);
}

// ==========================================
// 3. التمرير الناعم + الجزيئات المتوهجة + استرجاع اللغة
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // استرجاع اللغة المحفوظة أو الافتراضية (عربي)
    const savedLang = localStorage.getItem('site_lang') || 'ar';
    changeLanguage(savedLang);

    // التمرير الناعم
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // تأثير تساقط الجزيئات المتوهجة
    const particleCount = 40;
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none';
    particleContainer.style.zIndex = '-1';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.7)';
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 8px 2px rgba(251, 191, 36, 0.4)';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * -100 + 'vh';
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        
        particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0 },
            { opacity: 1, offset: 0.1 },
            { opacity: 1, offset: 0.9 },
            { transform: `translateY(110vh) translateX(${Math.random() * 20 - 10}vw)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity,
            easing: 'linear'
        });

        particleContainer.appendChild(particle);
    }
});