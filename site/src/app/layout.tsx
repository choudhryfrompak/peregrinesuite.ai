import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peregrinesuite.ai"),
  title: {
    default: "Peregrine Suite AI",
    template: "%s | Peregrine Suite AI",
  },
  description:
    "Peregrine Suite AI is an agent building platform that helps build amazing agents that transform your business by saving time and driving higher ROI",
  openGraph: {
    title: "Peregrine Suite AI",
    description:
      "Peregrine Suite AI is an agent building platform that helps build amazing agents that transform your business by saving time and driving higher ROI",
    images: ["/images/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peregrine Suite AI",
    description:
      "Peregrine Suite AI is an agent building platform that helps build amazing agents that transform your business by saving time and driving higher ROI",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased" style={{ background: "#fff" }}>
        <Navbar />
        <main className="flex-1" style={{ maxWidth: 1480, margin: "0 auto", width: "100%" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
