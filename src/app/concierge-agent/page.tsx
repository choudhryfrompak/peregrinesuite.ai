import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Concierge Agent",
  description:
    "Advanced Concierge agent that speaks, thinks, books and sells like your best performing humans 24/7 consistently.",
};

const F = '"Mazzard H", sans-serif';

/* ---- DATA ---- */
const features = [
  {
    title: "More Than Answering Calls",
    desc: "Concierge agent is your 24/7 receptionist, appointment setter, support agent, relationship manager, admin assistant, handling both inbound and outbound, tailored to whatever your business needs.",
    icon: "/images/concierge/phone-call.svg",
    iconBg: "rgba(59,130,246,0.08)",
  },
  {
    title: "Integrated Booking, 24/7",
    desc: "Concierge agent books and syncs appointments 24/7, directly into the tools you already use \u2014 from industry software like ServiceM8 and Cliniko to major CRMs like HubSpot, Zoho CRM and many more.",
    icon: "/images/concierge/calendar.svg",
    iconBg: "rgba(239,68,68,0.08)",
  },
  {
    title: "Your Growth Command Centre",
    desc: "Our dashboard provides a transparent, real-time view of your call operations and sales pipeline to drive smarter growth.",
    icon: "/images/concierge/growth.svg",
    iconBg: "rgba(34,197,94,0.08)",
  },
  {
    title: "Your Strategic AI Partner",
    desc: "AI isn\u2019t plug-and-play; we are the dedicated team that ensures it fits perfectly with your business processes to guarantee a tangible ROI.",
    icon: "/images/concierge/ai-partner.svg",
    iconBg: "rgba(168,85,247,0.08)",
  },
];

const howSteps = [
  {
    title: "Call Detection & Intent Recognition",
    desc: "The AI voice agent answers incoming calls, greets the caller, and uses NLP to detect the caller\u2019s intent \u2014 whether it\u2019s an order, booking, enquiry, or support request.",
    icon: "/images/concierge/how-call.svg",
  },
  {
    title: "Information Collection & Dialogue Flow",
    desc: "he agent engages the caller using dynamic, human-like dialogue to collect all necessary details (e.g. order items, appointment time, service address), adjusting based on available knowledge and past interactions.",
    icon: "/images/concierge/how-info.svg",
  },
  {
    title: "System Integration & Action Execution",
    desc: "The agent processes the captured data and integrates seamlessly with backend systems like POS, calendars, CRMs, and ticketing tools \u2014 executing tasks in real-time with zero manual effort.",
    icon: "/images/concierge/how-system.svg",
  },
  {
    title: "Confirmation & Notification",
    desc: "It confirms the action with the caller and sends automated updates via SMS, email, dashboard notifications, or direct-to-printer commands to notify staff and log the interaction.",
    icon: "/images/concierge/how-confirm.svg",
  },
];

const stats = [
  {
    value: "100%",
    label: "Calls Answered Instantly",
    desc: "Concierge agent is your always-on receptionist, immediate lead qualifier, instant support agent, and on-demand appointment setter \u2014 ensuring no customer ever waits.",
  },
  {
    value: "70%",
    label: "Cheaper Than a Human",
    desc: "Slash your operational costs. Concierge agent works 24/7 without the overhead of salary, training, or sick days, delivering significant savings while handling more calls.",
  },
  {
    value: "40%",
    label: "Boost in Customer Satisfaction",
    desc: "Customers love instant service. By answering every call immediately and providing consistent, professional responses, Concierge agent ensures a perfect experience, every time.",
  },
];

const industries = [
  { name: "Medical", videoId: "L-fhP1ckcu8" },
  { name: "Plumber", videoId: "Hvyqv6ZD3Oo" },
  { name: "Restaurant", videoId: "4tFEgFFXFL8" },
];

/* ---- PAGE ---- */
export default function ConciergeAgentPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section
        style={{
          background: "linear-gradient(180deg, rgba(177,76,245,0.06) 0%, rgba(59,130,246,0.06) 40%, #fff 80%)",
          padding: "40px 24px 50px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Decorative dots/lines bg */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.04, backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <ScrollFadeIn>
          <p style={{ fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "rgb(133,133,133)", marginBottom: 14 }}>
            AMPLIFYING HUMAN CAPABILITY THROUGH AI
          </p>

          <h1 style={{ fontFamily: F, fontWeight: 700, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15, maxWidth: 600, margin: "0 auto 20px" }}>
            Smarter <span className="gradient-text">Conceirge Agent</span> for Australian Businesses
          </h1>

          <p style={{ fontFamily: F, fontSize: 16, color: "rgb(83,82,91)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px" }}>
            Advanced Concierge agent that speak, think, book and sell like your best performing humans 24/7 consistently.
          </p>

          {/* Emily Avatar - large circular with pink/blue background */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, marginBottom: 30 }}>
            <div style={{ width: 280, height: 280, borderRadius: "50%", overflow: "hidden", border: "4px solid rgba(255,255,255,0.9)", boxShadow: "0 0 60px rgba(168,85,247,0.15), 0 0 30px rgba(59,130,246,0.1)" }}>
              <Image
                src="/images/concierge/emily-avatar.webp"
                alt="Emily - Demo Agent"
                width={280}
                height={280}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
            <p style={{ fontFamily: F, fontSize: 13, color: "rgb(133,133,133)", lineHeight: 1.6, maxWidth: 420, textAlign: "center" }}>
              Note: Emily is a demo agent only. In production, she&apos;ll be tailored to sound and speak exactly how your business needs.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="btn-glow inline-flex items-center justify-center"
            style={{ background: "rgb(59,130,246)", borderRadius: 30, height: 54, padding: "0 32px", fontFamily: F, fontWeight: 500, fontSize: 15, color: "#fff", textDecoration: "none" }}
          >
            Book Demo
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== FEATURES 2x2 ========== */}
      <section style={{ backgroundColor: "#fff", padding: "70px 40px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="concierge-features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px 80px" }}>
            {features.map((f, i) => (
              <ScrollFadeIn key={f.title} delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 90, height: 90, borderRadius: 22, backgroundColor: f.iconBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", padding: 18 }}>
                    <img src={f.icon} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 17, color: "rgb(23,26,31)", marginBottom: 10, lineHeight: 1.3 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 14, color: "rgb(83,82,91)", lineHeight: 1.7 }}>
                    {f.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW CONCIERGE AGENT WORKS ========== */}
      <section style={{ backgroundColor: "rgb(247,250,255)", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 34, textAlign: "center", marginBottom: 56 }}>
              <span style={{ color: "rgb(59,130,246)" }}>How Concierge Agent Works</span>
            </h2>
          </ScrollFadeIn>

          <div className="concierge-how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {howSteps.map((s, i) => (
              <ScrollFadeIn key={s.title} delay={i * 80}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 90, height: 90, borderRadius: 22, backgroundColor: "rgba(59,130,246,0.07)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", padding: 18 }}>
                    <img src={s.icon} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  </div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 14, color: "rgb(23,26,31)", marginBottom: 10, lineHeight: 1.4 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: F, fontSize: 13, color: "rgb(83,82,91)", lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS (gradient bar) ========== */}
      <section style={{ background: "linear-gradient(110deg, rgb(59,130,246) 0%, rgb(139,92,246) 50%, rgb(176,76,244) 100%)", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="concierge-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
            {stats.map((st, i) => (
              <ScrollFadeIn key={st.value} delay={i * 100}>
                <div style={{ textAlign: "center", color: "#fff" }}>
                  <div style={{ width: 68, height: 68, borderRadius: 18, backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {i === 0 && <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                      {i === 1 && <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></>}
                      {i === 2 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>}
                    </svg>
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 700, fontSize: 48, lineHeight: 1, marginBottom: 8 }}>{st.value}</div>
                  <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 15, marginBottom: 12 }}>{st.label}</h3>
                  <p style={{ fontFamily: F, fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>{st.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INDUSTRY SOLUTIONS ========== */}
      <section style={{ backgroundColor: "#fff", padding: "70px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontFamily: F, fontSize: 18, color: "rgb(133,133,133)", marginBottom: 4 }}>Concierge agent</p>
              <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: 28, color: "rgb(133,133,133)" }}>solution for every industry</h2>
            </div>
          </ScrollFadeIn>

          <div className="concierge-industry-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {industries.map((ind, i) => (
              <ScrollFadeIn key={ind.name} delay={i * 100}>
                <div>
                  <h3 style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: "rgb(23,26,31)", marginBottom: 14 }}>{ind.name}</h3>
                  <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "16/9", position: "relative", backgroundColor: "#000" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${ind.videoId}`}
                      title={ind.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: "100%", height: "100%", border: "none", position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
