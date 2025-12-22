"use client"

import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Code,
  Brain,
  Smartphone,
  FileText,
  Star,
  Linkedin,
  Crown,
  ArrowRight,
  Check,
  Zap,
  Layout,
  Plus,
  TrendingUp,
  Percent,
  Sparkles
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Assignment Help",
      description: "Expert assistance across all academic subjects with guaranteed quality.",
      price: "₹499",
      features: ["All subjects covered", "Plagiarism-free", "24h delivery"],
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Project Assistance",
      description: "End-to-end guidance for academic and professional projects.",
      price: "₹999+",
      features: ["Code review", "Documentation", "Presentation support"],
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ML/AI Development",
      description: "Custom machine learning models and AI solutions.",
      price: "₹799+",
      features: ["Custom algorithms", "Model training", "Optimization"],
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Website Development",
      description: "Modern, responsive websites built with latest tech.",
      price: "₹599+",
      features: ["Responsive design", "SEO optimized", "Fast loading"],
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Development",
      description: "Cross-platform mobile apps with native performance.",
      price: "₹1599+",
      features: ["iOS & Android", "Native feel", "Backend integration"],
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "CV/Resume Making",
      description: "Professional resumes that get you noticed by ATS.",
      price: "₹499",
      features: ["ATS-friendly", "Professional design", "Cover letter"],
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "BMU CV Template",
      description: "Premium LaTeX templates specifically for BMU students.",
      price: "₹499",
      features: ["BMU format", "LaTeX source", "Customizable"],
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn Makeover",
      description: "Strategic profile enhancement for career advancement.",
      price: "₹699",
      features: ["Profile optimization", "Keyword strategy", "Networking tips"],
    },
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Premium Packages",
      description: "Comprehensive solutions combining multiple services.",
      price: "Custom",
      features: ["Priority support", "Dedicated manager", "Full solution"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Professional <br />
            <span className="text-gray-400 font-normal">Services</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Choose from our wide range of expert services designed to help you succeed academically and professionally.
          </p>
        </div>
      </section>

      {/* Student Discount Banner */}
      <section className="px-6 -mt-8 mb-12 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 rotate-12 transform group-hover:scale-110 transition-transform">
              <Crown className="h-24 w-24 text-primary" />
            </div>

            <div className="flex items-center space-x-4 relative z-10 mb-4 md:mb-0">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">%</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">BML Munjal Students Special</h3>
                <p className="text-sm text-gray-500">
                  Get <span className="font-semibold text-primary">10% OFF</span> on all services.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 relative z-10">
              <div className="px-3 py-1 bg-white border border-blue-100 rounded text-xs font-mono text-gray-500">
                CODE: BMU10
              </div>
              <span className="text-[10px] text-gray-400 max-w-[120px] leading-tight">
                *Valid ID card required. T&C apply.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Services */}
      <section className="px-6 mb-12 relative z-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center mb-6 space-x-2">
            <div className="bg-red-100 p-1.5 rounded-lg">
              <TrendingUp className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
            <span className="px-2.5 py-0.5 bg-red-100 text-red-600 text-[10px] font-bold rounded-full animate-pulse">
              HOT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LinkedIn Makeover */}
            <a
              href="https://forms.gle/aB3yWqJz8W1m8ajm9"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative h-full p-6 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/50 to-white transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg z-20 shadow-sm">
                  50% OFF
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 line-through">₹799</div>
                    <div className="text-xl font-bold text-red-600 flex items-center justify-end gap-1">
                      ₹399
                      <Sparkles className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-red-600 transition-colors">
                    LinkedIn Makeover
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug mt-1">
                    Strategic profile optimization to attract recruiters.
                  </p>
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    Profile Optimization
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    Keyword Strategy
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    Networking Tips
                  </li>
                </ul>

                <div className="w-full py-2.5 rounded-lg bg-white border border-red-200 text-sm text-red-600 font-bold text-center group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all shadow-sm">
                  Claim Offer
                </div>
              </div>
            </a>

            {/* CV/Resume Making */}
            <a
              href="https://forms.gle/aB3yWqJz8W1m8ajm9"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative h-full p-6 rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/50 to-white transition-all duration-300 hover:border-red-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg z-20 shadow-sm">
                  50% OFF
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400 line-through">₹499</div>
                    <div className="text-xl font-bold text-red-600 flex items-center justify-end gap-1">
                      ₹249
                      <Sparkles className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-red-600 transition-colors">
                    CV/Resume Making
                  </h3>
                  <p className="text-sm text-gray-500 leading-snug mt-1">
                    Professional, ATS-friendly resumes.
                  </p>
                </div>

                <ul className="space-y-1.5 mb-5">
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    ATS-Friendly Format
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    Professional Design
                  </li>
                  <li className="flex items-center text-xs text-gray-600">
                    <Check className="h-3.5 w-3.5 mr-2 text-green-500" />
                    Cover Letter Guidance
                  </li>
                </ul>

                <div className="w-full py-2.5 rounded-lg bg-white border border-red-200 text-sm text-red-600 font-bold text-center group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all shadow-sm">
                  Claim Offer
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href="https://forms.gle/aB3yWqJz8W1m8ajm9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-full p-8 rounded-xl border border-border bg-white transition-all duration-300 group cursor-pointer hover:bg-primary hover:border-primary hover:text-white hover:shadow-xl hover:-translate-y-1">
                  <Plus className="absolute top-4 right-4 h-4 w-4 text-gray-300 group-hover:text-blue-200 transition-colors" />

                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 border border-gray-100 bg-gray-50 group-hover:bg-white/20 group-hover:border-transparent">
                    <div className="transition-colors duration-300 text-gray-700 group-hover:text-white">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold transition-colors duration-300 text-foreground group-hover:text-white">
                      {service.title}
                    </h3>
                    <span className="text-sm font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed transition-colors duration-300 text-gray-500 group-hover:text-blue-100 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-xs transition-colors duration-300 text-gray-500 group-hover:text-blue-100">
                        <Check className="h-3 w-3 mr-2 opacity-70" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 text-white mt-auto">
                    Book Now <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[40px] border-white rounded-full transform translate-x-1/2"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">
            Ready to excel?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Get expert help today using our simple booking form.
          </p>
          <div className="flex justify-center">
            <a href="https://forms.gle/aB3yWqJz8W1m8ajm9" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#1a1a1a] hover:bg-black text-white px-10 py-7 rounded-sm text-lg font-medium shadow-2xl transition-transform hover:scale-105">
                Book a Service
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
