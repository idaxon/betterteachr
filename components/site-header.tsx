"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    const navItems = [
        { name: "Services", href: "/services" },
        { name: "How it Works", href: pathname === "/" ? "#how-it-works" : "/#how-it-works" },
        { name: "Reviews", href: pathname === "/" ? "#testimonials" : "/#testimonials" },
    ]

    return (
        <header className="fixed top-6 w-full z-50 px-4">
            <div className="mx-auto max-w-5xl">
                <div className="bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-full px-4 py-2.5 shadow-sm md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-1 group shrink-0">
                            <span className="text-xl font-bold tracking-tight text-foreground flex items-baseline">
                                Better<span className="text-gray-500 font-normal">Techr</span>
                                <span className="ml-[2px] w-1.5 h-1.5 bg-primary animate-pulse rounded-[1px]" />
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-gray-600 px-4 py-2 rounded-full border border-transparent hover:border-black hover:text-black transition-all"
                                    onClick={(e) => {
                                        if (item.href.startsWith("#")) {
                                            e.preventDefault()
                                            const element = document.querySelector(item.href)
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" })
                                            }
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Action */}
                        <div className="flex items-center space-x-3 shrink-0">
                            <Link href="/services">
                                <Button
                                    className="bg-[#1a1a1a] hover:bg-black text-white font-medium rounded-full px-6 transition-all duration-300 shadow-sm active:scale-95 h-10 text-sm"
                                >
                                    Get Started
                                </Button>
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <div className="mt-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl animate-in slide-in-from-top-2">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-foreground hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                                    onClick={(e) => {
                                        setIsMobileMenuOpen(false)
                                        if (item.href.startsWith("#")) {
                                            e.preventDefault()
                                            const element = document.querySelector(item.href)
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" })
                                            }
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
