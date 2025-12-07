import React from 'react';
import { Github } from "lucide-react";
import bookWormImg from '../assets/bookWorm.png';
import twitterImg from '../assets/twitter.png';
import instagramImg from '../assets/instagram.png';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {/* Project 1 */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src={bookWormImg} alt="Book Recommendation App" className="w-full h-full object-cover" />
                        </div>
                        <div className="project-info">
                            <h3>Book Recommendation Mobile App</h3>
                            <p className="project-tech">React Native (Expo) • TypeScript • Node.js • MongoDB</p>
                            <p className="project-desc">
                                A mobile application that helps users discover and get personalized book recommendations, browse books by category, save favorites, and manage their reading list with secure authentication.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Yaikob92/Book-App-Mobile" className="btn-sm" target="_blank" rel="noreferrer">
                                    <Github className="inline-block h-4 w-4 mr-1" /> Code
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* Project 2 */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src={twitterImg} alt="X (Twitter) Clone" className="w-full h-full object-cover" />
                        </div>
                        <div className="project-info">
                            <h3>X (Twitter) Clone Mobile App</h3>
                            <p className="project-tech">React Native (Expo) • TypeScript • Mongodb • Clerk</p>
                            <p className="project-desc">
                                A full-featured social media mobile application inspired by X (Twitter), allowing users to post content, follow others, like and comment on posts, upload media, and authenticate securely.
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Yaikob92/x-clone-mobile" className="btn-sm" target="_blank" rel="noreferrer">
                                    <Github className="inline-block h-4 w-4 mr-1" /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="project-card">
                        <div className="project-image">
                            <img src={instagramImg} alt="Spotlight App" className="w-full h-full object-cover" />
                        </div>
                        <div className="project-info">
                            <h3>Spotlight-App</h3>
                            <p className="project-tech">React Native • Clerk • Expo • Convex </p>
                            <p className="project-desc">An interactive social media platform similar to Instagram, where users can share photos and videos, follow others, like and comment on posts, and engage in real-time social interactions.</p>
                            <div className="project-links">
                                <a href="#" className="btn-sm" target="_blank" rel="noreferrer"><Github className="inline-block h-4 w-4 mr-1" /> Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
