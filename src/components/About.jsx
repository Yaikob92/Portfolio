import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a <strong>Computer Science & Engineering student</strong> and a passionate backend and mobile app developer.
                            My journey involves building robust APIs using <strong>Node.js (Express)</strong> and <strong>Go (Gin & Fiber)</strong>,
                            and creating intuitive mobile experiences with <strong>React Native (Expo)</strong>.
                        </p>
                        <p>
                            I prioritize building simple, fast, and secure applications. Whether it's architecting a database schema
                            or polishing a UI, I enjoy every part of the development process.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <h3>3+</h3>
                                <p>Years Coding</p>
                            </div>
                            <div className="stat-item">
                                <h3>10+</h3>
                                <p>Projects</p>
                            </div>
                            <div className="stat-item">
                                <h3>24/7</h3>
                                <p>Commitment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
