import React, { useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import InteractiveHero from '../components/InteractiveHero'
import AntigravityCards from '../components/AntigravityCards'
import ScrollReveal from '../components/ScrollReveal'

export default function Home({ onNavigate }) {
  const sectionRefs = useRef([])

  useEffect(() => {
    // Legacy observer removed in favor of ScrollReveal
  }, [])

  const features = [
    {
      icon: 'fa-brain',
      title: 'AI-Powered',
      description: 'Advanced AI analyzes your goals and creates personalized, actionable roadmaps tailored to your needs.'
    },
    {
      icon: 'fa-route',
      title: 'Visual Roadmaps',
      description: 'Interactive graph visualization helps you see the complete journey from start to finish.'
    },
    {
      icon: 'fa-language',
      title: 'Multi-Language',
      description: 'Write your goals in any language - our AI responds in your preferred language automatically.'
    },
    {
      icon: 'fa-clock',
      title: 'Time Estimates',
      description: 'Get realistic time estimates for each step to plan your learning journey effectively.'
    },
    {
      icon: 'fa-check-double',
      title: 'Progress Tracking',
      description: 'Mark steps as complete and track your progress visually as you advance.'
    },
    {
      icon: 'fa-infinity',
      title: 'Unlimited Goals',
      description: 'Create roadmaps for any goal - from learning programming to starting a business.'
    }
  ]

  return (
    <div className="page-container min-h-screen relative overflow-hidden">
      {/* Global Atmospheric Blobs */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" style={{ animationDuration: '15s' }}></div>
      <div className="absolute top-[50%] -right-[5%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-float" style={{ animationDuration: '20s', animationDelay: '-5s' }}></div>
      <div className="absolute top-[80%] left-[20%] w-[700px] h-[700px] bg-indigo-500/3 rounded-full blur-[150px] pointer-events-none -z-10 animate-float" style={{ animationDuration: '25s', animationDelay: '-10s' }}></div>
      <style>{`
        .scroll-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-[70vh] flex items-center justify-center"
        style={{ paddingLeft: 'clamp(32px, 8vw, 96px)', paddingRight: 'clamp(32px, 8vw, 96px)' }}
      >
        <InteractiveHero />
        <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold mb-8 btn-shine magnetic-hover cursor-default">
              <i className="fa-solid fa-sparkles"></i>
              <span>Powered by Google Gemini AI</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-['Outfit'] tracking-tight title-reaction">
              Transform Your Goals Into
              <span className="block mt-2 text-shimmer">
                Actionable Roadmaps
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="relative"
        style={{ padding: 'clamp(80px, 10vw, 112px) clamp(32px, 8vw, 80px)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 mt-16">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 font-['Outfit'] tracking-tight"
                style={{ paddingBottom: '40px' }}>Why Choose LevelUp Map?</h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-500 group flex flex-col items-center text-center h-full card-tilt glow-border"
                >
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-500 group-hover:-translate-y-1 icon-spin">
                    <i className={`fa-solid ${feature.icon} text-white text-xl transition-transform`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="relative pt-24 pb-0 w-full flex flex-col items-center"
        style={{ paddingLeft: '110px', paddingRight: '110px' }}
      >
        <div className="w-full flex flex-col items-center">
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 font-['Outfit'] tracking-tight">Process</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p
                className="text-slate-400 text-xl"
                style={{ marginBottom: '40px' }}
              >
                Simple steps to your AI-powered career roadmap
              </p>
            </ScrollReveal>
          </div>

          <div
            className="w-full"
            style={{ marginBottom: '60px' }}
          >
            <AntigravityCards />
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
