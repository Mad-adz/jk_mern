import {
  chandiHomam,
  fullMoonFestival,
  resourceImg1,
  resourceImg2,
  resourceImg3,
  resourceImg4,
  spiritualClasses,
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
} from "@/assets/images";

// import { resourceImg1 } from "@/assets/images";

export const navLinks = [
  { id: 1, to: "", label: "Home", hasSubmenu: false },
  {
    id: 2,
    to: "",
    label: "About",
    hasSubmenu: true,
    openKey: "about",
    submenu: [
      { id: 21, to: "autobiography", label: "Auto Biography" },
      { id: 22, to: "yendhirakovil", label: "Yendhira Kovil" },
    ],
  },
  {
    id: 3,
    to: "",
    label: "Initiatives",
    hasSubmenu: true,
    openKey: "initiatives",
    submenu: [
      { id: 31, to: "activities", label: "Activities" },
      { id: 32, to: "events", label: "Events" },
      { id: 33, to: "workshops", label: "Workshops" },
    ],
  },
  {
    id: 4,
    to: "book-my-dharshan",
    label: "Book My Dharshan",
    hasSubmenu: false,
  },
  { id: 5, to: "contact", label: "Contact", hasSubmenu: false },
  { id: 6, to: "donate", label: "Donate", hasSubmenu: false },
];

export const quotes = [
  "Peace comes from within. Do not seek it without. - Buddha",
  "The quieter you become, the more you can hear. - Rumi",
  "This too shall pass. - Persian Proverb",
  "Act with purpose, not to impress. - Marcus Aurelius",
  "Happiness is a journey, not a destination. - Buddha",
  "The mind is everything. What you think, you become. - Buddha",
  "Life is not measured by the breaths we take, but by the moments that take our breath away.",
  "Let go of what you can’t control. - Anonymous",
  "Do not dwell in the past. - Buddha",
  "Peace begins with a smile. - Mother Teresa",
];

export const resources = [
  {
    id: 1,
    title: "Meditation Practices",
    url: "meditation-practices",
    image: resourceImg1,
    description: "Techniques to calm the mind and cultivate inner peace.",
  },
  {
    id: 2,
    title: "Superior Yoga",
    url: "superior-yoga",
    image: resourceImg2,
    description: "Mindful movement and breathwork for body and spirit.",
  },
  {
    id: 3,
    title: "Audio & Video Sermons",

    url: "audio-video-sermons",
    image: resourceImg3,
    description:
      "Enlightening messages to nurture your faith and understanding.",
  },
  {
    id: 4,
    title: "Spiritual Devices",
    url: "spiritual-devices",
    image: resourceImg4,
    description: "Transform your spirit with our unique spiritual devices.",
  },
];

export const events = [
  {
    id: 1,
    title: "Chandi Homam",
    datetime: "10th Jan 2025, 8AM IST",
    fromDate: "10-01-2025",
    toDate: "10-01-2025",
    startTime: "8am IST",
    endTime: "10am IST",
    location: "Chennai",
    fees: "Rs.25000",
    tags: ["Homam", "Chandi"],
    organizer: "Guruji",
    url: "chandi-homam",
    banner: chandiHomam,
    description:
      "Chandi Homam is a powerful ritual dedicated to Goddess Chandi, the fierce form of Goddess Durga. It is performed to seek her blessings for protection, prosperity, and victory over evil forces.",
    paragraphs: [
      "சண்டி ஹோமம் என்பது மனித வாழ்வில் ஏற்படும் தடைகளைத் தகர்த்தெறியக் கூடிய வல்லமை கொண்டது. இந்த ஹோமம் உலகில் உள்ள அனைத்து உயிர்களையும் காத்து ரட்சிக்கும் துர்க்கையின் அம்சமான சண்டி தேவியை வணங்கி வழிபடச் செய்யப்படுகிறது. தடைகளைத் தகர்தெறியக்கூடிய வல்லமை கொண்ட சண்டி தேவிக்கு விசேஷமான மந்திரங்களை ஓதி யாகங்களைச் செய்யும் போது, அவள் மனமகிழ்ந்து நம் வாழ்வில் உள்ள தடைகளை நிவர்த்தி செய்து நம்மை செழுமையாக வாழ வைப்பாள்.",
      "முற்காலத்தில் இந்த ஹோமத்தை அனைத்து மன்னர்களும் மன்னர் நிலை கொண்ட மாமனிதர்களும் செய்தார்கள். தற்போது இந்த யாகத்தை தனி மனிதர்களும் தனியாக செய்ய பொருளாதார வசதி இல்லாதவர்கள் ஒன்று சேர்ந்தும் செய்கிறார்கள். இதனை குருமார்களும் வேத வித்வான்களும் வழி நடத்துகிறார்கள். இந்த யாகத்தின் சக்தி அளப்பரியது",
      "சண்டி ஹோமத்தை செய்வதன் மூலம் நம் வாழ்வில் தெரிந்தோ தெரியாமலோ நாம் செய்த பாவங்கள் நீங்கி அதனால் ஏற்படும் தடைகள் விலகும். ",
    ],
  },
  {
    id: 2,
    title: "Full Moon Festival",
    datetime: "14th Jan 2025, 7PM IST",
    fromDate: "14-01-2025",
    toDate: "14-01-2025",
    startTime: "7pm IST",
    endTime: "10pm IST",
    location: "Chennai",
    fees: "Rs.5000",
    tags: ["Moon", "Meditation"],
    organizer: "Guruji",
    url: "",
    banner: fullMoonFestival,
    description:
      "The Full Moon Festival is a monthly event that celebrates the full moon day. It is a time to reflect, meditate, and connect with the divine energy of the moon.",
    paragraphs: [
      "நாம் அனைவரின் மனங்களும் மிகுந்த மகிழ்ச்சியும் புத்துணர்வும் கொண்டிருக்கும் நாள் எதுவென்றால் அது பௌர்ணமி தான் அன்று வானில் முழுநிலவு மிகவும் பிரகாசமாக காட்சியளிக்கும் அந்த நேரத்தில் நேர்மறை சக்திகள் உயிர்ப்புடன் இருக்கும் அச்சமயத்தில் இறை வழிபாடு மேற்கொள்ளும் பொழுது நாம் எண்ணற்ற பலன்களை பெறலாம். எனவே நாம் அனைவரும் பௌர்ணமியை ஒரு திருவிழாவை போல கொண்டாட வேண்டும். ஒவ்வொரு மாதமும் பௌர்ணமி நாள் வருகிறது மேலும் பல ஊர்களில் உள்ள கோவில்களில் வருட விழாக்கள் பௌர்ணமி நாளிலேயே கொண்டாட படுகிறது பல கிராமங்களில் பௌர்ணமி நாளில் மாரியம்மன் கோயில்கள் போன்ற தலங்களில் கிராம மக்கள் திரண்டுச் சிறப்பு வழிபாடுகளை நடத்துகிறார்கள். ",
      "ஆனால் ஒரு தனி மனிதன் பௌர்ணமியை ஒரு விழாவாக கொண்டாட வேண்டும் என்றால் அதற்கு ஒரு இயற்கை சூழல் சார்ந்த இடமும் நீர்நிலையும் மழையும் சிறிது வெளிச்சமும் இருக்க வேண்டும். அதை போன்ற சூழலில் ஐம்பூதங்களையும் அடிப்படையாக கொண்டு உள்மனதில் அவனை பற்றிய ஒரு தேடலை மேற்கொள்ளும் போது இதுவரை அவனை பற்றி எழாத பல கேள்விகள் மனதில் எழும். ஒருவனை பற்றி அவனே ஆழமாக அறிந்து கொள்ளலாம் இது கூட்டு வழிபட்டு முறையிலும் நடைபெறும்",
      "ஜெய் கோஷா அறக்கட்டளையில் மேலே குறிப்பிட்ட படி கடற்கரை அல்லது மலை சார்ந்த இடங்களில் ஒரு யாகம் செய்து யோகம் பெற அதிகாலை மணி வரையிலும் பௌர்ணமி விழாக்கள் கொண்டாட படுகிறது. அந்த வழிபாடு மூலம் ஒரு மனிதன் தன்னுடைய குணம் தனக்கு என்ன தேவை தான் எதை தேர்ந்து எடுக்க வேண்டும் எது உண்மை எது பொய் என்பன பற்றி எல்லாம் அறிந்து கொள்ள முடியும் ",
    ],
  },
  {
    id: 3,
    title: "Spritual Classes",
    datetime: "20th Jan 2025, 7AM IST",
    fromDate: "20-01-2025",
    toDate: "03-02-2025",
    startTime: "7am IST",
    endTime: "10am IST",
    location: "Chennai",
    fees: "Rs.20000",
    tags: ["Spiritual", "Meditation"],
    organizer: "Guruji",
    url: "",
    banner: spiritualClasses,
    description:
      "Join our spiritual classes to learn the ancient teachings and practices of yoga, meditation, and self-realization.",
    paragraphs: [
      "நமது ஜெய் கோஷா அறக்கட்டளையில் சிறப்பு ஆன்மீக வகுப்புகள் நடைபெறுகின்றன அடைப்படையில் இந்த வகுப்புகளின் கால அளவு நாட்களாக கட்டமைக்க பட்டுள்ளது அதாவது இவ்வகுப்புகள் அமாவாசை முதல் பௌர்ணமி வரை நடைபெறும் இந்த வகுப்பில் இணைய விரும்புபவர்கள் அமாவாசைக்கு முன்தினம் கலந்து கொள்ள வேண்டும் அமாவாசை நாளன்று முதல் வகுப்புகள் தொடங்கி பௌர்ணமி அன்று நிறைவடையும் இந்த வகுப்பில் ஒரு தனி மனிதன் இந்த பூமியில் எப்படியெல்லாம் வாழலாம் , அவனுடைய குணங்கள் எதுவாக இருந்தாலும் எந்த நிலையில் அவன் முறையாக வாழ்ந்தால் அவனுடைய சவுகரியங்கள் நிரந்தரமாக்கப்படும் என்பதை பற்றிய பயிற்சிகள் வழங்கப்படும் தூங்கி எழுவதில் இருந்து சரியான உணவு முறைகள் இறுதியில் இரவு உறங்க போகும் வரையில் மொத்தம் இருபத்திநான்கு மணி நேரத்தையும் எப்படி வகைப்படுத்தி வாழ்வது என்பது பற்றிய பயிற்சிகள் வழங்கப்படும்.",
      "எந்த துறையில் எந்த வேலையில் இருந்தாலும் அதிலுள்ள இடர்பாடுகளை களைந்து முன்னேறவும் அம்மா அப்பா அண்ணன் தங்கை மருமகன் மருமகள் என எந்த சூழலில் வாழ்ந்து கொண்டிருந்தாலும் அதிலுள்ள சிரமங்களை களைந்து வாழ மனம் ஒழுங்கு படுத்தப்படும் இவை நாட்கள் பயிற்றுவிக்கப்படும் இந்த வகுப்புகளை நிறைவு செய்து வெளிவரும் அனைவருக்கும் இந்த பூமியில் அவர்களுக்கு ஏற்படும் அனைத்து தடைகளையும் தகர்த்தெறியும் உத்வேகமும் மனதில் மகிழ்ச்சியும் உண்டாகும்.",
      "இந்த வகுப்புகள் ஒரு தனிமனிதனின் வாழ்க்கையில் பெரும் மாற்றத்தை ஏற்படுத்தும் யோகம் கர்மம் பக்தி மற்றும் ஞானம் ஆகியவற்றை பற்றிய புரிதல் கிடைக்கும் உடல் மற்றும் மன ஆரோக்கியத்திற்கு என்னென்ன தேவை என்பனவெல்லாம் கற்றுக்கொடுக்கப்படும் கற்றவை அனைத்தையும் வாழ்நாள் முழுவதும் எப்படி கடைபிடிக்க வேண்டாம் என்ற அறிவுரைகள் வழங்கப்படும் அவரவர்களுக்கான ரகசிய மந்திரங்களும் வழிபாட்டு முறைகளும் மனதிற்கு நேர்மறையான எண்ணங்களையும் ஆற்றலையும் உருவாக்கும் முறைகளை பற்றியும் கற்றுக்கொடுக்கப்படும் இந்த வகுப்புகளில் அனைத்து மதத்தினரும் கலந்து கொள்ளலாம்.",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sankar",
    place: "Chennai",
    description:
      "“The techniques provided helped me calm my mind and find inner peace. Truly transformative!”",
    image: testimonialImg1,
  },
  {
    id: 2,
    name: "Padma",
    place: "Madurai",
    description:
      "“The wisdom shared has been a guiding light for my spiritual journey. Highly inspiring!”",
    image: testimonialImg2,
  },
  {
    id: 3,
    name: "Krishna",
    place: "Coimbatore",
    description:
      "“The mindful movement and breathwork sessions have brought balance to my body and spirit. Amazing experience!”",
    image: testimonialImg3,
  },
  {
    id: 4,
    name: "Yamuna",
    place: "Bangalore",
    description:
      "“The sermons are enlightening and deeply nurture my faith and understanding. Highly recommended!”",
    image: testimonialImg4,
  },
];

export const addresses = [
  {
    id: 1,
    title: "Visit Our Office",
    place: "JAI KOSHA FOUNDATION",
    line1: "No. 3/360, Kagithapuram,",
    line2: "4th Street, Kovilambakkam,",
    district: "Chennai - 600117",
    state: "Tamil Nadu, India",
    isAddress: true,
  },
  {
    id: 2,
    title: "Visit Our Ashram - Erode",
    place: "AGAM ASHRAMAM",
    line1: "69a, Solipalayam,",
    line2: "Avalpoondurai",
    district: "Erode - 638115,",
    state: "Tamil Nadu, India",
    isAddress: true,
  },
  {
    id: 3,
    title: "24/7 Quick Contact",
    email: { label: "Email", value: "enquiries@jaikosha.com" },
    mobile: { label: "Mobile", value: "9489889848" },
    description: [
      { label: "Working Hours", value: "Mon-Sat" },
      { label: "Morning", value: "10.00 AM - 1.00 PM" },
      { label: "Evening", value: "5.00 PM - 8.00 PM" },
    ],
    isAddress: false,
  },
];

export const timeSlots = [
  // "00:00",
  // "00:30",
  // "01:00",
  // "01:30",
  // "02:00",
  // "02:30",
  // "03:00",
  // "03:30",
  // "04:00",
  // "04:30",
  // "05:00",
  // "05:30",
  // "06:00",
  // "06:30",
  // "07:00",
  // "07:30",
  // "08:00",
  // "08:30",
  // "09:00",
  // "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  // "19:30",
  // "20:00",
  // "20:30",
  // "21:00",
  // "21:30",
  // "22:00",
  // "22:30",
  // "23:00",
  // "23:30",
];

export const defaultAvailability = {
  monday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  tuesday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  wednesday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  thursday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  friday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  saturday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  sunday: { isAvailable: false, startTime: "09:00", endTime: "17:00" },
  timeGap: 0,
};
