"use client";

import { projects } from "@/lib/data";
import { ArrowLeft, Calendar, Tag, Wrench } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 py-24">
            <article className="max-w-4xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-4 ${project.category === "Business Strategy" || project.category === "PM Case Study"
                            ? "bg-blue-100 text-blue-700"
                            : project.category === "Data Analytics"
                                ? "bg-violet-100 text-violet-700"
                                : "bg-rose-100 text-rose-700"
                        }`}>
                        {project.category}
                    </span>

                    <h1 className="heading-xl mb-6" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-sm text-slate-500 border-y border-slate-200 py-6 mb-12">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{project.details.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wrench size={18} />
                            <span>{project.details.tools}</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="prose prose-slate max-w-none"
                >
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-12">
                        <h2 className="heading-md mb-4 text-slate-800">Overview</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {project.details.fullDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="heading-md mb-6 text-slate-800">Key Achievements</h2>
                            <ul className="space-y-4">
                                {project.details.achievements.map((achievement, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 h-fit">
                            <h2 className="heading-md mb-4 text-blue-900">Impact</h2>
                            <p className="text-blue-800 text-lg font-medium leading-relaxed">
                                {project.details.impact}
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200">
                        {project.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm">
                                <Tag size={14} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </article>
        </main>
    );
}
