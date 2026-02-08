import { useState } from 'react'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }





  return (
    <div className="page-container min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-8 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] animate-float" style={{ animationDuration: '18s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <i className="fa-solid fa-headset"></i>
              <span>Get In Touch</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
              We'd Love to
              <span className="block mt-4 text-shimmer">
                Hear From You
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hello? We're here to help!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-10 sm:pt-16 lg:pt-20 px-8 sm:px-12 lg:px-20 flex flex-col items-center relative overflow-hidden">
        {/* Decorative background elements for the form section */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-[140px] -z-10 animate-float" style={{ animationDuration: '22s', animationDelay: '-4s' }}></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-[140px] -z-10 animate-float" style={{ animationDuration: '25s', animationDelay: '-8s' }}></div>

        <div className="max-w-4xl w-full mx-auto relative group">
          {/* Decorative Gradient Border Wrapper */}
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-4xl blur-sm opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

          {/* Contact Form Container */}
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-4xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl glow-border-subtle">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-10 flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <i className="fa-solid fa-paper-plane text-white text-xl"></i>
                </div>
                Send Us a Message
              </h2>
            </ScrollReveal>

            {submitted ? (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <i className="fa-solid fa-check text-green-400 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                <p className="text-slate-400 text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <ScrollReveal delay={100} className="w-full">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-300 uppercase tracking-wider ml-1">
                        Your Full Name
                      </label>
                      <div className="relative group/input">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate-800/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-center focus:outline-none focus:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/60 input-glow"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={150} className="w-full">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-300 uppercase tracking-wider ml-1">
                        Email Address
                      </label>
                      <div className="relative group/input">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-slate-800/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-center focus:outline-none focus:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/60 input-glow"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={200}>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-300 uppercase tracking-wider ml-1">
                      Subject
                    </label>
                    <div className="relative group/input">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-800/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-center focus:outline-none focus:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/60 input-glow"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={250}>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-300 uppercase tracking-wider ml-1">
                      Your Message
                    </label>
                    <div className="relative group/input">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={12}
                        className="w-full px-6 py-4 bg-slate-800/40 border border-white/10 rounded-2xl text-white placeholder-slate-500 text-center focus:outline-none focus:border-indigo-500/50 transition-all duration-300 hover:bg-slate-800/60 resize-none input-glow"
                        placeholder="Type your message here..."
                      />
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-[200%_auto] hover:bg-right text-white font-bold text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3 mx-auto btn-shine magnetic-hover"
                  >
                    <i className="fa-solid fa-paper-plane group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                    Send Message
                  </button>
                </ScrollReveal>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Connected Nodes Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-48 lg:gap-24">

          {/* Node Pair 1: Community */}
          <div className="relative flex items-center justify-center h-[400px]">
            <svg className="absolute w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 400">
              {/* Path to Deep Paths */}
              <path
                d="M 200 200 Q 250 220 280 280"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-[dash_20s_linear_infinite]"
              />
              {/* Path to Accurate Answers */}
              <path
                d="M 200 200 Q 150 120 100 80"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
                className="animate-[dash_15s_linear_infinite_reverse]"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="group relative z-20">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-40 h-40 rounded-full bg-slate-900 border border-indigo-500/30 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-500 shadow-2xl relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                  <i className="fa-solid fa-microchip text-2xl text-indigo-400"></i>
                </div>
                <span className="text-white font-bold text-sm tracking-widest uppercase">Precision</span>
              </div>
            </div>

            <div className="absolute top-[260px] left-[230px] group animate-float" style={{ animationDelay: '-2s' }}>
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center transform hover:rotate-6 transition-all animate-pulse-slow">
                <span className="text-purple-400 font-black text-lg mb-1 leading-tight">Deep Paths</span>
                <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Unique Detailed Nodes</span>
              </div>
            </div>

            {/* NEW: Accurate Answers Circle */}
            <div className="absolute top-[30px] left-[30px] group animate-float" style={{ animationDelay: '-3s' }}>
              <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-3 text-center transform hover:-rotate-12 transition-all animate-pulse-slow">
                <span className="text-indigo-400 font-black text-sm mb-1 leading-tight">Exact Answers</span>
                <span className="text-slate-500 text-[8px] font-bold uppercase tracking-widest">Tailored Per Request</span>
              </div>
            </div>
          </div>

          {/* Node Pair 2: Roadmaps */}
          <div className="relative flex items-center justify-center h-[400px]">
            <svg className="absolute w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 400">
              <path
                d="M 200 200 Q 150 180 120 120"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-[dash_20s_linear_infinite]"
              />
              <defs>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="group relative z-20">
              <div className="absolute inset-0 bg-pink-500 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
              <div className="w-40 h-40 rounded-full bg-slate-900 border border-pink-500/30 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-500 shadow-2xl relative z-10">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-3 group-hover:bg-pink-500/20 transition-colors">
                  <i className="fa-solid fa-map text-2xl text-pink-400"></i>
                </div>
                <span className="text-white font-bold text-sm tracking-widest uppercase">Roadmaps</span>
              </div>
            </div>

            <div className="absolute top-[50px] left-[80px] group animate-float" style={{ animationDelay: '-1s' }}>
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center transform hover:rotate-12 transition-all animate-pulse-slow">
                <span className="text-pink-400 font-black text-lg mb-1 leading-tight">Any Topic</span>
                <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Unlimited Subjects</span>
              </div>
            </div>
          </div>

          {/* Node Pair 3: Support */}
          <div className="relative flex items-center justify-center h-[400px]">
            <svg className="absolute w-full h-full pointer-events-none overflow-visible" viewBox="0 0 400 400">
              <path
                d="M 200 200 Q 230 190 240 180"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-[dash_20s_linear_infinite]"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="group relative z-20">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-40 h-40 rounded-full bg-slate-900 border border-purple-500/30 flex flex-col items-center justify-center cursor-pointer transform hover:scale-110 transition-all duration-500 shadow-2xl relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
                  <i className="fa-solid fa-headset text-2xl text-purple-400"></i>
                </div>
                <span className="text-white font-bold text-sm tracking-widest uppercase">Support</span>
              </div>
            </div>

            <div className="absolute top-[120px] left-[180px] group animate-float" style={{ animationDelay: '-4s' }}>
              <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center transform hover:-rotate-6 transition-all animate-pulse-slow">
                <span className="text-cyan-400 font-black text-xl mb-1">&lt; 2h</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">Response Time</span>
              </div>
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes dash {
            to {
              stroke-dashoffset: -100;
            }
          }
        `}} />
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
