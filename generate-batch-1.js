const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

// Gyms Database
const gyms = [
  {
    slug: 'fitness-pulse-gym', name: 'Fitness Pulse Gym', shortName: 'FitnessPulse',
    tagline: 'Transform Your Body.<br><span class="text-gradient">Transform Your Life.</span>',
    subtitle: "Jaipur's most trusted fitness destination on Kalwar Road, Jhotwara. World-class equipment, certified trainers, and a community that pushes you beyond limits.",
    rating: 4.8, reviews: 1837, phone: '+919887000058', waNum: '919887000058',
    address: 'Kalwar Rd, Suraj Nagar, Jhotwara, Jaipur 302012',
    addressShort: 'Jhotwara, Jaipur 302012',
    style: 'split-screen'
  },
  {
    slug: 'klean-fit-iconic', name: 'KLEAN FIT Iconic', shortName: 'KLEANFIT',
    tagline: 'Elevate Your<br><span class="text-gradient">Fitness Game.</span>',
    subtitle: "C-Scheme's most iconic fitness experience at Crystal Palm Mall. Premium equipment, elite trainers, and an atmosphere built for champions.",
    rating: 4.7, reviews: 857, phone: '+919024662515', waNum: '919024662515',
    address: '3rd Floor, Crystal Palm Mall, 22 Godown Circle, C-Scheme, Jaipur 302001',
    addressShort: 'C-Scheme, Jaipur 302001',
    style: 'centered-minimalist'
  },
  {
    slug: 'lifetime-fitness-club', name: 'Lifetime Fitness Club', shortName: 'LifetimeFit',
    tagline: 'Your Fitness.<br><span class="text-gradient">Your Lifetime.</span>',
    subtitle: "Malviya Nagar's premier gym experience at V Cube. Cutting-edge equipment, dedicated trainers, and a community committed to results.",
    rating: 4.9, reviews: 738, phone: '+919950550885', waNum: '919950550885',
    address: '3rd Floor, V Cube, Plot no. 1-6, Malviya Nagar, Jaipur 302017',
    addressShort: 'Malviya Nagar, Jaipur 302017',
    style: 'asymmetrical-cards'
  },
  {
    slug: 'metroflex-gym-jaipur', name: 'METROFLEX GYM', shortName: 'METROFLEX',
    tagline: 'Built for<br><span class="text-gradient">Serious Lifters.</span>',
    subtitle: "Vaishali Nagar's hardcore training ground. No-nonsense equipment, intense atmosphere, and the kind of gym that breeds champions.",
    rating: 4.7, reviews: 325, phone: '+919772914999', waNum: '919772914999',
    address: 'Vaibhav Complex, 7th floor, Amrapali Marg, Vaishali Nagar, Jaipur 302021',
    addressShort: 'Vaishali Nagar, Jaipur 302021',
    style: 'brutalist'
  },
  {
    slug: 'fitness-society', name: 'Fitness Society', shortName: 'FitSociety',
    tagline: 'Where Fitness<br><span class="text-gradient">Meets Community.</span>',
    subtitle: "Subhash Nagar's best gym and fitness center. Modern equipment, supportive community, and programs designed for every fitness level.",
    rating: 4.8, reviews: 234, phone: '+918947845748', waNum: '918947845748',
    address: 'Plot no. A 17, opposite Science Park, Subhash Nagar, Jaipur 302016',
    addressShort: 'Subhash Nagar, Jaipur 302016',
    style: 'fullscreen-bg'
  },
  {
    slug: 'fitup-fitness-lifestyle', name: 'Fitup Fitness Lifestyle', shortName: 'FitupFitness',
    tagline: 'Level Up Your<br><span class="text-gradient">Fitness Lifestyle.</span>',
    subtitle: "C-Scheme's boutique fitness experience. Premium personal training, modern equipment, and a lifestyle-first approach to health.",
    rating: 4.9, reviews: 157, phone: '+919571995817', waNum: '919571995817',
    address: 'Bhagadiya Bhawan, J-33, Subhash Marg, C Scheme, Jaipur 302001',
    addressShort: 'C-Scheme, Jaipur 302001',
    style: 'sidebar-nav'
  },
  {
    slug: 'fitness-island-gym', name: 'Fitness Island Gym', shortName: 'FitnessIsland',
    tagline: 'Your Fitness<br><span class="text-gradient">Paradise.</span>',
    subtitle: "Lalkothi's favorite neighborhood gym. Great equipment, friendly trainers, and an atmosphere that makes working out a joy.",
    rating: 4.8, reviews: 149, phone: '+918639736126', waNum: '918639736126',
    address: 'A1, Nehru Path, Satya Vihar, Friends Colony, Lalkothi, Jaipur 302015',
    addressShort: 'Lalkothi, Jaipur 302015',
    style: 'neumorphism'
  },
  {
    slug: 'anytime-fitness-bapu-nagar', name: 'Anytime Fitness Bapu Nagar', shortName: 'AnytimeFit',
    tagline: 'Fitness on<br><span class="text-gradient">Your Schedule.</span>',
    subtitle: "Bapu Nagar's 24/7 fitness solution at Pavilion, Tonk Road. World-class franchise equipment, flexible hours, real results.",
    rating: 4.5, reviews: 141, phone: '+919057403330', waNum: '919057403330',
    address: '5th Floor, Pavilion, Tonk Rd, Bapu Nagar, Jaipur 302015',
    addressShort: 'Bapu Nagar, Jaipur 302015',
    style: 'bold-grid'
  },
  {
    slug: 'vault-fitness-jaipur', name: 'Vault Fitness Jaipur', shortName: 'VaultFitness',
    tagline: 'Unlock Your<br><span class="text-gradient">True Potential.</span>',
    subtitle: "Hawa Sadak's best personal training studio. Intimate setting, expert guidance, and results-driven training that transforms.",
    rating: 4.9, reviews: 58, phone: '+918387875233', waNum: '918387875233',
    address: '3rd floor, A-40, Chabra Rd, Hawa Sadak, Ramnagar, Jaipur 302019',
    addressShort: 'Hawa Sadak, Jaipur 302019',
    style: 'elegant-dark'
  }
];

const waSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#25D366"/></svg>`;

const commonMap = (address) => `<iframe src="https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed" width="100%" height="300" style="border:0; border-radius:12px;" allowfullscreen="" loading="lazy"></iframe>`;

const generators = {

  // 1. SPLIT SCREEN
  'split-screen': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Premium Gym Jaipur</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="split-layout">
    <div class="content-side">
      <div class="inner-scroll">
        <header class="navbar">
          <div class="logo">⚡ ${biz.name}</div>
          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#choose">Why Us</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </header>

        <section class="hero-section" id="home">
          <div class="badge">★ ${biz.rating} (${biz.reviews} Reviews)</div>
          <h1>${biz.tagline}</h1>
          <p class="subtitle">${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="btn btn-primary">Call Now</a>
            <a href="https://wa.me/${biz.waNum}" class="btn btn-outline">WhatsApp</a>
          </div>
        </section>

        <!-- FLOATING TICKER BANNER -->
        <div class="marquee-banner">
          <div class="marquee-content">
            ⚡ GET 1 WEEK FREE TRIAL • NO JOINING FEE THIS MONTH • 24/7 ACCESS • REGISTER NOW ⚡
          </div>
        </div>

        <section class="about-section" id="about">
          <h2 class="section-title">WHO WE ARE</h2>
          <p>At ${biz.name}, we believe in pushing limits. Our Suraj Nagar facility provides elite-level machinery, customized nutrition trackers, and trainers certified to guide you through a real body transformation.</p>
          <div class="stats-row">
            <div class="stat-card"><h3>50+</h3><p>Machines</p></div>
            <div class="stat-card"><h3>12+</h3><p>Trainers</p></div>
            <div class="stat-card"><h3>24/7</h3><p>Access</p></div>
          </div>
        </section>

        <section class="programs-section" id="programs">
          <h2 class="section-title">THE PROGRAMS</h2>
          <div class="programs-grid">
            <div class="prog-card">
              <h4>Strength Training</h4>
              <p>Heavy duty dumbbells, squat racks, and premium weight plates.</p>
            </div>
            <div class="prog-card">
              <h4>HIIT & Cardio</h4>
              <p>High-energy cardio zones with customized heart rate displays.</p>
            </div>
            <div class="prog-card">
              <h4>Personal Training</h4>
              <p>One-on-one custom guidance designed to hit your goals fast.</p>
            </div>
          </div>
        </section>

        <section class="choose-section" id="choose">
          <h2 class="section-title">WHY CHOOSE US</h2>
          <ul class="choose-list">
            <li><strong>Premium Support:</strong> Certified, friendly staff members.</li>
            <li><strong>Elite Environment:</strong> Meticulously clean and motivating space.</li>
            <li><strong>Flexible Plans:</strong> Budget-friendly membership options.</li>
          </ul>
        </section>

        <section class="reviews-section" id="reviews">
          <h2 class="section-title">REVIEWS</h2>
          <div class="review-box">
            <p>"Fantastic trainers, top-tier equipment. Best gym on Kalwar road."</p>
            <span>— Rohit M.</span>
          </div>
          <div class="review-box">
            <p>"Clean, professional, and has amazing atmosphere for working out."</p>
            <span>— Sneha S.</span>
          </div>
        </section>

        <section class="contact-section" id="contact">
          <h2 class="section-title">FIND US</h2>
          <p class="addr">${biz.address}</p>
          <div class="map-wrap">
            ${commonMap(biz.address)}
          </div>
        </section>

        <footer class="footer">
          <p>© 2025 ${biz.name}. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
    <div class="image-side">
      <img src="assets/hero.png" alt="Gym Hero Image">
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `:root{--primary:#39FF14;--bg-dark:#0a0a0a;--card-bg:#161616;--border-color:#222;--text-light:#eaeaea;--text-muted:#888}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Montserrat', sans-serif; background-color: var(--bg-dark); color: var(--text-light); overflow: hidden; }
html { scroll-behavior: smooth; }
.split-layout { display: flex; height: 100vh; }
.content-side { flex: 1.1; overflow-y: auto; background-color: var(--bg-dark); }
.image-side { flex: 0.9; position: sticky; top: 0; height: 100vh; background: #111; }
.image-side img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8) contrast(1.1); }
.inner-scroll { padding: 40px 60px; max-width: 750px; margin: 0 auto; }

header.navbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; }
.logo { font-weight: 900; font-size: 1.5rem; color: var(--primary); letter-spacing: 1px; }
.nav-links a { color: var(--text-muted); text-decoration: none; font-size: 0.85rem; font-weight: 600; margin-left: 20px; text-transform: uppercase; transition: 0.3s; }
.nav-links a:hover { color: var(--primary); }

.hero-section { margin-bottom: 60px; }
.badge { display: inline-block; background: rgba(57, 255, 20, 0.1); border: 1px solid var(--primary); color: var(--primary); padding: 6px 14px; border-radius: 30px; font-size: 0.8rem; font-weight: 600; margin-bottom: 20px; }
h1 { font-size: 3.2rem; font-weight: 900; line-height: 1.1; margin-bottom: 20px; text-transform: uppercase; }
.text-gradient { color: var(--primary); }
.subtitle { font-size: 1.1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 30px; }
.actions { display: flex; gap: 15px; }
.btn { display: inline-block; padding: 14px 28px; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; border-radius: 4px; text-decoration: none; transition: 0.3s; }
.btn-primary { background: var(--primary); color: #000; }
.btn-primary:hover { background: #2ee60d; transform: translateY(-2px); }
.btn-outline { border: 2px solid #fff; color: #fff; }
.btn-outline:hover { background: #fff; color: #000; }

.marquee-banner { background: var(--primary); color: #000; overflow: hidden; padding: 12px 0; margin: 40px 0; font-weight: 800; font-size: 0.9rem; text-transform: uppercase; border-radius: 4px; }
.marquee-content { display: inline-block; white-space: nowrap; animation: marquee 15s linear infinite; }
@keyframes marquee { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }

section { padding: 40px 0; border-bottom: 1px solid var(--border-color); }
.section-title { font-size: 1.5rem; font-weight: 900; color: var(--primary); letter-spacing: 2px; margin-bottom: 25px; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; }
.stat-card { background: var(--card-bg); border: 1px solid var(--border-color); padding: 20px; border-radius: 8px; text-align: center; }
.stat-card h3 { font-size: 2.2rem; font-weight: 900; color: var(--primary); }
.stat-card p { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; }

.programs-grid { display: grid; grid-template-columns: 1fr; gap: 15px; }
.prog-card { background: var(--card-bg); padding: 25px; border-radius: 8px; border-left: 4px solid var(--primary); }
.prog-card h4 { font-size: 1.2rem; margin-bottom: 10px; }
.prog-card p { color: var(--text-muted); font-size: 0.9rem; }

.choose-list { list-style: none; }
.choose-list li { margin-bottom: 12px; font-size: 0.95rem; }
.choose-list li strong { color: var(--primary); }

.review-box { background: var(--card-bg); padding: 20px; border-radius: 8px; margin-bottom: 15px; border: 1px solid var(--border-color); }
.review-box p { font-style: italic; font-size: 0.95rem; margin-bottom: 10px; color: var(--text-light); }
.review-box span { color: var(--primary); font-weight: 600; font-size: 0.85rem; }

.map-wrap { margin-top: 20px; overflow: hidden; border-radius: 12px; }
.addr { margin-bottom: 10px; font-size: 1rem; color: var(--text-muted); }
.footer { text-align: center; padding: 40px 0; color: #555; font-size: 0.8rem; }

.wa-float { position: fixed; bottom: 30px; left: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

@media(max-width:900px) {
  .split-layout { flex-direction: column-reverse; overflow-y: auto; }
  .image-side { height: 45vh; width: 100%; position: relative; }
  .content-side { overflow-y: visible; }
  .inner-scroll { padding: 30px 20px; }
  h1 { font-size: 2.2rem; }
}
`;
    return { html, css };
  },

  // 2. CENTERED MINIMALIST
  'centered-minimalist': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Centered Minimalist Gym</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- STICKY PROMO BAR -->
  <div class="top-promo-bar">
    🔥 MEMBER ANNOUNCEMENT: NO INITIATION FEE & FREE PERSONAL COACHING SESSION FOR FIRST 50 SIGNUPS
  </div>

  <header class="navbar">
    <div class="container nav-box">
      <div class="logo">${biz.name}</div>
      <nav class="links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#why">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#location">Find Us</a>
      </nav>
      <a href="tel:${biz.phone}" class="nav-cta">Call Now</a>
    </div>
  </header>

  <main class="main-content">
    <section class="hero-section container">
      <div class="rating-badge">Rated ★ ${biz.rating}/5 from ${biz.reviews} Members</div>
      <h1>${biz.tagline}</h1>
      <p class="subtitle">${biz.subtitle}</p>
      <div class="hero-actions">
        <a href="tel:${biz.phone}" class="btn btn-dark">Get Started</a>
        <a href="https://wa.me/${biz.waNum}" class="btn btn-outline-dark">WhatsApp Now</a>
      </div>
      <div class="hero-img-container">
        <img src="assets/hero.png" alt="Minimalist Gym Interior">
      </div>
    </section>

    <section class="about-section container" id="about">
      <div class="minimal-grid">
        <div class="grid-left">
          <h2>THE VISION</h2>
        </div>
        <div class="grid-right">
          <p>KLEAN FIT Iconic is built around structural movement, high performance, and curated wellness. We eliminate the noise and crowd of typical commercial gyms, leaving you with state-of-the-art machinery and world-class guidance.</p>
          <div class="stats-row">
            <div><h4>2000+</h4><span>Sq. Yards</span></div>
            <div><h4>15+</h4><span>Elite Coaches</span></div>
            <div><h4>100%</h4><span>Satisfaction</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-section container" id="services">
      <h2 class="center-title">OUR OFFERINGS</h2>
      <div class="services-grid">
        <div class="service-card">
          <span>01 /</span>
          <h3>Elite Training</h3>
          <p>Highly customized workout modules designed on personal biological assessments.</p>
        </div>
        <div class="service-card">
          <span>02 /</span>
          <h3>Premium Machinery</h3>
          <p>Carefully imported and biometrically correct machines for optimal impact.</p>
        </div>
        <div class="service-card">
          <span>03 /</span>
          <h3>Nutrition & Health</h3>
          <p>Dietary design, regular health screenings, and fat percentage tracking.</p>
        </div>
      </div>
    </section>

    <section class="why-section container" id="why">
      <div class="minimal-grid">
        <div class="grid-left">
          <h2>WHY KLEAN</h2>
        </div>
        <div class="grid-right">
          <ul class="why-points">
            <li><strong>Intimate Space:</strong> Limited active memberships at any time.</li>
            <li><strong>Sanitary Design:</strong> Medical-grade cleanliness throughout the studio.</li>
            <li><strong>Smart Progress:</strong> Weekly assessments and custom routine tweaks.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="reviews-section container" id="reviews">
      <h2 class="center-title">MEMBER VOICES</h2>
      <div class="testimonials">
        <blockquote>"The layout is extremely neat, equipment is fantastic, and trainers guide you without pressure. Excellent space."</blockquote>
        <cite>— Vikram Malhotra</cite>
        
        <blockquote>"C-Scheme's premier spot. Very sanitary, upscale crowd, and world-class trainer assistance."</blockquote>
        <cite>— Tanvi K.</cite>
      </div>
    </section>

    <section class="location-section container" id="location">
      <h2 class="center-title">THE LOCATION</h2>
      <p class="address-text">${biz.address}</p>
      <div class="map-container">
        ${commonMap(biz.address)}
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container foot-content">
      <p>© 2025 ${biz.name}. Crafted with precision.</p>
      <a href="tel:${biz.phone}">${biz.phone}</a>
    </div>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-btn" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `:root{--primary:#a29bfe;--text-dark:#111;--text-light:#666;--bg-light:#fbfbfb;--accent-violet:rgba(162, 155, 254, 0.15)}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background-color: #fff; color: var(--text-dark); line-height: 1.6; }
html { scroll-behavior: smooth; }
.container { max-width: 1000px; margin: 0 auto; padding: 0 24px; }

.top-promo-bar { background: var(--text-dark); color: #fff; text-align: center; padding: 10px 15px; font-size: 0.8rem; font-weight: 700; letter-spacing: 1px; }

header.navbar { border-bottom: 1px solid #eaeaea; background: #fff; position: sticky; top: 0; z-index: 100; }
.nav-box { display: flex; justify-content: space-between; align-items: center; height: 75px; }
.logo { font-weight: 900; font-size: 1.3rem; letter-spacing: -0.5px; }
.nav-links, nav.links { display: flex; gap: 30px; }
nav.links a { color: var(--text-light); text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
nav.links a:hover { color: var(--text-dark); }
.nav-cta { background: var(--text-dark); color: #fff; text-decoration: none; padding: 10px 20px; font-weight: 600; border-radius: 4px; font-size: 0.85rem; }

.main-content { padding: 40px 0; }
.hero-section { text-align: center; margin-top: 40px; margin-bottom: 80px; }
.rating-badge { display: inline-block; background: var(--accent-violet); color: #6c5ce7; font-size: 0.85rem; font-weight: 600; padding: 6px 16px; border-radius: 50px; margin-bottom: 25px; }
h1 { font-size: 3.5rem; font-weight: 900; line-height: 1.1; letter-spacing: -2px; margin-bottom: 25px; }
.text-gradient { color: #6c5ce7; }
.subtitle { font-size: 1.2rem; color: var(--text-light); max-width: 700px; margin: 0 auto 40px; font-weight: 300; }
.hero-actions { display: flex; gap: 15px; justify-content: center; margin-bottom: 60px; }
.btn { padding: 14px 30px; font-weight: 700; text-decoration: none; font-size: 0.9rem; border-radius: 50px; transition: 0.3s; }
.btn-dark { background: var(--text-dark); color: #fff; }
.btn-dark:hover { background: #333; transform: translateY(-2px); }
.btn-outline-dark { border: 2px solid var(--text-dark); color: var(--text-dark); }
.btn-outline-dark:hover { background: var(--text-dark); color: #fff; }
.hero-img-container { width: 100%; border-radius: 20px; overflow: hidden; height: 420px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
.hero-img-container img { width: 100%; height: 100%; object-fit: cover; }

section { padding: 80px 0; border-bottom: 1px solid #f0f0f0; }
.minimal-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; }
.grid-left h2 { font-size: 1.8rem; font-weight: 900; letter-spacing: -1px; }
.grid-right p { font-size: 1.15rem; color: var(--text-light); margin-bottom: 30px; }
.grid-right .stats-row { display: flex; gap: 40px; }
.grid-right .stats-row h4 { font-size: 2rem; font-weight: 800; }
.grid-right .stats-row span { font-size: 0.85rem; color: var(--text-light); text-transform: uppercase; }

.center-title { text-align: center; font-size: 2rem; font-weight: 900; margin-bottom: 50px; letter-spacing: -0.5px; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.service-card { background: var(--bg-light); padding: 40px 30px; border-radius: 12px; border: 1px solid #f0f0f0; }
.service-card span { font-size: 0.85rem; color: var(--text-light); display: block; margin-bottom: 15px; }
.service-card h3 { font-size: 1.2rem; margin-bottom: 12px; }
.service-card p { font-size: 0.95rem; color: var(--text-light); }

.why-points { list-style: none; }
.why-points li { margin-bottom: 15px; font-size: 1.1rem; color: var(--text-light); }
.why-points li strong { color: var(--text-dark); }

.testimonials { max-width: 800px; margin: 0 auto; text-align: center; }
blockquote { font-size: 1.4rem; font-weight: 300; font-style: italic; margin-bottom: 15px; color: var(--text-dark); }
cite { font-weight: 700; color: #6c5ce7; font-style: normal; display: block; margin-bottom: 40px; }

.address-text { text-align: center; margin-bottom: 30px; font-size: 1.1rem; color: var(--text-light); }
.map-container { overflow: hidden; border-radius: 20px; border: 1px solid #e0e0e0; }

.footer { background: var(--bg-light); padding: 60px 0; border-top: 1px solid #f0f0f0; }
.foot-content { display: flex; justify-content: space-between; color: var(--text-light); font-size: 0.9rem; }
.foot-content a { color: var(--text-dark); font-weight: 700; text-decoration: none; }

.wa-float-btn { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  h1 { font-size: 2.2rem; }
  .minimal-grid, .services-grid { grid-template-columns: 1fr; gap: 30px; }
  .hero-img-container { height: 250px; }
  .nav-links, nav.links { display: none; }
  .foot-content { flex-direction: column; gap: 15px; text-align: center; }
}
`;
    return { html, css };
  },

  // 3. ASYMMETRICAL CARDS
  'asymmetrical-cards': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Asymmetrical Club</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="grid-layout">
    <!-- Row 1 -->
    <header class="card head-card">
      <div class="logo-space">${biz.name}</div>
      <nav class="grid-nav">
        <a href="#about">Philosophy</a>
        <a href="#programs">Programs</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Find Us</a>
      </nav>
    </header>

    <!-- Row 2 -->
    <div class="card img-card">
      <img src="assets/hero.png" alt="Gym Dynamic Shot">
    </div>

    <div class="card title-card">
      <span class="stars">★★★★★ ${biz.rating} (${biz.reviews} reviews)</span>
      <h1>${biz.tagline}</h1>
    </div>

    <!-- Row 3 -->
    <div class="card desc-card">
      <p>${biz.subtitle}</p>
    </div>

    <div class="card promo-card">
      <div class="promo-text">JOIN NOW FOR EXCLUSIVE BENEFITS</div>
      <div class="sub-promo">FIRST WEEK COMPLETELY COMPLIMENTARY</div>
    </div>

    <div class="card cta-card">
      <a href="tel:${biz.phone}">CALL NOW ↗</a>
    </div>

    <!-- Row 4 -->
    <div class="card about-card" id="about">
      <h2>ABOUT US</h2>
      <p>We are a high-performance club situated in Malviya Nagar. We believe in custom structural setups rather than standard machinery loops. We track progress daily.</p>
      <div class="stats-row">
        <div><strong>20+</strong><span>Trainers</span></div>
        <div><strong>24/7</strong><span>Access</span></div>
      </div>
    </div>

    <!-- Row 5 -->
    <div class="card services-card" id="programs">
      <h2>PROGRAMS</h2>
      <div class="service-box">
        <h3>01 / STRENGTH TRAINING</h3>
        <p>Dynamic olympic weights, free turf, high-spec rigs.</p>
      </div>
      <div class="service-box">
        <h3>02 / HIIT CIRCUIT</h3>
        <p>Intense calorie burns led by certified community coaches.</p>
      </div>
    </div>

    <!-- Row 6 -->
    <div class="card choose-card">
      <h2>WHY US</h2>
      <ul>
        <li>★ Structured routines adjusted weekly.</li>
        <li>★ Clean, custom, elite-level equipment only.</li>
        <li>★ Extremely supportive community vibes.</li>
      </ul>
    </div>

    <!-- Row 7 -->
    <div class="card review-card" id="reviews">
      <h2>REVIEWS</h2>
      <blockquote>"Highly elite setup in Malviya Nagar. The trainers know their biology and the community keeps you pushes forward."</blockquote>
      <cite>— Rohan Verma</cite>
    </div>

    <!-- Row 8 -->
    <div class="card contact-card" id="contact">
      <h2>CONTACT US</h2>
      <p class="addr-box">${biz.address}</p>
      <div class="map-box">
        ${commonMap(biz.address)}
      </div>
      <div class="card-btn-row">
        <a href="https://wa.me/${biz.waNum}" class="card-btn">WhatsApp Us</a>
      </div>
    </div>

    <!-- Row 9 -->
    <footer class="card footer-card">
      <p>© 2025 ${biz.name}. All Rights Reserved.</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-bubble" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; padding: 20px; font-family: 'Space Grotesk', sans-serif; background-color: #f0f0f2; color: #111; }
html { scroll-behavior: smooth; }
.grid-layout { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1200px; margin: 0 auto; }

.card { background: #fff; border-radius: 24px; padding: 40px; box-shadow: 0 8px 16px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; }

.head-card { grid-column: 1 / -1; flex-direction: row; justify-content: space-between; align-items: center; padding: 25px 40px; }
.logo-space { font-size: 1.4rem; font-weight: 700; color: #3b82f6; }
.grid-nav a { text-decoration: none; color: #555; font-weight: 700; margin-left: 20px; transition: 0.2s; }
.grid-nav a:hover { color: #3b82f6; }

.img-card { grid-column: 1 / 3; grid-row: 2 / 4; padding: 0; overflow: hidden; }
.img-card img { width: 100%; height: 100%; object-fit: cover; min-height: 350px; }

.title-card { grid-column: 3 / 5; background: #18181b; color: #fff; }
.stars { color: #facc15; font-size: 0.95rem; font-weight: 700; margin-bottom: 15px; }
.title-card h1 { font-size: 2.8rem; font-weight: 700; line-height: 1.2; margin: 0; }

.desc-card { grid-column: 3 / 4; background: #e0f2fe; border: none; }
.desc-card p { font-size: 1.05rem; line-height: 1.5; color: #0369a1; }

.promo-card { grid-column: 4 / 5; background: #3b82f6; color: #fff; text-align: center; }
.promo-text { font-size: 1.1rem; font-weight: 700; }
.sub-promo { font-size: 0.8rem; opacity: 0.8; margin-top: 5px; }

.cta-card { grid-column: 3 / 5; background: #22c55e; padding: 0; border: none; }
.cta-card a { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; text-decoration: none; color: #000; font-weight: 700; font-size: 1.6rem; transition: 0.2s; min-height: 80px; }
.cta-card a:hover { background: #16a34a; color: #fff; }

.about-card { grid-column: 1 / 3; background: #3b82f6; color: #fff; }
.about-card h2 { font-size: 1.8rem; margin-bottom: 15px; }
.about-card p { font-size: 1.15rem; line-height: 1.6; }
.about-card .stats-row { display: flex; gap: 30px; margin-top: 25px; }
.about-card .stats-row strong { font-size: 1.8rem; display: block; }

.services-card { grid-column: 3 / 5; }
.services-card h2 { font-size: 1.8rem; margin-bottom: 20px; }
.service-box { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
.service-box h3 { font-size: 1.1rem; margin-bottom: 5px; }
.service-box p { color: #666; font-size: 0.9rem; }

.choose-card { grid-column: 1 / 3; background: #f8fafc; }
.choose-card h2 { font-size: 1.8rem; margin-bottom: 15px; }
.choose-card ul { list-style: none; }
.choose-card li { margin-bottom: 10px; font-size: 1.05rem; }

.review-card { grid-column: 3 / 5; background: #facc15; color: #000; }
.review-card h2 { font-size: 1.8rem; margin-bottom: 15px; }
blockquote { font-size: 1.25rem; font-style: italic; font-weight: 700; margin-bottom: 10px; }
cite { font-style: normal; font-weight: 700; }

.contact-card { grid-column: 1 / -1; }
.contact-card h2 { font-size: 1.8rem; margin-bottom: 15px; }
.addr-box { font-size: 1.1rem; margin-bottom: 20px; color: #555; }
.map-box { overflow: hidden; border-radius: 16px; margin-bottom: 20px; }
.card-btn-row { display: flex; gap: 10px; }
.card-btn { display: inline-block; background: #3b82f6; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; transition: 0.3s; }
.card-btn:hover { background: #2563eb; }

.footer-card { grid-column: 1 / -1; text-align: center; color: #888; font-size: 0.9rem; padding: 25px; }

.wa-bubble { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; color: #fff; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }

@media(max-width:900px) {
  .grid-layout { grid-template-columns: 1fr; }
  .card { grid-column: 1 / -1 !important; grid-row: auto !important; }
}
`;
    return { html, css };
  },

  // 4. BRUTALIST
  'brutalist': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Brutalist Gym</title>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Mono:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- TEXT MARQUEE PROMO -->
  <div class="marquee-strip">
    <span>${biz.name.toUpperCase()} • METROFLEX NO-FLUFF ZONE • ${biz.name.toUpperCase()} • METROFLEX NO-FLUFF ZONE</span>
  </div>

  <header class="header">
    <div class="brand">${biz.name.toUpperCase()}</div>
    <nav class="nav">
      <a href="#about">[ABOUT]</a>
      <a href="#programs">[PROGRAMS]</a>
      <a href="#why">[WHY_US]</a>
      <a href="#reviews">[REVIEWS]</a>
      <a href="#contact">[FIND_US]</a>
    </nav>
  </header>

  <main class="main">
    <section class="hero">
      <div class="hero-left">
        <div class="rating-strip">GOOGLE RATING: ${biz.rating} / ${biz.reviews} FEEDBACKS</div>
        <h1>${biz.tagline.toUpperCase()}</h1>
        <p>${biz.subtitle}</p>
        <div class="btn-wrap">
          <a href="tel:${biz.phone}" class="brutal-btn">JOIN OR GO HOME</a>
          <a href="https://wa.me/${biz.waNum}" class="brutal-btn outline">WHATSAPP</a>
        </div>
      </div>
      <div class="hero-right">
        <img src="assets/hero.png" alt="Hardcore Gym Equipment">
      </div>
    </section>

    <!-- FLOATING HIGH CONTRAST BANNER -->
    <section class="ticker-box">
      💥 WAR ZONE DISCOUNT: SHOW THIS SCREEN & GET 10% OFF ANNUAL MEMBERSHIP INSTANTLY
    </section>

    <section class="about" id="about">
      <h2>[01_THE_STATION]</h2>
      <p>METROFLEX is Jaipur's primary hardcore lifting station. Located in Vaishali Nagar, we focus on raw strength. Heavy dumbbells, iron plates, and power cages. If you want a wellness spa, go elsewhere. If you want results, welcome home.</p>
      <div class="brutal-stats">
        <div class="stat-unit"><h3>4.7★</h3><p>RATING</p></div>
        <div class="stat-unit"><h3>300+</h3><p>MEMBERS</p></div>
        <div class="stat-unit"><h3>100%</h3><p>GRIT</p></div>
      </div>
    </section>

    <section class="programs" id="programs">
      <h2>[02_THE_ARSENAL]</h2>
      <div class="prog-list">
        <div class="prog-box">
          <h3>[01] POWERLIFTING</h3>
          <p>Deadlift platforms, chalk allowed, heavy barbells, solid cages.</p>
        </div>
        <div class="prog-box">
          <h3>[02] BODYBUILDING</h3>
          <p>Plate-loaded machinery to target micro-muscle growth efficiently.</p>
        </div>
        <div class="prog-box">
          <h3>[03] STRONGMAN</h3>
          <p>Sled push tracks, farmer walk handles, kettlebells.</p>
        </div>
      </div>
    </section>

    <section class="why" id="why">
      <h2>[03_THE_CODE]</h2>
      <ul class="code-list">
        <li>👉 RULE 01: Re-rack your weights. Always.</li>
        <li>👉 RULE 02: Support your squad. No egos.</li>
        <li>👉 RULE 03: Work hard. No excuses.</li>
      </ul>
    </section>

    <section class="reviews" id="reviews">
      <h2>[04_THE_TALK]</h2>
      <div class="quote-card">
        <p>"Hardcore gym. Iron plates clanging, high motivation, zero distractions. Best gym in Jaipur."</p>
        <strong>— Amit Yadav</strong>
      </div>
    </section>

    <section class="contact" id="contact">
      <h2>[05_THE_GRID]</h2>
      <p class="addr">${biz.address}</p>
      <div class="map-wrapper">
        ${commonMap(biz.address)}
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>© 2025 ${biz.name.toUpperCase()}. [NO RIGHTS RESERVED. KEEP LIFTING.]</p>
  </footer>

  <a href="https://wa.me/${biz.waNum}" class="wa-btn" target="_blank">CHAT_WA</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Roboto Mono', monospace; background: #ffef00; color: #000; border: 12px solid #000; box-sizing: border-box; }
html { scroll-behavior: smooth; }
.marquee-strip { background: #000; color: #ffef00; padding: 12px; font-family: 'Anton', sans-serif; font-size: 1.5rem; text-transform: uppercase; overflow: hidden; white-space: nowrap; }
.marquee-strip span { display: inline-block; animation: marquee 20s linear infinite; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

.header { display: flex; justify-content: space-between; align-items: center; padding: 30px; border-bottom: 8px solid #000; }
.brand { font-family: 'Anton', sans-serif; font-size: 2.2rem; }
.nav a { color: #000; text-decoration: none; font-weight: 700; margin-left: 20px; }
.nav a:hover { text-decoration: underline; }

.main { padding: 40px; }
.hero { display: flex; gap: 40px; margin-bottom: 60px; align-items: center; }
.hero-left { flex: 1.2; }
.rating-strip { border: 4px solid #000; padding: 10px; font-weight: 700; background: #fff; width: max-content; margin-bottom: 20px; box-shadow: 6px 6px 0 #000; }
h1 { font-family: 'Anton', sans-serif; font-size: 5rem; line-height: 0.95; margin-bottom: 20px; }
.hero-left p { font-size: 1.25rem; font-weight: 700; line-height: 1.5; margin-bottom: 40px; }
.btn-wrap { display: flex; gap: 20px; }
.brutal-btn { display: inline-block; background: #000; color: #fff; text-decoration: none; padding: 20px 40px; font-family: 'Anton', sans-serif; font-size: 1.8rem; border: 4px solid #000; box-shadow: 8px 8px 0 #fff, 12px 12px 0 #000; transition: 0.1s; }
.brutal-btn:hover { transform: translate(4px, 4px); box-shadow: 4px 4px 0 #fff, 8px 8px 0 #000; }
.brutal-btn.outline { background: #fff; color: #000; }

.hero-right { flex: 0.8; border: 8px solid #000; background: #000; height: 450px; overflow: hidden; }
.hero-right img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(1.3); }

.ticker-box { background: #000; color: #fff; border: 4px solid #000; padding: 20px; font-weight: 700; font-size: 1.2rem; text-align: center; margin: 40px 0; box-shadow: 8px 8px 0 #000; }

section { padding: 60px 0; border-bottom: 8px solid #000; }
h2 { font-family: 'Anton', sans-serif; font-size: 3rem; margin-bottom: 30px; }

.about p { font-size: 1.4rem; line-height: 1.6; max-width: 900px; margin-bottom: 40px; }
.brutal-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.stat-unit { border: 4px solid #000; padding: 20px; background: #fff; text-align: center; box-shadow: 6px 6px 0 #000; }
.stat-unit h3 { font-family: 'Anton', sans-serif; font-size: 2.5rem; margin-bottom: 5px; }

.prog-list { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.prog-box { border: 4px solid #000; padding: 30px; background: #fff; box-shadow: 6px 6px 0 #000; }
.prog-box h3 { font-family: 'Anton', sans-serif; font-size: 1.5rem; margin-bottom: 15px; }

.code-list { list-style: none; }
.code-list li { font-size: 1.4rem; font-weight: 700; margin-bottom: 15px; }

.quote-card { border: 4px solid #000; padding: 40px; background: #fff; box-shadow: 8px 8px 0 #000; font-size: 1.5rem; font-weight: 700; }
.quote-card strong { display: block; margin-top: 20px; font-size: 1.1rem; }

.addr { font-size: 1.2rem; font-weight: 700; margin-bottom: 20px; }
.map-wrapper { border: 8px solid #000; }

.footer { text-align: center; padding: 60px 0; border-top: 8px solid #000; font-weight: 700; }

.wa-btn { position: fixed; bottom: 30px; left: 30px; background: #000; color: #fff; padding: 15px 30px; text-decoration: none; font-family: 'Anton', sans-serif; font-size: 1.3rem; border: 4px solid #000; box-shadow: 6px 6px 0 #ffef00; z-index: 100; }

@media(max-width:900px) {
  .hero { flex-direction: column; }
  h1 { font-size: 3rem; }
  .prog-list, .brutal-stats { grid-template-columns: 1fr; }
  .hero-right { display: none; }
}
`;
    return { html, css };
  },

  // 5. FULLSCREEN BG
  'fullscreen-bg': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Glassmorphism Gym</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="fixed-background" style="background-image: url('assets/hero.png');"></div>
  <div class="screen-overlay"></div>

  <div class="layout-container">
    <header class="glass-navbar">
      <div class="logo">⚡ ${biz.name.toUpperCase()}</div>
      <nav class="links">
        <a href="#about">About</a>
        <a href="#services">Experience</a>
        <a href="#choose">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Locate</a>
      </nav>
      <a href="tel:${biz.phone}" class="glass-cta-btn">CALL NOW</a>
    </header>

    <!-- FLOATING TOP BANNER -->
    <div class="floating-alert-banner">
      ⚡ SPECIAL DISCOUNT: SHOW THIS BANNER ON PHONE FOR 10% TRIAL WEEK REDUCTION!
    </div>

    <section class="glass-hero" id="home">
      <div class="rating-strip">★ ${biz.rating} Rating | ${biz.reviews} Google Testimonials</div>
      <h1>${biz.tagline}</h1>
      <p class="sub">${biz.subtitle}</p>
      <div class="hero-actions">
        <a href="tel:${biz.phone}" class="solid-btn">Join Fitness Society</a>
        <a href="https://wa.me/${biz.waNum}" class="trans-btn">Chat On WhatsApp</a>
      </div>
    </section>

    <div class="glass-panel" id="about">
      <h2>OUR MISSION</h2>
      <p>Welcome to Fitness Society. Located near Science Park, Subhash Nagar, we focus on holistic wellness, intense functional strength training, and building a community that cares for your physical targets. Experience premium gear in a supportive setup.</p>
      <div class="stats-grid">
        <div class="stat-unit"><strong>30+</strong><span>Classes Weekly</span></div>
        <div class="stat-unit"><strong>12+</strong><span>Certified Guides</span></div>
        <div class="stat-unit"><strong>24/7</strong><span>App Tracking</span></div>
      </div>
    </div>

    <div class="glass-panel" id="services">
      <h2>THE EXPERIENCE</h2>
      <div class="experience-list">
        <div class="exp-row">
          <h3>[01] Functional Turf</h3>
          <p>Battle ropes, kettlebells, tire flips, and functional rigs for athletic training.</p>
        </div>
        <div class="exp-row">
          <h3>[02] Strength Section</h3>
          <p>Isolated heavy-duty machinery from premium worldwide developers.</p>
        </div>
        <div class="exp-row">
          <h3>[03] Mind-Body Studios</h3>
          <p>Yoga, dynamic pilates, and breathing classes led by veteran guides.</p>
        </div>
      </div>
    </div>

    <div class="glass-panel" id="choose">
      <h2>WHY MEMBERS CHOOSE US</h2>
      <ul class="why-bullet-list">
        <li>⚡ <strong>Community-First:</strong> Everyone knows your name. Supportive coaches.</li>
        <li>⚡ <strong>Top-Tier Cleanliness:</strong> Premium sanitation protocols executed hourly.</li>
        <li>⚡ <strong>Progress Centric:</strong> Weekly physical assessments.</li>
      </ul>
    </div>

    <div class="glass-panel" id="reviews">
      <h2>REVIEWS</h2>
      <div class="review-scroller">
        <div class="rev-card">
          <p>"Extremely pleasant, supportive trainers, and amazing machinery layout."</p>
          <strong>— Kavita Sharma</strong>
        </div>
      </div>
    </div>

    <div class="glass-panel" id="contact">
      <h2>THE LOCATION</h2>
      <p class="address-paragraph">${biz.address}</p>
      <div class="map-container">
        ${commonMap(biz.address)}
      </div>
    </div>

    <footer class="glass-footer">
      <p>© 2025 ${biz.name}. Crafted beautifully.</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-widget" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body, html { margin: 0; padding: 0; font-family: 'Poppins', sans-serif; color: #fff; background-color: #000; overflow-x: hidden; }
html { scroll-behavior: smooth; }
.fixed-background { position: fixed; inset: 0; background-size: cover; background-position: center; z-index: -2; }
.screen-overlay { position: fixed; inset: 0; background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(15,23,42,0.6)); z-index: -1; backdrop-filter: blur(8px); }

.layout-container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }

header.glass-navbar { display: flex; justify-content: space-between; align-items: center; padding: 25px 30px; margin-top: 20px; border-radius: 20px; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); }
.logo { font-weight: 800; font-size: 1.25rem; letter-spacing: 1px; }
.links a { color: rgba(255,255,255,0.7); text-decoration: none; margin-left: 20px; font-size: 0.9rem; font-weight: 500; transition: 0.3s; }
.links a:hover { color: #fff; }
.glass-cta-btn { background: #fff; color: #000; text-decoration: none; padding: 10px 20px; border-radius: 30px; font-weight: 600; font-size: 0.8rem; }

.floating-alert-banner { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(10px); color: #fff; text-align: center; padding: 12px; border-radius: 12px; margin: 30px 0; font-weight: 600; font-size: 0.85rem; }

.glass-hero { text-align: center; padding: 100px 20px; }
.rating-strip { display: inline-block; background: rgba(255,255,255,0.1); padding: 6px 16px; border-radius: 30px; font-size: 0.8rem; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.15); }
.glass-hero h1 { font-size: 4rem; font-weight: 800; line-height: 1.1; margin-bottom: 25px; text-shadow: 0 4px 20px rgba(0,0,0,0.4); }
.glass-hero .sub { font-size: 1.25rem; color: rgba(255,255,255,0.8); max-width: 700px; margin: 0 auto 40px; font-weight: 300; }
.hero-actions { display: flex; gap: 15px; justify-content: center; }
.solid-btn { background: #fff; color: #000; padding: 14px 28px; border-radius: 50px; font-weight: 600; text-decoration: none; transition: 0.3s; }
.trans-btn { border: 2px solid #fff; color: #fff; padding: 12px 28px; border-radius: 50px; font-weight: 600; text-decoration: none; transition: 0.3s; }
.solid-btn:hover { transform: translateY(-2px); }

.glass-panel { background: rgba(10,10,15,0.45); backdrop-filter: blur(15px); border: 1px solid rgba(255,255,255,0.08); border-radius: 24px; padding: 50px; margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.glass-panel h2 { font-size: 1.8rem; margin-bottom: 25px; letter-spacing: 1px; color: #e2e8f0; }

.glass-panel p { font-size: 1.1rem; line-height: 1.7; color: rgba(255,255,255,0.8); }
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
.stat-unit { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); padding: 20px; border-radius: 12px; text-align: center; }
.stat-unit strong { font-size: 2rem; display: block; margin-bottom: 5px; color: #fff; }
.stat-unit span { font-size: 0.8rem; color: rgba(255,255,255,0.5); text-transform: uppercase; }

.exp-row { margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.exp-row h3 { font-size: 1.25rem; margin-bottom: 8px; color: #fff; }
.exp-row p { font-size: 0.95rem; color: rgba(255,255,255,0.7); }

.why-bullet-list { list-style: none; }
.why-bullet-list li { font-size: 1.1rem; margin-bottom: 15px; color: rgba(255,255,255,0.8); }

.rev-card p { font-style: italic; font-size: 1.2rem; margin-bottom: 15px; }
.rev-card strong { color: #facc15; }

.address-paragraph { font-size: 1.1rem; margin-bottom: 25px; }
.map-container { overflow: hidden; border-radius: 16px; }

.glass-footer { text-align: center; padding: 60px 0; color: rgba(255,255,255,0.3); font-size: 0.85rem; }

.wa-float-widget { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.4); }

@media(max-width:900px) {
  .links, header.glass-navbar .glass-cta-btn { display: none; }
  .stats-grid { grid-template-columns: 1fr; }
  .glass-hero h1 { font-size: 2.2rem; }
  .glass-panel { padding: 30px 20px; }
}
`;
    return { html, css };
  },

  // 6. SIDEBAR NAV
  'sidebar-nav': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Sidebar Layout</title>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="app-layout">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <h2>${biz.name}</h2>
        <div class="sidebar-rating">★ ${biz.rating} (${biz.reviews} reviews)</div>
      </div>
      <nav class="sidebar-menu">
        <a href="#home">Home</a>
        <a href="#about">Philosophy</a>
        <a href="#programs">Experience</a>
        <a href="#choose">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Location</a>
      </nav>
      <div class="sidebar-cta">
        <a href="tel:${biz.phone}" class="sidebar-btn">Call Clinic</a>
      </div>
    </aside>

    <main class="main-content">
      <!-- STATIC HIGHLIGHT STRIP -->
      <div class="highlight-strip">
        🔥 EXCLUSIVE C-SCHEME OFFER: REGISTER VIA WHATSAPP TODAY FOR A FREE 3-DAY PASS
      </div>

      <section id="home" class="hero-section">
        <div class="hero-bg" style="background-image: url('assets/hero.png');"></div>
        <div class="hero-overlay"></div>
        <div class="hero-body">
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="btn btn-primary">Call Now</a>
            <a href="https://wa.me/${biz.waNum}" class="btn btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="about" class="content-section">
        <h2 class="sec-title">THE PHILOSOPHY</h2>
        <p class="lead-text">Fitup Fitness Lifestyle stands for bespoke training. Operating out of Subhash Marg, C Scheme, we offer a sanctuary for focused training. Our space limits the active count of trainees, giving you total space to lift.</p>
        <div class="about-grid">
          <div class="about-box"><h3>Boutique Setup</h3><p>Never overcrowded. Total control over your environment.</p></div>
          <div class="about-box"><h3>Personal Design</h3><p>Routines built around your body and metabolic indexes.</p></div>
        </div>
      </section>

      <section id="programs" class="content-section bg-dark">
        <h2 class="sec-title">THE EXPERIENCE</h2>
        <div class="experience-grid">
          <div class="card">
            <h3>Personal Coaching</h3>
            <p>1-on-1 sessions focusing on strength metrics and posture safety.</p>
          </div>
          <div class="card">
            <h3>Custom Nutrition</h3>
            <p>Weekly dietary reviews based on biometric parameters.</p>
          </div>
        </div>
      </section>

      <section id="choose" class="content-section">
        <h2 class="sec-title">WHY MEMBERS LEVEL UP WITH US</h2>
        <ul class="bullet-list">
          <li><strong>Elite Trainers:</strong> Hand-picked, qualified coaching team.</li>
          <li><strong>Clean Space:</strong> Sanitized space with premium ventilation setups.</li>
          <li><strong>Modern Methods:</strong> No outdated generic routines.</li>
        </ul>
      </section>

      <section id="reviews" class="content-section bg-dark">
        <h2 class="sec-title">REVIEWS</h2>
        <div class="review-box">
          <p>"Outstanding boutique gym experience. Meticulous gear and amazing guides."</p>
          <strong>— Rohan Gupta</strong>
        </div>
      </section>

      <section id="contact" class="content-section">
        <h2 class="sec-title">THE STUDIO</h2>
        <p class="addr-text">${biz.address}</p>
        <div class="map-container">
          ${commonMap(biz.address)}
        </div>
      </section>

      <footer class="footer">
        <p>© 2025 ${biz.name}. Crafted with focus.</p>
      </footer>
    </main>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-sidebar" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; font-family: 'Jost', sans-serif; background: #0a0a0a; color: #fff; }
html { scroll-behavior: smooth; }
.app-layout { display: flex; }

.sidebar { width: 280px; height: 100vh; position: fixed; left: 0; top: 0; background: #111; border-right: 1px solid #222; padding: 40px 30px; display: flex; flex-direction: column; justify-content: space-between; z-index: 100; }
.sidebar-brand h2 { font-size: 1.8rem; font-weight: 800; color: #ff4757; line-height: 1.1; margin-bottom: 8px; }
.sidebar-rating { font-size: 0.85rem; color: #888; }
.sidebar-menu { display: flex; flex-direction: column; gap: 18px; margin-top: 40px; }
.sidebar-menu a { color: #888; text-decoration: none; font-size: 1.05rem; font-weight: 500; transition: 0.3s; }
.sidebar-menu a:hover { color: #fff; padding-left: 5px; }
.sidebar-btn { display: block; background: #ff4757; color: #fff; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; transition: 0.3s; }
.sidebar-btn:hover { background: #ff6b81; }

.main-content { margin-left: 280px; flex: 1; min-height: 100vh; display: flex; flex-direction: column; }
.highlight-strip { background: #ff4757; color: #fff; font-weight: 700; font-size: 0.85rem; text-align: center; padding: 12px; }

.hero-section { height: 85vh; position: relative; display: flex; align-items: center; padding: 60px; }
.hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; }
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); }
.hero-body { position: relative; z-index: 2; max-width: 650px; }
.hero-body h1 { font-size: 3.8rem; font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
.hero-body p { font-size: 1.2rem; color: #ccc; margin-bottom: 35px; }

.actions { display: flex; gap: 15px; }
.btn { display: inline-block; padding: 14px 28px; font-weight: 700; border-radius: 4px; text-decoration: none; transition: 0.3s; }
.btn-primary { background: #ff4757; color: #fff; }
.btn-outline { border: 2px solid #fff; color: #fff; }
.btn-primary:hover { background: #ff6b81; }

.content-section { padding: 80px 60px; border-bottom: 1px solid #222; }
.bg-dark { background: #0e0e0e; }
.sec-title { font-size: 2.2rem; color: #ff4757; font-weight: 700; margin-bottom: 30px; }
.lead-text { font-size: 1.25rem; color: #ccc; line-height: 1.6; margin-bottom: 40px; }

.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.about-box { background: #151515; padding: 30px; border-radius: 8px; border: 1px solid #222; }
.about-box h3 { margin-bottom: 10px; }
.about-box p { color: #888; font-size: 0.95rem; }

.experience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.card { background: #1a1a1a; padding: 40px; border-radius: 8px; border: 1px solid #222; }
.card h3 { margin-bottom: 15px; }
.card p { color: #888; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.15rem; margin-bottom: 15px; }
.bullet-list li strong { color: #ff4757; }

.review-box { background: #151515; padding: 30px; border-radius: 8px; font-style: italic; }
.review-box strong { color: #ff4757; display: block; margin-top: 15px; font-style: normal; }

.addr-text { font-size: 1.15rem; margin-bottom: 35px; color: #888; }
.map-container { overflow: hidden; border-radius: 12px; }

.footer { padding: 40px 60px; color: #555; font-size: 0.85rem; text-align: center; }

.wa-float-sidebar { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

@media(max-width:900px) {
  .sidebar { width: 100%; height: auto; position: relative; border-right: none; border-bottom: 1px solid #222; padding: 30px 20px; }
  .sidebar-menu { display: none; }
  .main-content { margin-left: 0; }
  .hero-section { padding: 40px 20px; height: auto; }
  .hero-body h1 { font-size: 2.2rem; }
  .content-section { padding: 40px 20px; }
  .about-grid, .experience-grid { grid-template-columns: 1fr; }
}
`;
    return { html, css };
  },

  // 7. NEUMORPHISM
  'neumorphism': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Neumorphic Fitness</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="neu-wrapper">
    <header class="neu-header neu-outer">
      <div class="neu-logo">${biz.name}</div>
      <a href="tel:${biz.phone}" class="neu-btn small-btn">Call Us</a>
    </header>

    <!-- FLOATING TOP BANNER -->
    <div class="neu-promo-bar neu-inner">
      🎁 EXCLUSIVE WEEKLY HIGHLIGHT: REGISTER A TRIAL PASS & GET FREE NUTRITIONAL ADVISORY INSTANTLY
    </div>

    <section class="neu-hero neu-outer">
      <div class="hero-split">
        <div class="hero-left">
          <div class="neu-badge neu-inner">★ ${biz.rating} (${biz.reviews} reviews)</div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="actions">
            <a href="tel:${biz.phone}" class="neu-btn">Call Now</a>
            <a href="https://wa.me/${biz.waNum}" class="neu-btn btn-inset">WhatsApp</a>
          </div>
        </div>
        <div class="hero-right neu-inner">
          <img src="assets/hero.png" alt="Clean Neumorphic Gym View">
        </div>
      </div>
    </section>

    <section class="neu-about neu-outer">
      <h2>ABOUT US</h2>
      <p>Fitness Island Gym at Satya Vihar, Lalkothi provides a soft-toned paradise environment for workout enthusiasts. We keep it extremely hygienic, properly ventilated, and highly centered around professional trainer consultations.</p>
      <div class="stats-row">
        <div class="stat-card neu-inner"><h3>4.8★</h3><span>Rating</span></div>
        <div class="stat-card neu-inner"><h3>12+</h3><span>Coaches</span></div>
        <div class="stat-card neu-inner"><h3>100%</h3><span>Focus</span></div>
      </div>
    </section>

    <section class="neu-services neu-outer">
      <h2>PROGRAMS</h2>
      <div class="services-grid">
        <div class="svc-box neu-inner">
          <h3>Aerobics & HIIT</h3>
          <p>Group classes designed to burn calories in high tempo.</p>
        </div>
        <div class="svc-box neu-inner">
          <h3>Personal Advisory</h3>
          <p>Strict structural programs focused on body posture guides.</p>
        </div>
        <div class="svc-box neu-inner">
          <h3>Modern Weights</h3>
          <p>Curated plate loaded machinery and cable modules.</p>
        </div>
      </div>
    </section>

    <section class="neu-choose neu-outer">
      <h2>WHY US</h2>
      <ul class="neu-list">
        <li class="neu-inner">✨ Top-Tier Sanitary Environment.</li>
        <li class="neu-inner">✨ Decent community crowd.</li>
        <li class="neu-inner">✨ Transparent plans without hidden taxes.</li>
      </ul>
    </section>

    <section class="neu-reviews neu-outer">
      <h2>REVIEWS</h2>
      <div class="review-box neu-inner">
        <p>"Perfect neighborhood gym. Professional guides, neat, and highly friendly."</p>
        <strong>— Aditya Rawat</strong>
      </div>
    </section>

    <section class="neu-location neu-outer">
      <h2>OUR SHORE</h2>
      <p class="addr-text">${biz.address}</p>
      <div class="map-frame neu-inner">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="neu-footer neu-outer">
      <p>© 2025 ${biz.name}. Paradise Fitness.</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-float-neu" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { background-color: #e0e5ec; font-family: 'Nunito', sans-serif; color: #4a5568; margin: 0; padding: 40px 20px; }
html { scroll-behavior: smooth; }
.neu-wrapper { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 40px; }

.neu-outer { border-radius: 24px; background: #e0e5ec; box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5); padding: 40px; }
.neu-inner { border-radius: 20px; background: #e0e5ec; box-shadow: inset 6px 6px 10px rgba(163, 177, 198, 0.5), inset -6px -6px 10px rgba(255, 255, 255, 0.8); }

.neu-header { display: flex; justify-content: space-between; align-items: center; padding: 25px 40px; }
.neu-logo { font-size: 1.6rem; font-weight: 900; color: #2b6cb0; }
.neu-btn { display: inline-block; padding: 14px 28px; border-radius: 30px; text-decoration: none; color: #2b6cb0; font-weight: 700; background: #e0e5ec; box-shadow: 5px 5px 10px rgba(163, 177, 198, 0.5), -5px -5px 10px rgba(255, 255, 255, 0.8); transition: 0.2s; border: none; font-size: 0.9rem; }
.neu-btn:active, .neu-btn.btn-inset { box-shadow: inset 4px 4px 8px rgba(163, 177, 198, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.8); }
.neu-btn.small-btn { padding: 8px 18px; font-size: 0.8rem; }

.neu-promo-bar { text-align: center; padding: 14px 20px; font-weight: 700; font-size: 0.85rem; color: #2b6cb0; }

.hero-split { display: flex; gap: 40px; align-items: center; }
.hero-left { flex: 1.1; }
.neu-badge { display: inline-block; padding: 6px 16px; font-weight: 700; font-size: 0.8rem; color: #2b6cb0; margin-bottom: 20px; }
.hero-left h1 { font-size: 3.2rem; font-weight: 900; line-height: 1.1; color: #2b6cb0; margin-bottom: 20px; }
.hero-left p { font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px; }
.actions { display: flex; gap: 15px; }

.hero-right { flex: 0.9; padding: 15px; }
.hero-right img { width: 100%; border-radius: 15px; display: block; height: 350px; object-fit: cover; }

section h2 { font-size: 1.8rem; font-weight: 900; color: #2b6cb0; margin-bottom: 20px; }
.neu-about p { font-size: 1.1rem; line-height: 1.7; margin-bottom: 30px; }
.stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.stat-card { padding: 20px; text-align: center; }
.stat-card h3 { font-size: 2rem; color: #2b6cb0; font-weight: 900; }
.stat-card span { font-size: 0.8rem; text-transform: uppercase; color: #718096; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc-box { padding: 30px; }
.svc-box h3 { font-size: 1.25rem; color: #2b6cb0; margin-bottom: 10px; }
.svc-box p { font-size: 0.9rem; }

.neu-list { list-style: none; }
.neu-list li { padding: 15px 25px; margin-bottom: 15px; font-size: 1.1rem; font-weight: 600; }

.review-box { padding: 30px; font-style: italic; }
.review-box strong { display: block; margin-top: 15px; color: #2b6cb0; font-style: normal; }

.addr-text { font-size: 1.1rem; margin-bottom: 20px; }
.map-frame { padding: 15px; }

.neu-footer { text-align: center; color: #718096; font-size: 0.85rem; }

.wa-float-neu { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #e0e5ec; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 6px 6px 12px rgba(163,177,198,0.5), -6px -6px 12px rgba(255,255,255,0.8); }

@media(max-width:900px) {
  .hero-split, .services-grid, .stats-row { grid-template-columns: 1fr; flex-direction: column; display: flex; }
  .hero-right { display: none; }
  .hero-left h1 { font-size: 2.2rem; }
}
`;
    return { html, css };
  },

  // 8. BOLD GRID
  'bold-grid': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Bento Grid Gym</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Work+Sans:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="bento-wrap">
    <div class="bento-grid">
      <!-- Grid Item 1: Brand -->
      <div class="cell logo-cell">
        <h2>${biz.name}</h2>
        <div class="nav-links">
          <a href="#about">Philosophy</a>
          <a href="#programs">Offerings</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Location</a>
        </div>
      </div>

      <!-- Grid Item 2: Hero Image -->
      <div class="cell hero-img-cell">
        <img src="assets/hero.png" alt="Bento Box Gym Display">
      </div>

      <!-- Grid Item 3: Header Hero -->
      <div class="cell main-text-cell">
        <div class="stars">★ ${biz.rating} Rating | ${biz.reviews} Google feed</div>
        <h1>${biz.tagline}</h1>
        <p>${biz.subtitle}</p>
      </div>

      <!-- Grid Item 4: CTA Action -->
      <div class="cell action-cell">
        <a href="tel:${biz.phone}">JOIN TODAY →</a>
      </div>

      <!-- Grid Item 5: Promo Strip -->
      <div class="cell promo-cell">
        <p>🔥 BAPU NAGAR ANNOUNCEMENT: NO INITIATION FEE & FREE 1 WEEK ON WHATSAPP CONTACT</p>
      </div>

      <!-- Grid Item 6: About -->
      <div class="cell about-cell" id="about">
        <h3>24/7 MODERN TRAINING</h3>
        <p>Anytime Fitness Bapu Nagar brings dynamic, flexible training parameters directly to Pavilion Mall. We offer secure, round-the-clock entry, high-spec functional setups, and certified guides to adjust your movement profiles.</p>
      </div>

      <!-- Grid Item 7: Services -->
      <div class="cell equip-cell" id="programs">
        <h3>OFFERINGS</h3>
        <ul>
          <li>💪 Advanced Strength Turf</li>
          <li>💪 High-Intensity Zones</li>
          <li>💪 Personal Coaching Guides</li>
        </ul>
      </div>

      <!-- Grid Item 8: Choose -->
      <div class="cell choose-cell">
        <h3>WHY BAPU NAGAR</h3>
        <p>✓ Open 24 Hours, 365 Days.</p>
        <p>✓ Global franchise standards.</p>
        <p>✓ Expert coaching programs.</p>
      </div>

      <!-- Grid Item 9: Reviews -->
      <div class="cell reviews-cell" id="reviews">
        <h3>TESTIMONIALS</h3>
        <blockquote>"Fantastic machinery, open 24/7 which fits my schedule, and has extremely decent crowd."</blockquote>
        <span>— Neeraj Rawat</span>
      </div>

      <!-- Grid Item 10: Location -->
      <div class="cell address-cell" id="contact">
        <p class="lbl">LOCATION</p>
        <h3>${biz.address}</h3>
        <div class="map-container">
          ${commonMap(biz.address)}
        </div>
      </div>
    </div>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="bento-wa" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { margin: 0; background: #0c0c0e; color: #fff; font-family: 'Work Sans', sans-serif; padding: 20px; min-height: 100vh; display: flex; justify-content: center; align-items: center; }
html { scroll-behavior: smooth; }
.bento-wrap { width: 100%; max-width: 1200px; }
.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(220px, auto); gap: 15px; }

.cell { background: #18181c; border-radius: 28px; padding: 35px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; position: relative; border: 1px solid #222; }

.logo-cell { grid-column: 1 / 2; grid-row: 1 / 2; background: #5000ca; border: none; justify-content: space-between; }
.logo-cell h2 { font-family: 'Oswald', sans-serif; font-size: 2rem; line-height: 1.1; text-transform: uppercase; }
.logo-cell .nav-links { display: flex; flex-direction: column; gap: 8px; }
.logo-cell .nav-links a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 0.85rem; font-weight: 600; }
.logo-cell .nav-links a:hover { color: #fff; }

.hero-img-cell { grid-column: 2 / 5; grid-row: 1 / 3; padding: 0; }
.hero-img-cell img { width: 100%; height: 100%; object-fit: cover; min-height: 300px; }

.main-text-cell { grid-column: 1 / 3; grid-row: 2 / 4; background: #fff; color: #000; border: none; }
.main-text-cell .stars { font-weight: 700; color: #5000ca; font-size: 0.9rem; margin-bottom: 15px; }
h1 { font-family: 'Oswald', sans-serif; font-size: 3.5rem; line-height: 1.05; text-transform: uppercase; margin-bottom: 15px; }
.text-gradient { color: #5000ca; }
.main-text-cell p { font-size: 1.05rem; color: #444; }

.action-cell { grid-column: 3 / 4; grid-row: 3 / 4; background: #00d2ff; border: none; padding: 0; }
.action-cell a { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; text-decoration: none; color: #000; font-family: 'Oswald', sans-serif; font-size: 2.2rem; transition: 0.3s; min-height: 120px; }
.action-cell a:hover { background: #fff; }

.promo-cell { grid-column: 1 / -1; background: #00d2ff; color: #000; font-family: 'Oswald', sans-serif; text-align: center; padding: 15px; font-weight: 700; font-size: 1.1rem; border: none; }

.about-cell { grid-column: 1 / 3; background: #222; }
.about-cell h3, .equip-cell h3, .choose-cell h3, .reviews-cell h3 { font-family: 'Oswald', sans-serif; font-size: 1.8rem; color: #00d2ff; margin-bottom: 12px; }
.about-cell p { font-size: 1.05rem; color: #aaa; line-height: 1.5; }

.equip-cell { grid-column: 3 / 4; }
.equip-cell ul { list-style: none; }
.equip-cell li { margin-bottom: 8px; font-size: 1.05rem; }

.choose-cell { grid-column: 4 / 5; }
.choose-cell p { font-size: 1.05rem; margin-bottom: 8px; }

.reviews-cell { grid-column: 1 / 3; background: #1c1c24; }
blockquote { font-style: italic; font-size: 1.15rem; color: #ccc; margin-bottom: 10px; }
.reviews-cell span { font-weight: 700; color: #00d2ff; }

.address-cell { grid-column: 3 / 5; grid-row: 5 / 7; }
.address-cell .lbl { font-size: 0.8rem; letter-spacing: 2px; color: #777; margin-bottom: 8px; }
.address-cell h3 { font-size: 1.15rem; font-weight: 400; margin-bottom: 20px; }
.map-container { overflow: hidden; border-radius: 16px; }

.bento-wa { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #25D366; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }

@media(max-width:1000px) {
  .bento-grid { display: flex; flex-direction: column; }
  .cell { height: auto; min-height: 200px; }
  .hero-img-cell { display: none; }
  h1 { font-size: 2.5rem; }
}
`;
    return { html, css };
  },

  // 9. ELEGANT DARK
  'elegant-dark': (biz) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${biz.name} | Luxury Personal Training</title>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- STATIC ELEGANT BANNER -->
  <div class="elegant-alert-strip">
    ✦ EXCLUSIVE HAWA SADAK CLUB: PERSONAL ASSESSMENT COMPLIMENTARY WITH ALL QUERIES ✦
  </div>

  <div class="elegant-wrapper">
    <header class="navbar">
      <div class="logo">${biz.name.toUpperCase()}</div>
      <nav class="links">
        <a href="#about">Philosophy</a>
        <a href="#programs">Arsenal</a>
        <a href="#choose">Why Vault</a>
        <a href="#reviews">Testimonials</a>
        <a href="#contact">Location</a>
      </nav>
      <a href="tel:${biz.phone}" class="nav-cta">INQUIRE</a>
    </header>

    <section class="hero-section" id="home">
      <div class="text-content">
        <span class="badge">PRIVATE STUDIO</span>
        <h1>${biz.tagline}</h1>
        <p class="subtitle">${biz.subtitle}</p>
        <div class="rating-box">
          <span class="stars">★★★★★</span>
          <span>${biz.rating} Rating (${biz.reviews} Reviews)</span>
        </div>
        <div class="actions">
          <a href="tel:${biz.phone}" class="gold-btn">REQUEST INVITE</a>
          <a href="https://wa.me/${biz.waNum}" class="gold-btn btn-outline">WHATSAPP</a>
        </div>
      </div>
      <div class="image-frame">
        <img src="assets/hero.png" alt="Luxury Gym Interior Decor">
      </div>
    </section>

    <section class="about-section" id="about">
      <div class="split">
        <div class="left">
          <h2>The Vault Philosophy</h2>
        </div>
        <div class="right">
          <p>Vault Fitness provides personal coaching loops at Hawa Sadak. We design intimate sessions for clients who value focused performance guidance, meticulous sanitization, and structured fat tracking.</p>
          <div class="stats-grid">
            <div class="stat-unit"><h3>58+</h3><p>MEMBERS</p></div>
            <div class="stat-unit"><h3>6</h3><p>COACHES</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="programs-section" id="programs">
      <h2 class="section-center-title">THE ARSENAL</h2>
      <div class="programs-grid">
        <div class="prog-card">
          <h3>Private Training</h3>
          <p>1-on-1 biological alignment and tracking modules.</p>
        </div>
        <div class="prog-card">
          <h3>Body Recomposition</h3>
          <p>Precision fat loss and skeletal alignment programs.</p>
        </div>
        <div class="prog-card">
          <h3>Postural Safety</h3>
          <p>Structural stretching and spine support exercises.</p>
        </div>
      </div>
    </section>

    <section class="choose-section" id="choose">
      <div class="split">
        <div class="left">
          <h2>THE BENCHMARKS</h2>
        </div>
        <div class="right">
          <ul class="bullet-list">
            <li>✦ <strong>Privacy:</strong> Single active slot limits.</li>
            <li>✦ <strong>Hygiene:</strong> Private shower cabins sanitized hourly.</li>
            <li>✦ <strong>Excellence:</strong> Coaches are metabolic experts.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="reviews-section" id="reviews">
      <h2 class="section-center-title">MEMBERS REVIEWS</h2>
      <div class="quote-scroller">
        <blockquote>"Jaipur's best personal studio. Very private, elite coaches, clean atmosphere."</blockquote>
        <cite>— Vikram Shah</cite>
      </div>
    </section>

    <section class="contact-section" id="contact">
      <h2 class="section-center-title">THE LOCATION</h2>
      <p class="address-text">${biz.address}</p>
      <div class="map-wrap">
        ${commonMap(biz.address)}
      </div>
    </section>

    <footer class="footer">
      <p>© 2025 ${biz.name}. Managed elegantly.</p>
    </footer>
  </div>

  <a href="https://wa.me/${biz.waNum}" class="wa-luxury" target="_blank">${waSVG}</a>
</body>
</html>`;

    const css = `body { background-color: #060606; font-family: 'Lato', sans-serif; color: #ccc; margin: 0; }
html { scroll-behavior: smooth; }

.elegant-alert-strip { background: linear-gradient(90deg, #aa7c11, #d4af37, #aa7c11); color: #000; font-family: 'Cinzel', serif; font-weight: 700; text-align: center; padding: 12px; font-size: 0.8rem; letter-spacing: 2px; }

.elegant-wrapper { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }

header.navbar { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1c1c1c; padding-bottom: 25px; margin-bottom: 60px; }
.logo { font-family: 'Cinzel', serif; font-size: 1.6rem; color: #d4af37; letter-spacing: 3px; }
.links a { color: #888; text-decoration: none; margin-left: 20px; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
.links a:hover { color: #d4af37; }
.nav-cta { border: 1px solid #d4af37; color: #d4af37; text-decoration: none; padding: 10px 24px; font-family: 'Cinzel', serif; font-size: 0.8rem; letter-spacing: 1.5px; transition: 0.3s; }
.nav-cta:hover { background: #d4af37; color: #000; }

.hero-section { display: flex; gap: 60px; align-items: center; margin-bottom: 100px; }
.text-content { flex: 1.1; }
.badge { display: inline-block; color: #d4af37; font-size: 0.8rem; letter-spacing: 3px; font-weight: 700; margin-bottom: 15px; }
h1 { font-family: 'Cinzel', serif; font-size: 3.5rem; color: #fff; line-height: 1.1; margin-bottom: 20px; font-weight: 400; }
.text-gradient { color: #d4af37; }
.subtitle { font-size: 1.15rem; line-height: 1.7; color: #888; margin-bottom: 30px; }
.rating-box { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; font-size: 0.9rem; }
.stars { color: #d4af37; font-size: 1.15rem; }
.actions { display: flex; gap: 15px; }
.gold-btn { display: inline-block; background: #d4af37; color: #000; text-decoration: none; padding: 15px 35px; font-family: 'Cinzel', serif; font-weight: 700; font-size: 0.85rem; letter-spacing: 1.5px; transition: 0.3s; border: 1px solid #d4af37; }
.gold-btn:hover { background: transparent; color: #d4af37; }
.gold-btn.btn-outline { background: transparent; color: #d4af37; }
.gold-btn.btn-outline:hover { background: #d4af37; color: #000; }

.image-frame { flex: 0.9; padding: 15px; border: 1px solid #1c1c1c; position: relative; }
.image-frame img { width: 100%; height: 450px; object-fit: cover; display: block; filter: brightness(0.7) contrast(1.1); }
.image-frame::after { content: ''; position: absolute; inset: 0; border: 1px solid #d4af37; margin: 5px; opacity: 0.2; pointer-events: none; }

section { padding: 80px 0; border-bottom: 1px solid #1c1c1c; }
.split { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; }
.split h2 { font-family: 'Cinzel', serif; font-size: 1.8rem; color: #fff; }
.split p { font-size: 1.15rem; line-height: 1.7; color: #888; margin-bottom: 30px; }
.stats-grid { display: flex; gap: 40px; }
.stat-unit h3 { font-family: 'Cinzel', serif; font-size: 1.8rem; color: #d4af37; }
.stat-unit p { font-size: 0.8rem; color: #555; }

.section-center-title { text-align: center; font-family: 'Cinzel', serif; font-size: 2rem; color: #fff; margin-bottom: 50px; }
.programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.prog-card { background: #0a0a0a; border: 1px solid #1c1c1c; padding: 30px; }
.prog-card h3 { font-family: 'Cinzel', serif; color: #d4af37; font-size: 1.25rem; margin-bottom: 10px; }
.prog-card p { font-size: 0.9rem; color: #888; }

.bullet-list { list-style: none; }
.bullet-list li { font-size: 1.15rem; margin-bottom: 15px; color: #888; }
.bullet-list li strong { color: #d4af37; }

blockquote { font-family: 'Cinzel', serif; font-size: 1.4rem; font-style: italic; text-align: center; margin-bottom: 15px; color: #fff; }
cite { display: block; text-align: center; font-weight: 700; color: #d4af37; font-style: normal; }

.address-text { text-align: center; font-size: 1.1rem; margin-bottom: 30px; color: #888; }
.map-wrap { border: 1px solid #1c1c1c; overflow: hidden; border-radius: 12px; }

.footer { text-align: center; padding: 60px 0; color: #444; font-size: 0.8rem; }

.wa-luxury { position: fixed; bottom: 30px; right: 30px; z-index: 100; background: #000; border: 1px solid #d4af37; color: #d4af37; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(212,175,55,0.2); }

@media(max-width:900px) {
  .hero-section { flex-direction: column; text-align: center; }
  .image-frame { display: none; }
  .links, header.navbar .nav-cta { display: none; }
  .split, .programs-grid { grid-template-columns: 1fr; }
  h1 { font-size: 2.5rem; }
}
`;
    return { html, css };
  }

};

console.log("Generating BATCH 1: 9 Unique Gym Designs...\n");

gyms.forEach(biz => {
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
  // Or copy from fitness-pulse-gym/assets/hero.png if it exists
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

console.log("\nBatch 1 completed successfully!");
