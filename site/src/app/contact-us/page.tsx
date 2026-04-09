"use client";

import { useEffect, useRef } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const F = '"Mazzard H", sans-serif';

function initCal(namespace: string, selector: string) {
  const w = window as any;
  if (!w.Cal) {
    w.Cal = function (...args: any[]) {
      (w.Cal.q = w.Cal.q || []).push(args);
    };
    w.Cal.ns = {};
    w.Cal.loaded = false;
  }
  if (!w.Cal.loaded) {
    const s = document.createElement("script");
    s.src = "https://app.cal.com/embed/embed.js";
    s.async = true;
    document.head.appendChild(s);
    w.Cal.loaded = true;
  }

  // Wait for script to load then init
  const tryInit = () => {
    if (w.Cal && typeof w.Cal === "function") {
      w.Cal("init", namespace, { origin: "https://app.cal.com" });
      setTimeout(() => {
        if (w.Cal.ns && w.Cal.ns[namespace]) {
          w.Cal.ns[namespace]("inline", {
            elementOrSelector: selector,
            calLink: "peregrine-suite-ai/30min",
            layout: "month_view",
          });
          w.Cal.ns[namespace]("ui", {
            theme: "light",
            hideEventTypeDetails: false,
            layout: "month_view",
          });
        }
      }, 100);
    } else {
      setTimeout(tryInit, 200);
    }
  };
  tryInit();
}

export default function ContactUsPage() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      initCal("contact-page", "#cal-contact-page");
    }
  }, []);

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
            <div
              id="cal-contact-page"
              className="w-full lg:w-[650px] overflow-auto bg-white rounded-lg border border-gray-200"
              style={{ maxWidth: "100%", minHeight: 500, height: 700 }}
            />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
