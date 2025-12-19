"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">

            <section className="py-32 px-6 max-w-3xl mx-auto text-center">
                <div className="space-y-12">

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                            We’re Not Hiring.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide">
                            Read that again.
                        </p>
                    </div>

                    <div className="h-px w-24 bg-border mx-auto"></div>

                    <div className="space-y-8 text-lg font-light leading-relaxed text-gray-600">
                        <p>
                            If you’re emailing because you need a job — this isn’t for you.
                        </p>
                        <p>
                            But if you think:
                        </p>
                        <blockquote className="text-2xl md:text-3xl font-bold text-foreground font-serif italic">
                            “I could actually make BetterTechr better.”
                        </blockquote>
                        <p>
                            Go ahead. Shoot your shot.
                        </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl inline-block w-full max-w-md mx-auto hover:border-blue-100 transition-colors duration-300">
                        <div className="flex items-center justify-center space-x-2 mb-2 text-primary">
                            <Mail className="h-5 w-5" />
                            <span className="text-sm font-semibold uppercase tracking-wider">Direct Access</span>
                        </div>
                        <a href="mailto:hiring.betterteachrhrcoming@gmail.com" className="text-lg md:text-xl font-medium border-b hover:border-foreground transition-all">
                            hiring.betterteachrhrcoming@gmail.com
                        </a>
                    </div>

                    <div className="text-left max-w-lg mx-auto bg-white p-8 border border-border/40 shadow-sm rounded-xl space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-black mt-2.5 shrink-0"></div>
                            <p className="text-gray-600">Send your CV / GitHub / portfolio.</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-black mt-2.5 shrink-0"></div>
                            <p className="text-gray-600">Add one line: <span className="text-foreground font-medium">what you’d fix or build here.</span></p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono text-gray-400 pt-8 border-t border-border/40">
                        <div className="text-center">
                            <span className="block text-gray-900 font-bold text-lg mb-1">Average?</span>
                            Ignored.
                        </div>
                        <div className="text-center">
                            <span className="block text-gray-900 font-bold text-lg mb-1">Good?</span>
                            Noted.
                        </div>
                        <div className="text-center">
                            <span className="block text-primary font-bold text-lg mb-1">Great?</span>
                            We reply.
                        </div>
                    </div>

                    <div className="flex justify-center space-x-8 text-xs text-gray-300 uppercase tracking-[0.2em] pt-8">
                        <span>No HR</span>
                        <span>No Forms</span>
                        <span>No Fake Urgency</span>
                    </div>

                </div>
            </section>

        </div>
    )
}
