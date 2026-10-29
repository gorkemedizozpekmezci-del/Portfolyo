/* =========================================
   0. MERKEZİ SÖZLÜK (TR / EN)
========================================= */
const sozluk = {
    // Menü
    menu_hakkimda: { tr: "Hakkımda", en: "About" },
    menu_egitim: { tr: "Eğitim", en: "Education" },
    menu_yetenekler: { tr: "Yetenekler", en: "Skills" },
    menu_projeler: { tr: "Projeler", en: "Projects" },
    menu_iletisim: { tr: "İletişim", en: "Contact" },

    // Hero
    hero_durum: { tr: "Staj ve proje fırsatlarına açığım", en: "Open to internships and projects" },
    hero_rol: { tr: "Yazılım Mühendisliği Öğrencisi", en: "Software Engineering Student" },
    hero_ozet: {
        tr: "Siber güvenlik ve yapay zekâ odağında; fikirden çalışan ürüne kadar uçtan uca yazılım geliştiriyorum.",
        en: "Focused on cyber security and AI, I build software end to end, from idea to working product."
    },
    hero_proje_buton: { tr: "Projelerimi Gör", en: "View Projects" },
    hero_cv_buton: { tr: "Özgeçmiş", en: "Resume" },
    hero_konum: { tr: "İstanbul · Samsun, Türkiye", en: "Istanbul · Samsun, Türkiye" },

    // Hakkımda
    hakkimda_baslik: { tr: "Hakkımda", en: "About Me" },
    hakkimda_metin1: {
        tr: "Samsun Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Siber güvenliğe ilgi duyuyor; güvenlik açıkları, sistem güvenliği ve makine öğrenmesiyle tehdit tespiti üzerine çalışıyorum.",
        en: "I'm a 3rd-year Software Engineering student at Samsun University. I'm interested in cyber security and work on vulnerabilities, system security and machine-learning-based threat detection."
    },
    hakkimda_metin2: {
        tr: "Python, C/C# ve JavaScript ile makine öğrenmesi, görüntü işleme, masaüstü araçları ve canlıya alınmış web uygulamaları geliştirdim. Projelerimi GitHub'da açık kaynak olarak yayımlıyor, fikirden çalışan ürüne kadar uçtan uca geliştirmeyi seviyorum. Staj ve ekip projelerinde sorumluluk almaya hazırım.",
        en: "Using Python, C/C# and JavaScript, I've built machine learning, image processing and desktop tools as well as deployed web applications. I publish my projects as open source on GitHub and enjoy building end to end, from idea to working product. I'm ready to take responsibility in internships and team projects."
    },
    stat_sinif: { tr: "sınıf · Yazılım Müh.", en: "year · Software Eng." },
    stat_proje: { tr: "proje", en: "projects" },
    stat_dil: { tr: "programlama dili", en: "programming languages" },
    alan_siber: { tr: "Siber Güvenlik", en: "Cyber Security" },
    alan_ml: { tr: "Makine Öğrenmesi", en: "Machine Learning" },
    alan_goruntu: { tr: "Görüntü İşleme", en: "Image Processing" },
    alan_web: { tr: "Web Geliştirme", en: "Web Development" },
    alan_veri: { tr: "Veri Yapıları", en: "Data Structures" },

    // Eğitim
    egitim_baslik: { tr: "Eğitim & Aktiviteler", en: "Education & Activities" },
    uni_isim: { tr: "Samsun Üniversitesi", en: "Samsun University" },
    uni_tarih: { tr: "2022 – Devam ediyor", en: "2022 – Present" },
    uni_bolum: { tr: "Yazılım Mühendisliği · Lisans, 3. sınıf", en: "Software Engineering · B.Sc., 3rd year" },
    ders_1: { tr: "Algoritmalar ve Veri Yapıları", en: "Algorithms & Data Structures" },
    ders_2: { tr: "Nesne Yönelimli Programlama", en: "Object-Oriented Programming" },
    ders_3: { tr: "Yazılım Tasarımı ve Modelleme", en: "Software Design & Modeling" },
    ders_4: { tr: "Sayısal Görüntü İşleme", en: "Digital Image Processing" },
    lise_isim: { tr: "Bahçelievler Anadolu Lisesi", en: "Bahçelievler Anatolian High School" },
    kulup_baslik: { tr: "Kulüpler", en: "Clubs" },
    kulup_siber: { tr: "SAMÜ Siber Güvenlik Kulübü", en: "SAMÜ Cyber Security Club" },
    kulup_siber_tarih: { tr: "2026 – Devam ediyor", en: "2026 – Present" },
    kulup_muzik: { tr: "SAMÜ Müzik Kulübü", en: "SAMÜ Music Club" },
    diller_baslik: { tr: "Diller", en: "Languages" },
    dil_tr: { tr: "Türkçe", en: "Turkish" },
    dil_tr_seviye: { tr: "Ana dil", en: "Native" },
    dil_en: { tr: "İngilizce", en: "English" },

    // Yetenekler
    yetenekler_baslik: { tr: "Teknik Beceriler", en: "Technical Skills" },
    yetenek_programlama: { tr: "Programlama", en: "Programming" },
    yetenek_arac: { tr: "Kütüphane & Araçlar", en: "Libraries & Tools" },
    yetenek_alan: { tr: "Alanlar", en: "Fields" },
    yetenek_yetkinlik: { tr: "Yetkinlikler", en: "Soft Skills" },
    yetkinlik_1: { tr: "Ekip çalışması", en: "Teamwork" },
    yetkinlik_2: { tr: "İletişim", en: "Communication" },
    yetkinlik_3: { tr: "Analitik düşünme", en: "Analytical thinking" },
    yetkinlik_4: { tr: "Hızlı öğrenme", en: "Fast learning" },

    // Projeler
    projeler_baslik: { tr: "Öne Çıkan Projeler", en: "Featured Projects" },
    btn_kod: { tr: "Kaynak kod", en: "Source code" },
    tag_yz: { tr: "Yapay Zekâ", en: "AI" },
    tag_guvenlik: { tr: "Güvenlik", en: "Security" },

    p_yaninda_baslik: { tr: "Yanında", en: "Yanında" },
    p_yaninda_alt: { tr: "Yaşlılar için yapay zekâ destekli bakım ve güvenlik", en: "AI-powered care and safety for the elderly" },
    p_yaninda_1: {
        tr: "Telefon dolandırıcılığına karşı Türkçe kalıplarla açıklanabilir risk puanı üreten dolandırıcılık kalkanı.",
        en: "A fraud shield that produces an explainable risk score against phone scams using Turkish speech patterns."
    },
    p_yaninda_2: {
        tr: "Canlı deprem verisiyle 200 km içindeki depremde ebeveyne \"İyi misiniz?\" soran deprem modu.",
        en: "Earthquake mode that uses live data and asks the parent \"Are you okay?\" after any quake within 200 km."
    },
    p_yaninda_3: { tr: "Türkçe sesli asistan ve aile paneli.", en: "Turkish voice assistant and family dashboard." },

    p_ceviri_baslik: { tr: "Ekran Çeviri Asistanı", en: "Screen Translation Assistant" },
    p_ceviri_alt: { tr: "Ekrandaki metni OCR ile okuyup anlık çeviren masaüstü aracı", en: "Desktop tool that reads on-screen text via OCR and translates it instantly" },
    p_ceviri_1: {
        tr: "Oyunlar ve yabancı dildeki uygulamalar için seçilen ekran bölgesini okur, çevirir ve sesli okur.",
        en: "Reads, translates and speaks a selected screen region, for games and foreign-language apps."
    },
    p_ceviri_2: {
        tr: "3 katmanlı çeviri motoru: internetsiz çalışan NLLB-200, Gemini AI ve hızlı yedek motor.",
        en: "3-tier translation engine: offline NLLB-200, Gemini AI and a fast fallback engine."
    },
    p_ceviri_3: { tr: "F8–F11 global kısayolları.", en: "F8–F11 global hotkeys." },

    p_kavira_baslik: { tr: "Kavira Mobilya", en: "Kavira Mobilya" },
    p_kavira_etiket: { tr: "Canlı ürün", en: "Live product" },
    p_kavira_alt: { tr: "Mobilya atölyeleri için maliyet hesaplama ve kesim planı yazılımı", en: "Costing and cutting-plan software for furniture workshops" },
    p_kavira_1: {
        tr: "Ölçüleri girilen 41 farklı model (dolap, yatak, koltuk, masa...) parçalara ayrılır; maliyet kalem kalem hesaplanır.",
        en: "41 models (wardrobes, beds, sofas, tables...) are broken into parts from the entered dimensions, with an itemized cost breakdown."
    },
    p_kavira_2: {
        tr: "Parçalar gerçek plaka ölçüsüne yerleştirilir; kesim planı, fire hesabı ve aksesuar listesi otomatik çıkar, daha az plakayla üretim için öneriler sunulur.",
        en: "Parts are nested onto real sheet sizes; cutting plans, waste and hardware lists are generated automatically, with suggestions to use fewer sheets."
    },
    p_kavira_3: {
        tr: "3D önizleme, iç bölme editörü ve müşteriye gönderilebilen teklif çıktısı.",
        en: "3D preview, interior layout editor and customer-ready quotes."
    },
    tag_maliyet: { tr: "Maliyet hesabı", en: "Cost calculation" },
    tag_kesim: { tr: "Kesim optimizasyonu", en: "Cut optimization" },
    tag_3d: { tr: "3D önizleme", en: "3D preview" },
    btn_site: { tr: "Siteyi ziyaret et", en: "Visit website" },

    p_lumocity_baslik: { tr: "Lumocity", en: "Lumocity" },
    p_lumocity_alt: { tr: "Beyin antrenmanı sitesi", en: "Brain training website" },
    p_lumocity_1: { tr: "Lumosity'den esinlenen 29 beyin oyunu.", en: "29 brain games inspired by Lumosity." },
    p_lumocity_2: { tr: "Beyin haritası ve üyelik/profil sistemi.", en: "Brain map and membership/profile system." },
    p_lumocity_3: { tr: "Saf HTML/CSS/JS, kurulum gerektirmez.", en: "Pure HTML/CSS/JS, no installation needed." },

    diger_baslik: { tr: "Diğer Projeler", en: "Other Projects" },
    p_anova: {
        tr: "G*Power ANOVA motorunun Ghidra ile tersine mühendislik yapılarak sıfırdan yazılmış CLI ve MCP sunucusu.",
        en: "Clean-room CLI and MCP server reimplementing the G*Power ANOVA engine, reverse-engineered with Ghidra."
    },
    p_seprimer: {
        tr: "Sokratik yapay zekâ eğitmenli interaktif yazılım mühendisliği kitabı; Cypress ile test edildi.",
        en: "Interactive software engineering book with a Socratic AI tutor, tested with Cypress."
    },
    p_kacak_baslik: { tr: "Kaçak Yapı Tespiti", en: "Illegal Construction Detection" },
    p_kacak: {
        tr: "Python, OpenCV ve Roboflow ile ormanlık alanlarda kaçak yapıları tespit eden görüntü işleme sistemi.",
        en: "Image processing system that detects illegal structures in forest areas using Python, OpenCV and Roboflow."
    },
    p_oyun_baslik: { tr: "Oyun Pazarı", en: "Game Market" },
    p_oyun: {
        tr: "Python ve SQL ile oyunlar için sanal para satın alma sistemi (Programlama-2).",
        en: "In-game currency purchase system built with Python and SQL (Programming II)."
    },
    p_school: {
        tr: "API ile öğrenci kaydı tutan ve sınav başarı sıralaması çıkaran öğrenci bilgi sistemi (OOP).",
        en: "Student information system that stores records via an API and ranks exam results (OOP)."
    },
    p_pis: {
        tr: "Projeleri kaydeden, bütçe atayan ve silen API tabanlı proje bilgi sistemi (Yazılım Tasarımı).",
        en: "API-based project information system to create, budget and delete projects (Software Design)."
    },
    btn_tum_projeler: { tr: "Tüm projeler GitHub'da", en: "All projects on GitHub" },

    // İletişim
    iletisim_baslik: { tr: "İletişim", en: "Contact" },
    iletisim_metin: {
        tr: "Staj, ekip projesi ya da sadece tanışmak için yazabilirsiniz. En kısa sürede dönüş yaparım.",
        en: "Reach out about internships, team projects or just to say hi. I'll get back to you as soon as possible."
    },
    iletisim_eposta: { tr: "E-posta", en: "Email" },
    form_isim: { tr: "İsim Soyisim", en: "Full name" },
    form_eposta: { tr: "E-posta adresiniz", en: "Your email" },
    form_konu: { tr: "Konu", en: "Subject" },
    form_mesaj: { tr: "Mesajınız...", en: "Your message..." },
    form_gonder: { tr: "Mesaj Gönder", en: "Send Message" },

    // Modal
    modal_cv_baslik: { tr: "Özgeçmişim", en: "My Resume" },
    modal_indir_buton: { tr: "İndir", en: "Download" }
};

// Hero'da dönen ilgi alanları
const roller = {
    tr: ["Siber Güvenlik", "Makine Öğrenmesi", "Görüntü İşleme", "Web Geliştirme"],
    en: ["Cyber Security", "Machine Learning", "Image Processing", "Web Development"]
};

// Tarayıcı depolaması (gizli sekmede hata verebilir, bu yüzden try/catch)
const depo = {
    al(anahtar) { try { return localStorage.getItem(anahtar); } catch (e) { return null; } },
    yaz(anahtar, deger) { try { localStorage.setItem(anahtar, deger); } catch (e) {} }
};

const htmlEl = document.documentElement;
const hareketAzalt = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================
   1. TEMA DEĞİŞTİRME
========================================= */
const themeBtn = document.getElementById('theme-btn');

function temaUygula(tema) {
    htmlEl.setAttribute('data-theme', tema);
    themeBtn.innerHTML = tema === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}
temaUygula(htmlEl.getAttribute('data-theme') || 'dark');

themeBtn.addEventListener('click', () => {
    const yeni = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    temaUygula(yeni);
    depo.yaz('theme', yeni);
});

/* =========================================
   2. DİL DEĞİŞTİRME
========================================= */
const langBtn = document.getElementById('lang-btn');
let currentLang = depo.al('lang') === 'en' ? 'en' : 'tr';

function dilUygula(dil) {
    currentLang = dil;
    htmlEl.setAttribute('lang', dil);
    langBtn.textContent = dil === 'tr' ? 'EN' : 'TR';

    document.querySelectorAll('.lang-text').forEach(el => {
        const metin = sozluk[el.dataset.key];
        if (metin) el.textContent = metin[dil];
    });
    document.querySelectorAll('.lang-placeholder').forEach(el => {
        const metin = sozluk[el.dataset.key];
        if (metin) el.setAttribute('placeholder', metin[dil]);
    });
}
if (currentLang === 'en') dilUygula('en');

langBtn.addEventListener('click', () => {
    const yeni = currentLang === 'tr' ? 'en' : 'tr';
    dilUygula(yeni);
    depo.yaz('lang', yeni);
});

/* =========================================
   3. DAKTİLO EFEKTİ (dönen ilgi alanları)
========================================= */
(function daktilo() {
    const hedef = document.getElementById('typed-text');
    if (!hedef) return;

    if (hareketAzalt) {
        hedef.textContent = roller[currentLang][0];
        return;
    }

    let rolNo = 0, harf = 0, siliniyor = false;
    function adim() {
        const kelime = roller[currentLang][rolNo % roller[currentLang].length];
        harf += siliniyor ? -1 : 1;
        hedef.textContent = kelime.slice(0, harf);

        let bekle = siliniyor ? 45 : 90;
        if (!siliniyor && harf === kelime.length) { bekle = 1600; siliniyor = true; }
        else if (siliniyor && harf === 0) { siliniyor = false; rolNo++; bekle = 300; }
        setTimeout(adim, bekle);
    }
    adim();
})();

/* =========================================
   4. NAVBAR: MOBİL MENÜ, KAYDIRMA, AKTİF LİNK
========================================= */
const header = document.getElementById('site-header');
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

function menuKapat() {
    navLinks.classList.remove('open');
    header.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
}
menuBtn.addEventListener('click', () => {
    const acik = navLinks.classList.toggle('open');
    header.classList.toggle('menu-open', acik);
    menuBtn.setAttribute('aria-expanded', String(acik));
    menuBtn.innerHTML = acik ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', menuKapat));

const scrollTopBtn = document.getElementById('scrollTopBtn');
function kaydirmaKontrol() {
    header.classList.toggle('scrolled', window.scrollY > 20);
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
}
window.addEventListener('scroll', kaydirmaKontrol, { passive: true });
kaydirmaKontrol();
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Ekranda görünen bölümün menü linkini vurgula
const menuLinkleri = [...navLinks.querySelectorAll('a')];
const bolumGozlemci = new IntersectionObserver(girdiler => {
    girdiler.forEach(g => {
        if (g.isIntersecting) {
            menuLinkleri.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + g.target.id));
        }
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => bolumGozlemci.observe(s));

/* =========================================
   5. SİNEMATİK KARA DELİK (arka plan animasyonu)
========================================= */
function initProBlackhole() {
    const canvas = document.getElementById('blackhole-canvas');
    if (!canvas || hareketAzalt) return;

    const context = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let cw, ch, centerx, centery, maxorbit;
    let stars = [];
    let isSucking = false;
    let gorunur = true;

    setInterval(() => { isSucking = !isSucking; }, 5000);

    function resizeCanvas() {
        cw = parent.clientWidth;
        ch = parent.clientHeight;
        // Masaüstünde kara delik sağda dursun, yazıların üstüne binmesin
        centerx = cw > 960 ? cw * 0.72 : cw / 2;
        centery = ch / 2;
        maxorbit = Math.max(cw, ch) / 1.2;

        const dpi = window.devicePixelRatio || 1;
        canvas.width = Math.ceil(cw * dpi);
        canvas.height = Math.ceil(ch * dpi);
        context.setTransform(dpi, 0, 0, dpi, 0, 0);   // ölçek her yeniden boyutlandırmada birikmesin
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
            const targetRadius = isSucking ? (Math.random() * 20 + 5) : this.baseRadius;
            const ease = isSucking ? 0.05 : 0.03;
            this.currentRadius += (targetRadius - this.currentRadius) * ease;
            this.x = centerx + Math.cos(this.angle) * this.currentRadius;
            this.y = centery + Math.sin(this.angle) * this.currentRadius;
        }
        draw(isDark) {
            if (this.prevX === null) { this.prevX = this.x; this.prevY = this.y; return; }
            const opacity = Math.max(0.1, (1 - this.currentRadius / maxorbit) * this.opacityModifier);
            context.beginPath();
            context.strokeStyle = isDark ? `rgba(186, 230, 253, ${opacity})` : `rgba(15, 23, 42, ${opacity})`;
            context.lineWidth = 0.9;
            context.moveTo(this.prevX, this.prevY);
            context.lineTo(this.x, this.y);
            context.stroke();
            this.prevX = this.x; this.prevY = this.y;
        }
    }

    function createStars() {
        // Telefonlarda daha az yıldız: animasyon akıcı kalsın, pil bitmesin
        const adet = window.innerWidth < 768 ? 1200 : 2600;
        stars = [];
        for (let i = 0; i < adet; i++) stars.push(new Star());
    }

    function loop() {
        if (gorunur) {
            const isDark = htmlEl.getAttribute('data-theme') === 'dark';
            context.fillStyle = isDark ? 'rgba(7, 11, 20, 0.22)' : 'rgba(246, 248, 252, 0.22)';
            context.fillRect(0, 0, cw, ch);
            for (let i = 0; i < stars.length; i++) { stars[i].update(); stars[i].draw(isDark); }
        }
        requestAnimationFrame(loop);
    }

    // Hero ekrandan çıkınca çizimi durdur (gereksiz işlemci kullanımını önler)
    new IntersectionObserver(g => { gorunur = g[0].isIntersecting; }).observe(parent);

    resizeCanvas(); createStars(); loop();
    window.addEventListener('resize', resizeCanvas);
}
window.addEventListener('DOMContentLoaded', initProBlackhole);

/* =========================================
   6. CV ÖNİZLEME PENCERESİ
========================================= */
const cvModal = document.getElementById('cv-modal');
document.getElementById('open-cv-btn').addEventListener('click', e => {
    e.preventDefault();
    cvModal.classList.add('open');
});
function cvKapat() { cvModal.classList.remove('open'); }
document.querySelector('.close-cv-btn').addEventListener('click', cvKapat);
cvModal.addEventListener('click', e => { if (e.target === cvModal) cvKapat(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { cvKapat(); menuKapat(); } });

/* =========================================
   7. KAYDIRDIKÇA BELİRME
========================================= */
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* =========================================
   8. FOOTER YILI
========================================= */
document.getElementById('year').textContent = new Date().getFullYear();
