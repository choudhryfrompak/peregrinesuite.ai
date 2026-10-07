import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Invoice Forwarder Privacy Policy",
  description: "How Invoice Forwarder collects, uses, shares and protects data, including data from Google and Microsoft accounts.",
};

const F = '"Mazzard H", sans-serif';
const EFFECTIVE = "7 October 2026";

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 style={{ fontFamily: F, fontWeight: 500, fontSize: 24, color: "rgb(23,26,31)", margin: "36px 0 12px" }}>{children}</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
  <h3 style={{ fontFamily: F, fontWeight: 500, fontSize: 18, color: "rgb(23,26,31)", margin: "20px 0 8px" }}>{children}</h3>
);
const P = ({ children }: { children: ReactNode }) => (
  <p style={{ fontFamily: F, fontSize: 16, lineHeight: "160%", color: "rgb(74,74,74)", margin: "0 0 12px" }}>{children}</p>
);
const UL = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc" style={{ fontFamily: F, fontSize: 16, lineHeight: "160%", color: "rgb(74,74,74)", paddingLeft: 24, margin: "0 0 12px" }}>
    {children}
  </ul>
);
const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="underline" style={{ color: "rgb(59,130,246)" }}>
    {children}
  </a>
);

export default function InvoiceForwarderPrivacyPolicy() {
  return (
    <article className="px-4 md:px-10 lg:px-[60px]" style={{ maxWidth: 860, margin: "0 auto", padding: "80px 16px 60px" }}>
      <h1 style={{ fontFamily: F, fontWeight: 500, fontSize: 40, letterSpacing: "-0.66px", lineHeight: "130%", color: "rgb(59,130,246)" }}>
        Invoice Forwarder Privacy Policy
      </h1>
      <P>
        <strong>Effective date:</strong> {EFFECTIVE}
      </P>

      <P>
        Invoice Forwarder is a product of Peregrine Suite AI (PeregrineSuite.ai, Inc, &ldquo;we&rdquo;, &ldquo;us&rdquo;). It automates
        invoice and bill data entry for accountants and their clients: it collects invoices from connected email and cloud-storage
        accounts, extracts the invoice details for review, and either sends the approved details to the user&rsquo;s Xero account or
        forwards the invoices to an email address the user chooses.
      </P>
      <P>This policy explains what data Invoice Forwarder accesses, how we use it, who we share it with, and the choices you have.</P>

      <H2>1. Information we collect</H2>
      <H3>Account information</H3>
      <UL>
        <li>Name and email address of accountants and administrators who use Invoice Forwarder.</li>
        <li>Your password, which we store only as a one-way hash (bcrypt).</li>
        <li>The organizations (clients) you manage in the app.</li>
      </UL>

      <H3>Data from accounts you connect</H3>
      <P>
        You (or your client, through a secure connection link) choose which accounts to connect. We access only what is needed for
        the features you turn on.
      </P>
      <UL>
        <li>
          <strong>Gmail (Google)</strong> — your email address, and the email messages that match the rules you set (senders,
          keywords, date range, attachments): sender, recipients, subject, date, message body and attachments. If you turn on a{" "}
          <em>Forward</em> workflow, we also forward matching messages from your mailbox to the address you specify, create a label
          named &ldquo;Forwarded by Forwarder&rdquo;, apply it to forwarded messages and remove them from your Inbox.
        </li>
        <li>
          <strong>Google Drive</strong> — the document files (PDFs, images, office documents) in the folder you choose. Access is
          read-only; we never change or delete your Drive files.
        </li>
        <li>
          <strong>Microsoft Outlook</strong> — the same message data as for Gmail, and, if you turn on forwarding, the ability to
          forward matching messages and move them into a &ldquo;Forwarded by Forwarder&rdquo; folder.
        </li>
        <li>
          <strong>Dropbox</strong> — the files in the folder you choose (we may create that folder if it does not exist).
        </li>
        <li>
          <strong>Xero</strong> — access to create bills and invoices in your Xero organization when you approve them.
        </li>
      </UL>
      <P>
        For each connection we store the OAuth access and refresh tokens the provider issues. They are encrypted at rest (AES-256-GCM)
        and are deleted when you disconnect the account.
      </P>

      <H3>Documents and extracted data</H3>
      <P>
        We store the invoice files we collect, the details extracted from them (supplier, invoice number, dates, line items, amounts,
        tax), your review edits, and a log of what was forwarded or sent to Xero.
      </P>

      <H2>2. How we use information</H2>
      <UL>
        <li>To find the emails and files that match your rules and collect the invoices in them.</li>
        <li>To read the invoice details (text recognition and extraction) so you can review them.</li>
        <li>To create the approved bills or invoices in your Xero account.</li>
        <li>To forward matching emails or files to the recipients you choose, and to label them as forwarded.</li>
        <li>To show you the status of each document, send in-app notifications, and keep the service secure and working.</li>
      </UL>
      <P>
        We use your data only to provide and improve the features you use. We do not use it for advertising and we never sell it.
      </P>

      <H2>3. Google user data</H2>
      <P>
        Invoice Forwarder&rsquo;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
        <A href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</A>, including
        the Limited Use requirements. In particular:
      </P>
      <UL>
        <li>We use Google user data only to provide or improve the user-facing features described in this policy.</li>
        <li>
          We transfer Google user data to others only as needed to provide those features (for example, to Xero or to the forwarding
          address you set, at your direction), to comply with applicable law, or as part of a merger or acquisition with notice to you.
        </li>
        <li>We do not use or transfer Google user data for advertising, and we do not sell it.</li>
        <li>
          We do not use Google user data to develop, improve or train generalized artificial-intelligence or machine-learning models.
        </li>
        <li>
          No person at our company reads your Google user data unless you give us permission for specific messages (for example, for
          support), it is necessary for security purposes such as investigating abuse, it is needed to comply with law, or the data
          is aggregated and anonymized for internal operations.
        </li>
      </UL>

      <H2>4. How we share information</H2>
      <UL>
        <li>
          <strong>At your direction</strong> — with Xero, when you approve a bill or invoice, and with the email recipients you set
          in a Forward workflow.
        </li>
        <li>
          <strong>Service providers</strong> — companies that host our infrastructure and, where enabled, a document text-recognition
          (OCR) provider that processes invoice files on our behalf under contract and only to provide the service.
        </li>
        <li>
          <strong>Your organization</strong> — accountants and administrators of the organization a document belongs to can see it.
        </li>
        <li>
          <strong>Legal reasons</strong> — when required by law, or to protect the rights, safety and security of our users and
          service.
        </li>
        <li>
          <strong>Business transfers</strong> — if we are involved in a merger or acquisition, with notice to you.
        </li>
      </UL>

      <H2>5. Retention and deletion</H2>
      <UL>
        <li>Documents and extracted data are kept until you delete them, delete the organization, or close your account.</li>
        <li>Disconnecting an account deletes its stored tokens straight away; we stop accessing it immediately.</li>
        <li>
          You can ask us to delete all of your data at any time by emailing us (see Contact). We complete deletion within 30 days,
          except where the law requires us to keep it.
        </li>
        <li>
          You can also revoke our access yourself: for Google at{" "}
          <A href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</A>; for Microsoft at{" "}
          <A href="https://account.live.com/consent/Manage">account.live.com/consent/Manage</A> (personal accounts) or{" "}
          <A href="https://myapps.microsoft.com">myapps.microsoft.com</A> (work accounts).
        </li>
      </UL>

      <H2>6. Security</H2>
      <P>
        Data is encrypted in transit (HTTPS/TLS). Connection tokens are encrypted at rest, passwords are hashed, and access to each
        organization&rsquo;s data is restricted to its authorized users. No method of storage or transmission is completely secure,
        but we work to protect your data and will notify affected users of a breach as required by law.
      </P>

      <H2>7. Children</H2>
      <P>
        Invoice Forwarder is a business tool and is not intended for anyone under 16. We do not knowingly collect data from
        children.
      </P>

      <H2>8. Changes to this policy</H2>
      <P>
        We will post any changes on this page and update the effective date. If a change materially affects how we use data from
        connected accounts, we will notify users in the app before it takes effect.
      </P>

      <H2>9. Contact</H2>
      <P>
        PeregrineSuite.ai, Inc
        <br />
        Email: <A href="mailto:privacy@peregrinesuite.ai">privacy@peregrinesuite.ai</A>
        <br />
        Website: <A href="https://peregrinesuite.ai">peregrinesuite.ai</A>
      </P>
    </article>
  );
}
