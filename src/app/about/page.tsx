
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Dinevo | Restaurant Management Made Simpler",
  description:
    "Discover Dinevo, restaurant POS software designed to help restaurants manage orders, menus and daily operations more efficiently.",
};

const features = [
  {
    number: "01",
    title: "Simplify daily operations",
    description:
      "Bring essential restaurant workflows together in one straightforward point-of-sale experience.",
  },
  {
    number: "02",
    title: "Designed for restaurants",
    description:
      "Focus on the needs of restaurant teams, from taking orders to managing menus and checkout.",
  },
  {
    number: "03",
    title: "Built to grow with you",
    description:
      "A practical software solution for independent restaurants and growing restaurant groups.",
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

export default function AboutPage() {
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#91C66A]/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#91C66A]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE8D5] bg-white px-4 py-2 text-sm font-medium text-[#55734A]">
              <span className="h-2 w-2 rounded-full bg-[#91C66A]" />
              About Dinevo
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-tight text-[#253B31] sm:text-6xl">
              Better restaurant operations start with{" "}
              <span className="text-[#75A957]">simplicity.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#64736A]">
              Dinevo is restaurant point-of-sale software designed to make
              everyday restaurant operations more straightforward. We believe
              the technology behind a restaurant should help its people focus
              on what matters most: serving customers and running a great
              business.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#pricing"
                className="rounded-full bg-[#253B31] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#253B31]/10 transition hover:-translate-y-0.5 hover:bg-[#354E41]"
              >
                Explore pricing
              </Link>
              <Link
                href="mailto:	dinevo@ornge.space"
                className="rounded-full border border-[#D7E0D5] bg-white px-7 py-4 text-sm font-semibold text-[#253B31] transition hover:border-[#91C66A]"
              >
                Contact our team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#E4EAE1] bg-white p-4 shadow-2xl shadow-[#253B31]/10">
              <div className="rounded-[1.5rem] bg-[#253B31] p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">The Dinevo approach</p>
                    <h2 className="mt-2 text-2xl font-semibold">
                      Less complexity.
                      <br />
                      More focus.
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#91C66A] text-2xl font-bold text-[#253B31]">
                    D
                  </div>
                </div>

                <div className="mt-12 space-y-3">
                  {[
                    "Restaurant-focused workflows",
                    "Straightforward order management",
                    "Practical tools for growing teams",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#91C66A] text-sm font-bold text-[#253B31]">
                        ✓
                      </span>
                      <span className="text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-9 border-t border-white/15 pt-6">
                  <p className="text-sm leading-6 text-white/65">
                    Technology should support the people behind every
                    restaurant, not make their work harder.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-full bg-[#91C66A]/30 blur-2xl" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y border-[#E8EDE7] bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#75A957]">
              Our mission
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Make restaurant technology work for people.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-lg leading-9 text-[#64736A]">
              Running a restaurant involves countless daily decisions and
              moving parts. We want Dinevo to make essential operations easier
              to manage through accessible, practical software. Our focus is
              on building a clear and useful experience that restaurant owners
              and their teams can work with confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#75A957]">
              What guides us
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built around the way restaurants work.
            </h2>
            <p className="mt-5 leading-8 text-[#64736A]">
              We approach restaurant software with a few simple principles.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-[#E5EBE3] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#253B31]/5"
              >
                <span className="text-sm font-semibold text-[#91B978]">
                  {feature.number}
                </span>
                <h3 className="mt-7 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-[#64736A]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="bg-[#EEF3EB] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[#253B31] px-8 py-12 text-white sm:px-14 sm:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#A9D58C]">
              The company behind Dinevo
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              A product by Ornge Tech Limited.
            </h2>
            <p className="mt-6 max-w-3xl leading-8 text-white/70">
              Dinevo is a software product operated by Ornge Tech Limited,
              a company registered in the United Kingdom. We aim to make
              practical restaurant technology accessible to businesses
              around the world.
            </p>
            <a
              href="mailto:	dinevo@ornge.space"
              className="mt-8 inline-flex rounded-full bg-[#91C66A] px-7 py-4 text-sm font-semibold text-[#253B31] transition hover:bg-[#A5D982]"
            >
              Contact Dinevo
            </a>
          </div>
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
