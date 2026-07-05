"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Gradient Blobs (Monochromatic) */}
            <div className="gradient-blob blob-white absolute top-20 -left-20 w-96 h-96" />
            <div className="gradient-blob blob-gray absolute bottom-20 -right-20 w-80 h-80" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <Sparkles size={16} className="text-white" />
                    <span className="text-sm text-zinc-300 font-medium">
                        Open to Opportunities
                    </span>
                </motion.div>

                {/* Name & Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="block text-zinc-500 font-medium mb-2 tracking-wide">
                        Hi, I&apos;m
                    </span>
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 tracking-tight"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Abhiman Bhat
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-zinc-400 mb-8">
                        Data-Driven <span className="text-white font-normal underline decoration-white/30 underline-offset-8">Problem Solver.</span>
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I transform complex datasets into <strong>actionable insights</strong> using{" "}
                    <strong>Power BI, Excel, and SQL</strong>. From market analysis to revenue modeling,
                    I bridge the gap between data and strategic decisions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="btn-white text-center w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 shadow-lg"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="btn-glass text-center w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 hover:bg-white/10"
                    >
                        Get In Touch
                    </Link>
                </motion.div>

                {/* Role Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-3"
                >
                    {[
                        "Business Analyst",
                        "Data Analyst",
                        "Power BI",
                        "SQL",
                        "Excel",
                        "Python",
                    ].map((role) => (
                        <span
                            key={role}
                            className="glass-pill px-4 py-2 text-sm font-medium"
                        >
                            {role}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={24} className="text-zinc-500 hover:text-white transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    );
}
