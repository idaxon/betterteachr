import Link from "next/link"
import { Sparkles } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-foreground text-white py-16 px-6 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-400 to-primary"></div>

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-1 mb-6">
                            <span className="text-2xl font-bold tracking-tight text-white flex items-baseline">
                                Better<span className="text-gray-400 font-normal">Techr</span>
                                <span className="ml-[3px] w-2 h-2 bg-blue-500 animate-pulse rounded-[1px]" />
                            </span>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-md font-light leading-relaxed">
                            Empowering academic excellence through innovative solutions and expert guidance. Your success is our commitment.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { name: 'Facebook', href: '#' },
                                { name: 'Twitter', href: '#' },
                                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/bettertechr' },
                                { name: 'Instagram', href: '#' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer text-sm text-white"
                                >
                                    {social.name[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-white text-lg">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/services" className="hover:text-white transition-colors">Assignment Help</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Project Assistance</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">ML/AI Development</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Web Development</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 font-light text-sm">
                        &copy; {new Date().getFullYear()} BetterTechr. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
                        <span>Made with ❤️ for students</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
