import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, FolderOpen } from 'lucide-react';
import './Hero.css';

const titles = [
    'B.Tech Computer Science Engineering',
    'Software Development Intern Aspirant',
    'React & Node.js Developer',
    'Full Stack Enthusiast',
    'Problem Solver',
];

export default function Hero() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, titleIndex]);

    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="bg-gradient-blur purple" />
                <div className="bg-gradient-blur cyan" />
            </div>

            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.p>

                    <motion.h1
                        className="hero-name gradient-text"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Aawesh Kumar Das
                    </motion.h1>

                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="typing-text">{displayText}</span>
                        <span className="cursor">|</span>
                    </motion.h2>

                    <motion.p
                        className="hero-summary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Motivated CSE undergraduate with hands-on experience in building modern web applications and startup-oriented projects.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <Link to="contact" smooth={true} duration={500} offset={-80}>
                            <button className="btn btn-primary">
                                <Mail size={18} />
                                Contact Me
                            </button>
                        </Link>
                        <Link to="projects" smooth={true} duration={500} offset={-80}>
                            <button className="btn btn-outline">
                                <FolderOpen size={18} />
                                View Projects
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <Link to="about" smooth={true} duration={500} offset={-80}>
                    <span>Scroll down</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
