
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Refund Policy | Dinevo",
  description:
    "Read the Dinevo refund policy, including our 7-day refund period for initial purchases and renewals.",
};

const sections = [
  {
    title: "1. Overview",
    content: (
      <>
        <p>
          At Dinevo, we want customers to have confidence when purchasing
          our restaurant point-of-sale software.
        </p>
        <p>
          Dinevo is operated by <strong>Ornge Tech Limited</strong>,
          a company registered in the United Kingdom.
        </p>
        <p>
          We offer a 7-day refund period for all eligible Dinevo licence
          purchases, including initial purchases, renewals and repeat
          purchases.
        </p>
      </>
    ),
  },
  {
    title: "2. Our 7-day refund period",
    content: (
      <>
        <p>
          You may request a refund within 7 calendar days of the relevant
          purchase date.
        </p>
        <p>
          This policy applies to:
        </p>
        <ul>
          <li>New 6-month licence purchases.</li>
          <li>New 12-month licence purchases.</li>
          <li>Renewals of existing licences.</li>
          <li>Repeat purchases of Dinevo licences.</li>
        </ul>
        <p>
          The 7-day period begins on the date the relevant payment
          is successfully completed.
        </p>
      </>
    ),
  },
  {
    title: "3. Licence pricing",
    content: (
      <>
        <p>Our standard licence prices are:</p>
        <ul>
          <li>
            <strong>6-month licence:</strong> USD $250 per restaurant.
          </li>
          <li>
            <strong>12-month licence:</strong> USD $450 per restaurant.
          </li>
        </ul>
        <p>
          Enterprise purchases involving more than 10 restaurant
          licences may be subject to a separately agreed quotation.
        </p>
        <p>
          Any applicable taxes or other charges will be communicated
          during the purchase process where relevant.
        </p>
      </>
    ),
  },
  {
    title: "4. How to request a refund",
    content: (
      <>
        <p>
          To request a refund, email our support team within 7 calendar
          days of your purchase.
        </p>
        <div className="rounded-2xl border border-[#DCE8D5] bg-[#F0F6EC] p-6">
          <p className="font-semibold">Refund request email</p>
          <a
            href="mailto:	dinevo@ornge.space?subject=Dinevo%20Refund%20Request"
            className="mt-3 inline-block text-lg font-semibold text-[#557B43] underline"
          >
            	dinevo@ornge.space
          </a>
          <p className="mt-4 text-sm text-[#64736A]">
            Suggested subject: Dinevo Refund Request
          </p>
        </div>
        <p>Please include the following information:</p>
        <ul>
          <li>Your name or restaurant name.</li>
          <li>The email address associated with your purchase.</li>
          <li>Your order or transaction reference, if available.</li>
          <li>Your purchase date.</li>
          <li>A brief explanation of your request, if you wish to provide one.</li>
        </ul>
        <p>
          We may contact you if additional information is required
          to locate and verify the purchase.
        </p>
      </>
    ),
  },
  {
    title: "5. Refund processing",
    content: (
      <>
        <p>
          We will review refund requests and communicate the outcome
          to the email address associated with the request.
        </p>
        <p>
          Where a refund is approved, it will generally be returned
          through the original payment method where possible.
        </p>
        <p>
          The time taken for the funds to appear in your account may
          depend on the payment provider, financial institution and
          payment method.
        </p>
        <p>
          If a third-party payment provider processes your purchase,
          its payment-processing procedures may also apply.
        </p>
      </>
    ),
  },
  {
    title: "6. Licence renewal policy",
    content: (
      <>
        <p>
          Dinevo licences do not automatically renew.
        </p>
        <p>
          When your 6-month or 12-month licence expires, you will not
          automatically be charged for another term.
        </p>
        <p>
          If you wish to continue using Dinevo, you must actively
          purchase a new licence.
        </p>
        <p>
          Any new purchase, including a renewal or repeat purchase,
          is covered by the same 7-day refund period described in
          this policy.
        </p>
      </>
    ),
  },
  {
    title: "7. Statutory rights",
    content: (
      <>
        <p>
          This Refund Policy does not limit or exclude any rights
          you may have under applicable consumer protection or
          other mandatory laws.
        </p>
        <p>
          If applicable law provides you with additional cancellation,
          refund or other rights, those rights will continue to apply.
        </p>
        <p>
          Nothing in this policy is intended to remove rights that
          cannot legally be excluded or restricted.
        </p>
      </>
    ),
  },
  {
    title: "8. Contact information",
    content: (
      <>
        <p>
          For questions about refunds, purchases or licence terms,
          please contact:
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

export default function RefundPolicyPage() {
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
            Customer information
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64736A]">
            Our refund policy is designed to give Dinevo customers
            clarity and confidence when purchasing a licence.
          </p>
          <p className="mt-6 text-sm text-[#829087]">
            Effective date: November 2026
          </p>
        </div>
      </section>

      {/* Refund highlights */}
      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#DCE8D5] bg-[#F0F6EC] p-6">
            <p className="text-sm font-medium text-[#55734A]">Refund period</p>
            <p className="mt-2 text-3xl font-semibold">7 days</p>
            <p className="mt-2 text-sm text-[#64736A]">
              From the date of each purchase
            </p>
          </div>

          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">Renewals</p>
            <p className="mt-2 text-2xl font-semibold">Included</p>
            <p className="mt-2 text-sm text-[#64736A]">
              The 7-day period applies to renewals too
            </p>
          </div>

          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">Automatic billing</p>
            <p className="mt-2 text-2xl font-semibold">No auto-renewal</p>
            <p className="mt-2 text-sm text-[#64736A]">
              Customers actively purchase each licence term
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
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

        <div className="mt-12 rounded-2xl bg-[#253B31] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A9D58C]">
            Need a refund?
          </p>
          <h2 className="mt-4 text-2xl font-semibold">
            Our support team is here to help.
          </h2>
          <p className="mt-4 leading-7 text-white/70">
            Send your refund request within 7 calendar days of purchase
            and include your order reference and purchase details.
          </p>
          <a
            href="mailto:	dinevo@ornge.space?subject=Dinevo%20Refund%20Request"
            className="mt-7 inline-flex rounded-full bg-[#91C66A] px-7 py-4 text-sm font-semibold text-[#253B31] transition hover:bg-[#A5D982]"
          >
            Email refund support
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
