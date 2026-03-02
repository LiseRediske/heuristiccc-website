export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="bg-gray-950 text-white px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Heuristic Consulting Corporation
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              AI Systems Architecture & Automation for Professional Firms
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded text-sm font-semibold"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build AI Systems That Work in Production
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We design and implement LLM-powered systems, retrieval frameworks,
            and automation workflows that reduce manual work, improve
            operational velocity, and maintain governance-first control.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded font-semibold"
          >
            Schedule a Strategy Discussion
          </a>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          What You Get
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">AI Workflow Automation</h4>
            <p>
              Replace repetitive manual processes with structured automation
              systems designed for reliability and measurable ROI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Grounded Knowledge Systems</h4>
            <p>
              Retrieval-Augmented Generation (RAG) architectures that ensure
              AI outputs are based on your real documents and policies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Governance & Control</h4>
            <p>
              Role-based access, approval loops, and risk controls built into
              every AI deployment.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Core Services
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold mb-2">AI Automation Implementation</h4>
              <p>
                End-to-end design and deployment of AI-driven workflow systems,
                including documentation and operational controls.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold mb-2">AI Knowledge Systems (RAG)</h4>
              <p>
                Build internal intelligence systems powered by embeddings,
                vector search, and structured retrieval pipelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold mb-2">AI Agents & Tool Integration</h4>
              <p>
                Deploy agents that plan and act across tools such as CRM,
                spreadsheets, email, and content systems with guardrails.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-semibold mb-2">Governance & Risk Advisory</h4>
              <p>
                Align AI deployments with compliance, operational discipline,
                and measurable accountability frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHITE PAPER SECTION (placeholder for now) */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          AI Systems Architecture White Paper
        </h3>
        <p className="mb-6">
          A practical implementation guide covering LLMs, RAG, agents,
          context engineering, and governance frameworks.
        </p>
        <a
          href="#contact"
          className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Request White Paper
        </a>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Contact Us
        </h3>

        <form
          name="contact-form"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input type="hidden" name="bot-field" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />

          <textarea
            name="message"
            placeholder="Describe your AI objective"
            required
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500 w-full"
          >
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-white text-center p-6 mt-10">
        <p>Contact: 612-404-6281 | info@heuristiccc.com</p>
        <p>&copy; {new Date().getFullYear()} Heuristic Consulting Corporation</p>
      </footer>

    </main>
  );
}
