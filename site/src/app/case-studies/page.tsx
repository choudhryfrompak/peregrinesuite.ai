import type { Metadata } from "next";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Enterprises trust Peregrine AI agents to take on high-stakes workflows—streamlining complexity with speed, intelligence, and no coding required.",
};

const deployments = [
  {
    title: "Compliance Agent",
    desc: "Meet Peregrine Suite AI—your Telecom site-plan compliance agent.",
    color: "text-primary",
    borderColor: "border-primary/20",
  },
  {
    title: "Sales Agent",
    desc: "Meet Peregrine Suite AI—the intelligent agent that transforms the glazier service workflow......",
    color: "text-purple-600",
    borderColor: "border-purple-200",
  },
];

export default function CaseStudiesPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Enterprises trust Peregrine AI agents to take on high-stakes
              workflows—streamlining complexity with speed, intelligence, and no
              coding required. Explore deployments where automation continuously
              learns and improves.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all btn-glow text-sm"
              >
                Get Custom Demo
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Deployments */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <div className="text-center mb-12">
              <p className="text-gray-400 text-sm mb-2">Explore Our</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">AI Agent Deployments</span>
              </h2>
            </div>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deployments.map((d, idx) => (
              <ScrollFadeIn key={d.title} delay={idx * 100}>
                <div
                  className={`bg-white rounded-2xl p-8 border ${d.borderColor} card-hover cursor-pointer h-full`}
                >
                  <h3 className={`text-lg font-bold ${d.color} mb-3`}>
                    {d.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
