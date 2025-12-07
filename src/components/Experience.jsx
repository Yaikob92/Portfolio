import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Software Engineer",
            company: "Jirtu Software Labs",
            description: "Contributed to backend development and mobile application projects under senior developer guidance, gaining hands-on experience with real-world software systems. Collaborated with cross-functional teams to support the delivery of reliable and maintainable code."
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-container">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-card">
                            <div className="experience-header">
                                <h3>{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                            </div>
                            <span className="period">{exp.period}</span>
                            <p className="description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
