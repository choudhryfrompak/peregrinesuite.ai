import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Deep dives, experiments, and lessons learned at the edge of AI-powered products and systems with Peregrine Suite AI.",
};

const F = '"Mazzard H", sans-serif';

const blogs = [
  {
    title: "Why accounting firms are primed to use AI agents in their work Copy",
    date: "Sep 5, 2025",
    image: "/images/blog1.jpg",
    href: "/blog/why-accounting-firms-are-primed-to-use-ai-agents-in-their-work-copy",
  },
  {
    title: "The Age of AI Agents: Unlocking Transformative Potential Across Every Industry",
    date: "Sep 5, 2025",
    image: "/images/blog2.jpg",
    href: "/blog/unlocking-transformative-potential-across-every-industry",
  },
  {
    title: "The Voice Revolution: How AI Voice Agents Are Transforming Human-Computer Interaction",
    date: "Sep 5, 2025",
    image: "/images/blog3.jpg",
    href: "/blog/how-ai-voice-agents-are-transforming-human-computer-interaction",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section
        style={{
          background: "linear-gradient(234deg, rgba(59,130,246,0.15) -13%, #fff 50%)",
          padding: "100px 24px 90px",
          textAlign: "center",
        }}
      >
        <ScrollFadeIn>
          <h1
            style={{
              fontFamily: F,
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 58px)",
              lineHeight: 1.15,
              maxWidth: 680,
              margin: "0 auto 22px",
            }}
          >
            <span className="gradient-text">Building What&apos;s Next in AI</span>
          </h1>
          <p
            style={{
              fontFamily: F,
              fontSize: 16,
              color: "rgb(83,82,91)",
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "0 auto",
            }}
          >
            Deep dives, experiments, and lessons learned at the edge of
            AI-powered products and systems with Peregrine Suite AI.
          </p>
        </ScrollFadeIn>
      </section>

      {/* ========== LATEST BLOGS ========== */}
      <section style={{ backgroundColor: "#fff", padding: "70px 40px 90px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <ScrollFadeIn>
            <h2
              style={{
                fontFamily: F,
                fontWeight: 500,
                fontSize: 40,
                letterSpacing: "-0.66px",
                color: "rgb(59,130,246)",
                textAlign: "center",
                marginBottom: 50,
              }}
            >
              Latest Blogs
            </h2>
          </ScrollFadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: 27,
              rowGap: 10,
            }}
            className="blogs-grid"
          >
            {blogs.map((b, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Link
                  href={b.href}
                  style={{ display: "flex", flexDirection: "column", gap: 20, textDecoration: "none" }}
                >
                  {/* Image */}
                  <div
                    className="blog-image-box"
                    style={{
                      borderRadius: 12,
                      border: "1px solid rgb(221,225,240)",
                      width: "100%",
                      height: 220,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image src={b.image} alt={b.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 10, left: 10 }}>
                      <Image src="/images/favicon-light.svg" alt="" width={22} height={22} style={{ opacity: 0.85 }} />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      style={{
                        fontFamily: F,
                        fontWeight: 400,
                        fontSize: 15,
                        lineHeight: "1.45em",
                        color: "#000",
                        marginBottom: 6,
                      }}
                    >
                      {b.title}
                    </h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgb(136,136,136)" }}>
                      {b.date}
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: F,
                      fontWeight: 500,
                      fontSize: 14,
                      color: "rgb(59,130,246)",
                    }}
                  >
                    Read more
                  </span>
                </Link>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
