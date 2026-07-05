"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function WritingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <span className="text-sm font-medium text-blue-600 tracking-wide uppercase">
                            The Hub
                        </span>
                        <h1
                            className="heading-xl mt-2 mb-6"
                            style={{ fontFamily: "var(--font-instrument-serif)" }}
                        >
                            Writing & Thoughts
                        </h1>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                            <BookOpen className="text-blue-600" size={24} />
                            <h2 className="heading-md text-slate-800">Digital Bookshelf</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* GUIDE: Copy this block for a new book */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
                                <div className="w-24 h-32 bg-slate-200 rounded-md flex-shrink-0 flex items-center justify-center text-slate-400">
                                    {/* Replace with book cover image */}
                                    <span className="text-xs text-center px-2">Cover Image</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 text-lg mb-1">Book Title Here</h3>
                                    <p className="text-slate-500 text-sm mb-3">Author Name</p>
                                    <p className="text-slate-600 text-sm italic">
                                        "Abhiman's Takeaway: A one-sentence summary of what this book taught you or changed your perspective on."
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-6 hover:shadow-md transition-shadow">
                                <div className="w-24 h-32 bg-slate-200 rounded-md flex-shrink-0 flex items-center justify-center text-slate-400">
                                    <span className="text-xs text-center px-2">Cover Image</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 text-lg mb-1">Another Great Read</h3>
                                    <p className="text-slate-500 text-sm mb-3">Author Name</p>
                                    <p className="text-slate-600 text-sm italic">
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
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                            <Linkedin className="text-blue-700" size={24} />
                            <h2 className="heading-md text-slate-800">Latest Insights from LinkedIn</h2>
                        </div>

                        <div className="grid gap-6">
                            {/* GUIDE: Copy this block for a new post */}
                            <Link href="https://linkedin.com/in/abhiman-bhat" target="_blank" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    How Data Analytics is Transforming Small Businesses in 2026
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-2">
                                    Sharing my thoughts on the accessibility of BI tools for SMEs and why every business needs a data strategy...
                                </p>
                                <span className="text-blue-600 text-sm font-medium group-hover:underline">Read on LinkedIn →</span>
                            </Link>

                            <Link href="https://linkedin.com/in/abhiman-bhat" target="_blank" className="group block bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all">
                                <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                    The Intersection of Creative Storytelling and Hard Data
                                </h3>
                                <p className="text-slate-600 mb-4 line-clamp-2">
                                    Reflecting on my journey with Satyug Tales and how metrics drove our creative decisions...
                                </p>
                                <span className="text-blue-600 text-sm font-medium group-hover:underline">Read on LinkedIn →</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Reddit Contributions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
                            <MessageSquare className="text-orange-600" size={24} />
                            <h2 className="heading-md text-slate-800">Community discussions on Reddit</h2>
                        </div>

                        <div className="space-y-4">
                            {/* GUIDE: Copy this block for a new thread */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <div className="flex items-center gap-2 mb-3 text-xs text-slate-500 uppercase tracking-wider font-medium">
                                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">r/DataAnalytics</span>
                                    <span>• Discussion</span>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                    Best practices for cleaning messy Excel datasets before Power BI import?
                                </h3>
                                <p className="text-slate-600 mb-4">
                                    "I shared my workflow using Power Query for automated cleaning and validation steps..."
                                </p>
                                <Link href="#" className="text-orange-600 text-sm font-medium hover:underline">View Thread →</Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
