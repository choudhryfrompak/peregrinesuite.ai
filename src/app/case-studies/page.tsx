import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Enterprises trust Peregrine AI agents to take on high-stakes workflows—streamlining complexity with speed, intelligence, and no coding required.",
};

const F = '"Mazzard H", sans-serif';

const deployments = [
  {
    title: "Compliance Agent",
    desc: "Meet Peregrine Suite AI—your Telecom site-plan compliance agent.",
    titleColor: "rgb(59, 130, 246)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    href: "/compliance-agent"
  },
  {
    title: "Sales Agent",
    desc: "Meet Peregrine Suite AI—the intelligent agent that transforms the glazier service workflow......",
    titleColor: "rgb(59, 130, 246)",
    borderColor: "rgba(59, 130, 246, 0.4)",
    href: "/sales-agent"
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(234deg, rgba(59,130,246,0.18) -13%, #fff 45%)",
          padding: "80px 24px 60px",
          textAlign: "center",
        }}
      >
        <ScrollFadeIn>
          <h1
            style={{
              fontFamily: F,
              fontWeight: 600,
              fontSize: 60,
              letterSpacing: "-0.3px",
              lineHeight: "84px",
              marginBottom: 24,
              maxWidth: 600,
              margin: "0 auto 24px",
            }}
          >
            <span style={{
              backgroundImage: "linear-gradient(270deg, rgb(72, 164, 253) 0%, rgb(176, 75, 244) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}>Case Studies</span>
          </h1>
          <p
            style={{
              fontFamily: F,
              fontWeight: 400,
              fontSize: 20,
              color: "rgb(74, 74, 74)",
              lineHeight: "30px",
              maxWidth: 800,
              margin: "0 auto 40px",
            }}
          >
            Enterprises trust Peregrine AI agents to take on high-stakes workflows—streamlining complexity with speed, intelligence, and no coding required. Explore deployments where automation continuously learns and improves.
          </p>
          <Link
            href="/contact-us"
            className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgb(59,130,246)",
              borderRadius: 30,
              height: 50,
              padding: "0 28px",
              fontFamily: F,
              fontWeight: 500,
              fontSize: 14,
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <span className="transition-all duration-300">Get Custom Demo</span>
            <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== AI AGENT DEPLOYMENTS ========== */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <ScrollFadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  fontFamily: F,
                  fontWeight: 400,
                  fontSize: 30,
                  letterSpacing: "-0.66px",
                  color: "rgb(133, 133, 133)",
                  lineHeight: "100%",
                  marginBottom: 8,
                }}
              >
                Explore Our
              </p>
              <h2
                style={{
                  fontFamily: F,
                  fontWeight: 500,
                  fontSize: 40,
                  letterSpacing: "-0.66px",
                  color: "rgb(59, 130, 246)",
                  lineHeight: "130%",
                }}
              >
                AI Agent Deployments
              </h2>
            </div>
          </ScrollFadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="deployments-grid"
          >
            {deployments.map((d, idx) => (
              <ScrollFadeIn key={d.title} delay={idx * 100}>
                <Link href={d.href} className="block group h-full" style={{ textDecoration: "none" }}>
                  <div
                    className="transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(59,130,246,0.12)] bg-[#FAFCFF] group-hover:bg-[#EEF5FF] border border-[rgba(59,130,246,0.3)] group-hover:border-[#3B82F6]"
                    style={{
                      borderRadius: 20,
                      padding: "36px 32px",
                      cursor: "pointer",
                      height: "100%",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: F,
                        fontWeight: 600,
                        fontSize: 20,
                        color: d.titleColor,
                        marginBottom: 12,
                        lineHeight: "25.6px",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: F,
                        fontWeight: 400,
                        fontSize: 16,
                        color: "rgb(83,82,91)",
                        lineHeight: "24px",
                      }}
                    >
                      {d.desc}
                    </p>
                  </div>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
