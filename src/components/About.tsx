"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb } from "lucide-react";
import ScrollFloat from "./ScrollFloat";

export default function About() {
    const highlights = [
        {
            icon: Target,
            title: "Business Analysis",
            description:
                "Market sizing (TAM-SAM-SOM), JTBD framework, break-even analysis, and strategic go-to-market planning.",
        },
        {
            icon: Lightbulb,
            title: "Data Analytics",
            description:
                "From SQL queries to Power BI dashboards, I transform raw data into actionable business insights.",
        },
        {
            icon: User,
            title: "Entrepreneurship",
            description:
                "Founder of Satyug Tales with 800,000+ organic views. I blend analytical thinking with creative execution.",
        },
    ];

    return (
        <section id="about" className="relative py-24 bg-black/20 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-zinc-400 tracking-wide uppercase">
                        About Me
                    </span>
                    <h2
                        className="heading-lg mt-2 text-white"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Where Logic Meets Creativity
                    </h2>
                </motion.div>

                {/* Bio + Image */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
                            <img
                                src="/profile.jpg"
                                alt="Abhiman Bhat"
                                className="w-full h-full object-cover grayscale brightness-95"
                            />
                        </div>
                        {/* Decorative Element (Glass Sheet) */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl -z-10" />
                    </motion.div>

                    {/* Bio Text */}
                    <div className="space-y-6">
                        {/* Intro */}
                        <div className="text-lg leading-relaxed text-zinc-400">
                            <ScrollFloat className="inline-flex text-white font-semibold" animationDuration={0.8} stagger={0.03}>
                                Hi, I'm Abhiman Bhat,
                            </ScrollFloat>
                            <ScrollFloat className="inline-flex ml-2" animationDuration={0.8} stagger={0.01}>
                                a BBA student at Global Business School, Hubballi. I am a passionate data analyst with a strong interest in business strategy.
                            </ScrollFloat>
                        </div>

                        <ScrollFloat
                            className="text-lg leading-relaxed text-zinc-400"
                            animationDuration={0.6}
                            stagger={0.015}
                        >
                            I specialize in transforming complex datasets into actionable insights using Power BI, Excel, and SQL. From market analysis to revenue modeling, I approach every problem with analytical rigor and creative thinking.
                        </ScrollFloat>

                        <ScrollFloat
                            className="text-lg leading-relaxed text-zinc-400"
                            animationDuration={0.6}
                            stagger={0.015}
                        >
                            When I'm not analyzing data, you'll find me reading business strategy books or playing chess.
                        </ScrollFloat>
                    </div>
                </div>

                {/* Highlight Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel glass-panel-hover p-6 rounded-xl"
                        >
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-4">
                                <item.icon size={24} className="text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
