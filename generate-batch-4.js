const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

const batch4 = [
  // CHARTERED ACCOUNTANTS (7)
  {
    slug: 'rd-bhatti-associates', name: 'R D Bhatti & Associates',
    tagline: 'Financial Expertise. Trusted Guidance.', subtitle: "Rajkot's trusted CA firm for GST, Income Tax, and Accounting.",
    rating: 5.0, reviews: 205, phone: '+919898709900', waNum: '919898709900',
    address: '606 The Millennium, 150 Feet Ring Road, Rajkot',
    style: 'ca-corporate',
    theme: '#1e3a8a' // Deep blue
  },
  {
    slug: 'ashara-ganatra-associates', name: 'Ashara Ganatra & Associates',
    tagline: 'Your Financial Growth Partners.', subtitle: "Rajkot's dynamic CA firm offering comprehensive taxation.",
    rating: 5.0, reviews: 198, phone: '+918866728979', waNum: '918866728979',
    address: '404 Pramukh Darshan Complex, Pedak Rd, Rajkot',
    style: 'ca-modern-trust',
    theme: '#047857' // Emerald
  },
  {
    slug: 'cdhb-and-company', name: 'C D H B And Company',
    tagline: 'Professional CA Services You Trust.', subtitle: "Rajkot's reliable CA firm for audit and taxation.",
    rating: 4.9, reviews: 102, phone: '+919913593567', waNum: '919913593567',
    address: 'RK ICONIC, A-707, 150 Feet Ring Rd, Rajkot',
    style: 'ca-elegant-serif',
    theme: '#4338ca' // Indigo
  },
  {
    slug: 'jh-jasani-co', name: 'J H Jasani & Co',
    tagline: 'Chartered Excellence. Financial Clarity.', subtitle: "Trusted CA firm at RK Prime, Rajkot.",
    rating: 5.0, reviews: 40, phone: '+919824282434', waNum: '919824282434',
    address: '912, RK PRIME, 150 Feet Ring Rd, Rajkot',
    style: 'ca-minimal-slate',
    theme: '#334155' // Slate
  },
  {
    slug: 'ca-kb-madhani', name: 'CA K B Madhani',
    tagline: 'Precise Financial Solutions.', subtitle: "Expert CA services near Mavdi Circle, Rajkot.",
    rating: 4.9, reviews: 36, phone: '+919724684083', waNum: '919724684083',
    address: 'Office No 419, R K Empire, Near Mavdi Circle, Rajkot',
    style: 'ca-bold-finance',
    theme: '#be123c' // Rose red
  },
  {
    slug: 'dudhatra-and-co', name: 'Dudhatra And Co.',
    tagline: 'Reliable CA Partnership.', subtitle: "Chartered Accountants at RK Empire, Mavdi.",
    rating: 5.0, reviews: 17, phone: '+918200099400', waNum: '918200099400',
    address: 'Office 418, RK Empire, 150 Feet Ring Rd, Rajkot',
    style: 'ca-split-classic',
    theme: '#0f766e' // Teal
  },
  {
    slug: 'sadp-and-co', name: 'S A D P & Co.',
    tagline: 'Professional Financial Services.', subtitle: "Certified Public Accountants in Rajkot.",
    rating: 5.0, reviews: 11, phone: '+919876543210', waNum: '919876543210',
    address: 'House 5, Collegewadi, Rajkot 360001',
    style: 'ca-card-layout',
    theme: '#b45309' // Amber
  }
];

const generators = {

  // CA: CORPORATE BLUE
  'ca-corporate': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <nav class="corp-nav">
        <div class="logo">${biz.name}</div>
        <a href="tel:${biz.phone}" class="btn">Client Portal</a>
      </nav>
      <header class="corp-hero">
        <div class="hero-bg"></div>
        <div class="container">
          <div class="hero-content">
            <div class="badge">★ ${biz.rating} (${biz.reviews}+ Reviews)</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="action-bar">
              <a href="tel:${biz.phone}" class="btn primary">Schedule Consultation</a>
              <span class="phone-txt">or call ${biz.phone}</span>
            </div>
          </div>
          <div class="hero-img"><img src="assets/hero.png" alt="CA Firm"></div>
        </div>
      </header>
    </body></html>`;
    const css = `body{margin:0;font-family:'Inter',sans-serif;color:#1e293b;background:#f8fafc}
      .corp-nav{display:flex;justify-content:space-between;padding:20px 40px;background:#fff;border-bottom:1px solid #e2e8f0}
      .logo{font-size:1.5rem;font-weight:800;color:${biz.theme}}
      .btn{padding:12px 24px;border-radius:6px;text-decoration:none;font-weight:600;font-size:0.9rem}
      .corp-nav .btn{background:#f1f5f9;color:#475569}
      .btn.primary{background:${biz.theme};color:#fff;box-shadow:0 4px 6px -1px rgba(30,58,138,0.3)}
      .corp-hero{position:relative;padding:80px 40px;overflow:hidden}
      .hero-bg{position:absolute;top:0;right:0;width:40%;height:100%;background:#e0e7ff;border-radius:40px 0 0 40px;z-index:-1}
      .container{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:60px}
      .hero-content{flex:1.2}
      .badge{display:inline-block;padding:6px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:20px;font-size:0.8rem;font-weight:600;color:#64748b;margin-bottom:20px}
      h1{font-size:4rem;line-height:1.1;font-weight:800;margin:0 0 20px 0;letter-spacing:-1px}
      p{font-size:1.25rem;color:#475569;line-height:1.6;margin-bottom:40px}
      .action-bar{display:flex;align-items:center;gap:20px}
      .phone-txt{color:#64748b;font-size:0.9rem;font-weight:600}
      .hero-img{flex:1}
      .hero-img img{width:100%;border-radius:24px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)}
      @media(max-width:900px){.container{flex-direction:column}.hero-bg{width:100%;border-radius:0}h1{font-size:2.5rem}}`;
    return { html, css };
  },

  // CA: MODERN TRUST
  'ca-modern-trust': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="trust-layout">
        <header class="trust-head">
          <div class="brand">${biz.name}</div>
        </header>
        <main class="trust-main">
          <div class="content-left">
            <div class="rating-pill">★ ${biz.rating} Rating</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="trust-points">
              <span>✓ Certified</span><span>✓ Experienced</span><span>✓ Reliable</span>
            </div>
            <a href="tel:${biz.phone}" class="t-btn">Speak to an Expert</a>
          </div>
          <div class="image-right">
            <img src="assets/hero.png" alt="CA Firm">
            <div class="floating-card">
              <h3>Visit Us</h3>
              <p>${biz.address}</p>
            </div>
          </div>
        </main>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Plus Jakarta Sans',sans-serif;background:#fff;color:#0f172a}
      .trust-layout{min-height:100vh;display:flex;flex-direction:column}
      .trust-head{padding:30px 50px;border-bottom:1px solid #f1f5f9}
      .brand{font-size:1.5rem;font-weight:700;color:${biz.theme}}
      .trust-main{flex:1;display:flex;padding:50px;gap:60px;max-width:1400px;margin:0 auto;align-items:center}
      .content-left{flex:1}
      .rating-pill{display:inline-block;background:#ecfdf5;color:${biz.theme};padding:8px 16px;border-radius:30px;font-weight:700;font-size:0.9rem;margin-bottom:30px}
      h1{font-size:4.5rem;line-height:1.1;margin:0 0 20px 0;letter-spacing:-2px}
      p{font-size:1.2rem;color:#475569;line-height:1.6;margin-bottom:40px}
      .trust-points{display:flex;gap:20px;margin-bottom:50px;font-weight:600;color:#334155}
      .t-btn{display:inline-block;background:${biz.theme};color:#fff;padding:18px 40px;border-radius:50px;text-decoration:none;font-weight:700;font-size:1.1rem;box-shadow:0 10px 25px rgba(4,120,87,0.3);transition:0.3s}
      .t-btn:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(4,120,87,0.4)}
      .image-right{flex:1;position:relative}
      .image-right img{width:100%;border-radius:30px;box-shadow:0 20px 40px rgba(0,0,0,0.1)}
      .floating-card{position:absolute;bottom:-30px;left:-30px;background:#fff;padding:30px;border-radius:20px;box-shadow:0 20px 40px rgba(0,0,0,0.15);width:300px}
      .floating-card h3{margin:0 0 10px 0;color:${biz.theme}}
      .floating-card p{font-size:0.9rem;margin:0}
      @media(max-width:1000px){.trust-main{flex-direction:column}h1{font-size:3rem}.floating-card{position:static;width:auto;margin-top:20px}}`;
    return { html, css };
  },

  // CA: ELEGANT SERIF
  'ca-elegant-serif': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="serif-wrap">
        <header>
          <div class="s-logo">${biz.name}</div>
          <div class="s-rating">★ ${biz.rating} / ${biz.reviews} Reviews</div>
        </header>
        <div class="s-hero">
          <div class="s-text">
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <a href="tel:${biz.phone}" class="s-btn">Request Advisory</a>
          </div>
          <div class="s-image"><img src="assets/hero.png" alt="Accounting"></div>
        </div>
        <footer class="s-foot">
          <div><strong>Office:</strong> ${biz.address}</div>
          <div><strong>Phone:</strong> ${biz.phone}</div>
        </footer>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Source Sans Pro',sans-serif;background:#faf9f6;color:#2d3748;padding:20px;box-sizing:border-box;min-height:100vh}
      .serif-wrap{border:1px solid #cbd5e1;padding:40px;min-height:calc(100vh - 40px);display:flex;flex-direction:column;box-sizing:border-box}
      header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e2e8f0;padding-bottom:20px;margin-bottom:60px}
      .s-logo{font-family:'Libre Baskerville',serif;font-weight:700;font-size:1.8rem;color:${biz.theme}}
      .s-rating{font-size:0.9rem;letter-spacing:1px;text-transform:uppercase}
      .s-hero{display:flex;flex:1;gap:60px;align-items:center}
      .s-text{flex:1}
      h1{font-family:'Libre Baskerville',serif;font-size:4rem;line-height:1.2;margin:0 0 20px 0;color:#1a202c}
      p{font-size:1.3rem;line-height:1.6;color:#4a5568;margin-bottom:40px}
      .s-btn{display:inline-block;border:1px solid ${biz.theme};color:${biz.theme};padding:15px 30px;text-decoration:none;font-weight:600;text-transform:uppercase;letter-spacing:1px;transition:0.3s}
      .s-btn:hover{background:${biz.theme};color:#fff}
      .s-image{flex:1}
      .s-image img{width:100%;height:500px;object-fit:cover;filter:sepia(0.1)}
      .s-foot{margin-top:60px;border-top:1px solid #e2e8f0;padding-top:20px;display:flex;justify-content:space-between;font-size:0.9rem;color:#718096}
      @media(max-width:900px){.s-hero{flex-direction:column}h1{font-size:2.5rem}.s-foot{flex-direction:column;gap:10px}}`;
    return { html, css };
  },

  // CA: MINIMAL SLATE
  'ca-minimal-slate': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <main class="slate-main">
        <div class="slate-left">
          <div class="m-logo">${biz.name}</div>
          <div class="m-content">
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="m-stats">★ ${biz.rating} from ${biz.reviews} reviews</div>
            <a href="tel:${biz.phone}" class="m-btn">Contact Us →</a>
          </div>
          <div class="m-addr">${biz.address}</div>
        </div>
        <div class="slate-right"><img src="assets/hero.png" alt="CA Firm"></div>
      </main>
    </body></html>`;
    const css = `body{margin:0;font-family:'Manrope',sans-serif;color:#fff}
      .slate-main{display:flex;height:100vh}
      .slate-left{flex:1;background:${biz.theme};padding:60px;display:flex;flex-direction:column;justify-content:space-between}
      .m-logo{font-size:1.5rem;font-weight:800;letter-spacing:1px}
      .m-content{max-width:500px}
      h1{font-size:4rem;line-height:1.1;margin:0 0 20px 0}
      p{font-size:1.2rem;opacity:0.8;margin-bottom:30px}
      .m-stats{font-size:0.9rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:40px;opacity:0.6}
      .m-btn{display:inline-block;background:#fff;color:${biz.theme};padding:20px 40px;text-decoration:none;font-weight:800;border-radius:4px;font-size:1.1rem;transition:0.3s}
      .m-btn:hover{transform:translateX(10px)}
      .m-addr{font-size:0.9rem;opacity:0.5;max-width:300px}
      .slate-right{flex:1.2}
      .slate-right img{width:100%;height:100%;object-fit:cover;filter:grayscale(20%)}
      @media(max-width:900px){.slate-main{flex-direction:column}.slate-right{display:none}}`;
    return { html, css };
  },

  // CA: BOLD FINANCE
  'ca-bold-finance': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Karla:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="bold-wrap">
        <header class="b-head">
          <div class="b-logo">${biz.name}</div>
          <div class="b-contact">Call: ${biz.phone}</div>
        </header>
        <div class="b-hero">
          <h1 class="b-title">${biz.tagline}</h1>
          <div class="b-grid">
            <div class="b-box img-box"><img src="assets/hero.png" alt="CA"></div>
            <div class="b-box text-box">
              <div class="b-rating">${biz.rating}★ Rating (${biz.reviews})</div>
              <p>${biz.subtitle}</p>
              <a href="https://wa.me/${biz.waNum}" class="b-btn">WHATSAPP NOW</a>
              <p class="b-loc">📍 ${biz.address}</p>
            </div>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Karla',sans-serif;background:#111;color:#fff}
      .bold-wrap{max-width:1200px;margin:0 auto;padding:40px 20px}
      .b-head{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #333;padding-bottom:20px;margin-bottom:40px}
      .b-logo{font-family:'Oswald',sans-serif;font-size:2rem;color:${biz.theme}}
      .b-contact{font-weight:700}
      .b-title{font-family:'Oswald',sans-serif;font-size:6vw;text-transform:uppercase;line-height:1;margin:0 0 40px 0;color:#fff}
      .b-grid{display:grid;grid-template-columns:2fr 1fr;gap:30px}
      .img-box img{width:100%;height:500px;object-fit:cover;border-radius:10px}
      .text-box{background:#222;padding:40px;border-radius:10px;display:flex;flex-direction:column;justify-content:center}
      .b-rating{color:${biz.theme};font-weight:700;font-size:1.2rem;margin-bottom:20px}
      .text-box p{font-size:1.1rem;line-height:1.6;color:#ccc;margin-bottom:40px}
      .b-btn{display:block;background:${biz.theme};color:#fff;text-align:center;padding:20px;text-decoration:none;font-family:'Oswald',sans-serif;font-size:1.5rem;border-radius:5px;transition:0.3s}
      .b-btn:hover{background:#fff;color:#111}
      .b-loc{margin-top:30px;font-size:0.9rem!important;color:#666!important}
      @media(max-width:900px){.b-grid{grid-template-columns:1fr}.b-title{font-size:4rem}}`;
    return { html, css };
  },

  // CA: SPLIT CLASSIC
  'ca-split-classic': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Mulish:wght@400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="cl-layout">
        <div class="cl-img"><img src="assets/hero.png" alt="Finance"></div>
        <div class="cl-content">
          <div class="cl-inner">
            <h2 class="cl-logo">${biz.name}</h2>
            <div class="cl-divider"></div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="cl-meta">★ ${biz.rating} | ${biz.reviews} Reviews</div>
            <a href="tel:${biz.phone}" class="cl-btn">Contact Our Office</a>
            <p class="cl-addr">${biz.address}</p>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Mulish',sans-serif;background:#fff;color:#333}
      .cl-layout{display:flex;height:100vh}
      .cl-img{flex:1}
      .cl-img img{width:100%;height:100%;object-fit:cover}
      .cl-content{flex:1;display:flex;align-items:center;justify-content:center;padding:60px;background:#f8fafc}
      .cl-inner{max-width:500px}
      .cl-logo{font-family:'Merriweather',serif;font-size:1.5rem;color:${biz.theme};margin:0}
      .cl-divider{width:50px;height:2px;background:${biz.theme};margin:30px 0}
      h1{font-family:'Merriweather',serif;font-size:3rem;line-height:1.2;margin:0 0 20px 0;color:#0f172a}
      p{font-size:1.1rem;line-height:1.7;color:#64748b;margin-bottom:30px}
      .cl-meta{font-size:0.9rem;font-weight:600;color:${biz.theme};margin-bottom:40px;letter-spacing:1px}
      .cl-btn{display:inline-block;border:2px solid ${biz.theme};color:${biz.theme};padding:15px 30px;text-decoration:none;font-weight:600;transition:all 0.3s}
      .cl-btn:hover{background:${biz.theme};color:#fff}
      .cl-addr{margin-top:60px;font-size:0.85rem;color:#94a3b8}
      @media(max-width:900px){.cl-layout{flex-direction:column-reverse}.cl-img{height:40vh}}`;
    return { html, css };
  },

  // CA: CARD LAYOUT
  'ca-card-layout': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="card-bg">
        <div class="card-main">
          <div class="c-head">
            <div class="c-brand">${biz.name}</div>
            <div class="c-rating">★ ${biz.rating}</div>
          </div>
          <div class="c-body">
            <div class="c-text">
              <h1>${biz.tagline}</h1>
              <p>${biz.subtitle}</p>
              <a href="tel:${biz.phone}" class="c-btn">Book Consultation</a>
            </div>
            <div class="c-img"><img src="assets/hero.png" alt="CA"></div>
          </div>
          <div class="c-foot">
            <div class="c-rev">${biz.reviews} Trusted Reviews</div>
            <div class="c-loc">${biz.address}</div>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Outfit',sans-serif;background:#e2e8f0;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;box-sizing:border-box}
      .card-main{background:#fff;width:100%;max-width:1200px;border-radius:30px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.1);padding:40px;display:flex;flex-direction:column;gap:40px}
      .c-head{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f1f5f9;padding-bottom:20px}
      .c-brand{font-size:1.5rem;font-weight:900;color:${biz.theme}}
      .c-rating{background:#fef3c7;color:#d97706;padding:5px 15px;border-radius:20px;font-weight:700}
      .c-body{display:flex;gap:40px;align-items:center}
      .c-text{flex:1}
      h1{font-size:4rem;font-weight:900;line-height:1.1;margin:0 0 20px 0;color:#0f172a}
      p{font-size:1.2rem;color:#64748b;margin-bottom:40px;line-height:1.6}
      .c-btn{display:inline-block;background:${biz.theme};color:#fff;padding:18px 40px;border-radius:15px;text-decoration:none;font-weight:700;font-size:1.1rem;box-shadow:0 10px 20px rgba(180, 83, 9, 0.2);transition:0.3s}
      .c-btn:hover{transform:translateY(-3px)}
      .c-img{flex:1}
      .c-img img{width:100%;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,0.1);height:400px;object-fit:cover}
      .c-foot{display:flex;justify-content:space-between;background:#f8fafc;padding:20px;border-radius:15px;color:#475569;font-weight:600;font-size:0.9rem}
      @media(max-width:900px){.c-body{flex-direction:column}h1{font-size:2.5rem}.c-foot{flex-direction:column;gap:10px}}`;
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

  const { html, css } = generateFunc(biz);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'style.css'), css);
  
  console.log(`✅ ${biz.name} -> Generated with [${biz.style}] style.`);
});

console.log("\nBatch 4 completed successfully!");
