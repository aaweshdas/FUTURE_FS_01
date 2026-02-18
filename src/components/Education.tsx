import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import './Education.css';

const education = [
    {
        degree: 'B.Tech – Computer Science Engineering',
        institution: 'Aditya University',
        location: 'Kakinada, Andhra Pradesh',
        period: '2023 – 2027 (Expected)',
        status: '2nd Year Undergraduate',
        courses: ['Data Structures & Algorithms', 'Web Development', 'Database Management', 'Object-Oriented Programming'],
    },
    {
        degree: 'Class XII (Higher Secondary)',
        institution: 'GD Goenka Public School',
        location: 'Siliguri, West Bengal',
        period: '2021 – 2023',
        status: 'Completed',
        courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    },
];

export default function Education() {
    return (
        <section className="section education" id="education">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card glass-card"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="education-icon">
                                <GraduationCap size={24} />
                            </div>
                            <div className="education-content">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <h4 className="education-institution">{edu.institution}</h4>
                                <div className="education-meta">
                                    <span className="education-location">
                                        <MapPin size={14} />
                                        {edu.location}
                                    </span>
                                    <span className="education-period">
                                        <Calendar size={14} />
                                        {edu.period}
                                    </span>
                                </div>
                                <span className="education-status">{edu.status}</span>
                                <div className="education-courses">
                                    <span className="courses-label">
                                        <BookOpen size={14} />
                                        Relevant Coursework:
                                    </span>
                                    <div className="courses-list">
                                        {edu.courses.map((course, i) => (
                                            <span key={i} className="course-tag">{course}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
