import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'Nexio',
        subtitle: 'Next-Generation Social Media Platform',
        description: 'Developing a startup-focused social media platform with a unique identity-driven user experience. Designing immersive UI and scalable architecture for real-world adoption.',
        image: '/project-nexio.svg',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Firebase', 'Figma'],
        period: '2025 – Present',
        status: 'In Progress',
        github: 'https://github.com/aaweshdas',
        demo: '#',
    },
    {
        title: 'PragyaSetu',
        subtitle: 'Civic Grievance & Analytics Platform',
        description: 'Built a grievance dashboard with real-time analytics, maps, and multilingual support. Focused on usability, data visualization, and government-scale workflows.',
        image: '/project-pragyasetu.svg',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Leaflet'],
        period: 'July 2025',
        status: 'Completed',
        github: 'https://github.com/aaweshdas',
        demo: '#',
    },
];

export default function Projects() {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className={`project-status ${project.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h4 className="project-subtitle">{project.subtitle}</h4>
                                <p className="project-period">
                                    <Calendar size={14} />
                                    {project.period}
                                </p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
