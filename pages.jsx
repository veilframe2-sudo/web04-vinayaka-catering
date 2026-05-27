// Vinayaka — Home, Mandapam, Heritage pages

const { useState, useEffect, useRef } = React;

// ---- Tiny shared bits ----
function DiamondRule({ children }) {
  return (
    <div className="diamond-rule">
      <span className="diamond"></span>
      {children && <span>{children}</span>}
      {children && <span className="diamond outline"></span>}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="arrow" width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
function HomePage({ goto, accent }) {
  const [reviewIdx, setReviewIdx] = useState(0);
  const review = window.REVIEWS[reviewIdx];

  const nextReview = () => setReviewIdx((i) => (i + 1) % window.REVIEWS.length);
  const prevReview = () => setReviewIdx((i) => (i - 1 + window.REVIEWS.length) % window.REVIEWS.length);

  return (
    <div className="page-enter" data-screen-label="01 Home">
      {/* HERO */}
      <section className="hero" data-screen-label="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-eyebrow">Est. Kadavanthra · 1992</div>
            <h1 className="serif">
              Kerala's <em>heritage</em><br />
              of the banana leaf,<br />
              served since 1992.
            </h1>
            <div className="hero-mal">കല്യാണ സദ്യയുടെ പാരമ്പര്യം</div>
            <p className="hero-lead">
              A 34-year-old kitchen and an 800-seat Kalyana Mandapam, run on a single principle —
              one quality, one quantity and one price, for every family that sits at our leaf.
            </p>
            <div className="hero-ctas">
              <button className="btn btn-gold" onClick={() => goto("enquire")}>
                Plan your event <ArrowIcon />
              </button>
              <button className="btn hero-btn-outline btn-outline" onClick={() => goto("sadhya")}>
                See the sadhya
              </button>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <div className="num serif">4,000+</div>
                <div className="lbl">Weddings since 1992</div>
              </div>
              <div className="hero-trust-item">
                <div className="num serif">800</div>
                <div className="lbl">Main hall capacity</div>
              </div>
              <div className="hero-trust-item">
                <div className="num serif">4.2★</div>
                <div className="lbl">From 2,821 reviews</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={window.__HERO_IMAGE || "photos/sadhya-01.png"} alt="Kerala sadhya served on a banana leaf" />
            <div className="hero-badge">
              <div>
                <div className="yr">34</div>
                <div className="lbl">Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISH */}
      <section className="signature" data-screen-label="signature-dish">
        <div className="shell signature-grid">
          <div>
            <div className="lozenge">
              <span className="diamond"></span> The dish that built our name
            </div>
            <h2 style={{ marginTop: 24 }} className="serif">
              Paalada <em>Pradhaman.</em>
            </h2>
            <div className="signature-mal script">പാലട പ്രഥമൻ</div>
            <p className="lead" style={{ marginTop: 32, maxWidth: 480 }}>
              Hand-rolled rice ada, slow-simmered for hours in reducing milk,
              cardamom and a whisper of nutmeg.
            </p>
            <p className="body" style={{ marginTop: 20, maxWidth: 480 }}>
              In 1992 the recipe was set by our founder, Sri. M. Anantharaman, son of a culinary
              expert and trained under the master cooks of his generation. It has not changed since.
              Three decades on, the same payasam still travels from our kitchen to muhurthams in
              London, Singapore and the Gulf — flown home, in family-sized urulis, for the day that matters.
            </p>
            <button className="btn btn-outline" style={{ marginTop: 36 }} onClick={() => goto("sadhya")}>
              Explore the full sadhya <ArrowIcon />
            </button>
          </div>
          <div style={{ position: "relative" }}>
            <div className="signature-image">
              <img src="photos/sweets.png" alt="Traditional Kerala payasam and sweets spread" />
            </div>
            <div className="signature-tag">
              <span className="tag-eyebrow">Recipe of the house</span>
              "Travelled in India and abroad, by word of mouth alone."
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services" data-screen-label="services">
        <div className="shell">
          <div className="section-head">
            <div className="lozenge"><span className="diamond"></span> What we do</div>
            <h2 className="serif">Three things, done thoroughly.</h2>
            <p className="body" style={{ maxWidth: 620 }}>
              We do not run a buffet hall or a banquet kitchen. We cook one cuisine — the Kerala vegetarian sadhya — and we host one kind of occasion: the family ceremony that needs the leaf, the lamp, and the elders' approval.
            </p>
          </div>
          <div className="service-grid">
            {window.SERVICES.map((s) => (
              <div key={s.num} className="service">
                <div className="service-num">No. {s.num}</div>
                <h3 className="serif">{s.title}</h3>
                <div className="script" style={{ color: "var(--sindoor)", fontSize: 19 }}>{s.mal}</div>
                <p className="body" style={{ marginTop: 8 }}>{s.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: 16 }}>
                  <span className="tag">{s.cap}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGERY STRIP */}
      <section style={{ background: "var(--paper)", padding: "0 0 120px" }}>
        <div className="shell-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          <ImgFrame src="photos/mandap-setup.png" label="Mandap setup" />
          <ImgFrame src="photos/kuthuvilakku.png" label="Brass kuthuvilakku" />
          <ImgFrame src="photos/family-lamps.png" label="Family functions" />
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="testimonial-strip" data-screen-label="testimonials">
        <div className="shell testimonial-stage">
          <div>
            <div style={{ color: "var(--gold-soft)", letterSpacing: "0.22em", fontSize: 11, textTransform: "uppercase", marginBottom: 28, opacity: 0.85 }}>
              From our families
            </div>
            <div className="testimonial-quote serif">
              {review.body}
            </div>
            <div className="testimonial-attr">
              {review.name} &nbsp;·&nbsp; {review.source}
            </div>
            <div className="testimonial-nav">
              <button onClick={prevReview} aria-label="Previous">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M13 5H1m0 0l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </button>
              <button onClick={nextReview} aria-label="Next">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
          <div className="testimonial-stats">
            <div className="tstat">
              <div className="v serif">100%</div>
              <div className="l">of couples on WeddingWire recommend Vinayaka</div>
            </div>
            <div className="tstat">
              <div className="v serif">2,821</div>
              <div className="l">Google reviews — 4.2★ across three decades of weddings</div>
            </div>
            <div className="tstat">
              <div className="v serif">34</div>
              <div className="l">Years in continuous operation in Kadavanthra, Kochi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "var(--paper)", padding: "96px 0", textAlign: "center" }}>
        <div className="shell">
          <DiamondRule />
          <h2 className="serif" style={{ marginTop: 32, fontSize: "clamp(36px, 4vw, 56px)" }}>
            Tell us about your <em style={{ fontStyle: "italic", color: "var(--sindoor)" }}>occasion.</em>
          </h2>
          <p className="lead" style={{ marginTop: 20, maxWidth: 540, marginInline: "auto" }}>
            Wedding, reception, festival sadya, or a sixty-leaf family gathering — we will write back the same day.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center" }}>
            <button className="btn btn-primary" onClick={() => goto("enquire")}>
              Send an enquiry <ArrowIcon />
            </button>
            <a href="tel:+914841234567" className="btn btn-outline">
              Call +91 484 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ImgFrame({ src, label }) {
  return (
    <div style={{ position: "relative", aspectRatio: "4/5", background: "var(--leaf-deep)", overflow: "hidden" }}>
      <img src={src} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{
        position: "absolute", bottom: 16, left: 16,
        background: "rgba(42, 24, 16, 0.7)", color: "var(--gold-soft)",
        padding: "6px 12px", fontSize: 10, letterSpacing: "0.22em",
        textTransform: "uppercase",
      }}>{label}</div>
    </div>
  );
}

// ============================================================
// MANDAPAM PAGE
// ============================================================
function MandapamPage({ goto }) {
  return (
    <div className="page-enter" data-screen-label="03 Mandapam">
      <section className="mandapam-hero">
        <div className="shell">
          <div className="mandapam-hero-grid">
            <div>
              <div className="lozenge"><span className="diamond"></span> Kalyana Mandapam · Kadavanthra</div>
              <h1 className="serif" style={{ marginTop: 24 }}>
                Hall, kitchen and<br />
                ceremony — <em style={{ fontStyle: "italic", color: "var(--sindoor)" }}>one roof.</em>
              </h1>
              <div className="script" style={{ fontSize: 28, color: "var(--sindoor)", marginTop: 12 }}>കല്യാണ മണ്ഡപം</div>
            </div>
            <div>
              <p className="lead" style={{ fontStyle: "italic" }}>
                Our 800-seat A/C wedding hall sits above the kitchen that has cooked for Kochi families since 1992. The sadhya leaves the kitchen and reaches your leaf on the floor below — warm, in order, and on time.
              </p>
              <button className="btn btn-primary" style={{ marginTop: 32 }} onClick={() => goto("enquire")}>
                Check date availability <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* stats overlay */}
      <div className="shell">
        <div className="mandapam-stats">
          <div className="mandapam-stat">
            <div className="v">800+</div>
            <div className="l">Main hall seats</div>
          </div>
          <div className="mandapam-stat">
            <div className="v">300+</div>
            <div className="l">Dining hall seats</div>
          </div>
          <div className="mandapam-stat">
            <div className="v">2</div>
            <div className="l">Private green rooms</div>
          </div>
        </div>
      </div>

      {/* gallery */}
      <section style={{ padding: "100px 0 80px", background: "var(--paper)" }}>
        <div className="shell">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <div className="lozenge"><span className="diamond"></span> Inside the mandapam</div>
            <h2 className="serif">Built for the Hindu wedding.</h2>
          </div>
          <div className="mandapam-gallery">
            <img className="g1" src="photos/hall-main.png" alt="Main hall with red seating and Kerala mural" />
            <img src="photos/hall-dining.png" alt="Dining hall" />
            <img src="photos/mandap-setup.png" alt="Mandap setup" />
            <img src="photos/founders-wall.png" alt="Founders' wall and mural panels" />
            <img src="photos/entrance.png" alt="Entrance" />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: "100px 0 120px", background: "var(--paper)" }}>
        <div className="shell">
          <div className="section-head">
            <div className="lozenge"><span className="diamond"></span> What's included</div>
            <h2 className="serif">No itemised hidden charges — one quote, one venue.</h2>
            <p className="body" style={{ maxWidth: 620 }}>
              Every booking covers the spaces, staff and ceremony essentials below. Sadhya is priced per leaf, separately and transparently — see the sadhya page for the menu.
            </p>
          </div>
          <div className="included-grid">
            {window.INCLUDED.map((it) => (
              <div className="included-row" key={it.n}>
                <div className="num">{it.n}</div>
                <div>
                  <h4>{it.title}</h4>
                  <div className="desc">{it.desc}</div>
                </div>
                <div className="check">✓</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => goto("enquire")}>Request a date <ArrowIcon /></button>
            <span className="small" style={{ fontStyle: "italic", color: "var(--brown)" }}>
              Hall and sadhya can be booked together, or sadhya separately for off-site events.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// HERITAGE PAGE
// ============================================================
function HeritagePage({ goto }) {
  return (
    <div className="page-enter" data-screen-label="04 Heritage">
      <section className="heritage-hero">
        <div className="shell">
          <div className="lozenge" style={{ color: "var(--gold)" }}>
            <span className="diamond"></span> Our story
          </div>
          <h1 className="serif" style={{ marginTop: 28 }}>
            One kitchen,<br />
            one principle — <em>thirty-four years</em>.
          </h1>
          <p className="hero-lead" style={{ marginTop: 32, maxWidth: 720 }}>
            We were founded by Sri. M. Anantharaman in 1992 — the son of a culinary expert,
            refined under the master cooks of the era. The pledge he set on day one has held
            ever since: one quality, one quantity, and one price, for every family.
          </p>
        </div>
      </section>

      <div className="shell">
        <div className="heritage-image">
          <img src="photos/founders-wall.png" alt="Founders' wall inside the Kalyana Mandapam" />
        </div>
      </div>

      <section className="timeline">
        <div className="shell">
          <div className="section-head" style={{ textAlign: "center", marginInline: "auto" }}>
            <div className="lozenge" style={{ justifyContent: "center" }}><span className="diamond"></span> The lineage</div>
            <h2 className="serif">Three decades of the same recipe.</h2>
          </div>
          {window.TIMELINE.map((t, i) => (
            <div className="timeline-row" key={i}>
              <div className="timeline-year">{t.year}</div>
              <div>
                <h3 className="serif">{t.title}</h3>
                <p className="body">{t.body}</p>
              </div>
              <div className="timeline-aside">"{t.aside}"</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews wall */}
      <section className="reviews-section">
        <div className="shell">
          <div className="section-head">
            <div className="lozenge"><span className="diamond"></span> What families say</div>
            <h2 className="serif">Recommended by the families that returned.</h2>
            <p className="body" style={{ maxWidth: 620 }}>
              4.2 stars across 2,821 Google reviews. 100% couple-recommended on WeddingWire. The same paalada pradhaman recipe since 1992.
            </p>
          </div>
          <div className="review-grid">
            {window.REVIEWS.map((r, i) => (
              <div className="review" key={i}>
                <div className="stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
                <div className="body">"{r.body}"</div>
                <div className="attr">
                  <div className="avatar">{r.initials}</div>
                  <div>
                    <div className="name">{r.name}</div>
                    <div className="source">{r.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HomePage, MandapamPage, HeritagePage, ArrowIcon, DiamondRule });
