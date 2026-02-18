import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const contactInfo = [
    {
        icon: <Mail size={24} />,
        title: 'Email',
        value: 'aaweshdas@gmail.com',
        link: 'mailto:aaweshdas@gmail.com',
    },
    {
        icon: <MapPin size={24} />,
        title: 'Location',
        value: 'Araria, Bihar, India',
        link: '#',
    },
    {
        icon: <Github size={24} />,
        title: 'GitHub',
        value: 'github.com/aaweshdas',
        link: 'https://github.com/aaweshdas',
    },
    {
        icon: <Linkedin size={24} />,
        title: 'LinkedIn',
        value: 'Connect on LinkedIn',
        link: 'https://www.linkedin.com/in/aaweshdas/',
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:aaweshdas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="contact-subtitle">Let's Connect!</h3>
                        <p className="contact-description">
                            I'm currently looking for Software Development Internship opportunities.
                            Feel free to reach out if you'd like to collaborate or have any questions!
                        </p>

                        <div className="contact-cards">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? '_blank' : undefined}
                                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="contact-card glass-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <span className="contact-icon">{item.icon}</span>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="form-title">Send a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Your message..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            <Send size={18} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
