import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "A fleet of specialized AI agents for social, marketing, support, and insights designed to accelerate content deployment and expand brand reach.",
};

const F = '"Mazzard H", sans-serif';

const agents = [
  {
    title: "Triage Agent",
    subtitle: "First Point of Contact & Onboarding AI",
    desc: "The Triage Agent serves as the intelligent front desk for your business. It greets new customers, understands their needs through smart conversation, and directs them to the right service or agent. It collects essential onboarding details, verifies information, and ensures a seamless handover to human staff or downstream systems — all while referencing your internal knowledge base for accurate, compliant responses.",
    image: "/images/agent-triage.png",
    imageAlt: "Triage Agent",
    reverse: false,
  },
  {
    title: "Social Media Agent",
    subtitle: "Automated Engagement & Content AI",
    desc: "The Social Media Agent manages your online presence across platforms by creating, scheduling, and posting engaging content. It responds to customer inquiries, monitors trends, and analyses engagement data to refine strategy. Connected to your knowledge base and brand guidelines, it ensures consistent tone, accurate messaging, and 24/7 customer interaction.",
    image: "/images/agent-social.png",
    imageAlt: "Social Media Agent",
    reverse: true,
  },
  {
    title: "Telehealth Agent",
    subtitle: "Smart Healthcare Assistant",
    desc: "The Telehealth Agent streamlines patient interactions by handling appointment bookings, reminders, and initial triage conversations. It collects key health details, securely manages patient data, and integrates with telehealth platforms or practice management systems. Always referencing medical knowledge bases and compliance rules, it ensures accurate, confidential, and efficient support for both patients and healthcare providers.",
    image: "/images/agent-telehealth.png",
    imageAlt: "Telehealth Agent",
    reverse: false,
  },
  {
    title: "Mortgage Broker Agent",
    subtitle: "Lead Nurturing & Client Assistant",
    desc: "The Mortgage Broker Agent engages new leads from calls, emails, or web forms, qualifies their borrowing needs, and collects essential details like income, assets, and property goals. It guides clients through the pre-approval process, sends reminders for missing documents, and integrates with CRM and loan application systems. By referencing compliance rules and lender guidelines, it ensures accurate, efficient, and personalised support from first enquiry to settlement.",
    image: "/images/agent-mortgage.png",
    imageAlt: "Mortgage Broker Agent",
    reverse: true,
  },
];

export default function AgentsPage() {
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
          <p
            style={{
              fontFamily: F,
              fontSize: 20,
              color: "rgb(74,74,74)",
              marginBottom: 12,
              lineHeight: "30px",
            }}
          >
            Peregrine Suite AI
          </p>
          <h1
            style={{
              fontFamily: F,
              fontWeight: 600,
              fontSize: 60,
              lineHeight: "84px",
              letterSpacing: "-0.3px",
              marginBottom: 24,
              maxWidth: 700,
              margin: "0 auto 24px",
            }}
          >
            <span style={{ 
              backgroundImage: "linear-gradient(270deg, rgb(72, 164, 253) 0%, rgb(176, 75, 244) 100%)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}>Agents that build growth</span>
          </h1>
          <p
            style={{
              fontFamily: F,
              fontSize: 20,
              color: "rgb(74,74,74)",
              lineHeight: "30px",
              maxWidth: 800,
              margin: "0 auto 40px",
            }}
          >
            Harness a fleet of specialized AI agents for social, marketing, support, and insights—built to launch content faster, migrate SEO cleanly, and scale brand presence with measurable impact. Designed for modern teams that need execution, not overhead.
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
              lineHeight: "16.8px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <span className="transition-all duration-300">Build Agents Now</span>
            <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
              <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        </ScrollFadeIn>
      </section>

      {/* ========== AGENTS - Alternating ========== */}
      <section style={{ backgroundColor: "rgb(247,250,255)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
            {agents.map((agent) => (
              <ScrollFadeIn key={agent.title} delay={100}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: agent.reverse ? "row-reverse" : "row",
                    alignItems: "center",
                    gap: 64,
                  }}
                  className="agents-row"
                >
                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: F,
                        fontWeight: 500,
                        fontSize: 24,
                        letterSpacing: "-0.03em",
                        color: "rgb(59,130,246)",
                        marginBottom: 4,
                        lineHeight: "1em",
                      }}
                    >
                      {agent.title}
                    </p>
                    <h2
                      style={{
                        fontFamily: F,
                        fontWeight: 500,
                        fontSize: 24,
                        letterSpacing: "-0.03em",
                        color: "rgb(23,26,31)",
                        marginBottom: 16,
                        lineHeight: "1.3em",
                      }}
                    >
                      {agent.subtitle}
                    </h2>
                    <p
                      style={{
                        fontFamily: F,
                        fontWeight: 400,
                        fontSize: 18,
                        letterSpacing: "-0.01em",
                        color: "rgb(153,153,153)",
                        lineHeight: 1.6,
                      }}
                    >
                      {agent.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Image
                      src={agent.image}
                      alt={agent.imageAlt}
                      width={380}
                      height={380}
                      style={{ width: "100%", maxWidth: 380, height: "auto", objectFit: "contain" }}
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
