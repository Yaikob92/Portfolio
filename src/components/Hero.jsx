import React from 'react';
import yaikobImg from '../assets/yaikob.png';
import { Github, Linkedin, Mail, MapPin, ArrowRight, ArrowDown } from "lucide-react";

const socialLinks = [
    { href: "https://github.com/yaikob92", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/yaikob", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:wyaikob@gmail.com", label: "Email", icon: Mail },
];

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hey, I'm</span>
                    <h1 className="name">Yaikob Wasihun</h1>
                    <h2 className="role">Backend & Mobile App Developer</h2>
                    <p className="hero-description">
                        I build simple, fast, and secure APIs and mobile apps using Go,
                        Node.js, and React Native. I enjoy turning ideas into reliable
                        systems that feel effortless to use.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Work <ArrowRight className="inline-block h-4 w-4 ml-1" /></a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" aria-hidden />
                            <span>Ethiopia · Computer Science &amp; Engineering student</span>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map(({ href, label, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    <Icon className="h-5 w-5" aria-hidden />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={yaikobImg} alt="Yaikob Wasihun" className="profile-img" />
                    </div>
                </div>
            </div>
            <div className="scroll-down">
                <a href="#about"><ArrowDown className="h-6 w-6" /></a>
            </div>
        </section>
    );
};


export default Hero;
