// بيانات الترجمة
const translations = {
    ar: {
        logo: "مايكل",
        welcome: " أهلاً، أنا مايكل",
        "sub-title": " مطور واجهات",
        "projects-title": "مشاريعي",
        "p1-title": "مشروع 1",
        "p1-desc": "هذا المشروع صمم بأسلوب عصري ليتناسب مع احتياجات المستخدم.",
        "p2-title": "مشروع 2",
        "p2-desc": "تطبيق ويب متكامل يستخدم أحدث تقنيات الـ Front-end.",
        "p3-title": "مشروع 3",
        "p3-desc": "واجهة مستخدم احترافية تركز على تجربة المستخدم والسرعة.",
        "view-btn": "عرض المشروع"
    },
    en: {
        logo: "michail",
        welcome: "Hi, I am michail",
        "sub-title": "Frontend Developer",
        "projects-title": "My Projects",
        "p1-title": "Project One",
        "p1-desc": "This project was designed with a modern style for the user.",
        "p2-title": "Project Two",
        "p2-desc": "Full web application using the latest Front-end techs.",
        "p3-title": "Project Three",
        "p3-desc": "Professional UI focused on user experience and speed.",
        "view-btn": "View Project"
    }
};

// عناصر التحكم
const langBtn = document.getElementById('lang-toggle');
const themeBtn = document.getElementById('theme-toggle');
let currentLang = 'ar';

// تغيير اللغة
langBtn.onclick = () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    langBtn.textContent = currentLang === 'ar' ? 'English' : 'عربي';
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[currentLang][key];
    });
};

// تغيير الوضع الليلي
themeBtn.onclick = () => {
    document.body.classList.toggle('light-mode');
    themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
};

// أنيميشن بسيط عند التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('fade-in');
    });
});

document.querySelectorAll('.project-card').forEach(card => observer.observe(card));
