"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/writing", label: "Writing" },
    { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif text-2xl text-white hover:text-white/80 transition-colors"
                    style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                    AB<span className="text-white">.</span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-zinc-400 hover:text-white text-sm font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-zinc-400 hover:text-white"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#050508]/95 border-l border-white/10 shadow-2xl p-6 pt-24 backdrop-blur-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                className="flex flex-col gap-4"
                            >
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        variants={{
                                            hidden: { opacity: 0, x: 20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block bg-white/5 border border-white/10 p-4 rounded-xl shadow-sm active:scale-95 transition-transform"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-white font-medium text-lg">{link.label}</span>
                                                <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100" />
                                            </div>
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <Link
                                        href="/resume.pdf"
                                        target="_blank"
                                        className="block bg-white text-black p-4 rounded-xl shadow-lg text-center font-medium active:scale-95 transition-transform hover:bg-zinc-200"
                                    >
                                        Download Resume
                                    </Link>
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
