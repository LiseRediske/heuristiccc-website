import { Link } from "react-router-dom";

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            From assessing your readiness to building systems that run — Heuristic
            works with you across the full AI journey.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {/* SERVICE 1 — entry product, visually prominent */}
          <section className="relative rounded-2xl border-2 border-blue-500/60 bg-blue-500/5 p-8 sm:p-10 shadow-lg shadow-blue-500/10">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gray-200/90 bg-white/10 border border-white/10 rounded-full px-3 py-1">
              Start here
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              Entry product
            </p>

            <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight">
              AI Readiness Assessment
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              A structured evaluation of your organization's readiness to adopt
              AI — people, processes, data, and infrastructure. Covers workflow,
              data, and governance dimensions.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  What you get
                </p>
                <p className="mt-1 text-sm text-gray-200/90">
                  A written report with a clear path forward. Honest findings, no
                  vendor agenda.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Timeline
                </p>
                <p className="mt-1 text-sm text-gray-200/90">
                  A few hours for small businesses. Scope and timeline scale with
                  organizational complexity.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Price
                </p>
                <p className="mt-1 text-sm text-gray-200/90">
                  Starting at $300. Scope and pricing scale with organizational
                  complexity. Full cost applied as a credit toward any Heuristic
                  implementation engagement.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/lise-heuristiccc/30min"
                target="_blank"
                rel="noopener"
                className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Schedule Your Assessment
              </a>
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-gray-300">
                Not sure if you're ready for an assessment?{" "}
                <a
                  href="/assets/AI_Systems_Architecture_White_Paper.pdf"
                  target="_blank"
                  rel="noopener"
                  className="underline text-white hover:text-blue-300"
                >
                  Download our white paper first.
                </a>
              </p>
            </div>
          </section>

          {/* SERVICE 2 — Data & Governance */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Data &amp; Governance
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              Pre-implementation data readiness — cleaning, structuring, and
              governing your data so AI systems produce reliable outputs.
              Strategic advisory only.
            </p>

            <div className="mt-8 max-w-xl">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  What you get
                </p>
                <p className="mt-1 text-sm text-gray-200/90">
                  A data foundation AI can actually use. Reduced risk of bad
                  outputs from bad inputs.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Let's Talk
              </Link>
            </div>
          </section>

          {/* SERVICE 3 — AI Implementation */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              AI Implementation
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              End-to-end build of AI-enabled systems. Voice agents, workflow
              automation, SMS/email sequences, CRM integration, and agentic
              systems.
            </p>

            <div className="mt-6 max-w-3xl rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                What are agentic systems?
              </p>
              <p className="mt-1 text-sm text-gray-200/90">
                Agentic systems are AI that take multi-step actions on behalf of
                your business — not just responding to prompts, but completing
                workflows autonomously.
              </p>
            </div>

            <div className="mt-8 max-w-xl">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  What you get
                </p>
                <p className="mt-1 text-sm text-gray-200/90">
                  A working system, not a proof of concept.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/lise-heuristiccc/30min"
                target="_blank"
                rel="noopener"
                className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Schedule a Conversation
              </a>
            </div>
          </section>

          {/* SERVICE 4 — Business AI Education */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Business AI Education
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              Most organizations aren't failing at AI because the technology
              doesn't work — they're failing because their teams don't know how
              to use it in context. Heuristic's Business AI Education workshops
              close that gap.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              We deliver practical, hands-on AI training designed around your
              industry, your tools, and your team's actual work. Sessions are
              available on-site or virtually, and are tailored to executive
              teams, operational staff, or mixed groups.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-3xl">
              Topics range from AI fundamentals for business leaders to applied
              AI workflow training for day-to-day staff.
            </p>

            <p className="mt-6 text-sm text-gray-400 max-w-3xl">
              Pricing varies by team size, format, and content depth. Contact us
              to discuss your team's needs.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
