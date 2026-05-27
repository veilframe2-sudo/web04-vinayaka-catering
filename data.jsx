// Vinayaka — shared data: sadhya items, reviews, services, timeline

// Positions are % of the illustrated leaf canvas (x, y).
// Coordinates align with the painted leaf in photos/leaf-illustration.png.
const SADHYA_ITEMS = [
  // Top row — four chutneys / curd cups
  { n: 1, x: 33, y: 22, name: "Pulissery", mal: "പുളിശ്ശേരി", kind: "Buttermilk curry",
    desc: "Cooling buttermilk curry with ripe mango or ash-gourd — tempered with mustard, fenugreek and curry leaves. Served just before the moru course.",
    served: "First cup on the upper leaf", taste: "Tangy · Cooling" },
  { n: 2, x: 46, y: 19, name: "Sambar", mal: "സാമ്പാർ", kind: "Second course",
    desc: "Long-cooked vegetable sambar with tamarind, drumstick and roasted ground spices. Ladled over the second portion of rice.",
    served: "Second cup, top-centre", taste: "Spiced · Tangy" },
  { n: 3, x: 58, y: 20, name: "Rasam", mal: "രസം", kind: "Third course",
    desc: "Peppery tamarind broth, taken after sambar to settle the meal.",
    served: "Third cup, top-centre", taste: "Sharp · Warming" },
  { n: 4, x: 70, y: 23, name: "Pachadi", mal: "പച്ചടി", kind: "Curd-based side",
    desc: "Pineapple or beetroot folded into curd, tempered with mustard and curry leaves.",
    served: "Fourth cup, upper-right", taste: "Sweet · Sour" },

  // Second row — sides resting on the leaf
  { n: 5, x: 37, y: 39, name: "Kichadi", mal: "കിച്ചടി", kind: "Curd-based side",
    desc: "Cooling cucumber or ash-gourd kichadi — yogurt-tempered with ground coconut.",
    served: "Upper band, below the cups", taste: "Mild · Cooling" },
  { n: 6, x: 49, y: 38, name: "Olan", mal: "ഓലൻ", kind: "Coconut milk curry",
    desc: "Ash-gourd and red cowpea simmered in thin coconut milk. Almost monastic in its restraint.",
    served: "Upper band, with a curry leaf on top", taste: "Mild · Creamy" },
  { n: 7, x: 60, y: 38, name: "Erissery", mal: "എരിശ്ശേരി", kind: "Coconut & lentil",
    desc: "Mathanga (pumpkin) and red gram thickened with roasted coconut.",
    served: "Upper band, right of olan", taste: "Sweet · Earthy" },
  { n: 8, x: 73, y: 33, name: "Cabbage Thoran", mal: "തോരൻ", kind: "Dry vegetable",
    desc: "Cabbage tossed with fresh grated coconut, mustard, urad dal and a single dry chilli.",
    served: "Top-right of the leaf", taste: "Mild · Crunchy" },

  // Left & right mid-band
  { n: 9, x: 25, y: 49, name: "Mezhukkupuratti", mal: "മെഴുക്കുപുരട്ടി", kind: "Dry vegetable",
    desc: "Turmeric-stained pumpkin or long-bean stir-fry with coconut oil and curry leaves.",
    served: "Left of the rice", taste: "Mild · Earthy" },
  { n: 10, x: 73, y: 51, name: "Avial", mal: "അവിയൽ", kind: "Coconut-curd curry",
    desc: "Mixed vegetables in a thick coconut–curd–curry-leaf paste. The Kerala signature.",
    served: "Right of the rice", taste: "Rich · Aromatic" },

  // Left edge — banana, boli, pickles
  { n: 11, x: 11, y: 63, name: "Nendran Banana", mal: "ഏത്തപ്പഴം", kind: "Sweet accompaniment",
    desc: "Ripe nendran banana — eaten plain between courses, or mashed into the rice with pradhaman.",
    served: "Left edge", taste: "Sweet" },
  { n: 12, x: 19, y: 65, name: "Boondi & Cashew", mal: "ബൂന്ദി", kind: "Sweet bite",
    desc: "Ghee-roasted cashew alongside boondi sweet — a small ceremonial offering on the leaf.",
    served: "Below the banana", taste: "Sweet · Nutty" },
  { n: 13, x: 22, y: 72, name: "Sharkara Varatti", mal: "ശർക്കരവരട്ടി", kind: "Jaggery banana chip",
    desc: "Nendran chips coated in jaggery, ginger and cumin. Sweet, sticky, ceremonial.",
    served: "Lower-left", taste: "Sweet · Spiced" },
  { n: 14, x: 20, y: 84, name: "Naranga Curry", mal: "നാരങ്ങ കറി", kind: "Pickle",
    desc: "Aged lemon pickle in mustard and fenugreek. A pinch's worth — to brighten the rice.",
    served: "Bottom-left of the leaf", taste: "Salty · Sour" },
  { n: 15, x: 29, y: 88, name: "Inji Curry", mal: "ഇഞ്ചി കറി", kind: "Pickle",
    desc: "Ginger relish slow-cooked with jaggery and tamarind. Sharp, sweet, grounding — eaten first to wake the palate.",
    served: "Beside the naranga curry", taste: "Sweet · Sour · Pungent" },

  // Centre — the rice
  { n: 16, x: 49, y: 73, name: "Choru with Parippu", mal: "ചോറും പരിപ്പും", kind: "The base",
    desc: "Steamed Palakkadan Matta rice with tuvar dal and a coin of cow-ghee — the first ladle over the rice, and the heart of the meal.",
    served: "Centre of the leaf", taste: "Earthy · Comforting" },

  // Right & lower right — pappadam & signature payasam
  { n: 17, x: 88, y: 64, name: "Pappadam", mal: "പപ്പടം", kind: "Crisp",
    desc: "Hand-fried urad dal pappadam, broken over rice for the first bite.",
    served: "Right edge of the leaf", taste: "Crisp · Salty" },
  { n: 18, x: 72, y: 83, name: "Paalada Pradhaman", mal: "പാലട പ്രഥമൻ", kind: "Signature payasam",
    desc: "Hand-rolled rice ada simmered for hours in slow-reduced milk, cardamom, and a whisper of nutmeg. The dish that built Vinayaka's name across India and abroad.",
    served: "Lower-right — the closing course", taste: "Creamy · Aromatic · Storied",
    signature: true },
];

const REVIEWS = [
  { name: "Lakshmi & Sreenath", source: "WeddingWire", initials: "LS", stars: 5,
    body: "We held our reception at the Kalyana Mandapam in 2024. From the moment guests sat down at the leaf to the final paalada pradhaman, the kitchen did not miss a single beat.", },
  { name: "Anil M.", source: "Google Reviews", initials: "AM", stars: 5,
    body: "Best for Hindu marriage functions, clean and elegant hall. The team understands ceremony — the sadhya was served on time, course after course, exactly as it should be.", },
  { name: "Radhika V.", source: "Google Reviews", initials: "RV", stars: 4,
    body: "Traditional Kerala sadhya — quality and taste are very good. The paalada pradhaman is genuinely the best in Ernakulam. Three generations of my family agreed.", },
  { name: "Suresh Iyer", source: "WeddingWire", initials: "SI", stars: 5,
    body: "Coordinated my daughter's wedding from Dubai. Vinayaka handled everything — the hall, the catering, the brass lamps for the muhurtham. Every NRI family's nightmare, resolved in one phone call.", },
  { name: "Meera P.", source: "Google Reviews", initials: "MP", stars: 5,
    body: "The Vishu sadya we ordered for sixty relatives arrived warm, complete, and arranged exactly as on the banana leaf. Not a single dish out of place.", },
  { name: "Devanand K.", source: "WedMeGood", initials: "DK", stars: 4,
    body: "Booked the hall for an upanayanam. The kuthuvilakku setup, the sadhya, even the parking — managed by people who have done this thousands of times.", },
];

const SERVICES = [
  { num: "01", title: "Wedding Sadhya", mal: "കല്യാണ സദ്യ",
    desc: "The full 26-course traditional Kerala wedding feast on banana leaf. From paalada pradhaman to the closing moru — served by experienced kitchen staff who understand the order of courses.",
    cap: "200–2,000 guests" },
  { num: "02", title: "Kalyana Mandapam", mal: "കല്യാണ മണ്ഡപം",
    desc: "Our in-house A/C wedding hall in Kadavanthra: 800-seat main hall with stage, 300-seat dining hall, separate green rooms, and a dedicated kitchen wing.",
    cap: "Hall + catering, one roof" },
  { num: "03", title: "Festival & Temple Catering", mal: "ഉത്സവ സദ്യ",
    desc: "Vishu, Onam, Karkidaka — the seasonal sadyas Kerala families have ordered from us for three decades. We deliver, set up, and serve at your venue or temple.",
    cap: "Off-site catering" },
];

const TIMELINE = [
  { year: "1992", title: "A kitchen opens in Kadavanthra",
    body: "Sri. M. Anantharaman, the son of a culinary expert and trained under the master cooks of his generation, sets up Vinayaka Caterers on a quiet lane in Kadavanthra, Kochi. The first orders are temple feasts and family weddings.",
    aside: "From the founder: the principle of one quality, one quantity and one price for every customer was set on day one. It has not changed since." },
  { year: "1998", title: "Paalada Pradhaman finds its voice",
    body: "The signature payasam — hand-rolled ada simmered for hours in milk, cardamom and a whisper of nutmeg — begins to travel by word of mouth from one Kochi household to the next.",
    aside: "By the mid-2000s the dish had a reputation across India and the Gulf. Couples settled in London and Singapore began flying it home for muhurthams." },
  { year: "2008", title: "The Kalyana Mandapam is built",
    body: "An 800-seat air-conditioned wedding hall is opened on the Kadavanthra property — with a 300-seat dining hall, separate green rooms, and a kitchen wing built around the catering operation.",
    aside: "The first wedding hosted in the new hall served 1,400 guests over four sittings. The kitchen did not slow once." },
  { year: "Today", title: "Three decades, one standard",
    body: "Four thousand-plus weddings, festivals and family functions later, the kitchen still runs on Anantharaman's pledge. The next generation has joined the family business — but the standard has not moved.",
    aside: "4.2 stars across 2,821 Google reviews. 100% couple-recommended on WeddingWire. The same paalada pradhaman recipe since 1992." },
];

const INCLUDED = [
  { n: "01", title: "Air-conditioned main hall", desc: "Seats 800+ for ceremony with full stage and mandap area." },
  { n: "02", title: "Dedicated dining hall", desc: "Separate 300-seat A/C hall for the sadhya. Multiple sittings supported." },
  { n: "03", title: "Brass kuthuvilakku setup", desc: "Five-piece lamp set, banana leaf arrangement, marigold and floral work." },
  { n: "04", title: "Two private green rooms", desc: "Furnished bridal & groom rooms with full-length mirrors, A/C, attached bath." },
  { n: "05", title: "Professional service staff", desc: "Trained sadhya servers — one per ~20 leaves — supervised by a kitchen lead." },
  { n: "06", title: "Stage decoration", desc: "Backdrop, seating for elders, manavarai setup. Custom themes coordinated." },
  { n: "07", title: "Generator backup", desc: "Full-load backup for both halls — A/C, lighting, kitchen, sound." },
  { n: "08", title: "Parking & valet", desc: "On-property parking for 80 vehicles. Overflow arrangements within 200m." },
];

// Expose globals
Object.assign(window, { SADHYA_ITEMS, REVIEWS, SERVICES, TIMELINE, INCLUDED });
