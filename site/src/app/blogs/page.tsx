import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Deep dives, experiments, and lessons learned at the edge of AI-powered products and systems with Peregrine Suite AI.",
};

const blogs = [
  {
    title: "Why accounting firms are primed to use AI agents in their work Copy",
    date: "Sep 5, 2025",
    image: "/images/blog1.jpg",
  },
  {
    title:
      "The Age of AI Agents: Unlocking Transformative Potential Across Every Industry",
    date: "Sep 5, 2025",
    image: "/images/blog2.jpg",
  },
  {
    title:
      "The Voice Revolution: How AI Voice Agents Are Transforming Human-Computer Interaction",
    date: "Sep 5, 2025",
    image: "/images/blog3.jpg",
  },
];

export default function BlogsPage() {
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
              <span className="gradient-text">
                Building What&apos;s Next in AI
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Deep dives, experiments, and lessons learned at the edge of
              AI-powered products and systems with Peregrine Suite AI.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Decorative wave */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 60" className="w-full h-12 text-white">
          <path
            fill="currentColor"
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z"
          />
        </svg>
      </div>

      {/* Blog section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollFadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              <span className="gradient-text">Latest Blogs</span>
            </h2>
          </ScrollFadeIn>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <ScrollFadeIn key={idx} delay={idx * 100}>
                <article className="group cursor-pointer">
                  <div className="relative h-52 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Logo overlay */}
                    <div className="absolute top-3 left-3">
                      <Image
                        src="/images/favicon-light.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="opacity-70"
                      />
                    </div>
                  </div>
                  <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
                  <span className="text-sm text-primary font-medium">
                    Read more
                  </span>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
