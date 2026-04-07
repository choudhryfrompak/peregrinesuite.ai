import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Concierge Agent",
  description:
    "Advanced Concierge agent that speaks, thinks, books and sells like your best performing humans 24/7 consistently.",
};

const features = [
  {
    title: "More Than Answering Calls",
    desc: "Concierge agent is your 24/7 receptionist, appointment setter, support agent, relationship manager, admin assistant, handling both inbound and outbound, tailored to whatever your business needs.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Integrated Booking, 24/7",
    desc: "Concierge agent books and syncs appointments 24/7, directly into the tools you already use - from industry software like ServiceM8 and Cliniko to major CRMs like HubSpot, Zoho CRM and many more.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Your Growth Command Centre",
    desc: "Our dashboard provides a transparent, real-time view of your call operations and sales pipeline to drive smarter growth.",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    title: "Your Strategic AI Partner",
    desc: "AI isn't plug-and-play; we are the dedicated team that ensures it fits perfectly with your business processes to guarantee a tangible ROI.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

const howItWorks = [
  {
    title: "Call Detection & Intent Recognition",
    desc: "The AI voice agent answers incoming calls, greets the caller, and uses NLP to detect the caller's intent — whether it's an order, booking, enquiry, or support request.",
    iconBg: "bg-blue-50",
  },
  {
    title: "Information Collection & Dialogue Flow",
    desc: "The agent engages the caller using dynamic, human-like dialogue to collect all necessary details (e.g. order items, appointment time, service address), adjusting based on available knowledge and past interactions.",
    iconBg: "bg-blue-50",
  },
  {
    title: "System Integration & Action Execution",
    desc: "The agent processes the captured data and integrates seamlessly with backend systems like POS, calendars, CRMs, and ticketing tools — executing tasks in real-time with zero manual effort.",
    iconBg: "bg-blue-50",
  },
  {
    title: "Confirmation & Notification",
    desc: "It confirms the action with the caller and sends automated updates via SMS, email, dashboard notifications, or direct-to-printer commands to notify staff and log the interaction.",
    iconBg: "bg-blue-50",
  },
];

const stats = [
  {
    value: "100%",
    label: "Calls Answered Instantly",
    desc: "Concierge agent is your always-on receptionist, immediate lead qualifier, instant support agent, and on-demand appointment setter - ensuring no customer ever waits.",
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
  { name: "Medical" },
  { name: "Plumber" },
  { name: "Restaurant" },
];

export default function ConciergeAgentPage() {
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
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              AMPLIFYING HUMAN CAPABILITY THROUGH AI
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Smarter{" "}
              <span className="gradient-text">Concierge Agent</span>{" "}
              for Australian Businesses
            </h1>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Advanced Concierge agent that speak, think, book and sell like
              your best performing humans 24/7 consistently.
            </p>

            {/* Emily avatar */}
            <div className="mt-10 flex flex-col items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/expert-avatar.png"
                  alt="Emily - Demo Agent"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-xs text-gray-400 max-w-sm">
                Note: Emily is a demo agent only. In production, she&apos;ll be
                tailored to sound and speak exactly how your business needs.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-glow text-sm"
              >
                Book Demo
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((f, idx) => (
              <ScrollFadeIn key={f.title} delay={idx * 80}>
                <div className="text-center">
                  <div
                    className={`w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg
                      className={`w-6 h-6 ${f.iconColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-[#f7faff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              How Concierge Agent Works
            </h2>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <ScrollFadeIn key={step.title} delay={idx * 80}>
                <div className="text-center">
                  <div
                    className={`w-14 h-14 ${step.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(287deg, rgba(176, 75, 244, 0.84) 0%, rgb(59, 130, 246) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, idx) => (
              <ScrollFadeIn key={stat.value} delay={idx * 100}>
                <div className="text-center text-white">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text-light">
                    {stat.value}
                  </div>
                  <h3 className="text-sm font-bold mb-2">{stat.label}</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="text-gray-400 text-sm mb-2">Concierge agent</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-500">
                solution for every industry
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <ScrollFadeIn key={ind.name} delay={idx * 100}>
                <div className="text-center">
                  <h3 className="font-bold text-base mb-4">{ind.name}</h3>
                  <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
