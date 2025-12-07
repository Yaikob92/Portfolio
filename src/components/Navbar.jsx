import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md transition-all">
            <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
                <a href="#home" className="flex items-baseline gap-1 text-xl font-bold tracking-tight">
                    <span>Yaikob</span>
                    <span className="text-sm font-medium text-muted-foreground">/ Backend &amp; Mobile</span>
                </a>

                <div className="hidden items-center gap-8 text-sm font-medium md:flex">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative transition-colors hover:text-primary",
                                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                )}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-primary rounded-full transition-all duration-300" />
                                )}
                            </a>
                        );
                    })}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button asChild size="sm" variant="hero" className="font-semibold">
                            <a href="#contact">Hire me</a>
                        </Button>
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" aria-label="Open navigation menu">
                                <Menu className="h-5 w-5" aria-hidden />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="flex flex-col gap-6 bg-background/95">
                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-lg font-semibold tracking-tight">Navigation</span>
                                <ThemeToggle />
                            </div>
                            <div className="flex flex-col gap-2 text-base font-medium text-foreground">
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.substring(1);
                                    return (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "rounded-md px-4 py-3 transition-colors hover:bg-muted",
                                                isActive ? "bg-primary/10 text-primary font-semibold" : ""
                                            )}
                                        >
                                            {item.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
