"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#050508]/40 border-t border-white/5 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif text-xl text-white"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                    AB<span className="text-white">.</span>
                </Link>

                {/* Copyright */}
                <p className="text-sm text-zinc-500">
                    © {currentYear} Abhiman Bhat. All rights reserved.
                </p>

                {/* Quick Links */}
                <div className="flex items-center gap-6">
                    <Link
                        href="#about"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="#projects"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
