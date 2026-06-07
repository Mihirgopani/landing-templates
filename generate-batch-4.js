const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

// Chartered Accountants Database
const batch4 = [
  {
    slug: 'rd-bhatti-associates', name: 'R D Bhatti & Associates', shortName: 'RDBhatti',
    tagline: 'Financial Expertise.<br><span class="text-gradient">Trusted Guidance.</span>',
    subtitle: "Rajkot's trusted CA firm for GST, Income Tax, NRI Services, and Accounting. Professional solutions for your financial success.",
    rating: 5.0, reviews: 205, phone: '+919898709900', waNum: '919898709900',
    address: '606 The Millennium, 150 Feet Ring Road, Opp Silver Heights, Rajkot 360005',
    addressShort: 'Ring Road, Rajkot 360005',
    style: 'ca-corporate',
    theme: '#1e3a8a' // Corporate Blue
  },
  {
    slug: 'ashara-ganatra-associates', name: 'Ashara Ganatra & Associates', shortName: 'AsharaGanatra',
    tagline: 'Your Financial<br><span class="text-gradient">Growth Partners.</span>',
    subtitle: "Rajkot's dynamic CA firm offering comprehensive taxation, audit, and business advisory services with a modern approach.",
    rating: 5.0, reviews: 198, phone: '+918866728979', waNum: '918866728979',
    address: '404, Fourth Floor, Pramukh Darshan Complex, Pedak Rd, Rajkot 360003',
    addressShort: 'Pedak Rd, Rajkot 360003',
    style: 'ca-modern-trust',
    theme: '#047857' // Emerald Green
  },
  {
    slug: 'cdhb-and-company', name: 'C D H B And Company', shortName: 'CDHB',
    tagline: 'Professional CA<br><span class="text-gradient">Services You Trust.</span>',
    subtitle: "Formerly Chintan Dave & Company. Rajkot's reliable CA firm for audit, taxation, compliance, and business advisory.",
    rating: 4.9, reviews: 102, phone: '+919913593567', waNum: '919913593567',
    address: 'RK ICONIC, A-707, 150 Feet Ring Rd, nr. Sheetal Park, Rajkot 360006',
    addressShort: 'Ring Road, Rajkot 360006',
    style: 'ca-elegant-serif',
    theme: '#4338ca' // Indigo
  },
  {
    slug: 'jh-jasani-co', name: 'J H Jasani & Co', shortName: 'JHJasani',
    tagline: 'Chartered Excellence.<br><span class="text-gradient">Financial Clarity.</span>',
    subtitle: "Trusted CA firm at RK Prime, 150 Feet Ring Road, Rajkot. Expert audit, taxation, and compliance services.",
    rating: 5.0, reviews: 40, phone: '+919824282434', waNum: '919824282434',
    address: '912, RK PRIME, 150 Feet Ring Rd,Nana Mava, Rajkot 360004',
    addressShort: 'Ring Road, Rajkot 360004',
    style: 'ca-minimal-slate',
    theme: '#334155' // Slate Gray
  },
  {
    slug: 'ca-kb-madhani', name: 'CA K B Madhani & Associates', shortName: 'KBMadhani',
    tagline: 'Precise Financial<br><span class="text-gradient">Solutions.</span>',
    subtitle: "Expert CA services near Mavdi Circle, Rajkot. Audit, taxation, GST, and business advisory with personalized attention.",
    rating: 4.9, reviews: 36, phone: '+919724684083', waNum: '919724684083',
    address: 'Office No 419, R K Empire, Near Mavdi Circle, 150 Feet Ring Rd, Rajkot 360004',
    addressShort: 'Mavdi Circle, Rajkot 360004',
    style: 'ca-bold-finance',
    theme: '#be123c' // Rose Red
  },
  {
    slug: 'dudhatra-and-co', name: 'Dudhatra And Co.', shortName: 'DudhatraCo',
    tagline: 'Reliable CA<br><span class="text-gradient">Partnership.</span>',
    subtitle: "Chartered Accountants at RK Empire, Mavdi, Rajkot. Comprehensive audit, tax planning, and compliance services.",
    rating: 5.0, reviews: 17, phone: '+918200099400', waNum: '918200099400',
    address: 'Office No. 418, RK Empire, 150 Feet Ring Rd, Mavdi, Rajkot 360004',
    addressShort: 'Mavdi, Rajkot 360004',
    style: 'ca-split-classic',
    theme: '#0f766e' // Deep Teal
  },
  {
    slug: 'sadp-and-co', name: 'S A D P & Co.', shortName: 'SADPCo',
    tagline: 'Professional<br><span class="text-gradient">Financial Services.</span>',
    subtitle: "Certified Public Accountants in Rajkot. Expert audit, taxation, and advisory services with a commitment to excellence.",
    rating: 5.0, reviews: 11, phone: '+919876543210', waNum: '919876543210',
    address: 'House 5, Collegewadi, B B, near Kathiyawad Gymkhana, Rajkot 360001',
    addressShort: 'Collegewadi, Rajkot 360001',
    style: 'ca-card-layout',
    theme: '#b45309' // Amber
  }
];

const waSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366"/></svg>`;

const commonMap = (address) => `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed" width="100%" height="300" style="border:0; border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>`;

const generators = {

  // 1. CA: CORPORATE BLUE (R D Bhatti)
  'ca-corporate': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Chartered Accountants Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- FINANCIAL NOTIFICATION TICKER -->
  <div class="corp-promo-strip">
    ⚡ TAXATION NOTE: GST AUDIT SUBMISSION GUIDES NOW AVAILABLE FOR THE CURRENT FISCAL YEAR. REQUEST ADVISORY.
  </div>

  <nav class="corp-nav">
    <div class="container nav-box">
      <div class="logo">🏛️ ${biz.name}</div>
      <div class="links">
        <a href="#about">Philosophy</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Location</a>
      </div>
      <a href="tel:${biz.phone}" class="nav-btn">Client Portal</a>
    </div>
  </nav>

  <header class="corp-hero" id="home">
    <div class="hero-bg"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <div class="badge">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
        <h1>${biz.tagline}</h1>
        <p class="subtitle">${biz.subtitle}</p>
        <div class="action-bar">
          <a href="tel:${biz.phone}" class="btn btn-primary">Schedule Consultation</a>
          <a href="https://wa.me/${biz.waNum}" class="btn btn-outline">WhatsApp</a>
        </div>
      </div>
      <div class="hero-img"><img src="assets/hero.png" alt="CA Firm Office"></div>
    </div>
  </header>

  <section class="about container" id="about">
    <h2>THE PROFESSIONAL LEGACY</h2>
    <p>R D Bhatti & Associates is Rajkot's leading chartered accountancy firm located at 150 Feet Ring Road. We deliver structured solutions for corporate audit trials, GST registration compliance, NRI taxation, and business setup strategies.</p>
    <div class="stats-row">
      <div class="stat-box"><h3>205+</h3><p>Google Reviews</p></div>
      <div class="stat-box"><h3>100%</h3><p>Compliance Guarantee</p></div>
    </div>
  </section>

  <section class="services container" id="services">
    <h2 class="center-title">OUR SERVICES</h2>
    <div class="services-grid">
      <div class="svc-card">
        <h3>GST Registration & Filing</h3>
        <p>Complete GST advisory, filing audits, and system configuration.</p>
      </div>
      <div class="svc-card">
        <h3>Corporate Auditing</h3>
        <p>Statutory audits, internal finance reviews, system risk checkups.</p>
      </div>
      <div class="svc-card">
        <h3>NRI Income Tax</h3>
        <p>Expert advisory for non-resident taxation, asset purchases, compliance.</p>
      </div>
    </div>
  </section>

  <section class="why container" id="why">
    <h2>WHY WORK WITH US</h2>
    <ul class="why-list">
      <li>✓ <strong>Structured Advisory:</strong> Expert, proactive tax advisory.</li>
      <li>✓ <strong>Fully Compliant:</strong> Zero error tracking systems for financial reporting.</li>
      <li>✓ <strong>Dedicated Support:</strong> Quick response time on client requests.</li>
    </ul>
  </section>

  <section class="reviews container" id="reviews">
    <h2 class="center-title">CLIENT VOICES</h2>
    <div class="testimonials">
      <blockquote>"Rajkot's primary CA firm. They structured our corporate GST pipelines flawlessly and handle audits with absolute precision."</blockquote>
      <cite>— Manish Patel</cite>
    </div>
  </section>

  <section class="contact container" id="contact">
    <h2 class="center-title">VISIT THE OFFICE</h2>
    <p class="addr-text">${biz.address}</p>
    <div class="map-wrap">
      ${commonMap(biz.address)}
    </div>
  </section>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Engineered with trust.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-corp" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Inter', sans-serif; color: #1e293b; background: #f8fafc; }
html { scroll-behavior: smooth; }
.corp-promo-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; letter-spacing: 1px; }

.corp-nav { background: #fff; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; z-index: 100; }
.nav-box { display: flex; justify-content: space-between; align-items: center; height: 80px; }
.logo { font-size: 1.35rem; font-weight: 800; color: ${biz.theme}; }
.links a { color: #64748b; text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 0.9rem; transition: 0.2s; }
.links a:hover { color: ${biz.theme}; }
.nav-btn { padding: 10px 20px; background: #f1f5f9; color: #475569; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 0.85rem; }

.corp-hero { position: relative; padding: 80px 0; overflow: hidden; }
.hero-bg { position: absolute; top: 0; right: 0; width: 45%; height: 100%; background: #e0e7ff; border-radius: 40px 0 0 40px; z-index: -1; }
.hero-container { display: flex; align-items: center; gap: 60px; }
.hero-content { flex: 1.2; }
.badge { display: inline-block; padding: 6px 14px; background: #fff; border: 1px solid #e2e8f0; border-radius: 30px; font-size: 0.8rem; font-weight: 600; color: #64748b; margin-bottom: 20px; }
h1 { font-size: 3.5rem; line-height: 1.1; font-weight: 800; margin-bottom: 20px; letter-spacing: -1.5px; }
.text-gradient { color: ${biz.theme}; }
.subtitle { font-size: 1.2rem; color: #475569; line-height: 1.6; margin-bottom: 35px; }
.action-bar { display: flex; gap: 15px; }
.btn { padding: 14px 28px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 0.85rem; transition: 0.3s; }
.btn-primary { background: ${biz.theme}; color: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.btn-outline { border: 2px solid ${biz.theme}; color: ${biz.theme}; }
.btn:hover { transform: translateY(-2px); }

.hero-img { flex: 0.8; }
.hero-img img { width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

.container { max-width: 1100px; margin: 0 auto; padding: 80px 20px; border-bottom: 1px solid #e2e8f0; }
.stats-row { display: flex; gap: 40px; margin-top: 35px; }
.stat-box { background: #fff; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; flex: 1; text-align: center; }
.stat-box h3 { font-size: 2rem; color: ${biz.theme}; }

.center-title { text-align: center; font-size: 2rem; color: #1e293b; margin-bottom: 45px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card { background: #fff; border: 1px solid #e2e8f0; padding: 35px 25px; border-radius: 8px; }
.svc-card h3 { font-size: 1.25rem; margin-bottom: 10px; color: ${biz.theme}; }
.svc-card p { font-size: 0.9rem; color: #64748b; }

.why-list { list-style: none; }
.why-list li { font-size: 1.15rem; margin-bottom: 15px; }

blockquote { font-size: 1.4rem; font-style: italic; text-align: center; margin-bottom: 15px; line-height: 1.5; }
cite { display: block; text-align: center; font-weight: 700; color: ${biz.theme}; font-style: normal; }

.addr-text { text-align: center; margin-bottom: 30px; color: #64748b; }
.map-wrap { border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }

.footer { padding: 40px; text-align: center; color: #94a3b8; font-size: 0.85rem; }

.wa-float-corp { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .hero-container { flex-direction: column; }
  .hero-img { display: none; }
  .hero-bg { width: 100%; border-radius: 0; }
  .services-grid { grid-template-columns: 1fr; }
  .links, .nav-btn { display: none; }
}
`;
    return { html, css };
  },

  // 2. CA: MODERN TRUST (Ashara Ganatra)
  'ca-modern-trust': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Modern CA Firm Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- ALERTS TOP BAR -->
  <div class="trust-promo-strip">
    ⚡ TAX REPORT: INCOME TAX ITR SUBMISSION CHANNELS OPEN. SCHEDULE ASSISTED FILE WORK WITH OUR SPECIALISTS.
  </div>

  <div class="trust-layout">
    <header class="trust-head">
      <div class="brand">🏛️ ${biz.nameShort}</div>
      <nav class="links">
        <a href="#about">Philosophy</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Location</a>
      </nav>
      <a href="tel:${biz.phone}" class="t-btn-top">Call Now</a>
    </header>

    <main class="trust-main" id="home">
      <div class="content-left">
        <div class="rating-pill">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
        <h1>${biz.tagline}</h1>
        <p class="subtitle">${biz.subtitle}</p>
        <div class="trust-points">
          <span>✓ GST Certified</span><span>✓ NRI Experts</span><span>✓ Audit Assured</span>
        </div>
        <div class="actions">
          <a href="tel:${biz.phone}" class="t-btn">Speak to an Expert</a>
          <a href="https://wa.me/${biz.waNum}" class="t-btn outline">WhatsApp</a>
        </div>
      </div>
      <div class="image-right">
        <img src="assets/hero.png" alt="Accounting Workspace Team">
      </div>
    </main>

    <section class="about container" id="about">
      <h2>OUR MISSION</h2>
      <p>Ashara Ganatra & Associates provides expert business taxation and audit consultation in Rajkot. Operating out of Pedak Road, we specialize in helping SMEs launch compliance frameworks, submit regular ITR filings, and optimize accounting structures.</p>
    </section>

    <section class="services container" id="services">
      <h2>CURATED CA SERVICES</h2>
      <div class="services-grid">
        <div class="svc-card">
          <h3>ITR Tax Planning</h3>
          <p>Strategic individual and corporate tax planning for legal deductions.</p>
        </div>
        <div class="svc-card">
          <h3>Business Incorporation</h3>
          <p>LLP setups, company registration, and startup regulatory compliance.</p>
        </div>
      </div>
    </section>

    <section class="why container" id="why">
      <h2>WHY US</h2>
      <ul class="bullet-list">
        <li>👉 <strong>Modern Tech:</strong> Secure file shares and digital bookkeeping tools.</li>
        <li>👉 <strong>Transparent Fees:</strong> Upfront pricing cards with zero hidden additions.</li>
        <li>👉 <strong>Tax Optimization:</strong> Proactive optimization strategies.</li>
      </ul>
    </section>

    <section class="reviews container" id="reviews">
      <h2>CLIENTS FEEDBACK</h2>
      <blockquote>"Highly responsive CA team. They handled our firm registration and GST filings with absolute speed."</blockquote>
      <cite>— Suresh Ganatra</cite>
    </section>

    <section class="contact container" id="contact">
      <h2>THE OFFICE</h2>
      <p class="addr">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="footer">
      <p>© 2025 ${biz.name}. Growth and Trust.</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-trust" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Plus Jakarta Sans', sans-serif; background: #fff; color: #0f172a; }
html { scroll-behavior: smooth; }
.trust-promo-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; }

.trust-layout { min-height: 100vh; display: flex; flex-direction: column; }
header.trust-head { display: flex; justify-content: space-between; align-items: center; padding: 25px 50px; border-bottom: 1px solid #f1f5f9; position: sticky; top: 0; background: #fff; z-index: 100; }
.brand { font-size: 1.4rem; font-weight: 700; color: ${biz.theme}; }
.links a { color: #475569; text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 0.95rem; }
.links a:hover { color: ${biz.theme}; }
.t-btn-top { border: 1px solid #000; color: #000; text-decoration: none; padding: 8px 18px; border-radius: 50px; font-weight: 600; font-size: 0.85rem; }

.trust-main { display: flex; padding: 80px 50px; gap: 60px; max-width: 1400px; margin: 0 auto; align-items: center; }
.content-left { flex: 1.2; }
.rating-pill { display: inline-block; background: #ecfdf5; color: ${biz.theme}; padding: 6px 14px; border-radius: 30px; font-weight: 700; font-size: 0.85rem; margin-bottom: 25px; }
h1 { font-size: 3.5rem; line-height: 1.1; margin: 0 0 20px 0; letter-spacing: -1.5px; }
.text-gradient { color: ${biz.theme}; }
.subtitle { font-size: 1.2rem; color: #475569; line-height: 1.6; margin-bottom: 35px; }
.trust-points { display: flex; gap: 20px; margin-bottom: 40px; font-weight: 600; color: #334155; }
.actions { display: flex; gap: 15px; }
.t-btn { display: inline-block; background: ${biz.theme}; color: #fff; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: 700; transition: 0.3s; border: none; }
.t-btn.outline { background: transparent; border: 2px solid ${biz.theme}; color: ${biz.theme}; }
.t-btn:hover { transform: translateY(-2px); }

.image-right { flex: 0.8; }
.image-right img { width: 100%; border-radius: 20px; box-shadow: 0 15px 30px rgba(0,0,0,0.08); height: 350px; object-fit: cover; }

.container { max-width: 1000px; margin: 0 auto; padding: 80px 20px; border-bottom: 1px solid #f1f5f9; }
.container h2 { font-size: 1.8rem; margin-bottom: 25px; }
.about p { font-size: 1.2rem; line-height: 1.6; color: #475569; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc-card { border: 1px solid #f1f5f9; padding: 30px; background: #fafafa; border-radius: 12px; }
.svc-card h3 { font-size: 1.2rem; margin-bottom: 10px; color: ${biz.theme}; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.15rem; margin-bottom: 12px; }

blockquote { font-size: 1.35rem; font-style: italic; line-height: 1.5; margin-bottom: 15px; }
cite { font-style: normal; font-weight: 700; color: ${biz.theme}; }

.addr { font-size: 1.1rem; color: #475569; margin-bottom: 25px; }
.map-wrap { border-radius: 16px; overflow: hidden; }

.footer { padding: 40px; text-align: center; color: #94a3b8; font-size: 0.85rem; }

.wa-float-trust { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .trust-main { flex-direction: column; padding: 40px 20px; }
  .image-right { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .links { display: none; }
}
`;
    return { html, css };
  },

  // 3. CA: ELEGANT SERIF (C D H B)
  'ca-elegant-serif': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Reliable CA Services Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- ELEGANT TOP BAR -->
  <div class="serif-promo-strip">
    ✦ PROFESSIONAL NOTICE: CORPORATE AUDIT SERVICES SCHEDULE CHANNELS COMPLIMENTARY ADVISORY FOR NEW CLIENTS
  </div>

  <div class="serif-wrap">
    <header class="header">
      <div class="s-logo">${biz.name}</div>
      <nav class="links">
        <a href="#about">Philosophy</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Location</a>
      </nav>
      <div class="s-rating">★ ${biz.rating} Rating</div>
    </header>

    <section class="s-hero" id="home">
      <div class="s-text">
        <div class="badge">${biz.reviews} Google Reviews</div>
        <h1>${biz.tagline}</h1>
        <p>${biz.subtitle}</p>
        <div class="actions">
          <a href="tel:${biz.phone}" class="s-btn">Request Advisory</a>
          <a href="https://wa.me/${biz.waNum}" class="s-btn outline">WhatsApp</a>
        </div>
      </div>
      <div class="s-image"><img src="assets/hero.png" alt="Corporate Board Room"></div>
    </section>

    <section class="about" id="about">
      <h2>01 / THE PHILOSOPHY</h2>
      <p>C D H B And Company represents professional chartered accountancy at 150 Feet Ring Road. We deliver structured solutions for company registration, auditing trials, compliance setups, and strategic corporate taxation.</p>
    </section>

    <section class="services" id="services">
      <h2>02 / CLINICAL CA WORK</h2>
      <div class="services-grid">
        <div class="svc-card">
          <h3>Statutory Auditing</h3>
          <p>Precise financial auditing frameworks mapped to regulatory compliance.</p>
        </div>
        <div class="svc-card">
          <h3>Corporate Compliance</h3>
          <p>ROC filings, LLPs setups, company registration, ongoing guidance.</p>
        </div>
      </div>
    </section>

    <section class="why" id="why">
      <h2>03 / WHY C D H B</h2>
      <ul class="why-list">
        <li>✦ Years of reliable accounting experience.</li>
        <li>✦ Autoclaved security structures for data protection.</li>
        <li>✦ Dedicated desk specialists for tax optimizations.</li>
      </ul>
    </section>

    <section class="reviews" id="reviews">
      <h2>04 / TESTIMONIAL</h2>
      <blockquote>"Rajkot's primary CA firm. They handle our corporate audit frameworks with absolute expertise."</blockquote>
      <cite>— Suresh Shah</cite>
    </section>

    <section class="contact" id="contact">
      <h2>05 / THE LOCATION</h2>
      <p>${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="s-foot">
      <div><strong>Office:</strong> ${biz.addressShort}</div>
      <div><strong>Phone:</strong> ${biz.phone}</div>
      <div>© 2025 ${biz.name}. Serif Class.</div>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-serif" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Source Sans Pro', sans-serif; background: #faf9f6; color: #2d3748; padding: 20px; box-sizing: border-box; min-height: 100vh; }
html { scroll-behavior: smooth; }
.serif-promo-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-family: 'Libre Baskerville', serif; font-size: 0.8rem; font-style: italic; }

.serif-wrap { border: 1px solid #cbd5e1; padding: 40px; min-height: calc(100vh - 40px); display: flex; flex-direction: column; box-sizing: border-box; }
header.header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 60px; }
.s-logo { font-family: 'Libre Baskerville', serif; font-weight: 700; font-size: 1.6rem; color: ${biz.theme}; }
.links a { color: #666; text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 0.9rem; }
.links a:hover { color: ${biz.theme}; }
.s-rating { font-family: 'Libre Baskerville', serif; font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: ${biz.theme}; }

.s-hero { display: flex; gap: 60px; align-items: center; margin-bottom: 80px; }
.s-text { flex: 1.1; }
.badge { display: inline-block; background: rgba(0,0,0,0.05); padding: 6px 12px; font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; }
.s-hero h1 { font-family: 'Libre Baskerville', serif; font-size: 3.2rem; line-height: 1.15; color: #1a202c; margin-bottom: 20px; }
.s-hero p { font-size: 1.2rem; line-height: 1.6; color: #4a5568; margin-bottom: 35px; }
.actions { display: flex; gap: 15px; }
.s-btn { display: inline-block; border: 1px solid ${biz.theme}; color: ${biz.theme}; padding: 14px 28px; text-decoration: none; font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; transition: 0.3s; }
.s-btn.outline { background: ${biz.theme}; color: #fff; }
.s-btn:hover { background: #000; color: #fff; border-color: #000; }

.s-image { flex: 0.9; }
.s-image img { width: 100%; height: 350px; object-fit: cover; filter: sepia(0.15); border-radius: 8px; }

section { padding: 60px 0; border-bottom: 1px solid #e2e8f0; }
section h2 { font-family: 'Libre Baskerville', serif; font-size: 1.8rem; margin-bottom: 20px; color: #1a202c; }
.about p { font-size: 1.2rem; line-height: 1.7; color: #4a5568; max-width: 800px; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc-card { border: 1px solid #cbd5e1; padding: 25px; background: #fff; }
.svc-card h3 { font-family: 'Libre Baskerville', serif; font-size: 1.2rem; color: ${biz.theme}; margin-bottom: 10px; }

.why-list { list-style: none; }
.why-list li { font-size: 1.15rem; margin-bottom: 12px; }

blockquote { font-family: 'Libre Baskerville', serif; font-size: 1.5rem; font-style: italic; line-height: 1.5; margin-bottom: 15px; }
cite { font-style: normal; font-weight: 700; color: ${biz.theme}; }

.map-wrap { border-radius: 12px; overflow: hidden; }

.s-foot { margin-top: 60px; border-top: 1px solid #e2e8f0; padding-top: 25px; display: flex; justify-content: space-between; font-size: 0.85rem; color: #718096; }

.wa-float-serif { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .s-hero { flex-direction: column; }
  .s-image { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .links { display: none; }
}
`;
    return { html, css };
  },

  // 4. CA: MINIMAL SLATE (J H Jasani)
  'ca-minimal-slate': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | CA Firm RK Prime Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- FINANCIAL ALERT TICKER -->
  <div class="slate-promo-strip">
    [GST_ANNOUNCEMENT] >> ANUAL COMPLIANCE FILINGS RUNNING. CONTACT OUR DESK AT RK PRIME FOR DATA FORWARD.
  </div>

  <main class="slate-main">
    <div class="slate-left">
      <header class="s-head">
        <div class="m-logo">⚖️ ${biz.name}</div>
        <nav class="links">
          <a href="#about">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Location</a>
        </nav>
      </header>

      <div class="m-content" id="home">
        <div class="stars">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
        <h1>${biz.tagline}</h1>
        <p>${biz.subtitle}</p>
        <div class="actions">
          <a href="tel:${biz.phone}" class="m-btn">Inquire Now →</a>
          <a href="https://wa.me/${biz.waNum}" class="m-btn outline">WhatsApp</a>
        </div>
      </div>

      <section class="about" id="about">
        <h2>[01_THE_STATION]</h2>
        <p>J H Jasani & Co is a premier CA firm situated at RK Prime, Rajkot. We specialize in statutory audits, corporate taxation planning, and GST filing pipelines for private companies.</p>
      </section>

      <section class="services" id="services">
        <h2>[02_THE_SERVICES]</h2>
        <div class="services-grid">
          <div class="svc">
            <h3>Audit Assurance</h3>
            <p>STATUTORY audits, system reviews, compliance reports.</p>
          </div>
          <div class="svc">
            <h3>ITR Filings</h3>
            <p>Corporate and individual tax planning, legal optimizations.</p>
          </div>
        </div>
      </section>

      <section class="why" id="why">
        <h2>[03_THE_BENCHMARKS]</h2>
        <ul class="bullet-list">
          <li>✓ Precision tracking systems.</li>
          <li>✓ 150 Feet Ring Road location.</li>
          <li>✓ Quick cloud digital portal access.</li>
        </ul>
      </section>

      <section class="reviews" id="reviews">
        <h2>[04_THE_TESTIMONIAL]</h2>
        <blockquote>"Excellent CA firm. They handle our corporate portfolios with absolute precision."</blockquote>
        <cite>— Suresh Shah</cite>
      </section>

      <section class="contact" id="contact">
        <h2>[05_THE_ADDRESS]</h2>
        <p class="m-addr">${biz.address}</p>
        <div class="map-wrap">
          ${commonMap(biz.address)}
        </div>
      </section>

      <footer class="footer">
        <p>© 2025 ${biz.name}. Managed cleanly.</p>
      </footer>
    </div>
    <div class="slate-right"><img src="assets/hero.png" alt="Office building view"></div>
  </main>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-slate" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Manrope', sans-serif; background: #1e293b; color: #fff; }
html { scroll-behavior: smooth; }
.slate-promo-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-family: monospace; font-size: 0.85rem; font-weight: 700; }

.slate-main { display: flex; min-height: 100vh; }
.slate-left { flex: 1.1; background: ${biz.theme}; padding: 60px; display: flex; flex-direction: column; gap: 80px; }

header.s-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
.m-logo { font-size: 1.3rem; font-weight: 800; }
.links a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; font-weight: 600; margin-left: 20px; }
.links a:hover { color: #fff; }

.m-content { max-width: 600px; }
.m-content .stars { font-size: 0.9rem; font-weight: 700; color: #ffbc00; margin-bottom: 20px; }
.m-content h1 { font-size: 3.2rem; line-height: 1.1; margin-bottom: 20px; font-weight: 800; }
.m-content p { font-size: 1.15rem; opacity: 0.85; margin-bottom: 35px; }
.actions { display: flex; gap: 15px; }
.m-btn { display: inline-block; background: #fff; color: ${biz.theme}; padding: 14px 28px; text-decoration: none; font-weight: 800; border-radius: 4px; transition: 0.3s; font-size: 0.85rem; }
.m-btn.outline { background: transparent; border: 2px solid #fff; color: #fff; }
.m-btn:hover { transform: translateX(5px); }

section h2 { font-size: 1.4rem; font-weight: 700; margin-bottom: 25px; color: #ffbc00; }
section p { font-size: 1.15rem; line-height: 1.6; opacity: 0.85; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc { background: rgba(255,255,255,0.05); padding: 25px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
.svc h3 { margin-top: 0; margin-bottom: 10px; font-size: 1.15rem; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.1rem; margin-bottom: 10px; }

blockquote { font-style: italic; font-size: 1.3rem; margin-bottom: 10px; }
cite { font-style: normal; font-weight: 700; }

.map-wrap { border-radius: 12px; overflow: hidden; margin-top: 15px; }

.slate-right { flex: 0.9; position: sticky; top: 0; height: 100vh; background: #000; }
.slate-right img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }

.footer { color: rgba(255,255,255,0.4); font-size: 0.8rem; }

.wa-float-slate { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:1000px) {
  .slate-main { flex-direction: column; }
  .slate-right { display: none; }
  .slate-left { padding: 30px 20px; }
  .links { display: none; }
  h1 { font-size: 2.2rem; }
}
`;
    return { html, css };
  },

  // 5. CA: BOLD FINANCE (CA K B Madhani)
  'ca-bold-finance': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | R K Empire Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Karla:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- TEXT SCROLLING ANNOUNCEMENT -->
  <div class="bold-strip">
    <span>🔥 CA K B MADHANI TAXATION AUDITS • GST FILINGS • STARTUP SETUP SERVICES • REGISTER NOW 🔥</span>
  </div>

  <div class="bold-wrap">
    <header class="b-head">
      <div class="b-logo">⚖️ ${biz.nameShort}</div>
      <nav class="links">
        <a href="#about">Philosophy</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Location</a>
      </nav>
      <div class="b-contact">Call: ${biz.phone}</div>
    </header>

    <div class="b-hero" id="home">
      <h1 class="b-title">${biz.tagline}</h1>
      <div class="b-grid">
        <div class="b-box img-box"><img src="assets/hero.png" alt="CA workspace design"></div>
        <div class="b-box text-box">
          <div class="b-rating">${biz.rating}★ Rating (${biz.reviews} reviews)</div>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="b-btn">Call Now</a>
            <a href="https://wa.me/${biz.waNum}" class="b-btn outline">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>

    <section class="about" id="about">
      <h2>01 / THE PRACTICE</h2>
      <p>CA K B Madhani & Associates near Mavdi Circle, Rajkot offers specialized corporate tax audit solutions. We handle corporate GST filing pipelines, company incorporation forms, and strategic capital structuring.</p>
    </section>

    <section class="services" id="services">
      <h2>02 / THE SERVICES</h2>
      <div class="services-grid">
        <div class="svc-card">
          <h3>GST Compliance</h3>
          <p>Registration, quarterly filings, audit responses, compliance setups.</p>
        </div>
        <div class="svc-card">
          <h3>Tax Optimization</h3>
          <p>ITR filings for corporate boards, SMEs, NRI investments.</p>
        </div>
      </div>
    </section>

    <section class="why" id="why">
      <h2>03 / WHY CHOOSE US</h2>
      <ul class="bullet-list">
        <li>✓ Personalized strategic tax tracking.</li>
        <li>✓ Experienced team in R K Empire.</li>
        <li>✓ Quick communication backups.</li>
      </ul>
    </section>

    <section class="reviews" id="reviews">
      <h2>04 / TESTIMONIAL</h2>
      <blockquote>"Highly precise and supportive tax consultant. They handled ROC filings for our new enterprise flawlessly."</blockquote>
      <cite>— Nitin Vegad</cite>
    </section>

    <section class="contact" id="contact">
      <h2>05 / THE LOCATION</h2>
      <p class="b-loc">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>
  </div>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Managed with focus.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-bold" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Karla', sans-serif; background: #111; color: #fff; }
html { scroll-behavior: smooth; }

.bold-strip { background: #000; color: ${biz.theme}; padding: 12px; font-family: 'Oswald', sans-serif; font-size: 1.3rem; text-transform: uppercase; overflow: hidden; white-space: nowrap; border-bottom: 2px solid ${biz.theme}; }
.bold-strip span { display: inline-block; animation: marquee 20s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

.bold-wrap { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
header.b-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #222; padding-bottom: 20px; margin-bottom: 40px; }
.b-logo { font-family: 'Oswald', sans-serif; font-size: 1.8rem; color: ${biz.theme}; text-transform: uppercase; }
.links a { color: #888; text-decoration: none; font-family: 'Oswald', sans-serif; font-size: 0.95rem; margin-left: 20px; }
.links a:hover { color: #fff; }
.b-contact { font-weight: 700; font-family: 'Oswald', sans-serif; }

.b-hero { margin-bottom: 60px; }
.b-title { font-family: 'Oswald', sans-serif; font-size: 4.5rem; text-transform: uppercase; line-height: 1; margin: 0 0 40px 0; }
.text-gradient { color: ${biz.theme}; }
.b-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; }
.img-box img { width: 100%; height: 400px; object-fit: cover; border-radius: 12px; }
.text-box { background: #222; padding: 40px; border-radius: 12px; display: flex; flex-direction: column; justify-content: center; }
.b-rating { color: ${biz.theme}; font-family: 'Oswald', sans-serif; font-weight: 700; font-size: 1.25rem; margin-bottom: 15px; }
.text-box p { font-size: 1.05rem; line-height: 1.6; color: #ccc; margin-bottom: 30px; }

.actions { display: flex; gap: 15px; }
.b-btn { display: inline-block; background: ${biz.theme}; color: #fff; text-align: center; padding: 14px 28px; text-decoration: none; font-family: 'Oswald', sans-serif; font-size: 1.1rem; border-radius: 4px; transition: 0.3s; border: none; }
.b-btn.outline { background: transparent; border: 2px solid #fff; color: #fff; }
.b-btn:hover { background: #fff; color: #111; }

section { padding: 80px 0; border-bottom: 2px solid #222; }
section h2 { font-family: 'Oswald', sans-serif; font-size: 2.2rem; color: ${biz.theme}; margin-bottom: 25px; }
.about p { font-size: 1.25rem; line-height: 1.6; color: #ccc; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc-card { border: 1px solid #222; padding: 30px; background: #1c1c1c; border-radius: 8px; }
.svc-card h3 { font-family: 'Oswald', sans-serif; font-size: 1.3rem; margin-bottom: 10px; color: ${biz.theme}; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.15rem; margin-bottom: 12px; }

blockquote { font-style: italic; font-size: 1.35rem; margin-bottom: 15px; }
cite { font-weight: 700; color: ${biz.theme}; font-style: normal; }

.b-loc { font-size: 1.1rem; color: #888; margin-bottom: 20px; }
.map-wrap { border-radius: 12px; overflow: hidden; }

.footer { padding: 40px; text-align: center; color: #555; font-size: 0.85rem; }

.wa-float-bold { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

@media(max-width:900px) {
  .b-grid { grid-template-columns: 1fr; }
  .img-box { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .b-title { font-size: 2.8rem; }
  .links { display: none; }
}
`;
    return { html, css };
  },

  // 6. CA: SPLIT CLASSIC (Dudhatra And Co.)
  'ca-split-classic': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | RK Empire Mavdi Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Mulish:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- FINANCIAL ALERT TICKER -->
  <div class="cl-promo-strip">
    ⚡ STATUTORY AUDITING: AUDIT COMPLIANCE MODULES ACTIVE FOR R K EMPIRE ENTERPRISES. SCHEDULE ONLINE.
  </div>

  <div class="cl-layout">
    <div class="cl-img"><img src="assets/hero.png" alt="Corporate desk display"></div>
    <div class="cl-content">
      <div class="cl-inner">
        <header class="c-head">
          <h2 class="cl-logo">⚖️ ${biz.nameShort}</h2>
          <nav class="links">
            <a href="#about">Philosophy</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Location</a>
          </nav>
        </header>

        <section class="hero-sec" id="home">
          <div class="cl-divider"></div>
          <div class="cl-meta">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="cl-btn">Contact Office</a>
            <a href="https://wa.me/${biz.waNum}" class="cl-btn outline">WhatsApp</a>
          </div>
        </section>

        <section class="about-sec" id="about">
          <h2>THE BENCHMARK</h2>
          <p>Dudhatra And Co. at R K Empire, Mavdi provides dependable corporate auditing trials. We build long-term partnerships with firms through secure compliance setups, structured tax filing, and transparent financial reporting.</p>
        </section>

        <section class="services-sec" id="services">
          <h2>THE PROCESS</h2>
          <div class="services-grid">
            <div class="svc">
              <h3>Corporate Taxation</h3>
              <p>Income tax planning, ROC filings, compliance structuring.</p>
            </div>
            <div class="svc">
              <h3>Financial Auditing</h3>
              <p>Statutory audits, internal accounting audits, system risk controls.</p>
            </div>
          </div>
        </section>

        <section class="why-sec" id="why">
          <h2>THE PROTOCOLS</h2>
          <ul class="bullet-list">
            <li>✓ Autoclave disinfected document management systems.</li>
            <li>✓ Trusted strategic desk advisers.</li>
            <li>✓ Fast digital client portal communications.</li>
          </ul>
        </section>

        <section class="reviews-sec" id="reviews">
          <h2>TESTIMONIAL</h2>
          <blockquote>"Trustworthy, professional, and always up-to-date with latest tax regulations. Handled our ROC compliance perfectly."</blockquote>
          <cite>— Alpesh Patel</cite>
        </section>

        <section class="contact-sec" id="contact">
          <h2>THE OFFICE</h2>
          <p class="cl-addr">${biz.address}</p>
          <div class="map-wrap">
            ${commonMap(biz.address)}
          </div>
        </section>
      </div>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-split-classic" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Mulish', sans-serif; background: #fff; color: #333; }
html { scroll-behavior: smooth; }
.cl-promo-strip { background: ${biz.theme}; color: #fff; text-align: center; padding: 12px; font-size: 0.85rem; font-weight: 700; }

.cl-layout { display: flex; min-height: 100vh; }
.cl-img { flex: 0.9; position: sticky; top: 0; height: 100vh; }
.cl-img img { width: 100%; height: 100%; object-fit: cover; }

.cl-content { flex: 1.1; display: flex; flex-direction: column; padding: 60px; background: #f8fafc; overflow-y: auto; }
.cl-inner { max-width: 650px; display: flex; flex-direction: column; gap: 80px; }

header.c-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; }
.cl-logo { font-family: 'Merriweather', serif; font-size: 1.4rem; color: ${biz.theme}; margin: 0; }
.links a { color: #64748b; text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 0.85rem; }
.links a:hover { color: ${biz.theme}; }

.cl-divider { width: 50px; height: 3px; background: ${biz.theme}; margin-bottom: 25px; }
.cl-meta { font-size: 0.9rem; font-weight: 700; color: ${biz.theme}; margin-bottom: 15px; letter-spacing: 1px; }
h1 { font-family: 'Merriweather', serif; font-size: 3rem; line-height: 1.2; margin: 0 0 20px 0; color: #0f172a; }
.hero-sec p { font-size: 1.1rem; line-height: 1.6; color: #64748b; margin-bottom: 35px; }

.actions { display: flex; gap: 15px; }
.cl-btn { display: inline-block; border: 2px solid ${biz.theme}; color: ${biz.theme}; padding: 14px 28px; text-decoration: none; font-weight: 700; transition: 0.3s; font-size: 0.85rem; text-transform: uppercase; }
.cl-btn.outline { background: ${biz.theme}; color: #fff; }
.cl-btn:hover { transform: translateY(-2px); }

.about-sec h2, .services-sec h2, .why-sec h2, .reviews-sec h2, .contact-sec h2 { font-family: 'Merriweather', serif; font-size: 1.6rem; color: #0f172a; margin-bottom: 20px; }
.about-sec p { font-size: 1.1rem; line-height: 1.6; color: #64748b; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc { background: #fff; border: 1px solid #e2e8f0; padding: 25px; border-radius: 8px; }
.svc h3 { font-family: 'Merriweather', serif; font-size: 1.15rem; color: ${biz.theme}; margin-bottom: 8px; }
.svc p { font-size: 0.9rem; color: #64748b; margin: 0; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.1rem; margin-bottom: 10px; }

blockquote { font-style: italic; font-size: 1.25rem; line-height: 1.5; color: #475569; margin-bottom: 10px; }
cite { font-weight: 700; color: ${biz.theme}; font-style: normal; }

.cl-addr { font-size: 1.05rem; color: #64748b; }
.map-wrap { border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }

.wa-float-split-classic { position: fixed; bottom: 30px; left: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:1000px) {
  .cl-layout { flex-direction: column; }
  .cl-img { display: none; }
  .cl-content { padding: 40px 20px; }
  .links { display: none; }
}
`;
    return { html, css };
  },

  // 7. CA: CARD LAYOUT (S A D P & Co.)
  'ca-card-layout': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Collegewadi Rajkot</title>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card-bg">
    <!-- FLOATING TOP PROMO -->
    <div class="floating-promo-pill">
      🔥 AMBER ANNOUNCEMENT: COMPLIMENTARY FINANCIAL STRUCTURAL ANALYSIS WITH TAX FILINGS ENQUIRIES
    </div>

    <div class="card-main">
      <header class="c-head">
        <div class="c-brand">🏛️ ${biz.name}</div>
        <nav class="links">
          <a href="#about">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Location</a>
        </nav>
        <div class="c-rating">★ ${biz.rating}</div>
      </header>

      <section class="c-body" id="home">
        <div class="c-text">
          <div class="stars-badge">${biz.reviews} Trusted Reviews</div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="c-btn">Book Consultation</a>
            <a href="https://wa.me/${biz.waNum}" class="c-btn outline">WhatsApp</a>
          </div>
        </div>
        <div class="c-img"><img src="assets/hero.png" alt="CA Team Workspace"></div>
      </section>

      <section class="about" id="about">
        <h2>THE FIRM PROFILE</h2>
        <p>S A D P & Co. delivers professional chartered accountancy solutions in Rajkot. Operating near Kathiyawad Gymkhana, we specialize in statutory audits, corporate filings compliance, tax planning, and strategic capital structuring.</p>
      </section>

      <section class="services" id="services">
        <h2>CLINICAL CA WORK</h2>
        <div class="services-grid">
          <div class="svc">
            <h3>Corporate Filings</h3>
            <p>ROC filings, LLC registrations, company compliance audits.</p>
          </div>
          <div class="svc">
            <h3>Audit Advisory</h3>
            <p>Internal corporate audits, system risk review, tax optimizations.</p>
          </div>
        </div>
      </section>

      <section class="why" id="why">
        <h2>WHY WORK WITH US</h2>
        <ul class="bullet-list">
          <li>✓ Highly experienced desk specialists.</li>
          <li>✓ Meticulously disinfected operations.</li>
          <li>✓ Secure cloud client folders.</li>
        </ul>
      </section>

      <section class="reviews" id="reviews">
        <h2>TESTIMONIALS</h2>
        <blockquote>"Extremely professional accounting advisory firm. They guided our new enterprise through complex ROC regulations flawlessly."</blockquote>
        <cite>— Suresh Dave</cite>
      </section>

      <section class="contact" id="contact">
        <h2>THE LOCATION</h2>
        <p class="c-loc">${biz.address}</p>
        <div class="map-wrap">
          ${commonMap(biz.address)}
        </div>
      </section>

      <footer class="c-foot">
        <div class="c-rev">${biz.reviews} Google Reviews</div>
        <div class="c-loc">Rajkot, Gujarat</div>
        <div class="copy">© 2025 ${biz.name}. Material Card design.</div>
      </footer>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-material" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Outfit', sans-serif; background: #e2e8f0; padding: 20px; box-sizing: border-box; min-height: 100vh; display: flex; align-items: center; justify-content: center; color: #0f172a; }
html { scroll-behavior: smooth; }

.floating-promo-pill { background: #fff; border: 1px solid #cbd5e1; padding: 12px 20px; border-radius: 12px; font-weight: 700; font-size: 0.85rem; color: #1e293b; text-align: center; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.03); width: 100%; max-width: 1200px; }

.card-main { background: #fff; width: 100%; max-width: 1200px; border-radius: 30px; box-shadow: 0 25px 50px rgba(0,0,0,0.05); padding: 50px; display: flex; flex-direction: column; gap: 80px; }

header.c-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
.c-brand { font-size: 1.5rem; font-weight: 900; color: ${biz.theme}; }
.links a { color: #64748b; text-decoration: none; font-weight: 600; margin-left: 20px; font-size: 0.9rem; }
.links a:hover { color: ${biz.theme}; }
.c-rating { background: #fef3c7; color: ${biz.theme}; padding: 6px 16px; border-radius: 30px; font-weight: 700; font-size: 0.85rem; }

.c-body { display: flex; gap: 40px; align-items: center; }
.c-text { flex: 1.1; }
.stars-badge { display: inline-block; background: #ecfdf5; color: ${biz.theme}; padding: 6px 14px; border-radius: 30px; font-weight: 700; font-size: 0.8rem; margin-bottom: 20px; }
.c-body h1 { font-size: 3.5rem; font-weight: 900; line-height: 1.1; margin-bottom: 20px; letter-spacing: -1.5px; }
.text-gradient { color: ${biz.theme}; }
.c-body p { font-size: 1.2rem; color: #64748b; line-height: 1.6; margin-bottom: 35px; }
.actions { display: flex; gap: 15px; }
.c-btn { display: inline-block; background: ${biz.theme}; color: #fff; padding: 15px 30px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 0.9rem; transition: 0.3s; border: none; }
.c-btn.outline { background: transparent; border: 2px solid ${biz.theme}; color: ${biz.theme}; }
.c-btn:hover { transform: translateY(-2px); }

.c-img { flex: 0.9; }
.c-img img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); height: 350px; object-fit: cover; }

section h2 { font-size: 1.6rem; font-weight: 900; margin-bottom: 25px; color: ${biz.theme}; }
.about p { font-size: 1.15rem; line-height: 1.6; color: #64748b; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc { background: #f8fafc; border: 1px solid #edf2f7; padding: 30px; border-radius: 12px; }
.svc h3 { margin-top: 0; margin-bottom: 10px; font-size: 1.25rem; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.1rem; margin-bottom: 12px; }

blockquote { font-style: italic; font-size: 1.4rem; line-height: 1.5; margin-bottom: 15px; }
cite { font-style: normal; font-weight: 700; color: ${biz.theme}; }

.c-loc { font-size: 1.1rem; color: #64748b; }
.map-wrap { border-radius: 16px; overflow: hidden; margin-top: 15px; }

.c-foot { display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 25px 40px; border-radius: 20px; color: #64748b; font-weight: 600; font-size: 0.85rem; }
.c-foot .copy { font-size: 0.8rem; color: #94a3b8; }

.wa-float-material { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .c-body { flex-direction: column; }
  .c-img { display: none; }
  .c-foot { flex-direction: column; gap: 15px; text-align: center; }
  .links { display: none; }
}
`;
    return { html, css };
  }

};

console.log("Generating BATCH 4: 7 Unique CA Designs...\n");

batch4.forEach(biz => {
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

console.log("\nBatch 4 completed successfully!");
