import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Practice Suite",
  description:
    "Transforming the way accounting firms operate by embedding AI-powered automation into everyday workflows.",
};

const F = '"Mazzard H", sans-serif';

const agentSections = [
  {
    title: "Payroll agent",
    icon: "/images/framer/j27Vc9VmnGmZjbWioM47WdyNK2M.png",
    flow: "/images/framer/UgrITIUrwMaGYKLde4gOSeOs.png",
    bg: "#f2f7fa",
    bullets: [
      "Automate payroll runs, superannuation, and STP lodgements.",
      "Ensure compliance with ATO standards.",
      "Reduce manual errors and save hours of administrative work.",
    ],
    steps: [
      { num: "01", icon: "/images/framer/vfIvVjq2OTjnp5qB4KjQeJSSUI.svg", label: "Multiple Channels" },
      { num: "02", icon: "/images/framer/JJdkpkYQkxlFCR5EWNdMgLT9cE.svg", label: "Timesheet" },
      { num: "03", icon: "/images/framer/sYgRBJTKGJ9QM2GfNYWdjT3wwQQ.svg", label: "Payrun" },
      { num: "04", icon: "/images/framer/64I1lbPeWZlClmOxEcxUyu1TyM.svg", label: "Email Payslips" },
    ],
  },
  {
    title: "Bookkeeping Agents",
    icon: "/images/framer/ODWTpjc06KmdA151k8CH7Ck8AU.png",
    flow: "/images/framer/bMWFIH8sF0Z10QTTKJ88QgA0sU.png",
    bg: "#e4f4fb",
    bullets: [
      "Handle day-to-day data entry, reconciliation, and bank feeds.",
      "Automate supplier bill processing and expense categorisation.",
      "Generate real-time financial snapshots for clients.",
    ],
    steps: [],
  },
  {
    title: "ASIC Compliance Agents",
    icon: "/images/framer/c36wpepPyznIfUGnysWHHkqp4A.png",
    flow: "/images/framer/rNkxVyF8cccrkyFGpJr8IJ3020c.png",
    bg: "#fcfce8",
    bullets: [
      "Automate company statement reviews and reminders.",
      "Manage annual solvency resolutions, company changes, and registrations.",
      "Maintain an accurate ASIC register with minimal manual effort.",
    ],
    steps: [],
  },
  {
    title: "Tax Return Agents",
    icon: "/images/framer/rHfGmjjcUnccMnqCwmtU1QnFIC8.png",
    flow: "/images/framer/k7BaIoU9O2f5C4mhhZxsXo62Qyk.png",
    bg: "#f0f6f9",
    bullets: [
      "Automate data entry from tax forms and ATO portals.",
      "Prefill tax returns with validated client information.",
      "Free up accountants' time to focus on complex tax planning.",
    ],
    steps: [],
  },
];

const benefits = [
  {
    title: "100% Instant Responses",
    desc: "Position your firm at the forefront of accounting innovation with cutting-edge AI technology.",
  },
  {
    title: "Competitive Edge",
    desc: "Reduce manual workloads and operational costs while improving overall firm productivity.",
  },
  {
    title: "Reduce Overhead",
    desc: "AI calling agents ensure clients are always attended to, improving satisfaction and retention.",
  },
];

export default function PracticeSuitePage() {
  return (
    <>
      <style>{`
        .circular-text-anim {
          animation: spin 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .benefit-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.05);
          border-radius: 12px;
          padding: 20px 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .benefit-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
        }
      `}</style>
      {/* ========== HERO ========== */}
      <section
        style={{
          background: "linear-gradient(180deg, #fff 0%, rgba(200,225,255,0.4) 100%)",
          padding: "70px 24px 70px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <ScrollFadeIn>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
            {/* Lightning bolt with circular rotating text */}
            <div style={{ position: "relative", width: 220, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Rotating circular text */}
              <svg className="circular-text-anim" viewBox="0 0 220 220" style={{ position: "absolute", width: "100%", height: "100%" }}>
                <defs>
                  <path id="heroCirclePath" d="M 110,110 m -90,0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0" />
                </defs>
                <text style={{ fontFamily: F, fontSize: 15, fontWeight: 500, fill: "rgba(0,0,0,0.25)", letterSpacing: "5px" }}>
                  <textPath href="#heroCirclePath" startOffset="0%">
                    Practice Suite- Bring Automation in Accounting Firm-
                  </textPath>
                </text>
              </svg>
              {/* Center lightning bolt */}
              <svg width="55" height="68" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#heroBoltGrad)" stroke="url(#heroBoltGrad)" strokeWidth="0.5" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="heroBoltGrad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgb(139,92,246)" />
                    <stop offset="100%" stopColor="rgb(59,130,246)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h1
            style={{
              fontFamily: F,
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            <span className="gradient-text">Practice Suite</span>
          </h1>

          <p
            style={{
              fontFamily: F,
              fontSize: 16,
              color: "rgb(83,82,91)",
              lineHeight: 1.7,
              maxWidth: 680,
              margin: "0 auto 36px",
            }}
          >
            AI is transforming the way accounting firms operate. By embedding AI-powered automation into everyday workflows. Our flagship product for accountants, Practice Suite is designed to reduce manual workloads, improve efficiency, and enhance client experiences through specialized AI agents tailored for the accounting industry.
          </p>

          <Link
            href="/contact-us"
            className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgb(59,130,246)",
              borderRadius: 30,
              height: 52,
              padding: "0 34px",
              fontFamily: F,
              fontWeight: 600,
              fontSize: 15,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <span className="transition-all duration-300">Book A Demo</span>
            <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== AGENT SECTIONS ========== */}
      {agentSections.map((agent, idx) => (
        <section key={agent.title} style={{ backgroundColor: agent.bg, padding: "80px 40px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <ScrollFadeIn>
              {/* Top row: Text Left, Graphic Right */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 40,
                  marginBottom: agent.steps.length > 0 ? 40 : 20,
                }}
                className="ps-row"
              >
                <div style={{ flex: 1, maxWidth: 500 }}>
                  <h2
                    style={{
                      fontFamily: F,
                      fontWeight: 600,
                      fontSize: 34,
                      color: "rgb(68, 81, 91)",
                      marginBottom: 16,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    {agent.title}
                  </h2>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 10, paddingLeft: 22, margin: 0, color: "rgb(68, 81, 91)", listStyleType: "disc" }}>
                    {agent.bullets.map((b, i) => (
                      <li key={i} style={{ fontFamily: F, fontSize: 15, lineHeight: 1.5, color: "rgb(68, 81, 91)" }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 3D graphic */}
                <div style={{ flexShrink: 0 }}>
                  <Image
                    src={agent.icon}
                    alt={agent.title}
                    width={280}
                    height={280}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Steps (Payroll only) */}
              {agent.steps.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 30,
                    marginBottom: 50,
                    maxWidth: 800,
                    margin: "0 auto 50px",
                  }}
                  className="ps-steps-grid"
                >
                  {agent.steps.map((step, i) => (
                    <div key={step.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: 140 }}>
                      <div style={{ fontFamily: F, fontWeight: 800, fontSize: 20, color: "#7462fa", marginBottom: 12 }}>{step.num}</div>
                      <div style={{ width: 72, height: 72, marginBottom: 14, position: "relative" }}>
                        {i === 0 && <Image src="/images/framer/iPL6SejXrAXbXSa0X3eDsgxI.svg" alt="" fill style={{ objectFit: "contain" }} />}
                        {i === 1 && <Image src="/images/framer/r8mawTTGWojAsXwAKJFyPiSrMg.svg" alt="" fill style={{ objectFit: "contain" }} />}
                        {i === 2 && <Image src="/images/framer/UWPdP8AjuMRvqxAOw26lSeaxsk.svg" alt="" fill style={{ objectFit: "contain" }} />}
                        {i === 3 && <Image src="/images/framer/hP86Y8mtRA8t5vkv14woA3dG20.svg" alt="" fill style={{ objectFit: "contain" }} />}
                      </div>
                      <div style={{ fontFamily: F, fontWeight: 600, fontSize: 13, color: "#333" }}>{step.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Flow mapping */}
              <div style={{ textAlign: "center", width: "100%", marginTop: agent.steps.length > 0 ? 20 : 40 }}>
                <Image
                  src={agent.flow}
                  alt={`${agent.title} workflow`}
                  width={1400}
                  height={800}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </ScrollFadeIn>
          </div>
        </section>
      ))}

      {/* ========== BENEFITS ========== */}
      <section style={{ background: "linear-gradient(90deg, #fdf4ff 0%, #e0f2fe 100%)", padding: "80px 40px", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <style>{`
            .marquee-vertical {
              display: flex;
              flex-direction: column;
              gap: 20px;
              animation: scrollUp 20s linear infinite;
            }
            .marquee-vertical-container:hover .marquee-vertical {
              animation-play-state: paused;
            }
            @keyframes scrollUp {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
          `}</style>
          <ScrollFadeIn>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 60,
                alignItems: "center",
              }}
              className="ps-row"
            >
              <div style={{ flex: 1, paddingRight: 40 }}>
                <p style={{ display: "flex", alignItems: "center", fontFamily: F, fontWeight: 500, fontSize: 13, color: "rgb(29, 31, 19)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 20 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20" style={{ fill: "rgb(59, 130, 246)", marginRight: 8, flexShrink: 0 }}>
                    <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
                  </svg>
                  KEY TAKEAWAYS
                </p>
                <h2 style={{ fontFamily: F, fontWeight: 600, fontSize: 40, color: "rgb(59, 130, 246)", marginBottom: 20, letterSpacing: "-0.5px", lineHeight: "1.1" }}>
                  Benefits to Your Firm
                </h2>
                <p style={{ fontFamily: F, fontSize: 16, color: "rgb(74, 74, 74)", lineHeight: 1.5, marginBottom: 40 }}>
                  Save effortlessly with smart automation that maximizes rewards on every purchase, tailored to your needs.
                </p>
                <Link
                  href="/contact-us"
                  className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgb(59,130,246)",
                    borderRadius: 30,
                    height: 48,
                    padding: "0 30px",
                    fontFamily: F,
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  <span className="transition-all duration-300">Get Started!</span>
                  <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div style={{ flex: 1.2, height: 480, overflow: "hidden", maskImage: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)", WebkitMaskImage: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)" }} className="marquee-vertical-container">
                <div className="marquee-vertical" style={{ paddingTop: 20 }}>
                  {[
                    {
                      t: "Competitive Edge",
                      d: "Adopt cutting-edge AI technology to differentiate your firm in the market.",
                      p: "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
                    },
                    {
                      t: "Efficiency & Cost Savings",
                      d: "Free up staff time by automating manual data entry and reconciliation.",
                      p: "M19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                    },
                    {
                      t: "Improved Client Service",
                      d: "AI calling agents ensure clients are always attended to, even outside of office hours.",
                      p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12l-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59zM4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59zm10.34 4.59l-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58z"
                    },
                    {
                      t: "Scalability",
                      d: "Easily onboard new clients and employees without increasing admin burden.",
                      p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    },
                    {
                      t: "Accuracy & Compliance",
                      d: "Reduce errors and meet regulatory requirements with built-in compliance logic.",
                      p: "M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 2H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z"
                    },
                    {
                      t: "Competitive Edge",
                      d: "Adopt cutting-edge AI technology to differentiate your firm in the market.",
                      p: "M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
                    },
                    {
                      t: "Efficiency & Cost Savings",
                      d: "Free up staff time by automating manual data entry and reconciliation.",
                      p: "M19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15.08-.18.12-.37.12-.58 0-.83-.67-1.5-1.5-1.5-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59 2.82-.94V7.5h-2.17zM13 9H8V7h5v2zm3 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                    },
                    {
                      t: "Improved Client Service",
                      d: "AI calling agents ensure clients are always attended to, even outside of office hours.",
                      p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.46 7.12l-2.78 1.15c-.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78c2.1.8 3.77 2.47 4.58 4.57zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zM9.13 4.54l1.17 2.78c-1.38.5-2.47 1.59-2.98 2.97L4.54 9.13c.81-2.11 2.48-3.78 4.59-4.59zM4.54 14.87l2.78-1.15c.51 1.38 1.59 2.46 2.97 2.96l-1.17 2.78c-2.1-.81-3.77-2.48-4.58-4.59zm10.34 4.59l-1.15-2.78c1.37-.51 2.45-1.59 2.95-2.97l2.78 1.17c-.81 2.1-2.48 3.77-4.58 4.58z"
                    },
                    {
                      t: "Scalability",
                      d: "Easily onboard new clients and employees without increasing admin burden.",
                      p: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    },
                    {
                      t: "Accuracy & Compliance",
                      d: "Reduce errors and meet regulatory requirements with built-in compliance logic.",
                      p: "M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 2H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z"
                    },
                  ].map((b, i) => (
                    <div 
                      key={i} 
                      style={{
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "space-between",
                        padding: "36px 40px", 
                        background: "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgb(255, 255, 255) 100%)",
                        backdropFilter: "blur(5px)",
                        border: "1px solid rgb(234, 240, 221)",
                        borderRadius: 16,
                        height: 136,
                        flexShrink: 0,
                        width: "100%"
                      }}
                    >
                      <div style={{ flex: 1, paddingRight: 20 }}>
                        <h3 style={{ fontFamily: F, fontWeight: 600, fontSize: 18, color: "rgb(74, 74, 74)", marginBottom: 8 }}>{b.t}</h3>
                        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: 14, color: "rgb(74, 74, 74)", lineHeight: 1.5, margin: 0 }}>
                          {b.d}
                        </p>
                      </div>
                      <div style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                        <svg viewBox="0 0 24 24" style={{ width: "100%", height: "100%", fill: "rgb(59, 130, 246)" }}>
                          <path d={b.p} />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section style={{ backgroundColor: "#fff", padding: "100px 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollFadeIn>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: "1px solid rgba(0,0,0,0.06)", borderRadius: 24, padding: "50px 60px", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }} className="ps-row">
              <div style={{ flex: 1, maxWidth: 450 }}>
                <h2 style={{ fontFamily: F, fontWeight: 700, fontSize: 32, color: "rgb(59,130,246)", marginBottom: 16, letterSpacing: "-0.5px" }}>
                  Automate Every Aspect of Work Life
                </h2>
                <p style={{ fontFamily: F, fontSize: 16, color: "rgb(83,82,91)", lineHeight: 1.6, marginBottom: 30 }}>
                  Achieve your goals as fast as your thoughts, simplifying tasks into quick, automated steps with AI efficiency
                </p>
                <Link
                  href="#"
                  className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgb(0, 132, 255)",
                    borderRadius: 30,
                    height: 48,
                    padding: "0 30px",
                    fontFamily: F,
                    fontWeight: 600,
                    fontSize: 14,
                    color: "#fff",
                    textDecoration: "none",
                    border: "none",
                  }}
                >
                  <span className="transition-all duration-300">Why Wait? Try it today!</span>
                  <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                    <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Lightning bolt with circular rotating text */}
              <div style={{ position: "relative", width: 280, height: 280, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg className="circular-text-anim" viewBox="0 0 280 280" style={{ position: "absolute", width: "100%", height: "100%" }}>
                  <defs>
                    <path id="ctaCirclePath" d="M 140,140 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0" />
                  </defs>
                  <text style={{ fontFamily: F, fontSize: 18, fontWeight: 500, fill: "rgba(0,0,0,0.25)", letterSpacing: "6px" }}>
                    <textPath href="#ctaCirclePath" startOffset="0%">
                      Practice Suite- Bring Automation in Accounting Firm-
                    </textPath>
                  </text>
                </svg>
                <svg width="65" height="80" viewBox="0 0 24 24" fill="none" style={{ position: "relative", zIndex: 1 }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="url(#ctaBoltGrad)" stroke="url(#ctaBoltGrad)" strokeWidth="0.5" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="ctaBoltGrad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="rgb(139,92,246)" />
                      <stop offset="100%" stopColor="rgb(59,130,246)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
