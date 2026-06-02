import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/solutions", label: "Solutions" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `text-sm transition ${
    isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
  }`;

function Brand({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="leading-tight">
      <p className="font-semibold tracking-tight text-white">
        Heuristic Consulting
      </p>
      <p className="text-xs text-gray-400">AI Systems &amp; Automation</p>
    </Link>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center justify-between">
          <Brand />
          <div className="flex items-center gap-6">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <Brand onClick={close} />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              className="text-2xl leading-none text-gray-200 hover:text-white"
            >
              ☰
            </button>
          </div>

          {open && (
            <div className="mt-4 flex flex-col gap-3">
              {links.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={close}
                  className={linkClass}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
