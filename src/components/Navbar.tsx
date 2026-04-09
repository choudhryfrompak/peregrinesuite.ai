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
    icon: (
      <Image 
        src="/images/practice-icon.svg" 
        alt="" 
        width={44} 
        height={44} 
      />
    ),
  },
  {
    href: "/concierge-agent",
    title: "Conceirge Suite",
    desc: "Smarter VoiceAI for Australian Businesses",
    icon: (
      <Image 
        src="/images/concierge-icon.svg" 
        alt="" 
        width={44} 
        height={44} 
      />
    ),
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <nav style={{ position: "sticky", top: 20, left: 0, right: 0, zIndex: 50, padding: "0 10px", marginTop: 20, marginBottom: 10 }}>
      <div className="mx-auto" style={{ width: 1200, maxWidth: "100%" }}>
        <div
          className="flex items-center justify-between"
          style={{
            height: 64,
            backgroundColor: "rgb(255,255,255)",
            border: "2px solid rgb(221,225,240)",
            borderRadius: 50,
            padding: "0 8px 0 24px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
            backdropFilter: "blur(10px)"
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
          <div className="hidden md:flex items-center" style={{ gap: 8, padding: "0 10px" }}>
            {/* Home */}
            <Link
              href="/"
              className="flex items-center justify-center text-[rgb(74,74,74)] hover:text-[rgb(0,153,255)] transition-colors duration-300"
              style={{ fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%", height: 40, padding: "0 20px", textDecoration: "none" }}
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
                href="/"
                className={`flex items-center justify-center transition-colors duration-300 hover:text-[rgb(0,153,255)] ${showSolutions ? "text-[rgb(0,153,255)]" : "text-[rgb(74,74,74)]"}`}
                style={{
                  fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%",
                  height: 40, padding: "0 20px",
                  textDecoration: "none",
                }}
              >
                Solutions
              </Link>

              {/* Dropdown */}
              {showSolutions && (
                <div
                  className="absolute"
                  style={{ top: "100%",  transform: "translateX(-10%)", paddingTop: 24 }}
                >
                  <div
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid rgb(0,153,255)",
                      borderRadius: 8,
                      padding: 15,
                      width: 365, maxWidth: "90vw",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex flex-col" style={{ gap: 16 }}>
                      {solutionsDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center transition-transform duration-300 hover:-translate-y-1"
                          style={{ gap: 16, textDecoration: "none" }}
                        >
                          <div
                            className="shrink-0 flex items-center justify-center"
                            style={{ width: 44, height: 44, }}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <p style={{ fontFamily: F, fontWeight: 500, fontSize: 16, lineHeight: "22px", color: "rgb(74,74,74)" }}>
                              {item.title}
                            </p>
                            <p style={{ fontFamily: F, fontWeight: 400, fontSize: 13, lineHeight: "20px", color: "rgb(133,133,133)", marginTop: 2 }}>
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
                className="flex items-center justify-center text-[rgb(74,74,74)] hover:text-[rgb(0,153,255)] transition-colors duration-300"
                style={{ fontFamily: F, fontWeight: 400, letterSpacing: "-0.04em", lineHeight: "120%", height: 40, padding: "0 20px", textDecoration: "none" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="group btn-glow inline-flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: "rgb(59,130,246)", borderRadius: 30, height: 50, padding: "12px 24px",
                fontFamily: F, fontWeight: 500, fontSize: 14, letterSpacing: "-0.04em", lineHeight: "120%", color: "#fff",
                textDecoration: "none",
              }}
            >
              <span className="transition-all duration-300">Get Now</span>
              <div className="w-0 opacity-0 overflow-hidden flex items-center justify-center group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 3 20 22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
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
                        {s.title}
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
