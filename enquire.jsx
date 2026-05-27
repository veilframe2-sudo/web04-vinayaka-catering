// Vinayaka — Enquire multi-step form

const { useState: useState_e } = React;

const EVENT_TYPES = [
  { id: "wedding", title: "Wedding / Reception", desc: "Ceremony + sadhya at our Kalyana Mandapam, or sadhya only." },
  { id: "festival", title: "Festival Sadya", desc: "Vishu, Onam, Karkidaka — delivered to your home or temple." },
  { id: "family", title: "Family Gathering", desc: "Birthdays, anniversaries, namakaranam, choroonu, upanayanam." },
  { id: "corporate", title: "Corporate / Trust", desc: "Office events, temple committees, institutional bookings." },
];

const GUEST_RANGES = ["Under 100", "100–300", "300–600", "600–1,000", "1,000+"];

function EnquirePage({ goto }) {
  const [step, setStep] = useState_e(1);
  const [data, setData] = useState_e({
    eventType: "wedding",
    venue: "mandapam",
    date: "",
    guests: "300–600",
    sadhyaIncluded: true,
    name: "",
    phone: "",
    email: "",
    city: "Kochi",
    notes: "",
  });
  const [errors, setErrors] = useState_e({});
  const [submitted, setSubmitted] = useState_e(false);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const validateStep = () => {
    const e = {};
    if (step === 2) {
      if (!data.date) e.date = "Please choose a tentative date.";
      else {
        const d = new Date(data.date);
        if (d < new Date(new Date().toDateString())) e.date = "Date must be in the future.";
      }
    }
    if (step === 3) {
      if (!data.name.trim()) e.name = "Please enter your name.";
      if (!data.phone.trim()) e.phone = "A phone number is required so we can confirm.";
      else if (!/^[+\d\s\-()]{8,}$/.test(data.phone)) e.phone = "Phone number doesn't look right.";
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Email doesn't look right.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, 4)); };
  const back = () => setStep((s) => Math.max(s - 1, 1));
  const submit = () => { if (validateStep()) setSubmitted(true); };

  // Today's date string for min on date input
  const today = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <div className="enquire-page page-enter" data-screen-label="05 Enquire">
        <div className="enquire-grid">
          <div className="enquire-aside">
            <div className="lozenge"><span className="diamond"></span> Enquiry received</div>
            <h2 className="serif" style={{ marginTop: 20 }}>
              Thank you, <em>{data.name.split(" ")[0]}.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              We will call you on {data.phone} within the day to confirm date availability and walk you through the next steps.
            </p>
            <div className="aside-pledge" style={{ marginTop: 36 }}>
              <span className="lbl">Our pledge</span>
              "One quality, one quantity, and one price — for every family at our leaf, since 1992."
            </div>
          </div>
          <div className="form-card">
            <div className="success">
              <div className="success-mark">✓</div>
              <h3 className="serif">Your enquiry is with us.</h3>
              <p className="body" style={{ marginTop: 16, maxWidth: 440, marginInline: "auto" }}>
                A copy of these details has been sent to our coordination team. We typically respond within 4 working hours.
              </p>
              <div className="summary" style={{ marginTop: 36, textAlign: "left" }}>
                <SummaryRow l="Reference" v={"VNYK-" + Math.floor(100000 + Math.random() * 900000)} />
                <SummaryRow l="Occasion" v={EVENT_TYPES.find(t => t.id === data.eventType).title} />
                <SummaryRow l="Date" v={formatDate(data.date)} />
                <SummaryRow l="Guests" v={data.guests} />
                <SummaryRow l="Venue" v={data.venue === "mandapam" ? "Our Kalyana Mandapam" : "Off-site catering"} />
              </div>
              <button className="btn btn-outline" onClick={() => goto("home")}>
                Return to the home page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enquire-page page-enter" data-screen-label="05 Enquire">
      <div className="enquire-grid">
        <div className="enquire-aside">
          <div className="lozenge"><span className="diamond"></span> Plan your event</div>
          <h2 className="serif" style={{ marginTop: 20 }}>
            Tell us about the <em>occasion.</em>
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            Wedding, reception, or a sixty-leaf festival sadya — four short steps, and we will write back the same day.
          </p>

          <div className="aside-pledge">
            <span className="lbl">Our pledge, since 1992</span>
            One quality, one quantity, and one price — for every family at our leaf.
          </div>

          <div className="contact-block">
            <div className="contact-row">
              <div className="lbl">Phone</div>
              <div className="v">+91 484 123 4567<br/>+91 98470 12345</div>
            </div>
            <div className="contact-row">
              <div className="lbl">Visit</div>
              <div className="v">Kadavanthra Junction,<br />Kochi, Ernakulam — 682020</div>
            </div>
            <div className="contact-row">
              <div className="lbl">Hours</div>
              <div className="v">Mon–Sat · 9am to 8pm<br/>Sunday by appointment</div>
            </div>
          </div>
        </div>

        <div className="form-card">
          <div className="stepper">
            {[
              { n: 1, lbl: "Occasion" },
              { n: 2, lbl: "Date & scale" },
              { n: 3, lbl: "Your details" },
              { n: 4, lbl: "Review" },
            ].map((s) => (
              <div key={s.n} className={"step " + (step === s.n ? "active" : step > s.n ? "done" : "")}>
                <div className="step-num">{step > s.n ? "✓" : s.n}</div>
                <div className="step-lbl">Step {s.n}<br />{s.lbl}</div>
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="form-section">
              <h3 className="serif">What's the occasion?</h3>
              <p className="sub">We'll tailor the rest of the form to the type of event.</p>
              <div className="event-grid">
                {EVENT_TYPES.map((t) => (
                  <button
                    key={t.id}
                    className={"event-opt" + (data.eventType === t.id ? " selected" : "")}
                    onClick={() => update("eventType", t.id)}
                  >
                    <div className="ttl serif">{t.title}</div>
                    <div className="desc">{t.desc}</div>
                  </button>
                ))}
              </div>

              <div className="field">
                <label>Venue preference</label>
                <div style={{ display: "flex", gap: 12 }}>
                  <RadioBtn checked={data.venue === "mandapam"} onClick={() => update("venue", "mandapam")} label="Our Kalyana Mandapam" />
                  <RadioBtn checked={data.venue === "offsite"} onClick={() => update("venue", "offsite")} label="Off-site (we cater to your venue)" />
                </div>
              </div>

              <div className="form-actions">
                <span></span>
                <button className="btn btn-primary" onClick={next}>Continue <ArrowIcon /></button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-section">
              <h3 className="serif">Date and scale.</h3>
              <p className="sub">A tentative date is fine — we'll confirm exact availability when we call.</p>

              <div className="field-row">
                <div className={"field" + (errors.date ? " error" : "")}>
                  <label>Tentative date</label>
                  <input type="date" min={today} value={data.date} onChange={(e) => update("date", e.target.value)} />
                  {errors.date && <div className="err">{errors.date}</div>}
                </div>
                <div className="field">
                  <label>Approximate guests</label>
                  <select value={data.guests} onChange={(e) => update("guests", e.target.value)}>
                    {GUEST_RANGES.map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Sadhya included?</label>
                <div style={{ display: "flex", gap: 12 }}>
                  <RadioBtn checked={data.sadhyaIncluded === true} onClick={() => update("sadhyaIncluded", true)} label="Yes — full traditional sadhya" />
                  <RadioBtn checked={data.sadhyaIncluded === false} onClick={() => update("sadhyaIncluded", false)} label="Hall only" />
                </div>
              </div>

              <div className="form-actions">
                <button className="btn btn-ghost" onClick={back}>← Back</button>
                <button className="btn btn-primary" onClick={next}>Continue <ArrowIcon /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="form-section">
              <h3 className="serif">Your details.</h3>
              <p className="sub">We'll write back within the day. We don't share your details.</p>

              <div className={"field" + (errors.name ? " error" : "")}>
                <label>Full name</label>
                <input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Lakshmi Menon" />
                {errors.name && <div className="err">{errors.name}</div>}
              </div>
              <div className="field-row">
                <div className={"field" + (errors.phone ? " error" : "")}>
                  <label>Phone</label>
                  <input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 ..." />
                  {errors.phone && <div className="err">{errors.phone}</div>}
                </div>
                <div className={"field" + (errors.email ? " error" : "")}>
                  <label>Email (optional)</label>
                  <input value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                  {errors.email && <div className="err">{errors.email}</div>}
                </div>
              </div>
              <div className="field">
                <label>City</label>
                <input value={data.city} onChange={(e) => update("city", e.target.value)} />
              </div>
              <div className="field">
                <label>Anything we should know?</label>
                <textarea
                  value={data.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Specific dishes, dietary notes, NRI coordination, etc."
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-ghost" onClick={back}>← Back</button>
                <button className="btn btn-primary" onClick={next}>Review <ArrowIcon /></button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="form-section">
              <h3 className="serif">Please review.</h3>
              <p className="sub">Confirm the details below and we'll be in touch.</p>

              <div className="summary">
                <SummaryRow l="Occasion" v={EVENT_TYPES.find(t => t.id === data.eventType).title} />
                <SummaryRow l="Venue" v={data.venue === "mandapam" ? "Our Kalyana Mandapam, Kadavanthra" : "Off-site (we cater to your venue)"} />
                <SummaryRow l="Date" v={formatDate(data.date)} />
                <SummaryRow l="Guests" v={data.guests} />
                <SummaryRow l="Sadhya" v={data.sadhyaIncluded ? "Full traditional sadhya" : "Hall only"} />
                <SummaryRow l="Name" v={data.name} />
                <SummaryRow l="Contact" v={data.phone + (data.email ? " · " + data.email : "")} />
                <SummaryRow l="City" v={data.city} />
                {data.notes && <SummaryRow l="Notes" v={data.notes} />}
              </div>

              <div className="form-actions">
                <button className="btn btn-ghost" onClick={back}>← Edit details</button>
                <button className="btn btn-primary" onClick={submit}>Send enquiry <ArrowIcon /></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ l, v }) {
  return (
    <div className="summary-row">
      <div className="l">{l}</div>
      <div className="v">{v}</div>
    </div>
  );
}

function RadioBtn({ checked, onClick, label }) {
  return (
    <button
      onClick={onClick}
      className={"event-opt" + (checked ? " selected" : "")}
      style={{ flex: 1, padding: "14px 16px", flexDirection: "row", alignItems: "center", gap: 12 }}
    >
      <span style={{
        width: 16, height: 16, borderRadius: "50%",
        border: "1px solid " + (checked ? "var(--sindoor)" : "var(--rule-strong)"),
        background: checked ? "var(--sindoor)" : "transparent",
        boxShadow: checked ? "inset 0 0 0 3px var(--sandal)" : "none",
        flexShrink: 0,
      }}></span>
      <span style={{ fontFamily: "var(--serif)", fontSize: 16 }}>{label}</span>
    </button>
  );
}

function formatDate(s) {
  if (!s) return "—";
  const d = new Date(s);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

Object.assign(window, { EnquirePage });
