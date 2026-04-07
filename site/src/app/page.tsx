"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const F = '"Mazzard H", sans-serif'; // font shorthand

const trustedLogos = [
  { alt: "Global Supermarket", src: "/images/integrations-banner.webp", w: 157, h: 61 },
  { alt: "Animal Welfare", src: "/images/expert-avatar.png", w: 113, h: 67 },
  { alt: "Schnithouse", src: "/images/trusted-avatar.webp", w: 90, h: 63 },
  { alt: "Dosa", src: "/images/badge.png", w: 89, h: 62 },
];

const industryTabs = [
  "Sales / Lead Generation",
  "Marketing",
  "Customer Support",
  "Healthcare",
  "Logistics",
];

const steps = [
  { title: "Centralized Knowledge Base", desc: "Upload and organize all your company-specific information in one secure hub.", icon: "/images/step-knowledge.svg", bg: "rgb(242,247,255)", border: "rgba(59,130,245,0.2)" },
  { title: "Seamless Integrations", desc: "Connect Peregrine Suite with your existing business tools and systems.", icon: "/images/step-integrations.svg", bg: "rgb(245,237,255)", border: "rgb(241,230,255)" },
  { title: "AI Agent Deployment", desc: "Build domain-specific AI agents that understand your business and workflows.", icon: "/images/step-deployment.svg", bg: "rgb(245,253,255)", border: "rgb(197,243,252)" },
  { title: "Automated Actions", desc: "Agents execute tasks, streamline processes, and drive efficiency across your operations.", icon: "/images/step-automation.svg", bg: "rgb(255,253,247)", border: "rgb(255,247,225)" },
];

const integrations = [
  { name: "Google Calendar", label: "Calendar", bg: "#e8fbff", icon: "/images/integration1.svg" },
  { name: "Gmail", label: "Email", bg: "#f2e6ff", icon: "/images/integration2.svg" },
  { name: "Microsoft Outlook", label: "Email & Calendar", bg: "#def8ff", icon: "/images/integration3.svg" },
  { name: "XERO", label: "Accounting", bg: "#edfbff", icon: "/images/integration4.svg" },
  { name: "Quickbooks", label: "Reports", bg: "#efffed", icon: "/images/integration1.svg" },
  { name: "Dext", label: "Data Extraction", bg: "#ffe8e6", icon: "/images/integration2.svg" },
  { name: "Deputy", label: "Rostering & Timesheets", bg: "#e1eff5", icon: "/images/integration3.svg" },
  { name: "Hubdoc", label: "Storage & Extraction", bg: "#ebfafc", icon: "/images/integration4.svg" },
  { name: "Zoho", label: "Business Software Suite", bg: "#d9d9d9", icon: "/images/integration1.svg" },
  { name: "Thryv", label: "Small Business MGMT", bg: "#eaf7e1", icon: "/images/integration2.svg" },
  { name: "Cliniko", label: "Practice Management", bg: "#f0f4ff", icon: "/images/integration3.svg" },
  { name: "Karbonhq", label: "Practice Management", bg: "#f5f0ff", icon: "/images/integration4.svg" },
  { name: "ServiceM8", label: "Job Management", bg: "#fff0e8", icon: "/images/integration1.svg" },
  { name: "Coreplus", label: "Practice Management", bg: "#e8f5ff", icon: "/images/integration2.svg" },
];

const blogs = [
  { title: "Why accounting firms are primed to use AI agents in their work Copy", date: "Sep 5, 2025", image: "/images/blog1.jpg", href: "/blog/why-accounting-firms-are-primed-to-use-ai-agents-in-their-work-copy" },
  { title: "The Age of AI Agents: Unlocking Transformative Potential Across Every Industry", date: "Sep 5, 2025", image: "/images/blog2.jpg", href: "/blog/unlocking-transformative-potential-across-every-industry" },
  { title: "The Voice Revolution: How AI Voice Agents Are Transforming Human-Computer Interaction", date: "Sep 5, 2025", image: "/images/blog3.jpg", href: "/blog/how-ai-voice-agents-are-transforming-human-computer-interaction" },
];

/* ------------------------------------------------------------------ */
/*  Integration card component                                         */
/* ------------------------------------------------------------------ */
function IntCard({ item }: { item: typeof integrations[0] }) {
  return (
    <div className="flex-shrink-0 relative overflow-hidden" style={{ backgroundColor: item.bg, width: 215, height: 73, borderRadius: 10 }}>
      <div className="absolute overflow-hidden" style={{ top: 20, left: 20, width: 32, height: 32 }}>
        <Image src={item.icon} alt={item.name} width={32} height={32} className="object-contain w-full h-full" />
      </div>
      <p className="absolute whitespace-nowrap" style={{ top: 13, left: 67, fontFamily: F, fontSize: 16, lineHeight: "24px", color: "rgb(23,26,31)" }}>{item.name}</p>
      <p className="absolute whitespace-nowrap" style={{ bottom: 13, left: 67, fontFamily: F, fontSize: 14, lineHeight: "24px", color: "rgb(83,82,91)" }}>{item.label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  const [tab, setTab] = useState(0);

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = (a: any, ar: any) => a.q.push(ar);
      let d = C.document;
      C.Cal = C.Cal || function () { let cal = C.Cal, ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api: any = function () { p(api, arguments); }; const ns = ar[1]; api.q = api.q || []; if (typeof ns === "string") { cal.ns[ns] = cal.ns[ns] || api; p(cal.ns[ns], ar); p(cal, ["initNamespace", ns]); } else p(cal, ar); return; } p(cal, ar); };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });
    (window as any).Cal.ns["30min"]("inline", { elementOrSelector: "#my-cal-inline-30min", calLink: "peregrine-suite-ai/30min", layout: "month_view" });
    (window as any).Cal.ns["30min"]("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <>
      {/* ========== HERO ========== */}
      <section
        className="relative hero-container"
        style={{ minHeight: "81.5vh", background: "linear-gradient(234deg, rgba(59,130,246,0.2) -13%, #fff 40%)", overflowX: "clip", overflowY: "visible" }}
      >
        {/* Decorative SVG lines */}
        <div className="absolute pointer-events-none opacity-10 hidden lg:block" style={{ top: -199, right: -209, width: 403, height: 617, transform: "rotate(6deg)" }}>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 157, left: "54%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 133, left: "44%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <div className="absolute pointer-events-none opacity-10 hidden lg:block" style={{ bottom: -302, left: -209, width: 403, height: 617, transform: "rotate(180deg)" }}>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 157, left: "54%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
          <svg viewBox="0 0 322 582" fill="none" style={{ position: "absolute", top: 133, left: "44%", transform: "translateX(-50%)", width: 322, height: 582 }}>
            <path d="M 60.5 556.5 C 399.133 420.606 288.511 18 288.511 18" stroke="rgb(59,130,246)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        <div className="relative flex flex-row items-center justify-center hero-inner" style={{ padding: "60px 0 0 60px", minHeight: "81.5vh", maxWidth: 1480, margin: "0 auto", overflow: "hidden" }}>
          {/* Left column */}
          <div className="hero-left flex flex-col" style={{ gap: 53 }}>
            {/* Absolutely-positioned text container: 688 × 327 */}
            <div className="hero-text-box relative" style={{ width: 688, maxWidth: "100%", height: 327 }}>
              {/* "AI Agents" - top:23 */}
              <div className="absolute" style={{ top: 23, left: 0, fontFamily: F, fontWeight: 700, fontSize: 60, lineHeight: "70px", letterSpacing: "-0.3px", background: "linear-gradient(287deg, rgb(177,76,245) 0%, rgb(72,164,253) 91%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI Agents
              </div>
              {/* "for End to End / Business Operations" - top:98 */}
              <div className="absolute" style={{ top: 98, left: 0, width: 546, fontFamily: F, fontWeight: 500, fontStyle: "italic", fontSize: 40, lineHeight: "48px", letterSpacing: "-0.3px", color: "rgb(59,130,246)" }}>
                <p>for End to End</p>
                <p>Business Operations</p>
              </div>
              {/* Description - bottom:34 */}
              <p className="absolute" style={{ bottom: 34, left: 0, width: 510, fontFamily: F, fontWeight: 400, fontSize: 20, lineHeight: "30px", color: "rgb(74,74,74)" }}>
                Peregrine Suite AI is an agent building platform that helps build amazing agents that transform your business by saving time and driving higher ROI
              </p>
            </div>

            {/* CTA button */}
            <Link
              href="/contact-us"
              className="btn-glow inline-flex items-center self-start"
              style={{ background: "linear-gradient(110deg, rgb(59,130,246) 0%, rgb(59,130,246) 100%)", borderRadius: 30, height: 56, padding: "15px 20px", fontFamily: F, fontWeight: 500, fontSize: 14, lineHeight: "16.8px", color: "#fff" }}
            >
              Build Agents Now
            </Link>
          </div>

          {/* Right - hero image */}
          <div className="shrink-0">
            <Image
              src="/images/peregrine-icon.png"
              alt="Peregrine Suite AI"
              width={497}
              height={497}
              className="animate-float cursor-grab select-none hero-image"
              style={{ width: 497, height: 497, objectFit: "cover", touchAction: "none" }}
              draggable={false}
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== TRUSTED BY ========== */}
      <section className="flex flex-col items-center" style={{ padding: "60px 0 0", gap: 40 }}>
        <ScrollFadeIn>
          <div className="flex flex-col items-center" style={{ gap: 10 }}>
            <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Trusted by</p>
            <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>businesses and enterprises globally</p>
          </div>
        </ScrollFadeIn>
        {/* Sliding logo carousel */}
        <ScrollFadeIn delay={100}>
          <div className="overflow-hidden" style={{ height: 175, WebkitMaskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)" }}>
            <div className="marquee-track items-center trusted-row" style={{ gap: 180, padding: "12px 104px", height: "100%", animationDuration: "20s" }}>
              {[...trustedLogos, ...trustedLogos, ...trustedLogos, ...trustedLogos].map((logo, i) => (
                <div key={i} className="shrink-0 overflow-hidden" style={{ width: logo.w, height: logo.h }}>
                  <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* ========== AGENTIC AI ========== */}
      <section className="overflow-hidden" style={{ backgroundColor: "rgba(237,237,237,0.25)", padding: "41px 20px" }}>
        <div className="flex flex-col items-center" style={{ gap: 50 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Agentic AI -</p>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Build for every Industry</p>
            </div>
          </ScrollFadeIn>

          {/* LEFT tabs + RIGHT image — Framer's row layout */}
          <ScrollFadeIn>
            <div className="tabs-panel flex flex-row" style={{ width: 1000, maxWidth: "100%" }}>
              {/* Left vertical tab column */}
              <div className="tabs-left flex flex-col shrink-0" style={{ width: "min-content" }}>
                {industryTabs.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => setTab(i)}
                    className="text-left transition-colors"
                    style={{
                      fontFamily: F, fontWeight: 500, fontSize: 20, lineHeight: "20px",
                      width: 285, height: 58, padding: "0 20px", borderRadius: 10,
                      backgroundColor: tab === i ? "rgb(59,130,246)" : "transparent",
                      color: tab === i ? "#fff" : "rgba(33,33,33,0.25)",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Right image panel */}
              <div className="tabs-right flex-1 flex items-center justify-center">
                <div style={{ border: "1px solid rgba(33,33,33,0.25)", borderRadius: 16, overflow: "hidden", width: "100%", aspectRatio: "1.26619" }}>
                  <Image src="/images/hero-image.png" alt={industryTabs[tab]} width={2640} height={2080} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== HOW PEREGRINE SUITE WORKS ========== */}
      <section id="solutions" className="overflow-hidden" style={{ backgroundColor: "#fff", padding: "50px 40px" }}>
        <div className="flex flex-col items-center" style={{ gap: 60 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>How</p>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Peregrine Suite Works</p>
            </div>
          </ScrollFadeIn>

          {/* 2×2 grid, gap 10px */}
          <div className="w-full" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(50px,1fr))", gridTemplateRows: "repeat(2, minmax(0,1fr))", gap: 10, justifyContent: "center" }}>
            {steps.map((s, i) => (
              <ScrollFadeIn key={s.title} delay={i * 100}>
                <div className="flex flex-col items-center justify-center text-center" style={{ backgroundColor: s.bg, border: `2px solid ${s.border}`, borderRadius: 20, height: 340, padding: 20, gap: 20 }}>
                  <div style={{ width: 228, height: 112, overflow: "hidden" }}>
                    <Image src={s.icon} alt={s.title} width={228} height={112} className="w-full h-full object-contain" />
                  </div>
                  <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 20, lineHeight: "21.6px", color: "rgb(23,26,31)" }}>{s.title}</h2>
                  <p style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgb(83,82,91)", maxWidth: 247 }}>{s.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== INTEGRATIONS ========== */}
      <section className="overflow-hidden" style={{ padding: "50px 30px" }}>
        <div className="flex flex-col items-center" style={{ gap: 30 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Integrations</p>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>No Matter The Task, Achieve Automation With No-Code with 200+ Integration</p>
            </div>
          </ScrollFadeIn>

          <div className="w-full" style={{ WebkitMaskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)", maskImage: "linear-gradient(to right,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 12.5%,rgba(0,0,0,1) 87.5%,rgba(0,0,0,0) 100%)" }}>
            {/* Row 1 */}
            <div className="marquee-track" style={{ gap: 10, marginBottom: 10 }}>
              {[...integrations, ...integrations].map((item, i) => <IntCard key={`a${i}`} item={item} />)}
            </div>
            {/* Row 2 — reverse */}
            <div className="marquee-track" style={{ gap: 10, animationDirection: "reverse" }}>
              {[...integrations.slice().reverse(), ...integrations.slice().reverse()].map((item, i) => <IntCard key={`b${i}`} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ========== LATEST BLOGS ========== */}
      <section className="blogs-section overflow-hidden" style={{ backgroundColor: "#fff", padding: 80 }}>
        <div className="flex flex-col items-center" style={{ gap: 50 }}>
          <ScrollFadeIn>
            <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Latest Blogs</p>
              <p style={{ fontFamily: F, fontSize: 30, letterSpacing: "-0.66px", lineHeight: "100%", color: "rgb(133,133,133)" }}>Get the Peregrine Suite AI update highlights</p>
            </div>
          </ScrollFadeIn>

          {/* 3-col grid: row-gap 0, col-gap 27 */}
          <div className="w-full blogs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(50px,1fr))", columnGap: 27, rowGap: 0 }}>
            {blogs.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Link href={b.href} className="flex flex-col" style={{ gap: 30, textDecoration: "none" }}>
                  <div className="blog-image-box overflow-hidden" style={{ borderRadius: 12, border: "1px solid rgb(221,225,240)", width: "100%", maxWidth: 467, height: 283 }}>
                    <Image src={b.image} alt={b.title} width={467} height={283} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h6 style={{ fontFamily: F, fontWeight: 400, fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.02em", color: "#000" }}>{b.title}</h6>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: "1.6em", letterSpacing: "-0.02em", color: "rgb(136,136,136)" }}>{b.date}</p>
                  </div>
                  <div style={{ fontFamily: F, fontWeight: 500, fontSize: 14, lineHeight: "16.8px", color: "rgb(59,130,246)" }}>Read more</div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TALK TO OUR EXPERT ========== */}
      <section className="cta-section overflow-hidden" style={{ backgroundColor: "#fafafa", padding: "100px 100px 50px" }}>
        <div className="cta-inner flex flex-row items-start justify-center" style={{ gap: 10 }}>
          {/* Left text */}
          <ScrollFadeIn>
            <div className="flex-1 flex flex-col" style={{ gap: 10 }}>
              <p style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>Talk to Our Expert</p>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 26, letterSpacing: "-0.66px", lineHeight: "120%", color: "rgb(133,133,133)", maxWidth: 500 }}>
                Get personalized guidance and clear solutions for your needs&mdash;talk directly with our expert today.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Cal.com embed */}
          <ScrollFadeIn delay={200}>
            <div id="my-cal-inline-30min" className="cta-cal shrink-0 overflow-hidden bg-white" style={{ width: 793, maxWidth: "100%", height: 458 }} />
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
