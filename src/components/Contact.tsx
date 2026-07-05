"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const socials = [
        {
            name: "Email",
            icon: Mail,
            href: "mailto:abhimansbhat18@gmail.com",
            label: "abhimansbhat18@gmail.com",
        },
        {
            name: "Phone",
            icon: Mail, // Using Mail icon temporarily, should ideally be Phone
            href: "tel:+918197463369",
            label: "+91-8197463369",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://linkedin.com/in/abhiman-bhat",
            label: "linkedin.com/in/abhiman-bhat",
        },
        {
            name: "GitHub",
            icon: Github,
            href: "https://github.com/abhimansbhat18-ops",
            label: "github.com/abhimansbhat18-ops",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                        Get In Touch
                    </span>
                    <h2
                        className="heading-lg mt-2 mb-4"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Let&apos;s Build Something Together
                    </h2>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        I&apos;m currently seeking opportunities as a Business Analyst or
                        Data Analyst intern. Let&apos;s connect if you&apos;re looking for someone
                        who can transform data into strategic insights!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-slate-50 p-8 rounded-2xl border border-slate-200"
                    >
                        <h3 className="text-xl font-semibold text-slate-800 mb-6">Send a Message</h3>
                        <form action="mailto:abhimansbhat18@gmail.com" method="post" encType="text/plain" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-center gap-6"
                    >
                        {socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all group"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <social.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-medium">{social.name}</p>
                                    <p className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">{social.label}</p>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
