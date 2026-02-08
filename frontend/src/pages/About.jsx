import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export default function About({ onNavigate }) {
  const team = [
    {
      name: 'Aslan Abdulayev',
      role: 'Full-stack developer',
      image: 'Aslan.jpg',
      bio: 'He love for clean code. The website works because of its code.',
      github: '#'
    },
    {
      name: 'Oleg Volosov',
      role: 'Frontend developer / D3.js',
      image: 'Oleg_v2.png',
      bio: 'Invented the roadmap and fully built the entire visual part of the website.',
      github: '#'
    },
    {
      name: 'Danial Kabylkan',
      role: 'Frontend/Web3',
      image: 'Danial.jpg',
      bio: 'React, Node.js, Solana. 2nd place at Solana Day, sponsored by Decentrathon.',
      github: '#'
    }
  ]

  const values = [
    {
      icon: 'fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge AI solutions that make learning accessible to everyone.'
    },
    {
      icon: 'fa-users',
      title: 'Community',
      description: 'We believe in the power of community and strive to create tools that bring people together on their learning journeys.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Trust',
      description: 'Privacy and security are at the core of everything we build. Your data is safe with us.'
    },
    {
      icon: 'fa-heart',
      title: 'Passion',
      description: 'We are passionate about education and believe everyone deserves access to personalized learning paths.'
    }
  ]

  return (
    <div className="page-container min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-8 sm:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <i className="fa-solid fa-info-circle"></i>
              <span>About LevelUp Map</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-['Outfit'] tracking-tight title-reaction">
              Empowering Your Learning
              <span className="block mt-2 text-shimmer">
                Journey With AI
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We're on a mission to democratize education by providing intelligent, personalized roadmaps for any learning goal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 sm:py-48 lg:py-64 px-8 sm:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center flex flex-col items-center">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight font-['Plus_Jakarta_Sans']">Our Story</h2>
            </ScrollReveal>
            <div className="space-y-6 text-slate-400 text-lg max-w-3xl text-center mx-auto">
              <ScrollReveal delay={200}>
                <p>
                  LevelUp Map was born from a simple observation: too many people give up on their goals because they don't know where to start or how to progress.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p>
                  Founded in Taraz, Kazakhstan, we set out to create a tool that would make learning pathways clear and achievable for everyone, regardless of their background or experience level.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p>
                  By combining the power of Google's Gemini AI with intuitive visualization, we've created a platform that turns ambitious goals into actionable, step-by-step plans.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 sm:py-48 lg:py-64 px-8 sm:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="h-[70px]"></div> {/* Explicit 70px gap from top */}
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight font-['Plus_Jakarta_Sans']">Our Values</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-400 text-lg">The principles that guide everything we do</p>
            </ScrollReveal>
          </div>
          <div style={{ height: '35px' }}></div> {/* Forced spacing of 35px */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all text-center group flex flex-col items-center h-full card-tilt glow-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-[70px] group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all icon-spin">
                    <i className={`fa-solid ${value.icon} text-white text-2xl transition-transform`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 sm:py-48 lg:py-64 px-8 sm:px-12 lg:px-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div style={{ height: '45px' }}></div> {/* Forced spacing of 45px from top */}
          <div className="text-center">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight font-['Plus_Jakarta_Sans']">Meet Our Team</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-400 text-lg">The passionate people behind LevelUp Map</p>
            </ScrollReveal>
          </div>
          <div style={{ height: '35px' }}></div> {/* Forced spacing of 35px */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/20 transition-all text-center group flex flex-col items-center h-full hover-lift"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500/30 group-hover:border-indigo-500 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={member.style || {}}
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-slate-900 flex items-center justify-center">
                      <i className="fa-solid fa-check text-white text-xs"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-indigo-400 mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-500/20 flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-all">
                      <i className="fa-brands fa-github text-sm"></i>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* Spacer */}
      <div className="h-[170px]"></div>

      <Footer onNavigate={onNavigate} />
    </div>
  )
}
