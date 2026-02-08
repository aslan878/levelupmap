import React, { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const ParticleCard = ({ title, description, stepNumber }) => {
    const canvasRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 120;

        // Target points for the "morphed" state (a rectangle/frame)
        const targets = [];
        const width = canvas.width;
        const height = canvas.height;
        const padding = 20;

        // Generate targets along the perimeter of a rounded rectangle
        for (let i = 0; i < particleCount; i++) {
            targets.push({
                x: Math.random() * width,
                y: Math.random() * height
            });
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.acc = 0.05;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(isHovered, target) {
                if (isHovered) {
                    // Move towards target perimeter with organic easing
                    const dx = target.x - this.x;
                    const dy = target.y - this.y;
                    this.x += dx * 0.15; // Faster convergence
                    this.y += dy * 0.15;
                    this.opacity = Math.min(0.8, this.opacity + 0.05);
                    this.size = Math.min(2, this.size + 0.1);
                } else {
                    // Drift naturally with lower friction feel
                    this.x += this.vx;
                    this.y += this.vy;
                    this.opacity = Math.max(0.15, this.opacity - 0.002);
                    this.size = Math.max(0.7, this.size - 0.005);

                    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                        this.reset();
                    }
                }
            }

            draw() {
                ctx.fillStyle = `rgba(165, 180, 252, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        // Rectangular frame targets
        const updateTargets = () => {
            const w = canvas.width - 40;
            const h = canvas.height - 40;
            const p = 20;

            for (let i = 0; i < particleCount; i++) {
                const side = i % 4;
                const progress = (i / particleCount) * 4 % 1;

                if (side === 0) { // top
                    targets[i].x = p + progress * w;
                    targets[i].y = p;
                } else if (side === 1) { // right
                    targets[i].x = p + w;
                    targets[i].y = p + progress * h;
                } else if (side === 2) { // bottom
                    targets[i].x = p + w - progress * w;
                    targets[i].y = p + h;
                } else { // left
                    targets[i].x = p;
                    targets[i].y = p + h - progress * h;
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            updateTargets();
            particles.forEach((p, i) => {
                p.update(isHovered, targets[i]);
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        init();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, [isHovered]);

    return (
        <div
            className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`absolute inset-0 rounded-3xl transition-all duration-500 overflow-hidden ${isHovered ? 'bg-indigo-600/10 scale-[1.02] shadow-[0_0_40px_rgba(99,102,241,0.2)]' : 'bg-white/5'
                } border border-white/10`}>
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none"
                />

                <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center text-center">
                    <ScrollReveal delay={100}>
                        <div className={`mb-6 transition-all duration-500 ${isHovered ? 'scale-110 -translate-y-2' : ''}`}>
                            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50">
                                <span className="text-2xl font-black text-indigo-400 font-['Outfit']">{stepNumber}</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <h3 className={`text-2xl font-bold mb-4 transition-all duration-500 font-['Outfit'] ${isHovered ? 'text-white translate-y-[-4px]' : 'text-slate-200'
                            }`}>
                            {title}
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <p className={`text-lg leading-relaxed transition-all duration-500 ${isHovered ? 'text-slate-200' : 'text-slate-400'
                            }`}>
                            {description}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <div className={`mt-8 transition-all duration-700 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <span className="px-6 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 text-sm font-bold tracking-wider uppercase">
                                Explore Tech
                            </span>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

const AntigravityCards = () => {
    const steps = [
        {
            title: 'Enter Your Goal',
            description: 'Type your goal in any language - career change, new skill, or project idea.',
            stepNumber: '01'
        },
        {
            title: 'AI Generates',
            description: 'Our AI analyzes your goal and creates a detailed, step-by-step roadmap.',
            stepNumber: '02'
        },
        {
            title: 'Track Progress',
            description: 'Follow the interactive roadmap and mark steps complete as you go.',
            stepNumber: '03'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full justify-items-center">
            {steps.map((step, idx) => (
                <div key={idx} className="h-[480px] w-full max-w-[360px] relative">
                    <ParticleCard {...step} />
                </div>
            ))}
        </div>
    );
};

export default AntigravityCards;
