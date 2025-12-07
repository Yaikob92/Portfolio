import React, { useRef, useState } from 'react';
import { Mail, MapPin, Send, Phone, ArrowRight, Loader2, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

const socialLinks = [
    { href: "https://github.com/yaikob92", label: "GitHub", icon: Github },
    { href: "https://linkedin.com/in/yaikob", label: "LinkedIn", icon: Linkedin },
    { href: "mailto:wyaikob@gmail.com", label: "Email", icon: Mail },
];

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Access environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing.");
            setSubmitStatus('error');
            setIsSubmitting(false);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                form.current.reset();
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="section contact border-t bg-background">
            <div className="container mx-auto max-w-6xl px-6 py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Let's work together
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                I'm currently available for freelance work and internships. If you have a project that needs some creative touch, let's talk.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <a href="mailto:wyaikob@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                                        wyaikob@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p className="text-lg font-semibold">Ethiopia</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="h-px flex-1 bg-border" />
                            <span>Or find me on social media</span>
                            <div className="h-px flex-1 bg-border" />
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

                    {/* Contact Form */}
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>Send a message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Name
                                        </label>
                                        <Input id="name" name="user_name" placeholder="John Doe" required disabled={isSubmitting} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Email
                                        </label>
                                        <Input id="email" name="user_email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Subject
                                    </label>
                                    <Input id="subject" name="subject" placeholder="Project inquiry" required disabled={isSubmitting} />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        Message
                                    </label>
                                    <Textarea id="message" name="message" placeholder="Tell me about your project..." className="min-h-[150px]" required disabled={isSubmitting} />
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md border border-green-200">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
                                        Failed to send message. Please try again or email me directly.
                                    </div>
                                )}

                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;
