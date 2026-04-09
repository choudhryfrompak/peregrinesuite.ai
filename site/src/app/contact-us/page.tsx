import ScrollFadeIn from "@/components/ScrollFadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to our expert — get personalized guidance and clear solutions for your needs.",
};

const F = '"Mazzard H", sans-serif';

export default function ContactUsPage() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "60px 0", minHeight: "80vh" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(234deg, rgba(59,130,246,0.2) -13%, #fff 40%)" }}
      />
      <div className="relative px-4 md:px-10 lg:px-[60px]" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex flex-col lg:flex-row items-start" style={{ gap: 10 }}>
          {/* Left text */}
          <ScrollFadeIn>
            <div className="flex-1 flex flex-col" style={{ gap: 10, paddingTop: 40 }}>
              <h1 style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>
                Talk to Our Expert
              </h1>
              <p style={{ fontFamily: F, fontWeight: 400, fontSize: 18, lineHeight: "150%", color: "rgb(74,74,74)", maxWidth: 400 }}>
                Get personalized guidance and clear solutions for your
                needs&mdash;talk directly with our expert today.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Cal.com embed */}
          <ScrollFadeIn delay={200}>
            <iframe
              src="https://cal.com/peregrine-suite-ai/30min?embed=true&layout=month_view&theme=light"
              className="w-full lg:w-[650px] bg-white rounded-lg"
              style={{ maxWidth: "100%", minHeight: 500, height: 700, border: "none" }}
              allow="payment"
            />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
