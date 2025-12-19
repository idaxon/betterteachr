"use client"

import { Lock } from "lucide-react"

export default function PrivacyPage() {
    const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Header Section */}
            <section className="relative pt-40 pb-20 px-6 border-b border-border/40 bg-white">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 font-light">Last updated: {lastUpdated}</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="prose prose-gray max-w-none space-y-12">

                    {/* Intro */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">At BetterTechr, your privacy matters.</h2>
                        <p className="text-gray-600 leading-relaxed font-light">
                            This Privacy Policy explains how we collect, use, and protect your information when you use our website, platform, or services.
                        </p>
                    </div>

                    {/* 1. Information We Collect */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">1. Information We Collect</h3>
                        <p className="text-gray-600 font-light">We may collect the following information:</p>

                        <div className="ml-5 space-y-4">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">a. Personal Information</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600 font-light">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>College / educational details</li>
                                    <li>CV, LinkedIn profile, portfolio, or project details (if shared)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">b. Usage Information</h4>
                                <ul className="list-disc pl-5 space-y-1 text-gray-600 font-light">
                                    <li>Pages visited</li>
                                    <li>Time spent on the platform</li>
                                    <li>Basic interaction data (for analytics and improvement)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. How We Use */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">2. How We Use Your Information</h3>
                        <p className="text-gray-600 font-light">We use your information to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Provide and improve our services</li>
                            <li>Offer personalized guidance and support</li>
                            <li>Communicate updates, support messages, or important notices</li>
                            <li>Understand how students use the platform and improve the experience</li>
                        </ul>
                        <p className="text-gray-500 font-medium italic">We only collect minimum data required to deliver value.</p>
                    </div>

                    {/* 3. What We Do NOT Do */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">3. What We Do NOT Do</h3>
                        <p className="text-gray-600 font-light">To be clear:</p>
                        <ul className="space-y-2 text-gray-600 font-light">
                            <li className="flex items-center"><span className="mr-2">❌</span> We do not sell your personal data</li>
                            <li className="flex items-center"><span className="mr-2">❌</span> We do not rent your information to advertisers</li>
                            <li className="flex items-center"><span className="mr-2">❌</span> We do not misuse your CV, LinkedIn data, or projects</li>
                        </ul>
                        <p className="text-foreground font-medium">Your data stays yours.</p>
                    </div>

                    {/* 4. Data Sharing */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">4. Data Sharing & Third-Party Services</h3>
                        <p className="text-gray-600 font-light">We may use trusted third-party tools for:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Website analytics (e.g., Google Analytics)</li>
                            <li>Email communication</li>
                            <li>Payment processing (if applicable)</li>
                        </ul>
                        <p className="text-gray-600 font-light">These services only receive information necessary to perform their functions and are required to protect your data.</p>
                    </div>

                    {/* 5. Data Security */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">5. Data Security</h3>
                        <p className="text-gray-600 font-light">
                            We take reasonable technical and organizational measures to protect your data. However, no online platform can guarantee 100% security.
                        </p>
                    </div>

                    {/* 6. Cookies */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">6. Cookies</h3>
                        <p className="text-gray-600 font-light">BetterTechr may use cookies to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Improve website functionality</li>
                            <li>Understand user behavior</li>
                            <li>Enhance overall experience</li>
                        </ul>
                        <p className="text-gray-600 font-light">You can disable cookies in your browser settings if you prefer.</p>
                    </div>

                    {/* 7. Your Rights */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">7. Your Rights</h3>
                        <p className="text-gray-600 font-light">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 font-light">
                            <li>Request access to your personal data</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Opt out of non-essential communications</li>
                        </ul>
                        <p className="text-gray-600 font-light">To exercise these rights, contact us at the email below.</p>
                    </div>

                    {/* 8. Children */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">8. Children’s Privacy</h3>
                        <p className="text-gray-600 font-light">
                            BetterTechr is not intended for users under the age of 13. We do not knowingly collect personal data from children.
                        </p>
                    </div>

                    {/* 9. Changes */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">9. Changes to This Policy</h3>
                        <p className="text-gray-600 font-light">
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
                        </p>
                    </div>

                    {/* 10. Contact */}
                    <div className="space-y-4 pt-8 border-t border-border">
                        <h3 className="text-xl font-bold text-foreground">10. Contact Us</h3>
                        <p className="text-gray-600 font-light">If you have questions or concerns about this Privacy Policy, contact us at:</p>
                        <a href="mailto:support@bettertechr.xyz" className="text-primary font-medium hover:underline text-lg">
                            📩 support@bettertechr.xyz
                        </a>
                    </div>

                    {/* 11. Trust Note */}
                    <div className="mt-12 bg-gray-50 border border-blue-100 rounded-xl p-6 flex items-start space-x-4">
                        <Lock className="h-6 w-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Trust Note</h4>
                            <p className="text-gray-600 text-sm font-light">
                                We believe students deserve transparency. We collect less, protect more, and never trade trust for growth.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}
