import { useState } from 'react'
import Logo from './Logo'

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'generator', label: 'Generator', icon: 'fa-route' },
    { id: 'about', label: 'About Us', icon: 'fa-users' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center group"
          >
            <Logo className="scale-90 origin-left" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 icon-bounce underline-slide ${currentPage === item.id
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                <i className={`fa-solid ${item.icon} text-sm transition-transform`}></i>
                {item.label}
              </button>
            ))}
          </div>



          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-3 ${currentPage === item.id
                  ? 'bg-indigo-500/20 text-indigo-400'
                  : 'text-slate-300 hover:bg-white/5'
                  }`}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
