const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

const gyms = [
  {
    slug: 'fitness-pulse-gym', name: 'Fitness Pulse Gym',
    tagline: 'Transform Your Body.', subtitle: "Jaipur's most trusted fitness destination on Kalwar Road.",
    rating: 4.8, reviews: 1837, phone: '+919887000058', waNum: '919887000058',
    address: 'Kalwar Rd, Suraj Nagar, Jhotwara, Jaipur 302012',
    style: 'split-screen'
  },
  {
    slug: 'klean-fit-iconic', name: 'KLEAN FIT Iconic',
    tagline: 'Elevate Your Fitness Game.', subtitle: "C-Scheme's premium fitness experience.",
    rating: 4.7, reviews: 857, phone: '+919024662515', waNum: '919024662515',
    address: '3rd Floor, Crystal Palm Mall, C-Scheme, Jaipur 302001',
    style: 'centered-minimalist'
  },
  {
    slug: 'lifetime-fitness-club', name: 'Lifetime Fitness Club',
    tagline: 'Your Fitness. Your Lifetime.', subtitle: "Malviya Nagar's premier gym experience at V Cube.",
    rating: 4.9, reviews: 738, phone: '+919950550885', waNum: '919950550885',
    address: '3rd Floor, V Cube, Malviya Nagar, Jaipur 302017',
    style: 'asymmetrical-cards'
  },
  {
    slug: 'metroflex-gym-jaipur', name: 'METROFLEX GYM',
    tagline: 'Built for Serious Lifters.', subtitle: "Vaishali Nagar's hardcore training ground.",
    rating: 4.7, reviews: 325, phone: '+919772914999', waNum: '919772914999',
    address: 'Vaibhav Complex, 7th floor, Vaishali Nagar, Jaipur 302021',
    style: 'brutalist'
  },
  {
    slug: 'fitness-society', name: 'Fitness Society',
    tagline: 'Where Fitness Meets Community.', subtitle: "Subhash Nagar's best gym and fitness center.",
    rating: 4.8, reviews: 234, phone: '+918947845748', waNum: '918947845748',
    address: 'Plot no. A 17, Subhash Nagar, Jaipur 302016',
    style: 'fullscreen-bg'
  },
  {
    slug: 'fitup-fitness-lifestyle', name: 'Fitup Fitness Lifestyle',
    tagline: 'Level Up Your Lifestyle.', subtitle: "C-Scheme's boutique fitness experience.",
    rating: 4.9, reviews: 157, phone: '+919571995817', waNum: '919571995817',
    address: 'Bhagadiya Bhawan, C Scheme, Jaipur 302001',
    style: 'sidebar-nav'
  },
  {
    slug: 'fitness-island-gym', name: 'Fitness Island Gym',
    tagline: 'Your Fitness Paradise.', subtitle: "Lalkothi's favorite neighborhood gym.",
    rating: 4.8, reviews: 149, phone: '+918639736126', waNum: '918639736126',
    address: 'A1, Nehru Path, Lalkothi, Jaipur 302015',
    style: 'neumorphism'
  },
  {
    slug: 'anytime-fitness-bapu-nagar', name: 'Anytime Fitness Bapu Nagar',
    tagline: 'Fitness on Your Schedule.', subtitle: "Bapu Nagar's 24/7 fitness solution.",
    rating: 4.5, reviews: 141, phone: '+919057403330', waNum: '919057403330',
    address: '5th Floor, Pavilion, Tonk Rd, Bapu Nagar, Jaipur 302015',
    style: 'bold-grid'
  },
  {
    slug: 'vault-fitness-jaipur', name: 'Vault Fitness Jaipur',
    tagline: 'Unlock Your Potential.', subtitle: "Hawa Sadak's best personal training studio.",
    rating: 4.9, reviews: 58, phone: '+918387875233', waNum: '918387875233',
    address: '3rd floor, A-40, Hawa Sadak, Jaipur 302019',
    style: 'elegant-dark'
  }
];

// Helper to get raw SVG strings
const svgPhone = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;

// GENERATORS FOR EACH UNIQUE STYLE
const generators = {

  // 1. SPLIT SCREEN (Fitness Pulse Gym)
  'split-screen': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="split-layout">
        <div class="content-side">
          <nav><h2>${biz.name}</h2></nav>
          <div class="hero-text">
            <div class="badge">★ ${biz.rating} (${biz.reviews} Reviews)</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="actions">
              <a href="tel:${biz.phone}" class="btn main-btn">${svgPhone} Call Now</a>
              <a href="https://wa.me/${biz.waNum}" class="btn outline-btn">WhatsApp</a>
            </div>
          </div>
          <footer><p>${biz.address}</p></footer>
        </div>
        <div class="image-side">
          <img src="assets/hero.png" alt="${biz.name}">
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Montserrat',sans-serif;background:#000;color:#fff;overflow:hidden}
      .split-layout{display:flex;height:100vh}
      .content-side{flex:1;padding:40px 60px;display:flex;flex-direction:column;justify-content:space-between;background:#111}
      .image-side{flex:1;position:relative}
      .image-side img{width:100%;height:100%;object-fit:cover}
      nav h2{color:#39FF14;margin:0;font-weight:900}
      .badge{display:inline-block;padding:8px 16px;border:1px solid #39FF14;color:#39FF14;border-radius:30px;font-size:0.9rem;margin-bottom:20px}
      h1{font-size:4rem;line-height:1.1;margin-bottom:20px;text-transform:uppercase}
      p{font-size:1.2rem;color:#aaa;max-width:400px;margin-bottom:40px}
      .actions{display:flex;gap:20px}
      .btn{padding:16px 32px;text-decoration:none;font-weight:700;border-radius:4px;display:flex;align-items:center;gap:10px;text-transform:uppercase}
      .main-btn{background:#39FF14;color:#000}
      .outline-btn{border:2px solid #fff;color:#fff}
      footer p{font-size:0.9rem;color:#666}
      @media(max-width:900px){.split-layout{flex-direction:column-reverse;overflow-y:auto}.image-side{height:40vh}}`;
    return { html, css };
  },

  // 2. CENTERED MINIMALIST (KLEAN FIT Iconic)
  'centered-minimalist': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <nav class="top-nav"><div>${biz.name}</div><a href="tel:${biz.phone}">Contact</a></nav>
      <main class="centered-container">
        <div class="hero-image-wrap"><img src="assets/hero.png" alt="${biz.name}"></div>
        <div class="content">
          <p class="rating">Rated ${biz.rating}/5 by ${biz.reviews} members</p>
          <h1>${biz.tagline}</h1>
          <p class="sub">${biz.subtitle}</p>
          <div class="btn-group">
            <a href="tel:${biz.phone}" class="btn primary">Join Today</a>
          </div>
          <p class="address">${biz.address}</p>
        </div>
      </main>
    </body></html>`;
    const css = `body{margin:0;font-family:'Inter',sans-serif;background:#fff;color:#111}
      .top-nav{display:flex;justify-content:space-between;padding:24px 48px;border-bottom:1px solid #eee;font-weight:600}
      .top-nav a{color:#000;text-decoration:none}
      .centered-container{max-width:800px;margin:60px auto;text-align:center;padding:0 24px}
      .hero-image-wrap{width:100%;height:400px;border-radius:24px;overflow:hidden;margin-bottom:40px;box-shadow:0 20px 40px rgba(0,0,0,0.1)}
      .hero-image-wrap img{width:100%;height:100%;object-fit:cover}
      .rating{color:#666;font-size:0.9rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px}
      h1{font-size:3.5rem;font-weight:300;letter-spacing:-1px;margin-bottom:24px}
      .sub{font-size:1.25rem;color:#555;margin-bottom:48px;line-height:1.6}
      .btn{display:inline-block;padding:18px 48px;background:#111;color:#fff;text-decoration:none;border-radius:50px;font-weight:600;transition:0.3s}
      .btn:hover{background:#333;transform:translateY(-2px)}
      .address{margin-top:60px;font-size:0.9rem;color:#999}`;
    return { html, css };
  },

  // 3. ASYMMETRICAL CARDS (Lifetime Fitness Club)
  'asymmetrical-cards': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="grid-layout">
        <header class="card head-card"><h2>${biz.name}</h2></header>
        <div class="card image-card"><img src="assets/hero.png" alt="Hero"></div>
        <div class="card title-card">
          <div class="stars">★★★★★ ${biz.rating}</div>
          <h1>${biz.tagline}</h1>
        </div>
        <div class="card info-card">
          <p>${biz.subtitle}</p>
          <p class="loc">${biz.address}</p>
        </div>
        <div class="card action-card">
          <a href="tel:${biz.phone}" class="big-btn">CALL US NOW ↗</a>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Space Grotesk',sans-serif;background:#f4f4f5;padding:20px}
      .grid-layout{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:minmax(150px,auto);gap:20px;max-width:1200px;margin:0 auto}
      .card{background:#fff;border-radius:20px;padding:40px;box-shadow:0 4px 6px rgba(0,0,0,0.05)}
      .head-card{grid-column:1/-1;display:flex;align-items:center}
      .head-card h2{margin:0;font-size:2rem}
      .image-card{grid-column:1/3;grid-row:2/4;padding:0;overflow:hidden}
      .image-card img{width:100%;height:100%;object-fit:cover}
      .title-card{grid-column:3/5;background:#18181b;color:#fff}
      .stars{color:#facc15;margin-bottom:20px}
      .title-card h1{font-size:3rem;margin:0;line-height:1.2}
      .info-card{grid-column:3/4;font-size:1.1rem;color:#3f3f46}
      .loc{font-size:0.9rem;color:#71717a;margin-top:20px}
      .action-card{grid-column:4/5;background:#22c55e;display:flex;align-items:center;justify-content:center}
      .big-btn{color:#000;text-decoration:none;font-weight:700;font-size:1.5rem;text-align:center}
      @media(max-width:900px){.grid-layout{grid-template-columns:1fr}.card{grid-column:1/-1!important;grid-row:auto!important}}`;
    return { html, css };
  },

  // 4. BRUTALIST HIGH-CONTRAST (METROFLEX GYM JAIPUR)
  'brutalist': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Mono&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="marquee"><span>${biz.name} • NO EXCUSES • TRAIN HARD • </span></div>
      <main class="brutal-container">
        <div class="text-block">
          <h1>${biz.tagline.toUpperCase()}</h1>
          <div class="stats-box">RATING: ${biz.rating} / REVIEWS: ${biz.reviews}</div>
          <p>${biz.subtitle}</p>
          <a href="tel:${biz.phone}" class="brutal-btn">JOIN OR GO HOME</a>
          <div class="footer-addr">[ LOC: ${biz.address} ]</div>
        </div>
        <div class="img-block"><img src="assets/hero.png" alt="Gym"></div>
      </main>
    </body></html>`;
    const css = `body{margin:0;font-family:'Roboto Mono',monospace;background:#ffef00;color:#000;border:10px solid #000;min-height:100vh;box-sizing:border-box}
      .marquee{background:#000;color:#ffef00;padding:10px 0;font-family:'Anton',sans-serif;font-size:1.5rem;overflow:hidden;white-space:nowrap}
      .brutal-container{display:flex;padding:40px;gap:40px;border-top:10px solid #000}
      .text-block{flex:1;display:flex;flex-direction:column}
      h1{font-family:'Anton',sans-serif;font-size:6rem;line-height:1;margin:0 0 20px 0;text-transform:uppercase}
      .stats-box{border:4px solid #000;padding:10px;font-weight:bold;margin-bottom:20px;display:inline-block;background:#fff}
      p{font-size:1.2rem;font-weight:bold;max-width:400px;margin-bottom:40px}
      .brutal-btn{background:#000;color:#fff;padding:20px 40px;font-family:'Anton',sans-serif;font-size:2rem;text-decoration:none;text-align:center;box-shadow:8px 8px 0px #fff, 12px 12px 0px #000;transition:all 0.1s;align-self:flex-start}
      .brutal-btn:active{transform:translate(4px,4px);box-shadow:4px 4px 0px #fff, 8px 8px 0px #000}
      .footer-addr{margin-top:auto;padding-top:40px;font-weight:bold}
      .img-block{flex:1;border:8px solid #000;background:#000}
      .img-block img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%) contrast(1.2)}
      @media(max-width:900px){.brutal-container{flex-direction:column}h1{font-size:4rem}}`;
    return { html, css };
  },

  // 5. FULL-SCREEN BACKGROUND (Fitness Society)
  'fullscreen-bg': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="bg-image" style="background-image:url('assets/hero.png')"></div>
      <div class="overlay"></div>
      <div class="content-wrapper">
        <header><div class="logo">${biz.name}</div><div class="rating">★ ${biz.rating}</div></header>
        <main class="center-content">
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <a href="tel:${biz.phone}" class="glass-btn">Become a Member</a>
        </main>
        <footer><p>📍 ${biz.address}</p></footer>
      </div>
    </body></html>`;
    const css = `body,html{margin:0;height:100%;font-family:'Poppins',sans-serif;color:#fff;overflow:hidden}
      .bg-image{position:absolute;inset:0;background-size:cover;background-position:center;z-index:-2}
      .overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,0.8),rgba(0,50,150,0.4));z-index:-1;backdrop-filter:blur(3px)}
      .content-wrapper{display:flex;flex-direction:column;height:100%;padding:40px;box-sizing:border-box}
      header{display:flex;justify-content:space-between;align-items:center;font-weight:500;text-transform:uppercase;letter-spacing:2px}
      .center-content{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;max-width:800px;margin:0 auto}
      h1{font-size:4.5rem;font-weight:800;line-height:1.1;margin-bottom:20px;text-shadow:0 4px 20px rgba(0,0,0,0.5)}
      p{font-size:1.2rem;font-weight:300;margin-bottom:40px;opacity:0.9}
      .glass-btn{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);color:#fff;text-decoration:none;padding:18px 40px;border-radius:30px;font-weight:500;font-size:1.1rem;transition:all 0.3s;box-shadow:0 10px 30px rgba(0,0,0,0.2)}
      .glass-btn:hover{background:rgba(255,255,255,0.2);transform:translateY(-2px)}
      footer{text-align:center;font-size:0.9rem;opacity:0.7}`;
    return { html, css };
  },

  // 6. SIDEBAR NAVIGATION (Fitup Fitness Lifestyle)
  'sidebar-nav': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="app-layout">
        <aside class="sidebar">
          <div class="brand">
            <h2>${biz.name}</h2>
            <div class="stars">Rating: ${biz.rating} / 5</div>
          </div>
          <nav>
            <p>Welcome to the ultimate boutique fitness experience in Jaipur.</p>
            <div class="contact-info">
              <p><strong>Address:</strong><br>${biz.address}</p>
            </div>
            <a href="tel:${biz.phone}" class="side-btn">Call ${biz.phone}</a>
          </nav>
        </aside>
        <main class="main-view">
          <div class="hero-image" style="background-image:url('assets/hero.png')"></div>
          <div class="bottom-bar">
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
          </div>
        </main>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Jost',sans-serif;background:#0d0d0d;color:#fff}
      .app-layout{display:flex;height:100vh}
      .sidebar{width:350px;background:#151515;padding:40px;display:flex;flex-direction:column;border-right:1px solid #333}
      .brand{margin-bottom:60px}
      .brand h2{margin:0 0 10px 0;font-size:2rem;color:#ff4757}
      .stars{color:#feca57;font-size:0.9rem}
      nav p{color:#aaa;line-height:1.6;margin-bottom:40px}
      .contact-info{background:#0a0a0a;padding:20px;border-radius:10px;margin-bottom:40px;font-size:0.9rem}
      .side-btn{display:block;background:#ff4757;color:#fff;text-align:center;padding:16px;text-decoration:none;border-radius:8px;font-weight:600;margin-top:auto}
      .main-view{flex:1;display:flex;flex-direction:column;position:relative}
      .hero-image{flex:1;background-size:cover;background-position:center}
      .bottom-bar{background:#000;padding:40px 60px;border-top:1px solid #333}
      .bottom-bar h1{margin:0 0 10px 0;font-size:2.5rem}
      .bottom-bar p{margin:0;color:#888;font-size:1.1rem}
      @media(max-width:900px){.app-layout{flex-direction:column}.sidebar{width:100%;height:auto;padding:20px}}`;
    return { html, css };
  },

  // 7. SOFT NEUMORPHISM (Fitness island gym)
  'neumorphism': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="neu-container">
        <div class="neu-card main-card">
          <div class="header">
            <div class="neu-circle logo-icon">🏝️</div>
            <h2>${biz.name}</h2>
          </div>
          <div class="content-split">
            <div class="text-area">
              <h1>${biz.tagline}</h1>
              <p>${biz.subtitle}</p>
              <div class="stats-neu">
                <div class="neu-box"><span>${biz.rating}★</span></div>
                <div class="neu-box"><span>${biz.reviews}</span> Reviews</div>
              </div>
              <a href="tel:${biz.phone}" class="neu-btn">Start Your Journey</a>
            </div>
            <div class="image-area">
              <div class="neu-img-wrap"><img src="assets/hero.png" alt="Gym"></div>
            </div>
          </div>
          <div class="neu-footer">📍 ${biz.address}</div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Nunito',sans-serif;background:#e0e5ec;color:#4a5568;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
      .neu-container{max-width:1100px;width:100%}
      .neu-card{background:#e0e5ec;border-radius:30px;box-shadow:9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);padding:40px}
      .header{display:flex;align-items:center;gap:20px;margin-bottom:40px}
      .neu-circle{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:7px 7px 15px rgba(163,177,198,0.6), -7px -7px 15px rgba(255,255,255, 0.5)}
      h2{margin:0;color:#2d3748}
      .content-split{display:flex;gap:40px;align-items:center}
      .text-area{flex:1}
      h1{font-size:3.5rem;font-weight:900;line-height:1.1;color:#2b6cb0;margin-bottom:20px}
      p{font-size:1.1rem;line-height:1.6;margin-bottom:30px}
      .stats-neu{display:flex;gap:20px;margin-bottom:40px}
      .neu-box{padding:15px 25px;border-radius:15px;box-shadow:inset 6px 6px 10px 0 rgba(163,177,198,0.5), inset -6px -6px 10px 0 rgba(255,255,255,0.8);font-weight:700}
      .neu-box span{color:#2b6cb0;font-size:1.2rem}
      .neu-btn{display:inline-block;padding:18px 40px;border-radius:30px;color:#2b6cb0;font-weight:700;text-decoration:none;box-shadow:6px 6px 12px rgba(163,177,198,0.6), -6px -6px 12px rgba(255,255,255, 0.5);transition:all 0.2s}
      .neu-btn:active{box-shadow:inset 4px 4px 8px rgba(163,177,198,0.5), inset -4px -4px 8px rgba(255,255,255,0.8)}
      .image-area{flex:1}
      .neu-img-wrap{padding:15px;border-radius:30px;box-shadow:inset 6px 6px 10px 0 rgba(163,177,198,0.5), inset -6px -6px 10px 0 rgba(255,255,255,0.8)}
      .neu-img-wrap img{width:100%;border-radius:20px;object-fit:cover;height:400px}
      .neu-footer{margin-top:40px;text-align:center;font-weight:700;color:#718096}
      @media(max-width:900px){.content-split{flex-direction:column}h1{font-size:2.5rem}}`;
    return { html, css };
  },

  // 8. BOLD GRID (Anytime Fitness Bapu Nagar)
  'bold-grid': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Work+Sans:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="bento-grid">
        <div class="cell logo-cell"><h2>${biz.name}</h2></div>
        <div class="cell hero-img-cell"><img src="assets/hero.png" alt="Gym"></div>
        <div class="cell main-text-cell">
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
        </div>
        <div class="cell rating-cell">
          <div class="big-rating">${biz.rating}</div>
          <div class="star">★</div>
          <p>${biz.reviews} Google Reviews</p>
        </div>
        <div class="cell action-cell">
          <a href="tel:${biz.phone}">JOIN NOW →</a>
        </div>
        <div class="cell address-cell">
          <p>LOCATION</p>
          <h3>${biz.address}</h3>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;background:#111;color:#fff;font-family:'Work Sans',sans-serif;padding:20px;min-height:100vh;display:flex;align-items:center}
      .bento-grid{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,250px);gap:15px;max-width:1200px;margin:0 auto;width:100%}
      .cell{background:#222;border-radius:24px;padding:30px;display:flex;flex-direction:column;justify-content:center;overflow:hidden;position:relative}
      .logo-cell{grid-column:1/2;grid-row:1/2;background:#5000ca;color:#fff}
      .logo-cell h2{font-family:'Oswald',sans-serif;font-size:2rem;margin:0;line-height:1.2}
      .hero-img-cell{grid-column:2/5;grid-row:1/3;padding:0}
      .hero-img-cell img{width:100%;height:100%;object-fit:cover}
      .main-text-cell{grid-column:1/3;grid-row:3/4;background:#fff;color:#000}
      h1{font-family:'Oswald',sans-serif;font-size:3.5rem;margin:0 0 10px 0;line-height:1.1;text-transform:uppercase}
      .main-text-cell p{font-size:1.1rem;margin:0;color:#444}
      .rating-cell{grid-column:1/2;grid-row:2/3;text-align:center;background:#1a1a1a}
      .big-rating{font-family:'Oswald',sans-serif;font-size:4rem;color:#00d2ff;line-height:1}
      .star{color:#FFD700;font-size:2rem}
      .rating-cell p{font-size:0.9rem;color:#888;margin:5px 0 0 0}
      .action-cell{grid-column:3/4;grid-row:3/4;background:#00d2ff;padding:0}
      .action-cell a{display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-decoration:none;color:#000;font-family:'Oswald',sans-serif;font-size:2.5rem;transition:background 0.3s}
      .action-cell a:hover{background:#fff}
      .address-cell{grid-column:4/5;grid-row:3/4;background:#2a2a2a}
      .address-cell p{color:#888;font-size:0.8rem;letter-spacing:2px;margin:0 0 10px 0}
      .address-cell h3{margin:0;font-size:1.1rem;font-weight:400}
      @media(max-width:1000px){.bento-grid{display:flex;flex-direction:column;height:auto}.hero-img-cell{height:300px}}`;
    return { html, css };
  },

  // 9. ELEGANT DARK MODE (Vault Fitness Jaipur)
  'elegant-dark': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Lato:wght@300;400&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="elegant-wrapper">
        <header>
          <div class="logo">${biz.name}</div>
          <div class="gold-line"></div>
        </header>
        <main>
          <div class="hero-section">
            <div class="text-content">
              <span class="eyebrow">PREMIUM PERSONAL TRAINING</span>
              <h1>${biz.tagline}</h1>
              <p>${biz.subtitle}</p>
              <div class="rating-elegant">
                <span class="stars">★★★★★</span>
                <span>${biz.rating} / 5 (${biz.reviews} Reviews)</span>
              </div>
              <a href="tel:${biz.phone}" class="gold-btn">REQUEST INVITATION</a>
            </div>
            <div class="image-frame">
              <img src="assets/hero.png" alt="Premium Gym">
            </div>
          </div>
        </main>
        <footer>
          <p>${biz.address}</p>
        </footer>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Lato',sans-serif;background:#050505;color:#e0e0e0;min-height:100vh;display:flex;flex-direction:column}
      .elegant-wrapper{max-width:1400px;margin:0 auto;padding:40px;flex:1;display:flex;flex-direction:column}
      header{text-align:center;margin-bottom:60px}
      .logo{font-family:'Cinzel',serif;font-size:2rem;letter-spacing:4px;color:#d4af37}
      .gold-line{height:1px;background:linear-gradient(90deg, transparent, #d4af37, transparent);margin-top:20px}
      main{flex:1;display:flex;align-items:center}
      .hero-section{display:flex;align-items:center;gap:60px}
      .text-content{flex:1}
      .eyebrow{color:#d4af37;font-size:0.9rem;letter-spacing:3px;text-transform:uppercase}
      h1{font-family:'Cinzel',serif;font-size:4.5rem;line-height:1.1;margin:20px 0;font-weight:500;color:#fff}
      p{font-size:1.2rem;line-height:1.8;color:#a0a0a0;max-width:500px}
      .rating-elegant{margin:30px 0 50px 0;font-size:1rem;color:#888;display:flex;align-items:center;gap:10px}
      .stars{color:#d4af37;font-size:1.2rem}
      .gold-btn{display:inline-block;border:1px solid #d4af37;color:#d4af37;padding:18px 40px;text-decoration:none;font-family:'Cinzel',serif;letter-spacing:2px;transition:all 0.4s;background:transparent}
      .gold-btn:hover{background:#d4af37;color:#000}
      .image-frame{flex:1;padding:20px;border:1px solid #222;position:relative}
      .image-frame::before{content:'';position:absolute;inset:0;border:1px solid #d4af37;margin:10px;opacity:0.3;pointer-events:none}
      .image-frame img{width:100%;height:600px;object-fit:cover;display:block;filter:brightness(0.8) contrast(1.1)}
      footer{margin-top:60px;text-align:center;color:#666;font-size:0.9rem;letter-spacing:1px}
      @media(max-width:1000px){.hero-section{flex-direction:column;text-align:center}h1{font-size:3rem}p{margin:20px auto}}`;
    return { html, css };
  }
};

// ======================== EXECUTION ========================
console.log("Generating BATCH 1: 9 Unique Gym Designs...\n");

gyms.forEach(biz => {
  const dir = path.join(BASE, biz.slug);
  
  // Get generator for this specific style
  const generateFunc = generators[biz.style];
  if (!generateFunc) {
    console.error(`Error: Generator for style ${biz.style} not found.`);
    return;
  }

  const { html, css } = generateFunc(biz);

  // Write files
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'style.css'), css);
  
  console.log(`✅ ${biz.name} -> Generated with [${biz.style}] style.`);
});

console.log("\nBatch 1 completed successfully!");
