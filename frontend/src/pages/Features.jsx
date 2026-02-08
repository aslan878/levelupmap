export default function Features() {
  const features = [
    {
      icon: 'fa-brain',
      color: 'indigo',
      title: 'AI-Powered Generation',
      description: 'Our advanced AI analyzes your goals and creates personalized learning paths tailored to your specific needs and experience level.',
    },
    {
      icon: 'fa-diagram-project',
      color: 'purple',
      title: 'Interactive Visualization',
      description: 'Beautiful node-based graphs make it easy to see the big picture and understand relationships between different learning milestones.',
    },
    {
      icon: 'fa-chart-line',
      color: 'pink',
      title: 'Progress Tracking',
      description: 'Mark tasks as complete and watch your progress grow with real-time statistics, percentage completion, and visual indicators.',
    },
    {
      icon: 'fa-layer-group',
      color: 'blue',
      title: 'Hierarchical Structure',
      description: 'Roadmaps are organized into logical levels from main goals to detailed subtasks, making complex journeys manageable.',
    },
    {
      icon: 'fa-arrows-alt',
      color: 'green',
      title: 'Drag & Zoom',
      description: 'Fully interactive canvas with drag-and-drop nodes, zoom controls, and pan functionality for effortless navigation.',
    },
    {
      icon: 'fa-clock',
      color: 'orange',
      title: 'Time Estimates',
      description: 'Each milestone includes estimated time requirements, helping you plan your learning schedule effectively.',
    },
    {
      icon: 'fa-route',
      color: 'cyan',
      title: 'Connected Pathways',
      description: 'See how different skills and concepts connect to each other, understanding prerequisites and dependencies.',
    },
    {
      icon: 'fa-share-nodes',
      color: 'teal',
      title: 'Next Steps Guidance',
      description: 'At each milestone, see suggested next steps and related topics to continue your learning journey.',
    },
    {
      icon: 'fa-palette',
      color: 'rose',
      title: 'Beautiful Design',
      description: 'Modern, gradient-filled interface with smooth animations and a dark theme that\'s easy on the eyes.',
    },
  ]

  const colorClasses = {
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600',
    pink: 'from-pink-500 to-pink-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    cyan: 'from-cyan-500 to-cyan-600',
    teal: 'from-teal-500 to-teal-600',
    rose: 'from-rose-500 to-rose-600',
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <i className="fa-solid fa-star text-white text-2xl"></i>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to transform your goals into actionable, trackable learning paths
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900/90 rounded-2xl border border-slate-700/50 backdrop-blur hover:border-slate-600/50 transition-all flex flex-col items-center text-center h-full"
            >
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${colorClasses[feature.color]} flex items-center justify-center mb-4`}>
                <i className={`fa-solid ${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-slate-900/90 rounded-2xl border border-slate-700/50 backdrop-blur">
            <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
              <i className="fa-solid fa-magic text-purple-400"></i>
              How Our AI Works
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-300">Natural Language Processing</h3>
                <p className="text-slate-400">
                  Our AI understands your goals in plain English, extracting key concepts and learning objectives
                  to create personalized roadmaps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Knowledge Graph</h3>
                <p className="text-slate-400">
                  Built on a vast knowledge graph of skills, technologies, and learning paths that helps identify
                  the best route to your goal.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-pink-300">Adaptive Learning</h3>
                <p className="text-slate-400">
                  The system adapts to different experience levels and learning preferences, creating paths that
                  are challenging but achievable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Continuous Improvement</h3>
                <p className="text-slate-400">
                  Our models are constantly updated with the latest industry trends and learning best practices
                  to provide the most relevant guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-linear-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/30 backdrop-blur text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Experience It?</h2>
            <p className="text-xl text-slate-300 mb-6">
              See how our features come together to create the ultimate learning companion.
            </p>
            <a
              href="/generator"
              className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 px-10 rounded-lg transition-all shadow-lg hover:shadow-indigo-500/30"
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              Try It Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
