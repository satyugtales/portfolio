"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Database,
    LineChart,
    Monitor,
    Users,
    Languages
} from "lucide-react";

const skillCategories = [
    {
        title: "Data Analysis & Visualization",
        icon: BarChart3,
        skills: ["Power BI", "DAX", "Advanced Excel", "Tableau", "Google Analytics", "Statistical Analysis", "Predictive Modeling", "Data Mining"],
    },
    {
        title: "Programming & Database",
        icon: Database,
        skills: ["SQL", "Python", "Pandas", "NumPy", "Data Manipulation", "Query Optimization"],
    },
    {
        title: "Business Analysis",
        icon: LineChart,
        skills: ["Market Sizing (TAM-SAM-SOM)", "JTBD Framework", "Requirements Gathering", "Stakeholder Management", "SWOT Analysis", "Break-Even Analysis", "KPI Development", "A/B Testing", "Revenue Forecasting"],
    },
    {
        title: "Tools & Platforms",
        icon: Monitor,
        skills: ["Jira", "Microsoft Visio", "Notion", "PowerPoint", "Kaggle", "ETL Processes", "Data Quality Management"],
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: ["Problem-Solving", "Critical Thinking", "Communication", "Collaboration", "Detail-Oriented", "Time Management", "Analytical Thinking"],
    },
    {
        title: "Languages",
        icon: Languages,
        skills: ["English (Fluent)", "Kannada (Native)", "Hindi (Fluent)"],
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black/5 border-t border-white/5">
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
                        Expertise
                    </span>
                    <h2
                        className="heading-lg mt-2 text-white"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Skills & Proficiency
                    </h2>
                    <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
                        A comprehensive toolkit for turning raw data into strategic business value.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel glass-panel-hover p-6 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10 text-white">
                                <category.icon size={24} />
                                <h3 className="font-semibold text-white text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm px-3 py-1.5 rounded-lg border font-medium transition-all cursor-default bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
