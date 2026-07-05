"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WritingPage() {
    return (
        <main className="min-h-screen bg-[#050508]">
            <Navbar />

            <section className="pt-32 pb-24 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-medium text-zinc-400 tracking-wide uppercase">
                            The Hub
                        </span>
                        <h1
                            className="heading-xl mt-2 mb-6 text-white"
                            style={{ fontFamily: "var(--font-instrument-serif)" }}
                        >
                            Writing & Thoughts
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            My digital bookshelf, latest insights from LinkedIn, and community discussions.
                            A glimpse into what I'm learning and thinking about.
                        </p>
                    </motion.div>

                    {/* Books Shelf */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <BookOpen className="text-white" size={24} />
                            <h2 className="heading-md text-white">Digital Bookshelf</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass-panel glass-panel-hover p-6 rounded-xl flex gap-6">
                                <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-md flex-shrink-0 flex items-center justify-center text-zinc-500">
                                    <span className="text-xs text-center px-2">Cover Image</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-1">Book Title Here</h3>
                                    <p className="text-zinc-500 text-sm mb-3">Author Name</p>
                                    <p className="text-zinc-400 text-sm italic">
                                        "Abhiman's Takeaway: A one-sentence summary of what this book taught you or changed your perspective on."
                                    </p>
                                </div>
                            </div>

                            <div className="glass-panel glass-panel-hover p-6 rounded-xl flex gap-6">
                                <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-md flex-shrink-0 flex items-center justify-center text-zinc-500">
                                    <span className="text-xs text-center px-2">Cover Image</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-1">Another Great Read</h3>
                                    <p className="text-zinc-500 text-sm mb-3">Author Name</p>
                                    <p className="text-zinc-400 text-sm italic">
                                        "Key insight regarding business strategy or data analytics that you apply in your work."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* LinkedIn Feed */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <Linkedin className="text-white" size={24} />
                            <h2 className="heading-md text-white">Latest Insights from LinkedIn</h2>
                        </div>

                        <div className="grid gap-6">
                            <Link href="https://linkedin.com/in/abhiman-bhat" target="_blank" className="group block glass-panel glass-panel-hover p-6 rounded-xl">
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                                    How Data Analytics is Transforming Small Businesses in 2026
                                </h3>
                                <p className="text-zinc-400 mb-4 line-clamp-2">
                                    Sharing my thoughts on the accessibility of BI tools for SMEs and why every business needs a data strategy...
                                </p>
                                <span className="text-white text-sm font-medium group-hover:underline">Read on LinkedIn →</span>
                            </Link>

                            <Link href="https://linkedin.com/in/abhiman-bhat" target="_blank" className="group block glass-panel glass-panel-hover p-6 rounded-xl">
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                                    The Intersection of Creative Storytelling and Hard Data
                                </h3>
                                <p className="text-zinc-400 mb-4 line-clamp-2">
                                    Reflecting on my journey with Satyug Tales and how metrics drove our creative decisions...
                                </p>
                                <span className="text-white text-sm font-medium group-hover:underline">Read on LinkedIn →</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Reddit Contributions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                            <MessageSquare className="text-white" size={24} />
                            <h2 className="heading-md text-white">Community discussions on Reddit</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                                <div className="flex items-center gap-2 mb-3 text-xs text-zinc-400 uppercase tracking-wider font-medium">
                                    <span className="bg-white/10 text-white px-2.5 py-0.5 rounded border border-white/5">r/DataAnalytics</span>
                                    <span>• Discussion</span>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Best practices for cleaning messy Excel datasets before Power BI import?
                                </h3>
                                <p className="text-zinc-400 mb-4">
                                    "I shared my workflow using Power Query for automated cleaning and validation steps..."
                                </p>
                                <Link href="#" className="text-white text-sm font-medium hover:underline">View Thread →</Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
