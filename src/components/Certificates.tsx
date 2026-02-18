import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import './Certificates.css';

const certificates = [
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        icon: '☁️',
        url: '/certificates/Oracle%20Cloud%20Infrastructure%202025%20Certified%20AI%20Foundations%20Associate.pdf',
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
        issuer: 'Oracle',
        date: '2025',
        icon: '📊',
        url: '/certificates/Oracle%20Cloud%20Infrastructure%202025%20Certified%20Data%20Science%20Professional.pdf',
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
        issuer: 'Oracle',
        date: '2025',
        icon: '🤖',
        url: '/certificates/Oracle%20Cloud%20Infrastructure%202025%20Certified%20Generative%20AI%20Professional.pdf',
    },
    {
        title: 'Oracle Data Platform 2025 Certified Foundations Associate',
        issuer: 'Oracle',
        date: '2025',
        icon: '🗄️',
        url: '/certificates/Oracle%20Data%20Platform%202025%20Certified%20Foundations%20Associate.pdf',
    },
    {
        title: 'Node.js Certification',
        issuer: 'Infosys',
        date: '2025',
        icon: '🟢',
        url: '/certificates/infosys%20node.pdf',
    },
    {
        title: 'TypeScript Certification',
        issuer: 'Infosys',
        date: '2025',
        icon: '📘',
        url: '/certificates/infosys%20typescript.pdf',
    },
    {
        title: 'DBMS Certification',
        issuer: 'Infosys',
        date: '2025',
        icon: '🗃️',
        url: '/certificates/DBMS%20certificate%20infosis.pdf',
    },
    {
        title: 'Smart India Hackathon (SIH) Certificate',
        issuer: 'Government of India',
        date: '2024',
        icon: '🏆',
        url: '/certificates/SIH%20certificate.png',
    },
    {
        title: 'My Bharat Certificate',
        issuer: 'Government of India',
        date: '2024',
        icon: '🇮🇳',
        url: '/certificates/My_Bharat_Certificate.png',
    },
    {
        title: 'Agile Methodology',
        issuer: 'Coursera',
        date: '2024',
        icon: '🔄',
        url: '/certificates/Coursera%20Agile.pdf',
    },
    {
        title: 'C++ Certificate',
        issuer: 'Academic',
        date: '2024',
        icon: '🇨',
        url: '/certificates/24B11CS001%20c++%20certificate.pdf',
    },
    {
        title: 'Java Certificate',
        issuer: 'Academic',
        date: '2025',
        icon: '☕',
        url: '/certificates/LUEJAVAJAN1251372.pdf',
    },
    {
        title: 'HTML5 Certificate',
        issuer: 'Academic',
        date: '2025',
        icon: '🌐',
        url: '/certificates/HTML5%20Certififate.pdf',
    },
    {
        title: 'JavaScript Certificate',
        issuer: 'Academic',
        date: '2025',
        icon: '📜',
        url: '/certificates/JS%20Certificate.pdf',
    },
    {
        title: 'Python Basic',
        issuer: 'HackerRank',
        date: '2025',
        icon: '🐍',
        url: '/certificates/python_basic%20certificate.pdf',
    },
    {
        title: 'SQL Basic',
        issuer: 'HackerRank',
        date: '2025',
        icon: '🗄️',
        url: '/certificates/sql_basic%20certificate%20Aawesh%20Kumar%20Das.pdf',
    },
    {
        title: 'IBM Design',
        issuer: 'IBM',
        date: '2025',
        icon: '🎨',
        url: '/certificates/Aawesh%20Kumar%20Das--IBMDesign20260108-31-mrl9xb.pdf',
    },
    {
        title: 'Prompt Engineering',
        issuer: 'Other',
        date: '2025',
        icon: '✍️',
        url: '/certificates/prompt%20engineering%20of%20agile.pdf',
    }
];

const languages = [
    { name: 'English', level: 'Proficient' },
    { name: 'Hindi', level: 'Advanced' },
    { name: 'Nepali', level: 'Native' },
    { name: 'Bengali', level: 'Conversational' },
    { name: 'Telugu', level: 'Basic' },
];

export default function Certificates() {
    return (
        <section className="section certificates" id="certificates">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifications & Languages
                </motion.h2>

                <div className="certificates-content">
                    {/* Certifications */}
                    <div className="certificates-section">
                        <h3 className="subsection-title">
                            <Award size={20} />
                            Certifications
                        </h3>
                        <div className="certificates-grid">
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={cert.title}
                                    className="certificate-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="certificate-icon">{cert.icon}</span>
                                    <div className="certificate-content">
                                        <h4 className="certificate-title">{cert.title}</h4>
                                        <p className="certificate-issuer">{cert.issuer}</p>
                                        <p className="certificate-date">
                                            <Calendar size={14} />
                                            {cert.date}
                                        </p>
                                    </div>
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certificate-link">
                                        <ExternalLink size={16} />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="languages-section">
                        <h3 className="subsection-title">🌐 Languages</h3>
                        <div className="languages-grid">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    className="language-card glass-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <span className="language-name">{lang.name}</span>
                                    <span className="language-level">{lang.level}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
