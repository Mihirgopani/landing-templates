const fs = require('fs');
const path = require('path');

const BASE = '/Users/mihirgopani/Desktop/Git/Landing-Template';

// ======================== BUSINESS DATA ========================
const businesses = [
  // === GYM / FITNESS ===
  {
    slug: 'fitness-pulse-gym', name: 'Fitness Pulse Gym', shortName: 'FitnessPulse',
    tagline: 'Transform Your Body.<br><span class="text-gradient">Transform Your Life.</span>',
    subtitle: "Jaipur's most trusted fitness destination on Kalwar Road, Jhotwara. World-class equipment, certified trainers, and a community that pushes you beyond limits.",
    category: 'gym', icon: '⚡', rating: 4.8, reviews: 1837,
    phone: '+919887000058', waNum: '919887000058',
    address: 'Kalwar Rd, Suraj Nagar, Jhotwara, Jaipur, Rajasthan 302012',
    addressShort: 'Jhotwara, Jaipur 302012',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fitness%20Pulse%20Gym&query_place_id=ChIJRy-OsBezbTkRqFgYdiiwXHg',
    aboutDesc: "At Fitness Pulse, we believe in building a stronger you — inside and out. Our state-of-the-art facility in Jhotwara, Jaipur is designed to fuel your fitness journey.",
    ctaTitle: 'Ready to Start Your <span class="text-gradient">Fitness Journey?</span>',
    ctaSub: 'Join Fitness Pulse Gym today and get your first week FREE. No commitments, just results.',
  },
  {
    slug: 'klean-fit-iconic', name: 'KLEAN FIT Iconic', shortName: 'KLEANFIT',
    tagline: 'Elevate Your<br><span class="text-gradient">Fitness Game.</span>',
    subtitle: "C-Scheme's most iconic fitness experience at Crystal Palm Mall. Premium equipment, elite trainers, and an atmosphere built for champions.",
    category: 'gym', icon: '💪', rating: 4.7, reviews: 857,
    phone: '+919024662515', waNum: '919024662515',
    address: '3rd Floor, Crystal Palm Mall, 22 Godown Circle, Sardar Patel Marg, C-Scheme, Jaipur 302001',
    addressShort: 'C-Scheme, Jaipur 302001',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=KLEAN%20FIT%20Iconic%20C-SCHEME&query_place_id=ChIJoWpzM0q1bTkRdJn_mTy_J0A',
    aboutDesc: "KLEAN FIT Iconic at Crystal Palm Mall, C-Scheme is where luxury meets performance. Experience fitness the way it's meant to be.",
    ctaTitle: 'Ready to Go <span class="text-gradient">KLEAN?</span>',
    ctaSub: 'Join KLEAN FIT Iconic today. Your transformation starts with a single step.',
  },
  {
    slug: 'lifetime-fitness-club', name: 'Lifetime Fitness Club', shortName: 'LifetimeFit',
    tagline: 'Your Fitness.<br><span class="text-gradient">Your Lifetime.</span>',
    subtitle: "Malviya Nagar's premier gym experience at V Cube. Cutting-edge equipment, dedicated trainers, and a community committed to results.",
    category: 'gym', icon: '🔥', rating: 4.9, reviews: 738,
    phone: '+919950550885', waNum: '919950550885',
    address: '3rd Floor, V Cube, Plot no. 1-6, opp. Gaurav Tower Marg, Malviya Nagar, Jaipur 302017',
    addressShort: 'Malviya Nagar, Jaipur 302017',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lifetime%20Fitness%20Club&query_place_id=ChIJHbm90MS1bTkRE9SeHR4P6DE',
    aboutDesc: "Lifetime Fitness Club at V Cube, Malviya Nagar is where your fitness goals become reality. Premium equipment, proven programs, lasting results.",
    ctaTitle: 'Start Your <span class="text-gradient">Lifetime Transformation</span>',
    ctaSub: 'Join Lifetime Fitness Club today. Because fitness is not a phase — it\'s a lifestyle.',
  },
  {
    slug: 'metroflex-gym-jaipur', name: 'METROFLEX GYM', shortName: 'METROFLEX',
    tagline: 'Built for<br><span class="text-gradient">Serious Lifters.</span>',
    subtitle: "Vaishali Nagar's hardcore training ground. No-nonsense equipment, intense atmosphere, and the kind of gym that breeds champions.",
    category: 'gym', icon: '🏆', rating: 4.7, reviews: 325,
    phone: '+919772914999', waNum: '919772914999',
    address: 'Vaibhav Complex, 7th floor, Amrapali Marg, Block C, Vaishali Nagar, Jaipur 302021',
    addressShort: 'Vaishali Nagar, Jaipur 302021',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=METROFLEX%20GYM%20JAIPUR&query_place_id=ChIJIxFCQQS1bTkRJ-bt0MY1oP4',
    aboutDesc: "METROFLEX GYM is where serious athletes train. Located in Vaishali Nagar, we offer an intense, no-excuses environment for those who mean business.",
    ctaTitle: 'Ready to Train <span class="text-gradient">Like a Beast?</span>',
    ctaSub: 'Join METROFLEX GYM and experience real training. No fluff, just gains.',
  },
  {
    slug: 'fitness-society', name: 'Fitness Society', shortName: 'FitSociety',
    tagline: 'Where Fitness<br><span class="text-gradient">Meets Community.</span>',
    subtitle: "Subhash Nagar's best gym and fitness center. Modern equipment, supportive community, and programs designed for every fitness level.",
    category: 'gym', icon: '🤝', rating: 4.8, reviews: 234,
    phone: '+918947845748', waNum: '918947845748',
    address: 'Plot no. A 17, opposite Science Park, Subhash Nagar, Jaipur 302016',
    addressShort: 'Subhash Nagar, Jaipur 302016',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fitness%20Society&query_place_id=ChIJRwVDeyC1bTkReoC82RRwnpg',
    aboutDesc: "Fitness Society is more than a gym — it's a community. Located in Subhash Nagar, we combine top-tier equipment with a welcoming atmosphere.",
    ctaTitle: 'Join the <span class="text-gradient">Fitness Society</span>',
    ctaSub: 'Become part of Jaipur\'s best fitness community today. Your first trial is on us.',
  },
  {
    slug: 'fitup-fitness-lifestyle', name: 'Fitup Fitness Lifestyle', shortName: 'FitupFitness',
    tagline: 'Level Up Your<br><span class="text-gradient">Fitness Lifestyle.</span>',
    subtitle: "C-Scheme's boutique fitness experience. Premium personal training, modern equipment, and a lifestyle-first approach to health.",
    category: 'gym', icon: '🚀', rating: 4.9, reviews: 157,
    phone: '+919571995817', waNum: '919571995817',
    address: 'Bhagadiya Bhawan, J-33, Subhash Marg, C Scheme, Ashok Nagar, Jaipur 302001',
    addressShort: 'C-Scheme, Jaipur 302001',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fitup%20Fitness%20Lifestyle&query_place_id=ChIJ9wBznVG1bTkRLVX367tKOc0',
    aboutDesc: "Fitup Fitness Lifestyle in C-Scheme is a boutique gym experience where quality meets personalization. Every workout is designed for your lifestyle.",
    ctaTitle: 'Ready to <span class="text-gradient">Fit Up?</span>',
    ctaSub: 'Join Fitup Fitness Lifestyle and make fitness a part of your daily life.',
  },
  {
    slug: 'fitness-island-gym', name: 'Fitness Island Gym', shortName: 'FitnessIsland',
    tagline: 'Your Fitness<br><span class="text-gradient">Paradise.</span>',
    subtitle: "Lalkothi's favorite neighborhood gym. Great equipment, friendly trainers, and an atmosphere that makes working out a joy.",
    category: 'gym', icon: '🏝️', rating: 4.8, reviews: 149,
    phone: '+918639736126', waNum: '918639736126',
    address: 'A1, Nehru Path, Satya Vihar, Friends Colony, Lalkothi, Jaipur 302015',
    addressShort: 'Lalkothi, Jaipur 302015',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fitness%20island%20gym%20(Lalkothi)&query_place_id=ChIJGWsvW8O1bTkRJX_VPyZdXlk',
    aboutDesc: "Fitness Island Gym in Lalkothi is your neighborhood fitness paradise. A welcoming, well-equipped gym where everyone feels at home.",
    ctaTitle: 'Discover Your <span class="text-gradient">Fitness Island</span>',
    ctaSub: 'Join Fitness Island Gym today. Great workouts, great people, great results.',
  },
  {
    slug: 'anytime-fitness-bapu-nagar', name: 'Anytime Fitness Bapu Nagar', shortName: 'AnytimeFit',
    tagline: 'Fitness on<br><span class="text-gradient">Your Schedule.</span>',
    subtitle: "Bapu Nagar's 24/7 fitness solution at Pavilion, Tonk Road. World-class franchise equipment, flexible hours, real results.",
    category: 'gym', icon: '⏰', rating: 4.5, reviews: 141,
    phone: '+919057403330', waNum: '919057403330',
    address: '5th Floor, Pavilion, Tonk Rd, Bapu Nagar, Jaipur 302015',
    addressShort: 'Bapu Nagar, Jaipur 302015',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Anytime%20Fitness%20Bapu%20Nagar&query_place_id=ChIJS4O4q8u3bTkReH1Cv7Xu284',
    aboutDesc: "Anytime Fitness Bapu Nagar brings world-class fitness to Tonk Road. Open 24/7, equipped for excellence, and staffed by professionals who care.",
    ctaTitle: 'Start Training <span class="text-gradient">Anytime</span>',
    ctaSub: 'Join Anytime Fitness Bapu Nagar. Your key to 24/7 fitness freedom.',
  },
  {
    slug: 'vault-fitness-jaipur', name: 'Vault Fitness Jaipur', shortName: 'VaultFitness',
    tagline: 'Unlock Your<br><span class="text-gradient">True Potential.</span>',
    subtitle: "Hawa Sadak's best personal training studio. Intimate setting, expert guidance, and results-driven training that transforms.",
    category: 'gym', icon: '🔐', rating: 4.9, reviews: 58,
    phone: '+918387875233', waNum: '918387875233',
    address: '3rd floor, A-40, Chabra Rd, near BJP office, Hawa Sadak, Ramnagar, Jaipur 302019',
    addressShort: 'Hawa Sadak, Jaipur 302019',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Vault%20Fitness%20Jaipur&query_place_id=ChIJJ70xdlm1bTkR_dq8iX0QNsU',
    aboutDesc: "Vault Fitness is Jaipur's best personal training studio. Small classes, big results. We focus on quality over quantity.",
    ctaTitle: 'Unlock the <span class="text-gradient">Vault</span>',
    ctaSub: 'Join Vault Fitness Jaipur. Personal training that actually delivers.',
  },
  // === BEAUTY SALONS ===
  {
    slug: 'luxe-look-salon', name: 'Luxe Look Salon', shortName: 'LuxeLook',
    tagline: 'Where Beauty<br><span class="text-gradient">Meets Luxury.</span>',
    subtitle: "Vesu's premier beauty destination. Expert stylists, premium products, and an experience that makes you feel like royalty.",
    category: 'salon', icon: '✨', rating: 4.9, reviews: 1007,
    phone: '+919328795883', waNum: '919328795883',
    address: 'SNS Arista, G-4, Vesu, Surat, Gujarat 395007',
    addressShort: 'Vesu, Surat 395007',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Luxe%20Look%20Salon&query_place_id=ChIJDRS33_9T4DsRSO9SAruXQQ0',
    aboutDesc: "Luxe Look Salon in Vesu, Surat is where transformation happens. Our expert team creates stunning looks using only the finest products.",
    ctaTitle: 'Book Your <span class="text-gradient">Luxe Experience</span>',
    ctaSub: 'Visit Luxe Look Salon today. Walk in ordinary, walk out extraordinary.',
  },
  {
    slug: 'coco-head-unisex-salon', name: 'Coco Head Unisex Salon', shortName: 'CocoHead',
    tagline: 'Style That<br><span class="text-gradient">Speaks Volumes.</span>',
    subtitle: "Bharthana's trendiest unisex salon. Contemporary styling, expert cuts, and beauty services that define modern elegance.",
    category: 'salon', icon: '💇', rating: 4.8, reviews: 397,
    phone: '+919756257392', waNum: '919756257392',
    address: '1st floor, Atlanta Business Hub, UG-15, VIP Rd, Bharthana, Surat 395007',
    addressShort: 'Bharthana, Surat 395007',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coco%20Head%20Unisex%20Salon&query_place_id=ChIJz93Ur51T4DsRnE3mCMHSX-k',
    aboutDesc: "Coco Head Unisex Salon on VIP Road brings trendy, contemporary styling to Surat. Our skilled team keeps you looking your absolute best.",
    ctaTitle: 'Book Your <span class="text-gradient">Style Session</span>',
    ctaSub: 'Visit Coco Head Unisex Salon. Where every cut is a masterpiece.',
  },
  {
    slug: 'hair-avenue-unisex-salon', name: 'Hair Avenue Unisex Salon', shortName: 'HairAvenue',
    tagline: 'Your Avenue to<br><span class="text-gradient">Perfect Hair.</span>',
    subtitle: "Vesu's favorite neighborhood salon. Expert hair care, stunning transformations, and a welcoming vibe that keeps you coming back.",
    category: 'salon', icon: '💫', rating: 4.9, reviews: 288,
    phone: '+916353644596', waNum: '916353644596',
    address: 'G-16 SUKUM PLATINUM, beside Gangour, Vesu, Surat 395007',
    addressShort: 'Vesu, Surat 395007',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hair%20Avenue%20Unisex%20Salon&query_place_id=ChIJ-z5uaftN4DsRAtXpW0Xcpd8',
    aboutDesc: "Hair Avenue Unisex Salon in Vesu is your go-to destination for expert hair care. From trendy cuts to stunning colors, we do it all.",
    ctaTitle: 'Walk Into <span class="text-gradient">Hair Avenue</span>',
    ctaSub: 'Visit Hair Avenue Unisex Salon. Because great hair doesn\'t happen by chance.',
  },
  {
    slug: 'signature-unisex-salon', name: 'Signature Unisex Salon', shortName: 'SignatureSalon',
    tagline: 'Leave Your<br><span class="text-gradient">Signature Look.</span>',
    subtitle: "City Light's most trusted unisex salon. Expert grooming, premium products, and a style that's uniquely yours.",
    category: 'salon', icon: '✍️', rating: 4.9, reviews: 184,
    phone: '+917600141016', waNum: '917600141016',
    address: 'Shop No. U-11, Shubhlaxmi Complex, City Light Rd, Athwa, Surat 395007',
    addressShort: 'City Light, Surat 395007',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Signature%20Unisex%20Salon&query_place_id=ChIJXfTCv79N4DsRMN7O3ut0TEs',
    aboutDesc: "Signature Unisex Salon on City Light Road creates looks as unique as you. Premium grooming services with a personal touch.",
    ctaTitle: 'Create Your <span class="text-gradient">Signature</span>',
    ctaSub: 'Visit Signature Unisex Salon. Your look, your signature.',
  },
  // === DENTAL ===
  {
    slug: 'dent-n-gum-dental', name: "Dent 'N' Gum Dental Clinic", shortName: 'DentNGum',
    tagline: 'Smile With<br><span class="text-gradient">Confidence.</span>',
    subtitle: "Dr. Akshat Sharma's expert dental clinic in Vijay Nagar, Indore. Advanced treatments, gentle care, and beautiful smiles.",
    category: 'dental', icon: '🦷', rating: 4.9, reviews: 361,
    phone: '+919873063208', waNum: '919873063208',
    address: '1st Floor, 344 A, Near Mahalaxmi Gate, opp. Bombay Hospital, Vijay Nagar, Indore 452010',
    addressShort: 'Vijay Nagar, Indore 452010',
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=DENT%20''N''%20GUM&query_place_id=ChIJI480wQf9YjkRsBFsmTKsr7U",
    aboutDesc: "Dent 'N' Gum by Dr. Akshat Sharma offers world-class dental care in Vijay Nagar, Indore. From routine check-ups to advanced procedures, your smile is in expert hands.",
    ctaTitle: 'Book Your <span class="text-gradient">Dental Visit</span>',
    ctaSub: 'Schedule your appointment at Dent \'N\' Gum. Because every smile deserves the best care.',
  },
  {
    slug: 'dr-bhatias-dental', name: "Dr. Bhatia's Dento Facial Square", shortName: 'DrBhatia',
    tagline: 'Advanced Dental &<br><span class="text-gradient">Facial Care.</span>',
    subtitle: "Multi-specialty dental, cosmetic & ENT center on A.B. Road, Indore. Comprehensive care under one roof with expert specialists.",
    category: 'dental', icon: '🏥', rating: 4.7, reviews: 275,
    phone: '+917313565839', waNum: '917313565839',
    address: '103 First Floor Pearl Business Park, Bhawarkuan, A.B Road, Indore 452014',
    addressShort: 'Bhawarkuan, Indore 452014',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dr.%20Bhatia%27s%20Dento%20Facial%20Square&query_place_id=ChIJkfyAvfr8YjkRdbxAChHAaKY',
    aboutDesc: "Dr. Bhatia's Dento Facial Square is Indore's premier multi-specialty dental, cosmetic, and ENT center. Advanced treatments with compassionate care.",
    ctaTitle: 'Schedule Your <span class="text-gradient">Consultation</span>',
    ctaSub: 'Visit Dr. Bhatia\'s Dento Facial Square for comprehensive dental and facial care.',
  },
  {
    slug: 'dr-desais-dental', name: "Dr. Desai's Multispeciality Dental Clinic", shortName: 'DrDesai',
    tagline: 'Expert Dental Care.<br><span class="text-gradient">Beautiful Smiles.</span>',
    subtitle: "Ashok Nagar's trusted dental clinic for implants, braces, and complete dental solutions. Where expertise meets compassion.",
    category: 'dental', icon: '😁', rating: 4.9, reviews: 184,
    phone: '+919713907140', waNum: '919713907140',
    address: '40, Sahid Bhagat Singh Society, Sapna Sangeeta Rd, behind Inox, Ashok Nagar, Indore 452001',
    addressShort: 'Ashok Nagar, Indore 452001',
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=DR.%20DESAI'S%20MULTISPECIALITY%20DENTAL%20CLINIC&query_place_id=ChIJaQc-3-L8YjkRBq3PNjLm2bQ",
    aboutDesc: "Dr. Desai's Multispeciality Dental Clinic in Ashok Nagar provides comprehensive dental care with a gentle touch. Implants, braces, root canals — all under one roof.",
    ctaTitle: 'Book Your <span class="text-gradient">Dental Checkup</span>',
    ctaSub: 'Visit Dr. Desai\'s for a healthier, brighter smile. Expert care you can trust.',
  },
  // === PHOTOGRAPHERS ===
  {
    slug: 'studio-neelam', name: 'Studio Neelam', shortName: 'StudioNeelam',
    tagline: 'Capturing Moments.<br><span class="text-gradient">Creating Memories.</span>',
    subtitle: "Sitabuldi's legendary photography studio since decades. Wedding photography, portraits, and cinematic films that tell your story.",
    category: 'photographer', icon: '📸', rating: 4.8, reviews: 616,
    phone: '+918446596456', waNum: '918446596456',
    address: '26, Maharajbagh Rd, Sitabuldi, Nagpur 440001',
    addressShort: 'Sitabuldi, Nagpur 440001',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=STUDIO%20NEELAM&query_place_id=ChIJq6qqXsLA1DsRFXphG3LwkgM',
    aboutDesc: "Studio Neelam on Maharajbagh Road is Nagpur's trusted name in photography. Decades of experience capturing life's most precious moments with artistic excellence.",
    ctaTitle: 'Book Your <span class="text-gradient">Photo Session</span>',
    ctaSub: 'Contact Studio Neelam. Let us capture your story in frames that last forever.',
  },
  {
    slug: 'lensation-studio', name: 'Lensation Studio', shortName: 'Lensation',
    tagline: 'Through Our Lens.<br><span class="text-gradient">Your Story Unfolds.</span>',
    subtitle: "New Mankapur's creative photography studio. Wedding, pre-wedding, and portrait photography with a unique artistic vision.",
    category: 'photographer', icon: '🎬', rating: 4.9, reviews: 168,
    phone: '+918237299935', waNum: '918237299935',
    address: 'Flat No 308, Anandsagar Appt, 2, New Mankapur, Nagpur 440030',
    addressShort: 'New Mankapur, Nagpur 440030',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lensation%20Studio&query_place_id=ChIJc8KH02TB1DsR0oA0MGGLeyw',
    aboutDesc: "Lensation Studio brings a fresh, creative eye to every shoot. Based in New Mankapur, Nagpur, we transform ordinary moments into extraordinary visuals.",
    ctaTitle: 'Book Your <span class="text-gradient">Photo Shoot</span>',
    ctaSub: 'Contact Lensation Studio. Let our lens tell your beautiful story.',
  },
  {
    slug: 'thakurs-film-city', name: "Thakur's Film City", shortName: 'ThakursFilm',
    tagline: 'Cinematic Vision.<br><span class="text-gradient">Timeless Frames.</span>',
    subtitle: "Katol Road's best photography studio. Wedding photography, pre-wedding shoots, and cinematic wedding films with a personal touch.",
    category: 'photographer', icon: '🎥', rating: 4.8, reviews: 81,
    phone: '+919699161108', waNum: '919699161108',
    address: 'Plot No. 203, Katol Rd, Pension Nagar, Police Line Takli, Nagpur 440013',
    addressShort: 'Katol Rd, Nagpur 440013',
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thakur's%20Film%20City&query_place_id=ChIJD1tCOwzB1DsRkroQWFrm7jY",
    aboutDesc: "Thakur's Film City on Katol Road specializes in cinematic wedding photography and films. Every frame is crafted with passion and artistic precision.",
    ctaTitle: 'Book Your <span class="text-gradient">Wedding Shoot</span>',
    ctaSub: "Contact Thakur's Film City. Your wedding deserves a cinematic experience.",
  },
  {
    slug: 'mp-photography', name: 'MP Photography', shortName: 'MPPhoto',
    tagline: 'Picture Perfect.<br><span class="text-gradient">Every Time.</span>',
    subtitle: "Nagpur's rising star in photography. Wedding, portrait, and event photography with creative flair and professional precision.",
    category: 'photographer', icon: '📷', rating: 5.0, reviews: 79,
    phone: '+918788857258', waNum: '918788857258',
    address: 'Dayanand Park Road, MP Photography & Films, Nagpur 440014',
    addressShort: 'Nagpur 440014',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MP%20Photography&query_place_id=ChIJO7N3CsXB1DsRSyj3Ag2Nqj4',
    aboutDesc: "MP Photography delivers stunning visual stories with creative passion. Based in Nagpur, we capture weddings, events, and portraits with artistic excellence.",
    ctaTitle: 'Book <span class="text-gradient">MP Photography</span>',
    ctaSub: 'Contact MP Photography. Perfect shots, perfect memories.',
  },
  // === CHARTERED ACCOUNTANTS ===
  {
    slug: 'rd-bhatti-associates', name: 'R D Bhatti & Associates', shortName: 'RDBhatti',
    tagline: 'Financial Expertise.<br><span class="text-gradient">Trusted Guidance.</span>',
    subtitle: "Rajkot's trusted CA firm for GST, Income Tax, NRI Services, and Accounting. Professional solutions for your financial success.",
    category: 'ca', icon: '📊', rating: 5.0, reviews: 205,
    phone: '+919898709900', waNum: '919898709900',
    address: '606 The Millennium, 150 Feet Ring Road, Opp Silver Heights, near Nana Mava, Rajkot 360005',
    addressShort: 'Ring Road, Rajkot 360005',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=R%20D%20Bhatti%20Associates',
    aboutDesc: "R D Bhatti & Associates is a leading CA firm on 150 Feet Ring Road, Rajkot. We provide expert GST, Income Tax, NRI, and accounting services with integrity.",
    ctaTitle: 'Schedule a <span class="text-gradient">Consultation</span>',
    ctaSub: 'Contact R D Bhatti & Associates. Your financial success is our mission.',
  },
  {
    slug: 'ashara-ganatra-associates', name: 'Ashara Ganatra & Associates', shortName: 'AsharaGanatra',
    tagline: 'Your Financial<br><span class="text-gradient">Growth Partners.</span>',
    subtitle: "Rajkot's dynamic CA firm offering comprehensive taxation, audit, and business advisory services with a modern approach.",
    category: 'ca', icon: '📈', rating: 5.0, reviews: 198,
    phone: '+918866728979', waNum: '918866728979',
    address: '404, Fourth Floor, Pramukh Darshan Complex, Pedak Rd, above Kotak Bank, Rajkot 360003',
    addressShort: 'Pedak Rd, Rajkot 360003',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ashara%20Ganatra%20%26%20Associates&query_place_id=ChIJy9hyI-a1WTkR8bX9wjPwCDc',
    aboutDesc: "Ashara Ganatra & Associates provides expert chartered accountancy services in Rajkot. Modern solutions for taxation, audit, and business growth.",
    ctaTitle: 'Get Expert <span class="text-gradient">Financial Advice</span>',
    ctaSub: 'Contact Ashara Ganatra & Associates. Smart finance starts here.',
  },
  {
    slug: 'cdhb-and-company', name: 'C D H B And Company', shortName: 'CDHB',
    tagline: 'Professional CA<br><span class="text-gradient">Services You Trust.</span>',
    subtitle: "Formerly Chintan Dave & Company. Rajkot's reliable CA firm for audit, taxation, compliance, and business advisory.",
    category: 'ca', icon: '🏛️', rating: 4.9, reviews: 102,
    phone: '+919913593567', waNum: '919913593567',
    address: 'RK ICONIC, A-707, 150 Feet Ring Rd, nr. Sheetal Park, Rajkot 360006',
    addressShort: 'Ring Road, Rajkot 360006',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=C%20D%20H%20B%20AND%20COMPANY&query_place_id=ChIJjaw4RAPKWTkRPfi1BuQ2D3I',
    aboutDesc: "C D H B And Company (formerly Chintan Dave & Company) delivers reliable CA services from 150 Feet Ring Road, Rajkot. Trust, integrity, and expertise.",
    ctaTitle: 'Book a <span class="text-gradient">Consultation</span>',
    ctaSub: 'Contact C D H B And Company. Professional chartered accountancy you can count on.',
  },
  {
    slug: 'jh-jasani-co', name: 'J H Jasani & Co', shortName: 'JHJasani',
    tagline: 'Chartered Excellence.<br><span class="text-gradient">Financial Clarity.</span>',
    subtitle: "Trusted CA firm at RK Prime, 150 Feet Ring Road, Rajkot. Expert audit, taxation, and compliance services.",
    category: 'ca', icon: '⚖️', rating: 5.0, reviews: 40,
    phone: '+919824282434', waNum: '919824282434',
    address: '912, RK PRIME, 150 Feet Ring Rd, next to Silver Heights, Nana Mava, Rajkot 360004',
    addressShort: 'Ring Road, Rajkot 360004',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=J%20H%20JASANI%20%26%20CO&query_place_id=ChIJb9PKRJfLWTkR4nf9q01IBws',
    aboutDesc: "J H Jasani & Co is a distinguished CA firm at RK Prime, Rajkot. We deliver precise, professional chartered accountancy services with a client-first approach.",
    ctaTitle: 'Get Expert <span class="text-gradient">CA Services</span>',
    ctaSub: 'Contact J H Jasani & Co. Precision, integrity, results.',
  },
  {
    slug: 'ca-kb-madhani', name: 'CA K B Madhani & Associates', shortName: 'KBMadhani',
    tagline: 'Precise Financial<br><span class="text-gradient">Solutions.</span>',
    subtitle: "Expert CA services near Mavdi Circle, Rajkot. Audit, taxation, GST, and business advisory with personalized attention.",
    category: 'ca', icon: '🎯', rating: 4.9, reviews: 36,
    phone: '+919724684083', waNum: '919724684083',
    address: 'Office No 419, R K Empire, Near Mavdi Circle, 150 Feet Ring Rd, Rajkot 360004',
    addressShort: 'Mavdi Circle, Rajkot 360004',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=CA%20K%20B%20MADHANI&query_place_id=ChIJQV5kvsXLWTkRq2Ce-9Rm2FE',
    aboutDesc: "CA K B Madhani & Associates near Mavdi Circle provides focused, expert financial services. Every client receives personalized attention and strategic guidance.",
    ctaTitle: 'Schedule Your <span class="text-gradient">Meeting</span>',
    ctaSub: 'Contact CA K B Madhani & Associates. Precise solutions for your financial needs.',
  },
  {
    slug: 'dudhatra-and-co', name: 'Dudhatra And Co.', shortName: 'DudhatraCo',
    tagline: 'Reliable CA<br><span class="text-gradient">Partnership.</span>',
    subtitle: "Chartered Accountants at RK Empire, Mavdi, Rajkot. Comprehensive audit, tax planning, and compliance services.",
    category: 'ca', icon: '🤝', rating: 5.0, reviews: 17,
    phone: '+918200099400', waNum: '918200099400',
    address: 'Office No. 418, RK Empire, 150 Feet Ring Rd, Mavdi, Rajkot 360004',
    addressShort: 'Mavdi, Rajkot 360004',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=DUDHATRA%20AND%20CO.&query_place_id=ChIJNYMUvkfLWTkRJ2nf8SqyjM8',
    aboutDesc: "Dudhatra And Co. at RK Empire, Mavdi provides dependable chartered accountancy services. Building lasting partnerships through trust and expertise.",
    ctaTitle: 'Connect With <span class="text-gradient">Dudhatra & Co.</span>',
    ctaSub: 'Contact Dudhatra And Co. Your reliable CA partner in Rajkot.',
  },
  {
    slug: 'sadp-and-co', name: 'S A D P & Co.', shortName: 'SADPCo',
    tagline: 'Professional<br><span class="text-gradient">Financial Services.</span>',
    subtitle: "Certified Public Accountants in Rajkot. Expert audit, taxation, and advisory services with a commitment to excellence.",
    category: 'ca', icon: '📋', rating: 5.0, reviews: 11,
    phone: '', waNum: '',
    address: 'House 5, Collegewadi, B B, near Kathiyawad Gymkhana, Rajkot 360001',
    addressShort: 'Collegewadi, Rajkot 360001',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=S%20A%20D%20P%20%26%20Co.&query_place_id=ChIJC4L0eBLKWTkR192iP1i8Pc0',
    aboutDesc: "S A D P & Co. delivers professional chartered accountancy services in Rajkot. A commitment to excellence, accuracy, and client satisfaction.",
    ctaTitle: 'Get <span class="text-gradient">Expert Advice</span>',
    ctaSub: 'Contact S A D P & Co. for professional financial services you can trust.',
  },
];

// ======================== CATEGORY CONFIGS ========================
const categoryConfig = {
  gym: {
    cssFile: 'gym',
    navItems: ['About', 'Programs', 'Reviews', 'Contact'],
    features: [
      { icon: '🏋️', title: 'Premium Equipment', desc: 'World-class machines and free weights from top brands, maintained to perfection for your ultimate workout.' },
      { icon: '👨‍🏫', title: 'Certified Trainers', desc: 'Expert trainers craft personalized workout plans tailored to your goals — weight loss, muscle gain, or overall fitness.' },
      { icon: '🧘', title: 'Holistic Wellness', desc: 'Beyond weights — enjoy yoga classes, cardio zones, and nutrition guidance for complete transformation.' },
      { icon: '🌟', title: 'Motivating Atmosphere', desc: 'An energetic, clean, and welcoming space that makes every session something you look forward to.' },
    ],
    programs: [
      { num: '01', title: 'Strength Training', desc: 'Build muscle and increase power with comprehensive strength training programs.', tag: 'Most Popular' },
      { num: '02', title: 'Cardio & HIIT', desc: 'Burn calories and boost endurance with high-intensity interval training.', tag: 'Fat Loss' },
      { num: '03', title: 'Personal Training', desc: 'Get one-on-one attention from certified trainers with customized plans.', tag: 'Premium' },
      { num: '04', title: 'Group Fitness', desc: 'Join energetic group classes including Zumba, CrossFit, and functional training.', tag: 'Community' },
      { num: '05', title: 'Weight Loss Program', desc: 'Structured programs combining training, diet, and progress tracking.', tag: 'Transformation' },
      { num: '06', title: 'Yoga & Flexibility', desc: 'Improve flexibility, reduce stress, and find balance with expert-led sessions.', tag: 'Wellness' },
    ],
    servicesTitle: 'Programs', aboutTag: 'Why Choose Us', sectionWord: 'Programs',
    reviews: [
      "Best gym in the area! Amazing equipment and the trainers are very supportive. The atmosphere keeps me motivated every single day.",
      "I've been going here for over a year now. The results speak for themselves. Clean facility, great energy, and professional staff.",
      "Excellent gym with all the latest machines. The personal training program helped me transform completely. Highly recommended!",
    ],
  },
  salon: {
    cssFile: 'salon',
    navItems: ['About', 'Services', 'Reviews', 'Contact'],
    features: [
      { icon: '💇', title: 'Expert Stylists', desc: 'Our skilled team of stylists stay updated with the latest trends to give you the perfect look every time.' },
      { icon: '💅', title: 'Premium Products', desc: 'We use only the finest, internationally renowned beauty products for exceptional results.' },
      { icon: '🧖', title: 'Relaxing Experience', desc: 'Step into a luxurious ambiance designed to pamper you from the moment you walk in.' },
      { icon: '⭐', title: 'Customer Satisfaction', desc: 'Our consistently high ratings speak for themselves. Your satisfaction is our top priority.' },
    ],
    programs: [
      { num: '01', title: 'Hair Styling & Cuts', desc: 'Trendy cuts, layers, and styles crafted by expert stylists for your perfect look.', tag: 'Most Popular' },
      { num: '02', title: 'Hair Coloring', desc: 'From highlights to global colors, balayage to ombre — vibrant, lasting color.', tag: 'Trending' },
      { num: '03', title: 'Bridal Makeup', desc: 'Stunning bridal and occasion makeup that makes you the center of attention.', tag: 'Premium' },
      { num: '04', title: 'Skin Care', desc: 'Facials, cleanups, and skin treatments for a radiant, glowing complexion.', tag: 'Glow' },
      { num: '05', title: 'Hair Treatments', desc: 'Keratin, smoothening, spa treatments to restore and rejuvenate your hair.', tag: 'Repair' },
      { num: '06', title: 'Grooming Services', desc: 'Complete grooming including manicure, pedicure, threading, and waxing.', tag: 'Complete' },
    ],
    servicesTitle: 'Services', aboutTag: 'Why Choose Us', sectionWord: 'Services',
    reviews: [
      "Absolutely love this salon! The stylists are incredibly talented and the ambiance is so relaxing. Best salon experience ever!",
      "Got my hair colored here and the results are stunning. They use top quality products and the staff is very professional.",
      "From haircuts to facials, everything is top-notch. The salon is clean, the team is friendly, and the results are always perfect.",
    ],
  },
  dental: {
    cssFile: 'dental',
    navItems: ['About', 'Services', 'Reviews', 'Contact'],
    features: [
      { icon: '🦷', title: 'Advanced Technology', desc: 'State-of-the-art dental equipment and digital imaging for precise, comfortable treatments.' },
      { icon: '👨‍⚕️', title: 'Expert Specialists', desc: 'Highly qualified dental professionals with years of experience across all specializations.' },
      { icon: '💊', title: 'Painless Procedures', desc: 'Modern techniques ensure comfortable, anxiety-free dental experiences for every patient.' },
      { icon: '🏆', title: 'Trusted Care', desc: 'Consistently high ratings from patients who trust us with their dental health.' },
    ],
    programs: [
      { num: '01', title: 'General Dentistry', desc: 'Comprehensive checkups, cleanings, and preventive care for the whole family.', tag: 'Essential' },
      { num: '02', title: 'Dental Implants', desc: 'Permanent tooth replacement solutions with cutting-edge implant technology.', tag: 'Advanced' },
      { num: '03', title: 'Braces & Aligners', desc: 'Orthodontic treatments including traditional braces and invisible aligners.', tag: 'Popular' },
      { num: '04', title: 'Root Canal Treatment', desc: 'Painless root canal procedures using advanced techniques and equipment.', tag: 'Specialist' },
      { num: '05', title: 'Cosmetic Dentistry', desc: 'Smile makeovers, veneers, and teeth whitening for a dazzling smile.', tag: 'Aesthetic' },
      { num: '06', title: 'Crowns & Bridges', desc: 'Durable, natural-looking dental crowns and bridges for restored functionality.', tag: 'Restorative' },
    ],
    servicesTitle: 'Services', aboutTag: 'Why Choose Us', sectionWord: 'Treatments',
    reviews: [
      "Best dental clinic in the area! The doctor is very skilled and gentle. The entire team made me feel comfortable throughout my treatment.",
      "Had a root canal done here and it was completely painless. The technology they use is very advanced. Highly recommend!",
      "Got my dental implants done here. Excellent work, professional staff, and the clinic is very clean and modern.",
    ],
  },
  photographer: {
    cssFile: 'photographer',
    navItems: ['About', 'Services', 'Reviews', 'Contact'],
    features: [
      { icon: '📸', title: 'Creative Vision', desc: 'Every frame is composed with artistic excellence, capturing the emotion and beauty of your special moments.' },
      { icon: '🎬', title: 'Cinematic Films', desc: 'Wedding films that tell your love story with cinematic quality, stunning visuals, and emotional depth.' },
      { icon: '🖥️', title: 'Professional Editing', desc: 'Advanced post-processing and color grading that transforms photos into timeless works of art.' },
      { icon: '⏰', title: 'Timely Delivery', desc: 'We understand the excitement. Your photos and films are delivered promptly, beautifully packaged.' },
    ],
    programs: [
      { num: '01', title: 'Wedding Photography', desc: 'Complete wedding day coverage capturing every precious moment and emotion.', tag: 'Most Popular' },
      { num: '02', title: 'Pre-Wedding Shoots', desc: 'Romantic pre-wedding photoshoots at stunning locations with creative concepts.', tag: 'Trending' },
      { num: '03', title: 'Wedding Films', desc: 'Cinematic wedding videos that tell your love story in the most beautiful way.', tag: 'Cinematic' },
      { num: '04', title: 'Portrait Photography', desc: 'Individual, couple, and family portraits with professional lighting and composition.', tag: 'Classic' },
      { num: '05', title: 'Event Coverage', desc: 'Corporate events, birthdays, and celebrations captured with professional quality.', tag: 'Events' },
      { num: '06', title: 'Album Design', desc: 'Premium photo albums and prints designed to showcase your memories beautifully.', tag: 'Premium' },
    ],
    servicesTitle: 'Services', aboutTag: 'Why Choose Us', sectionWord: 'Services',
    reviews: [
      "Absolutely stunning photography! They captured our wedding beautifully. Every photo tells a story. Best photographer in the city!",
      "The pre-wedding shoot was magical. The team was professional, creative, and made us feel so comfortable in front of the camera.",
      "Outstanding work! The wedding film brought tears to our eyes. They truly captured the essence and emotion of our special day.",
    ],
  },
  ca: {
    cssFile: 'ca',
    navItems: ['About', 'Services', 'Reviews', 'Contact'],
    features: [
      { icon: '📊', title: 'Expert Advisory', desc: 'Strategic financial guidance from experienced chartered accountants who understand your business needs.' },
      { icon: '🛡️', title: 'Compliance Assured', desc: 'Stay fully compliant with GST, Income Tax, and regulatory requirements with our proactive approach.' },
      { icon: '💼', title: 'Business Growth', desc: 'Beyond compliance — we help you strategize for growth, optimize taxes, and maximize profitability.' },
      { icon: '🤝', title: 'Client-First Approach', desc: 'Personalized attention and transparent communication. Your success is our success.' },
    ],
    programs: [
      { num: '01', title: 'GST Services', desc: 'Complete GST registration, filing, compliance, and advisory services.', tag: 'Essential' },
      { num: '02', title: 'Income Tax', desc: 'Tax planning, ITR filing, and strategic tax optimization for individuals and businesses.', tag: 'Core' },
      { num: '03', title: 'Audit & Assurance', desc: 'Statutory audits, internal audits, and assurance services with thorough analysis.', tag: 'Compliance' },
      { num: '04', title: 'Company Registration', desc: 'Business incorporation, LLP formation, and all company registration services.', tag: 'Startup' },
      { num: '05', title: 'Accounting Services', desc: 'Bookkeeping, financial statements, and management accounting for your business.', tag: 'Ongoing' },
      { num: '06', title: 'Business Advisory', desc: 'Strategic consulting, financial planning, and growth advisory for businesses.', tag: 'Growth' },
    ],
    servicesTitle: 'Services', aboutTag: 'Why Choose Us', sectionWord: 'Services',
    reviews: [
      "Excellent CA firm! Very professional and knowledgeable. They handle all our tax and compliance needs efficiently. Highly recommended.",
      "Best CA in Rajkot. Their GST and income tax services are top-notch. Always available for queries and very responsive.",
      "They've been handling our company's accounts for years. Trustworthy, professional, and always up-to-date with the latest regulations.",
    ],
  },
};

// ======================== CSS TEMPLATES ========================
const cssTemplates = {
  gym: null, // Already created
  salon: `/* ===== SALON DESIGN TOKENS ===== */
:root{--primary:#D4A574;--primary-dark:#c4905e;--primary-glow:rgba(212,165,116,0.3);--bg-dark:#0f0a06;--bg-card:#1a1410;--bg-card-hover:#231c14;--text-primary:#fff8f0;--text-secondary:#b8a898;--text-muted:#7a6a5a;--border:#2a2018;--radius:16px;--radius-sm:10px;--shadow:0 8px 32px rgba(0,0,0,0.4);--transition:all .3s cubic-bezier(.4,0,.2,1)}`,
  dental: `/* ===== DENTAL DESIGN TOKENS ===== */
:root{--primary:#4ECDC4;--primary-dark:#3db8b0;--primary-glow:rgba(78,205,196,0.3);--bg-dark:#f8fffe;--bg-card:#ffffff;--bg-card-hover:#f0faf9;--text-primary:#1a2a2a;--text-secondary:#4a6a6a;--text-muted:#8aaa9a;--border:#e0f0ed;--radius:16px;--radius-sm:10px;--shadow:0 8px 32px rgba(0,0,0,0.08);--transition:all .3s cubic-bezier(.4,0,.2,1)}`,
  photographer: `/* ===== PHOTOGRAPHER DESIGN TOKENS ===== */
:root{--primary:#D4AF37;--primary-dark:#c4a030;--primary-glow:rgba(212,175,55,0.3);--bg-dark:#0a0a12;--bg-card:#111118;--bg-card-hover:#1a1a24;--text-primary:#f0ece0;--text-secondary:#a0a0a0;--text-muted:#666666;--border:#222230;--radius:16px;--radius-sm:10px;--shadow:0 8px 32px rgba(0,0,0,0.4);--transition:all .3s cubic-bezier(.4,0,.2,1)}`,
  ca: `/* ===== CA DESIGN TOKENS ===== */
:root{--primary:#2E8B57;--primary-dark:#267349;--primary-glow:rgba(46,139,87,0.3);--bg-dark:#f5f7fa;--bg-card:#ffffff;--bg-card-hover:#f0f4f2;--text-primary:#1a2a3a;--text-secondary:#4a5a6a;--text-muted:#8a9aaa;--border:#e0e8ec;--radius:16px;--radius-sm:10px;--shadow:0 8px 32px rgba(0,0,0,0.08);--transition:all .3s cubic-bezier(.4,0,.2,1)}`,
};

// ======================== GENERATE FULL CSS ========================
function generateCSS(category) {
  const isLight = (category === 'dental' || category === 'ca');
  const tokens = cssTemplates[category];
  const gradientColors = {
    gym: 'var(--primary), #00ff88',
    salon: 'var(--primary), #F0C987',
    dental: 'var(--primary), #45B7D1',
    photographer: 'var(--primary), #FFD700',
    ca: 'var(--primary), #3CB371',
  };
  const gradient = gradientColors[category];

  // For light themes, adjust overlay and text
  const heroOverlayBg = isLight
    ? `linear-gradient(180deg,rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.4) 40%,rgba(0,0,0,0.75) 100%)`
    : `linear-gradient(180deg,rgba(10,10,10,0.7) 0%,rgba(10,10,10,0.5) 40%,rgba(10,10,10,0.85) 100%)`;
  const navScrolledBg = isLight ? 'rgba(255,255,255,0.97)' : 'rgba(10,10,10,0.95)';
  const navScrolledBorder = isLight ? 'var(--border)' : 'var(--border)';
  const heroTextColor = '#ffffff'; // Hero always white text on dark overlay
  const footerBg = isLight ? '#1a2a3a' : '';

  return `${tokens}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{font-family:'Outfit',sans-serif;background:var(--bg-dark);color:var(--text-primary);line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
a{text-decoration:none;color:inherit;transition:var(--transition)}
img{max-width:100%;height:auto;display:block}
.container{max-width:1200px;margin:0 auto;padding:0 24px}
.text-gradient{background:linear-gradient(135deg,${gradient});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.navbar{position:fixed;top:0;left:0;right:0;z-index:1000;padding:20px 0;transition:var(--transition)}
.navbar.scrolled{background:${navScrolledBg};backdrop-filter:blur(20px);padding:12px 0;border-bottom:1px solid ${navScrolledBorder}${isLight ? ';box-shadow:0 2px 20px rgba(0,0,0,0.08)' : ''}}
.nav-container{display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:8px;font-weight:700;font-size:1.4rem${isLight ? ';color:var(--text-primary)' : ''}}
.navbar:not(.scrolled) .logo{color:#fff}
.logo-icon{font-size:1.6rem}
.logo-highlight{color:var(--primary)}
.nav-links{display:flex;list-style:none;gap:32px}
.nav-links a{font-weight:500;font-size:.95rem;color:${isLight ? 'var(--text-secondary)' : 'var(--text-secondary)'};position:relative;padding:4px 0}
.navbar:not(.scrolled) .nav-links a{color:rgba(255,255,255,0.8)}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--primary);transition:var(--transition)}
.nav-links a:hover{color:${isLight ? 'var(--text-primary)' : 'var(--text-primary)'}}
.nav-links a:hover::after{width:100%}
.nav-cta{background:var(--primary);color:${isLight ? '#fff' : '#000'};font-weight:600;padding:10px 24px;border-radius:50px;font-size:.9rem;transition:var(--transition)}
.navbar:not(.scrolled) .nav-cta{background:var(--primary);color:${isLight ? '#fff' : '#000'}}
.nav-cta:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:0 4px 20px var(--primary-glow)}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px}
.hamburger span{width:24px;height:2px;background:var(--text-primary);transition:var(--transition)}
.navbar:not(.scrolled) .hamburger span{background:#fff}
.hamburger.active span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.hamburger.active span:nth-child(2){opacity:0}
.hamburger.active span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.hero{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;z-index:0}
.hero-bg img{width:100%;height:100%;object-fit:cover;transform:scale(1.05);animation:heroZoom 20s ease-in-out infinite alternate}
@keyframes heroZoom{from{transform:scale(1.05)}to{transform:scale(1.15)}}
.hero-overlay{position:absolute;inset:0;background:${heroOverlayBg}}
.hero-content{position:relative;z-index:1;text-align:center;padding:120px 24px 80px;max-width:800px;color:#fff}
.hero-badge{display:inline-block;background:rgba(${isLight ? '78,205,196' : '57,255,20'},.15);border:1px solid rgba(${isLight ? '78,205,196' : '57,255,20'},.3);padding:8px 20px;border-radius:50px;font-size:.85rem;font-weight:500;color:var(--primary);margin-bottom:24px;animation:fadeInUp .8s ease-out}
.hero h1{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:800;line-height:1.1;margin-bottom:20px;color:#fff;animation:fadeInUp .8s ease-out .2s both}
.hero h1 .text-gradient{-webkit-text-fill-color:transparent}
.hero-subtitle{font-size:1.1rem;color:rgba(255,255,255,.8);max-width:600px;margin:0 auto 32px;animation:fadeInUp .8s ease-out .4s both}
.hero-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;animation:fadeInUp .8s ease-out .6s both}
.hero-stats{display:flex;gap:48px;justify-content:center;margin-top:48px;padding-top:32px;border-top:1px solid rgba(255,255,255,.15);animation:fadeInUp .8s ease-out .8s both}
.stat{text-align:center}
.stat-number{font-size:2.2rem;font-weight:800;color:var(--primary)}
.stat-plus{font-size:1.5rem;font-weight:700;color:var(--primary)}
.stat-label{display:block;font-size:.85rem;color:rgba(255,255,255,.6);margin-top:4px}
.scroll-indicator{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);animation:bounce 2s ease-in-out infinite}
.scroll-arrow{width:24px;height:24px;border-right:2px solid var(--primary);border-bottom:2px solid var(--primary);transform:rotate(45deg);opacity:.6}
@keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:50px;font-weight:600;font-size:.95rem;cursor:pointer;border:none;transition:var(--transition)}
.btn-primary{background:var(--primary);color:${isLight ? '#fff' : '#000'}}
.btn-primary:hover{background:var(--primary-dark);transform:translateY(-2px);box-shadow:0 8px 24px var(--primary-glow)}
.btn-secondary{background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25)}
.btn-secondary:hover{background:rgba(255,255,255,.2);transform:translateY(-2px)}
.btn-outline{background:transparent;border:2px solid var(--primary);color:var(--primary);padding:12px 24px}
.btn-outline:hover{background:var(--primary);color:${isLight ? '#fff' : '#000'}}
.btn-whatsapp{background:#25D366;color:#fff}
.btn-whatsapp:hover{background:#1fb855;transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,211,102,.3)}
.btn-large{padding:18px 36px;font-size:1.05rem}
.section-header{text-align:center;margin-bottom:56px}
.section-tag{display:inline-block;background:rgba(${isLight ? '46,139,87' : '57,255,20'},.1);color:var(--primary);padding:6px 16px;border-radius:50px;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:16px}
.section-header h2{font-size:clamp(2rem,4vw,3rem);font-weight:800;line-height:1.2;margin-bottom:16px}
.section-desc{font-size:1.05rem;color:var(--text-secondary);max-width:600px;margin:0 auto}
.about{padding:100px 0;background:${isLight ? 'var(--bg-dark)' : 'linear-gradient(180deg,var(--bg-dark),#0d0d0d)'}}
.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
.feature-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:36px 28px;transition:var(--transition);opacity:0;transform:translateY(30px)${isLight ? ';box-shadow:0 2px 12px rgba(0,0,0,0.06)' : ''}}
.feature-card.animate-in{opacity:1;transform:translateY(0)}
.feature-card:hover{border-color:var(--primary-glow);transform:translateY(-4px);box-shadow:0 12px 40px ${isLight ? 'rgba(0,0,0,0.1)' : 'rgba(57,255,20,0.08)'}}
.feature-icon{font-size:2.4rem;margin-bottom:16px}
.feature-card h3{font-size:1.2rem;font-weight:700;margin-bottom:10px}
.feature-card p{color:var(--text-secondary);font-size:.92rem;line-height:1.6}
.services{padding:100px 0;background:${isLight ? '#f0f5f3' : '#0d0d0d'}}
.programs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px}
.program-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:36px 28px;position:relative;overflow:hidden;transition:var(--transition);opacity:0;transform:translateY(30px)${isLight ? ';box-shadow:0 2px 12px rgba(0,0,0,0.06)' : ''}}
.program-card.animate-in{opacity:1;transform:translateY(0)}
.program-card:hover{border-color:var(--primary-glow);transform:translateY(-4px)}
.program-number{font-size:4rem;font-weight:900;color:rgba(${isLight ? '46,139,87' : '57,255,20'},.08);position:absolute;top:12px;right:20px;line-height:1}
.program-card h3{font-size:1.25rem;font-weight:700;margin-bottom:10px}
.program-card p{color:var(--text-secondary);font-size:.92rem;margin-bottom:16px}
.program-tag{display:inline-block;background:rgba(${isLight ? '46,139,87' : '57,255,20'},.1);color:var(--primary);padding:4px 12px;border-radius:50px;font-size:.75rem;font-weight:600}
.reviews{padding:100px 0;background:${isLight ? 'var(--bg-dark)' : 'linear-gradient(180deg,#0d0d0d,var(--bg-dark))'}}
.reviews-showcase{display:grid;grid-template-columns:1fr 2fr;gap:40px;align-items:start}
.review-big-rating{text-align:center;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:48px 32px;position:sticky;top:100px${isLight ? ';box-shadow:0 4px 20px rgba(0,0,0,0.08)' : ''}}
.big-number{font-size:5rem;font-weight:900;color:var(--primary);line-height:1}
.stars{font-size:1.5rem;color:#FFD700;margin:12px 0}
.review-big-rating p{color:var(--text-secondary);font-size:.9rem;margin-bottom:20px}
.reviews-list{display:flex;flex-direction:column;gap:20px}
.review-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;transition:var(--transition);opacity:0;transform:translateY(20px)${isLight ? ';box-shadow:0 2px 12px rgba(0,0,0,0.06)' : ''}}
.review-card.animate-in{opacity:1;transform:translateY(0)}
.review-card:hover{border-color:var(--primary-glow)}
.review-stars{color:#FFD700;margin-bottom:12px;font-size:1.1rem}
.review-card p{color:var(--text-secondary);font-size:.95rem;font-style:italic;margin-bottom:12px}
.review-author{color:var(--text-muted);font-size:.85rem;font-weight:500}
.location{padding:100px 0}
.location-grid{display:grid;grid-template-columns:1.5fr 1fr;gap:32px;align-items:start}
.map-container{border-radius:var(--radius);overflow:hidden;border:1px solid var(--border)${isLight ? ';box-shadow:0 4px 20px rgba(0,0,0,0.08)' : ''}}
.location-info{display:flex;flex-direction:column;gap:16px}
.info-card{display:flex;gap:16px;align-items:flex-start;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:20px;transition:var(--transition);opacity:0;transform:translateX(20px)${isLight ? ';box-shadow:0 2px 12px rgba(0,0,0,0.06)' : ''}}
.info-card.animate-in{opacity:1;transform:translateX(0)}
.info-card:hover{border-color:var(--primary-glow)}
.info-icon{font-size:1.5rem;flex-shrink:0}
.info-card h4{font-size:.85rem;color:var(--primary);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px}
.info-card p{color:var(--text-secondary);font-size:.9rem}
.info-card a{color:var(--primary)}
.info-card a:hover{text-decoration:underline}
.cta{padding:100px 0;background:${isLight ? '#f0f5f3' : 'linear-gradient(180deg,var(--bg-dark),#050505)'}}
.cta-content{text-align:center;background:${isLight ? 'var(--bg-card)' : 'linear-gradient(135deg,rgba(57,255,20,.05),rgba(0,255,136,.03))'};border:1px solid ${isLight ? 'var(--border)' : 'rgba(57,255,20,.15)'};border-radius:24px;padding:72px 48px${isLight ? ';box-shadow:0 8px 40px rgba(0,0,0,0.08)' : ''}}
.cta-content h2{font-size:clamp(2rem,4vw,3rem);font-weight:800;margin-bottom:16px}
.cta-content p{color:var(--text-secondary);font-size:1.1rem;max-width:500px;margin:0 auto 32px}
.cta-actions{display:flex;gap:16px;justify-content:center;flex-wrap:wrap}
.footer{padding:48px 0 24px;border-top:1px solid var(--border);background:${isLight ? '#1a2a3a' : ''};color:${isLight ? '#fff' : ''}}
.footer-content{display:grid;grid-template-columns:1fr 1fr 1fr;gap:32px;align-items:start;padding-bottom:32px;border-bottom:1px solid ${isLight ? 'rgba(255,255,255,.15)' : 'var(--border)'}}
.footer-brand p{color:${isLight ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'};margin-top:8px;font-size:.9rem}
.footer-links{display:flex;flex-direction:column;gap:8px;align-items:center}
.footer-links a{color:${isLight ? 'rgba(255,255,255,.7)' : 'var(--text-secondary)'};font-size:.9rem}
.footer-links a:hover{color:var(--primary)}
.footer-address{text-align:right}
.footer-address p{color:${isLight ? 'rgba(255,255,255,.7)' : 'var(--text-secondary)'};font-size:.9rem;margin-bottom:8px}
.footer-address a{color:var(--primary)}
.footer-bottom{padding-top:24px;text-align:center}
.footer-bottom p{color:${isLight ? 'rgba(255,255,255,.4)' : 'var(--text-muted)'};font-size:.8rem}
.whatsapp-float{position:fixed;bottom:24px;right:24px;width:60px;height:60px;border-radius:50%;background:#25D366;z-index:999;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.4);animation:pulse 2s ease-in-out infinite;transition:var(--transition)}
.whatsapp-float:hover{transform:scale(1.1);box-shadow:0 6px 28px rgba(37,211,102,.6)}
@keyframes pulse{0%,100%{box-shadow:0 4px 20px rgba(37,211,102,.4)}50%{box-shadow:0 4px 30px rgba(37,211,102,.7)}}
@keyframes fadeInUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:968px){.reviews-showcase{grid-template-columns:1fr}.review-big-rating{position:static}.location-grid{grid-template-columns:1fr}.footer-content{grid-template-columns:1fr;text-align:center}.footer-address{text-align:center}.footer-links{align-items:center}}
@media(max-width:768px){.nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:${isLight ? 'rgba(255,255,255,.98)' : 'rgba(10,10,10,.98)'};backdrop-filter:blur(20px);flex-direction:column;padding:24px;gap:16px;border-bottom:1px solid var(--border)}.nav-links.active{display:flex}.nav-cta{display:none}.hamburger{display:flex}.hero-stats{flex-direction:column;gap:20px}.programs-grid{grid-template-columns:1fr}.cta-content{padding:48px 24px}}`;
}

// ======================== HTML TEMPLATE ========================
function generateHTML(biz) {
  const cat = categoryConfig[biz.category];
  const phoneDisplay = biz.phone ? biz.phone.replace('+91', '+91 ') : '';
  const phoneClean = biz.phone || '';
  const hasPhone = biz.phone && biz.phone.length > 3;
  const hasWA = biz.waNum && biz.waNum.length > 3;

  const phoneSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`;
  const waSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  const phoneSVG22 = phoneSVG.replace(/20/g, '22');
  const waSVG22 = waSVG.replace(/20/g, '22');
  const waSVG28 = waSVG.replace(/20/g, '28');

  const heroButtons = [];
  if (hasPhone) heroButtons.push(`<a href="tel:${phoneClean}" class="btn btn-primary" id="hero-call-btn">${phoneSVG}Call Now</a>`);
  if (hasWA) heroButtons.push(`<a href="https://wa.me/${biz.waNum}" class="btn btn-secondary" id="hero-whatsapp-btn" target="_blank">${waSVG}WhatsApp</a>`);

  const ctaButtons = [];
  if (hasPhone) ctaButtons.push(`<a href="tel:${phoneClean}" class="btn btn-primary btn-large" id="cta-call-btn">${phoneSVG22}Call: ${phoneDisplay}</a>`);
  if (hasWA) ctaButtons.push(`<a href="https://wa.me/${biz.waNum}" class="btn btn-whatsapp btn-large" id="cta-whatsapp-btn" target="_blank">${waSVG22}WhatsApp Us</a>`);

  const contactCards = [];
  contactCards.push(`<div class="info-card"><div class="info-icon">📍</div><div><h4>Address</h4><p>${biz.address}</p></div></div>`);
  if (hasPhone) contactCards.push(`<div class="info-card"><div class="info-icon">📞</div><div><h4>Phone</h4><p><a href="tel:${phoneClean}">${phoneDisplay}</a></p></div></div>`);
  contactCards.push(`<div class="info-card"><div class="info-icon">⏰</div><div><h4>Hours</h4><p>Mon–Sat: ${biz.category === 'ca' ? '10:00 AM – 7:00 PM' : biz.category === 'dental' ? '9:00 AM – 8:00 PM' : biz.category === 'salon' ? '10:00 AM – 9:00 PM' : biz.category === 'photographer' ? '9:00 AM – 9:00 PM' : '5:30 AM – 10:00 PM'}<br>Sunday: ${biz.category === 'ca' ? 'By Appointment' : biz.category === 'dental' ? 'By Appointment' : 'Closed'}</p></div></div>`);
  if (hasWA) contactCards.push(`<div class="info-card"><div class="info-icon">💬</div><div><h4>WhatsApp</h4><p><a href="https://wa.me/${biz.waNum}" target="_blank">Chat with us instantly</a></p></div></div>`);

  const statLabels = {
    gym: ['Happy Members', 'Expert Trainers', 'Equipment Types'],
    salon: ['Happy Clients', 'Expert Stylists', 'Services Offered'],
    dental: ['Happy Patients', 'Dental Experts', 'Treatments'],
    photographer: ['Happy Clients', 'Years Experience', 'Photo Shoots'],
    ca: ['Happy Clients', 'Years Experience', 'Services'],
  };
  const stats = statLabels[biz.category];
  const statNums = [biz.reviews, biz.category==='gym'?10:biz.category==='salon'?8:biz.category==='dental'?5:biz.category==='photographer'?8:10, biz.category==='gym'?40:biz.category==='salon'?25:biz.category==='dental'?20:biz.category==='photographer'?500:15];

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${biz.name} | ${biz.address.split(',').slice(-2).join(',').trim()}</title>
    <meta name="description" content="${biz.name} — ${biz.subtitle.replace(/"/g, '&quot;')}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="#" class="logo"><span class="logo-icon">${biz.icon}</span><span class="logo-text">${biz.shortName.replace(/([A-Z])/g, '<span class="logo-highlight">$1</span>').replace('<span class="logo-highlight">' + biz.shortName[0] + '</span>', biz.shortName[0])}</span></a>
            <ul class="nav-links" id="navLinks">
                ${cat.navItems.map(item => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`).join('\n                ')}
            </ul>
            ${hasPhone ? `<a href="tel:${phoneClean}" class="nav-cta">${biz.category === 'ca' ? 'Consult Now' : biz.category === 'dental' ? 'Book Now' : biz.category === 'photographer' ? 'Book Now' : biz.category === 'salon' ? 'Book Now' : 'Join Now'}</a>` : ''}
            <button class="hamburger" id="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
    </nav>

    <section class="hero" id="hero">
        <div class="hero-bg"><img src="assets/hero.png" alt="${biz.name}" loading="eager"><div class="hero-overlay"></div></div>
        <div class="container hero-content">
            <div class="hero-badge">⭐ ${biz.rating} Rating · ${biz.reviews.toLocaleString()} Reviews</div>
            <h1>${biz.tagline}</h1>
            <p class="hero-subtitle">${biz.subtitle}</p>
            <div class="hero-actions">${heroButtons.join('\n                ')}</div>
            <div class="hero-stats">
                <div class="stat"><span class="stat-number" data-target="${statNums[0]}">0</span><span class="stat-plus">+</span><span class="stat-label">${stats[0]}</span></div>
                <div class="stat"><span class="stat-number" data-target="${statNums[1]}">0</span><span class="stat-plus">+</span><span class="stat-label">${stats[1]}</span></div>
                <div class="stat"><span class="stat-number" data-target="${statNums[2]}">0</span><span class="stat-plus">+</span><span class="stat-label">${stats[2]}</span></div>
            </div>
        </div>
        <div class="scroll-indicator"><div class="scroll-arrow"></div></div>
    </section>

    <section class="about" id="about">
        <div class="container">
            <div class="section-header">
                <span class="section-tag">${cat.aboutTag}</span>
                <h2>About <span class="text-gradient">${biz.name}</span></h2>
                <p class="section-desc">${biz.aboutDesc}</p>
            </div>
            <div class="features-grid">
                ${cat.features.map(f => `<div class="feature-card"><div class="feature-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.desc}</p></div>`).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <div class="section-header"><span class="section-tag">Our ${cat.servicesTitle}</span><h2>Our <span class="text-gradient">${cat.sectionWord}</span></h2></div>
            <div class="programs-grid">
                ${cat.programs.map(p => `<div class="program-card"><div class="program-number">${p.num}</div><h3>${p.title}</h3><p>${p.desc}</p><div class="program-tag">${p.tag}</div></div>`).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="reviews" id="reviews">
        <div class="container">
            <div class="section-header"><span class="section-tag">Testimonials</span><h2>What Our ${biz.category === 'gym' ? 'Members' : biz.category === 'dental' ? 'Patients' : 'Clients'} <span class="text-gradient">Say</span></h2></div>
            <div class="reviews-showcase">
                <div class="review-big-rating">
                    <div class="big-number">${biz.rating}</div><div class="stars">★★★★★</div>
                    <p>Based on ${biz.reviews.toLocaleString()} Google Reviews</p>
                    <a href="${biz.mapsUrl}" class="btn btn-outline" target="_blank">See All Reviews</a>
                </div>
                <div class="reviews-list">
                    ${cat.reviews.map(r => `<div class="review-card"><div class="review-stars">★★★★★</div><p>"${r}"</p><div class="review-author">— Verified Google Reviewer</div></div>`).join('\n                    ')}
                </div>
            </div>
        </div>
    </section>

    <section class="location" id="location">
        <div class="container">
            <div class="section-header"><span class="section-tag">Find Us</span><h2>Visit <span class="text-gradient">${biz.name}</span></h2></div>
            <div class="location-grid">
                <div class="map-container"><iframe src="https://maps.google.com/maps?q=${encodeURIComponent(biz.address)}&output=embed" width="100%" height="400" style="border:0; border-radius: 16px;" allowfullscreen="" loading="lazy"></iframe></div>
                <div class="location-info">${contactCards.join('\n                    ')}</div>
            </div>
        </div>
    </section>

    <section class="cta" id="contact">
        <div class="container"><div class="cta-content">
            <h2>${biz.ctaTitle}</h2>
            <p>${biz.ctaSub}</p>
            <div class="cta-actions">${ctaButtons.join('\n                ')}</div>
        </div></div>
    </section>

    <footer class="footer"><div class="container"><div class="footer-content"><div class="footer-brand"><span class="logo-icon">${biz.icon}</span><span class="logo-text" style="color:${biz.category==='dental'||biz.category==='ca'?'#fff':'inherit'}">${biz.name}</span><p>${biz.subtitle.split('.')[0]}</p></div><div class="footer-links">${cat.navItems.map(item => `<a href="#${item.toLowerCase()}">${item}</a>`).join('')}</div><div class="footer-address"><p>${biz.addressShort}</p>${hasPhone ? `<p><a href="tel:${phoneClean}">${phoneDisplay}</a></p>` : ''}</div></div><div class="footer-bottom"><p>© 2025 ${biz.name}. All rights reserved.</p></div></div></footer>

    ${hasWA ? `<a href="https://wa.me/${biz.waNum}" class="whatsapp-float" id="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">${waSVG28.replace('currentColor', 'white')}</a>` : ''}

    <script>
        window.addEventListener('scroll',()=>{const n=document.getElementById('navbar');n.classList.toggle('scrolled',window.scrollY>50)});
        document.getElementById('hamburger').addEventListener('click',()=>{document.getElementById('navLinks').classList.toggle('active');document.getElementById('hamburger').classList.toggle('active')});
        document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t){t.scrollIntoView({behavior:'smooth',block:'start'});document.getElementById('navLinks').classList.remove('active');document.getElementById('hamburger').classList.remove('active')}})});
        const animateCounters=()=>{document.querySelectorAll('.stat-number').forEach(c=>{const t=+c.getAttribute('data-target');const i=t/60;let cur=0;const u=()=>{cur+=i;if(cur<t){c.textContent=Math.ceil(cur);requestAnimationFrame(u)}else{c.textContent=t.toLocaleString()}};u()})};
        const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-in');if(e.target.classList.contains('hero'))animateCounters()}})},{threshold:0.1});
        document.querySelectorAll('.hero,.feature-card,.program-card,.review-card,.info-card').forEach(el=>observer.observe(el));
    </script>
</body>
</html>`;
}

// ======================== GENERATE ALL SITES ========================
let count = 0;
businesses.forEach(biz => {
  const dir = path.join(BASE, biz.slug);

  // Skip fitness-pulse-gym and klean-fit-iconic (already created manually)
  if (biz.slug === 'fitness-pulse-gym' || biz.slug === 'klean-fit-iconic') {
    // But still generate CSS if not gym
    count++;
    return;
  }

  // Write HTML
  fs.writeFileSync(path.join(dir, 'index.html'), generateHTML(biz));

  // Write CSS (use gym CSS for gym sites, generate for others)
  if (biz.category === 'gym') {
    // Copy the gym CSS
    fs.copyFileSync(
      path.join(BASE, 'fitness-pulse-gym', 'style.css'),
      path.join(dir, 'style.css')
    );
  } else {
    fs.writeFileSync(path.join(dir, 'style.css'), generateCSS(biz.category));
  }

  count++;
  console.log(`✅ ${count}/${businesses.length} — ${biz.name}`);
});

console.log(`\n🎉 All ${count} sites generated successfully!`);
