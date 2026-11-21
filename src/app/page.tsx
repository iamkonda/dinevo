
import Image from "next/image";

const features = [
  {
    number: "01",
    icon: "⌁",
    title: "Fast, intuitive billing",
    description:
      "Take orders, manage your cart and complete checkout through a clean interface designed for busy restaurant teams.",
  },
  {
    number: "02",
    icon: "▤",
    title: "Menu management",
    description:
      "Add, edit and organise menu items. Update prices and control item availability whenever you need.",
  },
  {
    number: "03",
    icon: "◫",
    title: "Built for restaurants",
    description:
      "A focused point-of-sale experience designed around restaurant workflows, not generic retail software.",
  },
  {
    number: "04",
    icon: "⌘",
    title: "Offline-ready architecture",
    description:
      "Keep working during internet interruptions with local order handling and synchronisation when connectivity returns.",
  },
  {
    number: "05",
    icon: "▦",
    title: "Multiple terminals",
    description:
      "Support multiple POS terminals within your restaurant and build a setup that can grow with your operation.",
  },
  {
    number: "06",
    icon: "↗",
    title: "Designed to scale",
    description:
      "Whether you operate one restaurant or manage a larger group, Dinevo is designed to grow alongside your business.",
  },
];

const faqs = [
  {
    question: "What is Dinevo?",
    answer:
      "Dinevo is a restaurant point-of-sale platform designed to help restaurants manage orders, billing and menu operations.",
  },
  {
    question: "How much does Dinevo cost?",
    answer:
      "The standard plan costs $250 per restaurant for 6 months or $450 per restaurant for 1 year.",
  },
  {
    question: "Do you offer enterprise pricing?",
    answer:
      "Yes. Businesses purchasing more than 10 restaurant licences can contact our team for enterprise enquiries.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Dinevo offers a 7-day refund policy. Please contact our support team within 7 days of your purchase and review the full refund policy for eligibility conditions.",
  },
  {
    question: "Does Dinevo work without an internet connection?",
    answer:
      "Dinevo is designed with offline-capable POS functionality. Some cloud features and synchronisation require an internet connection.",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCE9D6] bg-[#F5F8F2] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#385C43]">
      <span className="h-2 w-2 rounded-full bg-[#91C66A]" />
      {children}
    </div>
  );
}

function PosPreview() {
  const products = [
    ["🍔", "Classic Burger", "$12"],
    ["🍕", "Margherita", "$14"],
    ["🥗", "Garden Salad", "$9"],
    ["🥤", "Cold Coffee", "$6"],
  ];

  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-6 rounded-[40px] bg-[#91C66A]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-[#E4EAE3] bg-white shadow-2xl shadow-[#253B31]/10">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#253B31] text-sm font-black text-white">
              D
            </div>
            <span className="text-sm font-bold text-[#253B31]">
              Dinevo POS
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#91C66A]" />
            System online
          </div>
        </div>

        <div className="grid grid-cols-[1fr_175px] sm:grid-cols-[1fr_205px]">
          <div className="p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Welcome back</p>
                <h3 className="text-base font-bold text-[#253B31]">
                  New order
                </h3>
              </div>
              <span className="rounded-lg bg-[#F5F8F2] px-2.5 py-1.5 text-[10px] font-bold text-[#385C43]">
                TABLE 04
              </span>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2">
              {products.map(([icon, name, price]) => (
                <div
                  key={name}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                    {icon}
                  </div>
                  <p className="text-[11px] font-bold text-slate-800">
                    {name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#385C43]">
                    {price}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#F5F8F2] p-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#253B31]">
                  Menu items
                </span>
                <span className="text-[10px] text-slate-400">View all →</span>
              </div>
            </div>
          </div>

          <div className="border-l border-slate-100 bg-slate-50/80 p-3 sm:p-4">
            <p className="mb-4 text-xs font-bold text-[#253B31]">
              Current order
            </p>

            <div className="space-y-3">
              {[
                ["Classic Burger", "1 × $12"],
                ["Cold Coffee", "2 × $6"],
                ["Garden Salad", "1 × $9"],
              ].map(([name, detail]) => (
                <div key={name} className="border-b border-slate-200 pb-3">
                  <p className="text-[10px] font-semibold text-slate-700">
                    {name}
                  </p>
                  <p className="mt-1 text-[9px] text-slate-400">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2">
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Subtotal</span>
                <span>$33.00</span>
              </div>
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Tax</span>
                <span>As applicable</span>
              </div>
              <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-xs font-bold text-[#253B31]">
                <span>Total</span>
                <span>$33.00 + tax</span>
              </div>
              <div className="mt-3 rounded-lg bg-[#253B31] py-2.5 text-center text-[10px] font-bold text-white">
                Proceed to checkout
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-white px-5 py-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Restaurant POS preview</span>
            <span>Designed for speed.</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
        <p className="text-[10px] text-slate-400">
          Simple restaurant operations
        </p>
        <p className="mt-1 text-sm font-bold text-[#253B31]">
          One platform. More control.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#253B31]">
      {/* Navigation */}
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
      <section className="relative isolate">
        <div className="absolute -right-40 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-[#EDF4E9] blur-3xl" />
        <div className="absolute -left-40 top-64 -z-10 h-72 w-72 rounded-full bg-[#F5F8F2] blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#DCE9D6] bg-white px-4 py-2 text-xs font-semibold text-[#385C43] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#91C66A]" />
              A smarter way to run your restaurant
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-[-0.055em] text-[#253B31] sm:text-6xl lg:text-[68px]">
              Your restaurant.
              <br />
              Your orders.
              <br />
              <span className="text-[#729E53]">Under control.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Meet Dinevo — a modern restaurant POS built to make everyday
              operations simpler. Manage orders, organise your menu and keep
              your team moving.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#253B31] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#253B31]/15 transition hover:-translate-y-1 hover:bg-[#385C43]"
              >
                Explore pricing →
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-[#DCE5DA] bg-white px-7 py-4 text-sm font-bold text-[#253B31] transition hover:border-[#91C66A] hover:bg-[#F5F8F2]"
              >
                Discover Dinevo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200 pt-7 text-xs font-medium text-slate-500">
              <span>✓ Restaurant-focused</span>
              <span>✓ Simple pricing</span>
              <span>✓ Built to grow</span>
            </div>
          </div>

          <div className="px-1 py-5 sm:px-5">
            <PosPreview />
          </div>
        </div>
      </section>

      {/* Brand highlights */}
      <section className="border-y border-[#E8EEE6] bg-[#F5F8F2]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-9 sm:grid-cols-3 sm:px-8">
          {[
            ["SIMPLICITY", "Easy-to-use restaurant workflows"],
            ["FLEXIBILITY", "Designed around your operations"],
            ["GROWTH", "Plans for single outlets and larger groups"],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center gap-4 sm:justify-center">
              <div className="h-9 w-1 rounded-full bg-[#91C66A]" />
              <div>
                <p className="text-[10px] font-extrabold tracking-[0.18em] text-[#729E53]">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#253B31]">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Everything in one place</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight text-[#253B31] sm:text-5xl">
              Less complexity.
              <br />
              <span className="text-[#729E53]">More control.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              The essential tools to help your restaurant manage its daily
              operations, without unnecessary complexity.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-[#E4EAE3] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#BBD4AD] hover:shadow-xl hover:shadow-[#253B31]/5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5EC] text-2xl font-semibold text-[#385C43] transition group-hover:bg-[#253B31] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-300">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-7 text-lg font-bold text-[#253B31]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 bg-[#253B31] px-5 py-24 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionLabel>Simple by design</SectionLabel>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Spend less time
              <br />
              managing software.
              <br />
              <span className="text-[#A9D58C]">More time serving.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-[#D0DAD1]">
              Dinevo is designed to make the point-of-sale experience
              straightforward for restaurant owners and staff.
            </p>
            <a
              href="#pricing"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#91C66A] px-6 py-3.5 text-sm font-bold text-[#253B31] transition hover:bg-[#A9D58C]"
            >
              See our plans →
            </a>
          </div>

          <div className="space-y-4">
            {[
              ["01", "Set up your restaurant", "Configure your restaurant and organise your menu."],
              ["02", "Start taking orders", "Use the POS interface to add items and manage customer orders."],
              ["03", "Complete checkout", "Review the order and complete the billing process."],
              ["04", "Grow your operations", "Build your setup around your restaurant's changing needs."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.09]"
              >
                <span className="text-sm font-black text-[#A9D58C]">{number}</span>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#D0DAD1]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Transparent pricing</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight text-[#253B31] sm:text-5xl">
              Straightforward plans.
              <br />
              <span className="text-[#729E53]">No surprises.</span>
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              Choose the subscription duration that works for your restaurant.
              Every standard licence is priced per restaurant.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E0E8DE] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold text-slate-500">6-month plan</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight text-[#253B31]">
                  $250
                </span>
                <span className="pb-2 text-sm text-slate-500">
                  / restaurant
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">For 6 months</p>
              <div className="my-7 h-px bg-slate-100" />
              <ul className="space-y-4 text-sm text-slate-600">
                <li>✓ One restaurant licence</li>
                <li>✓ 6-month subscription period</li>
                <li>✓ Access to standard Dinevo features</li>
                <li>✓ 7-day refund policy</li>
              </ul>
              <a
                href={`mailto:${email}?subject=Dinevo%206-month%20plan`}
                className="mt-9 flex w-full items-center justify-center rounded-full border border-[#C9D8C5] px-6 py-3.5 text-sm font-bold text-[#253B31] transition hover:border-[#253B31] hover:bg-[#F5F8F2]"
              >
                Enquire about this plan
              </a>
            </div>

            <div className="relative rounded-3xl border-2 border-[#729E53] bg-white p-8 shadow-xl shadow-[#253B31]/10">
              <div className="absolute -top-3 right-7 rounded-full bg-[#253B31] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                Best value
              </div>
              <p className="text-sm font-bold text-[#385C43]">Annual plan</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight text-[#253B31]">
                  $450
                </span>
                <span className="pb-2 text-sm text-slate-500">
                  / restaurant
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-500">For 1 year</p>
              <div className="my-7 h-px bg-slate-100" />
              <ul className="space-y-4 text-sm text-slate-600">
                <li>✓ One restaurant licence</li>
                <li>✓ 12-month subscription period</li>
                <li>✓ Access to standard Dinevo features</li>
                <li>✓ 7-day refund policy</li>
              </ul>
              <a
                href={`mailto:${email}?subject=Dinevo%20annual%20plan`}
                className="mt-9 flex w-full items-center justify-center rounded-full bg-[#253B31] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#385C43]"
              >
                Enquire about this plan
              </a>
            </div>
          </div>

          <p className="mt-7 text-center text-xs text-slate-400">
            All prices are in US Dollars (USD) and are charged per restaurant.
            Applicable taxes, if any, will be communicated before purchase.
          </p>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise" className="scroll-mt-24 px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#253B31] px-7 py-14 text-white sm:px-14 sm:py-16">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[60px] border-white/10" />
          <div className="absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-[#91C66A]/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#A9D58C]">
                For growing restaurant groups
              </span>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                More locations?
                <br />
                Let's talk business.
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-[#D0DAD1]">
                Purchasing more than 10 restaurant licences? Get in touch with
                our team to discuss your enterprise requirements.
              </p>
            </div>

            <a
              href={`mailto:${email}?subject=Dinevo%20Enterprise%20Enquiry`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#91C66A] px-7 py-4 text-sm font-bold text-[#253B31] shadow-xl transition hover:-translate-y-1 hover:bg-[#A9D58C]"
            >
              Contact enterprise sales ↗
            </a>
          </div>

          <p className="relative mt-10 border-t border-white/20 pt-6 text-sm text-[#D0DAD1]">
            Enterprise enquiries: {email}
          </p>
        </div>
      </section>

      {/* Refund policy */}
      <section className="border-y border-[#E8EEE6] bg-[#F5F8F2] px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="flex gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-[#385C43] shadow-sm">
              ↺
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#253B31]">
                Purchase with confidence
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                Dinevo offers a 7-day refund policy. Please review the full
                refund terms and eligibility conditions before purchasing.
              </p>
            </div>
          </div>

          <a
            href="/refund-policy"
            className="shrink-0 text-sm font-bold text-[#385C43] transition hover:text-[#729E53]"
          >
            Read refund policy →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Questions answered</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight text-[#253B31] sm:text-5xl">
              Frequently
              <br />
              asked <span className="text-[#729E53]">questions.</span>
            </h2>
            <p className="mt-5 max-w-sm leading-8 text-slate-500">
              Have another question? Our team is happy to help.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#385C43]"
            >
              Contact support ↗
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-2xl border border-[#E0E8DE] bg-white p-5 open:border-[#BBD4AD] open:bg-[#F8FAF6]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#253B31]">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F0F5EC] text-[#385C43] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-[#253B31] px-7 py-16 text-center text-white sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A9D58C]">
            Ready for a better workflow?
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Make your restaurant operations simpler with Dinevo.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#D0DAD1]">
            Get in touch with our team to find the right plan for your restaurant.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#91C66A] px-7 py-4 text-sm font-bold text-[#253B31] transition hover:bg-[#A9D58C]"
          >
            Talk to our team ↗
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
