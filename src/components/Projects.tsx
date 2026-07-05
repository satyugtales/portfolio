"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Folder } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black/10 border-t border-white/5">
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
                        Featured Work
                    </span>
                    <h2
                        className="heading-lg mt-2 text-white"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Projects & Case Studies
                    </h2>
                    <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
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
                                    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden">
                                        <div className="aspect-video bg-white/5 border-b border-white/10 flex items-center justify-center overflow-hidden">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <Folder size={48} className="text-zinc-600" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Category Badge */}
                                            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 bg-white/5 text-zinc-300 border border-white/10">
                                                {project.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors flex items-center gap-2">
                                                {project.title}
                                                <ArrowUpRight
                                                    size={18}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-white"
                                                />
                                            </h3>

                                            {/* Description */}
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs bg-white/5 text-zinc-400 border border-white/5 px-2.5 py-1 rounded-md"
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
                                    <div className="glass-panel glass-panel-hover p-6 rounded-xl">
                                        {/* Category */}
                                        <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-2 bg-white/5 text-zinc-300 border border-white/10">
                                            {project.category}
                                        </span>

                                        {/* Title */}
                                        <h3 className="font-semibold text-white mb-1 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-zinc-400 text-sm line-clamp-2">
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
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
