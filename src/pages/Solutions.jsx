import { Link } from "react-router-dom";

const CALENDLY = "https://calendly.com/lise-heuristiccc/30min";

const tools = [
  {
    badge: "Live & Deployed",
    badgeClass: "bg-green-500/10 border-green-500/30 text-green-300",
    heading: "AI Voice Receptionist",
    description:
      "Answers your main business line, captures caller information, creates tickets or tasks in your system of record, and handles basic triage — without human intervention. Built on Twilio, ElevenLabs, and the Anthropic API.",
    builtOn: "Twilio · ElevenLabs · Anthropic API",
    cta: { label: "Request a Demo", href: CALENDLY, external: true },
  },
  {
    badge: "Live & Deployed",
    badgeClass: "bg-green-500/10 border-green-500/30 text-green-300",
    heading: "Social Media Content Generator",
    description:
      "Automated content pipeline that drafts, schedules, and publishes social media content. Reduces manual content effort to near zero.",
    builtOn: "Anthropic · OpenAI · n8n · Blotato",
    cta: { label: "Request a Demo", href: CALENDLY, external: true },
  },
  {
    badge: "In Final Testing",
    badgeClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    heading: "Real Estate Marketing Tool",
    description:
      "Prospect identification, lead capture, CRM integration, AI-assisted nurture sequence, and automated follow-up for real estate brokers.",
    builtOn: "Anthropic · n8n · Supabase",
    statusNote: "Currently in final testing with a broker partner.",
    cta: { label: "Join the Waitlist", to: "/contact" },
  },
  {
    badge: "Coming Soon",
    badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    heading: "Agentic System",
    description:
      "An AI system that executes multi-step business workflows autonomously — not just responding to prompts, but completing tasks end-to-end on behalf of your team.",
    statusNote:
      "Heuristic builds these as custom engagements today. A packaged, licensable version is in development.",
    cta: { label: "Learn More", to: "/services" },
  },
  {
    badge: "Demo Available",
    badgeClass: "bg-white/5 border-white/20 text-gray-300",
    heading: "Auto Dealer AI Tool",
    description:
      "End-to-end AI-assisted customer engagement for auto dealers: webchat, voice receptionist, and backend CRM integration.",
    builtOn: "Twilio · ElevenLabs · Anthropic API",
    cta: { label: "Request a Demo", href: CALENDLY, external: true },
  },
];

function Cta({ cta }) {
  const className =
    "inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition";
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener" className={className}>
        {cta.label}
      </a>
    );
  }
  return (
    <Link to={cta.to} className={className}>
      {cta.label}
    </Link>
  );
}

export default function Solutions() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        {/* Page intro */}
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Tools built by Heuristic to solve real problems. Available to
            license. See them in action.
          </p>
        </div>

        {/* Tools — single column, full-width cards */}
        <div className="mt-14 space-y-8">
          {tools.map((tool, i) => (
            <section
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <p
                className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wide rounded-full border px-3 py-1 ${tool.badgeClass}`}
              >
                {tool.badge}
              </p>

              <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight">
                {tool.heading}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-gray-200">
                {tool.description}
              </p>

              {tool.statusNote && (
                <p className="mt-3 text-sm italic text-gray-400">
                  {tool.statusNote}
                </p>
              )}

              {tool.builtOn && (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Built on
                  </p>
                  <p className="mt-1 text-gray-200/90">{tool.builtOn}</p>
                </div>
              )}

              {/* Video placeholder */}
              <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <span className="text-sm text-gray-400">
                  Demo video coming soon
                </span>
              </div>

              <div className="mt-6">
                <Cta cta={tool.cta} />
              </div>
            </section>
          ))}
        </div>

        {/* Closing callout */}
        <div className="mt-10 rounded-2xl border border-blue-500/40 bg-blue-500/5 p-8">
          <p className="text-gray-100">
            Don't see exactly what you need? Most of what we build is custom.
            Tell us what problem you're solving.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
