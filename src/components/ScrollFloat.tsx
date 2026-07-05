"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollFloatProps {
    children: string;
    className?: string;
    animationDuration?: number;
    stagger?: number;
}

export default function ScrollFloat({
    children,
    className = "",
    animationDuration = 0.5,
    stagger = 0.02
}: ScrollFloatProps) {
    // Split text into words (or characters if preferred, but words are cleaner for bio)
    const words = children.split(" ");

    return (
        <motion.p
            className={`flex flex-wrap gap-x-[0.3em] gap-y-[0.1em] ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: stagger
                    }
                }
            }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 10,
                            filter: "blur(4px)"
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                                duration: animationDuration,
                                ease: "easeOut"
                            }
                        }
                    }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
}
