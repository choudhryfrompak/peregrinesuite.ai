import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Compliance Agent — Case Study",
  description:
    "Infrastructure Compliance in Minutes, Not Days. Meet Peregrine Suite AI — your Telecom site-plan compliance agent.",
};

const F = '"Mazzard H", sans-serif';

const challenges = [
  { bold: "Time-consuming reviews", rest: "—days or even weeks lost per plan." },
  { bold: "Inconsistent interpretations", rest: " of Ausgrid\u2019s technical specifications." },
  { bold: "Risk of costly delays", rest: " to project timelines or failed builds due to non-compliance." },
  { bold: "Limited audit readiness", rest: " and traceability in documentation." },
];

const steps = [
  {
    num: "Step 1",
    title: "Plan Ingest & Standard Parsing",
    bullets: [
      "Accepts all common plan formats (PDF, CAD, DWG).",
      "Automatically extracts key elements: pole positions, cable routing, distances, equipment specs.",
      "Encodes them into a structured compliance-ready model.",
    ],
  },
  {
    num: "Step 2",
    title: "Apply Ausgrid NS-183 Compliance Rules",
    bullets: [
      "Ingests and interprets rules from Ausgrid\u2019s NS-183 standard\u2014such as minimum clearances, safety margin, conductor spacing, and equipment placement.",
      "Converts textual norms into logical validation checks.",
      "Flag issues like improper clearances, insufficient spacing, or misaligned infrastructural components.",
    ],
  },
  {
    num: "Step 3",
    title: "AI-Driven Issue Detection & Annotation",
    bullets: [
      "Highlights discrepancies on plan visuals.",
      "For example: \u201CConductor-to-ground clearance at pole 3 is 220 mm under the required 300 mm.\u201D",
      "Suggests corrective actions\u2014e.g., \u201CShift element 50 mm north.\u201D",
    ],
  },
  {
    num: "Step 4",
    title: "Generate Compliance Confirmation Report",
    intro: "Auto-populates a structured report including:",
    bullets: [
      "Summary of compliant versus non-compliant checks.",
      "Visual plan annotations pointing to flagged issues.",
      "Severity grading (Critical / Warning / Advisory).",
      "Suggested remediation steps.",
    ],
    outro: "Deliverables available as:",
    outroBullets: [
      "PDF report.",
      "Annotated CAD/DWG markup.",
      "Dashboard summary for quick review.",
    ],
  },
  {
    num: "Step 5",
    title: "Continuous Learning & Adaptation",
    bullets: [
      "Incorporates reviewer feedback to refine interpretation (e.g., acceptable rule variations or exceptions).",
      "Learns from historical corrections, improving future review speed and accuracy.",
    ],
  },
];

const tableRows = [
  { metric: "Review Time per Plan", before: "2\u20133 days", after: "5\u201310 minutes" },
  { metric: "Accuracy/Compliance Capture", before: "~80%, manual errors", after: ">99%, automated precision" },
  { metric: "Human Review Workload", before: "Heavy (hours per plan)", after: "Light (minutes per plan)" },
  { metric: "Rejection Rate", before: "10\u201315% post-submission", after: "<2% pre-submission" },
  { metric: "Audit-Ready Documentation", before: "Manual creation overhead", after: "Auto-generated on-demand" },
];

const benefits = [
  { title: "Speed", desc: "Accelerate infrastructure build cycles by clearing compliance checks in minutes." },
  { title: "Consistency", desc: "Eliminate variability in manual interpretations of NS-183." },
  { title: "Safety & Reliability", desc: "Enforce network integrity and safety standards rigorously." },
  { title: "Reduced Risk", desc: "Catch issues early\u2014before construction or approval delays occur." },
  { title: "Auditability", desc: "Always-on visibility with full logs and annotated documentation." },
  { title: "Scalability", desc: "Handle growing plan volumes with minimal human oversight." },
];

function ClockIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgb(59,130,246)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ComplianceAgentPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section style={{ background: "linear-gradient(234deg, rgba(59,130,246,0.12) -13%, #fff 45%)", padding: "80px 24px 60px", textAlign: "center" }}>
        <ScrollFadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h1 style={{ fontFamily: F, fontWeight: 600, fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 1.15, color: "rgb(59,130,246)", marginBottom: 20, letterSpacing: "-0.3px" }}>
              Infrastructure Compliance in Minutes, Not Days
            </h1>
            <p style={{ fontFamily: F, fontWeight: 500, fontSize: 20, color: "rgb(74,74,74)", lineHeight: 1.5, marginBottom: 8 }}>
              Meet Peregrine Suite AI&mdash;
            </p>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 20, color: "rgb(74,74,74)", lineHeight: 1.5, marginBottom: 30 }}>
              your Telecom site-plan compliance agent
            </p>

            <div style={{ position: "relative", width: "100%", maxWidth: 500, margin: "0 auto 24px", aspectRatio: "938/228" }}>
              <Image src="/images/case-studies/hero-badge.png" alt="2 Days to 10 Minutes" fill style={{ objectFit: "contain" }} priority />
            </div>

            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 18, color: "rgb(74,74,74)", lineHeight: 1.65, maxWidth: 680, margin: "0 auto 36px" }}>
              What once took days of manual review now happens in minutes. Peregrine compares vendor-drawn site plans against Ausgrid&apos;s NS-183 technical standards with AI precision&mdash;ensuring safety, compliance, and efficiency at scale.
            </p>

            <Link href="/contact-us" className="group btn-glow inline-flex items-center justify-center transition-all duration-300" style={{ background: "rgb(59,130,246)", borderRadius: 30, height: 48, padding: "0 30px", fontFamily: F, fontWeight: 500, fontSize: 14, color: "#fff", textDecoration: "none" }}>
              <span>Book a Demo</span>
              <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ========== THE INDUSTRIAL CHALLENGE ========== */}
      <section style={{ backgroundColor: "#ebf2ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", marginBottom: 12 }}>
              The Industrial Challenge
            </h2>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 18, color: "rgb(133,133,133)", marginBottom: 50 }}>
              Manual audits of site plans face critical obstacles
            </p>
          </ScrollFadeIn>

          <div className="compliance-challenge-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {challenges.map((c, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.6, color: "rgb(23,26,31)", textAlign: "center" }}>
                  <strong>{c.bold}</strong>{c.rest}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW PEREGRINE SUITE AI OPERATES ========== */}
      <section style={{ backgroundColor: "#f7f7f7", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 50 }}>
              How Peregrine Suite AI Operates
            </h2>
          </ScrollFadeIn>

          <div className="compliance-steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {steps.map((s, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ background: "linear-gradient(135deg, #f4f0fa 0%, #e6ebf2 100%)", borderRadius: 17, padding: "28px 24px", border: "2px solid rgb(221,225,240)", height: "100%" }}>
                  <div style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: "rgb(59,130,246)", textTransform: "uppercase", letterSpacing: "1.25px", marginBottom: 10 }}>
                    {s.num}
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: "rgb(23,26,31)", marginBottom: 14, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  {s.intro && <p style={{ fontFamily: F, fontSize: 14, color: "rgb(74,74,74)", marginBottom: 8, fontWeight: 500 }}>{s.intro}</p>}
                  <ul style={{ listStyle: "disc", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                    {s.bullets.map((b, j) => (
                      <li key={j} style={{ fontFamily: F, fontWeight: 400, fontSize: 14, lineHeight: 1.55, color: "rgb(74,74,74)" }}>{b}</li>
                    ))}
                  </ul>
                  {s.outro && (
                    <>
                      <p style={{ fontFamily: F, fontSize: 14, color: "rgb(74,74,74)", marginTop: 10, fontWeight: 600 }}>{s.outro}</p>
                      <ul style={{ listStyle: "disc", paddingLeft: 18, display: "flex", flexDirection: "column", gap: 4, marginTop: 4 }}>
                        {s.outroBullets?.map((b, j) => (
                          <li key={j} style={{ fontFamily: F, fontWeight: 400, fontSize: 14, lineHeight: 1.55, color: "rgb(74,74,74)" }}>{b}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASE STUDY IN ACTION (TABLE) ========== */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 50 }}>
              Case Study in Action
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: F }}>
                <thead>
                  <tr>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(23,26,31)", textAlign: "left", padding: "16px 20px", borderBottom: "2px solid rgb(221,225,240)" }}>Metric</th>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(23,26,31)", textAlign: "left", padding: "16px 20px", borderBottom: "2px solid rgb(221,225,240)" }}>Before Peregrine</th>
                    <th style={{ fontWeight: 600, fontSize: 20, color: "rgb(59,130,246)", textAlign: "left", padding: "16px 20px", borderBottom: "2px solid rgb(59,130,246)", borderRadius: "8px 8px 0 0", border: "2px solid rgb(59,130,246)", borderBottom: "2px solid rgb(221,225,240)" }}>After Peregrine</th>
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
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: "clamp(28px, 4vw, 40px)", color: "rgb(59,130,246)", letterSpacing: "-0.66px", textAlign: "center", marginBottom: 50 }}>
              Why It Matters for Telecom Teams
            </h2>
          </ScrollFadeIn>
          <div className="compliance-benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {benefits.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <div style={{ background: "#fff", borderRadius: 17, padding: "28px 24px", border: "2px solid rgb(221,225,240)", height: "100%", display: "flex", flexDirection: "column", gap: 12, textAlign: "center", alignItems: "center" }}>
                  <ClockIcon />
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 18, color: "rgb(23,26,31)", lineHeight: 1.3, textDecoration: "underline", textDecorationColor: "rgb(59,130,246)", textUnderlineOffset: "4px" }}>{b.title}</h3>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, color: "rgb(74,74,74)", lineHeight: 1.6 }}>{b.desc}</p>
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
                  Ready to Elevate Your Compliance Workflow?
                </h2>
                <p style={{ fontFamily: F, fontSize: 16, color: "rgb(74,74,74)", lineHeight: 1.6, marginBottom: 30 }}>
                  With Peregrine Suite AI, every site plan is reviewed, validated, and confirmed compliant&mdash;before delays ever happen. Let&apos;s talk about integrating a smarter compliance layer into your telecom infrastructure process.
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
                  <defs><path id="compCircle" d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" /></defs>
                  <text style={{ fontFamily: F, fontSize: 13, fontWeight: 500, fill: "rgba(0,0,0,0.15)", letterSpacing: "5px" }}>
                    <textPath href="#compCircle" startOffset="0%">Compliance Agent- Peregrine Suite AI-</textPath>
                  </text>
                </svg>
                <svg width="50" height="62" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#compBolt)" stroke="url(#compBolt)" strokeWidth="0.5" strokeLinejoin="round" />
                  <defs><linearGradient id="compBolt" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="rgb(139,92,246)" /><stop offset="100%" stopColor="rgb(59,130,246)" /></linearGradient></defs>
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
          .compliance-challenge-grid { grid-template-columns: 1fr !important; }
          .compliance-steps-grid { grid-template-columns: 1fr !important; }
          .compliance-benefits-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 810px) and (max-width: 1199px) {
          .compliance-steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .compliance-benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
