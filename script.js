/* =========================================
   0. MERKEZİ SÖZLÜK
========================================= */
const sozluk = {
    // Menü
    "menu_anasayfa": { tr: "Anasayfa", en: "Home" },
    "menu_hakkimda": { tr: "Hakkımda", en: "About" },
    "menu_deneyim": { tr: "Eğitim & Deneyim", en: "Education & Exp." },
    "menu_yetenekler": { tr: "Yetenekler", en: "Skills" },
    "menu_projeler": { tr: "Projeler", en: "Projects" },
    "menu_iletisim": { tr: "İletişim", en: "Contact" },

    // Anasayfa (Hero)
    "hero_durum": { tr: "Proje, Eğitim ve staj tekliflerine açığım", en: "Open to project, education, and internship offers" },
    "hero_cv_buton": { tr: "Özgeçmişimi Görüntüle", en: "View CV" },
    "hero_iletisim_buton": { tr: "Bana Ulaşın", en: "Contact Me" },
    "hero_konum": { tr: "İstanbul/Esenyurt - Samsun/Atakum", en: "Istanbul/Esenyurt - Samsun/Atakum" },

    // Modal
    "modal_cv_baslik": { tr: "Özgeçmişim", en: "My Resume" },
    "modal_indir_buton": { tr: "Dosyayı İndir", en: "Download File" },

    // Hakkımda
    "hakkimda_baslik": { tr: "Hakkımda", en: "About Me" },
    "hakkimda_metin": { 
        tr: "Samsun Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Python ve C/C# dilleriyle nesne yönelimli programlama, veri analizi ve görüntü işleme üzerine projeler geliştiriyorum. Analitik düşünen, öğrenmeye açık ve ekip çalışmasına yatkın bir mühendis adayı olarak kendimi her geçen gün geliştirmeye devam ediyorum.", 
        en: "I am a 3rd-year Software Engineering student at Samsun University. I develop projects on object-oriented programming, data analysis, and image processing using Python and C/C#. As an analytical, open to learning engineer candidate prone to teamwork, I constantly improve myself day by day." 
    },
    "rozet_uni": { tr: "Samsun Üni. (Devam Ediyor)", en: "Samsun Uni. (Ongoing)" },
    "rozet_siber": { tr: "Siber Güvenlik", en: "Cyber Security" },
    "rozet_zafiyet": { tr: "Zafiyet Analizi", en: "Vulnerability Analysis" },

    // Eğitim ve Deneyim (Timeline)
    "deneyim_baslik": { tr: "Eğitim & Deneyim", en: "Education & Experience" },
    "zaman_uni_tarih": { tr: "2024 - Günümüz", en: "2024 - Present" },
    "zaman_uni_isim": { tr: "Samsun Üniversitesi", en: "Samsun University" },
    "zaman_uni_bolum": { tr: "Yazılım Mühendisliği (Lisans)", en: "Software Engineering (Bachelor's)" },
    
    "zaman_lise_tarih": { tr: "2018 - 2022", en: "2018 - 2022" },
    "zaman_lise_isim": { tr: "Bahçelievler Anadolu Lisesi", en: "Bahcelievler Anatolian High School" },
    "zaman_lise_bolum": { tr: "Lise Eğitimi", en: "High School Education" },

    // Yetenekler
    "yetenekler_baslik": { tr: "Yetenekler & Araçlar", en: "Skills & Tools" },
    "yetenek_programlama": { tr: "Programlama", en: "Programming" },
    "yetenek_odak": { tr: "Odak Alanları", en: "Focus Areas" },
    "yetenek_teknoloji": { tr: "Teknolojiler", en: "Technologies" },

    // Sertifikalar
    "sertifika_baslik": { tr: "Sertifikalar & Başarılar", en: "Certificates & Achievements" },
    "cert_1": { tr: "BTK Akademi - Siber Güvenliğe Giriş", en: "BTK Academy - Intro to Cyber Security" },
    "cert_2": { tr: "TryHackMe - Temel Zafiyet Analizi", en: "TryHackMe - Basic Vulnerability Analysis" },
    "cert_3": { tr: "Udemy - İleri Seviye Python", en: "Udemy - Advanced Python" },

    // Projeler
    "projeler_baslik": { tr: "Projelerim", en: "My Projects" },
    "proje1_baslik": { tr: "Zafiyet Tarama Aracı", en: "Vulnerability Scanner Tool" },
    "proje1_metin": { tr: "Ağ üzerindeki temel güvenlik açıklarını tespit eden, Python tabanlı hafif bir tarama otomasyon aracı.", en: "A Python-based lightweight automation tool that detects basic network security vulnerabilities." },
    "proje2_baslik": { tr: "Görüntü İşleme ile Nesne Takibi", en: "Object Tracking with Image Processing" },
    "proje2_metin": { tr: "Kamera üzerinden gerçek zamanlı renk ve nesne tespiti yaparak koordinat takibi sağlayan yazılım.", en: "Software that tracks coordinates by performing real-time color and object detection via camera." },
    "btn_github": { tr: "Kaynak Kod", en: "Source Code" },

    // İletişim
    "iletisim_baslik": { tr: "Bana Ulaşın", en: "Contact Me" },
    "form_isim": { tr: "İsim Soyisim", en: "Full Name" },
    "form_eposta": { tr: "E-posta Adresiniz", en: "Email Address" },
    "form_konu": { tr: "Konu", en: "Subject" },
    "form_mesaj": { tr: "Mesajınız...", en: "Your Message..." },
    "form_gonder": { tr: "Mesaj Gönder", en: "Send Message" }
};

/* =========================================
   1. TEMA DEĞİŞTİRME
========================================= */
const themeBtn = document.getElementById('theme-btn');
const htmlEl = document.documentElement;
let isDark = true;

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        isDark = !isDark;
        if (isDark) {
            htmlEl.setAttribute('data-theme', 'dark');
            themeBtn.textContent = '☀️';
        } else {
            htmlEl.setAttribute('data-theme', 'light');
            themeBtn.textContent = '🌙';
        }
    });
}

/* =========================================
   2. DİL DEĞİŞTİRME
========================================= */
const langBtn = document.getElementById('lang-btn');
let currentLang = 'tr';
const textElements = document.querySelectorAll('.lang-text');
const placeholderElements = document.querySelectorAll('.lang-placeholder');

if (langBtn) {
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        langBtn.textContent = currentLang === 'tr' ? 'EN' : 'TR';

        textElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (sozluk[key]) {
                el.textContent = sozluk[key][currentLang];
            }
        });

        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (sozluk[key]) {
                el.setAttribute('placeholder', sozluk[key][currentLang]);
            }
        });
    });
}

/* =========================================
   3. SİNEMATİK KARA DELİK
========================================= */
function initProBlackhole() {
    const canvas = document.getElementById('blackhole-canvas');
    if (!canvas) return;
    
    const context = canvas.getContext("2d");
    const parent = canvas.parentElement; 
    let w, h, cw, ch, centerx, centery, maxorbit;
    let stars = [];
    let isSucking = false; 
    
    setInterval(() => { isSucking = !isSucking; }, 5000);

    function resizeCanvas() {
        w = parent.clientWidth;
        h = parent.clientHeight;
        canvas.width = w;
        canvas.height = h;
        cw = w;
        ch = h;
        centerx = cw / 2;
        centery = ch / 2;
        maxorbit = Math.max(cw, ch) / 1.2; 
        
        const dpi = window.devicePixelRatio || 1;
        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = Math.ceil(w * dpi);
        canvas.height = Math.ceil(h * dpi);
        context.scale(dpi, dpi);
        stars.forEach(star => { star.prevX = null; star.prevY = null; });
    }

    class Star {
        constructor() { this.init(); }
        init() {
            this.baseRadius = Math.pow(Math.random(), 1.5) * maxorbit;
            this.currentRadius = this.baseRadius;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = (Math.random() * 0.002 + 0.001) + (0.5 / (this.baseRadius + 100));
            this.prevX = null; this.prevY = null;
            this.opacityModifier = Math.random() * 0.6 + 0.4;
        }
        update() {
            this.angle += this.speed;
            let targetRadius = isSucking ? (Math.random() * 20 + 5) : this.baseRadius;
            let ease = isSucking ? 0.05 : 0.03;
            this.currentRadius += (targetRadius - this.currentRadius) * ease;
            this.x = centerx + Math.cos(this.angle) * this.currentRadius;
            this.y = centery + Math.sin(this.angle) * this.currentRadius;
        }
        draw() {
            if (this.prevX === null || this.prevY === null) {
                this.prevX = this.x; this.prevY = this.y; return;
            }
            let distanceRatio = this.currentRadius / maxorbit;
            let opacity = Math.max(0.1, (1 - distanceRatio) * this.opacityModifier);
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            context.beginPath();
            context.strokeStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(15, 23, 42, ${opacity})`;
            context.lineWidth = 0.9; 
            context.moveTo(this.prevX, this.prevY);
            context.lineTo(this.x, this.y);
            context.stroke();
            this.prevX = this.x; this.prevY = this.y;
        }
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < 3000; i++) { stars.push(new Star()); }
    }

    function loop() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        context.fillStyle = isDark ? 'rgba(11, 15, 25, 0.22)' : 'rgba(248, 250, 252, 0.22)'; 
        context.fillRect(0, 0, cw, ch);
        for (let i = 0; i < stars.length; i++) {
            stars[i].update(); stars[i].draw(); 
        }
        requestAnimationFrame(loop);
    }
    resizeCanvas(); createStars(); loop();
    window.addEventListener('resize', resizeCanvas);
}
window.addEventListener('DOMContentLoaded', initProBlackhole);

/* =========================================
   4. CV ÖNİZLEME PENCERESİ (MODAL)
========================================= */
const cvModal = document.getElementById("cv-modal");
const openCvBtn = document.getElementById("open-cv-btn");
const closeCvBtn = document.querySelector(".close-cv-btn");

if(openCvBtn && cvModal && closeCvBtn) {
    openCvBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        cvModal.style.display = "flex";
    });
    closeCvBtn.addEventListener("click", () => { cvModal.style.display = "none"; });
    window.addEventListener("click", (e) => {
        if (e.target === cvModal) { cvModal.style.display = "none"; }
    });
}

/* =========================================
   5. SCROLL REVEAL (AŞAĞI KAYDIRDIKÇA BELİRME)
========================================= */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
            // Bir kere çalıştıktan sonra takibi bırakır (Sürekli yanıp sönmemesi için)
            observer.unobserve(entry.target); 
        }
    });
}, {
    root: null,
    threshold: 0.15, // Elemanın %15'i göründüğünde tetiklenir
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

/* =========================================
   6. YUKARI ÇIK BUTONU (SCROLL TO TOP)
========================================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    // 400px aşağı inildiğinde butonu göster
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

if(scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Yumuşak kaydırma
        });
    });
}