import React from 'react';
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Yaikob Wasihun. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://github.com/Yaikob92" target="_blank" rel="noreferrer"><Github className="h-6 w-6" /></a>
                    <a href="https://www.linkedin.com/in/yaikob" target="_blank" rel="noreferrer"><Linkedin className="h-6 w-6" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
