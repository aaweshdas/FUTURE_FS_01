import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        title: 'Student Ambassador',
        company: "Let's Upgrade",
        location: 'Remote',
        period: 'May 2025 – Dec 2025',
        type: 'Part-time',
        responsibilities: [
            'Collaborated with teams on research, documentation, and solution analysis',
            'Organized datasets, reports, and presentations for internal initiatives',
            'Participated in workshops and AI-focused learning programs',
        ],
    },
];

const achievements = [
    'Participated in multiple hackathons focused on innovation and problem-solving',
    'Open-source contributor on GitHub',
    'Founder / Initiator of startup ideas Nexio and PragyaSetu',
    "Letter of Appreciation from Let's Upgrade for AI research contribution",
];

export default function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Achievements
                </motion.h2>

                <div className="experience-content">
                    {/* Work Experience */}
                    <div className="experience-section">
                        <h3 className="experience-section-title">Work Experience</h3>
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="experience-card glass-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="experience-icon">
                                    <Briefcase size={24} />
                                </div>
                                <div className="experience-details">
                                    <h4 className="experience-title">{exp.title}</h4>
                                    <h5 className="experience-company">{exp.company}</h5>
                                    <div className="experience-meta">
                                        <span>
                                            <MapPin size={14} />
                                            {exp.location}
                                        </span>
                                        <span>
                                            <Calendar size={14} />
                                            {exp.period}
                                        </span>
                                        <span className="experience-type">{exp.type}</span>
                                    </div>
                                    <ul className="experience-responsibilities">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div className="achievements-section">
                        <h3 className="experience-section-title">Achievements & Activities</h3>
                        <motion.div
                            className="achievements-card glass-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ul className="achievements-list">
                                {achievements.map((achievement, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <CheckCircle size={18} className="achievement-icon" />
                                        <span>{achievement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
