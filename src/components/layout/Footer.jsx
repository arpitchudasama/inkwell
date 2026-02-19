import { Link } from 'react-router-dom'

const LINKS = {
  Platform: [
    { label: 'Blog',    to: '/blog'    },
    { label: 'About',   to: '/about'   },
    { label: 'Contact', to: '/contact' },
  ],
  Account: [
    { label: 'Sign In',        to: '/login'  },
    { label: 'Create Account', to: '/signup' },
  ],
}

const SOCIALS = ['𝕏', 'in', 'gh']

/**
 * Footer — dark themed footer with navigation links and socials.
 */
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-black text-[22px] tracking-tight leading-none block mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Inkwell
              </span>
              <span className="text-white">.</span>
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6 font-sans">
              Ideas worth reading. A platform for serious writers and curious readers.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-xl bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 text-xs font-bold font-sans flex items-center justify-center"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="text-white font-bold text-sm mb-4 font-sans">{title}</p>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-500 hover:text-indigo-400 text-sm transition-colors font-sans"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 font-sans">
            © 2026 Inkwell. Built with React + Tailwind CSS.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Terms'].map((t) => (
              <button key={t} className="text-xs text-slate-600 hover:text-slate-400 transition-colors font-sans">
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
