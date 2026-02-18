import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal, Lightbulb, Users } from 'lucide-react';
import './About.css';

const competencies = [
    { icon: <Code2 size={18} />, text: 'React, Node.js & Firebase Development' },
    { icon: <Database size={18} />, text: 'SQL & Database Management' },
    { icon: <Globe size={18} />, text: 'Modern Web Technologies' },
    { icon: <Terminal size={18} />, text: 'C, C++, Java & JavaScript' },
    { icon: <Lightbulb size={18} />, text: 'Problem Solving & DSA' },
    { icon: <Users size={18} />, text: 'UI/UX Thinking & Team Collaboration' },
];

export default function About() {
    return (
        <section className="section about" id="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-container">
                            <img
                                src="/new.png"
                                alt="Aawesh Kumar Das"
                                className="about-image"
                            />
                            <div className="about-image-decoration" />
                        </div>
                        <h3 className="about-decorative-name">Aawesh Kumar Das</h3>
                        <p className="about-subtitle">B.Tech CSE Undergraduate</p>
                    </motion.div>

                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="about-highlight">
                            Software Development Intern Aspirant | Strong foundation in React, Node.js, and Firebase
                        </p>

                        <p className="about-paragraph">
                            I'm a motivated B.Tech Computer Science Engineering undergraduate at Aditya University, Kakinada
                            with hands-on experience in building modern web applications and startup-oriented projects.
                            I have real-world exposure to problem solving, teamwork, and scalable system design.
                        </p>

                        <p className="about-paragraph">
                            As the Founder and Initiator of startup ideas like Nexio and PragyaSetu, I've developed
                            immersive UIs and scalable architectures. I'm an open-source contributor on GitHub and have
                            participated in multiple hackathons focused on innovation and problem-solving.
                        </p>

                        <div className="competencies-section">
                            <h4 className="competencies-title">Core Competencies</h4>
                            <div className="competencies-grid">
                                {competencies.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="competency-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="competency-icon">{item.icon}</span>
                                        <span>{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
