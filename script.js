// تفعيل التمرير الناعم (Smooth Scrolling) عند الضغط على روابط القائمة
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// إضافة تأثير ظهور تدريجي للبطاقات عند النزول بالصفحة
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .project-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});
// --- تأثير تساقط الجزيئات المتوهجة (الثلج/الغبار) ---
document.addEventListener('DOMContentLoaded', () => {
    const particleCount = 40; // عدد الجزيئات (يمكنك زيادتها أو تقليلها)
    
    // إنشاء حاوية للجزيئات
    const particleContainer = document.createElement('div');
    particleContainer.style.position = 'fixed';
    particleContainer.style.top = '0';
    particleContainer.style.left = '0';
    particleContainer.style.width = '100%';
    particleContainer.style.height = '100%';
    particleContainer.style.pointerEvents = 'none'; // لكي لا تعيق الضغط على الأزرار
    particleContainer.style.zIndex = '-1'; // لتكون خلف النصوص
    document.body.appendChild(particleContainer);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // تنسيق الجزيء
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px'; // حجم عشوائي
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.7)'; // لون أبيض شفاف
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = '0 0 8px 2px rgba(251, 191, 36, 0.4)'; // توهج ذهبي/بنفسجي
        
        // موضع عشوائي في البداية
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * -100 + 'vh'; // تبدأ من فوق الشاشة
        
        // سرعة وحركة عشوائية
        const duration = Math.random() * 10 + 10; // بين 10 و 20 ثانية للنزول
        const delay = Math.random() * 10;
        
        particle.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0 },
            { opacity: 1, offset: 0.1 },
            { opacity: 1, offset: 0.9 },
            { transform: `translateY(110vh) translateX(${Math.random() * 20 - 10}vw)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            iterations: Infinity, // تتكرر للأبد
            easing: 'linear'
        });

        particleContainer.appendChild(particle);
    }
});