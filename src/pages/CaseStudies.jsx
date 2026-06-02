const caseStudies = [
  {
    badge: "AI Implementation",
    heading: "AI Voice Receptionist Deployment",
    client: "IT Support Company (name withheld)",
    problem:
      "High call volume, inconsistent intake, and staff time lost to manual triage. Every call required a human to capture information and route the request.",
    built:
      "An AI voice receptionist integrated with the client's ticketing system. The system captures caller information, creates tickets automatically, and routes calls intelligently — without human intervention.",
    result:
      "Staff adopted immediately. Intake is now handled without manual effort.",
  },
  {
    badge: "AI Implementation",
    heading: "Social Media Content Automation",
    client: "Crafted for Courage",
    problem:
      "Manual content creation was time-consuming and inconsistent. The team needed a reliable content pipeline that didn't depend on someone sitting down to write every post.",
    built:
      "An automated content pipeline built on Anthropic, n8n, and Blotato. The system drafts, schedules, and publishes content — from brief to published post — without manual effort.",
    result:
      "Active paying subscription. Consistent content output without manual effort.",
  },
];

function DetailBlock({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-gray-200/90">{children}</p>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            What We've Built
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Real systems, deployed in real environments. Here's what we've
            delivered.
          </p>
        </div>

        {/* Case studies — matched pair */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <section
              key={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <p className="inline-flex self-start items-center gap-2 text-xs font-semibold tracking-wide text-gray-200/90 bg-white/10 border border-white/10 rounded-full px-3 py-1">
                {cs.badge}
              </p>

              <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight">
                {cs.heading}
              </h2>

              <p className="mt-2 text-sm text-gray-300">
                Client: {cs.client}
              </p>

              <div className="mt-6 space-y-5">
                <DetailBlock label="Problem">{cs.problem}</DetailBlock>
                <DetailBlock label="What Was Built">{cs.built}</DetailBlock>
                <DetailBlock label="Result">{cs.result}</DetailBlock>
              </div>
            </section>
          ))}
        </div>

        {/* Closing callout */}
        <div className="mt-10 rounded-2xl border border-blue-500/40 bg-blue-500/5 p-8 max-w-3xl">
          <p className="text-gray-100">
            More case studies coming as engagements close. If you'd like to
            discuss what we could build for your organization — let's talk.
          </p>
          <div className="mt-6">
            <a
              href="https://calendly.com/lise-heuristiccc/30min"
              target="_blank"
              rel="noopener"
              className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
            >
              Schedule a Conversation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
