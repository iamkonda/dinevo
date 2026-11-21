
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dinevo",
  description:
    "Read the Terms and Conditions governing the use of Dinevo restaurant POS software and services.",
};

const sections = [
  {
    title: "1. About these Terms",
    content: (
      <>
        <p>
          These Terms and Conditions govern your access to and use of Dinevo,
          including its restaurant point-of-sale software, related services,
          website and any associated features.
        </p>
        <p>
          Dinevo is operated by <strong>Ornge Tech Limited</strong>, a company
          registered in the United Kingdom ("we", "us" or "our").
        </p>
        <p>
          By purchasing a licence, creating an account or using Dinevo, you
          agree to these Terms. If you do not agree, you must not use the
          services.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility and business use",
    content: (
      <>
        <p>
          Dinevo is intended for restaurants and food-service businesses,
          including their owners, managers and authorised employees.
        </p>
        <p>
          If you use Dinevo on behalf of a business, you confirm that you
          have authority to accept these Terms on that business's behalf.
        </p>
        <p>
          You must provide accurate information when purchasing a licence
          or registering for an account.
        </p>
      </>
    ),
  },
  {
    title: "3. Licences and permitted use",
    content: (
      <>
        <p>
          Subject to payment and compliance with these Terms, we grant you
          a limited, non-exclusive, non-transferable licence to use Dinevo
          for your restaurant's internal business operations during the
          purchased licence period.
        </p>
        <p>
          A licence is intended for the restaurant or location specified
          in your purchase. Additional restaurants or locations may require
          additional licences.
        </p>
        <p>
          You must not:
        </p>
        <ul>
          <li>Copy, resell, sublicense or commercially redistribute Dinevo.</li>
          <li>Reverse engineer, decompile or attempt to extract its source code, except where applicable law expressly permits it.</li>
          <li>Bypass licence restrictions or security features.</li>
          <li>Use Dinevo for unlawful, fraudulent or unauthorised activities.</li>
          <li>Interfere with the security, integrity or availability of the service.</li>
          <li>Allow unauthorised individuals to access your account or licence.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Pricing and payment",
    content: (
      <>
        <p>
          Our advertised standard licence prices are:
        </p>
        <ul>
          <li>
            <strong>6-month licence:</strong> USD $250 per restaurant.
          </li>
          <li>
            <strong>12-month licence:</strong> USD $450 per restaurant.
          </li>
        </ul>
        <p>
          These prices are subject to change for future purchases. The price
          confirmed at checkout or in your order confirmation will apply to
          that purchase.
        </p>
        <p>
          Any applicable taxes, payment fees or other charges will be
          presented during the purchase process where relevant.
        </p>
        <p>
          Enterprise purchases involving more than 10 restaurant licences
          require a separate quotation. Please contact{" "}
          <a href="mailto:	dinevo@ornge.space">
            	dinevo@ornge.space
          </a>.
        </p>
      </>
    ),
  },
  {
    title: "5. Licence duration and renewal",
    content: (
      <>
        <p>
          Licences are purchased for a fixed period of either 6 months
          or 12 months, starting from the activation date or other start
          date specified in your order confirmation.
        </p>
        <p>
          <strong>Dinevo licences do not automatically renew.</strong>
          We will not automatically charge you when your licence expires.
        </p>
        <p>
          To continue using Dinevo after expiry, you must actively purchase
          a new licence. We may provide reminders before an expiry date,
          but you remain responsible for arranging a new purchase.
        </p>
        <p>
          Once a licence expires, access to licence-dependent features may
          be suspended or restricted until a new licence is purchased.
        </p>
      </>
    ),
  },
  {
    title: "6. Refund policy",
    content: (
      <>
        <p>
          We offer a 7-day refund period for all Dinevo licence purchases.
          This applies to initial purchases as well as renewals and repeat
          purchases.
        </p>
        <p>
          You must submit your refund request within 7 calendar days of
          the relevant purchase date by emailing:
        </p>
        <p>
          <a href="mailto:	dinevo@ornge.space">
            	dinevo@ornge.space
          </a>
        </p>
        <p>
          Please include your order reference, purchase date and the email
          address associated with your purchase so that we can identify
          the transaction.
        </p>
        <p>
          We will review eligible requests and communicate the outcome
          and any applicable refund arrangements. Refunds will generally
          be returned through the original payment method where possible.
        </p>
        <p>
          This policy does not affect any mandatory consumer rights that
          cannot legally be excluded or restricted.
        </p>
        <p>
          For further information, please read our{" "}
          <Link href="/refund-policy" className="font-semibold underline">
            Refund Policy
          </Link>.
        </p>
      </>
    ),
  },
  {
    title: "7. Your account and security",
    content: (
      <>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for activities carried out through your
          account.
        </p>
        <p>
          You must notify us promptly if you suspect unauthorised access,
          a compromised password or misuse of your account.
        </p>
        <p>
          You are responsible for ensuring that your employees and other
          authorised users comply with these Terms.
        </p>
      </>
    ),
  },
  {
    title: "8. Your business data",
    content: (
      <>
        <p>
          You retain ownership of the business information and content
          that you submit to Dinevo ("Customer Data").
        </p>
        <p>
          You grant us permission to process Customer Data only as reasonably
          necessary to provide, maintain, secure and support the services,
          and for other purposes permitted by law and our Privacy Policy.
        </p>
        <p>
          You are responsible for ensuring that you have the necessary
          rights and permissions to upload and process information through
          Dinevo.
        </p>
        <p>
          You should maintain appropriate backups of important business
          information. You remain responsible for your own business records,
          including any records that you are legally required to retain.
        </p>
      </>
    ),
  },
  {
    title: "9. Availability and updates",
    content: (
      <>
        <p>
          We aim to provide a reliable service, but we do not guarantee
          uninterrupted or error-free availability.
        </p>
        <p>
          Access may occasionally be affected by maintenance, software
          updates, network issues, third-party services, security incidents
          or circumstances outside our reasonable control.
        </p>
        <p>
          We may update, modify or improve Dinevo from time to time.
          We will endeavour to avoid unnecessary disruption when making
          material changes.
        </p>
      </>
    ),
  },
  {
    title: "10. Intellectual property",
    content: (
      <>
        <p>
          Dinevo, including its software, design, branding, logos,
          documentation and related materials, is owned by or licensed
          to Ornge Tech Limited and is protected by applicable
          intellectual property laws.
        </p>
        <p>
          Purchasing a licence does not transfer ownership of Dinevo
          or any of its intellectual property to you.
        </p>
        <p>
          You must not use our trademarks, branding or other intellectual
          property without our prior written permission, except where
          permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "11. Third-party services",
    content: (
      <>
        <p>
          Certain aspects of Dinevo may rely on third-party services,
          infrastructure, payment providers or integrations.
        </p>
        <p>
          Your use of those services may also be subject to the relevant
          third party's own terms and privacy policies.
        </p>
        <p>
          We are not responsible for services operated independently
          by third parties, although we will make reasonable efforts
          to address issues within our control.
        </p>
      </>
    ),
  },
  {
    title: "12. Limitation of liability",
    content: (
      <>
        <p>
          Nothing in these Terms excludes or limits liability where doing
          so would be unlawful, including liability for fraud, fraudulent
          misrepresentation, or death or personal injury caused by
          negligence.
        </p>
        <p>
          Subject to the paragraph above, we will not be liable for
          indirect or consequential losses, loss of anticipated profits,
          loss of business opportunities or loss of goodwill arising
          from your use of Dinevo.
        </p>
        <p>
          We will not be responsible for losses caused by inaccurate
          information supplied by you, unauthorised use of your account,
          or failures of systems outside our reasonable control.
        </p>
        <p>
          To the extent permitted by law, our total aggregate liability
          arising from or in connection with the services will not exceed
          the amount you paid us for the relevant Dinevo licence during
          the 12 months immediately preceding the event giving rise
          to the claim.
        </p>
        <p>
          If you are a consumer, nothing in these Terms affects your
          statutory rights.
        </p>
      </>
    ),
  },
  {
    title: "13. Suspension and termination",
    content: (
      <>
        <p>
          We may suspend or restrict access to Dinevo where reasonably
          necessary to protect the service, investigate suspected misuse,
          address a security risk, comply with law or respond to a
          material breach of these Terms.
        </p>
        <p>
          Where reasonably possible, we will notify you and provide
          an opportunity to resolve the issue before taking action.
        </p>
        <p>
          You may stop using Dinevo at any time. Ending your use does not
          automatically create a right to a refund outside the refund
          arrangements described in these Terms and our Refund Policy,
          subject always to mandatory legal rights.
        </p>
      </>
    ),
  },
  {
    title: "14. Changes to these Terms",
    content: (
      <>
        <p>
          We may update these Terms to reflect changes to our services,
          business practices or legal requirements.
        </p>
        <p>
          The latest version will be published on our website with its
          updated effective date. Where a change materially affects
          existing customers, we will take reasonable steps to provide
          notice.
        </p>
          <p>
          Your continued use of Dinevo after updated Terms take effect
          constitutes acceptance of those changes, to the extent
          permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "15. Governing law and jurisdiction",
    content: (
      <>
        <p>
          These Terms and any dispute or claim arising out of or in
          connection with them are governed by the laws of England
          and Wales.
        </p>
        <p>
          The courts of England and Wales will have jurisdiction over
          disputes arising in connection with these Terms, subject
          to any mandatory jurisdiction rights that apply to consumers
          under applicable law.
        </p>
      </>
    ),
  },
  {
    title: "16. Contact information",
    content: (
      <>
        <p>
          If you have questions about these Terms, please contact us:
        </p>
        <div className="rounded-2xl border border-[#E3EAE0] bg-[#F8FAF7] p-6">
          <p><strong>Ornge Tech Limited</strong></p>
          <p>Operating the Dinevo brand</p>
          <p>United Kingdom</p>
          <p>
            Email:{" "}
            <a href="mailto:	dinevo@ornge.space">
              	dinevo@ornge.space
            </a>
          </p>
        </div>
      </>
    ),
  },
];

const email = "	dinevo@ornge.space";

function Logo() {
  return (
    <a href="/" className="inline-flex items-center">
      <Image
        src="/dinevo-logo.png"
        alt="Dinevo"
        width={200}
        height={65}
        priority
        className="h-11 w-auto object-contain"
      />
    </a>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF7] text-[#253B31]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#E8EEE6] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-[#385C43]">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-[#385C43]">
              How it works
            </a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-[#385C43]">
              Pricing
            </a>
            <a href="#enterprise" className="text-sm font-medium text-slate-600 hover:text-[#385C43]">
              Enterprise
            </a>
          </nav>

          <a
            href={`mailto:${email}`}
            className="rounded-full bg-[#253B31] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#253B31]/15 transition hover:-translate-y-0.5 hover:bg-[#385C43]"
          >
            Contact us ↗
          </a>
        </div>
      </header>

      {/* Page heading */}
      <section className="border-b border-[#E5EBE3] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#75A957]">
            Legal information
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64736A]">
            Please read these Terms carefully before purchasing or using
            Dinevo restaurant POS software and related services.
          </p>
          <p className="mt-6 text-sm text-[#829087]">
            Effective date: November 2026
          </p>
        </div>
      </section>

      {/* Important summary */}
      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">6-month licence</p>
            <p className="mt-2 text-2xl font-semibold">$250 USD</p>
            <p className="mt-2 text-sm text-[#64736A]">Per restaurant</p>
          </div>
          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">12-month licence</p>
            <p className="mt-2 text-2xl font-semibold">$450 USD</p>
            <p className="mt-2 text-sm text-[#64736A]">Per restaurant</p>
          </div>
          <div className="rounded-2xl border border-[#DCE8D5] bg-[#F0F6EC] p-6">
            <p className="text-sm font-medium text-[#55734A]">Our renewal policy</p>
            <p className="mt-2 text-2xl font-semibold">No auto-renewal</p>
            <p className="mt-2 text-sm text-[#64736A]">
              Licences require an active new purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Terms content */}
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border-b border-[#E5EBE3] pb-9 last:border-0"
            >
              <h2 className="text-xl font-semibold sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-8 text-[#64736A] [&_a]:font-medium [&_a]:text-[#557B43] [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#DCE8D5] bg-[#F0F6EC] p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Need clarification?</h2>
          <p className="mt-3 leading-7 text-[#64736A]">
            If you have any questions about these Terms or your Dinevo
            licence, our team will be happy to help.
          </p>
          <a
            href="mailto:	dinevo@ornge.space"
            className="mt-5 inline-flex rounded-full bg-[#253B31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#354E41]"
          >
            Contact support
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8EEE6] bg-white px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                A modern restaurant POS designed to simplify everyday
                operations and help your business grow.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#253B31]">Explore</h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                <a href="#features" className="hover:text-[#385C43]">Features</a>
                <a href="#pricing" className="hover:text-[#385C43]">Pricing</a>
                <a href="#enterprise" className="hover:text-[#385C43]">Enterprise</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#253B31]">
                Company & support
              </h3>
              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                <a href="/about" className="hover:text-[#385C43]">About Dinevo</a>
                <a href="/terms" className="hover:text-[#385C43]">Terms & Conditions</a>
                <a href="/privacy-policy" className="hover:text-[#385C43]">Privacy Policy</a>
                <a href="/refund-policy" className="hover:text-[#385C43]">Refund Policy</a>
                <a href={`mailto:${email}`} className="hover:text-[#385C43]">
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#E8EEE6] pt-7 text-xs text-slate-400 sm:flex-row">
            <p>© 2026 Dinevo. All rights reserved.</p>
            <p>Designed for restaurants. Built for growth.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
