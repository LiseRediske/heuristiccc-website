import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AIAssistantWidget from "./components/AIAssistantWidget";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Solutions from "./pages/Solutions.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER (global — renders below every page) */}
      <footer className="bg-black text-gray-400 text-center py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-medium text-gray-300">612-404-6281</p>
          <p className="mt-1">lise@heuristiccc.com</p>
          <p className="mt-4">
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-600">·</span>
            <a
              href="/terms"
              className="text-gray-300 hover:text-white underline-offset-2 hover:underline"
            >
              SMS Terms
            </a>
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Heuristic Consulting Corporation
          </p>
        </div>
      </footer>

      <AIAssistantWidget />
    </>
  );
}
