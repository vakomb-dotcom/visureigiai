
const BRAND_CATALOG = {"Toyota": ["Land Cruiser", "Land Cruiser Prado", "RAV4", "Highlander", "4Runner", "C-HR", "Sequoia"], "Nissan": ["X-Trail", "Qashqai", "Patrol", "Murano", "Juke", "Pathfinder", "Terrano"], "BMW": ["X1", "X2", "X3", "X4", "X5", "X6", "X7"], "Audi": ["Q3", "Q5", "Q7", "Q8", "e-tron", "SQ5"], "Mercedes-Benz": ["GLA", "GLB", "GLC", "GLE", "GLS", "G-Class"], "Jeep": ["Compass", "Cherokee", "Grand Cherokee", "Renegade", "Wrangler"], "Mitsubishi": ["Pajero", "Outlander", "ASX", "Eclipse Cross", "Pajero Sport"], "Volvo": ["XC40", "XC60", "XC90"], "Volkswagen": ["Tiguan", "Touareg", "T-Roc", "Atlas", "Taos"], "Škoda": ["Kodiaq", "Karoq", "Kamiq", "Yeti"], "Hyundai": ["Tucson", "Santa Fe", "Kona", "Bayon", "Venue"], "Kia": ["Sportage", "Sorento", "Seltos", "Stonic", "Telluride", "XCeed"], "Ford": ["Kuga", "Explorer", "Edge", "Bronco", "EcoSport", "Puma"], "Honda": ["CR-V", "HR-V", "Pilot", "Passport"], "Mazda": ["CX-3", "CX-30", "CX-5", "CX-60", "CX-80"], "Subaru": ["Forester", "Outback", "XV", "Crosstrek", "Ascent"], "Lexus": ["NX", "RX", "GX", "LX", "UX"], "Land Rover": ["Defender", "Discovery", "Range Rover", "Range Rover Sport", "Range Rover Evoque", "Range Rover Velar"], "Porsche": ["Macan", "Cayenne"], "Peugeot": ["2008", "3008", "5008", "408"], "Renault": ["Captur", "Arkana", "Koleos", "Austral"], "Dacia": ["Duster", "Bigster", "Jogger"], "Opel": ["Mokka", "Grandland", "Frontera"], "Suzuki": ["Vitara", "S-Cross", "Jimny", "Across"], "Citroën": ["C3 Aircross", "C5 Aircross"], "SEAT": ["Arona", "Ateca", "Tarraco"], "Cupra": ["Formentor", "Terramar"], "MINI": ["Countryman"], "Jaguar": ["E-Pace", "F-Pace"], "Cadillac": ["XT4", "XT5", "XT6", "Escalade"], "Infiniti": ["QX30", "QX50", "QX60", "QX80"], "Acura": ["RDX", "MDX", "ZDX"], "Alfa Romeo": ["Stelvio"], "Tesla": ["Model Y", "Model X"], "BYD": ["Tang", "Seal U"], "Haval": ["H6", "Jolion", "Tank 300"], "Chery": ["Tiggo 7", "Tiggo 8", "Tiggo 9"], "MG": ["ZS", "HS", "Marvel R"], "KGM": ["Korando", "Torres", "Rexton", "Tivoli"], "Isuzu": ["MU-X", "D-Max"], "Lada": ["Niva", "Niva Travel"], "Maserati": ["Levante"], "Bentley": ["Bentayga"], "Rolls-Royce": ["Cullinan"], "Ferrari": ["Purosangue"], "Lotus": ["Eletre"], "Genesis": ["GV60", "GV70", "GV80"], "Chevrolet": ["Equinox", "Traverse", "Tahoe", "Suburban"], "GMC": ["Terrain", "Acadia", "Yukon"], "Lincoln": ["Nautilus", "Aviator", "Navigator"], "Dodge": ["Durango"], "Ram": ["1500", "2500", "Rebel"], "Nio": ["ES6", "ES8", "EL7"], "XPeng": ["G6", "G9"], "Aito": ["M5", "M7", "M9"], "Hongqi": ["E-HS9", "HS5"], "Polestar": ["3", "4"], "Rivian": ["R1S"], "Lucid": ["Gravity"], "Maxus": ["D90", "Territory"]};
const FEATURE_OPTIONS = [["pneumaticSuspension", "Pneumatinė pakaba"], ["panoramicRoof", "Panoraminis stogas"], ["roofRails", "Stogo bėgeliai"], ["hook", "Kablys"], ["leather", "Odinis salonas"], ["heatedSeats", "Šildomos sėdynės"], ["ventilatedSeats", "Ventiliuojamos sėdynės"], ["camera360", "Kamera / 360"], ["navigation", "Navigacija"], ["keyless", "Keyless / Start-Stop"], ["parkAssist", "Automatinė parkavimo sistema"], ["diffLock", "Diferencialo blokiruotė"], ["hillDescent", "Kalnų nusileidimas"], ["offroadModes", "Off-road režimai"], ["lifted", "Važiuoklės pakėlimas"], ["mtTyres", "M/T padangos"], ["atTyres", "A/T padangos"], ["winterTyres", "Žieminės padangos"], ["summerTyres", "Vasarinės padangos"], ["wheelSet", "Ratlankių komplektas"], ["spareWheel", "Atsarginis ratas"], ["tintedWindows", "Tamsinti stiklai"], ["alloyWheels", "Lieti ratlankiai"], ["serviceHistory", "Serviso istorija"], ["checkedHistory", "Patikrinta istorija"], ["imported", "Importuotas"], ["ltRegistered", "Lietuvos"], ["leftHandDrive", "Kairėje vairas"], ["rightHandDrive", "Dešinėje vairas"]];
const CITIES = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Marijampolė", "Utena", "Tauragė", "Telšiai", "Ukmergė", "Mažeikiai", "Kėdainiai", "Jonava", "Kretinga", "Plungė", "Šilutė", "Radviliškis"];
const SEED_USERS = [{"id": "u_admin", "name": "Visureigiai.lt", "email": "admin@visureigiai.lt", "passwordHash": "", "phone": "+37060000000", "city": "Vilnius", "role": "admin", "avatar": "V", "favorites": []}, {"id": "u_vaidas", "name": "Vaidas Kolosovas", "email": "vaidas@example.com", "passwordHash": "", "phone": "+37064445670", "city": "Ukmergė", "role": "user", "avatar": "V", "favorites": []}, {"id": "u_linas", "name": "Linas", "email": "linas@example.com", "passwordHash": "", "phone": "+37061234567", "city": "Kaunas", "role": "user", "avatar": "L", "favorites": []}];
const SEED_LISTINGS = [{"id": "l1", "title": "Toyota Land Cruiser", "description": "Tvarkingas 2008 metų Toyota Land Cruiser. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 18900, "currency": "EUR", "brand": "Toyota", "model": "Land Cruiser", "year": 2008, "firstRegMonth": 6, "firstRegYear": 2008, "vin": "D9PCF43ESF4DHRD2D", "mileage": 168000, "fuelType": "Dyzelinas", "gearbox": "Automatinė", "bodyType": "Visureigis / Krosoveris", "drivetrain": "AWD", "trim": "", "engineSize": 1995, "powerKw": 110, "powerHp": 177, "color": "Balta", "doors": 5, "seats": 7, "condition": "Be defektų", "defects": false, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Vilnius", "sellerType": "Privatus", "contactPhone": "+37066175466", "email": "seller1@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-03-14T08:52:03.515793", "updatedAt": "2026-04-18T08:52:03.515826", "soldAt": "", "views": 2913, "favorites": 11, "leadClicks": 7, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_linas", "features": {"parkAssist": true, "leather": true, "hillDescent": true, "spareWheel": true, "panoramicRoof": true, "roofRails": true, "winterTyres": true, "hook": true}}, {"id": "l2", "title": "Nissan X-Trail", "description": "Tvarkingas 2008 metų Nissan X-Trail. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 4350, "currency": "EUR", "brand": "Nissan", "model": "X-Trail", "year": 2008, "firstRegMonth": 10, "firstRegYear": 2008, "vin": "DP84X660WSMSFW8Y5", "mileage": 182000, "fuelType": "Dyzelinas", "gearbox": "Mechaninė", "bodyType": "Visureigis / Krosoveris", "drivetrain": "4WD", "trim": "", "engineSize": 2720, "powerKw": 103, "powerHp": 140, "color": "Mėlyna", "doors": 3, "seats": 5, "condition": "Tvarkingas", "defects": true, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Kaunas", "sellerType": "Turgus", "contactPhone": "+37063549877", "email": "seller2@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-03-18T08:52:03.515887", "updatedAt": "2026-04-18T08:52:03.515895", "soldAt": "", "views": 1847, "favorites": 2, "leadClicks": 62, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_linas", "features": {"summerTyres": true, "spareWheel": true, "ventilatedSeats": true, "diffLock": true, "hook": true, "winterTyres": true, "alloyWheels": true, "roofRails": true}}, {"id": "l3", "title": "Audi Q7", "description": "Tvarkingas 2015 metų Audi Q7. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 18900, "currency": "EUR", "brand": "Audi", "model": "Q7", "year": 2015, "firstRegMonth": 10, "firstRegYear": 2015, "vin": "86EFU7EDW5V1ZB6ZL", "mileage": 124000, "fuelType": "Dyzelinas", "gearbox": "Automatinė", "bodyType": "Visureigis / Krosoveris", "drivetrain": "AWD", "trim": "", "engineSize": 2494, "powerKw": 100, "powerHp": 163, "color": "Sidabrinė", "doors": 5, "seats": 7, "condition": "Be defektų", "defects": false, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Klaipėda", "sellerType": "Įmonė", "contactPhone": "+37067675615", "email": "seller3@example.com", "images": [], "video": "", "featured": true, "status": "active", "createdAt": "2026-03-24T08:52:03.515940", "updatedAt": "2026-04-18T08:52:03.515946", "soldAt": "", "views": 2153, "favorites": 5, "leadClicks": 11, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_vaidas", "features": {"roofRails": true, "checkedHistory": true, "winterTyres": true, "summerTyres": true, "parkAssist": true, "leftHandDrive": true, "alloyWheels": true, "diffLock": true}}, {"id": "l4", "title": "BMW X5", "description": "Tvarkingas 2014 metų BMW X5. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 14500, "currency": "EUR", "brand": "BMW", "model": "X5", "year": 2014, "firstRegMonth": 6, "firstRegYear": 2014, "vin": "1RKFMKRRA8MTVAK30", "mileage": 215000, "fuelType": "Dyzelinas", "gearbox": "Automatinė", "bodyType": "Visureigis / Krosoveris", "drivetrain": "AWD", "trim": "", "engineSize": 1998, "powerKw": 100, "powerHp": 272, "color": "Mėlyna", "doors": 3, "seats": 5, "condition": "Tvarkingas", "defects": true, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Vilnius", "sellerType": "Superkėjas", "contactPhone": "+37067612236", "email": "seller4@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-04-12T08:52:03.516009", "updatedAt": "2026-04-18T08:52:03.516014", "soldAt": "", "views": 2092, "favorites": 40, "leadClicks": 26, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_admin", "features": {"hillDescent": true, "winterTyres": true, "navigation": true, "leather": true, "offroadModes": true, "leftHandDrive": true, "ltRegistered": true, "checkedHistory": true}}, {"id": "l5", "title": "Volvo XC60", "description": "Tvarkingas 2015 metų Volvo XC60. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 15900, "currency": "EUR", "brand": "Volvo", "model": "XC60", "year": 2015, "firstRegMonth": 1, "firstRegYear": 2015, "vin": "GAKG0BEP1KTZ07HH8", "mileage": 275000, "fuelType": "Dyzelinas", "gearbox": "Automatinė", "bodyType": "Krosoveris", "drivetrain": "AWD", "trim": "", "engineSize": 2494, "powerKw": 200, "powerHp": 177, "color": "Juoda", "doors": 5, "seats": 5, "condition": "Be defektų", "defects": false, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Panevėžys", "sellerType": "Turgus", "contactPhone": "+37065441883", "email": "seller5@example.com", "images": [], "video": "", "featured": true, "status": "active", "createdAt": "2026-03-19T08:52:03.516050", "updatedAt": "2026-04-18T08:52:03.516055", "soldAt": "", "views": 2954, "favorites": 10, "leadClicks": 34, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_admin", "features": {"ventilatedSeats": true, "roofRails": true, "rightHandDrive": true, "lifted": true, "heatedSeats": true, "hook": true, "parkAssist": true, "wheelSet": true}}, {"id": "l6", "title": "Jeep Grand Cherokee", "description": "Tvarkingas 2012 metų Jeep Grand Cherokee. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 12900, "currency": "EUR", "brand": "Jeep", "model": "Grand Cherokee", "year": 2012, "firstRegMonth": 5, "firstRegYear": 2012, "vin": "FT0LZR9YRNS2RN8ZB", "mileage": 98000, "fuelType": "Dyzelinas", "gearbox": "Automatinė", "bodyType": "Visureigis", "drivetrain": "4WD", "trim": "", "engineSize": 2184, "powerKw": 200, "powerHp": 177, "color": "Pilka", "doors": 5, "seats": 5, "condition": "Naudotas", "defects": true, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Šiauliai", "sellerType": "Turgus", "contactPhone": "+37067117575", "email": "seller6@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-04-13T08:52:03.516090", "updatedAt": "2026-04-18T08:52:03.516095", "soldAt": "", "views": 1023, "favorites": 6, "leadClicks": 15, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_vaidas", "features": {"ventilatedSeats": true, "atTyres": true, "diffLock": true, "leather": true, "alloyWheels": true, "winterTyres": true, "pneumaticSuspension": true, "leftHandDrive": true}}, {"id": "l7", "title": "Mitsubishi Pajero", "description": "Tvarkingas 2006 metų Mitsubishi Pajero. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 6800, "currency": "EUR", "brand": "Mitsubishi", "model": "Pajero", "year": 2006, "firstRegMonth": 11, "firstRegYear": 2006, "vin": "ZFH1N7M4YF262FLLJ", "mileage": 98000, "fuelType": "Dyzelinas", "gearbox": "Mechaninė", "bodyType": "Frame SUV", "drivetrain": "4WD", "trim": "", "engineSize": 1998, "powerKw": 200, "powerHp": 150, "color": "Mėlyna", "doors": 3, "seats": 7, "condition": "Naudotas", "defects": true, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Ukmergė", "sellerType": "Turgus", "contactPhone": "+37063615776", "email": "seller7@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-03-14T08:52:03.516129", "updatedAt": "2026-04-18T08:52:03.516134", "soldAt": "", "views": 2365, "favorites": 8, "leadClicks": 2, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_admin", "features": {"ventilatedSeats": true, "parkAssist": true, "rightHandDrive": true, "mtTyres": true, "wheelSet": true, "checkedHistory": true, "pneumaticSuspension": true, "imported": true}}, {"id": "l8", "title": "Lexus RX", "description": "Tvarkingas 2017 metų Lexus RX. Tinka kasdienai ir kelionėms. Galimas susitarimas dėl apžiūros.", "price": 24500, "currency": "EUR", "brand": "Lexus", "model": "RX", "year": 2017, "firstRegMonth": 4, "firstRegYear": 2017, "vin": "PBTPV9SXT3JDZ639J", "mileage": 145000, "fuelType": "Benzinas", "gearbox": "Automatinė", "bodyType": "Krosoveris", "drivetrain": "AWD", "trim": "", "engineSize": 2720, "powerKw": 100, "powerHp": 272, "color": "Pilka", "doors": 5, "seats": 5, "condition": "Be defektų", "defects": false, "accidentHistory": false, "serviceHistory": true, "checkedHistory": true, "location": "Kaunas", "sellerType": "Įmonė", "contactPhone": "+37063374965", "email": "seller8@example.com", "images": [], "video": "", "featured": false, "status": "active", "createdAt": "2026-03-19T08:52:03.516167", "updatedAt": "2026-04-18T08:52:03.516172", "soldAt": "", "views": 2655, "favorites": 7, "leadClicks": 36, "topicTags": ["visureigis", "pirk-parduok"], "moderationStatus": "approved", "ownerId": "u_admin", "features": {"imported": true, "serviceHistory": true, "spareWheel": true, "hook": true, "atTyres": true, "leftHandDrive": true, "leather": true, "offroadModes": true}}];

const DB_KEY = 'visureigiai_db_v1';
const SESSION_KEY = 'visureigiai_session_v1';
const DRAFT_KEY = 'visureigiai_draft_v1';
const SEARCH_KEY = 'visureigiai_search_v1';

const DEFAULT_SETTINGS = {
  requireApproval: false,
  bannedWords: ['crypto','bitcoin','forex','telegram','onlyfans','xxx','18+','invest','earn money','work from home']
};

const DEFAULT_FILTERS = () => ({
  brand: '',
  model: '',
  city: '',
  yearMin: '',
  yearMax: '',
  priceMin: '',
  priceMax: '',
  mileageMin: '',
  mileageMax: '',
  fuelType: '',
  gearbox: '',
  bodyType: '',
  drivetrain: '',
  condition: '',
  sellerType: '',
  vehicleType: '',
  query: '',
  featuredOnly: false,
  '4x4': false,
  awd: false,
  suv: false,
  noDefects: false,
  checkedHistory: false,
  pneumaticSuspension: false,
  panoramicRoof: false,
  hook: false,
  leather: false,
  heatedSeats: false,
  camera360: false,
  navigation: false,
  keyless: false,
  parkAssist: false,
  diffLock: false,
  hillDescent: false,
  offroadModes: false,
  lifted: false,
  roofRails: false,
  tintedWindows: false,
  alloyWheels: false,
  leftHandDrive: false,
  rightHandDrive: false
});

const EMPTY_DRAFT = () => ({
  id: '',
  title: '',
  description: '',
  price: '',
  currency: 'EUR',
  brand: '',
  model: '',
  year: '',
  firstRegMonth: '',
  firstRegYear: '',
  vin: '',
  mileage: '',
  fuelType: '',
  gearbox: '',
  bodyType: '',
  drivetrain: '',
  trim: '',
  engineSize: '',
  powerKw: '',
  powerHp: '',
  color: '',
  doors: '5',
  seats: '5',
  condition: 'Be defektų',
  defects: false,
  accidentHistory: false,
  serviceHistory: true,
  checkedHistory: true,
  location: '',
  sellerType: 'Privatus',
  contactPhone: '',
  email: '',
  video: '',
  images: [],
  featured: false,
  status: 'draft',
  topicTags: ['visureigis'],
  moderationStatus: 'draft',
  ownerId: '',
  features: {}
});

const state = {
  view: 'home',
  query: '',
  sort: 'newest',
  viewMode: 'grid',
  page: 1,
  showFilters: false,
  showAuth: false,
  authMode: 'login',
  detailId: '',
  sellStep: 1,
  editingId: '',
  adminTab: 'overview',
  profileTab: 'summary',
  filters: DEFAULT_FILTERS(),
  draft: EMPTY_DRAFT()
};

let db = loadDB();
let session = loadSession();
let toastTimer = null;

const app = document.getElementById('app');

init();

function init() {
  if (!db.users || !db.users.length) db = seedDB();
  restoreSearch();
  restoreDraft();
  ensureSession();
  bindGlobalEvents();
  render();
}

function seedDB() {
  return {
    users: JSON.parse(JSON.stringify(SEED_USERS)),
    listings: JSON.parse(JSON.stringify(SEED_LISTINGS)),
    settings: { ...DEFAULT_SETTINGS },
    savedSearches: [],
    reports: []
  };
}

function loadDB() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    return raw ? JSON.parse(raw) : { users: [], listings: [], settings: { ...DEFAULT_SETTINGS }, savedSearches: [], reports: [] };
  } catch {
    return { users: [], listings: [], settings: { ...DEFAULT_SETTINGS }, savedSearches: [], reports: [] };
  }
}
function saveDB() { localStorage.setItem(DB_KEY, JSON.stringify(db)); }

function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : { userId: '' };
  } catch {
    return { userId: '' };
  }
}
function saveSession() { localStorage.setItem(SESSION_KEY, JSON.stringify(session)); }

function restoreSearch() {
  try {
    const raw = localStorage.getItem(SEARCH_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.query = parsed.query || '';
    state.sort = parsed.sort || 'newest';
    state.viewMode = parsed.viewMode || 'grid';
    state.filters = { ...DEFAULT_FILTERS(), ...(parsed.filters || {}) };
  } catch {}
}
function saveSearch() {
  localStorage.setItem(SEARCH_KEY, JSON.stringify({
    query: state.query,
    sort: state.sort,
    viewMode: state.viewMode,
    filters: state.filters
  }));
}

function restoreDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (raw) state.draft = { ...EMPTY_DRAFT(), ...JSON.parse(raw) };
  } catch {}
}
function saveDraft() { localStorage.setItem(DRAFT_KEY, JSON.stringify(state.draft)); }

function ensureSession() {
  if (session.userId && !db.users.find(u => u.id === session.userId)) {
    session.userId = '';
    saveSession();
  }
}

function currentUser() {
  return db.users.find(u => u.id === session.userId) || null;
}
function isAdmin() { return currentUser()?.role === 'admin'; }

function bindGlobalEvents() {
  document.addEventListener('click', onClick);
  document.addEventListener('change', onChange);
  document.addEventListener('input', onInput);
  document.addEventListener('submit', onSubmit);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
}

function onClick(e) {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const action = el.dataset.action;

  if (action === 'nav') { state.view = el.dataset.view; if (state.view !== 'listings') state.page = 1; render(); }
  if (action === 'open-auth') { state.showAuth = true; render(); }
  if (action === 'close-auth') { state.showAuth = false; render(); }
  if (action === 'set-auth') { state.authMode = el.dataset.mode; state.showAuth = true; render(); }
  if (action === 'demo-login') demoLogin();
  if (action === 'logout') logout();
  if (action === 'toggle-filters') { state.showFilters = true; render(); }
  if (action === 'close-filters') { state.showFilters = false; render(); }
  if (action === 'reset-filters') { state.filters = DEFAULT_FILTERS(); state.query = ''; state.page = 1; state.sort = 'newest'; state.viewMode = 'grid'; saveSearch(); render(); }
  if (action === 'apply-filters') { state.showFilters = false; state.page = 1; saveSearch(); render(); }
  if (action === 'quick-filter') { state.view = 'listings'; state.query = el.dataset.value; state.page = 1; saveSearch(); render(); }
  if (action === 'brand-filter') { state.view = 'listings'; state.filters.brand = el.dataset.brand; state.filters.model = ''; state.page = 1; saveSearch(); render(); }
  if (action === 'set-viewmode') { state.viewMode = el.dataset.mode; saveSearch(); render(); }
  if (action === 'sort') { state.sort = el.value; state.page = 1; saveSearch(); render(); }
  if (action === 'page') { state.page = Number(el.dataset.page); render(); }
  if (action === 'open-detail') { state.detailId = el.dataset.id; render(); }
  if (action === 'close-detail') { state.detailId = ''; render(); }
  if (action === 'detail-thumb') {
    const img = document.getElementById('detailMainPhoto');
    if (img) img.src = el.dataset.src;
    document.querySelectorAll('[data-action="detail-thumb"]').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }
  if (action === 'toggle-fav') toggleFavorite(el.dataset.id);
  if (action === 'contact-listing') showToast('Kontaktas nukopijuotas / parodytas');
  if (action === 'profile-tab') { state.profileTab = el.dataset.tab; render(); }
  if (action === 'admin-tab') { state.adminTab = el.dataset.tab; render(); }
  if (action === 'sell-step') { state.sellStep = Number(el.dataset.step); render(); }
  if (action === 'sell-prev') { saveWizardDraft(); state.sellStep = Math.max(1, state.sellStep - 1); render(); }
  if (action === 'sell-next') { saveWizardDraft(); if (validateStep()) { state.sellStep = Math.min(5, state.sellStep + 1); render(); } }
  if (action === 'publish-listing') publishListing(false);
  if (action === 'update-listing') publishListing(true);
  if (action === 'save-draft') saveCurrentDraft(true);
  if (action === 'clear-draft') { state.draft = EMPTY_DRAFT(); state.editingId = ''; localStorage.removeItem(DRAFT_KEY); render(); }
  if (action === 'edit-listing') editListing(el.dataset.id);
  if (action === 'delete-listing') deleteListing(el.dataset.id);
  if (action === 'toggle-status') toggleSold(el.dataset.id);
  if (action === 'admin-approve') approveListing(el.dataset.id);
  if (action === 'switch-user') switchUser(el.dataset.id);
  if (action === 'toggle-setting') toggleSetting(el.dataset.setting);
  if (action === 'edit-banned') editBannedWords();
  if (action === 'remove-photo') removePhoto(Number(el.dataset.index));
  if (action === 'set-main-photo') setMainPhoto(Number(el.dataset.index));
  if (action === 'save-search') saveCurrentSearch();
  if (action === 'open-browse') { state.view = 'listings'; render(); }
  if (action === 'open-sell') { state.view = 'sell'; render(); }
  if (action === 'chip-brand') { state.view = 'listings'; state.filters.brand = el.dataset.brand; state.filters.model=''; render(); }
  if (action === 'save-filter-chip') { state.view = 'listings'; state.query = el.dataset.query; render(); }
}

function onChange(e) {
  const el = e.target;
  if (el.matches('#photoInput')) handlePhotoUpload(el.files);
  if (el.matches('[data-filter]')) {
    const key = el.dataset.filter;
    state.filters[key] = el.type === 'checkbox' ? el.checked : el.value;
    if (key === 'brand') {
      state.filters.model = '';
      render();
      return;
    }
    if (key === 'query') state.query = el.value;
    saveSearch();
  }
  if (el.matches('[data-brand-select]')) {
    state.draft.brand = el.value;
    state.draft.model = '';
    saveDraft();
    render();
  }
}

function onInput(e) {
  const el = e.target;
  if (el.id === 'topSearch') { state.query = el.value; state.page = 1; saveSearch(); render(); }
  if (el.closest('#authForm') || el.closest('#profileForm') || el.closest('#listingForm')) {
    if (el.dataset.draft) updateDraftField(el.dataset.draft, el);
    if (el.dataset.feature) toggleDraftFeature(el.dataset.feature, el);
  }
}

function onSubmit(e) {
  if (e.target.id === 'authForm') {
    e.preventDefault();
    authSubmit(new FormData(e.target));
  }
  if (e.target.id === 'profileForm') {
    e.preventDefault();
    profileSubmit(new FormData(e.target));
  }
  if (e.target.id === 'listingForm') {
    e.preventDefault();
    publishListing(!!state.editingId);
  }
}

function closeAll() { state.showAuth = false; state.showFilters = false; state.detailId = ''; render(); }

function saveCurrentSearch() {
  const name = prompt('Saugoti paiešką kaip:', 'Mano paieška');
  if (!name) return;
  db.savedSearches.push({
    id: uid('s'),
    name,
    query: state.query,
    filters: JSON.parse(JSON.stringify(state.filters)),
    sort: state.sort,
    createdAt: new Date().toISOString()
  });
  saveDB();
  showToast('Paieška išsaugota');
}

function publishListing(editing) {
  saveWizardDraft();
  const u = currentUser();
  if (!u) return showToast('Prisijunkite pirma');
  if (!state.draft.brand || !state.draft.model || !state.draft.title || !state.draft.price || !state.draft.location) return showToast('Užpildykite privalomus laukus');
  if (containsBannedWord(state.draft.title + ' ' + state.draft.description)) return showToast('Rasta draudžiamų žodžių');
  const item = { ...JSON.parse(JSON.stringify(state.draft)) };
  item.ownerId = u.id;
  item.status = db.settings.requireApproval ? 'pending' : 'active';
  item.moderationStatus = db.settings.requireApproval ? 'pending' : 'approved';
  item.createdAt = item.createdAt || new Date().toISOString();
  item.updatedAt = new Date().toISOString();
  item.topicTags = Array.from(new Set([...(item.topicTags || []), item.brand, item.model, item.bodyType].filter(Boolean)));
  if (editing && item.id) {
    const idx = db.listings.findIndex(l => l.id === item.id);
    if (idx >= 0) db.listings[idx] = { ...db.listings[idx], ...item };
    else db.listings.push(item);
  } else {
    if (!item.id) item.id = uid('l');
    db.listings.push(item);
  }
  saveDB();
  state.draft = EMPTY_DRAFT();
  state.editingId = '';
  localStorage.removeItem(DRAFT_KEY);
  state.view = 'listings';
  state.page = 1;
  showToast(db.settings.requireApproval ? 'Skelbimas laukia tvirtinimo' : 'Skelbimas publikuotas');
  render();
}

function saveCurrentDraft(asDraft) {
  saveWizardDraft();
  const u = currentUser();
  if (!u) return showToast('Prisijunkite pirma');
  state.draft.ownerId = u.id;
  state.draft.status = 'draft';
  state.draft.moderationStatus = 'draft';
  if (!state.draft.id) state.draft.id = uid('l');
  const idx = db.listings.findIndex(l => l.id === state.draft.id);
  if (idx >= 0) db.listings[idx] = { ...db.listings[idx], ...JSON.parse(JSON.stringify(state.draft)) };
  else db.listings.push(JSON.parse(JSON.stringify(state.draft)));
  saveDB();
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state.draft));
  showToast('Juodraštis išsaugotas');
  render();
}

function saveWizardDraft() {
  const form = document.getElementById('listingForm');
  if (!form) return;
  const fd = new FormData(form);
  for (const [k, v] of fd.entries()) {
    if (['price','mileage','firstRegYear','firstRegMonth','engineSize','powerKw','powerHp'].includes(k)) state.draft[k] = v === '' ? '' : Number(v);
    else state.draft[k] = v;
  }
  form.querySelectorAll('[data-feature]').forEach(ch => {
    state.draft.features = state.draft.features || {};
    state.draft.features[ch.dataset.feature] = ch.checked;
  });
  saveDraft();
}

function validateStep() {
  if (state.sellStep === 1) {
    const req = ['brand','model','title','price','location'];
    for (const k of req) if (!state.draft[k]) { showToast('Užpildykite privalomus laukus'); return false; }
  }
  return true;
}

function updateDraftField(key, el) {
  if (['price','mileage','firstRegYear','firstRegMonth','engineSize','powerKw','powerHp'].includes(key)) state.draft[key] = el.value === '' ? '' : Number(el.value);
  else if (['defects','accidentHistory','serviceHistory','checkedHistory'].includes(key)) state.draft[key] = el.checked;
  else state.draft[key] = el.value;
  if (key === 'brand') state.draft.model = '';
  if (key === 'powerKw' && el.value && !state.draft.powerHp) state.draft.powerHp = Math.round(Number(el.value) * 1.36);
  saveDraft();
}
function toggleDraftFeature(key, el) {
  state.draft.features = state.draft.features || {};
  state.draft.features[key] = el.checked;
  if (key === 'frame') state.draft.frame = el.checked;
  saveDraft();
}

function handlePhotoUpload(files) {
  const list = Array.from(files || []);
  if (!list.length) return;
  const jobs = list.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  }));
  Promise.all(jobs).then(images => {
    state.draft.images = (state.draft.images || []).concat(images).slice(0, 40);
    saveDraft();
    showToast(`Įkelta ${images.length} nuotraukų`);
    render();
  });
}
function removePhoto(index) {
  state.draft.images.splice(index, 1);
  saveDraft();
  render();
}
function setMainPhoto(index) {
  const arr = state.draft.images || [];
  if (index < 0 || index >= arr.length) return;
  const [x] = arr.splice(index,1);
  arr.unshift(x);
  state.draft.images = arr;
  saveDraft();
  render();
}

function authSubmit(fd) {
  if (state.authMode === 'login') return login(fd.get('email'), fd.get('password'));
  return register({
    name: fd.get('name'),
    email: fd.get('email'),
    password: fd.get('password'),
    phone: fd.get('phone'),
    city: fd.get('city'),
    avatar: fd.get('avatar')
  });
}

async function register(data) {
  const email = String(data.email || '').trim().toLowerCase();
  if (!data.name || !email || !data.password) return showToast('Užpildykite laukus');
  if (db.users.some(u => u.email.toLowerCase() === email)) return showToast('Toks el. paštas jau naudojamas');
  const passwordHash = await sha256(data.password);
  const user = {
    id: uid('u'),
    name: data.name,
    email,
    passwordHash,
    phone: data.phone || '',
    city: data.city || '',
    avatar: data.avatar || (data.name[0] || 'U').toUpperCase(),
    role: 'user',
    favorites: []
  };
  db.users.push(user);
  saveDB();
  session.userId = user.id;
  saveSession();
  state.showAuth = false;
  showToast('Paskyra sukurta');
  render();
}
async function login(email, password) {
  const user = db.users.find(u => u.email.toLowerCase() === String(email || '').trim().toLowerCase());
  if (!user) return showToast('Vartotojas nerastas');
  const hash = await sha256(password || '');
  if (user.passwordHash && user.passwordHash !== hash) return showToast('Neteisingas slaptažodis');
  session.userId = user.id;
  saveSession();
  state.showAuth = false;
  showToast('Prisijungta');
  render();
}
async function demoLogin() {
  const admin = db.users.find(u => u.role === 'admin') || db.users[0];
  if (!admin) return;
  session.userId = admin.id;
  saveSession();
  state.showAuth = false;
  showToast('Demo prisijungimas');
  render();
}
function logout() {
  session.userId = '';
  saveSession();
  state.showAuth = false;
  showToast('Atsijungta');
  render();
}

function profileSubmit(fd) {
  const user = currentUser();
  if (!user) return;
  user.name = fd.get('name');
  user.phone = fd.get('phone');
  user.city = fd.get('city');
  user.avatar = fd.get('avatar') || user.avatar;
  saveDB();
  showToast('Profilis atnaujintas');
  render();
}

function switchUser(id) {
  session.userId = id;
  saveSession();
  showToast('Vartotojas perjungtas');
  render();
}
function toggleSetting(key) {
  if (key === 'requireApproval') {
    db.settings.requireApproval = !db.settings.requireApproval;
    saveDB();
    showToast(db.settings.requireApproval ? 'Tvirtinimas įjungtas' : 'Tvirtinimas išjungtas');
    render();
  }
}
function editBannedWords() {
  const current = db.settings.bannedWords.join(', ');
  const updated = prompt('Uždrausti žodžiai, atskirti kableliais:', current);
  if (updated === null) return;
  db.settings.bannedWords = updated.split(',').map(s => s.trim()).filter(Boolean);
  saveDB();
  showToast('Sąrašas atnaujintas');
}
function containsBannedWord(text) {
  const t = String(text || '').toLowerCase();
  return (db.settings.bannedWords || []).some(w => w && t.includes(w.toLowerCase()));
}

function editListing(id) {
  const item = db.listings.find(l => l.id === id);
  if (!item) return;
  if (!canManage(item)) return showToast('Nėra prieigos');
  state.draft = JSON.parse(JSON.stringify(item));
  state.editingId = id;
  state.sellStep = 1;
  localStorage.setItem(DRAFT_KEY, JSON.stringify(state.draft));
  state.view = 'sell';
  render();
}
function deleteListing(id) {
  const item = db.listings.find(l => l.id === id);
  if (!item) return;
  if (!canManage(item)) return showToast('Nėra prieigos');
  if (!confirm('Trinti skelbimą?')) return;
  item.status = 'deleted';
  saveDB();
  showToast('Skelbimas ištrintas');
  render();
}
function toggleSold(id) {
  const item = db.listings.find(l => l.id === id);
  if (!item) return;
  item.status = item.status === 'sold' ? 'active' : 'sold';
  item.soldAt = item.status === 'sold' ? new Date().toISOString() : '';
  saveDB();
  render();
}
function approveListing(id) {
  const item = db.listings.find(l => l.id === id);
  if (!item) return;
  item.status = 'active';
  item.moderationStatus = 'approved';
  saveDB();
  showToast('Patvirtinta');
  render();
}
function canManage(item) {
  const user = currentUser();
  return !!user && (user.role === 'admin' || user.id === item.ownerId);
}
function toggleFavorite(id) {
  const user = currentUser();
  if (!user) { state.showAuth = true; state.authMode = 'login'; render(); return; }
  user.favorites = user.favorites || [];
  const idx = user.favorites.indexOf(id);
  if (idx >= 0) user.favorites.splice(idx, 1); else user.favorites.push(id);
  const listing = db.listings.find(l => l.id === id);
  if (listing) listing.favorites = Math.max(0, (listing.favorites || 0) + (idx >= 0 ? -1 : 1));
  saveDB();
  render();
}
function isFav(id) { return !!currentUser()?.favorites?.includes(id); }

function filteredListings() {
  let arr = db.listings.filter(l => l.status !== 'deleted');
  if (!isAdmin()) arr = arr.filter(l => l.status === 'active' || l.status === 'sold' || (!db.settings.requireApproval && l.status === 'pending'));
  arr = arr.filter(matches);
  if (state.sort === 'newest') arr.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (state.sort === 'priceAsc') arr.sort((a,b) => Number(a.price)-Number(b.price));
  if (state.sort === 'priceDesc') arr.sort((a,b) => Number(b.price)-Number(a.price));
  if (state.sort === 'mileageAsc') arr.sort((a,b) => Number(a.mileage)-Number(b.mileage));
  if (state.sort === 'popular') arr.sort((a,b) => ((b.views||0)+(b.favorites||0)*10+(b.leadClicks||0)*5) - ((a.views||0)+(a.favorites||0)*10+(a.leadClicks||0)*5));
  arr.sort((a,b) => Number(b.featured) - Number(a.featured));
  return arr;
}
function matches(l) {
  const f = state.filters;
  const q = state.query.trim().toLowerCase();
  if (q) {
    const hay = [l.title,l.description,l.brand,l.model,l.location,l.vin,l.bodyType,l.color].join(' ').toLowerCase();
    if (!hay.includes(q)) return false;
  }
  if (f.brand && l.brand !== f.brand) return false;
  if (f.model && l.model !== f.model) return false;
  if (f.city && l.location !== f.city) return false;
  if (f.yearMin && Number(l.year) < Number(f.yearMin)) return false;
  if (f.yearMax && Number(l.year) > Number(f.yearMax)) return false;
  if (f.priceMin && Number(l.price) < Number(f.priceMin)) return false;
  if (f.priceMax && Number(l.price) > Number(f.priceMax)) return false;
  if (f.mileageMin && Number(l.mileage) < Number(f.mileageMin)) return false;
  if (f.mileageMax && Number(l.mileage) > Number(f.mileageMax)) return false;
  if (f.fuelType && l.fuelType !== f.fuelType) return false;
  if (f.gearbox && l.gearbox !== f.gearbox) return false;
  if (f.bodyType && l.bodyType !== f.bodyType) return false;
  if (f.drivetrain && l.drivetrain !== f.drivetrain) return false;
  if (f.condition && l.condition !== f.condition) return false;
  if (f.sellerType && l.sellerType !== f.sellerType) return false;
  if (f.vehicleType && l.vehicleType !== f.vehicleType) return false;
  if (f.featuredOnly && !l.featured) return false;
  if (f.noDefects && l.defects) return false;
  if (f.checkedHistory && !l.checkedHistory) return false;
  if (f['4x4'] && !['4WD','AWD'].includes(l.drivetrain)) return false;
  if (f.awd && l.drivetrain !== 'AWD') return false;
  if (f.suv && !String(l.bodyType).toLowerCase().includes('visureigis') && !String(l.bodyType).toLowerCase().includes('krosoveris')) return false;
  const features = ['pneumaticSuspension','panoramicRoof','hook','leather','heatedSeats','camera360','navigation','keyless','parkAssist','diffLock','hillDescent','offroadModes','lifted','roofRails','tintedWindows','alloyWheels','leftHandDrive','rightHandDrive'];
  for (const k of features) if (f[k] && !l.features?.[k]) return false;
  return true;
}
function currentListingsPage() {
  const arr = filteredListings();
  const start = (state.page - 1) * 12;
  return arr.slice(start, start + 12);
}
function totalPages() {
  return Math.max(1, Math.ceil(filteredListings().length / 12));
}
function activeFilterCount() {
  let c = 0;
  if (state.query) c++;
  for (const [k,v] of Object.entries(state.filters)) {
    if (typeof v === 'boolean' && v) c++;
    if (typeof v === 'string' && v) c++;
  }
  return c;
}

function render() {
  const u = currentUser();
  const all = filteredListings();
  const featured = all.filter(x => x.featured).slice(0,3);
  const latest = all.slice(0,8);
  app.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="brand" data-action="nav" data-view="home">
          <div class="brand-mark">V</div>
          <div class="brand-text">
            <strong>Visureigiai.lt</strong>
            <span>Visureigių skelbimai • dalys • ratai • 4x4</span>
          </div>
        </div>
        <div class="top-actions">
          <button class="icon-btn" data-action="open-auth">${u ? avatarMini(u) : iconUser()}</button>
          <button class="icon-btn" data-action="toggle-filters">${iconFilter()}</button>
        </div>
      </div>
      <div class="container search-wrap">
        <div class="search-bar">
          ${iconSearch()}
          <input id="topSearch" type="search" placeholder="Ieškoti pagal markę, modelį, miestą, kainą..." value="${esc(state.query)}" />
          <span class="kbd">⌘K</span>
        </div>
      </div>
    </div>
    ${renderSubnav()}
    <main class="layout">
      ${state.view === 'home' ? renderHome(u, featured, latest) : ''}
      ${state.view === 'listings' ? renderListingsView(u) : ''}
      ${state.view === 'sell' ? renderSellView(u) : ''}
      ${state.view === 'profile' ? renderProfileView(u) : ''}
      ${state.view === 'admin' ? renderAdminView(u) : ''}
    </main>
    ${renderFooter()}
    ${renderFiltersModal()}
    ${renderAuthModal()}
    ${renderDetailModal()}
    <button class="fab" data-action="nav" data-view="sell">${iconPlus()} Įkelti skelbimą</button>
    <div class="floating-note" id="toast"></div>
  `;
  bindViewEvents();
  updateActiveNav();
  updateTopSearch();
}

function renderSubnav() {
  return `
  <div class="sticky-subnav">
    <div class="inner">
      <div class="chips">
        ${chip('Visureigiai', 'home', '🚙')}
        ${chip('Pirk / Parduok', 'listings', '🛒')}
        ${chip('Dalys', 'listings', '⚙️', 'dalys')}
        ${chip('Ratai', 'listings', '🛞', 'ratai')}
        ${chip('Padangos', 'listings', '🛞', 'padangos')}
        ${chip('Supirkimas', 'listings', '💰', 'supirkimas')}
      </div>
      <div class="right">
        <div class="segmented">
          <button class="${state.viewMode === 'grid' ? 'active' : ''}" data-action="set-viewmode" data-mode="grid">Kortelės</button>
          <button class="${state.viewMode === 'list' ? 'active' : ''}" data-action="set-viewmode" data-mode="list">Sąrašas</button>
        </div>
        <select class="select" style="width:auto;min-width:180px" data-action="sort">
          <option value="newest" ${state.sort==='newest'?'selected':''}>Naujausi</option>
          <option value="priceAsc" ${state.sort==='priceAsc'?'selected':''}>Pigiausi</option>
          <option value="priceDesc" ${state.sort==='priceDesc'?'selected':''}>Brangiausi</option>
          <option value="mileageAsc" ${state.sort==='mileageAsc'?'selected':''}>Mažiausia rida</option>
          <option value="popular" ${state.sort==='popular'?'selected':''}>Populiariausi</option>
        </select>
      </div>
    </div>
  </div>`;
}

function chip(label, view, emoji, query) {
  return `<button class="chip-btn ${state.view === view && !query ? 'active' : ''}" data-action="${query ? 'save-filter-chip' : 'nav'}" ${query ? `data-query="${esc(query)}"` : `data-view="${view}"`}>${emoji} ${label}</button>`;
}

function renderHome(u, featured, latest) {
  const topBrands = Object.keys(BRAND_CATALOG).slice(0, 12);
  return `
    <section class="section full hero">
      <div class="hero-inner">
        <div>
          <span class="tagline">Nemokami skelbimai dabar • premium-ready architektūra</span>
          <h1>Visureigių portalas, kuris atrodo solidžiai ir veikia greitai.</h1>
          <p>Visureigiai.lt orientuotas į SUV, 4x4, dalis, ratus, padangas ir susijusias paslaugas. Įkelk skelbimą, filtruok pagal techniką ir rask pirkėją.</p>
          <div class="hero-actions">
            <button class="btn" data-action="nav" data-view="sell">+ Įkelti skelbimą</button>
            <button class="ghost-btn" data-action="nav" data-view="listings">Naršyti skelbimus</button>
            <button class="ghost-btn" data-action="toggle-filters">Išplėstiniai filtrai</button>
          </div>
          <div class="trust">
            <span class="pill">Greita paieška</span>
            <span class="pill">Mobilus pirmumas</span>
            <span class="pill">Nemokamai dabar</span>
            <span class="pill">Premium plėtrai</span>
          </div>
        </div>
        <div class="hero-card">
          <h3>Portalas paruoštas augimui</h3>
          <div class="stats">
            <div class="stat"><strong>${db.listings.filter(l=>l.status==='active').length}</strong><span>Aktyvūs skelbimai</span></div>
            <div class="stat"><strong>${db.users.length}</strong><span>Vartotojai</span></div>
            <div class="stat"><strong>${db.listings.filter(l=>l.featured).length}</strong><span>Featured</span></div>
            <div class="stat"><strong>${Object.keys(BRAND_CATALOG).length}</strong><span>Markių</span></div>
          </div>
          <div class="spacer"></div>
          <div class="help"><strong>Įtrauktos funkcijos:</strong><br>Registracija, prisijungimas, nuotraukos, juodraščiai, redagavimas, favorites, filtrai, admin moderacija ir veikiantis sąrašas.</div>
        </div>
      </div>
    </section>

    <section class="section full">
      <div class="section-header">
        <div><h2 class="section-title">Greitos kategorijos</h2><p class="section-subtitle">Spausk ir filtruok pagal pagrindines temas.</p></div>
        <button class="mini-btn primary" data-action="nav" data-view="listings">Visi skelbimai</button>
      </div>
      <div class="toolbar">
        <div class="chips">
          ${['SUV','4x4','Dalys','Ratai','Padangos','Supirkimas','Krosoveriai','Off-road'].map(x => `<button class="chip-btn" data-action="quick-filter" data-value="${esc(x)}">${x}</button>`).join('')}
        </div>
      </div>
      <div class="search-suggestions">
        ${topBrands.map(b => `<button class="chip-btn" data-action="brand-filter" data-brand="${esc(b)}">${esc(b)}</button>`).join('')}
      </div>
    </section>

    <section class="section full">
      <div class="section-header"><div><h2 class="section-title">Featured skelbimai</h2><p class="section-subtitle">Išskirti skelbimai su didesniu matomumu.</p></div></div>
      <div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}">
        ${featured.length ? featured.map(renderCard).join('') : emptyBox('Kol kas nėra featured skelbimų', 'Pažymėk kelis skelbimus kaip featured admin panelėje.')}
      </div>
    </section>

    <section class="section full">
      <div class="section-header"><div><h2 class="section-title">Naujausi skelbimai</h2><p class="section-subtitle">Rodoma pagal šviežumą ir aktualumą.</p></div></div>
      <div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}">
        ${latest.map(renderCard).join('')}
      </div>
    </section>
  `;
}

function renderListingsView(u) {
  const page = currentListingsPage();
  const total = filteredListings().length;
  return `
    <section class="section full">
      <div class="page-head">
        <h2>Skelbimai</h2>
        <p>Visureigiai, 4x4, dalys, ratai, padangos ir susijusios paslaugos. Filtruok pagal viską, kas svarbu.</p>
      </div>
      <div class="toolbar">
        <div class="inline-actions">
          <button class="btn" data-action="toggle-filters">Filtrai ${activeFilterCount() ? `(${activeFilterCount()})` : ''}</button>
          <button class="ghost-btn" data-action="save-search">Išsaugoti paiešką</button>
          <button class="ghost-btn" data-action="reset-filters">Reset</button>
        </div>
        <span class="pill-stat">${total} skelbimų</span>
      </div>
      <div class="results-bar">
        <select class="select" style="max-width:220px" data-action="brand-select">
          <option value="">Visos markės</option>
          ${Object.keys(BRAND_CATALOG).map(b => `<option ${state.filters.brand===b?'selected':''}>${esc(b)}</option>`).join('')}
        </select>
        <select class="select" style="max-width:220px" data-action="model-select">
          <option value="">Visi modeliai</option>
          ${(state.filters.brand ? BRAND_CATALOG[state.filters.brand] : []).map(m => `<option ${state.filters.model===m?'selected':''}>${esc(m)}</option>`).join('')}
        </select>
        <select class="select" style="max-width:220px" data-action="city-select">
          <option value="">Visi miestai</option>
          ${CITIES.map(c => `<option ${state.filters.city===c?'selected':''}>${esc(c)}</option>`).join('')}
        </select>
        <input class="input" style="max-width:180px" placeholder="Kaina nuo" data-filter="priceMin" value="${esc(state.filters.priceMin)}" />
        <input class="input" style="max-width:180px" placeholder="Kaina iki" data-filter="priceMax" value="${esc(state.filters.priceMax)}" />
      </div>
      <div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}">
        ${page.length ? page.map(renderCard).join('') : emptyBox('Skelbimų nerasta', 'Pabandyk pakeisti filtrus ar kainos ribas.')}
      </div>
      ${renderPagination()}
    </section>
  `;
}

function renderPagination() {
  const max = totalPages();
  if (max <= 1) return '';
  const cur = state.page;
  const pages = [];
  for (let p=1; p<=max; p++) {
    if (p === 1 || p === max || Math.abs(p-cur) <= 1) pages.push(p);
    else if (pages[pages.length-1] !== '...') pages.push('...');
  }
  return `<div class="toolbar" style="justify-content:center">
    <div class="segmented">
      <button ${cur<=1?'disabled':''} data-action="page" data-page="${Math.max(1,cur-1)}">←</button>
      ${pages.map(p => p==='...' ? '<button disabled>...</button>' : `<button class="${p===cur?'active':''}" data-action="page" data-page="${p}">${p}</button>`).join('')}
      <button ${cur>=max?'disabled':''} data-action="page" data-page="${Math.min(max,cur+1)}">→</button>
    </div>
  </div>`;
}

function renderCard(l) {
  const img = l.images?.[0] || placeholderImage(l);
  return `
    <article class="card ${l.featured ? 'featured' : ''}">
      <div class="media">
        <div class="badge-row">
          <span class="badge ${l.featured ? 'gold' : ''}">${l.featured ? '★ Featured' : labelStatus(l.status)}</span>
          <span class="badge">${l.year} m.</span>
        </div>
        <img src="${img}" alt="${esc(l.title)}" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="title-row">
          <div>
            <h3>${esc(l.brand)} ${esc(l.model)}</h3>
            <div class="small-note">${esc(l.location)} • ${esc(l.fuelType)} • ${esc(l.gearbox)}</div>
          </div>
          <div class="price">${money(l.price)}</div>
        </div>
        <div class="meta">
          <span>${esc(l.bodyType)}</span><span>${num(l.mileage)} km</span><span>${esc(l.drivetrain)}</span><span>${esc(l.condition)}</span>
        </div>
        <p class="description">${esc(l.description || '')}</p>
        <div class="card-actions">
          <button class="mini-btn primary" data-action="open-detail" data-id="${l.id}">Peržiūrėti</button>
          <button class="mini-btn" data-action="toggle-fav" data-id="${l.id}">${isFav(l.id) ? '★ Įsiminta' : '♡ Įsiminti'}</button>
          ${canManage(l) ? `<button class="mini-btn" data-action="edit-listing" data-id="${l.id}">Redaguoti</button>` : ''}
          ${isAdmin() ? `<button class="mini-btn danger" data-action="toggle-status" data-id="${l.id}">${l.status === 'sold' ? 'Aktyvuoti' : 'Parduota'}</button>` : ''}
        </div>
      </div>
    </article>`;
}

function renderSellView(u) {
  if (!u) {
    return `
      <section class="section full">
        <div class="page-head"><h2>Įkelti skelbimą</h2><p>Prisijunkite, kad galėtumėte įkelti, redaguoti ir valdyti skelbimus.</p></div>
        <div class="panel">
          <div class="help">Skelbimai dabar yra <strong>nemokami</strong>. Architektūra paruošta premium planams ateityje.</div>
          <div class="spacer"></div>
          <button class="btn" data-action="open-auth">Prisijungti / registruotis</button>
        </div>
      </section>`;
  }
  const step = state.sellStep;
  const steps = [
    ['1. Pagrindai','Markė, modelis, VIN'],
    ['2. Foto','Nuotraukos ir video'],
    ['3. Technika','Variklis, pavara, būklė'],
    ['4. Funkcijos','Komplektacija'],
    ['5. Peržiūra','Patikrink ir publikuok']
  ];
  return `
    <section class="section full">
      <div class="page-head"><h2>${state.editingId ? 'Redaguoti skelbimą' : 'Įkelti skelbimą'}</h2><p>Žingsninis vedlys, pritaikytas greitam visureigių skelbimų įkėlimui.</p></div>
      <div class="toolbar">
        <span class="tagline">${state.editingId ? 'Redagavimo režimas' : 'Skelbimai dabar nemokami'}</span>
        <div class="inline-actions">
          <button class="ghost-btn" data-action="save-draft">Išsaugoti juodraštį</button>
          <button class="ghost-btn" data-action="clear-draft">Išvalyti</button>
        </div>
      </div>
      <div class="tabs">
        ${steps.map((s, i) => `<button class="tab ${step===i+1?'active':''}" data-action="sell-step" data-step="${i+1}">${s[0]}<br><span class="small-note">${s[1]}</span></button>`).join('')}
      </div>
      <div class="panel">
        <form id="listingForm" class="wizard">
          ${renderSellStep(step)}
          <div class="wizard-footer">
            <div class="inline-actions">
              <button type="button" class="ghost-btn" data-action="sell-prev" ${step===1?'disabled':''}>← Atgal</button>
              <button type="button" class="ghost-btn" data-action="sell-next">${step===5 ? 'Peržiūra' : 'Toliau →'}</button>
            </div>
            <div class="inline-actions">
              <button type="button" class="mini-btn" data-action="save-draft">Saugoti juodraštį</button>
              <button type="submit" class="btn gold">${state.editingId ? 'Atnaujinti skelbimą' : 'Publikuoti skelbimą'}</button>
            </div>
          </div>
        </form>
      </div>
    </section>`;
}

function renderSellStep(step) {
  const brs = Object.keys(BRAND_CATALOG);
  const models = state.draft.brand ? BRAND_CATALOG[state.draft.brand] : [];
  if (step === 1) return `
    <div class="field-grid">
      <div class="field"><label>Markė *</label><select class="select" data-brand-select required><option value="">Pasirinkite markę</option>${brs.map(b => `<option ${state.draft.brand===b?'selected':''}>${esc(b)}</option>`).join('')}</select></div>
      <div class="field"><label>Modelis *</label><select class="select" data-draft="model" required><option value="">Pasirinkite modelį</option>${models.map(m => `<option ${state.draft.model===m?'selected':''}>${esc(m)}</option>`).join('')}</select></div>
      <div class="field"><label>Pirmos registracijos metai *</label><select class="select" data-draft="firstRegYear" required><option value="">Metai</option>${range(1990,2025).map(y => `<option ${String(state.draft.firstRegYear)===String(y)?'selected':''}>${y}</option>`).join('')}</select></div>
      <div class="field"><label>Pirmos registracijos mėnuo</label><select class="select" data-draft="firstRegMonth"><option value="">Mėnuo</option>${range(1,12).map(m => `<option value="${m}" ${String(state.draft.firstRegMonth)===String(m)?'selected':''}>${m}</option>`).join('')}</select></div>
      <div class="field"><label>VIN kodas</label><input class="input" data-draft="vin" placeholder="17 simbolių VIN" value="${esc(state.draft.vin)}"></div>
      <div class="field"><label>Pavadinimas *</label><input class="input" data-draft="title" required value="${esc(state.draft.title)}" placeholder="Pvz. Toyota Land Cruiser 2008"></div>
      <div class="field"><label>Kaina *</label><input class="input" type="number" data-draft="price" required value="${esc(state.draft.price)}" placeholder="8900"></div>
      <div class="field"><label>Miestas *</label><select class="select" data-draft="location" required><option value="">Pasirinkite miestą</option>${CITIES.map(c => `<option ${state.draft.location===c?'selected':''}>${esc(c)}</option>`).join('')}</select></div>
    </div>
    <div class="field"><label>Aprašymas *</label><textarea class="textarea" data-draft="description" required placeholder="Trumpai apie būklę, komplektaciją ir kontaktą...">${esc(state.draft.description)}</textarea></div>
    <div class="help">Patarimas: pavadinime naudok markę, modelį ir metus. Aprašyme nurodyk variklio tipą, būklę ir kontaktą.</div>
  `;
  if (step === 2) return `
    <div class="field">
      <label>Įkelkite nuotraukas *</label>
      <div class="dropzone"><strong>Nuotraukos</strong> Įkelkite iki 40 nuotraukų. Pirmoji bus pagrindinė.<div class="spacer"></div><input id="photoInput" type="file" accept="image/*" multiple></div>
      <div class="spacer"></div>
      <div class="upload-grid">
        ${(state.draft.images || []).length ? state.draft.images.map((src, idx) => `<div class="preview"><img src="${src}"><button type="button" data-action="remove-photo" data-index="${idx}">×</button><button type="button" class="main" data-action="set-main-photo" data-index="${idx}">${idx===0 ? 'Pagrindinė' : 'Į priekį'}</button></div>`).join('') : '<div class="muted">Nuotraukų dar nėra.</div>'}
      </div>
    </div>
    <div class="field-grid">
      <div class="field"><label>Video nuoroda</label><input class="input" data-draft="video" placeholder="YouTube / mp4 linkas" value="${esc(state.draft.video)}"></div>
      <div class="field"><label>Pagrindinė nuotrauka</label><div class="help">Pasirinkite geriausią nuotrauką kaip pagrindinę.</div></div>
    </div>
  `;
  if (step === 3) return `
    <div class="field-grid three">
      <div class="field"><label>Rida *</label><input class="input" type="number" data-draft="mileage" required value="${esc(state.draft.mileage)}" placeholder="km"></div>
      <div class="field"><label>Kuro tipas *</label><select class="select" data-draft="fuelType" required><option value="">Pasirinkite</option>${fuel_types.map(x => `<option ${state.draft.fuelType===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Pavarų dėžė *</label><select class="select" data-draft="gearbox" required><option value="">Pasirinkite</option>${gearboxes.map(x => `<option ${state.draft.gearbox===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Kėbulo tipas *</label><select class="select" data-draft="bodyType" required><option value="">Pasirinkite</option>${body_types.map(x => `<option ${state.draft.bodyType===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Trauka *</label><select class="select" data-draft="drivetrain" required><option value="">Pasirinkite</option>${drivetrains.map(x => `<option ${state.draft.drivetrain===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Variklio tūris cm³</label><input class="input" type="number" data-draft="engineSize" value="${esc(state.draft.engineSize)}" placeholder="1995"></div>
      <div class="field"><label>Galia kW</label><input class="input" type="number" data-draft="powerKw" value="${esc(state.draft.powerKw)}" placeholder="100"></div>
      <div class="field"><label>Galia HP</label><input class="input" type="number" data-draft="powerHp" value="${esc(state.draft.powerHp)}" placeholder="136"></div>
      <div class="field"><label>Spalva</label><input class="input" data-draft="color" value="${esc(state.draft.color)}" placeholder="Juoda"></div>
      <div class="field"><label>Durys</label><select class="select" data-draft="doors">${['3','5'].map(x => `<option ${String(state.draft.doors)===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Sėdimos vietos</label><select class="select" data-draft="seats">${['2','4','5','7','8'].map(x => `<option ${String(state.draft.seats)===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Būklė *</label><select class="select" data-draft="condition" required>${conditions.map(x => `<option ${state.draft.condition===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Komplektacija</label><input class="input" data-draft="trim" value="${esc(state.draft.trim)}" placeholder="Versija / komplektacija"></div>
    </div>
    <div class="field-grid">
      <label class="check"><input type="checkbox" data-draft="defects" ${state.draft.defects ? 'checked' : ''}> <span>Yra defektų</span></label>
      <label class="check"><input type="checkbox" data-draft="accidentHistory" ${state.draft.accidentHistory ? 'checked' : ''}> <span>Buvo įvykis / daužtas</span></label>
      <label class="check"><input type="checkbox" data-draft="serviceHistory" ${state.draft.serviceHistory ? 'checked' : ''}> <span>Serviso istorija</span></label>
      <label class="check"><input type="checkbox" data-draft="checkedHistory" ${state.draft.checkedHistory ? 'checked' : ''}> <span>Patikrinta istorija</span></label>
    </div>
  `;
  if (step === 4) return `
    <div class="feature-grid">
      ${FEATURE_OPTIONS.map(([k,l]) => `<label class="check"><input type="checkbox" data-feature="${k}" ${state.draft.features?.[k] ? 'checked' : ''}><span>${l}</span></label>`).join('')}
    </div>
    <div class="field-grid">
      <div class="field"><label>Skelbimo tipas</label><select class="select" data-draft="sellerType">${seller_types.map(x => `<option ${state.draft.sellerType===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Visureigio tipas</label><select class="select" data-draft="vehicleType"><option value="">Pasirinkite</option>${['Visureigis','SUV','Krosoveris','4x4','Pikapas','Off-road','Frame SUV'].map(x => `<option ${state.draft.vehicleType===x?'selected':''}>${x}</option>`).join('')}</select></div>
      <div class="field"><label>Kontaktinis telefonas</label><input class="input" data-draft="contactPhone" value="${esc(state.draft.contactPhone || currentUser()?.phone || '')}" placeholder="+370..."></div>
      <div class="field"><label>El. paštas</label><input class="input" data-draft="email" value="${esc(state.draft.email || currentUser()?.email || '')}" placeholder="email@..."></div>
    </div>
    <div class="help">Pažymėkite svarbiausias savybes – tai padės filtruose ir skelbimų peržiūroje.</div>
  `;
  const featText = Object.keys(state.draft.features || {}).filter(k => state.draft.features[k]).map(k => FEATURE_OPTIONS.find(f => f[0]===k)?.[1] || k).join(' • ');
  return `
    <div class="detail-hero">
      <div>
        <div class="gallery-main"><img src="${(state.draft.images && state.draft.images[0]) || placeholderImage(state.draft)}" alt="preview"></div>
        <div class="gallery-thumbs">${(state.draft.images || []).slice(0,5).map((src, idx) => `<button type="button" data-action="detail-thumb" data-src="${src}" class="${idx===0?'active':''}"><img src="${src}"></button>`).join('')}</div>
      </div>
      <div class="detail-info">
        <div class="info-box">
          <div class="price">${state.draft.price ? money(state.draft.price) : '—'}</div>
          <div class="small-note">${esc(state.draft.brand)} ${esc(state.draft.model)} • ${esc(state.draft.firstRegYear || '—')} • ${esc(state.draft.location || '—')}</div>
        </div>
        <div class="info-box"><h4>Technika</h4><div class="kv"><div><strong>Rida</strong>${num(state.draft.mileage||0)} km</div><div><strong>Variklis</strong>${esc(state.draft.engineSize || '—')} cm³</div><div><strong>Galia</strong>${esc(state.draft.powerKw || '—')} kW / ${esc(state.draft.powerHp || '—')} HP</div><div><strong>Būklė</strong>${esc(state.draft.condition || '—')}</div></div></div>
        <div class="info-box"><h4>Funkcijos</h4><div class="small-note" style="line-height:1.6">${featText || '—'}</div></div>
        <div class="info-box"><h4>Aprašymas</h4><div class="small-note" style="line-height:1.6">${esc(state.draft.description || '')}</div></div>
      </div>
    </div>
  `;
}

function renderProfileView(u) {
  if (!u) return `
    <section class="section full"><div class="page-head"><h2>Mano paskyra</h2><p>Prisijunkite, kad matytumėte savo skelbimus ir juodraščius.</p></div><div class="panel"><button class="btn" data-action="open-auth">Prisijungti / registruotis</button></div></section>
  `;
  const my = db.listings.filter(l => l.ownerId === u.id && l.status !== 'deleted');
  const fav = db.listings.filter(l => isFav(l.id));
  const drafts = my.filter(l => l.status === 'draft');
  return `
    <section class="section full">
      <div class="page-head"><h2>Mano paskyra</h2><p>Profilis, skelbimai, juodraščiai ir įsiminti.</p></div>
      <div class="profile-wrap">
        <div class="profile-card">
          <div class="profile-top">
            <div class="avatar-lg">${u.avatar || u.name?.[0] || 'U'}</div>
            <div class="profile-meta"><strong>${esc(u.name)}</strong><span>${esc(u.email)}</span><span>${esc(u.city || '')} • ${esc(u.phone || '')}</span></div>
          </div>
          <div class="spacer"></div>
          <form id="profileForm" class="settings-list">
            <div class="field"><label>Vardas</label><input class="input" name="name" value="${esc(u.name)}"></div>
            <div class="field"><label>Telefonas</label><input class="input" name="phone" value="${esc(u.phone || '')}"></div>
            <div class="field"><label>Miestas</label><input class="input" name="city" value="${esc(u.city || '')}"></div>
            <div class="field"><label>Avataro raidė</label><input class="input" name="avatar" maxlength="2" value="${esc(u.avatar || '')}"></div>
            <button class="btn" type="submit">Išsaugoti profilį</button>
          </form>
          <div class="spacer"></div>
          <div class="banner"><div><strong>${u.role === 'admin' ? 'Administratorius' : 'Vartotojas'}</strong><br><span class="small-note">Skelbimai dabar nemokami. Ateityje bus galima prijungti planus.</span></div><button class="ghost-btn" data-action="logout">Atsijungti</button></div>
        </div>
        <div class="profile-card">
          <div class="tabs" style="padding:0 0 12px 0">
            <button class="tab ${state.profileTab==='summary'?'active':''}" data-action="profile-tab" data-tab="summary">Santrauka</button>
            <button class="tab ${state.profileTab==='my'?'active':''}" data-action="profile-tab" data-tab="my">Mano skelbimai</button>
            <button class="tab ${state.profileTab==='fav'?'active':''}" data-action="profile-tab" data-tab="fav">Įsiminti</button>
            <button class="tab ${state.profileTab==='drafts'?'active':''}" data-action="profile-tab" data-tab="drafts">Juodraščiai</button>
          </div>
          ${renderProfileTabContent(my, fav, drafts)}
        </div>
      </div>
    </section>
  `;
}

function renderProfileTabContent(my, fav, drafts) {
  if (state.profileTab === 'summary') return `
    <div class="admin-grid" style="padding:0">
      <div class="admin-stat"><strong>${my.filter(l=>l.status==='active').length}</strong><span>Aktyvūs</span></div>
      <div class="admin-stat"><strong>${drafts.length}</strong><span>Juodraščiai</span></div>
      <div class="admin-stat"><strong>${my.filter(l=>l.status==='sold').length}</strong><span>Parduota</span></div>
      <div class="admin-stat"><strong>${fav.length}</strong><span>Įsiminti</span></div>
    </div>
    <div class="spacer"></div>
    <div class="help">Čia bus ir dealer account, ir pranešimai, ir kontaktų peržiūros. Vėliau lengvai prijungsite mokamus planus.</div>
  `;
  if (state.profileTab === 'my') return `<div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}" style="padding:0">${my.length ? my.map(renderCard).join('') : emptyBox('Jūs dar neturite skelbimų','Spauskite Įkelti skelbimą ir pradėkite pardavinėti.')}</div>`;
  if (state.profileTab === 'fav') return `<div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}" style="padding:0">${fav.length ? fav.map(renderCard).join('') : emptyBox('Įsimintų skelbimų nėra','Spauskite ♡ ant bet kurio skelbimo.')}</div>`;
  return `<div class="grid ${state.viewMode === 'grid' ? 'grid-view' : 'desktop-grid'}" style="padding:0">${drafts.length ? drafts.map(renderCard).join('') : emptyBox('Juodraščių nėra','Išsaugokite skelbimą kaip juodraštį ir tęskite vėliau.')}</div>`;
}

function renderAdminView(u) {
  if (!u || !isAdmin()) return `
    <section class="section full"><div class="page-head"><h2>Admin panelė</h2><p>Šią sritį mato tik administratorius.</p></div><div class="panel"><div class="help">Prisijunkite su administratoriaus paskyra, kad matytumėte moderavimą ir statistiką.</div></div></section>
  `;
  const active = db.listings.filter(l => l.status === 'active');
  const pending = db.listings.filter(l => l.status === 'pending');
  const sold = db.listings.filter(l => l.status === 'sold');
  const stats = topCounts(active.map(l => l.brand)).slice(0,8);
  const cities = topCounts(active.map(l => l.location)).slice(0,8);
  return `
    <section class="section full">
      <div class="page-head"><h2>Admin panelė</h2><p>Moderavimas, statistika, katalogas ir portalo nustatymai.</p></div>
      <div class="admin-grid">
        <div class="admin-stat"><strong>${db.users.length}</strong><span>Vartotojų</span></div>
        <div class="admin-stat"><strong>${active.length}</strong><span>Aktyvių</span></div>
        <div class="admin-stat"><strong>${pending.length}</strong><span>Laukia tvirtinimo</span></div>
        <div class="admin-stat"><strong>${sold.length}</strong><span>Parduota</span></div>
      </div>
      <div class="toolbar">
        <div class="tabs" style="padding:0">
          <button class="tab ${state.adminTab==='overview'?'active':''}" data-action="admin-tab" data-tab="overview">Apžvalga</button>
          <button class="tab ${state.adminTab==='listings'?'active':''}" data-action="admin-tab" data-tab="listings">Skelbimai</button>
          <button class="tab ${state.adminTab==='users'?'active':''}" data-action="admin-tab" data-tab="users">Vartotojai</button>
          <button class="tab ${state.adminTab==='settings'?'active':''}" data-action="admin-tab" data-tab="settings">Nustatymai</button>
        </div>
      </div>
      ${renderAdminTabContent(stats, cities)}
    </section>
  `;
}
function renderAdminTabContent(stats, cities) {
  if (state.adminTab === 'overview') return `
    <div class="two-cols" style="padding:0 18px 18px">
      <div class="panel"><h3>Top markės</h3><div class="settings-list">${stats.map(([k,v]) => `<div class="setting-row"><span>${esc(k)}</span><strong>${v}</strong></div>`).join('')}</div></div>
      <div class="panel"><h3>Top miestai</h3><div class="settings-list">${cities.map(([k,v]) => `<div class="setting-row"><span>${esc(k)}</span><strong>${v}</strong></div>`).join('')}</div></div>
    </div>`;
  if (state.adminTab === 'listings') return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Pavadinimas</th><th>Būsena</th><th>Kaina</th><th>Miestas</th><th>Veiksmai</th></tr></thead>
        <tbody>
          ${[...db.listings].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(l => `
            <tr>
              <td>${esc(l.brand)} ${esc(l.model)}</td>
              <td><span class="status-pill ${statusClass(l.status)}">${esc(labelStatus(l.status))}</span></td>
              <td>${money(l.price)}</td>
              <td>${esc(l.location)}</td>
              <td>
                <button class="mini-btn" data-action="open-detail" data-id="${l.id}">Peržiūra</button>
                <button class="mini-btn" data-action="admin-approve" data-id="${l.id}">Tvirtinti</button>
                <button class="mini-btn" data-action="edit-listing" data-id="${l.id}">Redaguoti</button>
                <button class="mini-btn danger" data-action="delete-listing" data-id="${l.id}">Trinti</button>
              </td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  if (state.adminTab === 'users') return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Vartotojas</th><th>El. paštas</th><th>Miestas</th><th>Rolė</th><th>Veiksmai</th></tr></thead>
        <tbody>
          ${db.users.map(u => `<tr><td>${esc(u.name)}</td><td>${esc(u.email)}</td><td>${esc(u.city || '')}</td><td>${esc(u.role)}</td><td><button class="mini-btn" data-action="switch-user" data-id="${u.id}">Perjungti</button></td></tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  return `
    <div class="panel" style="margin:0 18px 18px">
      <h3>Portalų nustatymai</h3>
      <div class="settings-list">
        <div class="setting-row"><div><strong>Skelbimų tvirtinimas</strong><div class="small-note">Jei įjungta, nauji skelbimai bus pažymėti kaip pending.</div></div><div class="toggle ${db.settings.requireApproval ? 'on' : ''}" data-action="toggle-setting" data-setting="requireApproval"></div></div>
        <div class="setting-row"><div><strong>Nemokami skelbimai</strong><div class="small-note">Dabar portalas veikia nemokamai.</div></div><span class="status-pill status-active">ON</span></div>
        <div class="setting-row"><div><strong>Uždraustų žodžių sąrašas</strong><div class="small-note">Apsauga nuo šlamšto.</div></div><button class="mini-btn" data-action="edit-banned">Redaguoti</button></div>
      </div>
    </div>
    <div class="two-cols" style="padding:0 18px 18px">
      <div class="panel"><h3>Veikimo pastabos</h3><div class="small-note" style="line-height:1.7">Ši versija veikia lokaliai su localStorage. Galėsite prijungti backend, mokėjimus, el. laiškus, VIN dekodavimą ir tikrą moderaciją.</div></div>
      <div class="panel"><h3>SEO ir plėtra</h3><div class="small-note" style="line-height:1.7">Friendly URLs, atskiros markės ir modelių zonos, mobilus first ir greitas renderinimas.</div></div>
    </div>`;
}

function renderFooter() {
  return `
    <div class="container footer">
      <div class="cols">
        <div class="col"><h4>Portalas</h4><a href="#" data-action="nav" data-view="home">Pradžia</a><a href="#" data-action="nav" data-view="listings">Skelbimai</a><a href="#" data-action="nav" data-view="sell">Įkelti skelbimą</a></div>
        <div class="col"><h4>Pagalba</h4><a href="#">Taisyklės</a><a href="#">Privatumo politika</a><a href="#">Naudojimo sąlygos</a></div>
        <div class="col"><h4>Funkcijos</h4><a href="#">Paieška</a><a href="#">Filtrai</a><a href="#">Įsiminti</a></div>
        <div class="col"><h4>Kontaktas</h4><div>Visureigiai.lt</div><div class="small-note">Visureigių skelbimai, dalys, ratai, 4x4</div></div>
      </div>
    </div>
  `;
}

function renderFiltersModal() {
  const models = state.filters.brand ? BRAND_CATALOG[state.filters.brand] : [];
  return `
    <div class="overlay ${state.showFilters ? 'open' : ''}">
      <div class="modal">
        <div class="modal-header">
          <div><h2>Filtrai</h2><p>Detaliai filtruok visureigius, dalis, ratus ir susijusius skelbimus.</p></div>
          <button class="close-btn" data-action="close-filters">${iconClose()}</button>
        </div>
        <div class="modal-grid">
          <div class="panel">
            <h3>Pagrindiniai filtrai</h3>
            <div class="field-grid">
              <div class="field"><label>Markė</label><select class="select" data-filter="brand"><option value="">Visos</option>${Object.keys(BRAND_CATALOG).map(b => `<option ${state.filters.brand===b?'selected':''}>${esc(b)}</option>`).join('')}</select></div>
              <div class="field"><label>Modelis</label><select class="select" data-filter="model"><option value="">Visi</option>${models.map(m => `<option ${state.filters.model===m?'selected':''}>${esc(m)}</option>`).join('')}</select></div>
              <div class="field"><label>Miestas</label><select class="select" data-filter="city"><option value="">Visi</option>${CITIES.map(c => `<option ${state.filters.city===c?'selected':''}>${esc(c)}</option>`).join('')}</select></div>
              <div class="field"><label>Visureigio tipas</label><select class="select" data-filter="vehicleType"><option value="">Visi</option>${['Visureigis','SUV','Krosoveris','4x4','Pikapas','Off-road','Frame SUV'].map(x => `<option ${state.filters.vehicleType===x?'selected':''}>${x}</option>`).join('')}</select></div>
              <div class="field"><label>Metai nuo</label><input class="input" type="number" data-filter="yearMin" value="${esc(state.filters.yearMin)}"></div>
              <div class="field"><label>Metai iki</label><input class="input" type="number" data-filter="yearMax" value="${esc(state.filters.yearMax)}"></div>
              <div class="field"><label>Kaina nuo</label><input class="input" type="number" data-filter="priceMin" value="${esc(state.filters.priceMin)}"></div>
              <div class="field"><label>Kaina iki</label><input class="input" type="number" data-filter="priceMax" value="${esc(state.filters.priceMax)}"></div>
            </div>
          </div>
          <div class="panel">
            <h3>Išplėstiniai filtrai</h3>
            <div class="field-grid">
              <div class="field"><label>Rida nuo</label><input class="input" type="number" data-filter="mileageMin" value="${esc(state.filters.mileageMin)}"></div>
              <div class="field"><label>Rida iki</label><input class="input" type="number" data-filter="mileageMax" value="${esc(state.filters.mileageMax)}"></div>
              <div class="field"><label>Kuras</label><select class="select" data-filter="fuelType"><option value="">Visi</option>${['Dyzelinas','Benzinas','Benzinas / dujos','Hibridas','Plugin hibridas','Elektros'].map(x => `<option ${state.filters.fuelType===x?'selected':''}>${x}</option>`).join('')}</select></div>
              <div class="field"><label>Pavara</label><select class="select" data-filter="gearbox"><option value="">Visi</option>${['Automatinė','Mechaninė','Robotizuota'].map(x => `<option ${state.filters.gearbox===x?'selected':''}>${x}</option>`).join('')}</select></div>
              <div class="field"><label>Kėbulas</label><select class="select" data-filter="bodyType"><option value="">Visi</option>${body_types.map(x => `<option ${state.filters.bodyType===x?'selected':''}>${x}</option>`).join('')}</select></div>
              <div class="field"><label>Būklė</label><select class="select" data-filter="condition"><option value="">Visos</option>${conditions.map(x => `<option ${state.filters.condition===x?'selected':''}>${x}</option>`).join('')}</select></div>
            </div>
            <div class="spacer"></div>
            <div class="feature-grid">
              ${filterCheck('4x4','4x4')}
              ${filterCheck('AWD','awd')}
              ${filterCheck('SUV / krosoveris','suv')}
              ${filterCheck('Be defektų','noDefects')}
              ${filterCheck('Patikrinta istorija','checkedHistory')}
              ${filterCheck('Pneumatinė pakaba','pneumaticSuspension')}
              ${filterCheck('Panoraminis stogas','panoramicRoof')}
              ${filterCheck('Kablys','hook')}
              ${filterCheck('Odinis salonas','leather')}
              ${filterCheck('Šildomos sėdynės','heatedSeats')}
              ${filterCheck('Kamera / 360','camera360')}
              ${filterCheck('Navigacija','navigation')}
              ${filterCheck('Keyless','keyless')}
              ${filterCheck('Park Assist','parkAssist')}
              ${filterCheck('Blokiruotė','diffLock')}
              ${filterCheck('Kalnų nusileidimas','hillDescent')}
              ${filterCheck('Off-road režimai','offroadModes')}
              ${filterCheck('Pakelta važiuoklė','lifted')}
              ${filterCheck('Stogo bėgeliai','roofRails')}
              ${filterCheck('Tamsinti stiklai','tintedWindows')}
              ${filterCheck('Lieti ratlankiai','alloyWheels')}
              ${filterCheck('Kairėje vairas','leftHandDrive')}
              ${filterCheck('Dešinėje vairas','rightHandDrive')}
            </div>
            <div class="spacer"></div>
            <div class="inline-actions">
              <button class="btn" data-action="apply-filters">Taikyti</button>
              <button class="ghost-btn" data-action="reset-filters">Išvalyti viską</button>
              <button class="ghost-btn" data-action="close-filters">Uždaryti</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function filterCheck(label, key) {
  return `<label class="check"><input type="checkbox" data-filter="${key}" ${state.filters[key] ? 'checked' : ''}><span>${label}</span></label>`;
}

function renderAuthModal() {
  const u = currentUser();
  return `
    <div class="overlay ${state.showAuth ? 'open' : ''}">
      <div class="modal narrow">
        <div class="modal-header">
          <div><h2>${u ? 'Paskyra' : (state.authMode === 'login' ? 'Prisijungimas' : 'Registracija')}</h2><p>${u ? 'Valdykite profilį ir skelbimus.' : 'Prisijunkite arba susikurkite paskyrą per kelias sekundes.'}</p></div>
          <button class="close-btn" data-action="close-auth">${iconClose()}</button>
        </div>
        ${u ? renderQuickProfile(u) : renderAuthForms()}
      </div>
    </div>
  `;
}
function renderQuickProfile(u) {
  return `
    <div class="profile-top">
      <div class="avatar-lg">${u.avatar || u.name?.[0] || 'U'}</div>
      <div class="profile-meta"><strong>${esc(u.name)}</strong><span>${esc(u.email)}</span><span>${esc(u.city || '')} • ${esc(u.phone || '')}</span></div>
    </div>
    <div class="spacer"></div>
    <div class="inline-actions">
      <button class="btn" data-action="nav" data-view="profile">Mano paskyra</button>
      <button class="ghost-btn" data-action="logout">Atsijungti</button>
    </div>
  `;
}
function renderAuthForms() {
  return `
    <div class="segmented" style="margin-bottom:14px">
      <button type="button" class="${state.authMode==='login'?'active':''}" data-action="set-auth" data-mode="login">Prisijungti</button>
      <button type="button" class="${state.authMode==='register'?'active':''}" data-action="set-auth" data-mode="register">Registruotis</button>
    </div>
    <form id="authForm" class="wizard">
      ${state.authMode === 'login'
        ? `<div class="field-grid"><div class="field"><label>El. paštas</label><input class="input" name="email" type="email" required placeholder="vardas@elpastas.lt"></div><div class="field"><label>Slaptažodis</label><input class="input" name="password" type="password" required placeholder="••••••••"></div></div>`
        : `<div class="field-grid">
            <div class="field"><label>Vardas</label><input class="input" name="name" required placeholder="Jūsų vardas"></div>
            <div class="field"><label>El. paštas</label><input class="input" name="email" type="email" required placeholder="vardas@elpastas.lt"></div>
            <div class="field"><label>Slaptažodis</label><input class="input" name="password" type="password" required placeholder="Saugus slaptažodis"></div>
            <div class="field"><label>Telefonas</label><input class="input" name="phone" placeholder="+370..."></div>
            <div class="field"><label>Miestas</label><input class="input" name="city" placeholder="Vilnius"></div>
            <div class="field"><label>Avataro raidė</label><input class="input" name="avatar" maxlength="2" placeholder="V"></div>
          </div>`
      }
      <div class="inline-actions">
        <button class="btn" type="submit">${state.authMode === 'login' ? 'Prisijungti' : 'Sukurti paskyrą'}</button>
        <button class="ghost-btn" type="button" data-action="demo-login">Demo adminas</button>
      </div>
      <div class="small-note">Prisijungus galėsite įkelti skelbimus, redaguoti juos, įsiminti skelbimus ir matyti profilį.</div>
    </form>
  `;
}

function renderDetailModal() {
  const l = db.listings.find(x => x.id === state.detailId);
  return `
    <div class="overlay ${l ? 'open' : ''}">
      <div class="modal">
        ${l ? renderDetail(l) : ''}
      </div>
    </div>
  `;
}
function renderDetail(l) {
  const user = db.users.find(u => u.id === l.ownerId);
  const photos = l.images?.length ? l.images : [placeholderImage(l)];
  const featureText = Object.keys(l.features || {}).filter(k => l.features[k]).map(k => FEATURE_OPTIONS.find(f => f[0] === k)?.[1] || k).join(' • ');
  return `
    <div class="modal-header">
      <div><h2>${esc(l.brand)} ${esc(l.model)} ${esc(l.year)}</h2><p>${esc(l.location)} • ${esc(l.fuelType)} • ${esc(l.gearbox)} • ${esc(l.bodyType)}</p></div>
      <button class="close-btn" data-action="close-detail">${iconClose()}</button>
    </div>
    <div class="detail-hero">
      <div>
        <div class="gallery-main"><img id="detailMainPhoto" src="${photos[0]}" alt="${esc(l.title)}"></div>
        <div class="gallery-thumbs">${photos.slice(0,8).map((src, i) => `<button type="button" data-action="detail-thumb" data-src="${src}" class="${i===0?'active':''}"><img src="${src}"></button>`).join('')}</div>
      </div>
      <div class="detail-info">
        <div class="info-box">
          <div class="price">${money(l.price)}</div>
          <div class="small-note"><span class="status-pill ${statusClass(l.status)}">${esc(labelStatus(l.status))}</span></div>
          <div class="spacer"></div>
          <div class="inline-actions">
            <button class="btn" data-action="toggle-fav" data-id="${l.id}">${isFav(l.id) ? '★ Įsiminta' : '♡ Įsiminti'}</button>
            <button class="ghost-btn" data-action="contact-listing" data-id="${l.id}">Kontaktas</button>
          </div>
        </div>
        <div class="info-box">
          <h4>Technika</h4>
          <div class="kv"><div><strong>Rida</strong>${num(l.mileage)} km</div><div><strong>Variklis</strong>${esc(l.engineSize || '—')} cm³</div><div><strong>Galia</strong>${esc(l.powerKw || '—')} kW / ${esc(l.powerHp || '—')} HP</div><div><strong>Būklė</strong>${esc(l.condition || '—')}</div></div>
        </div>
        <div class="info-box">
          <h4>Pardavėjas</h4>
          <div class="seller-box">
            <div class="avatar">${(user?.avatar || user?.name?.[0] || 'U').slice(0,2)}</div>
            <div><strong>${esc(user?.name || 'Pardavėjas')}</strong><br><span class="small-note">${esc(l.sellerType || 'Privatus')} • ${esc(l.location || '')}</span></div>
          </div>
          <div class="spacer"></div>
          <div class="small-note">${esc(l.contactPhone || user?.phone || '')}</div>
          <div class="small-note">${esc(l.email || user?.email || '')}</div>
        </div>
        <div class="info-box">
          <h4>Funkcijos</h4>
          <div class="small-note" style="line-height:1.6">${featureText || '—'}</div>
        </div>
      </div>
    </div>
    <div class="spacer"></div>
    <div class="info-box">
      <h4>Aprašymas</h4>
      <div class="small-note" style="line-height:1.7">${esc(l.description || '')}</div>
    </div>
  `;
}

function renderFooter() {
  return `<div class="container footer">
    <div class="cols">
      <div class="col"><h4>Portalas</h4><a href="#" data-action="nav" data-view="home">Pradžia</a><a href="#" data-action="nav" data-view="listings">Skelbimai</a><a href="#" data-action="nav" data-view="sell">Įkelti skelbimą</a></div>
      <div class="col"><h4>Pagalba</h4><a href="#">Taisyklės</a><a href="#">Privatumo politika</a><a href="#">Naudojimo sąlygos</a></div>
      <div class="col"><h4>Funkcijos</h4><a href="#">Paieška</a><a href="#">Filtrai</a><a href="#">Įsiminti</a></div>
      <div class="col"><h4>Kontaktas</h4><div>Visureigiai.lt</div><div class="small-note">SUV • 4x4 • dalys • ratai • padangos</div></div>
    </div>
  </div>`;
}

function bindViewEvents() {
  const topSearch = document.getElementById('topSearch');
  if (topSearch) topSearch.addEventListener('input', e => { state.query = e.target.value; state.page = 1; saveSearch(); render(); });

  const photoInput = document.getElementById('photoInput');
  if (photoInput) photoInput.addEventListener('change', e => handlePhotoUpload(e.target.files));
}

function updateActiveNav() {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === state.view));
}
function updateTopSearch() {
  const i = document.getElementById('topSearch');
  if (i && i.value !== state.query) i.value = state.query;
}

function labelStatus(s) { return s === 'active' ? 'Aktyvus' : s === 'sold' ? 'Parduota' : s === 'pending' ? 'Laukia tvirtinimo' : s === 'draft' ? 'Juodraštis' : 'Archyvas'; }
function statusClass(s) { return s === 'active' ? 'status-active' : s === 'sold' ? 'status-sold' : s === 'pending' ? 'status-pending' : 'status-draft'; }

function money(v){ return new Intl.NumberFormat('lt-LT', {style:'currency', currency:'EUR', maximumFractionDigits:0}).format(Number(v||0)); }
function num(v){ return new Intl.NumberFormat('lt-LT').format(Number(v||0)); }
function range(a,b){ return Array.from({length:b-a+1}, (_,i)=>a+i); }
function uid(prefix='id') { return prefix + '_' + Math.random().toString(36).slice(2,8) + Date.now().toString(36); }
function esc(s) { return String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;"); }

function topCounts(arr) {
  const m = new Map();
  arr.forEach(v => { if (!v) return; m.set(v, (m.get(v) || 0) + 1); });
  return [...m.entries()].sort((a,b)=>b[1]-a[1]);
}

function avatarMini(u){ return `<span style="font-weight:900;color:var(--green-3)">${esc(u.avatar || u.name?.[0] || 'U')}</span>`; }
function iconSearch(){ return '<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M16.2 16.2 20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'; }
function iconFilter(){ return '<svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16M7 12h10M10 18h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'; }
function iconClose(){ return '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'; }
function iconUser(){ return '<svg viewBox="0 0 24 24" fill="none"><path d="M12 12.5a4.5 4.5 0 1 0-.001-9.001A4.5 4.5 0 0 0 12 12.5Zm7 8v-1a6.5 6.5 0 0 0-13 0v1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'; }
function iconPlus(){ return '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/></svg>'; }

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function containsBannedWord(text) {
  const t = String(text || '').toLowerCase();
  return (db.settings.bannedWords || []).some(w => w && t.includes(String(w).toLowerCase()));
}

function saveSearch() {
  localStorage.setItem(SEARCH_KEY, JSON.stringify({
    query: state.query,
    sort: state.sort,
    viewMode: state.viewMode,
    filters: state.filters
  }));
}

function placeholderImage(l) {
  const h = hashCode(l.brand + l.model + l.year);
  const palettes = [
    ['#1f4d3a','#16362a','#c7a56b'],
    ['#3d5b6b','#213544','#d9bf90'],
    ['#654f3a','#34261d','#c7a56b'],
    ['#24344a','#101824','#8fa2b2'],
    ['#436b52','#22392e','#f3e8d4']
  ];
  const p = palettes[h % palettes.length];
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 840">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p[0]}"/><stop offset="62%" stop-color="${p[1]}"/><stop offset="100%" stop-color="${p[2]}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="840" fill="url(#g)"/>
    <rect x="70" y="70" width="1060" height="700" rx="34" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)"/>
    <g transform="translate(130,220)">
      <ellipse cx="470" cy="460" rx="370" ry="36" fill="rgba(0,0,0,.22)"/>
      <path d="M105 310c12-41 39-72 81-94l75-39c35-18 74-27 113-27h185c47 0 91 13 129 40l52 35c34 23 58 54 68 98l13 72H93l12-85z" fill="rgba(0,0,0,.6)"/>
      <rect x="120" y="335" width="540" height="62" rx="30" fill="#11181b"/>
      <circle cx="210" cy="429" r="60" fill="#2c3237"/><circle cx="210" cy="429" r="34" fill="#8a9197"/>
      <circle cx="606" cy="429" r="60" fill="#2c3237"/><circle cx="606" cy="429" r="34" fill="#8a9197"/>
      <path d="M225 230h275c23 0 44 11 56 29l28 39H145l25-36c13-19 32-32 55-32z" fill="rgba(255,255,255,.16)"/>
      <rect x="210" y="345" width="300" height="16" rx="8" fill="rgba(255,255,255,.20)"/>
    </g>
    <text x="70" y="106" fill="#fff" font-family="Arial, sans-serif" font-size="48" font-weight="800">${esc(l.brand)} ${esc(l.model)}</text>
    <text x="70" y="160" fill="#fff" font-family="Arial, sans-serif" font-size="28" font-weight="700">${esc(l.year || '')} m. • ${esc(l.bodyType || 'SUV')}</text>
    <text x="70" y="788" fill="rgba(255,255,255,.82)" font-family="Arial, sans-serif" font-size="24" font-weight="700">Visureigiai.lt • skelbimas</text>
  </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
function hashCode(s){ let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))>>>0; return h; }

function emptyBox(title, subtitle){
  return `<div class="card" style="min-height:260px;grid-column:1 / -1"><div class="empty-state"><strong>${esc(title)}</strong><div>${esc(subtitle)}</div></div></div>`;
}

function uidDemo(){ return 'x'; }

window.visureigiai = { state, db };

