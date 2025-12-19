"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Smartphone,
  Brain,
  FileText,
  Layout,
  BookOpen,
  ArrowRight,
  Check,
  Zap,
  MessageSquare,
  Plus,
  Users
} from "lucide-react"
import Link from "next/link"

export default function BetterTechrPage() {
  const logoNames = ["BMU", "IIT Delhi", "BITS Pilani", "DTU", "VIT", "CU", "LPU"]

  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "End-to-end web and mobile solutions with modern technologies.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Custom models, data analysis, and predictive algorithms.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Research & Documentation",
      description: "Thesis writing, research papers, and project documentation.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Academic Assistance",
      description: "Expert help with complex assignments and coursework.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-border/40">
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-foreground">
            The academic support <br />
            platform built for
            <span className="text-gray-400 ml-4 font-normal">Students</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Resolve academic challenges faster with expert mentors. Support across all modern technologies and subjects.
          </p>

          <div className="flex justify-center">
            <Link href="/services">
              <Button className="w-full sm:w-auto bg-[#1a1a1a] hover:bg-black text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Book a Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-12 border-b border-border/40 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by students from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {logoNames.map((name) => (
              <span key={name} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-gray-800 transition-colors cursor-default">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (The "All-in-one" section) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">All-in-one academic platform</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 rounded-xl border transition-all duration-300 group cursor-pointer bg-white border-border hover:bg-primary hover:border-primary hover:text-white hover:shadow-xl hover:-translate-y-1"
              >
                <Plus className="absolute top-4 right-4 h-4 w-4 text-gray-300 group-hover:text-blue-200 transition-colors" />

                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 border border-gray-100 bg-gray-50 group-hover:bg-white/20 group-hover:border-transparent">
                  <div className="transition-colors duration-300 text-gray-700 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 transition-colors duration-300 text-foreground group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed transition-colors duration-300 text-gray-500 group-hover:text-blue-100">
                  {service.description}
                </p>

                {/* Show "Learn More" on hover */}
                <div className="mt-8 flex items-center text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 text-white">
                  Learn More <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50/50 border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How it works</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              Get the help you need in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 -z-10"></div>

            {[
              {
                step: "01",
                title: "Submit Request",
                desc: "Fill out the brief requirements form to tell us what you need support with.",
                icon: <FileText className="h-6 w-6 text-primary" />
              },
              {
                step: "02",
                title: "Expert Match",
                desc: "Our AI matches you with the perfect domain expert for your specific topic.",
                icon: <Users className="h-6 w-6 text-primary" />
              },
              {
                step: "03",
                title: "Receive Solution",
                desc: "Get high-quality, reviewed deliverables sent directly to your email.",
                icon: <Check className="h-6 w-6 text-primary" />
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-transparent hover:border-blue-100 transition-all">
                <div className="w-24 h-24 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative z-10">
                  {item.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 1 (Image Left, Text Right) */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-2xl bg-white shadow-2xl border border-gray-100 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50 to-transparent"></div>
                {/* Abstract UI Representation */}
                <div className="w-full max-w-xs space-y-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  </div>
                  <div className="h-32 bg-gray-50 rounded-xl border border-gray-100 p-4 mt-8">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded w-full"></div>
                      <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Expert Support</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
                Support across <br />
                every subject.
              </h2>
              <p className="text-xl text-gray-500 mb-8 font-light leading-relaxed">
                From Computer Science to Business Administration, our expert mentors bring deep domain knowledge to help you succeed in any field.
              </p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Explore Subjects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 (Text Left, Image Right) */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg mb-8">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">AI-Powered</h3>
                  <p className="text-gray-500">Matching algorithm ensures optimal mentor fit.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center space-x-2 mb-6">
                <Check className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-semibold uppercase tracking-wider text-gray-500">Guaranteed Quality</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">
                Quality that <br />
                makes the grade.
              </h2>
              <p className="text-xl text-gray-500 mb-8 font-light leading-relaxed">
                We don't just deliver work; we deliver excellence. Every project is reviewed by senior experts to ensure it meets the highest academic standards.
              </p>
              <ul className="space-y-4 mb-8">
                {['Plagiarism-free content', 'Detailed documentation', '24/7 Support access'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-gray-600">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-white border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Loved by students</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
              See what students from top universities are saying about their experience with BetterTechr.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1: BMU CSE */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm transition-all duration-300 group cursor-default hover:bg-primary hover:border-primary hover:text-white hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-primary rounded-sm group-hover:bg-white/90"></div>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light group-hover:text-blue-50 transition-colors">
                "The logic building assistance for my Data Structures project was exceptional. The mentor explained concepts so clearly that I aced my viva too."
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold group-hover:bg-white/20 group-hover:text-white transition-colors">R</div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-white transition-colors">Rahul M.</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-blue-200 transition-colors">CSE, BMU</p>
                </div>
              </div>
            </div>

            {/* Review 2: IITD */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm transition-all duration-300 group cursor-default hover:bg-primary hover:border-primary hover:text-white hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-primary rounded-sm group-hover:bg-white/90"></div>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light group-hover:text-blue-50 transition-colors">
                "Needed help with advanced fluid dynamics simulations. The quality of documentation and code I received was research-grade. Truly impressive."
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold group-hover:bg-white/20 group-hover:text-white transition-colors">A</div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-white transition-colors">Aarav K.</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-blue-200 transition-colors">Mech Eng, IIT Delhi</p>
                </div>
              </div>
            </div>

            {/* Review 3: LPU */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm transition-all duration-300 group cursor-default hover:bg-primary hover:border-primary hover:text-white hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-primary rounded-sm group-hover:bg-white/90"></div>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light group-hover:text-blue-50 transition-colors">
                "BetterTechr helped me build my full-stack portfolio from scratch. I landed a great internship thanks to the project guidance I got here."
              </p>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold group-hover:bg-white/20 group-hover:text-white transition-colors">S</div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-white transition-colors">Sneha P.</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide group-hover:text-blue-200 transition-colors">B.Tech CSE, LPU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden relative">
        {/* Abstract geometric shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[40px] border-white rounded-full transform translate-x-1/2"></div>
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
            Want faster, smarter <br />
            academic results?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join the platform building the future of academic support. Get started with BetterTechr today.
          </p>
          <div className="flex justify-center">
            <Link href="/services">
              <Button className="bg-[#1a1a1a] hover:bg-black text-white px-10 py-7 rounded-sm text-lg font-medium shadow-2xl transition-transform hover:scale-105">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
