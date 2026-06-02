import { Link } from "react-router-dom";

export default function Home() {

  const encode = (data) => new URLSearchParams(data).toString();

  const ensureLeadSummaryPresent = (formEl) => {
    if (!formEl) return;

    const leadSummaryValue =
      document.getElementById("framework_lead_summary")?.value ||
      "";

    const field = formEl.querySelector('input[name="lead_summary"]');
    if (field) {
      field.value = leadSummaryValue;
      field.setAttribute("value", leadSummaryValue);
    }
  };

  const handleFrameworkSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    ensureLeadSummaryPresent(form);

    const formData = new FormData(form);

    const payload = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = value;
    }

    payload["form-name"] = "framework-download";

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload)
      });

      window.location.assign("/framework-download");
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gray-200/90 bg-white/10 border border-white/10 rounded-full px-3 py-1">
              Production-first AI delivery
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              Architecture • Automation • Governance
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              From AI Curiosity to AI Capability
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              We assess where you stand, prepare your data, and build AI systems
              that actually work.
            </p>

            {/* THREE ENTRY POINTS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-white">Assess</p>
                <p className="mt-2 text-sm text-gray-200/80">
                  Understand where your business stands on AI readiness
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-white">Prepare</p>
                <p className="mt-2 text-sm text-gray-200/80">
                  Clean data, governance, and the right foundation
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-white">Build</p>
                <p className="mt-2 text-sm text-gray-200/80">
                  Implemented, working AI systems — including agentic systems
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/services"
                className="flex w-full justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Start with an Assessment
              </Link>
              <a
                href="https://calendly.com/lise-heuristiccc/30min"
                target="_blank"
                rel="noopener"
                className="flex w-full justify-center rounded-md border border-white/30 px-6 py-3 hover:bg-white/10 transition"
              >
                Schedule a strategy discussion
              </a>
              <a
                href="#services"
                className="flex w-full justify-center rounded-md border border-white/30 px-6 py-3 hover:bg-white/10 transition"
              >
                See capabilities
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-200/90">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Reliable automation</p>
                <p className="mt-1 text-gray-200/80">Designed for uptime and traceability</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Grounded outputs</p>
                <p className="mt-1 text-gray-200/80">RAG tied to your internal sources</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Risk controls</p>
                <p className="mt-1 text-gray-200/80">Approvals, roles, governance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-gray-950 text-gray-100 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Real systems, already running
            </h3>
            <p className="mt-3 text-gray-300">
              Not demos — deployed work in real operational environments.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">
                AI Voice Receptionist
              </h4>
              <p className="mt-2 text-gray-200/80">
                Deployed for an IT support company. Staff adopted immediately.
                Intake handled without human intervention.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">
                Social Media Automation
              </h4>
              <p className="mt-2 text-gray-200/80">
                Live, paying client. Crafted for Courage automated their content
                pipeline end to end.
              </p>
            </div>
          </div>

          {/* Callout — we use what we build */}
          <div className="mt-6 rounded-2xl border border-blue-500/40 bg-blue-500/5 p-6">
            <p className="text-gray-100">
              We use what we build. Call our main line and meet our AI
              receptionist:{" "}
              <a
                href="tel:+18557749933"
                className="font-semibold text-white underline hover:text-blue-300"
              >
                855-774-9933
              </a>
            </p>
          </div>

          {/* SECONDARY CTA */}
          <div className="mt-10">
            <Link
              to="/solutions"
              className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* FRAMEWORK DOWNLOAD (EMAIL GATE) */}
      <section id="framework-download" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            AI Automation Implementation Framework
          </h3>

          <p className="text-gray-600 mb-2">
            A 3-page worksheet that helps teams evaluate whether a workflow is a strong candidate for AI automation.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            Takes less than 3 minutes.
          </p>

          <form
            name="framework-download"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/framework-download"
            onSubmit={handleFrameworkSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="framework-download" />
            <input type="hidden" name="request_type" value="framework_download" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" id="framework_lead_summary" name="lead_summary" value="pending_summary_capture" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full p-4 border rounded"
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full p-4 border rounded"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full p-4 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 border rounded"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="tel"
                name="phone_area"
                placeholder="Area Code (e.g., 612)"
                inputMode="numeric"
                pattern="[0-9]{3}"
                maxLength={3}
                required
                className="w-full p-4 border rounded"
              />

              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number (e.g., 5551234)"
                inputMode="numeric"
                pattern="[0-9]{7}"
                maxLength={7}
                required
                className="w-full p-4 border rounded"
              />
            </div>

            <select
              name="timeline"
              required
              className="w-full p-4 border rounded text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                When are you looking to implement automation?
              </option>
              <option value="researching">Researching</option>
              <option value="3-6 months">3–6 months</option>
              <option value="immediate">Immediate</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded"
            >
              Download the 3-Minute Automation Evaluation Framework
            </button>

            <div className="pt-3 text-sm text-gray-600">
              <p className="font-medium text-gray-800">
                Want a fast answer on whether your workflow is a good automation candidate?
              </p>
              <p className="mt-1">
                Book a strategy call and we’ll map the workflow, constraints, and next steps.
              </p>
              <div className="mt-3">
                <a
                  href="https://calendly.com/lise-heuristiccc/30min"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              US phone format only. Example: 612 and 5551234.
            </p>
          </form>
        </div>
      </section>

    </main>
  );
}