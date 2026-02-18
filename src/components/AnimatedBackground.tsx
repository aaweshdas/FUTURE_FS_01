import { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    word: string;
    color: string;
    targetOpacity: number;
}

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
    phase: number;
}

interface Orb {
    x: number;
    y: number;
    radius: number;
    color: string;
    pulse: number;
    pulseSpeed: number;
    baseOpacity: number;
}

// Real programming keywords and code words
const codeWords = [
    // JavaScript/TypeScript
    'const', 'let', 'var', 'function', 'return', 'async', 'await', 'import', 'export', 'default',
    'class', 'extends', 'interface', 'type', 'enum', 'module', 'namespace',
    // Control flow
    'if', 'else', 'switch', 'case', 'for', 'while', 'do', 'break', 'continue', 'try', 'catch', 'finally', 'throw',
    // Python
    'def', 'lambda', 'yield', 'pass', 'with', 'as', 'from', 'global', 'nonlocal',
    // C/C++
    'int', 'float', 'double', 'char', 'void', 'struct', 'typedef', 'sizeof', 'malloc', 'free', 'printf', 'scanf',
    'include', 'define', 'ifndef', 'endif', 'pointer', 'array', 'string',
    // Java
    'public', 'private', 'protected', 'static', 'final', 'abstract', 'implements', 'package',
    // Common programming concepts
    'null', 'undefined', 'true', 'false', 'this', 'super', 'new', 'delete',
    // React/Web
    'useState', 'useEffect', 'props', 'state', 'render', 'component', 'hook',
    // Data structures
    'array', 'object', 'map', 'set', 'list', 'stack', 'queue', 'tree', 'graph', 'node',
    // Algorithms
    'sort', 'search', 'filter', 'reduce', 'forEach', 'find', 'push', 'pop', 'shift',
    // Database
    'SELECT', 'FROM', 'WHERE', 'INSERT', 'UPDATE', 'DELETE', 'JOIN', 'INDEX',
    // Git
    'commit', 'push', 'pull', 'merge', 'branch', 'clone', 'fetch',
    // Misc
    'API', 'JSON', 'HTTP', 'GET', 'POST', 'PUT', 'DELETE', 'async', 'sync',
    'debug', 'console', 'log', 'error', 'warning', 'success',
];

const colors = [
    '#c792ea', // Purple - keywords
    '#82aaff', // Blue - functions
    '#c3e88d', // Green - strings
    '#f78c6c', // Orange - numbers
    '#89ddff', // Cyan - operators
    '#ffcb6b', // Yellow - classes
    '#f07178', // Red - errors
    '#b2ccd6', // Gray - variables
];

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Particle[]>([]);
    const starsRef = useRef<Star[]>([]);
    const orbsRef = useRef<Orb[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
            initStars();
            initOrbs();
        };

        // Initialize floating code words — capped for performance
        const initParticles = () => {
            const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 45000));
            particlesRef.current = [];

            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5,
                    size: Math.random() * 8 + 11,
                    opacity: Math.random() * 0.45 + 0.25,
                    targetOpacity: Math.random() * 0.45 + 0.25,
                    word: codeWords[Math.floor(Math.random() * codeWords.length)],
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        // Initialize twinkling stars — capped for performance
        const initStars = () => {
            const starCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
            starsRef.current = [];

            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.02 + 0.01,
                    phase: Math.random() * Math.PI * 2,
                });
            }
        };

        // Initialize glowing orbs — reduced size & opacity
        const initOrbs = () => {
            orbsRef.current = [
                { x: canvas.width * 0.15, y: canvas.height * 0.2, radius: 300, color: '#7c3aed', pulse: 0, pulseSpeed: 0.018, baseOpacity: 0.35 },
                { x: canvas.width * 0.85, y: canvas.height * 0.8, radius: 280, color: '#06b6d4', pulse: Math.PI, pulseSpeed: 0.022, baseOpacity: 0.35 },
                { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 350, color: '#8b5cf6', pulse: Math.PI / 2, pulseSpeed: 0.015, baseOpacity: 0.35 },
            ];
        };

        // Throttled mouse tracking (~60fps)
        let lastMouseTime = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const now = performance.now();
            if (now - lastMouseTime < 16) return;
            lastMouseTime = now;
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        // Helper function to convert hex to rgba
        const hexToRgba = (hex: string, alpha: number): string => {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

        // Main animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear with solid background
            ctx.fillStyle = '#030308';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw glowing orbs (background layer)
            orbsRef.current.forEach((orb) => {
                orb.pulse += orb.pulseSpeed;
                const pulseFactor = 1 + Math.sin(orb.pulse) * 0.25;
                const currentRadius = orb.radius * pulseFactor;
                const currentOpacity = orb.baseOpacity * (0.8 + Math.sin(orb.pulse) * 0.2);

                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentRadius);
                gradient.addColorStop(0, hexToRgba(orb.color, currentOpacity));
                gradient.addColorStop(0.4, hexToRgba(orb.color, currentOpacity * 0.4));
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, currentRadius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw twinkling stars — simplified (no per-star gradient)
            starsRef.current.forEach((star) => {
                star.phase += star.twinkleSpeed;
                const twinkle = (Math.sin(star.phase) + 1) / 2;
                const opacity = star.opacity * twinkle * 0.7 + 0.1;

                // Star core only (removed expensive per-star radial gradient)
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw code word particles with mouse interaction
            particlesRef.current.forEach((particle) => {
                // Mouse interaction - gentle attraction
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    // Particles orbit around cursor
                    particle.vx += (-dy / distance) * force * 0.012;
                    particle.vy += (dx / distance) * force * 0.012;
                    particle.targetOpacity = 0.6; // Brighten near cursor
                } else {
                    particle.targetOpacity = Math.random() * 0.3 + 0.12;
                }

                // Smooth opacity transition
                particle.opacity += (particle.targetOpacity - particle.opacity) * 0.03;

                // Apply velocity with minimal damping for faster movement
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vx *= 0.9995;
                particle.vy *= 0.9995;

                // Add minimal drift
                particle.vx += (Math.random() - 0.5) * 0.02;
                particle.vy += (Math.random() - 0.5) * 0.02;

                // Wrap around edges with padding
                if (particle.x < -100) particle.x = canvas.width + 100;
                if (particle.x > canvas.width + 100) particle.x = -100;
                if (particle.y < -50) particle.y = canvas.height + 50;
                if (particle.y > canvas.height + 50) particle.y = -50;

                // Draw word — reduced glow for performance
                ctx.font = `500 ${particle.size}px 'Consolas', monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 8;
                ctx.fillStyle = hexToRgba(particle.color, particle.opacity);
                ctx.fillText(particle.word, particle.x, particle.y);

                ctx.shadowBlur = 0;
            });

            // Draw connecting lines — limited to first 35 particles, no per-line gradient
            const lineParticles = particlesRef.current;
            const lineLimit = Math.min(lineParticles.length, 35);
            ctx.lineWidth = 0.5;
            for (let i = 0; i < lineLimit; i++) {
                const p1 = lineParticles[i];
                for (let j = i + 1; j < lineLimit; j++) {
                    const p2 = lineParticles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < 22500) { // 150px squared
                        const opacity = (1 - Math.sqrt(distSq) / 150) * 0.12;
                        ctx.strokeStyle = `rgba(140, 120, 200, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse cursor glow — smaller radius
            if (mouseRef.current.x > 0) {
                const mouseGlow = ctx.createRadialGradient(
                    mouseRef.current.x, mouseRef.current.y, 0,
                    mouseRef.current.x, mouseRef.current.y, 120
                );
                mouseGlow.addColorStop(0, 'rgba(124, 58, 237, 0.10)');
                mouseGlow.addColorStop(1, 'transparent');
                ctx.fillStyle = mouseGlow;
                ctx.beginPath();
                ctx.arc(mouseRef.current.x, mouseRef.current.y, 120, 0, Math.PI * 2);
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div className="animated-background">
            <canvas ref={canvasRef} className="bg-canvas" />
            <div className="bg-vignette" />
        </div>
    );
}
