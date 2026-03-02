export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Heuristic Consulting Corporation
            </h1>
            <p className="text-xs text-gray-500">
              AI Systems Architecture & Automation
            </p>
          </div>
          <a
            href="#contact"
            className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
          >
            Strategy Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Build AI Systems That Operate in Production
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            We architect and deploy LLM-powered systems, retrieval frameworks,
            and intelligent automation pipelines that replace manual work and
            produce measurable operational leverage.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Schedule a Strategy Discussion
            </a>
            <a
              href="#whitepaper"
              className="border border-gray-500 px-8 py-4 rounded-md hover:bg-gray-800 transition"
            >
              View White Paper
            </a>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-16">
            Production-Grade Outcomes
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Automation at Scale
              </h4>
              <p className="text-gray-600">
                Replace repetitive workflows with structured AI pipelines
                designed for reliability, traceability, and measurable ROI.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Grounded Intelligence
              </h4>
              <p className="text-gray-600">
                Retrieval-Augmented Generation systems that ensure outputs are
                based on your internal documents and policies—not hallucinations.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">
                Governance Built In
              </h4>
              <p className="text-gray-600">
                Role controls, approval loops, and risk frameworks embedded
                directly into every deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-16">
            Core Capabilities
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "AI Automation Implementation",
                desc: "Design and deploy structured AI workflows with documentation and operational controls."
              },
              {
                title: "AI Knowledge Systems (RAG)",
                desc: "Vectorized document intelligence pipelines delivering grounded responses."
              },
              {
                title: "AI Agents & Tool Integration",
                desc: "Tool-using agents with planning loops and human-in-the-loop safeguards."
              },
              {
                title: "Governance & Risk Advisory",
                desc: "Policy-aligned AI adoption with measurable accountability frameworks."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE PAPER */}
      <section id="whitepaper" className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">
            AI Systems Architecture White Paper
          </h3>
          <p className="text-gray-600 mb-8">
            A structured guide covering LLM foundations, RAG systems, agent design,
            context engineering, and governance frameworks for professional firms.
          </p>
          <a
            href="#contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-md hover:bg-gray-800 transition"
          >
            Request White Paper
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Start the Conversation
          </h3>

          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-md text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-md text-black"
            />

            <textarea
              name="message"
              placeholder="Describe your AI objective"
              required
              className="w-full p-4 rounded-md text-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 py-4 rounded-md font-semibold hover:bg-blue-500 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-8 text-sm">
        <p>612-404-6281 | info@heuristiccc.com</p>
        <p className="mt-2">
          © {new Date().getFullYear()} Heuristic Consulting Corporation
        </p>
      </footer>
    </main>
  );
}