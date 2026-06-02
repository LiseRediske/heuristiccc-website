import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Who Is Heuristic?
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            A consulting practice built on the premise that most businesses know
            AI matters — but don't know where to start.
          </p>
        </div>

        {/* Main copy block */}
        <div className="mt-12 max-w-3xl space-y-4 text-base sm:text-lg text-gray-200">
          <p>Heuristic Consulting Corporation was built to close that gap.</p>
          <p>
            The practice is led by a technologist with 35 years of engineering
            and project management experience, with deep background in
            data-sensitive, regulated environments. That background shapes how we
            approach every engagement — with rigor, honesty, and accountability.
          </p>
          <p>
            We don't hand you a roadmap and walk away. We build what we
            recommend.
          </p>
        </div>

        {/* Credential cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">35 Years</p>
            <p className="mt-2 text-sm text-gray-200/80">
              Engineering and project management experience across technology and
              regulated industries
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">Built &amp; Deployed</p>
            <p className="mt-2 text-sm text-gray-200/80">
              AI systems running in production — not demos, not prototypes
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold text-white">We Eat Our Own Cooking</p>
            <p className="mt-2 text-sm text-gray-200/80">
              Our AI receptionist answers our main business line. That is not a
              demo — that is how we operate.
            </p>
          </div>
        </div>

        {/* Callout — meet our receptionist */}
        <div className="mt-6 rounded-2xl border border-blue-500/40 bg-blue-500/5 p-6 max-w-3xl">
          <p className="text-gray-100">
            Call our main line and meet our AI receptionist:{" "}
            <a
              href="tel:+18557749933"
              className="font-semibold text-white underline hover:text-blue-300"
            >
              855-774-9933
            </a>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
          >
            Start with an Assessment
          </Link>
        </div>
      </div>
    </main>
  );
}
