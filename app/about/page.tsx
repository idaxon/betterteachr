"use client"

import { Button } from "@/components/ui/button"
import { X, Check, Brain, Zap, Target, Flame } from "lucide-react" // Changed icons to match new vibe
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

            {/* Hero / Intro Section */}
            <section className="relative pt-40 pb-20 px-6 border-b border-border/40 bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Most platforms say: <br />
                        <span className="text-gray-400">“We help students succeed.”</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto space-y-2">
                        <p>Amazing.</p>
                        <p>So does YouTube.</p>
                        <p>So does ChatGPT.</p>
                        <p>So does every LinkedIn post with a 🚀 emoji.</p>
                        <p className="pt-4 text-foreground font-medium">BetterTechr is not here to say that.</p>
                    </div>
                </div>
            </section>

            {/* The Actual Problem */}
            <section className="py-24 px-6 bg-gray-50/50">
                <div className="container mx-auto max-w-3xl">
                    <div className="flex items-center space-x-3 mb-8 justify-center">
                        <span className="text-3xl">🤡</span>
                        <h2 className="text-3xl font-bold">The Actual Problem (No Sugarcoating)</h2>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                        <p className="text-lg text-gray-600">College trains you to:</p>
                        <ul className="space-y-3">
                            {[
                                "Memorize slides",
                                "Clear exams",
                                "Collect certificates like Pokémon cards"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <div className="h-2 w-2 bg-gray-400 rounded-full mr-3"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-100 my-6"></div>
                        <p className="text-lg text-gray-900 font-bold">The tech industry asks one thing:</p>
                        <blockquote className="text-2xl font-bold text-primary italic my-4">
                            “Show me what you can do.”
                        </blockquote>
                        <p className="text-gray-500 italic">
                            Not what you memorized. Not what course you bought. Not how many badges your LinkedIn has.
                        </p>
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center font-medium border border-red-100">
                            Somewhere between college and reality, students get lied to.
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Actually Do */}
            <section className="py-24 px-6 bg-white border-y border-border/40">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <Brain className="h-10 w-10 mx-auto text-primary mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Actually Do</h2>
                        <p className="text-xl text-gray-500">BetterTechr exists to cut the nonsense.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">We help college students:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Build real, explainable tech skills",
                                    "Work on actual projects, not tutorial clones",
                                    "Create CVs & LinkedIn profiles that don’t scream “fresher template #7”",
                                    "Stop hiding behind marks and start showing proof"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                                        <span className="text-lg text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl rotate-1">
                            <h3 className="text-xl font-bold mb-4 opacity-90">Our Promise</h3>
                            <ul className="space-y-4 font-mono text-sm leading-relaxed text-gray-300">
                                <li className="flex items-center"><X className="h-4 w-4 mr-2 text-red-400" /> No fluff.</li>
                                <li className="flex items-center"><X className="h-4 w-4 mr-2 text-red-400" /> No hustle-bro motivation.</li>
                                <li className="flex items-center"><X className="h-4 w-4 mr-2 text-red-400" /> No “believe in yourself” posters.</li>
                                <li className="pt-4 text-white text-base font-bold flex items-center">
                                    <Check className="h-5 w-5 mr-2 text-green-400" /> Just skill → proof → visibility.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We DON'T Do */}
            <section className="py-24 px-6 bg-red-50/50">
                <div className="container mx-auto max-w-3xl text-center">
                    <div className="mb-12">
                        <span className="text-4xl block mb-2">🚫</span>
                        <h2 className="text-3xl font-bold text-gray-900">What We DON’T Do (Important)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {[
                            "No job guarantees",
                            "No fake “100% placement” drama",
                            "No certificate-selling business",
                            "No lying about how hard tech actually is"
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-red-100 flex items-center shadow-sm">
                                <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                                    <X className="h-5 w-5 text-red-500" />
                                </div>
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-xl font-medium text-gray-700">
                        If someone promises all that — they’re selling hope, not skill. <br />
                        <span className="text-red-600 font-bold uppercase tracking-widest text-2xl mt-4 block">Run.</span>
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-24 px-6 bg-white border-t border-border/40">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-full md:w-1/3">
                            <div className="sticky top-24">
                                <h2 className="text-4xl font-bold mb-4">About the Founder</h2>
                                <div className="h-1 w-20 bg-primary mb-6"></div>
                                <p className="text-gray-500 font-light">
                                    BetterTechr wasn’t created in a boardroom. It was created in frustration.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 prose prose-lg prose-gray">
                            <p className="text-xl font-medium text-gray-900">The founder is a student who:</p>
                            <ul className="space-y-2 not-prose mb-8">
                                {[
                                    "Sent resumes that got zero replies",
                                    "Was told “your profile is good” — but never shortlisted",
                                    "Had certificates but no clarity",
                                    "Realized college doesn’t prepare you for recruiters — it prepares you for exams"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-600">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 bg-gray-400 rounded-full shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p>
                                Instead of complaining, they built what they needed: <br />
                                <span className="font-bold text-primary">A system focused on skills, projects, and visibility — not promises, not hype, not shortcuts.</span>
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary my-8 not-prose">
                                <p className="text-gray-700 italic">
                                    "BetterTechr is built by someone who’s been ignored, rejected, and confused — and decided to fix it instead of accepting it."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who BetterTechr Is For / Why Trust */}
            <section className="py-24 px-6 bg-[#0a0a0a] text-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Who is it for */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <Target className="h-6 w-6 mr-3 text-primary" />
                                Who This Is For
                            </h3>
                            <ul className="space-y-4 text-gray-400 font-light">
                                {[
                                    "Are done doing things just for marks",
                                    "Want skills they can explain without panic",
                                    "Understand that building > memorizing",
                                    "Want to stand out, not just pass semesters"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 mr-3 text-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-8 text-white font-medium">
                                If this sounds uncomfortable — <span className="text-primary">good. Growth usually is.</span>
                            </p>
                        </div>

                        {/* Why Trust */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center">
                                <Flame className="h-6 w-6 mr-3 text-orange-500" />
                                Why Trust BetterTechr?
                            </h3>
                            <div className="space-y-4 text-gray-400 font-light">
                                <p>
                                    Because we’re not pretending to “understand students”.
                                </p>
                                <p className="text-xl text-white font-bold">We ARE students.</p>
                                <p>
                                    We’ve been there. We know the gaps. We know the lies. We know what actually works.
                                </p>
                                <p className="text-white">And we’re building it in public.</p>
                            </div>
                        </div>

                    </div>

                    {/* The Goal */}
                    <div className="mt-24 text-center border-t border-white/10 pt-16">
                        <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-500 mb-6">The Only Goal</h2>
                        <p className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
                            Make students tech-ready, confident, and impossible to ignore.
                        </p>
                        <p className="mt-8 text-gray-500">If that happens — BetterTechr wins.</p>
                    </div>
                </div>
            </section>

            {/* Final Note */}
            <section className="py-24 px-6 bg-white text-center">
                <div className="container mx-auto max-w-2xl">
                    <span className="text-4xl block mb-4">🧨</span>
                    <h2 className="text-3xl font-bold mb-6">Final Note</h2>
                    <p className="text-xl text-gray-600 mb-8 font-light">
                        We’re not here to impress everyone. <br />
                        We’re here to build something real.
                    </p>
                    <div className="space-y-2 text-lg font-medium text-gray-800">
                        <p>If you get it — welcome.</p>
                        <p>If you don’t — that’s fine.</p>
                    </div>
                    <p className="mt-12 text-gray-500 italic">
                        BetterTechr isn’t for everyone. <br />
                        And that’s exactly the point. 🔥
                    </p>

                    <div className="mt-12">
                        <Link href="/services">
                            <Button className="bg-black text-white px-8 py-6 rounded-full text-lg hover:scale-105 transition-transform">
                                Start Your Journey
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
