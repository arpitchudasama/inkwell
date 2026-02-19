import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useScrollY } from '../../hooks/useScrollY'
import Button from '../ui/Button'
import { cn } from '../../utils/helpers'

const NAV_LINKS = [
  { label: 'Blog',    to: '/blog'    },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
]

/**
 * Navbar — sticky, scroll-aware navigation with responsive mobile menu.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollY()
  const solid   = scrollY > 20

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        solid
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-black text-[22px] tracking-tight leading-none">
          <span className="gradient-text">Inkwell</span>
          <span className="text-slate-900">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 rounded-xl text-sm font-semibold font-sans transition-all duration-200',
                  isActive
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => {}}>
            <Link to="/login" className="no-underline">Sign in</Link>
          </Button>
          <Button size="sm">
            <Link to="/signup" className="text-white no-underline">Get Started →</Link>
          </Button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block px-4 py-2.5 rounded-xl text-sm font-semibold font-sans transition-colors',
                  isActive ? 'text-indigo-600 bg-indigo-50' : 'text-slate-700 hover:bg-slate-50'
                )
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="flex gap-2 pt-3 mt-2 border-t border-slate-100">
            <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">Sign in</Button>
            </Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="flex-1">
              <Button size="sm" className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
