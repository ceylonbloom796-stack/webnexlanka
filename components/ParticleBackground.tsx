
import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let sparkles: Sparkle[] = [];
    let animationFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Standard background particles that react to mouse
    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.max(0.1, Math.random() * 1.5 + 0.5);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = `rgba(148, 163, 184, ${this.opacity})`;
      }

      update() {
        // Normal movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance && distance > 0.1) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = (dx / distance) * force * 1.5;
          const directionY = (dy / distance) * force * 1.5;
          this.x += directionX;
          this.y += directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0, this.size), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Short-lived glowing trail particles
    class Sparkle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.maxLife = Math.random() * 50 + 20;
        this.life = this.maxLife;
        const colors = ['#3b82f6', '#8b5cf6', '#d946ef'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
      }

      draw() {
        if (!ctx) return;
        // Clamp alpha and ensure radius is never negative
        const alpha = Math.max(0, this.life / this.maxLife);
        const radius = Math.max(0, this.size * alpha);
        
        if (radius <= 0) return;

        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        // Using hex + alpha for color
        const alphaHex = Math.floor(Math.min(1, alpha) * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = `${this.color}${alphaHex}`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for next items
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 8), 150);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new sparkles based on mouse moving
      if (mouseRef.current.x > 0) {
        sparkles.push(new Sparkle(mouseRef.current.x, mouseRef.current.y));
      }

      // Update and draw background particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Update and draw sparkles, filter out dead ones
      sparkles = sparkles.filter(s => s.life > 0);
      sparkles.forEach(s => {
        s.update();
        s.draw();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', () => {
      resize();
      init();
    });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'contrast(1.1)' }}
    />
  );
};

export default ParticleBackground;
