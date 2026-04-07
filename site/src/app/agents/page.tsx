import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "A fleet of specialized AI agents for social, marketing, support, and insights designed to accelerate content deployment and expand brand reach.",
};

const agents = [
  {
    title: "Triage Agent",
    subtitle: "First Point of Contact & Onboarding AI",
    desc: "The Triage Agent serves as the intelligent front desk for your business. It greets new customers, understands their needs through smart conversation, and directs them to the right service or agent. It collects essential onboarding details, verifies information, and ensures a seamless handover to human staff or downstream systems — all while referencing your internal knowledge base for accurate, compliant responses.",
    image: "/images/agent-triage.png",
    imageAlt: "Triage Agent - Email and chat illustration",
    reverse: false,
  },
  {
    title: "Social Media Agent",
    subtitle: "Automated Engagement & Content AI",
    desc: "The Social Media Agent manages your online presence across platforms by creating, scheduling, and posting engaging content. It responds to customer inquiries, monitors trends, and analyses engagement data to refine strategy. Connected to your knowledge base and brand guidelines, it ensures consistent tone, accurate messaging, and 24/7 customer interaction.",
    image: "/images/agent-social.png",
    imageAlt: "Social Media Agent - Social platforms illustration",
    reverse: true,
  },
  {
    title: "Telehealth Agent",
    subtitle: "Smart Healthcare Assistant",
    desc: "The Telehealth Agent streamlines patient interactions by handling appointment bookings, reminders, and initial triage conversations. It collects key health details, securely manages patient data, and integrates with telehealth platforms or practice management systems. Always referencing medical knowledge bases and compliance rules, it ensures accurate, confidential, and efficient support for both patients and healthcare providers.",
    image: "/images/agent-telehealth.png",
    imageAlt: "Telehealth Agent - Healthcare illustration",
    reverse: false,
  },
  {
    title: "Mortgage Broker Agent",
    subtitle: "Lead Nurturing & Client Assistant",
    desc: "The Mortgage Broker Agent engages new leads from calls, emails, or web forms, qualifies their borrowing needs, and collects essential details like income, assets, and property goals. It guides clients through the pre-approval process, sends reminders for missing documents, and integrates with CRM and loan application systems. By referencing compliance rules and lender guidelines, it ensures accurate, efficient, and personalised support from first enquiry to settlement.",
    image: "/images/agent-mortgage.png",
    imageAlt: "Mortgage Broker Agent - Finance illustration",
    reverse: true,
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-8 md:pt-24 md:pb-12">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(234deg, #3b82f633 -13%, #fff 40%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollFadeIn>
            <p className="text-gray-500 text-sm mb-2">Peregrine Suite AI</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="gradient-text">Agents that build growth</span>
            </h1>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Harness a fleet of specialized AI agents for social, marketing,
              support, and insights—built to launch content faster, migrate SEO
              cleanly, and scale brand presence with measurable impact. Designed
              for modern teams that need execution, not overhead.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-glow text-sm"
              >
                Build Agents Now
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Decorative wave divider */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full h-12 text-[#f7faff]">
          <path
            fill="currentColor"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Agents - Alternating Layout */}
      <section className="bg-[#f7faff] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 md:space-y-32">
            {agents.map((agent, idx) => (
              <ScrollFadeIn key={agent.title} delay={100}>
                <div
                  className={`flex flex-col ${
                    agent.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-12 md:gap-16`}
                >
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-primary font-semibold text-sm mb-1">
                      {agent.title}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      {agent.subtitle}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {agent.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="flex-1 flex justify-center">
                    <Image
                      src={agent.image}
                      alt={agent.imageAlt}
                      width={400}
                      height={400}
                      className="w-full max-w-sm h-auto"
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
