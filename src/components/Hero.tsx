"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-50" />

            {/* Gradient Blobs */}
            <div className="gradient-blob blob-blue absolute top-20 -left-20 w-96 h-96" />
            <div className="gradient-blob blob-rose absolute bottom-20 -right-20 w-80 h-80" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8"
                >
                    <Sparkles size={16} className="text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">
                        Open to Opportunities
                    </span>
                </motion.div>

                {/* Name & Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="block text-slate-500 font-medium mb-2 tracking-wide">
                        Hi, I&apos;m
                    </span>
                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-medium text-slate-900 mb-6 tracking-tight"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Abhiman Bhat
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-light text-slate-500 mb-8">
                        Data-Driven <span className="text-blue-600 font-normal">Problem Solver.</span>
                    </h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
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
                        className="bg-slate-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-700 transition-all hover:scale-105 shadow-lg"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="text-slate-700 px-6 py-3 rounded-xl font-medium border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all"
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
                    ].map((role, index) => (
                        <span
                            key={role}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${index < 3
                                ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
                                : "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100"
                                }`}
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
                    <ArrowDown size={24} className="text-slate-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
