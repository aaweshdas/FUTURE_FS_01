import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'C', level: 90 },
            { name: 'C++', level: 85 },
            { name: 'Java', level: 80 },
            { name: 'JavaScript', level: 85 },
        ],
    },
    {
        title: 'Web Technologies',
        skills: [
            { name: 'HTML/CSS', level: 90 },
            { name: 'React', level: 85 },
            { name: 'Node.js', level: 80 },
            { name: 'Tailwind CSS', level: 85 },
        ],
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Firebase', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'TypeScript', level: 75 },
            { name: 'REST APIs', level: 80 },
        ],
    },
    {
        title: 'Tools & Platforms',
        skills: [
            { name: 'Git/GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Figma', level: 75 },
            { name: 'Oracle Cloud', level: 70 },
        ],
    },
    {
        title: 'Core Concepts',
        skills: [
            { name: 'Problem Solving', level: 90 },
            { name: 'DSA Basics', level: 85 },
            { name: 'UI/UX Thinking', level: 80 },
            { name: 'Team Collaboration', level: 90 },
        ],
    },
];

export default function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-grid">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            className="skill-category glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <motion.div
                                                className="skill-progress"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
