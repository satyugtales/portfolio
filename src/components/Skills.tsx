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
        color: "blue"
    },
    {
        title: "Programming & Database",
        icon: Database,
        skills: ["SQL", "Python", "Pandas", "NumPy", "Data Manipulation", "Query Optimization"],
        color: "violet"
    },
    {
        title: "Business Analysis",
        icon: LineChart,
        skills: ["Market Sizing (TAM-SAM-SOM)", "JTBD Framework", "Requirements Gathering", "Stakeholder Management", "SWOT Analysis", "Break-Even Analysis", "KPI Development", "A/B Testing", "Revenue Forecasting"],
        color: "emerald"
    },
    {
        title: "Tools & Platforms",
        icon: Monitor,
        skills: ["Jira", "Microsoft Visio", "Notion", "PowerPoint", "Kaggle", "ETL Processes", "Data Quality Management"],
        color: "orange"
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: ["Problem-Solving", "Critical Thinking", "Communication", "Collaboration", "Detail-Oriented", "Time Management", "Analytical Thinking"],
        color: "rose"
    },
    {
        title: "Languages",
        icon: Languages,
        skills: ["English (Fluent)", "Kannada (Native)", "Hindi (Fluent)"],
        color: "slate"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                        Expertise
                    </span>
                    <h2
                        className="heading-lg mt-2"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Skills & Proficiency
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-xl mx-auto">
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
                            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 ${category.color === 'blue' ? 'text-blue-600' :
                                    category.color === 'violet' ? 'text-violet-600' :
                                        category.color === 'emerald' ? 'text-emerald-600' :
                                            category.color === 'orange' ? 'text-orange-600' :
                                                category.color === 'rose' ? 'text-rose-600' :
                                                    'text-slate-600'
                                }`}>
                                <category.icon size={24} />
                                <h3 className="font-semibold text-slate-800 text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`text-sm px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-default ${category.color === 'blue' ? 'bg-blue-100/50 text-blue-700 border-blue-200 hover:bg-blue-100' :
                                                category.color === 'violet' ? 'bg-violet-100/50 text-violet-700 border-violet-200 hover:bg-violet-100' :
                                                    category.color === 'emerald' ? 'bg-emerald-100/50 text-emerald-700 border-emerald-200 hover:bg-emerald-100' :
                                                        category.color === 'orange' ? 'bg-orange-100/50 text-orange-700 border-orange-200 hover:bg-orange-100' :
                                                            category.color === 'rose' ? 'bg-rose-100/50 text-rose-700 border-rose-200 hover:bg-rose-100' :
                                                                'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                                            }`}
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
