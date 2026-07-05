"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import Link from "next/link";

/*
 * ═══════════════════════════════════════════════════════════════════════════
 * PROJECT TEMPLATE GUIDE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Each project follows a structure designed to impress recruiters:
 *
 * 1. TITLE: Clear, concise project name
 * 2. CATEGORY: "PM Case Study" | "Data Analytics" | "Marketing" | "Writing"
 * 3. DESCRIPTION: 1-2 sentences on what the project achieved (focus on IMPACT)
 * 4. TAGS: Technologies/tools used (e.g., "SQL", "Python", "Jira")
 * 5. LINK: URL to detailed case study page or external link
 * 6. IMAGE: Visual representation (dashboard screenshot, mockup, etc.)
 *
 * WHY THIS MATTERS FOR RECRUITERS:
 * - They scan quickly; your description should answer "What did you do?"
 * - Tags show technical breadth
 * - A link to deep-dive signals thoroughness
 *
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-50">
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
                        Featured Work
                    </span>
                    <h2
                        className="heading-lg mt-2"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Projects & Case Studies
                    </h2>
                    <p className="text-slate-600 mt-4 max-w-xl mx-auto">
                        Selected projects showcasing my approach to product management, data
                        analytics, and creative problem-solving.
                    </p>
                </motion.div>

                {/* Featured Projects (Large Cards) */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {projects
                        .filter((p) => p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={project.link} className="group block">
                                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Folder size={48} className="text-slate-300" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            <span
                                                className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${project.category === "PM Case Study"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : project.category === "Data Analytics"
                                                        ? "bg-violet-100 text-violet-700"
                                                        : "bg-rose-100 text-rose-700"
                                                    }`}
                                            >
                                                {project.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                                {project.title}
                                                <ArrowUpRight
                                                    size={18}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                />
                                            </h3>

                                            {/* Description */}
                                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>

                {/* Other Projects (Smaller Cards) */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects
                        .filter((p) => !p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link href={project.link} className="group block">
                                    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        {/* Category */}
                                        <span
                                            className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${project.category === "PM Case Study"
                                                ? "bg-blue-100 text-blue-700"
                                                : project.category === "Marketing"
                                                    ? "bg-rose-100 text-rose-700"
                                                    : "bg-violet-100 text-violet-700"
                                                }`}
                                        >
                                            {project.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-600 text-sm line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
