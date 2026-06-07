const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

const batch2 = [
  // SALONS (4)
  {
    slug: 'luxe-look-salon', name: 'Luxe Look Salon',
    tagline: 'Where Beauty Meets Luxury.', subtitle: "Vesu's premier beauty destination.",
    rating: 4.9, reviews: 1007, phone: '+919328795883', waNum: '919328795883',
    address: 'SNS Arista, G-4, Vesu, Surat 395007',
    style: 'salon-magazine',
    theme: '#D4A574' // Rose gold
  },
  {
    slug: 'coco-head-unisex-salon', name: 'Coco Head Unisex Salon',
    tagline: 'Style That Speaks Volumes.', subtitle: "Bharthana's trendiest unisex salon.",
    rating: 4.8, reviews: 397, phone: '+919756257392', waNum: '919756257392',
    address: 'Atlanta Business Hub, VIP Rd, Bharthana, Surat 395007',
    style: 'salon-modern-dark',
    theme: '#ff4757' // Vibrant red
  },
  {
    slug: 'hair-avenue-unisex-salon', name: 'Hair Avenue',
    tagline: 'Avenue to Perfect Hair.', subtitle: "Vesu's favorite neighborhood salon.",
    rating: 4.9, reviews: 288, phone: '+916353644596', waNum: '916353644596',
    address: 'G-16 SUKUM PLATINUM, Vesu, Surat 395007',
    style: 'salon-glassmorphism',
    theme: '#a29bfe' // Soft purple
  },
  {
    slug: 'signature-unisex-salon', name: 'Signature Salon',
    tagline: 'Leave Your Signature Look.', subtitle: "City Light's most trusted unisex salon.",
    rating: 4.9, reviews: 184, phone: '+917600141016', waNum: '917600141016',
    address: 'Shop U-11, Shubhlaxmi Complex, City Light Rd, Surat 395007',
    style: 'salon-editorial',
    theme: '#2d3436' // Dark chic
  },
  
  // DENTAL (3)
  {
    slug: 'dent-n-gum-dental', name: "Dent 'N' Gum Clinic",
    tagline: 'Smile With Confidence.', subtitle: "Dr. Akshat Sharma's expert dental clinic in Vijay Nagar.",
    rating: 4.9, reviews: 361, phone: '+919873063208', waNum: '919873063208',
    address: '1st Floor, 344 A, Vijay Nagar, Indore 452010',
    style: 'dental-clean',
    theme: '#4ECDC4' // Teal
  },
  {
    slug: 'dr-bhatias-dental', name: "Dr. Bhatia's Dento Facial",
    tagline: 'Advanced Dental Care.', subtitle: "Multi-specialty center on A.B. Road.",
    rating: 4.7, reviews: 275, phone: '+917313565839', waNum: '917313565839',
    address: '103 Pearl Business Park, Bhawarkuan, A.B Road, Indore',
    style: 'dental-hero-focused',
    theme: '#0984e3' // Blue
  },
  {
    slug: 'dr-desais-dental', name: "Dr. Desai's Multispeciality",
    tagline: 'Expert Care. Beautiful Smiles.', subtitle: "Ashok Nagar's trusted clinic.",
    rating: 4.9, reviews: 184, phone: '+919713907140', waNum: '919713907140',
    address: '40, Sahid Bhagat Singh Society, Ashok Nagar, Indore',
    style: 'dental-split',
    theme: '#00cec9' // Aqua
  }
];

const generators = {

  // SALON: MAGAZINE STYLE
  'salon-magazine': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="magazine-layout">
        <header>
          <div class="logo">${biz.name}</div>
          <nav><a href="tel:${biz.phone}">BOOK APPOINTMENT</a></nav>
        </header>
        <div class="hero">
          <div class="hero-img"><img src="assets/hero.png" alt="Salon"></div>
          <div class="hero-card">
            <h1>${biz.tagline}</h1>
            <p><em>${biz.subtitle}</em></p>
            <div class="ratings">★ ${biz.rating} from ${biz.reviews} reviews</div>
            <a href="tel:${biz.phone}" class="mag-btn">Call ${biz.phone}</a>
            <p class="addr">${biz.address}</p>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Lato',sans-serif;background:#faf8f5;color:#333}
      .magazine-layout{max-width:1200px;margin:0 auto;padding:20px}
      header{display:flex;justify-content:space-between;align-items:center;padding:30px 0;border-bottom:1px solid #e0dcd5;margin-bottom:40px}
      .logo{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:700;color:${biz.theme}}
      nav a{text-decoration:none;font-weight:bold;color:#333;letter-spacing:2px;font-size:0.9rem}
      .hero{position:relative;display:flex;justify-content:flex-end}
      .hero-img{width:70%;height:70vh}
      .hero-img img{width:100%;height:100%;object-fit:cover}
      .hero-card{position:absolute;left:0;top:15%;background:#fff;padding:60px;width:40%;box-shadow:0 20px 40px rgba(0,0,0,0.05);border:1px solid #f0ebe1}
      h1{font-family:'Playfair Display',serif;font-size:3.5rem;margin:0 0 20px 0;line-height:1.1;color:#111}
      p{font-size:1.2rem;color:#666;line-height:1.6;margin-bottom:30px}
      .ratings{font-family:'Playfair Display',serif;color:${biz.theme};font-size:1.2rem;margin-bottom:40px}
      .mag-btn{display:inline-block;background:${biz.theme};color:#fff;padding:15px 30px;text-decoration:none;letter-spacing:2px;text-transform:uppercase;font-size:0.9rem;transition:background 0.3s}
      .mag-btn:hover{background:#333}
      .addr{margin-top:40px;font-size:0.85rem;letter-spacing:1px;text-transform:uppercase;color:#999}
      @media(max-width:900px){.hero{flex-direction:column}.hero-img{width:100%;height:50vh}.hero-card{position:static;width:100%;box-sizing:border-box;padding:40px}}`;
    return { html, css };
  },

  // SALON: MODERN DARK
  'salon-modern-dark': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;400&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="dark-wrapper">
        <nav class="sync-nav">
          <div class="logo">${biz.name}</div>
          <a href="tel:${biz.phone}" class="contact-link">Contact</a>
        </nav>
        <div class="hero-area">
          <div class="hero-bg"><img src="assets/hero.png" alt="Hero"></div>
          <div class="hero-content">
            <div class="outline-text">STYLE.</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="review-box">
              <span class="star">★ ${biz.rating}</span>
              <span class="count">${biz.reviews} Google Reviews</span>
            </div>
            <a href="https://wa.me/${biz.waNum}" class="action-btn">WhatsApp Us →</a>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Inter',sans-serif;background:#050505;color:#fff}
      .dark-wrapper{display:flex;flex-direction:column;height:100vh}
      .sync-nav{display:flex;justify-content:space-between;padding:30px 50px;position:absolute;top:0;width:100%;box-sizing:border-box;z-index:10}
      .logo{font-family:'Syncopate',sans-serif;font-weight:700;font-size:1.2rem;letter-spacing:2px;color:${biz.theme}}
      .contact-link{color:#fff;text-decoration:none;text-transform:uppercase;letter-spacing:2px}
      .hero-area{flex:1;position:relative;display:flex;align-items:center;padding:0 50px}
      .hero-bg{position:absolute;inset:0;opacity:0.4}
      .hero-bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%)}
      .hero-content{position:relative;z-index:1;max-width:800px}
      .outline-text{font-family:'Syncopate',sans-serif;font-size:6rem;font-weight:700;-webkit-text-stroke:2px rgba(255,255,255,0.1);color:transparent;line-height:0.8;margin-bottom:20px}
      h1{font-family:'Syncopate',sans-serif;font-size:3.5rem;line-height:1.2;margin:0 0 30px 0;font-weight:400}
      p{font-size:1.2rem;color:#ccc;max-width:500px;line-height:1.6}
      .review-box{display:flex;gap:20px;align-items:center;margin:40px 0}
      .star{color:${biz.theme};font-weight:bold;font-size:1.5rem}
      .count{color:#888}
      .action-btn{display:inline-block;border:1px solid #fff;color:#fff;padding:20px 40px;text-decoration:none;text-transform:uppercase;letter-spacing:3px;font-size:0.9rem;transition:0.3s;background:rgba(255,255,255,0.05)}
      .action-btn:hover{background:#fff;color:#000}
      @media(max-width:900px){.outline-text{font-size:4rem}h1{font-size:2.5rem}}`;
    return { html, css };
  },

  // SALON: GLASSMORPHISM
  'salon-glassmorphism': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="glass-bg">
        <div class="circle c1"></div><div class="circle c2"></div>
        <div class="glass-panel">
          <header><h2>${biz.name}</h2></header>
          <div class="glass-content">
            <div class="text">
              <h1>${biz.tagline}</h1>
              <p>${biz.subtitle}</p>
              <div class="stats">
                <div class="stat-item"><strong>${biz.rating}</strong><span>Rating</span></div>
                <div class="stat-item"><strong>${biz.reviews}</strong><span>Reviews</span></div>
              </div>
              <div class="btns">
                <a href="tel:${biz.phone}" class="g-btn">Call Us</a>
                <a href="https://wa.me/${biz.waNum}" class="g-btn outline">WhatsApp</a>
              </div>
              <div class="addr">📍 ${biz.address}</div>
            </div>
            <div class="img"><img src="assets/hero.png" alt="Salon"></div>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Poppins',sans-serif;background:#eef2f5;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}
      .glass-bg{position:relative;width:100%;height:100vh;display:flex;align-items:center;justify-content:center}
      .circle{position:absolute;border-radius:50%;filter:blur(60px);z-index:-1}
      .c1{width:400px;height:400px;background:${biz.theme};top:10%;left:20%;opacity:0.6}
      .c2{width:500px;height:500px;background:#74b9ff;bottom:10%;right:10%;opacity:0.6}
      .glass-panel{width:90%;max-width:1200px;height:85vh;background:rgba(255,255,255,0.4);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.5);border-radius:30px;box-shadow:0 30px 60px rgba(0,0,0,0.1);display:flex;flex-direction:column;padding:40px;box-sizing:border-box}
      header h2{margin:0 0 40px 0;font-weight:600;color:#2d3436}
      .glass-content{display:flex;gap:40px;flex:1}
      .text{flex:1;display:flex;flex-direction:column;justify-content:center}
      h1{font-size:3.5rem;line-height:1.2;color:#2d3436;margin:0 0 20px 0}
      p{font-size:1.1rem;color:#636e72;margin-bottom:40px}
      .stats{display:flex;gap:40px;margin-bottom:40px}
      .stat-item{display:flex;flex-direction:column}
      .stat-item strong{font-size:2rem;color:${biz.theme}}
      .stat-item span{font-size:0.9rem;color:#636e72}
      .btns{display:flex;gap:20px;margin-bottom:40px}
      .g-btn{padding:15px 40px;border-radius:50px;text-decoration:none;font-weight:600;background:#fff;color:${biz.theme};box-shadow:0 10px 20px rgba(0,0,0,0.05);transition:0.3s}
      .g-btn.outline{background:transparent;border:2px solid #fff;color:#2d3436;box-shadow:none}
      .g-btn:hover{transform:translateY(-3px)}
      .addr{color:#636e72;font-size:0.9rem}
      .img{flex:1;border-radius:20px;overflow:hidden}
      .img img{width:100%;height:100%;object-fit:cover}
      @media(max-width:900px){.glass-content{flex-direction:column}.img{display:none}.glass-panel{height:auto}}`;
    return { html, css };
  },

  // SALON: EDITORIAL
  'salon-editorial': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="ed-layout">
        <div class="ed-nav"><div>${biz.name}</div><div>No. 01</div></div>
        <div class="ed-main">
          <div class="ed-title">
            <h1>${biz.tagline.split('.')[0]}.</h1>
            <p class="subtitle">${biz.subtitle}</p>
          </div>
          <div class="ed-image"><img src="assets/hero.png" alt="Editorial"></div>
        </div>
        <div class="ed-footer">
          <div class="ed-meta">★ ${biz.rating} RATING / ${biz.reviews} REVIEWS</div>
          <div class="ed-address">${biz.address}</div>
          <div class="ed-action"><a href="tel:${biz.phone}">BOOK SESSION →</a></div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Roboto',sans-serif;background:#fff;color:#111;padding:20px;box-sizing:border-box;min-height:100vh}
      .ed-layout{border:1px solid #000;min-height:calc(100vh - 40px);display:flex;flex-direction:column}
      .ed-nav{display:flex;justify-content:space-between;padding:20px;border-bottom:1px solid #000;font-family:'Bodoni Moda',serif;font-weight:700;font-size:1.2rem;text-transform:uppercase}
      .ed-main{display:flex;flex:1}
      .ed-title{flex:1;padding:60px 40px;border-right:1px solid #000;display:flex;flex-direction:column;justify-content:center}
      h1{font-family:'Bodoni Moda',serif;font-size:5rem;font-weight:400;line-height:1;margin:0 0 30px 0}
      .subtitle{font-size:1.2rem;line-height:1.6;color:#444}
      .ed-image{flex:1;padding:20px;background:#f5f5f5}
      .ed-image img{width:100%;height:100%;object-fit:cover;filter:sepia(0.2)}
      .ed-footer{display:flex;border-top:1px solid #000}
      .ed-meta, .ed-address, .ed-action{flex:1;padding:20px;border-right:1px solid #000;display:flex;align-items:center;font-size:0.9rem;text-transform:uppercase;letter-spacing:1px}
      .ed-action{border-right:none;background:#111}
      .ed-action a{color:#fff;text-decoration:none;width:100%;text-align:center;font-weight:bold}
      @media(max-width:900px){.ed-main{flex-direction:column}.ed-title{border-right:none;border-bottom:1px solid #000}.ed-footer{flex-direction:column}.ed-meta,.ed-address,.ed-action{border-right:none;border-bottom:1px solid #000}}`;
    return { html, css };
  },

  // DENTAL: CLEAN MEDICAL
  'dental-clean': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="topbar">Emergency? Call ${biz.phone}</div>
      <header class="main-header">
        <div class="logo">${biz.name}</div>
        <a href="tel:${biz.phone}" class="btn">Book Appointment</a>
      </header>
      <main class="clean-hero">
        <div class="hero-content">
          <div class="rating-badge">
            <span class="star">★</span> ${biz.rating} / 5 (${biz.reviews} Reviews)
          </div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="features">
            <span>✓ Advanced Tech</span><span>✓ Expert Doctors</span><span>✓ Painless</span>
          </div>
          <div class="actions">
            <a href="tel:${biz.phone}" class="btn primary">Call Clinic</a>
            <a href="https://wa.me/${biz.waNum}" class="btn outline">WhatsApp</a>
          </div>
          <div class="address-box">
            <strong>Location:</strong> ${biz.address}
          </div>
        </div>
        <div class="hero-image">
          <img src="assets/hero.png" alt="Dental Clinic">
          <div class="shape"></div>
        </div>
      </main>
    </body></html>`;
    const css = `body{margin:0;font-family:'Open Sans',sans-serif;color:#333;background:#f9fbfd}
      .topbar{background:${biz.theme};color:#fff;text-align:center;padding:10px;font-size:0.9rem;font-weight:600}
      .main-header{display:flex;justify-content:space-between;align-items:center;padding:20px 50px;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,0.05)}
      .logo{font-size:1.5rem;font-weight:700;color:#2c3e50}
      .btn{padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:600;background:${biz.theme};color:#fff;transition:0.3s}
      .btn:hover{background:#2c3e50}
      .btn.outline{background:transparent;border:2px solid ${biz.theme};color:${biz.theme}}
      .btn.outline:hover{background:${biz.theme};color:#fff}
      .clean-hero{display:flex;align-items:center;padding:80px 50px;max-width:1300px;margin:0 auto;gap:60px}
      .hero-content{flex:1}
      .rating-badge{display:inline-block;background:#fff;padding:8px 16px;border-radius:30px;font-weight:600;color:#2c3e50;box-shadow:0 4px 10px rgba(0,0,0,0.05);margin-bottom:20px}
      .star{color:#f1c40f}
      h1{font-size:4rem;color:#2c3e50;line-height:1.1;margin:0 0 20px 0}
      p{font-size:1.2rem;color:#7f8c8d;margin-bottom:30px;line-height:1.6}
      .features{display:flex;gap:20px;margin-bottom:40px;color:#2c3e50;font-weight:600}
      .actions{display:flex;gap:20px;margin-bottom:40px}
      .address-box{background:#fff;padding:20px;border-left:4px solid ${biz.theme};border-radius:4px;box-shadow:0 4px 15px rgba(0,0,0,0.05)}
      .hero-image{flex:1;position:relative}
      .hero-image img{width:100%;border-radius:12px;box-shadow:0 20px 40px rgba(0,0,0,0.1);position:relative;z-index:2}
      .shape{position:absolute;width:100%;height:100%;background:${biz.theme};top:20px;left:20px;border-radius:12px;z-index:1;opacity:0.2}
      @media(max-width:900px){.clean-hero{flex-direction:column}h1{font-size:2.5rem}.features{flex-direction:column}}`;
    return { html, css };
  },

  // DENTAL: HERO FOCUSED
  'dental-hero-focused': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;500;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="h-layout">
        <div class="h-image">
          <div class="h-nav">${biz.name}</div>
          <img src="assets/hero.png" alt="Dental">
        </div>
        <div class="h-content">
          <div class="h-badge">★ ${biz.rating} Rating | ${biz.reviews} Reviews</div>
          <h1>${biz.tagline}</h1>
          <p>${biz.subtitle}</p>
          <div class="h-box">
            <h3>Visit Us Today</h3>
            <p>${biz.address}</p>
          </div>
          <div class="h-buttons">
            <a href="tel:${biz.phone}" class="h-btn main">Call Clinic</a>
            <a href="https://wa.me/${biz.waNum}" class="h-btn sub">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Rubik',sans-serif;color:#1a202c;background:#fff}
      .h-layout{display:flex;height:100vh}
      .h-image{flex:1.2;position:relative}
      .h-image img{width:100%;height:100%;object-fit:cover;border-radius:0 40px 40px 0}
      .h-nav{position:absolute;top:40px;left:40px;background:#fff;padding:10px 20px;border-radius:30px;font-weight:700;box-shadow:0 10px 20px rgba(0,0,0,0.1);color:${biz.theme}}
      .h-content{flex:1;padding:80px;display:flex;flex-direction:column;justify-content:center}
      .h-badge{color:${biz.theme};font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px}
      h1{font-size:3.5rem;line-height:1.1;margin:0 0 20px 0;color:#2d3748}
      .h-content > p{font-size:1.2rem;color:#718096;margin-bottom:40px;line-height:1.6}
      .h-box{background:#f7fafc;padding:30px;border-radius:20px;margin-bottom:40px}
      .h-box h3{margin:0 0 10px 0;color:${biz.theme}}
      .h-box p{margin:0;color:#4a5568}
      .h-buttons{display:flex;gap:20px}
      .h-btn{flex:1;text-align:center;padding:18px;border-radius:12px;text-decoration:none;font-weight:700;transition:0.3s}
      .main{background:${biz.theme};color:#fff;box-shadow:0 10px 20px rgba(9, 132, 227, 0.3)}
      .main:hover{transform:translateY(-3px);box-shadow:0 15px 25px rgba(9, 132, 227, 0.4)}
      .sub{background:#e2e8f0;color:#4a5568}
      .sub:hover{background:#cbd5e0}
      @media(max-width:1000px){.h-layout{flex-direction:column;height:auto}.h-image{height:50vh}.h-image img{border-radius:0}.h-content{padding:40px}}`;
    return { html, css };
  },

  // DENTAL: SPLIT DIAGANOL
  'dental-split': (biz) => {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${biz.name}</title><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="style.css"></head><body>
      <div class="diag-layout">
        <div class="diag-bg"><img src="assets/hero.png" alt="Dental"></div>
        <div class="diag-content">
          <header class="diag-head">${biz.name}</header>
          <div class="diag-main">
            <div class="diag-rating">★ ${biz.rating} / ${biz.reviews} Reviews</div>
            <h1>${biz.tagline}</h1>
            <p>${biz.subtitle}</p>
            <div class="diag-actions">
              <a href="tel:${biz.phone}" class="d-btn">Book Appointment</a>
            </div>
            <div class="diag-addr">
              <p><strong>Clinic Location</strong></p>
              <p>${biz.address}</p>
            </div>
          </div>
        </div>
      </div>
    </body></html>`;
    const css = `body{margin:0;font-family:'Outfit',sans-serif;color:#fff;overflow:hidden}
      .diag-layout{position:relative;height:100vh;display:flex;align-items:center}
      .diag-bg{position:absolute;right:0;top:0;width:60%;height:100%;z-index:-1}
      .diag-bg img{width:100%;height:100%;object-fit:cover}
      .diag-content{background:${biz.theme};width:55%;height:100%;clip-path:polygon(0 0, 100% 0, 85% 100%, 0% 100%);padding:40px 80px;box-sizing:border-box;display:flex;flex-direction:column}
      .diag-head{font-size:2rem;font-weight:800;margin-bottom:auto}
      .diag-main{margin-bottom:auto;max-width:500px}
      .diag-rating{display:inline-block;background:rgba(0,0,0,0.1);padding:8px 16px;border-radius:20px;font-weight:500;margin-bottom:20px}
      h1{font-size:4.5rem;font-weight:800;line-height:1;margin:0 0 20px 0}
      p{font-size:1.2rem;line-height:1.6;opacity:0.9;margin-bottom:40px}
      .d-btn{display:inline-block;background:#fff;color:${biz.theme};padding:18px 40px;border-radius:30px;font-weight:800;text-decoration:none;font-size:1.1rem;box-shadow:0 10px 20px rgba(0,0,0,0.1);transition:0.3s}
      .d-btn:hover{transform:translateY(-3px);box-shadow:0 15px 30px rgba(0,0,0,0.2)}
      .diag-addr{margin-top:60px;background:rgba(0,0,0,0.1);padding:20px;border-radius:16px}
      .diag-addr p{margin:0;font-size:1rem;margin-bottom:5px}
      @media(max-width:1000px){.diag-content{width:100%;clip-path:none;background:rgba(0,206,201,0.9);padding:40px}.diag-bg{width:100%}h1{font-size:3rem}}`;
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

  const { html, css } = generateFunc(biz);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(dir, 'style.css'), css);
  
  console.log(`✅ ${biz.name} -> Generated with [${biz.style}] style.`);
});

console.log("\nBatch 2 completed successfully!");
