import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Practice Suite",
  description:
    "Transforming the way accounting firms operate by embedding AI-powered automation into everyday workflows.",
};

const agentSections = [
  {
    title: "Payroll agent",
    icon: "/images/ps-payroll-icon.png",
    flow: "/images/ps-payroll-flow.png",
    bullets: [
      "Automate payroll runs, superannuation, and STP lodgements.",
      "Ensure compliance with ATO standards.",
      "Reduce manual errors and save hours of administrative work.",
    ],
    steps: [
      { num: "01", label: "Multiple Channels" },
      { num: "02", label: "Timesheet" },
      { num: "03", label: "Payrun" },
      { num: "04", label: "Email Payslips" },
    ],
  },
  {
    title: "Bookkeeping Agents",
    icon: "/images/ps-bookkeeping-icon.png",
    flow: "/images/ps-bookkeeping-flow.png",
    bullets: [
      "Handle day-to-day data entry, reconciliation, and bank feeds.",
      "Automate supplier bill processing and expense categorisation.",
      "Generate real-time financial snapshots for clients.",
    ],
    steps: [],
  },
  {
    title: "ASIC Compliance Agents",
    icon: "/images/ps-asic-icon.png",
    flow: "/images/ps-asic-flow.png",
    bullets: [
      "Automate company statement reviews and reminders.",
      "Manage annual solvency resolutions, company changes, and registrations.",
      "Maintain an accurate ASIC register with minimal manual effort.",
    ],
    steps: [],
  },
  {
    title: "Tax Return Agents",
    icon: "/images/ps-tax-icon.png",
    flow: "/images/ps-tax-flow.png",
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
    title: "Competitive Edge",
    desc: "Position your firm at the forefront of accounting innovation with cutting-edge AI technology.",
  },
  {
    title: "Efficiency & Cost Savings",
    desc: "Reduce manual workloads and operational costs while improving overall firm productivity.",
  },
  {
    title: "Improved Client Service",
    desc: "AI calling agents ensure clients are always attended to, improving satisfaction and retention.",
  },
  {
    title: "Scalability",
    desc: "Easily onboard new clients and employees without increasing admin burden.",
  },
  {
    title: "Accuracy & Compliance",
    desc: "Reduce errors and meet regulatory requirements effortlessly with automated checks.",
  },
];

export default function PracticeSuitePage() {
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
            {/* Lightning icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#f2e6ff] flex items-center justify-center">
                <Image
                  src="/images/ps-lightning.svg"
                  alt=""
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              <span className="gradient-text">Practice Suite</span>
            </h1>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We are transforming the way accounting firms operate by embedding
              AI-powered automation into everyday workflows. Our flagship
              product for accountants, Practice Suite is designed to reduce
              manual workloads, improve efficiency, and enhance client
              experiences through specialized AI agents tailored for the
              accounting industry.
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

      {/* Agent Sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {agentSections.map((agent, idx) => (
            <ScrollFadeIn key={agent.title}>
              <div className="space-y-8">
                {/* Title row */}
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {agent.title}
                    </h2>
                    <ul className="space-y-2">
                      {agent.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-gray-400 mt-0.5">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={agent.icon}
                      alt={agent.title}
                      width={200}
                      height={200}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>

                {/* Steps row (payroll only) */}
                {agent.steps.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {agent.steps.map((step) => (
                      <div
                        key={step.num}
                        className="bg-[#f7faff] rounded-xl p-4 text-center border border-gray-100"
                      >
                        <div className="text-primary font-bold text-lg mb-1">
                          {step.num}
                        </div>
                        <div className="text-xs text-gray-600">
                          {step.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Flow diagram */}
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <Image
                    src={agent.flow}
                    alt={`${agent.title} workflow`}
                    width={1314}
                    height={432}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-[#f7faff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                KEY TAKEAWAYS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Benefits to Your Firm
              </h2>
              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-2.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-glow text-sm"
                >
                  Get Started!
                </Link>
              </div>
            </div>
          </ScrollFadeIn>

          <div className="space-y-4">
            {benefits.map((b, idx) => (
              <ScrollFadeIn key={b.title} delay={idx * 60}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover">
                  <h3 className="font-bold text-base mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #f7faff 0%, #e8f0fe 50%, #f2e6ff 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 md:p-12 text-center border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Automate Every Aspect of Work Life
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto mb-8">
                Achieve your goals as fast as your thoughts, simplifying tasks
                into quick, automated steps with AI efficiency.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-glow text-sm"
              >
                Why Wait? Try it today!
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
