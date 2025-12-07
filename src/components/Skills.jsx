import React from 'react';
import { Code2, Database, Smartphone, GitBranch, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
    {
        icon: Code2,
        label: "Backend Development",
        items: ["Go (Gin, Fiber)", "Node.js (Express)", "TypeScript", "REST API design"],
    },
    {
        icon: Smartphone,
        label: "Mobile Development",
        items: ["React Native (Expo)", "Reusable UI components", "Offline-first thinking"],
    },
    {
        icon: Database,
        label: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Query optimization basics"],
    },
    {
        icon: GitBranch,
        label: "Tools & Workflow",
        items: ["Git & GitHub", "Linux (Ubuntu)", "CLI-first workflow"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills border-b bg-muted/40" aria-labelledby="skills-heading">
            <div className="container mx-auto max-w-5xl px-6 py-16">
                <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Skills</p>
                        <h2 id="skills-heading" className="section-title mt-2 text-2xl font-semibold tracking-tight sm:text-3xl !mb-0 !text-left !transform-none !left-0">
                            Technologies I work with
                        </h2>
                    </div>
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Terminal className="h-4 w-4" aria-hidden />
                        <span>Simple, fast and secure applications are my priority.</span>
                    </p>
                </header>

                <div className="grid gap-6 md:grid-cols-2">
                    {skills.map((skill) => (
                        <Card
                            key={skill.label}
                            className="border-none bg-card/80 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                        >
                            <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                                    <skill.icon className="h-5 w-5 text-primary" aria-hidden />
                                </div>
                                <CardTitle className="text-base font-semibold">{skill.label}</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <ul className="space-y-1.5 text-sm text-muted-foreground">
                                    {skill.items.map((item) => (
                                        <li key={item}>• {item}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
