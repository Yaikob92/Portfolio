import React from 'react';
import { BarChart, LineChart } from "lucide-react";

const Certificates = () => {
    const certificates = [
        {
            id: 1,
            title: "Applied Data Science Lab",
            issuer: "World Quant University",
            date: "2024",
            link: "#", // Placeholder or actual link if available
            icon: BarChart
        },
        {
            id: 2,
            title: "ALX Data Analytics",
            issuer: "ALX Africa",
            date: "2024",
            link: "#", // Placeholder or actual link if available
            icon: LineChart
        }
    ];

    return (
        <section id="certificates" className="section certificates">
            <div className="container">
                <h2 className="section-title">Certificates</h2>
                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div key={cert.id} className="certificate-card">
                            <div className="cert-icon">
                                <cert.icon className="h-8 w-8 text-primary" />
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <span className="date">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
