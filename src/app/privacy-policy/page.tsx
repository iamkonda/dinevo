
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Dinevo",
  description:
    "Learn how Ornge Tech Limited collects, uses, stores and protects personal information when you use Dinevo restaurant POS software.",
};

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          This Privacy Policy explains how Ornge Tech Limited ("we", "us"
          or "our"), the operator of Dinevo, collects, uses, stores and
          protects personal information when you visit our website,
          purchase a licence or use our restaurant point-of-sale software.
        </p>
        <p>
          Ornge Tech Limited is registered in the United Kingdom. For
          personal information we process for our own business purposes,
          we act as the data controller.
        </p>
        <p>
          We are committed to handling personal information responsibly
          and in accordance with applicable data protection laws,
          including the UK GDPR and Data Protection Act 2018 where applicable.
        </p>
      </>
    ),
  },
  {
    title: "2. Information we collect",
    content: (
      <>
        <p>
          Depending on how you use Dinevo, we may collect the following
          categories of information:
        </p>
        <ul>
          <li>
            <strong>Account information:</strong> name, email address,
            login credentials and account details.
          </li>
          <li>
            <strong>Restaurant information:</strong> restaurant name,
            business contact details, location and configuration settings.
          </li>
          <li>
            <strong>Operational information:</strong> menu items, prices,
            orders, transactions, sales records and other information
            entered into the POS.
          </li>
          <li>
            <strong>Employee information:</strong> employee names,
            account identifiers, roles and access permissions where
            configured by a restaurant.
          </li>
          <li>
            <strong>Customer information:</strong> information about
            restaurant customers that a restaurant chooses to enter
            into Dinevo.
          </li>
          <li>
            <strong>Technical information:</strong> device, browser,
            connection, diagnostic and log information where collected
            through the service.
          </li>
          <li>
            <strong>Support communications:</strong> information you
            provide when contacting our support team.
          </li>
        </ul>
        <p>
          Please do not enter sensitive personal information into Dinevo
          unless the relevant feature specifically requires it and you
          have a lawful basis to do so.
        </p>
      </>
    ),
  },
  {
    title: "3. How we use information",
    content: (
      <>
        <p>We may use information for the following purposes:</p>
        <ul>
          <li>Creating and managing restaurant accounts.</li>
          <li>Providing access to Dinevo and its licensed features.</li>
          <li>Storing and processing restaurant menus, orders and sales records.</li>
          <li>Managing licences, purchases and customer support.</li>
          <li>Maintaining the security and reliability of our services.</li>
          <li>Diagnosing errors and improving product functionality.</li>
          <li>Communicating important service, security or policy updates.</li>
          <li>Meeting legal, regulatory and accounting obligations.</li>
          <li>Establishing, exercising or defending legal claims.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Our role in relation to restaurant data",
    content: (
      <>
        <p>
          There are different ways in which we process personal information
          through Dinevo.
        </p>
        <p>
          <strong>Information about our business customers:</strong> When
          we process account, subscription, licensing and support
          information for our own purposes, Ornge Tech Limited generally
          acts as the data controller.
        </p>
        <p>
          <strong>Information entered by restaurants:</strong> Restaurants
          may enter information about their employees and customers into
          Dinevo. In relation to this information, the restaurant will
          generally determine why and how the information is used and
          may act as the data controller. Ornge Tech Limited may process
          that information on the restaurant's behalf to provide the
          service, acting as a data processor where applicable.
        </p>
        <p>
          Restaurants are responsible for ensuring that they have an
          appropriate legal basis, provide any required privacy notices
          and comply with their own data protection obligations.
        </p>
      </>
    ),
  },
  {
    title: "5. Legal bases for processing",
    content: (
      <>
        <p>
          Where UK GDPR or similar data protection legislation applies,
          we rely on appropriate legal bases for processing personal
          information, depending on the purpose.
        </p>
        <ul>
          <li>
            <strong>Contract:</strong> where processing is necessary to
            provide Dinevo or fulfil an agreement with you.
          </li>
          <li>
            <strong>Legitimate interests:</strong> where necessary for
            purposes such as maintaining security, preventing misuse
            and improving our services, provided those interests are
            not overridden by your rights.
          </li>
          <li>
            <strong>Legal obligation:</strong> where we need to comply
            with applicable laws or regulatory requirements.
          </li>
          <li>
            <strong>Consent:</strong> where consent is required, such
            as for certain optional cookies or marketing communications.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cloud hosting and service providers",
    content: (
      <>
        <p>
          Dinevo uses third-party infrastructure providers to operate
          and store information within its cloud environment.
        </p>
        <ul>
          <li>
            <strong>Vercel:</strong> used for application hosting and
            related deployment infrastructure.
          </li>
          <li>
            <strong>Neon:</strong> used to provide cloud PostgreSQL
            database infrastructure for storing application data.
          </li>
        </ul>
        <p>
          These providers may process information on our behalf as
          service providers or subprocessors, depending on the service
          and processing arrangement.
        </p>
        <p>
          Data may be stored or processed in different countries depending
          on deployment, database-region settings and provider infrastructure.
          We will take appropriate steps where international data
          transfer rules apply.
        </p>
        <p>
          We may use additional service providers when necessary to
          operate, secure or support Dinevo. Where appropriate, we will
          update this Policy or provide further information about
          relevant providers.
        </p>
      </>
    ),
  },
  {
    title: "7. Payments and purchases",
    content: (
      <>
        <p>
          Dinevo offers paid software licences. Our payment processing
          provider has not yet been selected.
        </p>
        <p>
          When a payment provider is introduced, payment transactions
          may be processed by that provider under its own terms and
          privacy policy.
        </p>
        <p>
          Depending on the payment arrangement, we may receive information
          such as payment status, transaction reference, purchase amount
          and billing details. We do not intend to store full payment
          card details in the Dinevo application.
        </p>
        <p>
          We will update this Policy with the relevant payment provider
          information when our payment arrangements are finalised.
        </p>
      </>
    ),
  },
  {
    title: "8. Data retention",
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes described in this Policy, including
          providing the service, maintaining business records, resolving
          disputes, enforcing agreements and complying with legal
          obligations.
        </p>
        <p>
          Retention periods may vary depending on the type of information,
          the restaurant's account status, applicable legal requirements
          and our contractual obligations.
        </p>
        <p>
          Where information is no longer required, we will take appropriate
          steps to delete it or anonymise it, subject to legal, security
          and backup requirements.
        </p>
        <p>
          Restaurants should contact us if they need assistance with
          requests relating to information they have entered into Dinevo.
        </p>
      </>
    ),
  },
  {
    title: "9. Security",
    content: (
      <>
        <p>
          We take reasonable technical and organisational measures
          designed to protect information against unauthorised access,
          alteration, disclosure, loss or destruction.
        </p>
        <p>
          These measures may include access controls, authentication,
          infrastructure security measures and monitoring of technical
          systems.
        </p>
        <p>
          However, no internet transmission or electronic storage system
          can be guaranteed to be completely secure. You are responsible
          for keeping account credentials confidential and restricting
          access to authorised users.
        </p>
      </>
    ),
  },
  {
    title: "10. Cookies and similar technologies",
    content: (
      <>
        <p>
          Our website and application may use cookies or similar
          technologies where necessary to provide functionality,
          maintain sessions, support security or remember preferences.
        </p>
        <p>
          If we introduce optional analytics or advertising cookies,
          we will provide appropriate information and obtain consent
          where required by applicable law.
        </p>
        <p>
          You can manage cookies through your browser settings.
          Disabling certain cookies may affect the functionality of
          parts of the website or service.
        </p>
      </>
    ),
  },
  {
    title: "11. Sharing information",
    content: (
      <>
        <p>We may share information where reasonably necessary with:</p>
        <ul>
          <li>
            Hosting, database and infrastructure providers that support
            Dinevo.
          </li>
          <li>
            Professional advisers, such as legal, accounting and
            compliance advisers, where necessary.
          </li>
          <li>
            Government authorities, regulators or law enforcement
            agencies where legally required.
          </li>
          <li>
            Other parties where necessary to protect our rights,
            users, services or business.
          </li>
        </ul>
        <p>
          We do not sell personal information to third parties.
        </p>
        <p>
          Where we use service providers to process personal information,
          we take appropriate steps to ensure that relevant contractual
          and data protection obligations are in place.
        </p>
      </>
    ),
  },
  {
    title: "12. International data transfers",
    content: (
      <>
        <p>
          Dinevo is intended for customers around the world. Our service
          providers may operate infrastructure in multiple countries.
        </p>
        <p>
          Where personal information is transferred outside the United
          Kingdom or another applicable jurisdiction, we will take
          appropriate steps to ensure that the transfer complies with
          applicable data protection requirements.
        </p>
        <p>
          Depending on the circumstances, these steps may include
          adequacy regulations, approved contractual safeguards or
          other legally recognised transfer mechanisms.
        </p>
      </>
    ),
  },
  {
    title: "13. Your privacy rights",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have
          rights in relation to your personal information, including:
        </p>
        <ul>
          <li>The right to request access to your personal information.</li>
          <li>The right to request correction of inaccurate information.</li>
          <li>The right to request deletion in certain circumstances.</li>
          <li>The right to request restriction of processing.</li>
          <li>The right to object to certain processing activities.</li>
          <li>The right to request data portability where applicable.</li>
          <li>The right to withdraw consent where processing relies on consent.</li>
        </ul>
        <p>
          To exercise a right, contact us using the details below.
          We may need to verify your identity before responding.
        </p>
        <p>
          If you are a restaurant employee or customer and your
          information was entered into Dinevo by a restaurant, you
          should generally contact that restaurant first. We will
          assist the restaurant where required under our applicable
          data processing arrangements.
        </p>
        <p>
          If you are in the United Kingdom, you may also have the right
          to complain to the Information Commissioner's Office (ICO).
        </p>
      </>
    ),
  },
  {
    title: "14. Children's privacy",
    content: (
      <>
        <p>
          Dinevo is a business software service and is not designed
          for children to create accounts or use as an independent
          service.
        </p>
        <p>
          Restaurants should not enter children's personal information
          into Dinevo unless they have an appropriate legal basis and
          comply with applicable requirements.
        </p>
      </>
    ),
  },
  {
    title: "15. Changes to this Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy to reflect changes in
          our services, infrastructure, business practices or legal
          requirements.
        </p>
        <p>
          The latest version will be published on this page with
          an updated effective date. Where appropriate, we will
          provide notice of material changes.
        </p>
      </>
    ),
  },
  {
    title: "16. Contact us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or wish
          to exercise your privacy rights, please contact:
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
export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64736A]">
            Your information matters. Learn how Dinevo collects, uses,
            stores and protects personal information.
          </p>
          <p className="mt-6 text-sm text-[#829087]">
            Effective date: November 2026
          </p>
        </div>
      </section>

      {/* Provider information */}
      <section className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">Legal operator</p>
            <p className="mt-2 text-xl font-semibold">Ornge Tech Limited</p>
            <p className="mt-2 text-sm text-[#64736A]">United Kingdom</p>
          </div>
          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">Application hosting</p>
            <p className="mt-2 text-xl font-semibold">Vercel</p>
            <p className="mt-2 text-sm text-[#64736A]">Application infrastructure</p>
          </div>
          <div className="rounded-2xl border border-[#E3EAE0] bg-white p-6">
            <p className="text-sm text-[#829087]">Cloud database</p>
            <p className="mt-2 text-xl font-semibold">Neon</p>
            <p className="mt-2 text-sm text-[#64736A]">PostgreSQL database infrastructure</p>
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

        <div className="mt-12 rounded-2xl border border-[#DCE8D5] bg-[#F0F6EC] p-6 sm:p-8">
          <h2 className="text-lg font-semibold">
            Questions about your information?
          </h2>
          <p className="mt-3 leading-7 text-[#64736A]">
            Contact our team if you have questions about how your
            information is handled or want to make a privacy request.
          </p>
          <a
            href="mailto:	dinevo@ornge.space"
            className="mt-5 inline-flex rounded-full bg-[#253B31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#354E41]"
          >
            Contact privacy support
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
