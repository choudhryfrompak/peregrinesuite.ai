import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Sales Agent — Case Study",
  description:
    "Repair Booking in Minutes, Not Hours. Meet Peregrine Suite AI — the intelligent agent that transforms the glazier service workflow.",
};

const F = '"Mazzard H", sans-serif';

const bottlenecks = [
  "Lengthy manual intake of customer details and job specifics",
  "Time lags while quotes are manually generated and sent",
  "Follow\u2011up coordination once quotes are accepted",
  "CRM entry, technician assignment, and schedule conflicts\u2014often handled by multiple systems",
  "Risk of double\u2011booking, oversights, or customer frustration",
];

const steps = [
  {
    num: "Step 1",
    title: "Smart Call Intake",
    intro: "When a customer calls requesting a glazier service, the AI agent captures:",
    bullets: [
      "Customer details (name, contact, location)",
      "Scope of work (e.g. window type, damage description)",
      "Urgency and specifics of the job",
    ],
    outro: "All in natural conversation\u2014no forms required.",
  },
  {
    num: "Step 2",
    title: "Instant Quote Generation",
    intro: "With the job details, the AI:",
    bullets: [
      "Calculates pricing based on service type, materials, and urgency",
      "Generates and sends a personalized quote via SMS or email within seconds",
    ],
  },
  {
    num: "Step 3",
    title: "Quote Acceptance & CRM Integration",
    intro: "Once the customer approves the quote:",
    bullets: [
      "The AI automatically logs the new client and job in the CRM",
      "Ensures no manual data entry is required",
    ],
  },
  {
    num: "Step 4",
    title: "Smart Scheduling with Google Calendar",
    intro: "Peregrine then:",
    bullets: [
      "Checks technicians\u2019 availability via Google Calendar",
      "Selects the next available, qualified technician",
      "Books the appointment and sends confirmation to both the customer and technician",
    ],
  },
  {
    num: "Step 5",
    title: "Seamless Follow\u2011through & Notifications",
    intro: "The system can:",
    bullets: [
      "Send reminder alerts to both customer and technician",
      "Update CRM records with scheduled appointment details",
      "Optionally trigger follow-up messages after job completion",
    ],
  },
];

const tableRows = [
  { metric: "Customer intake to quote", before: "15\u201330 minutes", after: "~1\u20132 minutes" },
  { metric: "Quote to acceptance step", before: "Hours\u2014customers wait", after: "Instant, with auto\u2011follow\u2011up" },
  { metric: "CRM job entry", before: "Manual, error\u2011prone", after: "Automated, accurate" },
  { metric: "Scheduling technician", before: "Manual checking, risk of overlap", after: "Immediate, conflict\u2011free booking" },
  { metric: "Total human handling time", before: "Tens of minutes per job", after: "Fully autonomous with minimal oversight" },
];

const benefits = [
  { title: "Speed & Satisfaction", desc: "Clients get quotes instantly and see rapid, transparent scheduling\u2014no waiting or back\u2011and\u2011forth." },
  { title: "Operational Efficiency", desc: "Teams reallocate time from manual tasks to higher\u2011value customer service or oversight." },
  { title: "Error Reduction", desc: "Automated data capture ensures accuracy in job records, scheduling, and CRM logging." },
  { title: "Scalability", desc: "As job volume grows, Peregrine scales effortlessly\u2014no added staffing costs or complexity." },
];

export default function SalesAgentPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section style={{ background: "linear-gradient(234deg, rgba(59,130,246,0.12) -13%, #fff 45%)", padding: "80px 24px 60px", textAlign: "center" }}>
        <ScrollFadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.15, color: "rgb(59,130,246)", marginBottom: 20, letterSpacing: "-0.3px" }}>
              Repair Booking in Minutes, Not Hours
            </h1>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 20, color: "rgb(74,74,74)", lineHeight: 1.6, maxWidth: 640, margin: "0 auto 30px" }}>
              Meet <strong>Peregrine Suite AI</strong>&mdash;the intelligent agent that transforms the glazier service workflow from disjointed steps into seamless, automated efficiency.
            </p>

            <div style={{ position: "relative", width: "100%", maxWidth: 500, margin: "0 auto 24px", aspectRatio: "938/228" }}>
              <Image src="/images/case-studies/hero-badge.png" alt="2 Days to 10 Minutes" fill style={{ objectFit: "contain" }} priority />
            </div>

            <Link href="/contact-us" className="group btn-glow inline-flex items-center justify-center transition-all duration-300" style={{ background: "rgb(59,130,246)", borderRadius: 30, height: 48, padding: "0 30px", fontFamily: F, fontWeight: 500, fontSize: 14, color: "#fff", textDecoration: "none" }}>
              <span>Book a Demo</span>
              <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ========== THE GLAZIER SERVICES BOTTLENECK ========== */}
      <section style={{ backgroundColor: "#ebf2ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", marginBottom: 12 }}>
              The Glazier Services Bottleneck
            </h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 18, color: "rgb(133,133,133)", marginBottom: 50 }}>
              Traditionally, inbound calls to schedule glass repair or replacement involve
            </p>
          </ScrollFadeIn>

          <div className="sales-bottleneck-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {bottlenecks.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.6, color: "rgb(23,26,31)", textAlign: "center" }}>
                  {b}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== AUTOMATE THE ENTIRE WORKFLOW ========== */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(24px, 3.5vw, 36px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 10 }}>
              Automate the Entire Workflow with Peregrine Suite AI
            </h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, color: "rgb(133,133,133)", textAlign: "center", marginBottom: 50 }}>
              From call to completion, here&apos;s how Peregrine transforms the process:
            </p>
          </ScrollFadeIn>

          <div className="sales-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {steps.map((s, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ background: "linear-gradient(135deg, #f4f0fa 0%, #e6ebf2 100%)", borderRadius: 17, padding: "28px 24px", border: "2px solid rgb(221,225,240)", height: "100%" }}>
                  <div style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: "rgb(59,130,246)", textTransform: "uppercase", letterSpacing: "1.25px", marginBottom: 10 }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: "rgb(23,26,31)", marginBottom: 14, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 14, color: "rgb(74,74,74)", marginBottom: 10, fontWeight: 500 }}>{s.intro}</p>
                  <ul style={{ listStyle: "disc", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{ fontFamily: F, fontWeight: 400, fontSize: 14, lineHeight: 1.55, color: "rgb(74,74,74)" }}>{b}</li>
                    ))}
                  </ul>
                  {s.outro && <p style={{ fontFamily: F, fontSize: 14, color: "rgb(59,130,246)", marginTop: 12, fontStyle: "italic" }}>{s.outro}</p>}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TRANSFORMATION TABLE ========== */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(24px, 3.5vw, 36px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 50 }}>
              See the Transformation &ndash; Workflow at a Glance
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F }}>
                <thead>
                  <tr>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(23,26,31)", textAlign: "left", padding: "16px 20px", borderBottom: "2px solid rgb(221,225,240)" }}>Metric</th>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(23,26,31)", textAlign: "left", padding: "16px 20px", borderBottom: "2px solid rgb(221,225,240)" }}>Before Peregrine</th>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(59,130,246)", textAlign: "left", padding: "16px 20px", border: "2px solid rgb(59,130,246)", borderBottom: "2px solid rgb(221,225,240)", borderRadius: "8px 8px 0 0" }}>After Peregrine</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((r, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 500, fontSize: 15, color: "rgb(23,26,31)", padding: "18px 20px", borderBottom: "1px solid rgb(221,225,240)" }}>{r.metric}</td>
                      <td style={{ fontWeight: 400, fontSize: 15, color: "rgb(74,74,74)", padding: "18px 20px", borderBottom: "1px solid rgb(221,225,240)" }}>{r.before}</td>
                      <td style={{ fontWeight: 500, fontSize: 15, color: "rgb(59,130,246)", padding: "18px 20px", borderBottom: "1px solid rgb(221,225,240)", borderLeft: "2px solid rgb(59,130,246)", borderRight: "2px solid rgb(59,130,246)", ...(i === tableRows.length - 1 ? { borderBottom: "2px solid rgb(59,130,246)", borderRadius: "0 0 8px 8px" } : {}) }}>{r.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== WHY IT MATTERS ========== */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 50 }}>
              Why It Matters
            </h2>
          </ScrollFadeIn>
          <div className="sales-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {benefits.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ background: "#fff", borderRadius: 17, padding: "28px 20px", border: "2px solid rgb(221,225,240)", height: "100%", display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 16, color: "rgb(23,26,31)", lineHeight: 1.3, textDecoration: "underline", textDecorationColor: "rgb(59,130,246)", textUnderlineOffset: "4px" }}>{b.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, color: "rgb(74,74,74)", lineHeight: 1.6 }}>{b.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section style={{ background: "linear-gradient(234deg, rgba(59,130,246,0.15) -13%, #fff 40%)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <div className="ps-row" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 24, padding: "50px 60px", background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.02) 100%)", border: "1px solid rgba(59,130,246,0.15)" }}>
              <div style={{ flex: 1, maxWidth: 450 }}>
                <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 28, color: "rgb(59,130,246)", marginBottom: 16, lineHeight: 1.35 }}>
                  Ready to Automate Glazier Scheduling?
                </h2>
                <p style={{ fontFamily: F, fontSize: 16, color: "rgb(74,74,74)", lineHeight: 1.6, marginBottom: 30 }}>
                  Peregrine Suite AI turns a traditionally clunky, multi-system process into a smooth, end-to-end automated workflow. It&apos;s not just faster&mdash;it&apos;s smarter, cleaner, and primed for growth.
                </p>
                <Link href="/contact-us" className="group btn-glow inline-flex items-center justify-center transition-all duration-300" style={{ background: "rgb(59,130,246)", borderRadius: 30, height: 48, padding: "0 30px", fontFamily: F, fontWeight: 500, fontSize: 14, color: "#fff", textDecoration: "none" }}>
                  <span>Book a Demo</span>
                  <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </Link>
              </div>
              {/* Decorative icon */}
              <div style={{ position: "relative", width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg className="circular-text-anim" viewBox="0 0 200 200" style={{ position: "absolute", width: "100%", height: "100%" }}>
                  <defs><path id="salesCircle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" /></defs>
                  <text style={{ fontFamily: F, fontSize: 13, fontWeight: 500, fill: "rgba(0,0,0,0.15)", letterSpacing: "5px" }}>
                    <textPath href="#salesCircle" startOffset="0%">Sales Agent- Peregrine Suite AI-</textPath>
                  </text>
                </svg>
                <svg width="50" height="62" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#salesBolt)" stroke="url(#salesBolt)" strokeWidth="0.5" strokeLinejoin="round" />
                  <defs><linearGradient id="salesBolt" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="rgb(139,92,246)" /><stop offset="100%" stopColor="rgb(59,130,246)" /></linearGradient></defs>
                </svg>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <style>{`
        .circular-text-anim { animation: spin 15s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 809px) {
          .sales-bottleneck-grid { grid-template-columns: 1fr !important; }
          .sales-steps-grid { grid-template-columns: 1fr !important; }
          .sales-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 810px) and (max-width: 1199px) {
          .sales-bottleneck-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sales-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sales-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
