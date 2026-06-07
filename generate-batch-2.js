const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

// Salons & Dental Clinics Database
const batch2 = [
  // SALONS (4)
  {
    slug: 'luxe-look-salon', name: 'Luxe Look Salon', shortName: 'LuxeLook',
    tagline: 'Where Beauty Meets Luxury.', subtitle: "Vesu's premier beauty destination. Expert stylists, premium products, and an experience that makes you feel like royalty.",
    rating: 4.9, reviews: 1007, phone: '+919328795883', waNum: '919328795883',
    address: 'SNS Arista, G-4, Vesu, Surat, Gujarat 395007',
    addressShort: 'Vesu, Surat 395007',
    style: 'salon-magazine',
    theme: '#D4A574' // Champagne Rose Gold
  },
  {
    slug: 'coco-head-unisex-salon', name: 'Coco Head Unisex Salon', shortName: 'CocoHead',
    tagline: 'Style That Speaks Volumes.', subtitle: "Bharthana's trendiest unisex salon. Contemporary styling, expert cuts, and beauty services that define modern elegance.",
    rating: 4.8, reviews: 397, phone: '+919756257392', waNum: '919756257392',
    address: '1st floor, Atlanta Business Hub, UG-15, VIP Rd, Bharthana, Surat 395007',
    addressShort: 'Bharthana, Surat 395007',
    style: 'salon-modern-dark',
    theme: '#ff4757' // Neon Coral Red
  },
  {
    slug: 'hair-avenue-unisex-salon', name: 'Hair Avenue Unisex Salon', shortName: 'HairAvenue',
    tagline: 'Your Avenue to Perfect Hair.', subtitle: "Vesu's favorite neighborhood salon. Expert hair care, stunning transformations, and a welcoming vibe that keeps you coming back.",
    rating: 4.9, reviews: 288, phone: '+916353644596', waNum: '916353644596',
    address: 'G-16 SUKUM PLATINUM, beside Gangour, Vesu, Surat 395007',
    addressShort: 'Vesu, Surat 395007',
    style: 'salon-glassmorphism',
    theme: '#a29bfe' // Soft Violet
  },
  {
    slug: 'signature-unisex-salon', name: 'Signature Unisex Salon', shortName: 'SignatureSalon',
    tagline: 'Leave Your Signature Look.', subtitle: "City Light's most trusted unisex salon. Expert grooming, premium products, and a style that's uniquely yours.",
    rating: 4.9, reviews: 184, phone: '+917600141016', waNum: '917600141016',
    address: 'Shop No. U-11, Shubhlaxmi Complex, City Light Rd, Athwa, Surat 395007',
    addressShort: 'City Light, Surat 395007',
    style: 'salon-editorial',
    theme: '#2d3436' // Editorial Slate Chic
  },
  // DENTAL (3)
  {
    slug: 'dent-n-gum-dental', name: "Dent 'N' Gum Dental Clinic", shortName: 'DentNGum',
    tagline: 'Smile With Confidence.', subtitle: "Dr. Akshat Sharma's expert dental clinic in Vijay Nagar, Indore. Advanced treatments, gentle care, and beautiful smiles.",
    rating: 4.9, reviews: 361, phone: '+919873063208', waNum: '919873063208',
    address: '1st Floor, 344 A, Near Mahalaxmi Gate, opp. Bombay Hospital, Vijay Nagar, Indore 452010',
    addressShort: 'Vijay Nagar, Indore 452010',
    style: 'dental-clean',
    theme: '#4ECDC4' // Clean Mint
  },
  {
    slug: 'dr-bhatias-dental', name: "Dr. Bhatia's Dento Facial Square", shortName: 'DrBhatia',
    tagline: 'Advanced Dental & Facial Care.', subtitle: "Multi-specialty dental, cosmetic & ENT center on A.B. Road, Indore. Comprehensive care under one roof with expert specialists.",
    rating: 4.7, reviews: 275, phone: '+917313565839', waNum: '917313565839',
    address: '103 First Floor Pearl Business Park, Bhawarkuan, A.B Road, Indore 452014',
    addressShort: 'Bhawarkuan, Indore 452014',
    style: 'dental-hero-focused',
    theme: '#0984e3' // Navy Trust
  },
  {
    slug: 'dr-desais-dental', name: "Dr. Desai's Multispeciality Dental Clinic", shortName: 'DrDesai',
    tagline: 'Expert Dental Care. Beautiful Smiles.', subtitle: "Ashok Nagar's trusted dental clinic for implants, braces, and complete dental solutions. Where expertise meets compassion.",
    rating: 4.9, reviews: 184, phone: '+919713907140', waNum: '919713907140',
    address: '40, Sahid Bhagat Singh Society, Sapna Sangeeta Rd, Sapna Sangeeta, Ashok Nagar, Indore 452001',
    addressShort: 'Ashok Nagar, Indore 452001',
    style: 'dental-split',
    theme: '#00cec9' // Bright Aqua
  }
];

const waSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366"/></svg>`;

const commonMap = (address) => `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed" width="100%" height="300" style="border:0; border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>`;

const generators = {

  // 1. SALON: MAGAZINE STYLE
  'salon-magazine': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Luxury Beauty Salon Surat</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- ELEGANT TOP BAR -->
  <div class="elegant-alert-strip">
    ✦ EXCLUSIVE VESU ANNOUNCEMENT: BOOK ONLINE & SECURE A COMPLIMENTARY HAIR SPA TREAT ✦
  </div>

  <div class="magazine-layout">
    <header class="header">
      <div class="logo">${biz.name}</div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why">Philosophy</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Locate</a>
      </nav>
      <a href="tel:${biz.phone}" class="mag-btn-top">BOOK NOW</a>
    </header>

    <section class="hero" id="home">
      <div class="hero-img"><img src="assets/hero.png" alt="Salon Premium Decor"></div>
      <div class="hero-card">
        <div class="ratings">★ ${biz.rating} rating | ${biz.reviews} reviews</div>
        <h1>${biz.tagline}</h1>
        <p class="sub"><em>${biz.subtitle}</em></p>
        <div class="actions">
          <a href="tel:${biz.phone}" class="mag-btn">Call Now</a>
          <a href="https://wa.me/${biz.waNum}" class="mag-btn outline">WhatsApp</a>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="magazine-grid">
        <div class="grid-title">
          <h2>THE ESSENCE OF BEAUTY</h2>
        </div>
        <div class="grid-content">
          <p>Luxe Look Salon is Vesu's premier beauty house. Our team of stylists combine international hair care techniques with premium organic therapies to create a look that is customized, fresh, and uniquely yours.</p>
          <div class="stats-row">
            <div><h4>1007+</h4><span>Clients Happy</span></div>
            <div><h4>8+</h4><span>Senior Stylists</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <h2 class="sec-center-title">CURATED SERVICES</h2>
      <div class="services-list">
        <div class="service-item">
          <div>
            <h3>Creative Haircuts & Styling</h3>
            <p>Signature cuts, blowouts, and advanced structural layers.</p>
          </div>
          <span>From ₹800</span>
        </div>
        <div class="service-item">
          <div>
            <h3>Global Coloring & Balayage</h3>
            <p>Premium ammonia-free shades customized for your tone.</p>
          </div>
          <span>From ₹3,500</span>
        </div>
        <div class="service-item">
          <div>
            <h3>Luxury Hair Spa & Keratin</h3>
            <p>Deep hydration therapies and structural protein reconstructions.</p>
          </div>
          <span>From ₹2,000</span>
        </div>
      </div>
    </section>

    <section class="why" id="why">
      <div class="magazine-grid">
        <div class="grid-title">
          <h2>THE PROTOCOLS</h2>
        </div>
        <div class="grid-content">
          <ul>
            <li>✦ <strong>Premium Cosmetics:</strong> We use only imported, certified hair care ranges.</li>
            <li>✦ <strong>Sanitary Stations:</strong> Every tool is sanitized in autoclave setups before use.</li>
            <li>✦ <strong>Strategic Advice:</strong> We don't just styling; we guide you on hair home health.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="reviews" id="reviews">
      <h2 class="sec-center-title">CLIENT VOICES</h2>
      <div class="testimonials">
        <blockquote>"Stunning environment. They completely transformed my damaged curls. The staff behaves like family."</blockquote>
        <cite>— Riddhi Patel</cite>
      </div>
    </section>

    <section class="contact" id="contact">
      <h2 class="sec-center-title">THE LOCATION</h2>
      <p class="addr-text">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>
  </div>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Managed with elegance.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Lato', sans-serif; background: #faf8f5; color: #333; }
html { scroll-behavior: smooth; }
.elegant-alert-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; }

.magazine-layout { max-width: 1200px; margin: 0 auto; padding: 20px 40px; }

header.header { display: flex; justify-content: space-between; align-items: center; padding: 30px 0; border-bottom: 1px solid #e0dcd5; margin-bottom: 40px; }
.logo { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: ${biz.theme}; }
.nav a { text-decoration: none; font-weight: 700; color: #333; letter-spacing: 1.5px; font-size: 0.85rem; margin-left: 20px; text-transform: uppercase; transition: 0.2s; }
.nav a:hover { color: ${biz.theme}; }
.mag-btn-top { border: 1px solid #333; color: #333; text-decoration: none; padding: 10px 20px; font-weight: 700; font-size: 0.8rem; letter-spacing: 1.5px; }

.hero { position: relative; display: flex; justify-content: flex-end; margin-bottom: 100px; }
.hero-img { width: 70%; height: 75vh; }
.hero-img img { width: 100%; height: 100%; object-fit: cover; filter: sepia(0.05); }
.hero-card { position: absolute; left: 0; top: 15%; background: #fff; padding: 60px; width: 45%; box-shadow: 0 20px 40px rgba(0,0,0,0.03); border: 1px solid #f0ebe1; }
h1 { font-family: 'Playfair Display', serif; font-size: 3.2rem; margin: 0 0 20px 0; line-height: 1.1; color: #111; }
.sub { font-size: 1.15rem; color: #666; margin-bottom: 30px; line-height: 1.6; }
.ratings { font-family: 'Playfair Display', serif; color: ${biz.theme}; font-size: 1.1rem; margin-bottom: 25px; font-style: italic; }
.actions { display: flex; gap: 15px; }
.mag-btn { display: inline-block; background: ${biz.theme}; color: #fff; padding: 15px 30px; text-decoration: none; letter-spacing: 1.5px; text-transform: uppercase; font-size: 0.85rem; transition: background 0.3s; border: none; font-weight: 700; }
.mag-btn.outline { background: transparent; border: 1px solid #333; color: #333; }
.mag-btn:hover { background: #111; color: #fff; }

section { padding: 80px 0; border-bottom: 1px solid #e0dcd5; }
.magazine-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; }
.grid-title h2 { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 400; line-height: 1.2; }
.grid-content p { font-size: 1.2rem; line-height: 1.7; color: #555; margin-bottom: 30px; }
.stats-row { display: flex; gap: 40px; }
.stats-row h4 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: ${biz.theme}; }
.stats-row span { font-size: 0.85rem; color: #888; text-transform: uppercase; }

.sec-center-title { text-align: center; font-family: 'Playfair Display', serif; font-size: 2.2rem; margin-bottom: 50px; font-weight: 400; }
.services-list { max-width: 800px; margin: 0 auto; }
.service-item { display: flex; justify-content: space-between; align-items: center; padding: 25px 0; border-bottom: 1px solid #eae1d4; }
.service-item h3 { font-family: 'Playfair Display', serif; font-size: 1.3rem; margin-bottom: 8px; }
.service-item p { font-size: 0.95rem; color: #666; }
.service-item span { font-family: 'Playfair Display', serif; font-size: 1.15rem; color: ${biz.theme}; font-weight: 700; }

.grid-content ul { list-style: none; }
.grid-content li { font-size: 1.1rem; margin-bottom: 15px; color: #555; }
.grid-content li strong { color: #111; }

.testimonials { text-align: center; max-width: 800px; margin: 0 auto; }
blockquote { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-style: italic; margin-bottom: 20px; line-height: 1.5; color: #111; }
cite { font-style: normal; font-weight: 700; color: ${biz.theme}; }

.addr-text { text-align: center; margin-bottom: 30px; font-size: 1.15rem; color: #888; }
.map-wrap { border: 1px solid #e0dcd5; overflow: hidden; border-radius: 12px; }

.footer { background: #f0ebe1; padding: 60px 20px; text-align: center; border-top: 1px solid #e0dcd5; color: #666; font-size: 0.85rem; }

.wa-float { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .hero { flex-direction: column; height: auto; margin-bottom: 40px; }
  .hero-img { width: 100%; height: 40vh; }
  .hero-card { position: static; width: 100%; padding: 40px 20px; }
  h1 { font-size: 2.2rem; }
  .magazine-grid { grid-template-columns: 1fr; }
  .nav { display: none; }
}
`;
    return { html, css };
  },

  // 2. SALON: MODERN DARK
  'salon-modern-dark': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Modern Styling Surat</title>
  <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- NEON FLASH PROMO -->
  <div class="neon-flash-promo">
    ⚡ VIP CORAL OFFER: COMPLIMENTARY BEARD SHAPING OR FACIAL DETOX WITH HAIR COLORING 
  </div>

  <div class="dark-wrapper">
    <nav class="sync-nav">
      <div class="logo">${biz.name}</div>
      <div class="nav-links">
        <a href="#about">Philosophy</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Locate</a>
      </div>
      <a href="tel:${biz.phone}" class="contact-link">Inquire</a>
    </nav>

    <div class="hero-area" id="home">
      <div class="hero-bg"><img src="assets/hero.png" alt="Sleek Salon Setup"></div>
      <div class="hero-content">
        <div class="outline-text">STYLE.</div>
        <h1>${biz.tagline}</h1>
        <p>${biz.subtitle}</p>
        <div class="review-box">
          <span class="star">★ ${biz.rating}</span>
          <span class="count">${biz.reviews} Google Feedback Reviews</span>
        </div>
        <div class="actions">
          <a href="tel:${biz.phone}" class="action-btn">Book Call Now</a>
          <a href="https://wa.me/${biz.waNum}" class="action-btn outline">WhatsApp</a>
        </div>
      </div>
    </div>

    <section class="about-section container" id="about">
      <div class="outline-title">ABOUT</div>
      <h2>THE MODERN IDENTITY</h2>
      <p class="lead-text">Coco Head Unisex Salon is VIP Road's trendiest house of hair styling. We reject generic templates. Every cut, tint, and reconstructive scalp session is mapped after personal structural assessment.</p>
      <div class="stats-row">
        <div class="stat-unit"><h3>397+</h3><span>Active Reviews</span></div>
        <div class="stat-unit"><h3>2025</h3><span>Modern Standard</span></div>
      </div>
    </section>

    <section class="services-section container" id="services">
      <div class="outline-title">SERVICES</div>
      <h2>THE PROTOCOLS</h2>
      <div class="services-grid">
        <div class="svc-card">
          <h3>Contemporary Hair Cuts</h3>
          <p>Creative layer design, texturizing, beard shaping, and global trends.</p>
        </div>
        <div class="svc-card">
          <h3>Vibrant Tint Colors</h3>
          <p>High-spec coloring ranges, highlighting, and customized balayage mapping.</p>
        </div>
        <div class="svc-card">
          <h3>Complete Body Glow</h3>
          <p>Organic facial detoxes, pedicure sessions, and structural skin care.</p>
        </div>
      </div>
    </section>

    <section class="why-section container" id="why">
      <div class="outline-title">CODE</div>
      <h2>WHY MEMBERS SIGN</h2>
      <ul class="why-list">
        <li>👉 <strong>Syncopate Vibe:</strong> Energetic and upscale atmosphere.</li>
        <li>👉 <strong>Hygienic Tools:</strong> Sealed packets opened before styling sessions.</li>
        <li>👉 <strong>Certified Stylists:</strong> Experienced with global trends.</li>
      </ul>
    </section>

    <section class="reviews-section container" id="reviews">
      <div class="outline-title">REVIEWS</div>
      <h2>MEMBER TESTIMONIALS</h2>
      <div class="review-box-inner">
        <blockquote>"Surat's trendiest hair studio. Outlined, raw design, outstanding styling crew, and great music vibe."</blockquote>
        <span>— Rohit S.</span>
      </div>
    </section>

    <section class="contact-section container" id="contact">
      <div class="outline-title">GRID</div>
      <h2>THE LOCATION</h2>
      <p class="addr-text">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>
  </div>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Outlined with style.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-coral" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Inter', sans-serif; background: #050505; color: #fff; }
html { scroll-behavior: smooth; }
.neon-flash-promo { background: #ff4757; color: #fff; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px; }

.dark-wrapper { display: flex; flex-direction: column; }

nav.sync-nav { display: flex; justify-content: space-between; align-items: center; padding: 30px 50px; position: sticky; top: 0; background: rgba(5,5,5,0.9); backdrop-filter: blur(10px); z-index: 100; border-bottom: 1px solid #111; }
.logo { font-family: 'Syncopate', sans-serif; font-weight: 700; font-size: 1.1rem; letter-spacing: 2px; color: ${biz.theme}; }
.nav-links a { color: #888; text-decoration: none; text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.8rem; margin-left: 20px; transition: 0.3s; }
.nav-links a:hover { color: #fff; }
.contact-link { color: #fff; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; border: 1px solid #fff; padding: 8px 16px; font-size: 0.8rem; }

.hero-area { position: relative; height: 90vh; display: flex; align-items: center; padding: 0 50px; }
.hero-bg { position: absolute; inset: 0; opacity: 0.35; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.2); }
.hero-content { position: relative; z-index: 1; max-width: 850px; }
.outline-text { font-family: 'Syncopate', sans-serif; font-size: 5rem; font-weight: 700; -webkit-text-stroke: 2px rgba(255,255,255,0.1); color: transparent; line-height: 0.8; margin-bottom: 20px; }
.hero-content h1 { font-family: 'Syncopate', sans-serif; font-size: 3rem; line-height: 1.2; margin: 0 0 25px 0; font-weight: 700; }
.hero-content p { font-size: 1.25rem; color: #ccc; max-width: 600px; line-height: 1.6; margin-bottom: 30px; }
.review-box { display: flex; gap: 20px; align-items: center; margin-bottom: 40px; }
.star { color: ${biz.theme}; font-weight: 700; font-size: 1.4rem; }
.count { color: #888; font-size: 0.9rem; }
.actions { display: flex; gap: 15px; }
.action-btn { display: inline-block; border: 2px solid #fff; color: #fff; padding: 18px 36px; text-decoration: none; text-transform: uppercase; letter-spacing: 2px; font-size: 0.85rem; transition: 0.3s; background: rgba(255,255,255,0.05); font-weight: 700; }
.action-btn.outline { border-color: ${biz.theme}; color: ${biz.theme}; }
.action-btn:hover { background: #fff; color: #000; }

.container { max-width: 1000px; margin: 0 auto; padding: 100px 20px; border-bottom: 1px solid #111; }
.outline-title { font-family: 'Syncopate', sans-serif; font-size: 0.8rem; color: ${biz.theme}; letter-spacing: 3px; margin-bottom: 15px; }
section h2 { font-family: 'Syncopate', sans-serif; font-size: 2rem; margin-bottom: 30px; }
.lead-text { font-size: 1.3rem; color: #ccc; line-height: 1.7; margin-bottom: 40px; }

.stats-row { display: flex; gap: 40px; }
.stat-unit h3 { font-family: 'Syncopate', sans-serif; font-size: 2rem; color: #fff; }
.stat-unit span { font-size: 0.8rem; color: #666; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card { border: 1px solid #222; padding: 40px 30px; background: #0c0c0c; }
.svc-card h3 { font-family: 'Syncopate', sans-serif; font-size: 1.05rem; margin-bottom: 15px; color: ${biz.theme}; }
.svc-card p { font-size: 0.9rem; color: #888; }

.why-list { list-style: none; }
.why-list li { font-size: 1.2rem; margin-bottom: 15px; color: #ccc; }
.why-list li strong { color: ${biz.theme}; }

.review-box-inner { background: #0c0c0c; border-left: 4px solid ${biz.theme}; padding: 40px; }
.review-box-inner blockquote { font-size: 1.4rem; font-style: italic; line-height: 1.6; margin-bottom: 15px; }

.addr-text { font-size: 1.15rem; color: #888; margin-bottom: 30px; }
.map-wrap { border: 1px solid #222; }

.footer { padding: 40px; text-align: center; color: #444; font-size: 0.8rem; border-top: 1px solid #111; }

.wa-coral { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #ff4757; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(255,71,87,0.3); }

@media(max-width:900px) {
  .hero-area { padding: 0 20px; }
  .outline-text { font-size: 3rem; }
  .hero-content h1 { font-size: 2rem; }
  .services-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
}
`;
    return { html, css };
  },

  // 3. SALON: GLASSMORPHISM
  'salon-glassmorphism': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Glassmorphism Beauty Salon</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="glass-bg">
    <div class="circle c1"></div><div class="circle c2"></div>

    <div class="glass-panel-outer">
      <header class="header">
        <div class="logo">⚡ ${biz.name}</div>
        <nav class="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Locate</a>
        </nav>
      </header>

      <!-- STICKY FLOATING PROMO -->
      <div class="floating-promo-pill">
        ⚡ SPECIAL PROMO: COMPLIMENTARY ADVANCED HAIR CUT OR DETOX FACIAL FOR ALL FIRST BOOKINGS VIA WA
      </div>

      <div class="main-scroller">
        <section class="hero" id="home">
          <div class="hero-content">
            <div class="badge">★ ${biz.rating} Rating (${biz.reviews} Reviews)</div>
            <h1>${biz.tagline}</h1>
            <p class="subtitle">${biz.subtitle}</p>
            <div class="actions">
              <a href="tel:${biz.phone}" class="g-btn">Call Now</a>
              <a href="https://wa.me/${biz.waNum}" class="g-btn outline">WhatsApp Us</a>
            </div>
          </div>
          <div class="hero-img"><img src="assets/hero.png" alt="Hair Avenue Salon Styling"></div>
        </section>

        <section class="about" id="about">
          <h2>THE SANCTUARY</h2>
          <p>Hair Avenue Unisex Salon in Vesu is your neighborhood beauty sanctuary. We reject average, standardized styling. Our team of certified hair care experts creates custom locks that suit your natural volume, facial framing, and personality.</p>
          <div class="stats-row">
            <div class="stat-unit"><strong>288+</strong><span>Happy Members</span></div>
            <div class="stat-unit"><strong>5+</strong><span>Professional Styling Chairs</span></div>
          </div>
        </section>

        <section class="services" id="services">
          <h2>THE COMPOSITION</h2>
          <div class="services-grid">
            <div class="svc-box">
              <h3>Signature Hair Styling</h3>
              <p>Autoclave sanitized haircuts, blowouts, structural layers tailored to you.</p>
            </div>
            <div class="svc-box">
              <h3>Vibrant Highlight Shading</h3>
              <p>Organic tint colors, highlights, and custom tone corrections.</p>
            </div>
            <div class="svc-box">
              <h3>Scalp Care & Restructuring</h3>
              <p>Advanced keratin reconstructive spa therapies for glossy hair.</p>
            </div>
          </div>
        </section>

        <section class="why" id="why">
          <h2>THE PROTOCOLS</h2>
          <ul class="why-list">
            <li>✨ <strong>Sanitary Focus:</strong> Toolsets disinfected and sealed prior to every customer.</li>
            <li>✨ <strong>Fine Ingredients:</strong> We use only luxury hair care lines.</li>
            <li>✨ <strong>Expert Consultation:</strong> Clear suggestions and home hair health tips.</li>
          </ul>
        </section>

        <section class="reviews" id="reviews">
          <h2>REVIEWS</h2>
          <div class="testimonial-box">
            <p>"Surat's primary hair studio. Meticulous styling, very relaxing vibe, and extremely supportive hair color suggestions."</p>
            <span>— Nikita Dave</span>
          </div>
        </section>

        <section class="contact" id="contact">
          <h2>THE LOCATION</h2>
          <p class="addr">${biz.address}</p>
          <div class="map-container">
            ${commonMap(biz.address)}
          </div>
        </section>
      </div>

      <footer class="footer">
        <p>© 2025 ${biz.name}. Frozen in glass.</p>
      </footer>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-glass" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Poppins', sans-serif; background: #eef2f5; min-height: 100vh; overflow-x: hidden; color: #2d3436; }
html { scroll-behavior: smooth; }
.glass-bg { position: relative; width: 100%; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; }
.circle { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; }
.c1 { width: 500px; height: 500px; background: ${biz.theme}; top: 5%; left: 15%; opacity: 0.5; }
.c2 { width: 600px; height: 600px; background: #74b9ff; bottom: 5%; right: 10%; opacity: 0.5; }

.glass-panel-outer { position: relative; z-index: 1; width: 100%; max-width: 1100px; background: rgba(255, 255, 255, 0.4); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 30px; box-shadow: 0 30px 60px rgba(0,0,0,0.05); padding: 40px; box-sizing: border-box; }

header.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom: 25px; margin-bottom: 30px; }
.logo { font-weight: 700; font-size: 1.4rem; color: #1e1e24; }
.nav-links a { color: #555; text-decoration: none; font-size: 0.9rem; font-weight: 600; margin-left: 20px; transition: 0.3s; }
.nav-links a:hover { color: ${biz.theme}; }

.floating-promo-pill { background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.8); padding: 12px 20px; border-radius: 12px; font-weight: 700; font-size: 0.85rem; color: #1e1e24; text-align: center; margin-bottom: 40px; }

.main-scroller { display: flex; flex-direction: column; gap: 80px; }

.hero { display: flex; gap: 40px; align-items: center; }
.hero-content { flex: 1.1; }
.badge { display: inline-block; background: #fff; padding: 6px 14px; border-radius: 30px; font-size: 0.8rem; font-weight: 600; color: ${biz.theme}; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); }
.hero-content h1 { font-size: 3.2rem; line-height: 1.1; font-weight: 700; margin-bottom: 20px; }
.subtitle { font-size: 1.1rem; color: #555; margin-bottom: 35px; }
.actions { display: flex; gap: 15px; }
.g-btn { display: inline-block; padding: 14px 28px; border-radius: 50px; text-decoration: none; font-weight: 700; background: #fff; color: ${biz.theme}; box-shadow: 0 8px 20px rgba(0,0,0,0.05); transition: 0.3s; }
.g-btn.outline { background: transparent; border: 2px solid #fff; color: #2d3436; box-shadow: none; }
.g-btn:hover { transform: translateY(-2px); }

.hero-img { flex: 0.9; border-radius: 20px; overflow: hidden; height: 350px; }
.hero-img img { width: 100%; height: 100%; object-fit: cover; }

section h2 { font-size: 1.8rem; font-weight: 700; margin-bottom: 20px; letter-spacing: -0.5px; }
.about p { font-size: 1.15rem; line-height: 1.7; color: #444; }
.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stat-unit strong { font-size: 2rem; display: block; color: ${biz.theme}; }
.stat-unit span { font-size: 0.85rem; color: #666; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-box { background: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.4); padding: 30px; border-radius: 16px; }
.svc-box h3 { font-size: 1.15rem; margin-bottom: 10px; color: ${biz.theme}; }
.svc-box p { font-size: 0.9rem; color: #555; }

.why-list { list-style: none; }
.why-list li { font-size: 1.1rem; margin-bottom: 12px; }
.why-list li strong { color: ${biz.theme}; }

.testimonial-box { background: rgba(255,255,255,0.3); border-left: 4px solid ${biz.theme}; padding: 30px; border-radius: 0 16px 16px 0; }
.testimonial-box p { font-style: italic; font-size: 1.25rem; margin-bottom: 10px; }
.testimonial-box span { font-weight: 700; }

.addr { font-size: 1.1rem; margin-bottom: 20px; }
.map-container { overflow: hidden; border-radius: 20px; border: 1px solid rgba(255,255,255,0.4); }

.footer { text-align: center; border-top: 1px solid rgba(255,255,255,0.4); padding-top: 30px; margin-top: 40px; color: #777; font-size: 0.85rem; }

.wa-float-glass { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(0,0,0,0.1); }

@media(max-width:900px) {
  .hero { flex-direction: column; }
  .hero-img { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .glass-panel-outer { padding: 20px; }
}
`;
    return { html, css };
  },

  // 4. SALON: EDITORIAL
  'salon-editorial': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Editorial Chic Salon</title>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="ed-layout">
    <header class="ed-nav">
      <div class="logo">${biz.name.toUpperCase()}</div>
      <nav class="links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="nav-num">EST. 2025</div>
    </header>

    <!-- FLOATING TICKER BANNER -->
    <div class="ed-promo-banner">
      ✦ EXCLUSIVE ANNOUNCEMENT: BOOK AN EXPERT BALAYAGE OR SMOOTHENING WORKOUT & GET AN COMPLIMENTARY DETOX FACIAL
    </div>

    <div class="ed-main" id="home">
      <div class="ed-title">
        <div class="stars">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
        <h1>${biz.tagline.split('.')[0]}.</h1>
        <p class="subtitle">${biz.subtitle}</p>
        <div class="actions">
          <a href="tel:${biz.phone}" class="ed-btn">Book Consultation</a>
          <a href="https://wa.me/${biz.waNum}" class="ed-btn outline">WhatsApp</a>
        </div>
      </div>
      <div class="ed-image"><img src="assets/hero.png" alt="High Fashion Editorial Model Hair"></div>
    </div>

    <section class="about-section" id="about">
      <h2>01 / THE SIGNATURE</h2>
      <p>Signature Unisex Salon on City Light Road represents high fashion hair. We map colors biometrically to your skin indices. Our equipment is autoclaved, disinfected, and customized for every client styling slot.</p>
      <div class="stats-row">
        <div><h3>184</h3><span>Clients Happy</span></div>
        <div><h3>100%</h3><span>Autoclaved Tools</span></div>
      </div>
    </section>

    <section class="services-section" id="services">
      <h2>02 / THE FORMULATIONS</h2>
      <div class="services-grid">
        <div class="svc-card">
          <h3>Editorial Haircuts</h3>
          <p>Autoclave sanitized haircuts, blowouts, structural layers tailored to you.</p>
        </div>
        <div class="svc-card">
          <h3>Custom Highlights</h3>
          <p>Organic tint colors, highlights, and custom tone corrections.</p>
        </div>
        <div class="svc-card">
          <h3>Reconstructive Spa</h3>
          <p>Advanced keratin reconstructive spa therapies for glossy hair.</p>
        </div>
      </div>
    </section>

    <section class="why-section" id="why">
      <h2>03 / THE CRITERIA</h2>
      <ul class="why-list">
        <li>✦ <strong>Hygiene:</strong> Disinfected toolsets opened right before session starts.</li>
        <li>✦ <strong>Luxury Care:</strong> We use only premium organic styling formulas.</li>
        <li>✦ <strong>Professional:</strong> Clear recommendations and home hair health tips.</li>
      </ul>
    </section>

    <section class="reviews-section" id="reviews">
      <h2>04 / THE FEEDBACK</h2>
      <blockquote>"City Light's most premium hair house. Autoclave disinfected tools, highly experienced styling team, and amazing balayage color transformations."</blockquote>
      <cite>— Pooja Shah</cite>
    </section>

    <section class="contact-section" id="contact">
      <h2>05 / THE LOCATION</h2>
      <p class="addr">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="ed-footer">
      <div class="ed-footer-copy">© 2025 ${biz.name.toUpperCase()}. Pure Monochrome.</div>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-editorial" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Roboto', sans-serif; background: #fff; color: #111; padding: 20px; box-sizing: border-box; min-height: 100vh; }
html { scroll-behavior: smooth; }
.ed-layout { border: 1px solid #000; min-height: calc(100vh - 40px); display: flex; flex-direction: column; }

header.ed-nav { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid #000; font-family: 'Bodoni Moda', serif; font-weight: 700; font-size: 1.2rem; text-transform: uppercase; }
.logo { font-size: 1.4rem; color: #000; letter-spacing: 2px; }
.links a { color: #555; text-decoration: none; font-size: 0.85rem; font-family: 'Roboto', sans-serif; font-weight: 600; margin-left: 20px; text-transform: uppercase; }
.links a:hover { color: #000; }

.ed-promo-banner { background: #000; color: #fff; padding: 12px; font-size: 0.85rem; font-family: 'Bodoni Moda', serif; text-align: center; font-style: italic; border-bottom: 1px solid #000; }

.ed-main { display: flex; flex: 1; border-bottom: 1px solid #000; }
.ed-title { flex: 1; padding: 60px 40px; border-right: 1px solid #000; display: flex; flex-direction: column; justify-content: center; }
.stars { font-family: 'Bodoni Moda', serif; font-size: 1.1rem; color: ${biz.theme}; font-style: italic; margin-bottom: 20px; }
h1 { font-family: 'Bodoni Moda', serif; font-size: 4rem; font-weight: 400; line-height: 1; margin: 0 0 25px 0; }
.subtitle { font-size: 1.15rem; line-height: 1.6; color: #444; margin-bottom: 40px; }
.actions { display: flex; gap: 15px; }
.ed-btn { display: inline-block; background: #000; color: #fff; padding: 15px 30px; text-decoration: none; font-weight: 700; font-size: 0.85rem; border: 1px solid #000; text-transform: uppercase; letter-spacing: 1.5px; transition: 0.3s; }
.ed-btn.outline { background: transparent; color: #000; }
.ed-btn:hover { background: #555; color: #fff; }

.ed-image { flex: 1; padding: 20px; background: #f5f5f5; height: 550px; }
.ed-image img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }

section { padding: 60px 40px; border-bottom: 1px solid #000; }
section h2 { font-family: 'Bodoni Moda', serif; font-size: 1.8rem; font-weight: 400; margin-bottom: 25px; }
.about-section p, .services-section p { font-size: 1.15rem; line-height: 1.7; color: #444; max-width: 800px; }

.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stats-row h3 { font-family: 'Bodoni Moda', serif; font-size: 2rem; }
.stats-row span { font-size: 0.85rem; color: #666; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card { border: 1px solid #000; padding: 30px; }
.svc-card h3 { font-family: 'Bodoni Moda', serif; font-size: 1.25rem; margin-bottom: 10px; }

.why-list { list-style: none; }
.why-list li { font-size: 1.1rem; margin-bottom: 12px; }

blockquote { font-family: 'Bodoni Moda', serif; font-size: 1.5rem; font-style: italic; line-height: 1.5; margin-bottom: 20px; }
cite { font-style: normal; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }

.addr { font-size: 1.1rem; margin-bottom: 25px; }
.map-wrap { border: 1px solid #000; }

.ed-footer { padding: 20px; text-align: center; font-size: 0.85rem; color: #666; }

.wa-float-editorial { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #000; color: #fff; border: 1px solid #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

@media(max-width:900px) {
  .ed-main { flex-direction: column; }
  .ed-title { border-right: none; border-bottom: 1px solid #000; padding: 40px 20px; }
  .ed-image { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .links, .nav-num { display: none; }
}
`;
    return { html, css };
  },

  // 5. DENTAL: CLEAN MEDICAL
  'dental-clean': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Dr. Akshat Sharma Indore</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- EMERGENCY TOP ALERTS -->
  <div class="top-emergency-strip">
    🚨 EMERGENCY CASE? CONTACT DR. AKSHAT SHARMA DIRECTLY VIA CALL: ${biz.phone}
  </div>

  <header class="main-header">
    <div class="logo">🦷 ${biz.name}</div>
    <nav class="nav">
      <a href="#about">About</a>
      <a href="#services">Treatments</a>
      <a href="#why">Why Us</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Location</a>
    </nav>
    <a href="tel:${biz.phone}" class="header-btn">Book Appointment</a>
  </header>

  <main class="clean-hero" id="home">
    <div class="hero-content">
      <div class="rating-badge">
        <span class="star">★</span> ${biz.rating} / 5 (${biz.reviews} Google Reviews)
      </div>
      <h1>${biz.tagline}</h1>
      <p class="subtitle">${biz.subtitle}</p>
      <div class="features">
        <span>✓ Sterile Tech</span><span>✓ Certified Orthodontics</span><span>✓ Painless Care</span>
      </div>
      <div class="actions">
        <a href="tel:${biz.phone}" class="btn primary">Call Clinic Now</a>
        <a href="https://wa.me/${biz.waNum}" class="btn outline">WhatsApp</a>
      </div>
      <div class="address-box">
        <strong>Clinic Address:</strong> ${biz.addressShort}
      </div>
    </div>
    <div class="hero-image">
      <img src="assets/hero.png" alt="Indore Dental Clinic Interior">
      <div class="shape"></div>
    </div>
  </main>

  <section class="about container" id="about">
    <h2>Meet Dr. Akshat Sharma</h2>
    <p>Dent 'N' Gum Dental Clinic is Indore's trusted oral care facility. Led by Dr. Akshat Sharma, our clinic near Bombay Hospital features modern digital imaging, autoclave tool sterilization, and painless root canal treatments (RCT). We care for your family's smiles.</p>
    <div class="stats-row">
      <div class="stat-card"><h3>361+</h3><p>Google Reviews</p></div>
      <div class="stat-card"><h3>100%</h3><p>Sterilized Tools</p></div>
    </div>
  </section>

  <section class="services container" id="services">
    <h2 class="center-title">OUR CLINICAL SERVICES</h2>
    <div class="services-grid">
      <div class="svc-card">
        <h3>General Dentistry</h3>
        <p>Routine checks, cleanings, scaling, and organic composite fillings.</p>
      </div>
      <div class="svc-card">
        <h3>Orthodontics & Aligners</h3>
        <p>Invisible aligners and traditional braces for smile structural alignment.</p>
      </div>
      <div class="svc-card">
        <h3>Painless RCT</h3>
        <p>Advanced root canal operations completed safely under gentle anesthesia.</p>
      </div>
    </div>
  </section>

  <section class="why container" id="why">
    <h2>WHY DENT 'N' GUM</h2>
    <ul class="why-bullet-list">
      <li>✓ <strong>Ultra Sanitization:</strong> Autoclave sterilization packets opened in front of you.</li>
      <li>✓ <strong>Modern Digital Scans:</strong> Less radiation, highly precise diagnostics.</li>
      <li>✓ <strong>Transparent Pricing:</strong> No hidden costs, detailed treatment cards.</li>
    </ul>
  </section>

  <section class="reviews container" id="reviews">
    <h2 class="center-title">PATIENT VOICES</h2>
    <div class="testimonials">
      <blockquote>"Excellent RCT experience. Dr. Akshat Sharma explained the process clearly and it was completely painless."</blockquote>
      <cite>— Preeti Agrawal</cite>
    </div>
  </section>

  <section class="contact container" id="contact">
    <h2 class="center-title">THE INDORE CLINIC</h2>
    <p class="addr-text">${biz.address}</p>
    <div class="map-wrap">
      ${commonMap(biz.address)}
    </div>
  </section>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Managed with care.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-dental" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Open Sans', sans-serif; color: #333; background: #f9fbfd; }
html { scroll-behavior: smooth; }
.top-emergency-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 10px; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px; }

header.main-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 50px; background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,0.02); position: sticky; top: 0; z-index: 100; }
.logo { font-size: 1.4rem; font-weight: 700; color: #2c3e50; }
.nav a { color: #555; text-decoration: none; font-weight: 600; margin-left: 20px; transition: 0.2s; }
.nav a:hover { color: ${biz.theme}; }
.header-btn { padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: 600; background: ${biz.theme}; color: #fff; font-size: 0.85rem; }

.clean-hero { display: flex; align-items: center; padding: 80px 50px; max-width: 1300px; margin: 0 auto; gap: 60px; }
.hero-content { flex: 1.2; }
.rating-badge { display: inline-block; background: #fff; padding: 8px 16px; border-radius: 30px; font-weight: 600; color: #2c3e50; box-shadow: 0 4px 10px rgba(0,0,0,0.03); margin-bottom: 20px; }
.star { color: #f1c40f; }
h1 { font-size: 3.5rem; color: #2c3e50; line-height: 1.1; margin: 0 0 20px 0; }
.subtitle { font-size: 1.15rem; color: #7f8c8d; margin-bottom: 30px; line-height: 1.6; }
.features { display: flex; gap: 20px; margin-bottom: 30px; color: #2c3e50; font-weight: 700; }
.actions { display: flex; gap: 15px; margin-bottom: 30px; }
.btn { padding: 14px 28px; border-radius: 4px; text-decoration: none; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; transition: 0.3s; }
.btn.primary { background: ${biz.theme}; color: #fff; }
.btn.outline { border: 2px solid ${biz.theme}; color: ${biz.theme}; }
.address-box { background: #fff; padding: 15px 20px; border-left: 4px solid ${biz.theme}; border-radius: 4px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); }

.hero-image { flex: 0.8; position: relative; }
.hero-image img { width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); position: relative; z-index: 2; height: 350px; object-fit: cover; }
.shape { position: absolute; width: 100%; height: 100%; background: ${biz.theme}; top: 15px; left: 15px; border-radius: 12px; z-index: 1; opacity: 0.15; }

.container { max-width: 1000px; margin: 0 auto; padding: 80px 20px; border-bottom: 1px solid #eee; }
.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stat-card { background: #fff; border: 1px solid #eee; padding: 25px; border-radius: 8px; flex: 1; text-align: center; }
.stat-card h3 { font-size: 2rem; color: ${biz.theme}; }

.center-title { text-align: center; font-size: 2rem; color: #2c3e50; margin-bottom: 40px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card { background: #fff; border: 1px solid #eee; padding: 30px; border-radius: 8px; }
.svc-card h3 { font-size: 1.2rem; margin-bottom: 10px; color: #2c3e50; }
.svc-card p { font-size: 0.9rem; color: #7f8c8d; }

.why-bullet-list { list-style: none; }
.why-bullet-list li { font-size: 1.1rem; margin-bottom: 15px; }

blockquote { font-size: 1.4rem; font-style: italic; text-align: center; margin-bottom: 15px; line-height: 1.5; color: #2c3e50; }
cite { display: block; text-align: center; font-weight: 700; color: ${biz.theme}; font-style: normal; }

.addr-text { text-align: center; margin-bottom: 30px; color: #666; }
.map-wrap { border: 1px solid #eee; overflow: hidden; border-radius: 12px; }

.footer { padding: 40px; text-align: center; color: #999; font-size: 0.85rem; }

.wa-float-dental { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .clean-hero { flex-direction: column; padding: 40px 20px; }
  .hero-image { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .nav { display: none; }
}
`;
    return { html, css };
  },

  // 6. DENTAL: HERO FOCUSED
  'dental-hero-focused': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Advanced Dento-Facial Indore</title>
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- DYNAMIC TOP PROMO STRIP -->
  <div class="promo-alert-strip">
    🔥 SPECIAL CAMPAIGN: BOOK A FACIAL CONSULTATION ON WHATSAPP & GET COMPLIMENTARY SCALE CHECKUP
  </div>

  <div class="h-layout">
    <div class="h-image">
      <div class="h-nav">${biz.name.toUpperCase()}</div>
      <img src="assets/hero.png" alt="Clinical consultation desk">
    </div>
    <div class="h-content">
      <div class="h-badge">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
      <h1>${biz.tagline}</h1>
      <p class="sub-paragraph">${biz.subtitle}</p>

      <!-- NAVIGATION LINKS -->
      <nav class="h-menu">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#choose">Why Us</a>
        <a href="#reviews">Testimonials</a>
        <a href="#contact">Find Us</a>
      </nav>

      <div class="h-box" id="about">
        <h3>ABOUT THE CLINIC</h3>
        <p>Dr. Bhatia's Dento Facial Square is a multi-specialty ENT, dental and cosmetic surgery facility on A.B Road, Indore. We provide high-spec dental implants, braces, cosmetic face correction and ENT care under one roof.</p>
      </div>

      <div class="h-box" id="services">
        <h3>CLINICAL SERVICES</h3>
        <ul class="svc-list">
          <li><strong>Dento-Facial Cosmetology:</strong> Structural jaw surgeries and face reconstructions.</li>
          <li><strong>Dental Implants:</strong> Advanced plate loaded implants for permanent restorations.</li>
          <li><strong>General ENT Care:</strong> Experienced ENT specialist consultants available.</li>
        </ul>
      </div>

      <div class="h-box" id="choose">
        <h3>THE BENCHMARKS</h3>
        <ul class="bullet-list">
          <li>✓ Multi-specialty diagnostic setups.</li>
          <li>✓ Certified, veteran doctors.</li>
          <li>✓ Autoclave sterilized equipment.</li>
        </ul>
      </div>

      <div class="h-box" id="reviews">
        <h3>TESTIMONIALS</h3>
        <blockquote>"Extremely clean, modern diagnostic gear, and very supportive consultation from Dr. Bhatia."</blockquote>
        <cite>— Rohit Verma</cite>
      </div>

      <div class="h-box" id="contact">
        <h3>THE ADDRESS</h3>
        <p>${biz.address}</p>
        <div class="map-wrap">
          ${commonMap(biz.address)}
        </div>
      </div>

      <div class="h-buttons">
        <a href="tel:${biz.phone}" class="h-btn main">Call Clinic</a>
        <a href="https://wa.me/${biz.waNum}" class="h-btn sub">WhatsApp Us</a>
      </div>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-focused" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Rubik', sans-serif; color: #1a202c; background: #fff; }
html { scroll-behavior: smooth; }
.promo-alert-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; }

.h-layout { display: flex; min-height: 100vh; }
.h-image { flex: 1.1; position: sticky; top: 0; height: 100vh; }
.h-image img { width: 100%; height: 100%; object-fit: cover; border-radius: 0 40px 40px 0; }
.h-nav { position: absolute; top: 40px; left: 40px; background: #fff; padding: 12px 24px; border-radius: 30px; font-weight: 700; box-shadow: 0 10px 20px rgba(0,0,0,0.05); color: ${biz.theme}; font-size: 0.95rem; }

.h-content { flex: 0.9; padding: 60px 80px; display: flex; flex-direction: column; gap: 40px; overflow-y: auto; }
.h-badge { color: ${biz.theme}; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
.h-content h1 { font-size: 3rem; line-height: 1.1; color: #2d3748; margin: 0; }
.sub-paragraph { font-size: 1.15rem; color: #718096; line-height: 1.6; }

.h-menu { display: flex; gap: 20px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
.h-menu a { text-decoration: none; color: #4a5568; font-weight: 600; font-size: 0.9rem; transition: 0.2s; }
.h-menu a:hover { color: ${biz.theme}; }

.h-box { background: #f7fafc; padding: 30px; border-radius: 20px; border: 1px solid #edf2f7; }
.h-box h3 { margin-top: 0; margin-bottom: 15px; color: ${biz.theme}; font-size: 1.1rem; }
.h-box p { color: #4a5568; line-height: 1.5; margin: 0; }

.svc-list, .bullet-list { list-style: none; }
.svc-list li, .bullet-list li { margin-bottom: 10px; font-size: 0.95rem; color: #4a5568; }
.svc-list li strong { color: #1d2d44; }

blockquote { font-style: italic; font-size: 1.15rem; color: #4a5568; margin-bottom: 10px; }
cite { font-style: normal; font-weight: 700; color: ${biz.theme}; }

.map-wrap { border-radius: 12px; overflow: hidden; margin-top: 15px; }

.h-buttons { display: flex; gap: 20px; }
.h-btn { flex: 1; text-align: center; padding: 18px; border-radius: 12px; text-decoration: none; font-weight: 700; transition: 0.3s; }
.main { background: ${biz.theme}; color: #fff; box-shadow: 0 10px 20px rgba(9, 132, 227, 0.2); }
.sub { background: #e2e8f0; color: #4a5568; }

.wa-float-focused { position: fixed; bottom: 30px; left: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:1000px) {
  .h-layout { flex-direction: column; }
  .h-image { display: none; }
  .h-content { padding: 40px 20px; }
}
`;
    return { html, css };
  },

  // 7. DENTAL: SPLIT DIAGANOL
  'dental-split': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Dr. Desai Multispeciality Indore</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- DIAG ALERT BANNER -->
  <div class="diag-alert-strip">
    ⚡ CLINICAL NOTE: REGISTER TREATMENT DETAILS ONLINE & SECURE 10% COMPLIMENTARY RCT ADVISORY
  </div>

  <div class="diag-layout">
    <div class="diag-bg"><img src="assets/hero.png" alt="Dental Clinic Chair Setup"></div>
    <div class="diag-content">
      <header class="diag-head">
        <div class="logo">😁 ${biz.nameShort}</div>
        <nav class="links">
          <a href="#about">About</a>
          <a href="#services">Treatments</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div class="diag-main">
        <section class="hero-sec" id="home">
          <div class="diag-rating">★ ${biz.rating} / ${biz.reviews} Google Reviews</div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="diag-actions">
            <a href="tel:${biz.phone}" class="d-btn">Book Treatment</a>
            <a href="https://wa.me/${biz.waNum}" class="d-btn outline">WhatsApp</a>
          </div>
        </section>

        <section class="about-sec" id="about">
          <h2>THE EXPERTISE</h2>
          <p>Dr. Desai's Multispeciality Dental Clinic provides advanced orthodontic care in Ashok Nagar, Indore. We provide disinfected dental implants, cosmetic crowns, root canal procedures, and family dental safety plans.</p>
        </section>

        <section class="services-sec" id="services">
          <h2>TREATMENTS</h2>
          <div class="services-grid">
            <div class="svc">
              <h3>Dental Implants</h3>
              <p>Titanium restorations completed safely with high-spec imaging.</p>
            </div>
            <div class="svc">
              <h3>Invisible Braces</h3>
              <p>Aligners customized biometrically to adjust jaw parameters.</p>
            </div>
          </div>
        </section>

        <section class="why-sec" id="why">
          <h2>THE PROTOCOLS</h2>
          <ul>
            <li>✓ Autoclave sterile toolsets disinfected hourly.</li>
            <li>✓ Friendly family dental consultations.</li>
            <li>✓ Modern digital radiography scan.</li>
          </ul>
        </section>

        <section class="reviews-sec" id="reviews">
          <h2>PATIENT FEEDBACK</h2>
          <blockquote>"Excellent treatment, very gentle RCT, and transparent clinic pricing cards. Dr. Desai is highly skilled."</blockquote>
          <cite>— Rohit Jain</cite>
        </section>

        <section class="contact-sec" id="contact">
          <h2>THE CLINIC</h2>
          <p>${biz.address}</p>
          <div class="map-wrap">
            ${commonMap(biz.address)}
          </div>
        </section>
      </div>

      <footer class="footer">
        <p>© 2025 ${biz.name}. Managed with trust.</p>
      </footer>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-split" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Outfit', sans-serif; color: #fff; overflow-x: hidden; }
html { scroll-behavior: smooth; }
.diag-alert-strip { background: #000; color: ${biz.theme}; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; }

.diag-layout { position: relative; min-height: 100vh; display: flex; align-items: center; }
.diag-bg { position: absolute; right: 0; top: 0; width: 50%; height: 100%; z-index: -1; }
.diag-bg img { width: 100%; height: 100%; object-fit: cover; }

.diag-content { background: ${biz.theme}; width: 60%; min-height: 100vh; clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%); padding: 50px 80px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; }

header.diag-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
.logo { font-size: 1.6rem; font-weight: 800; }
.links a { color: rgba(255,255,255,0.7); text-decoration: none; margin-left: 20px; font-weight: 600; font-size: 0.85rem; }
.links a:hover { color: #fff; }

.diag-main { display: flex; flex-direction: column; gap: 80px; max-width: 600px; }
.diag-rating { display: inline-block; background: rgba(0,0,0,0.15); padding: 8px 16px; border-radius: 30px; font-weight: 600; margin-bottom: 20px; }
h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin: 0 0 20px 0; }
.hero-sec p { font-size: 1.25rem; line-height: 1.6; opacity: 0.9; margin-bottom: 35px; }

.diag-actions { display: flex; gap: 15px; }
.d-btn { display: inline-block; background: #fff; color: ${biz.theme}; padding: 15px 30px; border-radius: 30px; font-weight: 800; text-decoration: none; text-transform: uppercase; font-size: 0.85rem; transition: 0.3s; border: none; }
.d-btn.outline { background: transparent; border: 2px solid #fff; color: #fff; }
.d-btn:hover { transform: translateY(-2px); }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc { background: rgba(0,0,0,0.15); padding: 25px; border-radius: 12px; }

.why-sec ul { list-style: none; }
.why-sec li { font-size: 1.1rem; margin-bottom: 10px; }

blockquote { font-style: italic; font-size: 1.3rem; margin-bottom: 15px; }
cite { font-weight: 700; font-style: normal; }

.map-wrap { border-radius: 16px; overflow: hidden; margin-top: 15px; }

.footer { color: rgba(255,255,255,0.6); font-size: 0.8rem; margin-top: 80px; }

.wa-float-split { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:1000px) {
  .diag-content { width: 100%; clip-path: none; padding: 40px 20px; }
  .diag-bg { display: none; }
  .links { display: none; }
}
`;
    return { html, css };
  }

};

console.log("Generating BATCH 2: 7 Unique Salon/Dental Designs...\n");

batch2.forEach(biz => {
  const dir = path.join(BASE, biz.slug);
  const generateFunc = generators[biz.style];
  if (!generateFunc) {
    console.error(`Error: Generator for style ${biz.style} not found.`);
    return;
  }

  // Ensure dir exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Ensure assets dir exists inside the client folder
  const assetsDir = path.join(dir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // If a global hero.png exists, copy it to assets/hero.png
  const globalHeroPath = path.join(BASE, 'fitness-pulse-gym', 'assets', 'hero.png');
  const destHeroPath = path.join(assetsDir, 'hero.png');
  if (fs.existsSync(globalHeroPath) && !fs.existsSync(destHeroPath)) {
    fs.copyFileSync(globalHeroPath, destHeroPath);
  }

  const { html, css } = generateFunc(biz);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'style.css'), css);
  
  console.log(`✅ ${biz.name} -> Generated with [${biz.style}] style.`);
});

console.log("\nBatch 2 completed successfully!");
