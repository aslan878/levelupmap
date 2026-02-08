import Logo from './Logo'

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Create personalized learning roadmaps with AI. Transform your goals into actionable step-by-step guides powered by LevelUp Map.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-indigo-500/20 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all" title="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="mailto:levelupmap121@gmail.com" className="w-10 h-10 rounded-lg bg-white/5 hover:bg-indigo-500/20 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all" title="Email Us">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('generator')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <i className="fa-solid fa-envelope text-indigo-400"></i>
                <span>levelupmap121@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <i className="fa-solid fa-location-dot text-indigo-400"></i>
                <span>Taraz, Kazakhstan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 LevelUp Map. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
