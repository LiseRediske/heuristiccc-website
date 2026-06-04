import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const formData = new FormData(e.target);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      setError(true);
    }
  };

  const inputClass =
    "w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-gray-100 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 transition";
  const labelClass = "block text-sm font-medium text-gray-200";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Whether you're ready to start an assessment or just have questions —
            we're easy to reach.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Contact form */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            {submitted ? (
              <p className="text-lg font-medium text-gray-100">
                Thanks — we'll be in touch shortly.
              </p>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Netlify Forms identifier */}
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className={`mt-1 ${inputClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    className={`mt-1 ${inputClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className={`mt-1 ${inputClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className={`mt-1 ${inputClass}`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`mt-1 ${inputClass}`}
                  />
                </div>

                {/* SMS opt-in — exact wording required for A2P SMS compliance */}
                <label
                  htmlFor="sms_opt_in"
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/5 p-4 text-sm text-gray-200 leading-relaxed cursor-pointer hover:border-white/20"
                >
                  <input
                    id="sms_opt_in"
                    type="checkbox"
                    name="sms_opt_in"
                    value="yes"
                    style={{ accentColor: "#2563eb" }}
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer appearance-auto bg-white"
                  />
                  <span>
                    I agree to receive SMS messages from Heuristic Consulting
                    Corporation. Message and data rates may apply. Reply STOP to
                    opt out. View
                    our{" "}
                    <a
                      href="/terms"
                      className="underline text-white hover:text-blue-300"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy"
                      className="underline text-white hover:text-blue-300"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or reach us directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Direct contact + receptionist note */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold text-white">Reach us directly</h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="tel:+18557749933"
                      className="text-gray-100 hover:text-blue-300"
                    >
                      855-774-9933
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="mailto:info@heuristiccc.com"
                      className="text-gray-100 hover:text-blue-300"
                    >
                      info@heuristiccc.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Calendly
                  </dt>
                  <dd className="mt-1">
                    <a
                      href="https://calendly.com/lise-heuristiccc/30min"
                      target="_blank"
                      rel="noopener"
                      className="text-gray-100 hover:text-blue-300"
                    >
                      Schedule a Call
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* AI receptionist note */}
            <div className="rounded-2xl border border-blue-500/40 bg-blue-500/5 p-6">
              <p className="text-sm text-gray-100">
                When you call, you may be greeted by our AI receptionist. That's
                intentional — it's the same technology we build for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
