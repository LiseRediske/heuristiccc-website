export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold">Heuristic Consulting Corporation</h1>
        <p className="text-sm">Expert Staffing in Project Management & Cybersecurity</p>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
          At Heuristic Consulting Corporation, our mission is to connect expert talent with the companies that need them most. We specialize in project management and cybersecurity staffing—ensuring our clients have the right people to lead and protect their operations.
        </p>
      </section>

      <section className="bg-gray-100 p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Project Management Staffing</li>
          <li>Cybersecurity Professional Placement</li>
          <li>Consulting Solutions for Business Operations</li>
        </ul>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
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
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
          <input type="file" name="file" accept=".pdf,.doc,.docx" className="w-full" />
          <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </section>

      <footer className="bg-blue-900 text-white text-center p-4 mt-6">
        <p>Contact: 612-404-6281 | info@heuristiccc.com</p>
        <p>&copy; {new Date().getFullYear()} Heuristic Consulting Corporation</p>
      </footer>
    </main>
  );
}