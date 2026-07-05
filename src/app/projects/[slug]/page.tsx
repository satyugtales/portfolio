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
        <main className="min-h-screen bg-[#050508] py-24">
            <article className="max-w-4xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group"
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
                    <span className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-4 bg-white/5 text-zinc-300 border border-white/10">
                        {project.category}
                    </span>

                    <h1 className="heading-xl mb-6 text-white" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-sm text-zinc-400 border-y border-white/10 py-6 mb-12">
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
                    className="prose prose-invert max-w-none"
                >
                    <div className="glass-panel p-8 rounded-2xl mb-12">
                        <h2 className="heading-md mb-4 text-white">Overview</h2>
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            {project.details.fullDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div>
                            <h2 className="heading-md mb-6 text-white">Key Achievements</h2>
                            <ul className="space-y-4">
                                {project.details.achievements.map((achievement, i) => (
                                    <li key={i} className="flex gap-3 text-zinc-300">
                                        <span className="flex-shrink-0 w-6 h-6 bg-white/10 text-white border border-white/15 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                                            ✓
                                        </span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-fit">
                            <h2 className="heading-md mb-4 text-white">Impact</h2>
                            <p className="text-zinc-300 text-lg font-medium leading-relaxed">
                                {project.details.impact}
                            </p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
                        {project.tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 bg-white/5 text-zinc-400 border border-white/5 px-3 py-1.5 rounded-lg text-sm">
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
