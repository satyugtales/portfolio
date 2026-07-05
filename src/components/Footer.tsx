"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif text-xl text-slate-800"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                    AB<span className="text-blue-600">.</span>
                </Link>

                {/* Copyright */}
                <p className="text-sm text-slate-500">
                    © {currentYear} Abhiman Bhat. All rights reserved.
                </p>

                {/* Quick Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="#about"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
