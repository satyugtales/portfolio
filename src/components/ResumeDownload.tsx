"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import Link from "next/link";

export default function ResumeDownload() {
    return (
        <section id="resume" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2
                        className="heading-md mb-6 text-slate-800"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Resume & Qualifications
                    </h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        A detailed overview of my academic background, technical skills, and professional experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all hover:-translate-y-0.5 shadow-md w-full sm:w-auto justify-center"
                        >
                            <Eye size={20} />
                            View Resume
                        </Link>

                        <Link
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-xl font-medium hover:bg-slate-50 hover:text-slate-900 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                        >
                            <Download size={20} />
                            Download PDF
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
