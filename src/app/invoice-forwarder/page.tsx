import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoice Forwarder",
  description:
    "Invoice Forwarder collects invoices from Gmail, Outlook, Google Drive and Dropbox, extracts the details for review, and sends them to Xero or forwards them to your bookkeeper.",
};

const F = '"Mazzard H", sans-serif';

const FEATURES = [
  {
    title: "Collect invoices automatically",
    body: "Connect Gmail, Outlook, Google Drive or Dropbox and set simple rules — senders, keywords, date range, attachments. Only matching emails and files are collected.",
  },
  {
    title: "Extract and review",
    body: "Invoice Forwarder reads the supplier, invoice number, dates, line items, amounts and tax, checks that the totals add up, and lets you review and correct them before anything is sent.",
  },
  {
    title: "Push to Xero",
    body: "Approved bills and invoices are created in your own Xero organization with one click — no more retyping.",
  },
  {
    title: "Or forward to your bookkeeper",
    body: "A Forward workflow sends each matching invoice email from your own mailbox to the address you choose, then files it under a “Forwarded by Forwarder” label so you can see what was handled.",
  },
];

export default function InvoiceForwarderPage() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "60px 0" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(234deg, rgba(59,130,246,0.2) -13%, #fff 40%)" }}
      />
      <div className="relative px-4 md:px-10 lg:px-[60px]" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <ScrollFadeIn>
          <div className="flex flex-col" style={{ gap: 12, paddingTop: 40, maxWidth: 760 }}>
            <h1 style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>
              Invoice Forwarder
            </h1>
            <p style={{ fontFamily: F, fontSize: 18, lineHeight: "150%", color: "rgb(74,74,74)" }}>
              Invoices from your inbox to Xero — or straight to your bookkeeper — without manual data entry.
              Built by Peregrine Suite AI for accountants and the businesses they look after.
            </p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 20, marginTop: 40 }}>
          {FEATURES.map((f, i) => (
            <ScrollFadeIn key={f.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white" style={{ padding: 24, border: "1px solid rgba(33,33,33,0.1)" }}>
                <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: 20, color: "rgb(23,26,31)", marginBottom: 8 }}>{f.title}</h2>
                <p style={{ fontFamily: F, fontSize: 16, lineHeight: "150%", color: "rgb(74,74,74)" }}>{f.body}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn>
          <div className="rounded-2xl" style={{ marginTop: 40, padding: 24, background: "rgb(247,250,255)", maxWidth: 760 }}>
            <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: 20, color: "rgb(23,26,31)", marginBottom: 8 }}>
              Your data
            </h2>
            <p style={{ fontFamily: F, fontSize: 16, lineHeight: "150%", color: "rgb(74,74,74)" }}>
              Invoice Forwarder only reads the emails and files that match the rules you set, uses them only to
              provide these features, and never sells your data or uses it for advertising. Its use of information
              received from Google APIs adheres to the Google API Services User Data Policy, including the Limited
              Use requirements. Read the{" "}
              <Link href="/invoice-forwarder/privacy-policy/" className="underline" style={{ color: "rgb(59,130,246)" }}>
                Invoice Forwarder Privacy Policy
              </Link>
              .
            </p>
          </div>
        </ScrollFadeIn>

        <div style={{ marginTop: 32 }}>
          <Link
            href="/contact-us/"
            className="inline-block rounded-full text-white"
            style={{ fontFamily: F, fontWeight: 500, fontSize: 16, padding: "12px 24px", background: "rgb(59,130,246)" }}
          >
            Talk to us about Invoice Forwarder
          </Link>
        </div>
      </div>
    </section>
  );
}
