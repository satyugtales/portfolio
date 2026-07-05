"use client";

import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import Link from "next/link";

export default function ResumeDownload() {
    return (
        <section id="resume" className="py-24 bg-black/10 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2
                        className="heading-md mb-6 text-white"
                        style={{ fontFamily: "var(--font-instrument-serif)" }}
                    >
                        Resume & Qualifications
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                        A detailed overview of my academic background, technical skills, and professional experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 btn-white px-6 py-3 rounded-xl font-medium shadow-md w-full sm:w-auto justify-center hover:scale-105 transition-all"
                        >
                            <Eye size={20} />
                            View Resume
                        </Link>

                        <Link
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 btn-glass px-6 py-3 rounded-xl font-medium w-full sm:w-auto justify-center hover:scale-105 hover:bg-white/10 transition-all"
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
