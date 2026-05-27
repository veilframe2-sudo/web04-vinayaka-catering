// Vinayaka — Sadhya interactive leaf page

const { useState: useState_s, useMemo: useMemo_s } = React;

function SadhyaPage({ goto }) {
  const [selected, setSelected] = useState_s(17); // 17 = paalada pradhaman by default

  const items = window.SADHYA_ITEMS;
  const current = items.find((d) => d.n === selected) || items[0];

  return (
    <div className="sadhya-page page-enter" data-screen-label="02 Sadhya">
      <section className="sadhya-hero">
        <div className="shell">
          <div className="lozenge" style={{ justifyContent: "center" }}>
            <span className="diamond"></span> The full sadhya
          </div>
          <h1 className="serif" style={{ marginTop: 24, fontSize: "clamp(48px, 6vw, 84px)" }}>
            Twenty-six courses, <em style={{ fontStyle: "italic", color: "var(--sindoor)" }}>one leaf.</em>
          </h1>
          <div className="script" style={{ fontSize: 28, color: "var(--sindoor)", marginTop: 12 }}>കേരള സദ്യ</div>
          <p className="lead" style={{ maxWidth: 720, margin: "32px auto 0" }}>
            Each course is served in a specific place on the banana leaf, in a specific order.
            Tap any number to read what goes where, and why.
          </p>
        </div>
      </section>

      <div className="sadhya-stage">
        <div className="leaf-frame">
          <div className="leaf-canvas">
            <img className="leaf-photo" src="photos/leaf-illustration.png" alt="Sadhya laid out on a banana leaf — illustrated" />
            {items.map((d) => (
              <button
                key={d.n}
                className={"hotspot" + (selected === d.n ? " active" : "")}
                style={{ left: d.x + "%", top: d.y + "%" }}
                onClick={() => setSelected(d.n)}
                aria-label={d.name}
                title={d.name}
              >
                {d.n}
                <span className="pulse"></span>
              </button>
            ))}
          </div>

          {/* legend / orientation strip */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            marginTop: 24, paddingTop: 20,
            borderTop: "1px solid var(--rule)",
            fontFamily: "var(--serif)",
            fontStyle: "italic", color: "var(--brown)",
            fontSize: 14,
          }}>
            <span>← First course · top of the leaf</span>
            <span>Rice & curries · centre</span>
            <span>Payasams · finish →</span>
          </div>
        </div>

        <div className="leaf-side">
          <div className="dish-card">
            <div className="num">Course No. {String(current.n).padStart(2, "0")}</div>
            <h3 className="serif" style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
              {current.name}
              {current.signature && (
                <span style={{
                  fontFamily: "var(--sans)", fontStyle: "normal",
                  fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "var(--gold-deep)", border: "1px solid var(--gold)",
                  padding: "4px 10px", borderRadius: 2,
                }}>The signature</span>
              )}
            </h3>
            <div className="mal script">{current.mal}</div>
            <div style={{
              marginTop: 16,
              display: "inline-flex",
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--brown)",
            }}>{current.kind}</div>
            <p className="body" style={{ marginTop: 16 }}>{current.desc}</p>
            <div className="meta">
              <span><b>Served at</b> {current.served}</span>
              <span><b>Tasting notes</b> {current.taste}</span>
            </div>
          </div>

          <div className="dish-list">
            <h4>All 18 spotlighted courses</h4>
            <div className="dish-list-items">
              {items.map((d) => (
                <div
                  key={d.n}
                  className={"dish-list-item" + (selected === d.n ? " active" : "")}
                  onClick={() => setSelected(d.n)}
                >
                  <span className="dot"></span>
                  <span>{String(d.n).padStart(2, "0")} &nbsp; {d.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: "var(--maroon)", color: "var(--sandal)",
            padding: 28,
          }}>
            <div className="lozenge" style={{ color: "var(--gold-soft)" }}>
              <span className="diamond"></span> Order the full sadhya
            </div>
            <h3 className="serif" style={{ color: "var(--sandal)", marginTop: 14, fontSize: 24 }}>
              From 50 to 2,000 leaves.
            </h3>
            <p style={{ marginTop: 10, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 16, opacity: 0.85, lineHeight: 1.5 }}>
              Off-site catering across Ernakulam, or seated at our Kalyana Mandapam. Pricing is per leaf, same for everyone.
            </p>
            <button
              className="btn btn-gold"
              style={{ marginTop: 20 }}
              onClick={() => goto("enquire")}
            >
              Enquire <span style={{ marginLeft: 4 }}><svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            </button>
          </div>
        </div>
      </div>

      {/* Order on the leaf — explainer */}
      <section style={{ background: "var(--sandal)", padding: "80px 0" }}>
        <div className="shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="lozenge"><span className="diamond"></span> The order of service</div>
            <h2 className="serif" style={{ marginTop: 20 }}>
              A sadhya is <em style={{ fontStyle: "italic", color: "var(--sindoor)" }}>read</em> like a page.
            </h2>
            <p className="body" style={{ marginTop: 24 }}>
              The tip of the leaf points to your left. Pickles and curd-based sides are placed on the upper half before you sit down. Rice arrives at the centre; the parippu-and-ghee course is the first ladle. Sambar, rasam and finally moru follow in that order, each marking the next portion of rice. The payasams close the meal.
            </p>
            <p className="body" style={{ marginTop: 18 }}>
              Our service staff serve one row of leaves at a time, in unison, so every guest finishes the same course together. This is the cadence we have kept since 1992.
            </p>
          </div>
          <ImgFrame src="photos/sadhya-03.png" label="Served leaf · ready to begin" />
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { SadhyaPage });
