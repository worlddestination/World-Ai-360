// =============================================
//  WORLD AI 360 — Destinations Data
//  js/data.js
// =============================================

const DESTINATIONS = {
  Trending: [
    {
      id: 'paris', name: 'Paris', country: 'France', emoji: '🗼',
      type: 'City', price: '₹85,000', budget: 'High', rating: '4.8',
      best: 'Apr–Jun', peak: [3,4,5,8,9], good: [0,1,2,6,7,10],
      desc: 'The City of Light — romance, world-class art, legendary cuisine and the iconic Eiffel Tower.',
      tags: ['Romantic','Culture','Food'],
      budget_per_day: '₹8,000–15,000', visa: 'Schengen Visa',
      lang: 'French', currency: 'Euro (€)', flight: '9–10 hrs from Delhi',
      stay_tip: 'Stay in Le Marais for authentic Parisian vibes — walkable and full of cafés.'
    },
    {
      id: 'bali', name: 'Bali', country: 'Indonesia', emoji: '🌴',
      type: 'Beach', price: '₹45,000', budget: 'Medium', rating: '4.9',
      best: 'Apr–Oct', peak: [6,7,8], good: [3,4,5,9,10],
      desc: 'Island of Gods — terraced rice fields, spiritual temples, world-class surf and glowing sunsets.',
      tags: ['Beach','Nature','Spiritual'],
      budget_per_day: '₹3,000–8,000', visa: 'Free 30 days on arrival',
      lang: 'Bahasa / English', currency: 'IDR', flight: '5–6 hrs from Mumbai',
      stay_tip: 'Ubud for culture & rice terraces, Seminyak for beach clubs, Canggu for surf vibes.'
    },
    {
      id: 'kyoto', name: 'Kyoto', country: 'Japan', emoji: '⛩️',
      type: 'Heritage', price: '₹95,000', budget: 'High', rating: '4.9',
      best: 'Mar–May', peak: [2,3,4,10,11], good: [0,1,9],
      desc: 'Ancient temples, graceful geishas, bamboo groves — the spiritual soul of Japan.',
      tags: ['Heritage','Culture','Nature'],
      budget_per_day: '₹6,000–12,000', visa: 'On arrival for Indians (2025)',
      lang: 'Japanese', currency: 'Yen (¥)', flight: '7–8 hrs from Delhi',
      stay_tip: 'Book a ryokan (traditional inn) with onsen for the full Kyoto experience.'
    },
    {
      id: 'santorini', name: 'Santorini', country: 'Greece', emoji: '🌅',
      type: 'Beach', price: '₹1,20,000', budget: 'Luxury', rating: '4.8',
      best: 'May–Sep', peak: [6,7,8], good: [4,5,9],
      desc: 'White-washed cliffside villages, volcanic beaches, caldera views and legendary golden sunsets.',
      tags: ['Romantic','Luxury','Beach'],
      budget_per_day: '₹10,000–25,000', visa: 'Schengen Visa',
      lang: 'Greek / English', currency: 'Euro (€)', flight: '9–11 hrs',
      stay_tip: 'Stay in Oia village — the sunsets here are the best on the island.'
    },
    {
      id: 'maldives', name: 'Maldives', country: 'Maldives', emoji: '🏝️',
      type: 'Beach', price: '₹1,50,000', budget: 'Luxury', rating: '5.0',
      best: 'Nov–Apr', peak: [11,0,1,2,3], good: [4,10],
      desc: 'Overwater bungalows, crystal-clear lagoons, vibrant coral reefs — absolute paradise on Earth.',
      tags: ['Luxury','Beach','Romantic'],
      budget_per_day: '₹20,000–60,000', visa: 'Free 30 days',
      lang: 'Dhivehi / English', currency: 'MVR / USD', flight: '2–3 hrs from Mumbai',
      stay_tip: 'Choose North Malé Atoll resorts for the best snorkelling and reef access.'
    },
    {
      id: 'petra', name: 'Petra', country: 'Jordan', emoji: '🏛️',
      type: 'Heritage', price: '₹70,000', budget: 'Medium', rating: '4.8',
      best: 'Mar–May', peak: [2,3,4], good: [9,10,11],
      desc: 'The rose-red city carved in rock — one of the greatest archaeological wonders of the world.',
      tags: ['Heritage','Adventure'],
      budget_per_day: '₹5,000–9,000', visa: 'Jordan Pass recommended',
      lang: 'Arabic / English', currency: 'JOD', flight: '5–6 hrs',
      stay_tip: 'Arrive at dawn before 7am to have the Treasury almost entirely to yourself.'
    },
  ],

  Budget: [
    {
      id: 'vietnam', name: 'Vietnam', country: 'Vietnam', emoji: '🛵',
      type: 'City', price: '₹35,000', budget: 'Low', rating: '4.7',
      best: 'Nov–Apr', peak: [11,0,1,2], good: [3,4,10],
      desc: 'Street food heaven, UNESCO World Heritage bays, French colonial cities and misty highlands.',
      tags: ['Budget','Food','Adventure'],
      budget_per_day: '₹2,000–4,000', visa: 'E-visa required',
      lang: 'Vietnamese / English', currency: 'VND', flight: '4–5 hrs',
      stay_tip: 'Hanoi for culture, Da Nang for beaches, Hoi An for old-town charm.'
    },
    {
      id: 'nepal', name: 'Nepal', country: 'Nepal', emoji: '🏔️',
      type: 'Mountain', price: '₹25,000', budget: 'Low', rating: '4.8',
      best: 'Oct–Nov', peak: [9,10], good: [2,3,4,11],
      desc: 'Himalayas, epic trekking trails, ancient temples and eight of the world\'s ten tallest peaks.',
      tags: ['Adventure','Mountain','Budget'],
      budget_per_day: '₹1,500–4,000', visa: 'On arrival',
      lang: 'Nepali / English', currency: 'NPR', flight: '1.5 hrs from Delhi',
      stay_tip: 'Book trekking permits (TIMS + ACAP) at least 3 months ahead for Annapurna circuit.'
    },
    {
      id: 'thailand', name: 'Thailand', country: 'Thailand', emoji: '🙏',
      type: 'Beach', price: '₹40,000', budget: 'Low', rating: '4.8',
      best: 'Nov–Mar', peak: [11,0,1,2], good: [3,4,10],
      desc: 'Gilded temples, floating markets, island paradise and world-class street food on every corner.',
      tags: ['Beach','Budget','Food'],
      budget_per_day: '₹2,500–6,000', visa: 'Free 30 days',
      lang: 'Thai / English', currency: 'THB', flight: '3–4 hrs from Mumbai',
      stay_tip: 'Avoid visiting Bangkok in April unless you love Songkran — the city-wide water festival!'
    },
    {
      id: 'georgia_c', name: 'Georgia', country: 'Georgia', emoji: '🍷',
      type: 'City', price: '₹38,000', budget: 'Low', rating: '4.7',
      best: 'Apr–Jun', peak: [4,5,8,9], good: [3,6,7,10],
      desc: 'Ancient wine culture, dramatic Caucasus mountains, medieval churches — Europe\'s best-kept secret.',
      tags: ['Hidden','Budget','Wine'],
      budget_per_day: '₹2,500–5,000', visa: 'Free 1 year for Indians',
      lang: 'Georgian / Russian / English', currency: 'GEL', flight: '4–5 hrs',
      stay_tip: 'Try chacha (local brandy) and churchkhela — the walnut-and-grape-juice street snack.'
    },
    {
      id: 'sri_lanka', name: 'Sri Lanka', country: 'Sri Lanka', emoji: '🌿',
      type: 'Nature', price: '₹22,000', budget: 'Low', rating: '4.7',
      best: 'Dec–Mar', peak: [11,0,1,2], good: [3,4,10],
      desc: 'Lush tea estates, ancient Buddhist ruins, pristine beaches and roaming elephants.',
      tags: ['Budget','Nature','Heritage'],
      budget_per_day: '₹2,000–5,000', visa: 'ETA online',
      lang: 'Sinhala / Tamil / English', currency: 'LKR', flight: '2.5 hrs from Chennai',
      stay_tip: 'Kandy → Ella train journey is one of the most scenic rail rides in the world.'
    },
  ],

  Luxury: [
    {
      id: 'dubai', name: 'Dubai', country: 'UAE', emoji: '🌆',
      type: 'City', price: '₹80,000', budget: 'High', rating: '4.7',
      best: 'Oct–Apr', peak: [11,0,1,2,3], good: [9,10,4],
      desc: 'Futuristic skyline, desert safaris, underwater hotels, indoor ski slopes and endless world records.',
      tags: ['Luxury','City','Shopping'],
      budget_per_day: '₹15,000–50,000', visa: 'On arrival',
      lang: 'Arabic / English', currency: 'AED', flight: '3–4 hrs from Mumbai',
      stay_tip: 'A desert safari at golden sunset is the one experience you absolutely cannot skip.'
    },
    {
      id: 'seychelles', name: 'Seychelles', country: 'Seychelles', emoji: '🐠',
      type: 'Beach', price: '₹2,00,000', budget: 'Luxury', rating: '4.9',
      best: 'Apr–May', peak: [0,1,7,8], good: [3,4,9,10],
      desc: 'Pristine granite islands with unique boulder beaches, sea turtles, rare birds and zero crowds.',
      tags: ['Luxury','Beach','Nature'],
      budget_per_day: '₹25,000–80,000', visa: 'Free on arrival',
      lang: 'French / English / Creole', currency: 'SCR', flight: '6–7 hrs',
      stay_tip: 'Visit Vallée de Mai on Praslin Island — it\'s a real-life prehistoric forest.'
    },
    {
      id: 'switzerland', name: 'Switzerland', country: 'Switzerland', emoji: '🏔️',
      type: 'Mountain', price: '₹1,80,000', budget: 'Luxury', rating: '4.9',
      best: 'Jun–Sep', peak: [6,7,8], good: [5,9,11,0,1],
      desc: 'Alpine perfection — Matterhorn, Jungfraujoch, pristine lakes and the most scenic train rides on Earth.',
      tags: ['Luxury','Mountain','Scenic'],
      budget_per_day: '₹15,000–40,000', visa: 'Schengen Visa',
      lang: 'German / French / Italian', currency: 'CHF', flight: '9–10 hrs',
      stay_tip: 'Buy Swiss Travel Pass — covers all trains, buses and most mountain railways.'
    },
  ],

  Hidden: [
    {
      id: 'faroe', name: 'Faroe Islands', country: 'Denmark', emoji: '🌊',
      type: 'Nature', price: '₹1,10,000', budget: 'High', rating: '4.9',
      best: 'Jun–Aug', peak: [5,6,7], good: [4,8],
      desc: 'Dramatic sea cliffs, waterfalls pouring directly into the ocean, puffins, sheep and total silence.',
      tags: ['Hidden','Nature','Adventure'],
      budget_per_day: '₹8,000–18,000', visa: 'Schengen Visa',
      lang: 'Faroese / English', currency: 'DKK', flight: '12+ hrs with layover',
      stay_tip: 'Rent a car — there is almost no public transport to the most spectacular remote spots.'
    },
    {
      id: 'luang', name: 'Luang Prabang', country: 'Laos', emoji: '🏮',
      type: 'Heritage', price: '₹42,000', budget: 'Low', rating: '4.8',
      best: 'Nov–Feb', peak: [11,0,1], good: [2,3,10],
      desc: 'Buddhist monks at dawn, French villas draped in bougainvillea, Mekong sunsets — untouched Southeast Asia.',
      tags: ['Hidden','Heritage','Budget'],
      budget_per_day: '₹2,000–5,000', visa: 'E-visa',
      lang: 'Lao / English', currency: 'LAK', flight: '6–7 hrs with layover',
      stay_tip: 'Wake at 5:30am for the daily alms-giving ceremony (tak bat) — deeply moving to witness.'
    },
    {
      id: 'cappadocia', name: 'Cappadocia', country: 'Turkey', emoji: '🎈',
      type: 'Adventure', price: '₹60,000', budget: 'Medium', rating: '4.9',
      best: 'Apr–Jun', peak: [4,5,9,10], good: [3,6,7],
      desc: 'Fairy chimneys, cave hotels, hot air balloons at sunrise and underground cities carved millennia ago.',
      tags: ['Hidden','Adventure','Romantic'],
      budget_per_day: '₹4,000–10,000', visa: 'E-visa',
      lang: 'Turkish / English', currency: 'TRY', flight: '6–7 hrs',
      stay_tip: 'Book hot air balloon 2–3 months ahead — only about 150 balloons fly daily and they sell out fast.'
    },
  ],

  Solo: [
    {
      id: 'lisbon', name: 'Lisbon', country: 'Portugal', emoji: '🎸',
      type: 'City', price: '₹70,000', budget: 'Medium', rating: '4.8',
      best: 'Mar–May', peak: [5,6,7,8], good: [3,4,9,10],
      desc: 'Trams on hills, fado music, pastel de nata, Moorish castles and the most welcoming city in Europe.',
      tags: ['Solo','City','Budget'],
      budget_per_day: '₹4,000–9,000', visa: 'Schengen Visa',
      lang: 'Portuguese / English', currency: 'Euro (€)', flight: '10–12 hrs',
      stay_tip: 'Stay in Alfama neighborhood — tiny streets, fado bars and views over the Tagus river.'
    },
    {
      id: 'new_zealand', name: 'New Zealand', country: 'New Zealand', emoji: '🥝',
      type: 'Adventure', price: '₹1,40,000', budget: 'High', rating: '4.9',
      best: 'Oct–Apr', peak: [11,0,1,2], good: [3,4,9,10],
      desc: 'Fiordlands, bungee jumping, Lord of the Rings landscapes, Māori culture and insane road trips.',
      tags: ['Solo','Adventure','Nature'],
      budget_per_day: '₹8,000–20,000', visa: 'NZeTA online',
      lang: 'English / Māori', currency: 'NZD', flight: '14–16 hrs',
      stay_tip: 'Rent a campervan for the South Island — it\'s the world\'s greatest road trip.'
    },
  ],

  Family: [
    {
      id: 'singapore', name: 'Singapore', country: 'Singapore', emoji: '🦁',
      type: 'City', price: '₹65,000', budget: 'Medium', rating: '4.8',
      best: 'Feb–Apr', peak: [0,1,2,3], good: [4,5,10,11],
      desc: 'Gardens by the Bay, Universal Studios, hawker food, spotless streets — perfect family holiday.',
      tags: ['Family','City','Food'],
      budget_per_day: '₹6,000–15,000', visa: 'Free 30 days',
      lang: 'English / Mandarin / Malay', currency: 'SGD', flight: '5–6 hrs from Mumbai',
      stay_tip: 'Get the Singapore Tourist Pass for unlimited MRT + buses — saves a lot on transport.'
    },
    {
      id: 'disney_paris', name: 'Disneyland Paris', country: 'France', emoji: '🎢',
      type: 'City', price: '₹1,10,000', budget: 'High', rating: '4.7',
      best: 'Mar–Jun', peak: [3,4,5,6,7], good: [8,9,10],
      desc: 'Two theme parks, Disney magic, parades and unforgettable memories the whole family will cherish.',
      tags: ['Family','Adventure','Luxury'],
      budget_per_day: '₹12,000–30,000', visa: 'Schengen Visa',
      lang: 'French / English', currency: 'Euro (€)', flight: '9–10 hrs',
      stay_tip: 'Book Disney hotels — early park entry 30 mins before opening is worth every rupee.'
    },
  ],

  Monsoon: [
    {
      id: 'kerala', name: 'Kerala', country: 'India', emoji: '🌿',
      type: 'Nature', price: '₹18,000', budget: 'Low', rating: '4.8',
      best: 'Jun–Sep', peak: [6,7,8], good: [9,10,11,0],
      desc: 'God\'s Own Country — backwaters, spice gardens, Ayurveda retreats, waterfalls at their absolute fullest.',
      tags: ['Nature','Monsoon','Wellness'],
      budget_per_day: '₹2,000–6,000', visa: 'Domestic',
      lang: 'Malayalam / English', currency: 'INR', flight: '2–3 hrs from Delhi',
      stay_tip: 'Monsoon is Ayurveda\'s peak season — the damp air maximises treatment effectiveness.'
    },
    {
      id: 'coorg', name: 'Coorg', country: 'India', emoji: '☕',
      type: 'Mountain', price: '₹12,000', budget: 'Low', rating: '4.7',
      best: 'Jun–Sep', peak: [7,8], good: [9,10,11],
      desc: 'Misty coffee estates, cascading waterfalls, tribal culture and the freshest air in South India.',
      tags: ['Nature','Monsoon','Budget'],
      budget_per_day: '₹1,500–4,000', visa: 'Domestic',
      lang: 'Kannada / English', currency: 'INR', flight: 'Drive from Bengaluru (5 hrs)',
      stay_tip: 'Stay at a coffee plantation homestay — wake up to fresh-brewed estate coffee every morning.'
    },
    {
      id: 'meghalaya', name: 'Meghalaya', country: 'India', emoji: '🌧️',
      type: 'Nature', price: '₹15,000', budget: 'Low', rating: '4.8',
      best: 'Jun–Sep', peak: [6,7,8], good: [9,10],
      desc: 'Wettest place on Earth, living root bridges, crystal-clear rivers, cloud forests and cave systems.',
      tags: ['Nature','Monsoon','Adventure'],
      budget_per_day: '₹1,500–3,500', visa: 'Domestic (ILP not needed for most)',
      lang: 'Khasi / Garo / English', currency: 'INR', flight: '2.5 hrs to Guwahati + drive',
      stay_tip: 'Cherrapunji and Mawlynnong (Asia\'s cleanest village) are must-visits together.'
    },
  ],

  Weekend: [
    {
      id: 'goa', name: 'Goa', country: 'India', emoji: '🏄',
      type: 'Beach', price: '₹8,000', budget: 'Low', rating: '4.6',
      best: 'Nov–Mar', peak: [11,0,1,2], good: [10,3],
      desc: 'Sun-soaked beaches, Portuguese heritage, seafood shacks, nightlife and the most relaxed vibe in India.',
      tags: ['Beach','Budget','Weekend'],
      budget_per_day: '₹2,000–8,000', visa: 'Domestic',
      lang: 'Konkani / English / Hindi', currency: 'INR', flight: '1.5 hrs from Mumbai',
      stay_tip: 'North Goa for parties, South Goa for peace — totally different experiences in one state.'
    },
    {
      id: 'pondicherry', name: 'Pondicherry', country: 'India', emoji: '🎨',
      type: 'Heritage', price: '₹6,000', budget: 'Low', rating: '4.5',
      best: 'Oct–Mar', peak: [11,0,1,2], good: [3,4,9,10],
      desc: 'French colonial streets, ashrams, boutique cafés, quiet beaches and a completely unique culture.',
      tags: ['Heritage','Budget','Weekend'],
      budget_per_day: '₹1,500–4,000', visa: 'Domestic',
      lang: 'Tamil / French / English', currency: 'INR', flight: 'Drive from Chennai (3 hrs)',
      stay_tip: 'Rent a cycle and explore the French Quarter at sunrise — it\'s magical before the tourists arrive.'
    },
  ],
};

const REGIONS = [
  { name: 'South Asia',     emoji: '🕌', count: '800+ spots',   color: '#e63946', query: 'top destinations in South Asia India Pakistan Bangladesh Sri Lanka with travel tips and prices for Indians' },
  { name: 'Southeast Asia', emoji: '🌺', count: '1,200+ spots', color: '#2a9d8f', query: 'top destinations in Southeast Asia Thailand Vietnam Bali Philippines with travel tips and prices for Indians' },
  { name: 'Europe',         emoji: '🏰', count: '2,500+ spots', color: '#457b9d', query: 'top destinations in Europe Paris Rome Barcelona Amsterdam with travel tips and prices for Indians' },
  { name: 'Middle East',    emoji: '🌙', count: '600+ spots',   color: '#f4a261', query: 'top destinations in Middle East Dubai Jordan Turkey Egypt with travel tips and prices for Indians' },
  { name: 'Africa',         emoji: '🦁', count: '900+ spots',   color: '#e9c46a', query: 'top destinations in Africa Kenya Tanzania Morocco Egypt safari with travel tips and prices for Indians' },
  { name: 'Americas',       emoji: '🗽', count: '2,000+ spots', color: '#6a4c93', query: 'top destinations in Americas New York Peru Mexico Brazil Canada with travel tips and prices for Indians' },
  { name: 'Oceania',        emoji: '🦘', count: '500+ spots',   color: '#1d9e75', query: 'top destinations in Oceania Australia New Zealand Fiji with travel tips and prices for Indians' },
  { name: 'Central Asia',   emoji: '🏕️', count: '300+ spots',   color: '#e76f51', query: 'top destinations in Central Asia Kazakhstan Uzbekistan Kyrgyzstan with travel tips and prices for Indians' },
];

const CATEGORY_TITLES = {
  Trending: '🔥 Trending Destinations',
  Budget:   '💸 Budget Picks',
  Luxury:   '✨ Luxury Escapes',
  Hidden:   '🗺️ Hidden Gems',
  Solo:     '🎒 Solo Travel',
  Family:   '👨‍👩‍👧 Family Friendly',
  Monsoon:  '🌧️ Monsoon Magic',
  Weekend:  '📅 Weekend Getaways',
};

const TYPE_GRADIENTS = {
  Beach:     '#0077b6,#00b4d8',
  Mountain:  '#2d6a4f,#40916c',
  City:      '#1a1a2e,#457b9d',
  Heritage:  '#6d4c41,#a1887f',
  Nature:    '#1b4332,#52b788',
  Adventure: '#6a4c93,#9b72cf',
  Romantic:  '#c9184a,#ff4d6d',
};
