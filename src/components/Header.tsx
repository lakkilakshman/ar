import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useTheme } from '@/routes/__root'
import { Menu, X, Sun, Moon, Shirt } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/order', label: 'Order Form' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { dark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: 'var(--header-bg)',
        borderBottom: '1px solid var(--border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline group py-2">
            <img 
              src="/logo.png" 
              alt="Arvesta Clothing" 
              className="h-16 w-auto transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium tracking-wide transition-colors duration-200 no-underline"
                style={{ color: 'var(--text-muted)' }}
                activeProps={{ style: { color: 'var(--accent)' } }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
              }}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA */}
            <a
              href={`https://wa.me/919421612355`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden sm:inline-flex text-xs py-2 px-4"
            >
              Get Quote
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded flex items-center justify-center"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ background: 'var(--header-bg)', borderColor: 'var(--border)' }}
        >
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded text-sm font-medium no-underline transition-colors duration-200"
                style={{ color: 'var(--text)' }}
                activeProps={{ style: { color: 'var(--accent)', backgroundColor: 'var(--surface)' } }}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/919421612355"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center"
              style={{ fontSize: '0.875rem' }}
            >
              Get Quote on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
