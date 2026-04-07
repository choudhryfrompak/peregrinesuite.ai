"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const F = '"Mazzard H", sans-serif';

const solutionsDropdown = [
  {
    href: "/practice-suite",
    title: "Practice Suite",
    desc: "Bring Automation in Accounting Firm",
    iconBg: "rgb(237,243,255)",
    emoji: "⚡",
  },
  {
    href: "/concierge-agent",
    title: "Conceirge Suite",
    desc: "Smarter VoiceAI for Australian Businesses",
    iconBg: "rgb(237,247,255)",
    emoji: "🎙️",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <nav style={{ position: "sticky", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div className="mx-auto" style={{ width: 1200, maxWidth: "100%", padding: 10, marginTop: 22 }}>
        <div
          className="flex items-center justify-between"
          style={{
            height: 60,
            backgroundColor: "rgb(255,255,255)",
            border: "2px solid rgb(221,225,240)",
            borderRadius: 50,
            padding: "0 10px 0 20px",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" style={{ gap: 10 }}>
            <div className="relative" style={{ width: 53, height: 28 }}>
              <Image src="/images/favicon-light.svg" alt="" fill className="object-cover" priority />
            </div>
            <span style={{ fontFamily: F, fontWeight: 600, fontSize: 15, lineHeight: "24px", letterSpacing: "-0.09px", color: "rgb(74,74,74)" }}>
              Peregrine Suite AI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: 9, padding: 10 }}>
            {/* Home */}
            <Link
              href="/"
              className="flex items-center justify-center hover:text-[#3b82f6] transition-colors"
              style={{ fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%", height: 40, padding: "0 20px", color: "rgb(74,74,74)" }}
            >
              Home
            </Link>

            {/* Solutions with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <Link
                href="/practice-suite"
                className="flex items-center justify-center transition-colors"
                style={{
                  fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%",
                  height: 40, padding: "0 20px",
                  color: showSolutions ? "rgb(59,130,246)" : "rgb(74,74,74)",
                }}
              >
                Solutions
              </Link>

              {/* Dropdown */}
              {showSolutions && (
                <div
                  className="absolute"
                  style={{ top: "100%", left: -40, paddingTop: 10 }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid rgb(221,225,240)",
                      borderRadius: 20,
                      padding: 20,
                      width: 340,
                      boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex flex-col" style={{ gap: 24 }}>
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center hover:opacity-80 transition-opacity"
                          style={{ gap: 16, textDecoration: "none" }}
                        >
                          <div
                            className="shrink-0 flex items-center justify-center"
                            style={{ width: 48, height: 48, borderRadius: 14, backgroundColor: item.iconBg }}
                          >
                            <span style={{ fontSize: 22 }}>{item.emoji}</span>
                          </div>
                          <div>
                            <p style={{ fontFamily: F, fontWeight: 500, fontSize: 17, lineHeight: "22px", color: "rgb(23,26,31)" }}>
                              {item.title}
                            </p>
                            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: "rgb(133,133,133)", marginTop: 3 }}>
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            {[
              { href: "/agents", label: "Agents" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/blog", label: "Blogs" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-center hover:text-[#3b82f6] transition-colors"
                style={{ fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%", height: 40, padding: "0 20px", color: "rgb(74,74,74)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center transition-all"
              style={{
                backgroundColor: "rgb(59,130,246)", borderRadius: 30, height: 50, padding: "12px 24px",
                fontFamily: F, fontWeight: 500, fontSize: 14, letterSpacing: "-0.04em", lineHeight: "120%", color: "#fff",
              }}
            >
              Get Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col items-center justify-center"
            style={{ width: 44, height: 44, gap: 10, backgroundColor: "rgb(235,235,242)", borderRadius: 11, border: "1px solid rgb(221,225,240)" }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 20, height: 2, backgroundColor: "rgb(74,74,74)" }} />
            <div style={{ width: 20, height: 2, backgroundColor: "rgb(74,74,74)" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-white overflow-hidden" style={{ borderRadius: 12, border: "1px solid rgb(221,225,240)", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
            <div style={{ padding: 20 }}>
              <div className="flex flex-col" style={{ gap: 20 }}>
                <Link href="/" style={{ fontFamily: F, color: "rgb(74,74,74)", fontSize: 16 }} onClick={() => setMobileOpen(false)}>Home</Link>
                <div>
                  <p style={{ fontFamily: F, color: "rgb(74,74,74)", fontSize: 16, marginBottom: 10 }}>Solutions</p>
                  <div className="flex flex-col" style={{ gap: 12, paddingLeft: 16 }}>
                    {solutionsDropdown.map((s) => (
                      <Link key={s.href} href={s.href} style={{ fontFamily: F, color: "rgb(59,130,246)", fontSize: 14 }} onClick={() => setMobileOpen(false)}>
                        {s.emoji} {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/agents" style={{ fontFamily: F, color: "rgb(74,74,74)", fontSize: 16 }} onClick={() => setMobileOpen(false)}>Agents</Link>
                <Link href="/case-studies" style={{ fontFamily: F, color: "rgb(74,74,74)", fontSize: 16 }} onClick={() => setMobileOpen(false)}>Case Studies</Link>
                <Link href="/blog" style={{ fontFamily: F, color: "rgb(74,74,74)", fontSize: 16 }} onClick={() => setMobileOpen(false)}>Blogs</Link>
              </div>
              <Link
                href="/contact-us"
                className="block text-center mt-5"
                style={{ backgroundColor: "rgb(59,130,246)", borderRadius: 30, height: 50, lineHeight: "50px", fontFamily: F, fontWeight: 500, fontSize: 14, color: "#fff" }}
                onClick={() => setMobileOpen(false)}
              >
                Get Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
