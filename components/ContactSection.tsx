'use client';

import { useRef, useState, FormEvent } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { fadeInUp } from '../animations/fadeInUp';
import { gsap } from '../animations/gsapConfig';

export function ContactSection() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    useIsomorphicLayoutEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            fadeInUp('.contact-left', { y: 30 });
            fadeInUp('.contact-right', { delay: 0.1, y: 30 });
            fadeInUp('.contact-footer', { delay: 0.2, y: 20 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = (formData.get('name') as string) || '';
        const email = (formData.get('email') as string) || '';
        const message = (formData.get('message') as string) || '';

        setIsSubmitting(true);
        setStatusMessage(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatusMessage('Message sent successfully. I will get back to you soon.');
            form.reset();
        } catch (err) {
            setStatusMessage('Unable to send message right now. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" ref={sectionRef} className="relative py-24 md:py-28 bg-black text-neutral-100">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] gap-10 md:gap-12 items-stretch mb-12">
                    <div className="contact-left h-full flex flex-col justify-between space-y-6">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">
                                CONTACT
                            </p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold mb-3">
                                From concept to production.
                            </h2>
                            <p className="text-sm md:text-base text-neutral-300">
                                Tell me about the system you want to build or improve – whether it&apos;s a
                                new product, an integration, or performance work on an existing platform.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <a
                                href="mailto:info@shadman.tech"
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/90 px-4 py-3 text-sm hover:border-neutral-600 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
                                        Email
                                    </span>
                                </div>
                                <span className="text-xs md:text-sm text-neutral-200">
                                    info@shadman.tech
                                </span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/swe-shadman/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/90 px-4 py-3 text-sm hover:border-neutral-600 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800">
                                        <Linkedin className="w-4 h-4" />
                                    </span>
                                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
                                        LinkedIn
                                    </span>
                                </div>
                                <span className="text-xs md:text-sm text-neutral-200">
                                    View profile
                                </span>
                            </a>

                            <a
                                href="https://github.com/shahriar0104"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/90 px-4 py-3 text-sm hover:border-neutral-600 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800">
                                        <Github className="w-4 h-4" />
                                    </span>
                                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
                                        GitHub
                                    </span>
                                </div>
                                <span className="text-xs md:text-sm text-neutral-200">
                                    Repositories
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-right h-full rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-5 md:px-7 md:py-7 flex flex-col">
                        <form onSubmit={handleSubmit} className="space-y-4 text-sm flex-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-xl border border-neutral-800 bg-black px-3 py-2 text-sm outline-none focus:border-neutral-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-xl border border-neutral-800 bg-black px-3 py-2 text-sm outline-none focus:border-neutral-500"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs uppercase tracking-[0.18em] text-neutral-400 mb-1">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="w-full min-h-[120px] rounded-xl border border-neutral-800 bg-black px-3 py-2 text-sm resize-none outline-none focus:border-neutral-500"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-neutral-700 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-100 bg-[length:200%_100%] px-4 py-2 text-xs md:text-sm font-semibold text-black disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending…' : 'Send a message'}
                            </button>
                            {statusMessage && (
                                <p className="mt-2 text-[0.7rem] text-neutral-400">{statusMessage}</p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="contact-footer border-t border-neutral-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] text-neutral-500">
                    <span>© {new Date().getFullYear()} Shadman Shahriar</span>
                    <span className="flex items-center gap-4">
                        <span>GitHub</span>
                        <span>LinkedIn</span>
                    </span>
                </div>
            </div>
        </section>
    );
}
