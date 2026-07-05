"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, Folder, Filter, SlidersHorizontal, X } from "lucide-react";

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSkill, setSelectedSkill] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Extract unique categories and skills
    const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
    const skills = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags))).sort()];

    // Filter logic
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchSkill = selectedSkill === "All" || project.tags.includes(selectedSkill);
            return matchCategory && matchSkill;
        });
    }, [selectedCategory, selectedSkill]);

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 text-center md:text-left"
                    >
                        <h1 className="heading-xl mb-4" style={{ fontFamily: "var(--font-instrument-serif)" }}>
                            All Projects
                        </h1>
                        <p className="text-slate-600 max-w-2xl">
                            Explore my complete portfolio of case studies, data analysis, and strategic frameworks.
                        </p>
                    </motion.div>

                    {/* Filters Toolbar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-12 sticky top-24 z-30"
                    >
                        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">

                            {/* Category Tabs (Desktop) */}
                            <div className="hidden md:flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category
                                            ? "bg-slate-900 text-white shadow-md"
                                            : "bg-transparent text-slate-600 hover:bg-slate-100"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile Category & Skill Filters Toggle */}
                            <div className="md:hidden flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-800">
                                    {filteredProjects.length} Result{filteredProjects.length !== 1 ? 's' : ''}
                                </span>
                                <button
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
                                >
                                    <SlidersHorizontal size={16} />
                                    Filters
                                </button>
                            </div>

                            {/* Skills Dropdown (Desktop) */}
                            <div className="hidden md:flex items-center gap-3 border-l border-slate-200 pl-4 w-full md:w-auto">
                                <Filter size={18} className="text-slate-400" />
                                <select
                                    value={selectedSkill}
                                    onChange={(e) => setSelectedSkill(e.target.value)}
                                    className="bg-transparent text-sm font-medium text-slate-700 outline-none cursor-pointer w-full md:w-48 appearance-none hover:text-blue-600 transition-colors"
                                >
                                    <option value="All">Filter by Tool</option>
                                    {skills.filter(s => s !== "All").map(skill => (
                                        <option key={skill} value={skill}>{skill}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Mobile Filter Menu */}
                        <AnimatePresence>
                            {isFilterOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="md:hidden bg-white border-x border-b border-slate-200 rounded-b-2xl p-4 overflow-hidden"
                                >
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Category</label>
                                            <div className="flex flex-wrap gap-2">
                                                {categories.map(category => (
                                                    <button
                                                        key={category}
                                                        onClick={() => setSelectedCategory(category)}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${selectedCategory === category
                                                            ? "bg-slate-900 border-slate-900 text-white"
                                                            : "bg-white border-slate-200 text-slate-600"
                                                            }`}
                                                    >
                                                        {category}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">Tool</label>
                                            <select
                                                value={selectedSkill}
                                                onChange={(e) => setSelectedSkill(e.target.value)}
                                                className="w-full p-2 rounded-lg border border-slate-200 text-sm"
                                            >
                                                <option value="All">All Tools</option>
                                                {skills.filter(s => s !== "All").map(skill => (
                                                    <option key={skill} value={skill}>{skill}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                >
                                    <Link href={project.link} className="group block h-full">
                                        <article className="h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                            {/* Image */}
                                            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden relative">
                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <Folder size={48} className="text-slate-300" />
                                                )}

                                                {/* Overlay Badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm ${project.category === "PM Case Study" || project.category === "Business Strategy"
                                                        ? "bg-white/90 text-blue-700"
                                                        : project.category === "Data Analytics"
                                                            ? "bg-white/90 text-violet-700"
                                                            : "bg-white/90 text-rose-700"
                                                        }`}>
                                                        {project.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors flex items-start justify-between gap-2">
                                                    {project.title}
                                                    <ArrowUpRight size={18} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-y-1" />
                                                </h3>

                                                <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-grow">
                                                    {project.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mt-auto">
                                                    {project.tags.slice(0, 3).map(tag => (
                                                        <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2 py-1 rounded">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {project.tags.length > 3 && (
                                                        <span className="text-xs text-slate-400 px-1 py-1">+ {project.tags.length - 3}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24 text-slate-400">
                            <Folder size={48} className="mx-auto mb-4 opacity-20" />
                            <p className="text-lg font-medium">No projects found matching these filters.</p>
                            <button
                                onClick={() => { setSelectedCategory("All"); setSelectedSkill("All"); }}
                                className="mt-4 text-blue-600 hover:underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
