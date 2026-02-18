import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/aaweshdas', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/aaweshdas/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:aaweshdas@gmail.com', label: 'Email' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-brand">
                        <h3 className="footer-name gradient-text">Aawesh Kumar Das</h3>
                        <p className="footer-tagline">B.Tech CSE | Software Development Intern Aspirant</p>
                    </div>

                    <div className="footer-social">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">
                            © {currentYear} Aawesh Kumar Das. All rights reserved.
                        </p>
                        <p className="made-with">
                            Made with <Heart size={14} className="heart-icon" /> using React
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
