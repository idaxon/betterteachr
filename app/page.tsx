"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Sparkles,
  BookOpen,
  Code,
  FileText,
  Linkedin,
  Smartphone,
  Brain,
  Users,
  ArrowRight,
  Menu,
  X,
  Zap,
  Award,
  Clock,
  Quote,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function CollegeGeniePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Assignment Help",
      description: "Expert assistance across all academic subjects with guaranteed quality",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Project Assistance",
      description: "End-to-end guidance for academic and professional projects",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "ML/AI Development",
      description: "Custom machine learning models and AI solutions",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Web & App Development",
      description: "Modern, responsive websites and mobile applications",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "CV/Resume Creation",
      description: "Professional resumes that get you noticed by employers",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: <Star className="h-7 w-7" />,
      title: "Overleaf BMU Templates",
      description: "Premium CV templates specifically designed for BMU students",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: <Linkedin className="h-7 w-7" />,
      title: "LinkedIn Optimization",
      description: "Strategic profile enhancement for career advancement",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Premium Services",
      description: "Exclusive offerings tailored to your unique requirements",
      gradient: "from-gray-800 to-gray-600",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Computer Science, BMU Gurgaon",
      content:
        "CollegeGenie's ML project help was incredible! Got an A+ in my final year project and the code was perfectly documented.",
      rating: 5,
      avatar: "AM",
    },
    {
      name: "Sneha Gupta",
      role: "Business Administration, BMU",
      content:
        "The resume makeover service landed me internships at 3 top companies. The BMU CV template was exactly what I needed!",
      rating: 5,
      avatar: "SG",
    },
    {
      name: "Vikash Kumar",
      role: "Information Technology, BMU",
      content:
        "Amazing web development service! They built my portfolio website that helped me get placed in a top tech company.",
      rating: 5,
      avatar: "VK",
    },
  ]

  const inspirationalQuotes = [
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { number: "2,500+", label: "Students Served", icon: <Users className="h-5 w-5" /> },
    { number: "98%", label: "Success Rate", icon: <Award className="h-5 w-5" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-5 w-5" /> },
    { number: "50+", label: "Expert Genies", icon: <Zap className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Subtle floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 text-gray-200 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <Sparkles className="h-4 w-4" />
        </div>
        <div
          className="absolute top-40 right-20 text-gray-300 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Star className="h-5 w-5" />
        </div>
        <div
          className="absolute top-96 left-1/4 text-gray-200 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <Sparkles className="h-3 w-3" />
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">CollegeGenie</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Services
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Process
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                Reviews
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link href="/services">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white font-medium shadow-lg">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Services
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Services
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Process
                </Link>
                <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Reviews
                </Link>
                <div className="pt-4">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Services
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/placeholder.jpg" 
            alt="Academic background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-8 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-4 py-2 text-sm font-medium">
              ✨ Premium Academic Excellence
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-[0.9] tracking-tight">
              Your Academic
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Genie</span>
                <div className="absolute -top-3 -right-3 text-gray-400">
                  <Sparkles className="h-6 w-6" />
                </div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Elevating student success through expert guidance, innovative solutions,
              <br />
              <span className="font-medium text-gray-800">and uncompromising quality.</span>
            </p>

            <div className="flex justify-center mb-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Services Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-gray-600">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quotes Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-32 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out">
                <Quote className="h-8 w-8 text-gray-300 absolute -top-4 -left-4" />
                <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic leading-relaxed">
                  "{inspirationalQuotes[currentQuote].quote}"
                </blockquote>
                <Quote className="h-8 w-8 text-gray-300 absolute -bottom-4 -right-4 rotate-180" />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 font-medium">— {inspirationalQuotes[currentQuote].author}</p>
            </div>

            {/* Quote indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {inspirationalQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 font-medium">
              🎓 Premium Services
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Excellence in Every
              <br />
              <span className="text-gray-600">Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive academic solutions delivered by industry experts and top-tier professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 shadow-lg bg-white overflow-hidden"
              >
                <CardHeader className="text-center pb-4 relative">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white text-gray-700 border border-gray-200 px-4 py-2 font-medium">
              🪄 Seamless Process
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              How It
              <br />
              <span className="text-gray-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              A streamlined approach to academic excellence in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-xl">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Share Your Vision</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Describe your academic challenge with detailed requirements and expectations for optimal results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-xl">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Matching</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Our algorithm pairs you with the most qualified specialist based on expertise and track record.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-xl">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellence Delivered</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Receive premium quality work that exceeds academic standards and propels your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 font-medium">
              ⭐ Student Success
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 tracking-tight">
              Proven
              <br />
              <span className="text-gray-600">Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Real testimonials from students who achieved academic excellence with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 text-base leading-relaxed font-light">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Excel?</h2>
            <p className="text-xl mb-12 opacity-90 font-light leading-relaxed">
              Join thousands of successful students who've transformed their academic journey with CollegeGenie.
            </p>

            <div className="flex justify-center mb-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Click Here
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">CollegeGenie</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md font-light leading-relaxed">
                Empowering academic excellence through innovative solutions and expert guidance. Your success is our
                commitment.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-sm font-medium text-gray-700">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-sm font-medium text-gray-700">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-sm font-medium text-gray-700">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Services</h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Assignment Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Project Assistance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    ML/AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Resume Creation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-gray-900">Support</h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-colors font-light">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600">
            <p className="font-light">
              &copy; {new Date().getFullYear()} CollegeGenie. All rights reserved. Crafted with excellence for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
