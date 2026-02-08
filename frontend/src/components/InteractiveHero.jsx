import React, { useEffect, useRef } from 'react';

const InteractiveHero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const mouse = {
            x: null,
            y: null,
            radius: 200,
            pressed: false
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        const handleMouseDown = () => { mouse.pressed = true; };
        const handleMouseUp = () => { mouse.pressed = false; };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        class Particle {
            constructor(x, y, dx, dy, size, layer) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.layer = layer; // 1 (closer) to 3 (background)

                // Physics constants (Antigravity-grade refinement)
                this.density = (Math.random() * 20) + 15;
                this.friction = 0.98; // Increased for longer, smoother glide
                this.velocity = { x: 0, y: 0 };

                // Colors based on layer depth
                const opacities = [0.6, 0.4, 0.2];
                this.baseOpacity = opacities[layer - 1];
                this.color = `rgba(226, 232, 240, ${this.baseOpacity})`;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;

                // Add tiny glow to closer particles
                if (this.layer === 1) {
                    ctx.shadowBlur = 5;
                    ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fill();
            }

            update() {
                // 1. Drifting + Layered speeds (Parallax)
                const speedMult = (4 - this.layer) * 0.5;
                this.x += this.dx * speedMult + this.velocity.x;
                this.y += this.dy * speedMult + this.velocity.y;

                // 2. Physics deceleration
                this.velocity.x *= this.friction;
                this.velocity.y *= this.friction;

                // 3. Infinite Wrap
                if (this.x > canvas.width + 50) this.x = -50;
                else if (this.x < -50) this.x = canvas.width + 50;
                if (this.y > canvas.height + 50) this.y = -50;
                else if (this.y < -50) this.y = canvas.height + 50;

                // 4. Advanced Interaction
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    // Click makes them fly away much faster
                    const interactionRadius = mouse.pressed ? mouse.radius * 1.5 : mouse.radius;

                    if (distance < interactionRadius) {
                        const force = (interactionRadius - distance) / interactionRadius;
                        const directionX = dx / distance;
                        const directionY = dy / distance;

                        const pushStrength = mouse.pressed ? 2.5 : 1;
                        this.velocity.x -= directionX * force * this.density * 0.05 * pushStrength;
                        this.velocity.y -= directionY * force * this.density * 0.05 * pushStrength;

                        // Interaction visual feedback
                        if (this.layer === 1) {
                            this.color = `rgba(165, 180, 252, ${this.baseOpacity + force * 0.4})`;
                        }
                    } else {
                        this.color = `rgba(226, 232, 240, ${this.baseOpacity})`;
                    }
                }

                this.draw();
            }
        }

        const init = () => {
            particles = [];
            const count = (canvas.height * canvas.width) / 6000;
            const finalCount = Math.min(count, 350);

            for (let i = 0; i < finalCount; i++) {
                const layer = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
                const size = (4 - layer) * (Math.random() * 1 + 0.5);
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const dx = (Math.random() * 0.6) - 0.3;
                const dy = (Math.random() * 0.6) - 0.3;

                particles.push(new Particle(x, y, dx, dy, size, layer));
            }
        };

        const drawConnectors = () => {
            ctx.shadowBlur = 0; // Performance: no shadows for lines

            for (let a = 0; a < particles.length; a++) {
                // Lines only between particles in the same or adjacent layers to create depth
                for (let b = a + 1; b < particles.length; b++) {
                    if (Math.abs(particles[a].layer - particles[b].layer) > 1) continue;

                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = dx * dx + dy * dy;

                    // Layer-dependent threshold
                    const limit = (canvas.width / 7) * (canvas.height / 7);

                    if (distance < limit) {
                        let opacity = (1 - (distance / limit)) * 0.15;
                        // Fade lines based on deepest particle
                        const maxLayer = Math.max(particles[a].layer, particles[b].layer);
                        opacity /= maxLayer;

                        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
                        ctx.lineWidth = 0.4;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }

                // Connect to mouse with higher intensity
                if (mouse.x != null && mouse.y != null) {
                    let dx = particles[a].x - mouse.x;
                    let dy = particles[a].y - mouse.y;
                    let distance = dx * dx + dy * dy;
                    let mouseLimit = mouse.radius * mouse.radius;

                    if (distance < mouseLimit) {
                        let opacity = (1 - (distance / mouseLimit)) * 0.25;
                        ctx.strokeStyle = `rgba(165, 180, 252, ${opacity / particles[a].layer})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const drawScene = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Draw Global Bloom Atmosphere
            if (mouse.x != null && mouse.y != null) {
                const glowSize = mouse.pressed ? mouse.radius * 3 : mouse.radius * 2;
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowSize);
                gradient.addColorStop(0, mouse.pressed ? 'rgba(79, 70, 229, 0.15)' : 'rgba(99, 102, 241, 0.1)');
                gradient.addColorStop(1, 'rgba(15, 23, 42, 0)');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // 2. Draw Particles with Physics
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }

            // 3. Draw Web/Mesh
            drawConnectors();
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            drawScene();
        };

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                mixBlendMode: 'screen',
                filter: 'contrast(1.1) brightness(1.1)',
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}
        />
    );
};

export default InteractiveHero;
