// Vinayaka — root app, nav, footer, router
// Production build of the design bundle: tweaks-panel removed,
// useTweaks stubbed to the host-edited defaults.

const { useState: useState_a, useEffect: useEffect_a } = React;

const TWEAK_DEFAULTS = {
  accent: "sindoor",
  heroTone: "maroon",
  showMalayalam: true,
  heroImage: "sadhya-01",
};

const ACCENT_MAP = {
  sindoor: { main: "#9B2C2C", deep: "#7A1F1F", label: "Sindoor red" },
  leaf:    { main: "#2F6B3D", deep: "#1E4A28", label: "Banana leaf" },
  brown:   { main: "#6B4423", deep: "#4A2E18", label: "Earth brown" },
};

const HERO_TONES = {
  maroon: { bg: "#5C1A1B", label: "Deep maroon" },
  leaf:   { bg: "#1E4A28", label: "Forest leaf" },
  ink:    { bg: "#2A1810", label: "Ink black" },
};

const HERO_IMAGES = {
  "sadhya-01":    "photos/sadhya-01.png",
  "sadhya-03":    "photos/sadhya-03.png",
  "mandap":       "photos/mandap-setup.png",
  "kuthuvilakku": "photos/kuthuvilakku.png",
};

function Nav({ page, goto }) {
  const links = [
    { id: "home",     lbl: "Home" },
    { id: "sadhya",   lbl: "The Sadhya" },
    { id: "mandapam", lbl: "Kalyana Mandapam" },
    { id: "heritage", lbl: "Heritage" },
    { id: "enquire",  lbl: "Enquire" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand" onClick={() => goto("home")}>
          <div className="brand-mark serif">V</div>
          <div>
            <div className="brand-name">Vinayaka</div>
            <div className="brand-sub">Caterers · Est. 1992</div>
          </div>
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={"nav-link" + (page === l.id ? " active" : "")}
              onClick={() => goto(l.id)}
            >{l.lbl}</button>
          ))}
        </div>
        <div className="nav-right">
          <a href="tel:+914841234567" className="nav-phone">+91 484 123 4567</a>
          <button className="btn btn-primary" style={{ padding: "10px 20px" }} onClick={() => goto("enquire")}>
            Enquire
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ goto }) {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 20 }}>
              <div className="brand-mark serif" style={{ background: "var(--gold)", color: "var(--maroon)" }}>V</div>
              <div>
                <div className="brand-name" style={{ color: "var(--sandal)" }}>Vinayaka Caterers</div>
                <div className="brand-sub" style={{ color: "var(--gold-soft)" }}>& Kalyana Mandapam</div>
              </div>
            </div>
            <div className="footer-body">
              Kerala's heritage of the banana leaf, served from one kitchen in Kadavanthra since 1992.
            </div>
          </div>
          <div>
            <h4>Visit</h4>
            <div className="footer-body">
              Kadavanthra Junction<br />
              Kochi, Ernakulam<br />
              Kerala 682020<br /><br />
              Mon–Sat · 9am–8pm
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="footer-body">
              +91 484 123 4567<br />
              +91 98470 12345<br /><br />
              hello@vinayakacaterers.com
            </div>
          </div>
          <div>
            <h4>Pages</h4>
            <div className="footer-links">
              <a onClick={() => goto("home")}>Home</a>
              <a onClick={() => goto("sadhya")}>The Sadhya</a>
              <a onClick={() => goto("mandapam")}>Kalyana Mandapam</a>
              <a onClick={() => goto("heritage")}>Heritage</a>
              <a onClick={() => goto("enquire")}>Enquire</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 1992–2026 · Vinayaka Caterers & Kalyana Mandapam</div>
          <div>One quality · One quantity · One price</div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState_a("home");
  const tweaks = TWEAK_DEFAULTS;

  // Apply tweak CSS vars once on mount (values are static in production)
  useEffect_a(() => {
    const root = document.documentElement;
    const accent = ACCENT_MAP[tweaks.accent] || ACCENT_MAP.sindoor;
    root.style.setProperty("--sindoor", accent.main);
    root.style.setProperty("--sindoor-deep", accent.deep);
    const tone = HERO_TONES[tweaks.heroTone] || HERO_TONES.maroon;
    root.style.setProperty("--maroon", tone.bg);
    root.style.setProperty("--mal-display", tweaks.showMalayalam ? "block" : "none");
    window.__HERO_IMAGE = HERO_IMAGES[tweaks.heroImage] || HERO_IMAGES["sadhya-01"];
  }, []);

  const goto = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Map page → component
  const pages = {
    home:     window.HomePage,
    sadhya:   window.SadhyaPage,
    mandapam: window.MandapamPage,
    heritage: window.HeritagePage,
    enquire:  window.EnquirePage,
  };
  const Page = pages[page] || pages.home;

  return (
    <div key={page}>
      <Nav page={page} goto={goto} />
      <Page goto={goto} accent={tweaks.accent} />
      {page !== "enquire" && <Footer goto={goto} />}
    </div>
  );
}

// Honour the Malayalam-display CSS var globally
const styleEl = document.createElement("style");
styleEl.textContent = ".script, .hero-mal, .signature-mal { display: var(--mal-display, block); }";
document.head.appendChild(styleEl);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
