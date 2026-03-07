"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-[180px] h-[40px] bg-muted/20 rounded-full animate-pulse" />
    }

    const options = [
        { value: "light", icon: <IconSun size={18} /> },
        { value: "dark", icon: <IconMoon size={18} /> },
    ]

    const selectedIndex = options.findIndex(opt => opt.value === (theme === "system" ? "dark" : theme))
    const buttonWidth = 44
    const highlightLeft = 4 + (selectedIndex * buttonWidth)

    const handleSelect = (value: string) => {
        setTheme(value)
    }

    return (
        <div className="flex items-center justify-center">
            <div
                className="relative flex items-center bg-muted/50 border border-border/50 rounded-full p-1 overflow-hidden w-fit backdrop-blur-sm"
                style={{ height: "40px" }}
            >
                <motion.div
                    className="absolute bg-background shadow-sm border border-border/50 rounded-full"
                    initial={false}
                    animate={{
                        left: highlightLeft,
                        width: buttonWidth - 4,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                    }}
                    style={{ height: "32px" }}
                />
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className={`relative z-10 flex items-center justify-center rounded-full transition-colors cursor-pointer outline-none ${theme === option.value
                                ? "text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                        style={{ width: buttonWidth, height: "32px" }}
                    >
                        {option.icon}
                    </button>
                ))}
            </div>
        </div>
    )
}
