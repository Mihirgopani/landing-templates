const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

// Photographers Database
const batch3 = [
  {
    slug: 'studio-neelam', name: 'Studio Neelam', shortName: 'StudioNeelam',
    tagline: 'Capturing Moments.<br><span class="text-gradient">Creating Memories.</span>',
    subtitle: "Sitabuldi's legendary photography studio since decades. Wedding photography, portraits, and cinematic films that tell your story.",
    rating: 4.8, reviews: 616, phone: '+918446596456', waNum: '918446596456',
    address: '26, Maharajbagh Rd, Sitabuldi, Nagpur 440001',
    addressShort: 'Sitabuldi, Nagpur 440001',
    style: 'photo-gallery',
    theme: '#D4AF37' // Gold
  },
  {
    slug: 'lensation-studio', name: 'Lensation Studio', shortName: 'Lensation',
    tagline: 'Through Our Lens.<br><span class="text-gradient">Your Story Unfolds.</span>',
    subtitle: "New Mankapur's creative photography studio. Wedding, pre-wedding, and portrait photography with a unique artistic vision.",
    rating: 4.9, reviews: 168, phone: '+918237299935', waNum: '918237299935',
    address: 'Flat No 308, Anandsagar Appt, 2, New Mankapur, Nagpur 440030',
    addressShort: 'New Mankapur, Nagpur 440030',
    style: 'photo-cinematic',
    theme: '#e1b12c' // Yellow Gold
  },
  {
    slug: 'thakurs-film-city', name: "Thakur's Film City", shortName: 'ThakursFilm',
    tagline: 'Cinematic Vision.<br><span class="text-gradient">Timeless Frames.</span>',
    subtitle: "Katol Road's best photography studio. Wedding photography, pre-wedding shoots, and cinematic wedding films with a personal touch.",
    rating: 4.8, reviews: 81, phone: '+919699161108', waNum: '919699161108',
    address: 'Plot No. 203, Katol Rd, Pension Nagar, Police Line Takli, Nagpur 440013',
    addressShort: 'Katol Rd, Nagpur 440013',
    style: 'photo-film-strip',
    theme: '#fbc531' // Light Gold
  },
  {
    slug: 'mp-photography', name: 'MP Photography', shortName: 'MPPhoto',
    tagline: 'Picture Perfect.<br><span class="text-gradient">Every Time.</span>',
    subtitle: "Nagpur's rising star in photography. Wedding, portrait, and event photography with creative flair and professional precision.",
    rating: 5.0, reviews: 79, phone: '+918788857258', waNum: '918788857258',
    address: 'Dayanand Park Road, MP Photography & Films, Nagpur 440014',
    addressShort: 'Nagpur 440014',
    style: 'photo-minimal-portfolio',
    theme: '#000000' // B&W theme
  }
];

const waSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366"/></svg>`;

const commonMap = (address) => `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed" width="100%" height="300" style="border:0; border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>`;

const generators = {

  // 1. PHOTO: GALLERY GRID (Studio Neelam)
  'photo-gallery': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Professional Photography Nagpur</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Montserrat:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="gallery-layout">
    <aside class="gallery-nav">
      <div class="sidebar-top">
        <div class="brand">${biz.name}</div>
        <nav class="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#choose">Why Us</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Location</a>
        </nav>
      </div>
      <div class="contact-box">
        <p class="nav-addr">${biz.addressShort}</p>
        <a href="tel:${biz.phone}" class="g-btn">BOOK A SHOOT</a>
        <a href="https://wa.me/${biz.waNum}" class="g-btn wa">WHATSAPP</a>
      </div>
    </aside>

    <main class="gallery-main">
      <!-- HIGHLIGHT TEXT STRIP -->
      <div class="highlight-promo-strip">
        ✦ EXCLUSIVE NAGPUR OFFER: RESERVE WEDDING OR PORTRAIT PACKAGE VIA WA & SECURE A COMPLIMENTARY PRE-WEDDING ALBUM
      </div>

      <section class="hero-sec" id="home">
        <div class="hero-split">
          <div class="hero-text">
            <div class="badge">★ ${biz.rating} Rating (${biz.reviews} Reviews)</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
          </div>
          <div class="hero-media"><img src="assets/hero.png" alt="Photography Art View"></div>
        </div>
      </section>

      <section class="about-sec" id="about">
        <h2>01 / THE HERITAGE</h2>
        <p>Studio Neelam on Maharajbagh Road represents decades of portrait design. We map light profiles biometrically. Our cameras, backdrops, and editing pipelines are customized to preserve memories with artistic precision.</p>
        <div class="stats-row">
          <div><h3>616+</h3><span>Google Reviews</span></div>
          <div><h3>10+</h3><span>Professional Experts</span></div>
        </div>
      </section>

      <section class="services-sec" id="services">
        <h2>02 / THE FORMULATIONS</h2>
        <div class="services-grid">
          <div class="svc-card">
            <h3>Wedding Cinematic Coverage</h3>
            <p>Comprehensive day shoot, gimbal frames, drone alignment.</p>
          </div>
          <div class="svc-card">
            <h3>Artistic Portraits</h3>
            <p>Fine studio lighting profiles for models and business heads.</p>
          </div>
          <div class="svc-card">
            <h3>Creative Pre-Weddings</h3>
            <p>Romantic captures at selected scenic locations.</p>
          </div>
        </div>
      </section>

      <section class="choose-sec" id="choose">
        <h2>03 / WHY CHOOSE US</h2>
        <ul class="bullet-list">
          <li>✦ <strong>Decades of Experience:</strong> Capturing families since generations.</li>
          <li>✦ <strong>Modern Gear:</strong> High-spec camera bodies and portrait lenses.</li>
          <li>✦ <strong>Fast Delivery:</strong> Edited digital galleries delivered quickly.</li>
        </ul>
      </section>

      <section class="reviews-sec" id="reviews">
        <h2>04 / THE FEEDBACK</h2>
        <blockquote>"Outstanding portrait studio. They captured my wedding with absolute artistry. The album print is outstanding."</blockquote>
        <cite>— Alok Deshmukh</cite>
      </section>

      <section class="contact-sec" id="contact">
        <h2>05 / THE LOCATION</h2>
        <p>${biz.address}</p>
        <div class="map-wrap">
          ${commonMap(biz.address)}
        </div>
      </section>

      <footer class="footer">
        <p>© 2025 ${biz.name}. Managed with gold standards.</p>
      </footer>
    </main>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-photo" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Montserrat', sans-serif; background: #fafafa; color: #111; }
html { scroll-behavior: smooth; }
.gallery-layout { display: flex; }

.gallery-nav { width: 300px; height: 100vh; position: fixed; left: 0; top: 0; background: #0c0c0e; color: #fff; padding: 40px 30px; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid #1c1c1c; z-index: 100; }
.brand { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 700; color: ${biz.theme}; line-height: 1.1; margin-bottom: 40px; }
.links { display: flex; flex-direction: column; gap: 15px; }
.links a { color: #888; text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: 0.3s; }
.links a:hover { color: #fff; padding-left: 5px; }
.contact-box { font-size: 0.85rem; color: #555; }
.nav-addr { margin-bottom: 20px; color: #888; }
.g-btn { display: block; width: 100%; padding: 12px; text-align: center; text-decoration: none; background: ${biz.theme}; color: #000; font-weight: 700; font-size: 0.8rem; letter-spacing: 1.5px; border-radius: 4px; margin-bottom: 10px; transition: 0.3s; }
.g-btn.wa { background: transparent; border: 1px solid #fff; color: #fff; }
.g-btn:hover { background: #fff; color: #000; }

.gallery-main { margin-left: 300px; flex: 1; }
.highlight-promo-strip { background: ${biz.theme}; color: #000; font-weight: 700; text-align: center; padding: 12px; font-size: 0.8rem; letter-spacing: 1px; }

.hero-sec { padding: 80px 40px; border-bottom: 1px solid #eee; }
.hero-split { display: flex; gap: 40px; align-items: center; }
.hero-text { flex: 1.1; }
.badge { display: inline-block; border: 1px solid ${biz.theme}; color: ${biz.theme}; padding: 6px 14px; border-radius: 30px; font-size: 0.8rem; font-weight: 700; margin-bottom: 20px; }
.hero-text h1 { font-family: 'Cormorant Garamond', serif; font-size: 3.8rem; line-height: 1.1; margin-bottom: 20px; }
.text-gradient { color: ${biz.theme}; }
.hero-text p { font-size: 1.15rem; color: #666; line-height: 1.6; }
.hero-media { flex: 0.9; border-radius: 12px; overflow: hidden; height: 350px; }
.hero-media img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.1); }

section { padding: 80px 40px; border-bottom: 1px solid #eee; }
section h2 { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: ${biz.theme}; margin-bottom: 25px; }
.about-sec p { font-size: 1.25rem; line-height: 1.7; color: #444; max-width: 800px; }
.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stats-row h3 { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: #111; }
.stats-row span { font-size: 0.85rem; color: #888; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-card { border: 1px solid #eee; padding: 30px; background: #fff; border-radius: 8px; }
.svc-card h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; margin-bottom: 10px; }
.svc-card p { font-size: 0.9rem; color: #666; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.15rem; margin-bottom: 15px; color: #444; }
.bullet-list li strong { color: ${biz.theme}; }

blockquote { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-style: italic; line-height: 1.5; margin-bottom: 15px; text-align: center; }
cite { display: block; text-align: center; font-weight: 700; color: ${biz.theme}; font-style: normal; }

.map-wrap { border-radius: 12px; overflow: hidden; margin-top: 15px; }

.footer { padding: 40px; text-align: center; color: #aaa; font-size: 0.85rem; }

.wa-float-photo { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .gallery-nav { width: 100%; height: auto; position: relative; border-right: none; border-bottom: 1px solid #111; padding: 30px 20px; }
  .links { display: none; }
  .gallery-main { margin-left: 0; }
  .hero-split, .services-grid { grid-template-columns: 1fr; flex-direction: column; display: flex; }
  .hero-media { display: none; }
}
`;
    return { html, css };
  },

  // 2. PHOTO: CINEMATIC FULLSCREEN (Lensation Studio)
  'photo-cinematic': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Cinematic Photography Nagpur</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="cine-wrapper">
    <div class="cine-bg"><img src="assets/hero.png" alt="Cinematic Photo Art"></div>
    <div class="cine-overlay"></div>

    <div class="cine-content">
      <header class="cine-head">
        <div class="logo">${biz.name.toUpperCase()}</div>
        <nav class="cine-nav">
          <a href="#about">Philosophy</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#reviews">Testimonials</a>
          <a href="#contact">Location</a>
        </nav>
      </header>

      <!-- FLOATING TICKER BANNER -->
      <div class="cine-promo-bar">
        ✦ CINEMATIC ALERT: RESERVE WEDDING OR CINEMA PORTFOLIO VIA WHATSAPP TODAY FOR 10% COMPLIMENTARY REDUCTION
      </div>

      <main class="cine-main" id="home">
        <div class="rating-strip">★ ${biz.rating} RATING / ${biz.reviews} GOOGLE TESTIMONIALS</div>
        <h1>${biz.tagline}</h1>
        <p class="cine-sub">${biz.subtitle}</p>
        <div class="cine-actions">
          <a href="tel:${biz.phone}" class="c-btn">INQUIRE SESSION</a>
          <a href="https://wa.me/${biz.waNum}" class="c-btn outline">WHATSAPP</a>
        </div>
      </main>

      <section class="cine-panel" id="about">
        <h2>01 / THE VISION</h2>
        <p>Lensation Studio captures pre-wedding, cinematic films, and wedding portraits in New Mankapur, Nagpur. We map frames under creative lighting parameters to preserve your emotional moments forever.</p>
        <div class="stats-row">
          <div><h3>168</h3><span>Clients Happy</span></div>
          <div><h3>4.9★</h3><span>Google Stars</span></div>
        </div>
      </section>

      <section class="cine-panel" id="services">
        <h2>02 / THE FRAMEWORKS</h2>
        <div class="services-grid">
          <div class="svc-box">
            <h3>Cinematic Films</h3>
            <p>Emotional slow-motion films, customized background grading, drone frames.</p>
          </div>
          <div class="svc-box">
            <h3>Portrait Design</h3>
            <p>Stunning studio shoots under tailored key-lights.</p>
          </div>
        </div>
      </section>

      <section class="cine-panel" id="why">
        <h2>03 / WHY LENSATION</h2>
        <ul class="bullet-list">
          <li>✓ High-spec lenses and camera bodies.</li>
          <li>✓ Modern post-production and color grading.</li>
          <li>✓ Prompt digital delivery pipelines.</li>
        </ul>
      </section>

      <section class="cine-panel" id="reviews">
        <h2>04 / TESTIMONIAL</h2>
        <blockquote>"Outstanding wedding films. The color grading and music integration brought tears to our family's eyes. Very professional team."</blockquote>
        <cite>— Pooja Deshpande</cite>
      </section>

      <section class="cine-panel" id="contact">
        <h2>05 / THE LOCATION</h2>
        <p>${biz.address}</p>
        <div class="map-wrap">
          ${commonMap(biz.address)}
        </div>
      </section>

      <footer class="footer">
        <p>© 2025 ${biz.name.toUpperCase()}. Cinematic Stories.</p>
      </footer>
    </div>

    <!-- Letterbox movie bars -->
    <div class="cine-bars">
      <div class="bar top"></div><div class="bar bottom"></div>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-cine" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Lato', sans-serif; background: #000; color: #fff; overflow-x: hidden; }
html { scroll-behavior: smooth; }
.cine-wrapper { position: relative; min-height: 100vh; width: 100vw; display: flex; flex-direction: column; align-items: center; }
.cine-bg { position: fixed; inset: 0; z-index: -2; }
.cine-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5) contrast(1.2); }
.cine-overlay { position: fixed; inset: 0; background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%); z-index: -1; }

.cine-content { position: relative; z-index: 10; max-width: 900px; padding: 100px 40px; display: flex; flex-direction: column; gap: 80px; }

header.cine-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
.logo { font-family: 'Cinzel', serif; font-size: 1.4rem; letter-spacing: 5px; color: ${biz.theme}; }
.cine-nav a { color: #888; text-decoration: none; font-size: 0.85rem; font-family: 'Cinzel', serif; letter-spacing: 2px; margin-left: 20px; transition: 0.3s; }
.cine-nav a:hover { color: #fff; }

.cine-promo-bar { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 12px 20px; font-weight: 700; font-size: 0.8rem; text-align: center; border-radius: 8px; letter-spacing: 1px; color: ${biz.theme}; }

.cine-main { text-align: center; }
.rating-strip { font-size: 0.8rem; letter-spacing: 3px; margin-bottom: 20px; color: #ccc; }
.cine-main h1 { font-family: 'Cinzel', serif; font-size: 3.5rem; line-height: 1.2; font-weight: 500; margin: 0 0 20px 0; text-shadow: 0 4px 20px rgba(0,0,0,0.5); }
.cine-sub { font-size: 1.2rem; line-height: 1.6; color: #ddd; margin-bottom: 40px; }
.cine-actions { display: flex; gap: 15px; justify-content: center; }
.c-btn { display: inline-block; border: 1px solid rgba(255,255,255,0.3); padding: 16px 36px; color: #fff; text-decoration: none; font-family: 'Cinzel', serif; letter-spacing: 2.5px; background: rgba(0,0,0,0.5); backdrop-filter: blur(5px); transition: all 0.4s; font-size: 0.85rem; }
.c-btn.outline { border-color: ${biz.theme}; color: ${biz.theme}; }
.c-btn:hover { background: ${biz.theme}; border-color: ${biz.theme}; color: #000; }

.cine-panel { background: rgba(10,10,15,0.7); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 50px; }
.cine-panel h2 { font-family: 'Cinzel', serif; font-size: 1.8rem; color: ${biz.theme}; margin-bottom: 25px; }
.cine-panel p { font-size: 1.15rem; line-height: 1.7; color: #ddd; }
.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stats-row h3 { font-family: 'Cinzel', serif; font-size: 2rem; }
.stats-row span { font-size: 0.8rem; color: #666; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 30px; border-radius: 12px; }
.svc-box h3 { font-family: 'Cinzel', serif; font-size: 1.2rem; color: ${biz.theme}; margin-bottom: 10px; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.1rem; margin-bottom: 12px; }

blockquote { font-family: 'Cinzel', serif; font-size: 1.4rem; font-style: italic; line-height: 1.5; margin-bottom: 15px; text-align: center; }
cite { display: block; text-align: center; font-weight: 700; color: ${biz.theme}; font-style: normal; }

.map-wrap { border-radius: 12px; overflow: hidden; margin-top: 15px; }

.cine-bars .bar { position: fixed; left: 0; width: 100%; height: 50px; background: #000; z-index: 100; pointer-events: none; }
.cine-bars .top { top: 0; } .cine-bars .bottom { bottom: 0; }

.footer { text-align: center; color: #444; font-size: 0.8rem; }

.wa-float-cine { position: fixed; bottom: 60px; right: 30px; z-index: 150; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.4); }

@media(max-width:900px) {
  h1 { font-size: 2.2rem; }
  .services-grid { grid-template-columns: 1fr; }
  .cine-nav { display: none; }
  .cine-panel { padding: 30px 20px; }
}
`;
    return { html, css };
  },

  // 3. PHOTO: FILM STRIP HORIZONTAL (Thakur's Film City)
  'photo-film-strip': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Katol Road Nagpur</title>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- TEXT SCROLLING ticker -->
  <div class="film-ticker">
    <span>🎬 THAKURS FILM CITY TIMELINES • WEDDINGS • PRE-WEDDINGS • CINEMA WORKS • REGISTER TODAY 🎬</span>
  </div>

  <div class="film-layout">
    <div class="film-strip">
      <!-- Frame 1: Brand -->
      <div class="frame frame-brand">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h1>${biz.name}</h1>
          <div class="badge">★ ${biz.rating} Rating (${biz.reviews} Reviews)</div>
          <nav class="frame-nav">
            <a href="#about">Philosophy</a>
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Location</a>
          </nav>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 2: Hero -->
      <div class="frame frame-hero" id="home">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h2>${biz.tagline}</h2>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="f-btn">BOOK NOW</a>
            <a href="https://wa.me/${biz.waNum}" class="f-btn outline">WHATSAPP</a>
          </div>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 3: Image -->
      <div class="frame frame-img">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <img src="assets/hero.png" alt="Film Production Set">
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 4: About -->
      <div class="frame frame-about" id="about">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h3>[01] THE STUDIO</h3>
          <p>Thakur's Film City on Katol Road is Nagpur's premier wedding film developer. We design cinema-grade pre-wedding shoots, wedding reels, and family photo portfolios using state-of-the-art camera machinery.</p>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 5: Services -->
      <div class="frame frame-services" id="services">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h3>[02] ARSENAL</h3>
          <ul>
            <li>✦ Cinematic Wedding Films</li>
            <li>✦ Candid Pre-Wedding Shoots</li>
            <li>✦ Premium Album Prints</li>
          </ul>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 6: Why Us -->
      <div class="frame frame-why" id="why">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h3>[03] PROTOCOLS</h3>
          <p>✓ High-spec mirrorless camera modules.</p>
          <p>✓ Personalized creative location setups.</p>
          <p>✓ Fast cloud digital gallery delivery.</p>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 7: Testimonial -->
      <div class="frame frame-reviews" id="reviews">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h3>[04] TALK</h3>
          <blockquote>"Amazing wedding video. The framing feels like a real movie set. Highly recommend Katol Road team."</blockquote>
          <span>— Sandeep K.</span>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>

      <!-- Frame 8: Location -->
      <div class="frame frame-contact" id="contact">
        <div class="sprockets top"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="frame-content">
          <h3>[05] ADDRESS</h3>
          <p class="addr">${biz.address}</p>
          <div class="map-wrap">
            ${commonMap(biz.address)}
          </div>
        </div>
        <div class="sprockets bottom"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <p>© 2025 ${biz.name}. Wrapped on film.</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-film" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Inter', sans-serif; background: #0c0c0c; color: #fff; overflow-x: hidden; }
html { scroll-behavior: smooth; }

.film-ticker { background: #000; color: ${biz.theme}; border-bottom: 2px solid ${biz.theme}; padding: 12px; font-family: 'Anton', sans-serif; font-size: 1.3rem; text-transform: uppercase; overflow: hidden; white-space: nowrap; }
.film-ticker span { display: inline-block; animation: marquee 15s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

.film-layout { width: 100%; overflow-x: auto; padding: 40px 0; }
.film-strip { display: flex; gap: 20px; padding: 10px 20px; width: max-content; margin: 0 auto; }

.frame { width: 450px; height: 580px; background: #111; border: 1px solid #222; border-radius: 8px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; position: relative; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }

.sprockets { display: flex; justify-content: space-between; padding: 10px 20px; background: #000; height: 40px; }
.sprockets span { width: 16px; height: 16px; background: #222; border-radius: 2px; }

.frame-content { padding: 40px; flex: 1; display: flex; flex-direction: column; justify-content: center; }

.frame-brand h1 { font-family: 'Anton', sans-serif; font-size: 3.5rem; line-height: 1; color: ${biz.theme}; margin-bottom: 15px; }
.frame-brand .badge { display: inline-block; border: 1px solid #fff; padding: 6px 14px; border-radius: 30px; font-weight: 600; font-size: 0.8rem; margin-bottom: 25px; width: max-content; }
.frame-nav { display: flex; flex-direction: column; gap: 10px; }
.frame-nav a { color: #888; text-decoration: none; font-weight: 600; }
.frame-nav a:hover { color: ${biz.theme}; }

.frame-hero h2 { font-family: 'Anton', sans-serif; font-size: 2.2rem; line-height: 1.1; margin-bottom: 20px; color: ${biz.theme}; text-transform: uppercase; }
.frame-hero p { color: #888; font-size: 0.95rem; margin-bottom: 30px; }
.actions { display: flex; gap: 15px; }
.f-btn { display: inline-block; background: ${biz.theme}; color: #000; text-decoration: none; padding: 12px 24px; font-family: 'Anton', sans-serif; font-size: 1.3rem; border-radius: 4px; transition: 0.3s; border: none; text-align: center; }
.f-btn.outline { background: transparent; border: 2px solid #fff; color: #fff; }
.f-btn:hover { background: #fff; color: #000; }

.frame-img { padding: 0; }
.frame-img img { width: 100%; height: calc(100% - 80px); object-fit: cover; filter: grayscale(30%); }

.frame-about h3, .frame-services h3, .frame-why h3, .frame-reviews h3, .frame-contact h3 { font-family: 'Anton', sans-serif; font-size: 1.6rem; color: ${biz.theme}; margin-bottom: 15px; }
.frame-about p { font-size: 1.05rem; color: #aaa; line-height: 1.5; }

.frame-services ul { list-style: none; }
.frame-services li { font-size: 1.1rem; margin-bottom: 10px; }

blockquote { font-style: italic; font-size: 1.15rem; color: #aaa; margin-bottom: 10px; }
.frame-reviews span { font-weight: 700; color: ${biz.theme}; }

.addr { font-size: 0.85rem; color: #888; margin-bottom: 10px; }
.map-wrap { border-radius: 8px; overflow: hidden; }

.footer { text-align: center; color: #444; padding: 40px; font-size: 0.85rem; }

.wa-float-film { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .film-strip { flex-direction: column; width: 100%; padding: 0 20px; }
  .frame { width: 100%; height: auto; }
  .frame-img { display: none; }
}
`;
    return { html, css };
  },

  // 4. PHOTO: MINIMAL PORTFOLIO (MP Photography)
  'photo-minimal-portfolio': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Raw Monospace Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="port-container">
    <header class="port-nav">
      <div class="logo">${biz.name.toUpperCase()}</div>
      <nav class="links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <!-- FLOATING TICKER BANNER -->
    <div class="mono-promo-strip">
      [PROMO_ALERT] >> BOOK WEDDING OR PORTRAIT VIA WHATSAPP & GET COMPLIMENTARY EDITORIAL ALBUM SHOT
    </div>

    <section class="port-hero" id="home">
      <div class="hero-left">
        <div class="rating-strip">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
        <h1>${biz.tagline}</h1>
        <p class="subtitle">${biz.subtitle}</p>
        <div class="actions">
          <a href="tel:${biz.phone}" class="p-btn">Call Now</a>
          <a href="https://wa.me/${biz.waNum}" class="p-btn outline">WhatsApp</a>
        </div>
      </div>
      <div class="hero-right"><img src="assets/hero.png" alt="Minimal Photo Composition"></div>
    </section>

    <section class="port-panel" id="about">
      <h2>[01_THE_VISION]</h2>
      <p>MP Photography delivers professional wedding, portrait, and dynamic event coverage in Nagpur. We believe in raw structural compositions and high-fashion editing pipelines. We map every session to your parameters.</p>
      <div class="stats-row">
        <div><h3>79+</h3><span>Google reviews</span></div>
        <div><h3>100%</h3><span>Focus</span></div>
      </div>
    </section>

    <section class="port-panel" id="services">
      <h2>[02_THE_SERVICES]</h2>
      <div class="services-grid">
        <div class="svc">
          <h3>Wedding Photography</h3>
          <p>Creative candid captures, professional lighting configurations.</p>
        </div>
        <div class="svc">
          <h3>Event Documentation</h3>
          <p>Complete coverage for corporate events, parties, launches.</p>
        </div>
      </div>
    </section>

    <section class="port-panel" id="why">
      <h2>[03_THE_BENCHMARKS]</h2>
      <ul class="bullet-list">
        <li>👉 Raw wireframe focus. No generic templates.</li>
        <li>👉 High-spec mirrorless camera gear.</li>
        <li>👉 Rapid cloud link digital backups.</li>
      </ul>
    </section>

    <section class="port-panel" id="reviews">
      <h2>[04_THE_TESTIMONIAL]</h2>
      <blockquote>"Nagpur's primary modern photographer. Excellent wireframe style shots, raw and emotional candid details. Very prompt delivery."</blockquote>
      <span>— Anupama Sen</span>
    </section>

    <section class="port-panel" id="contact">
      <h2>[05_THE_GRID]</h2>
      <p class="addr">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="footer">
      <p>© 2025 ${biz.name.toUpperCase()}. [SYSTEM_OK]</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-mono" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Work Sans', sans-serif; background: #fafafa; color: #1a1a1a; }
html { scroll-behavior: smooth; }
.port-container { max-width: 1100px; margin: 0 auto; padding: 40px 20px; display: flex; flex-direction: column; gap: 60px; }

header.port-nav { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1a1a1a; padding-bottom: 20px; }
.logo { font-family: 'Space Mono', monospace; font-weight: 700; font-size: 1.4rem; }
.links a { color: #666; text-decoration: none; font-family: 'Space Mono', monospace; font-size: 0.9rem; font-weight: 700; margin-left: 20px; }
.links a:hover { color: #1a1a1a; text-decoration: underline; }

.mono-promo-strip { border: 2px dashed #1a1a1a; padding: 12px; font-family: 'Space Mono', monospace; font-size: 0.85rem; font-weight: 700; text-align: center; }

.port-hero { display: flex; gap: 40px; align-items: center; }
.hero-left { flex: 1.1; }
.rating-strip { display: inline-block; border: 1px solid #1a1a1a; padding: 6px 14px; font-family: 'Space Mono', monospace; font-size: 0.8rem; margin-bottom: 20px; }
.hero-left h1 { font-family: 'Space Mono', monospace; font-size: 3.5rem; line-height: 1.1; margin: 0 0 20px 0; letter-spacing: -2px; }
.text-gradient { background: #eaeaea; padding: 2px 8px; border: 1px solid #1a1a1a; }
.subtitle { font-size: 1.15rem; color: #555; line-height: 1.6; margin-bottom: 35px; }
.actions { display: flex; gap: 15px; }
.p-btn { display: inline-block; background: #1a1a1a; color: #fff; padding: 15px 30px; text-decoration: none; font-family: 'Space Mono', monospace; font-weight: 700; border: 2px solid #1a1a1a; transition: 0.3s; }
.p-btn.outline { background: transparent; color: #1a1a1a; }
.p-btn:hover { background: #666; color: #fff; border-color: #666; }

.hero-right { flex: 0.9; border: 2px solid #1a1a1a; height: 350px; }
.hero-right img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); }

.port-panel { border: 2px solid #1a1a1a; padding: 40px; background: #fff; }
.port-panel h2 { font-family: 'Space Mono', monospace; font-size: 1.5rem; margin-top: 0; margin-bottom: 20px; }
.port-panel p { font-size: 1.15rem; line-height: 1.6; color: #444; }

.stats-row { display: flex; gap: 40px; margin-top: 30px; }
.stats-row h3 { font-family: 'Space Mono', monospace; font-size: 1.8rem; }
.stats-row span { font-size: 0.8rem; text-transform: uppercase; color: #888; }

.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.svc { border: 1px solid #1a1a1a; padding: 25px; background: #fafafa; }
.svc h3 { font-family: 'Space Mono', monospace; font-size: 1.15rem; margin-bottom: 10px; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.1rem; margin-bottom: 12px; }

blockquote { font-style: italic; font-size: 1.3rem; margin-bottom: 10px; }

.addr { font-size: 1.05rem; margin-bottom: 25px; color: #555; }
.map-wrap { border: 2px solid #1a1a1a; overflow: hidden; }

.footer { text-align: center; border-top: 2px solid #1a1a1a; padding-top: 30px; color: #888; font-family: 'Space Mono', monospace; font-size: 0.85rem; }

.wa-float-mono { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #1a1a1a; border: 2px solid #fff; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .port-hero { flex-direction: column; }
  .hero-right { display: none; }
  .links { display: none; }
  .services-grid { grid-template-columns: 1fr; }
}
`;
    return { html, css };
  }

};

console.log("Generating BATCH 3: 4 Unique Photographer Designs...\n");

batch3.forEach(biz => {
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

console.log("\nBatch 3 completed successfully!");
