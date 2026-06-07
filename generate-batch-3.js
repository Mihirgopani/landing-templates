const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

const batch3 = [
  // PHOTOGRAPHERS (4)
  {
    slug: 'studio-neelam', name: 'Studio Neelam',
    tagline: 'Capturing Moments. Creating Memories.', subtitle: "Sitabuldi's legendary photography studio since decades.",
    rating: 4.8, reviews: 616, phone: '+918446596456', waNum: '918446596456',
    address: '26, Maharajbagh Rd, Sitabuldi, Nagpur 440001',
    style: 'photo-gallery',
    theme: '#D4AF37' // Gold
  },
  {
    slug: 'lensation-studio', name: 'Lensation Studio',
    tagline: 'Through Our Lens. Your Story Unfolds.', subtitle: "New Mankapur's creative photography studio.",
    rating: 4.9, reviews: 168, phone: '+918237299935', waNum: '918237299935',
    address: 'Flat 308, Anandsagar Appt, New Mankapur, Nagpur',
    style: 'photo-cinematic',
    theme: '#e1b12c' // Yellow Gold
  },
  {
    slug: 'thakurs-film-city', name: "Thakur's Film City",
    tagline: 'Cinematic Vision. Timeless Frames.', subtitle: "Katol Road's best photography studio.",
    rating: 4.8, reviews: 81, phone: '+919699161108', waNum: '919699161108',
    address: 'Plot 203, Katol Rd, Pension Nagar, Nagpur',
    style: 'photo-film-strip',
    theme: '#fbc531' // Light Gold
  },
  {
    slug: 'mp-photography', name: 'MP Photography',
    tagline: 'Picture Perfect. Every Time.', subtitle: "Nagpur's rising star in photography.",
    rating: 5.0, reviews: 79, phone: '+918788857258', waNum: '918788857258',
    address: 'Dayanand Park Road, Nagpur 440014',
    style: 'photo-minimal-portfolio',
    theme: '#000000' // B&W theme
  }
];

const generators = {

  // PHOTO: GALLERY GRID
  'photo-gallery': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@300;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="gallery-layout">
        <aside class="gallery-nav">
          <div class="brand">${biz.name}</div>
          <div class="info">
            <p class="tag">${biz.tagline}</p>
            <p class="sub">${biz.subtitle}</p>
            <div class="stars">★ ${biz.rating} RATING / ${biz.reviews} REVIEWS</div>
          </div>
          <div class="contact">
            <p>${biz.address}</p>
            <a href="tel:${biz.phone}" class="g-btn">BOOK A SHOOT</a>
            <a href="https://wa.me/${biz.waNum}" class="g-btn wa">WHATSAPP</a>
          </div>
        </aside>
        <main class="gallery-grid">
          <div class="g-item g-hero"><img src="assets/hero.png" alt="Photography"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
          <div class="g-item"></div>
        </main>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Montserrat',sans-serif;background:#fff;color:#111}
      .gallery-layout{display:flex;height:100vh}
      .gallery-nav{width:400px;padding:60px;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid #eee}
      .brand{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:600;line-height:1}
      .tag{font-family:'Cormorant Garamond',serif;font-size:1.8rem;margin-bottom:10px}
      .sub{color:#666;line-height:1.6;margin-bottom:20px}
      .stars{font-size:0.8rem;letter-spacing:2px;color:${biz.theme};font-weight:500}
      .contact p{font-size:0.9rem;color:#999;margin-bottom:30px}
      .g-btn{display:block;width:100%;padding:15px;text-align:center;text-decoration:none;background:#111;color:#fff;font-size:0.9rem;letter-spacing:2px;margin-bottom:10px;transition:0.3s}
      .g-btn:hover{background:${biz.theme}}
      .g-btn.wa{background:transparent;border:1px solid #111;color:#111}
      .g-btn.wa:hover{background:#111;color:#fff}
      .gallery-grid{flex:1;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:10px;padding:10px;background:#f9f9f9}
      .g-item{background:#eee;position:relative;overflow:hidden}
      .g-hero{grid-column:1/3;grid-row:1/3}
      .g-hero img{width:100%;height:100%;object-fit:cover;transition:0.5s}
      .g-hero:hover img{transform:scale(1.05)}
      @media(max-width:1000px){.gallery-layout{flex-direction:column}.gallery-nav{width:100%;height:auto;padding:40px;box-sizing:border-box}.gallery-grid{height:600px}}`;
    return { html, css };
  },

  // PHOTO: CINEMATIC FULLSCREEN
  'photo-cinematic': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="cine-wrapper">
        <div class="cine-bg"><img src="assets/hero.png" alt="Cinematic"></div>
        <div class="cine-overlay"></div>
        <div class="cine-content">
          <header class="cine-head">${biz.name}</header>
          <div class="cine-main">
            <div class="rating-strip">★ ${biz.rating} / ${biz.reviews} REVIEWS</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="cine-actions">
              <a href="tel:${biz.phone}" class="c-btn">START THE STORY</a>
            </div>
            <div class="cine-footer">${biz.address}</div>
          </div>
        </div>
        <div class="cine-bars">
          <div class="bar top"></div><div class="bar bottom"></div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Lato',sans-serif;background:#000;color:#fff;overflow:hidden}
      .cine-wrapper{position:relative;height:100vh;width:100vw;display:flex;align-items:center;justify-content:center}
      .cine-bg{position:absolute;inset:0;z-index:1}
      .cine-bg img{width:100%;height:100%;object-fit:cover;filter:brightness(0.7) contrast(1.2)}
      .cine-overlay{position:absolute;inset:0;background:radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);z-index:2}
      .cine-content{position:relative;z-index:3;text-align:center;max-width:800px;padding:40px}
      .cine-head{font-family:'Cinzel',serif;font-size:1.5rem;letter-spacing:6px;margin-bottom:60px;color:${biz.theme}}
      .rating-strip{font-size:0.8rem;letter-spacing:4px;margin-bottom:20px;color:#ccc}
      h1{font-family:'Cinzel',serif;font-size:4rem;line-height:1.2;font-weight:400;margin:0 0 20px 0;text-shadow:0 4px 20px rgba(0,0,0,0.5)}
      p{font-size:1.2rem;line-height:1.6;color:#ddd;margin-bottom:40px}
      .c-btn{display:inline-block;border:1px solid rgba(255,255,255,0.3);padding:20px 50px;color:#fff;text-decoration:none;font-family:'Cinzel',serif;letter-spacing:3px;background:rgba(0,0,0,0.5);backdrop-filter:blur(5px);transition:all 0.4s}
      .c-btn:hover{background:${biz.theme};border-color:${biz.theme};color:#000}
      .cine-footer{margin-top:80px;font-size:0.8rem;letter-spacing:2px;color:#888;text-transform:uppercase}
      .cine-bars .bar{position:absolute;left:0;width:100%;height:80px;background:#000;z-index:10}
      .cine-bars .top{top:0} .cine-bars .bottom{bottom:0}
      @media(max-width:900px){h1{font-size:2.5rem}.cine-bars .bar{height:40px}}`;
    return { html, css };
  },

  // PHOTO: FILM STRIP HORIZONTAL
  'photo-film-strip': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="film-layout">
        <div class="film-strip">
          <div class="frame frame-text">
            <h1>${biz.name}</h1>
            <h2>${biz.tagline}</h2>
            <div class="badge">★ ${biz.rating} / ${biz.reviews} REVIEWS</div>
          </div>
          <div class="frame frame-img"><img src="assets/hero.png" alt="Shoot"></div>
          <div class="frame frame-info">
            <p>${biz.subtitle}</p>
            <p class="addr">${biz.address}</p>
            <a href="tel:${biz.phone}" class="f-btn">BOOK NOW</a>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Inter',sans-serif;background:#111;color:#fff;display:flex;align-items:center;min-height:100vh}
      .film-layout{width:100%;overflow-x:auto;padding:40px 0}
      .film-strip{display:flex;gap:20px;padding:20px;border-top:10px dashed #333;border-bottom:10px dashed #333;width:max-content;margin:0 auto}
      .frame{width:500px;height:600px;background:#000;border-radius:10px;padding:40px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center}
      .frame-text h1{font-family:'Anton',sans-serif;font-size:5rem;line-height:1;margin:0 0 20px 0;text-transform:uppercase;color:${biz.theme}}
      .frame-text h2{font-size:1.5rem;font-weight:400;margin:0 0 40px 0}
      .badge{border:1px solid #fff;display:inline-block;padding:10px 20px;border-radius:30px;font-weight:600}
      .frame-img{padding:0;overflow:hidden}
      .frame-img img{width:100%;height:100%;object-fit:cover;filter:grayscale(50%)}
      .frame-info{background:#fff;color:#000}
      .frame-info p{font-size:1.5rem;line-height:1.4;margin:0 0 20px 0}
      .addr{font-size:1rem!important;color:#666}
      .f-btn{display:block;background:#000;color:#fff;text-align:center;padding:20px;text-decoration:none;font-family:'Anton',sans-serif;font-size:2rem;margin-top:auto;transition:0.3s}
      .f-btn:hover{background:${biz.theme};color:#000}
      @media(max-width:900px){.film-strip{flex-direction:column;border:none;width:100%}.frame{width:100%;height:auto}}`;
    return { html, css };
  },

  // PHOTO: MINIMAL PORTFOLIO
  'photo-minimal-portfolio': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="port-container">
        <nav class="port-nav">
          <div class="logo">${biz.name}</div>
          <div class="menu"><a href="tel:${biz.phone}">Contact [↗]</a></div>
        </nav>
        <div class="port-hero">
          <div class="port-text">
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="stats">
              <div><span>${biz.rating}</span> RATING</div>
              <div><span>${biz.reviews}</span> REVIEWS</div>
            </div>
            <div class="bottom-info">
              <a href="tel:${biz.phone}" class="p-btn">Start Project</a>
              <p class="addr">${biz.address}</p>
            </div>
          </div>
          <div class="port-img"><img src="assets/hero.png" alt="Portfolio"></div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Work Sans',sans-serif;background:#fdfdfd;color:#1a1a1a}
      .port-container{max-width:1400px;margin:0 auto;padding:40px}
      .port-nav{display:flex;justify-content:space-between;align-items:center;padding-bottom:40px;border-bottom:2px solid #1a1a1a;margin-bottom:60px}
      .logo{font-family:'Space Mono',monospace;font-weight:700;font-size:1.5rem;text-transform:uppercase}
      .menu a{color:#1a1a1a;text-decoration:none;font-family:'Space Mono',monospace;font-weight:700}
      .port-hero{display:flex;gap:80px;align-items:center}
      .port-text{flex:1;display:flex;flex-direction:column;height:600px}
      h1{font-family:'Space Mono',monospace;font-size:4rem;line-height:1.1;margin:0 0 30px 0;letter-spacing:-2px}
      p{font-size:1.4rem;color:#666;line-height:1.5;margin-bottom:40px;max-width:500px}
      .stats{display:flex;gap:40px;margin-bottom:auto;font-family:'Space Mono',monospace;font-size:0.8rem}
      .stats span{display:block;font-size:2rem;font-weight:700;color:#1a1a1a;margin-bottom:5px}
      .bottom-info{display:flex;align-items:center;gap:40px;padding-top:40px;border-top:2px solid #1a1a1a}
      .p-btn{background:#1a1a1a;color:#fff;padding:15px 30px;text-decoration:none;font-family:'Space Mono',monospace;font-weight:700;transition:0.3s}
      .p-btn:hover{background:#666}
      .addr{font-size:0.9rem;color:#999;margin:0}
      .port-img{flex:1;height:600px;background:#f0f0f0}
      .port-img img{width:100%;height:100%;object-fit:cover;filter:contrast(1.1)}
      @media(max-width:1000px){.port-hero{flex-direction:column}.port-text,.port-img{height:auto;width:100%}h1{font-size:2.5rem}}`;
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

  const { html, css } = generateFunc(biz);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'style.css'), css);
  
  console.log(`✅ ${biz.name} -> Generated with [${biz.style}] style.`);
});

console.log("\nBatch 3 completed successfully!");
