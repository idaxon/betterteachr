"use client"

import Link from "next/link"

export default function TermsPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-6 border-b border-border/40 bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                    <p className="text-gray-500 font-light">Last updated: {lastUpdated}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="prose prose-gray max-w-none space-y-12">

                    {/* Intro */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Welcome to BetterTechr.</h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            By accessing or using our website, platform, or services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use BetterTechr.
                        </p>
                    </div>

                    {/* 1. About */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">1. About BetterTechr</h3>
                        <p className="text-gray-600 font-light">
                            BetterTechr is a student-focused tech learning and career-readiness platform. We provide guidance, support, and services related to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Web and app development</li>
                            <li>Project assistance and mentorship</li>
                            <li>CV and LinkedIn profile makeovers</li>
                            <li>Tech skill upskilling and career guidance</li>
                        </ul>
                        <p className="text-gray-500 text-sm italic border-l-2 border-primary/20 pl-4 py-2 bg-gray-50 rounded-r">
                            BetterTechr does not guarantee jobs, internships, grades, or placements.
                        </p>
                    </div>

                    {/* 2. Eligibility */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">2. Eligibility</h3>
                        <p className="text-gray-600 font-light">BetterTechr is intended for college students and early-career learners.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>You must provide accurate and truthful information while using our services.</li>
                            <li>You are responsible for maintaining the confidentiality of your account details (if applicable).</li>
                        </ul>
                    </div>

                    {/* 3. Use of Services */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">3. Use of Services</h3>
                        <p className="text-gray-600 font-light">By using BetterTechr, you agree to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Use the platform only for lawful and ethical purposes</li>
                            <li>Not submit plagiarized, illegal, or harmful content</li>
                            <li>Not misuse, harass, or exploit mentors, contributors, or support staff</li>
                        </ul>
                        <p className="text-gray-600 font-light">We reserve the right to suspend or terminate access if misuse is detected.</p>
                    </div>

                    {/* 4. Payments */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">4. Payments & Services</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Some services may be paid, while others may be free.</li>
                            <li>Prices, offerings, and availability may change without prior notice.</li>
                            <li>Payments are generally non-refundable once a service has been delivered, unless explicitly stated otherwise.</li>
                            <li>BetterTechr reserves the right to refuse service in cases of misuse or policy violations.</li>
                        </ul>
                    </div>

                    {/* 5. IP */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">5. Intellectual Property</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>All platform content, branding, design, and materials belong to BetterTechr, unless otherwise stated.</li>
                            <li>Users retain ownership of their personal work, projects, CVs, and portfolios submitted to the platform.</li>
                            <li>You may not copy, distribute, or misuse BetterTechr content without permission.</li>
                        </ul>
                    </div>

                    {/* 6. Third Party */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">6. Third-Party Platforms</h3>
                        <p className="text-gray-600 font-light">
                            BetterTechr may interact with or reference third-party platforms such as LinkedIn, GitHub, Google, or payment gateways. We are not responsible for the policies, actions, or outcomes of third-party services.
                        </p>
                    </div>

                    {/* 7. Liability */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">7. Limitation of Liability</h3>
                        <p className="text-gray-600 font-light">BetterTechr is not responsible for:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Academic results or grades</li>
                            <li>Job or internship outcomes</li>
                            <li>Loss of opportunities or income</li>
                            <li>Technical issues beyond our reasonable control</li>
                        </ul>
                        <p className="text-gray-600 font-light">All services are provided on a best-effort basis.</p>
                    </div>

                    {/* 8. Termination */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">8. Termination</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>You may stop using BetterTechr at any time.</li>
                            <li>We may suspend or terminate access if these Terms are violated or if misuse is identified.</li>
                        </ul>
                    </div>

                    {/* 9. Changes */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">9. Changes to Terms</h3>
                        <p className="text-gray-600 font-light">
                            We may update these Terms & Conditions from time to time. Continued use of BetterTechr after changes means you accept the updated terms.
                        </p>
                    </div>

                    {/* 10. Contact */}
                    <div className="space-y-4 pt-8 border-t border-border">
                        <h3 className="text-xl font-bold text-foreground">10. Contact Us</h3>
                        <p className="text-gray-600 font-light">For any questions regarding these Terms, contact us at:</p>
                        <a href="mailto:support@bettertechr.xyz" className="text-primary font-medium hover:underline text-lg">
                            📩 support@bettertechr.xyz
                        </a>
                    </div>

                </div>
            </section>

        </div>
    )
}
