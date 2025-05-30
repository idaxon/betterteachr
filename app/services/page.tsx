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
  ArrowLeft,
  Crown,
  Zap,
  CheckCircle,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  // Function to create URL-friendly slugs
  const createServiceSlug = (title: string) => {
    return title.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  const services = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Assignment Help",
      description: "Expert assistance across all academic subjects with guaranteed quality and timely delivery",
      price: "₹300",
      priceType: "fixed",
      features: ["All subjects covered", "Plagiarism-free content", "24-hour delivery", "Unlimited revisions"],
      gradient: "from-gray-900 to-gray-700",
      popular: false,
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Project Assistance",
      description: "End-to-end guidance for academic and professional projects with expert mentorship",
      price: "Based on project size",
      priceType: "variable",
      features: ["Project planning", "Code review", "Documentation", "Presentation support"],
      gradient: "from-gray-800 to-gray-600",
      popular: true,
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "ML/AI Model Development",
      description: "Custom machine learning models and AI solutions for your specific requirements",
      price: "Starting from ₹200",
      priceType: "range",
      features: ["Custom algorithms", "Data preprocessing", "Model training", "Performance optimization"],
      gradient: "from-gray-900 to-gray-700",
      popular: false,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Website Development",
      description: "Modern, responsive websites built with latest technologies and best practices",
      price: "Starting from ₹250",
      priceType: "starting",
      features: ["Responsive design", "Modern frameworks", "SEO optimized", "Fast loading"],
      gradient: "from-gray-800 to-gray-600",
      popular: false,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App Development",
      description: "Cross-platform mobile applications with native performance and user experience",
      price: "Starting from ₹400",
      priceType: "starting",
      features: ["Cross-platform", "Native performance", "App store ready", "Backend integration"],
      gradient: "from-gray-900 to-gray-700",
      popular: false,
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "CV/Resume Making",
      description: "Professional resumes that get you noticed by employers and ATS systems",
      price: "₹200",
      priceType: "fixed",
      features: ["ATS-friendly format", "Professional design", "Industry-specific", "Cover letter included"],
      gradient: "from-gray-800 to-gray-600",
      popular: false,
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Overleaf BMU CV Template",
      description: "Premium CV templates specifically designed for BMU students with LaTeX formatting",
      price: "₹300",
      priceType: "fixed",
      features: ["BMU-specific format", "LaTeX source code", "Multiple variations", "Easy customization"],
      gradient: "from-gray-900 to-gray-700",
      popular: false,
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      title: "LinkedIn Profile Makeover",
      description: "Strategic profile enhancement for career advancement and networking opportunities",
      price: "₹300",
      priceType: "fixed",
      features: ["Profile optimization", "Keyword research", "Content strategy", "Network building tips"],
      gradient: "from-gray-800 to-gray-600",
      popular: false,
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Premium Packages",
      description: "Comprehensive solutions combining multiple services for maximum impact and value",
      price: "Based on complexity",
      priceType: "custom",
      features: ["Multiple services", "Priority support", "Dedicated manager", "Custom solutions"],
      gradient: "from-gray-900 to-gray-700",
      popular: false,
    },
  ]

  const getPriceColor = (priceType: string) => {
    switch (priceType) {
      case "fixed":
        return "text-green-600"
      case "range":
        return "text-blue-600"
      case "starting":
        return "text-purple-600"
      case "variable":
        return "text-orange-600"
      case "custom":
        return "text-gray-600"
      default:
        return "text-gray-900"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">CollegeGenie</span>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              {/* Contact Us button removed */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-4 py-2 text-sm font-medium">
              💎 Premium Services & Pricing
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
              Our
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              Transparent pricing for premium academic services.
              <br />
              <span className="font-medium text-gray-800">Choose what fits your needs.</span>
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Quality Guaranteed
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Transparent Pricing
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Expert Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden relative ${
                  service.popular ? "ring-2 ring-gray-900" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white text-center py-2 text-sm font-medium">
                    <Zap className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}

                <CardHeader className={`text-center pb-4 ${service.popular ? "pt-12" : "pt-6"}`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <CardTitle className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {service.title}
                  </CardTitle>

                  <div className={`text-2xl font-bold mb-4 ${getPriceColor(service.priceType)}`}>{service.price}</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <CardDescription className="text-center text-gray-600 leading-relaxed font-light">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="https://forms.gle/aB3yWqJz8W1m8ajm9" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${
                        service.popular
                          ? "bg-gray-900 hover:bg-gray-800 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      } transition-all duration-300 group-hover:scale-105`}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Select Service
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BMU Student Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gray-100 text-gray-700 px-4 py-2 font-medium">
              🎓 BMU Student Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">What BMU Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Real experiences from your fellow BMU students who achieved excellence with our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed font-light">
                  "The Overleaf BMU CV template was perfect for campus placements. Got selected in the first round
                  itself!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    RP
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Rohit Sharma</p>
                    <p className="text-sm text-gray-600 font-light">Mechanical Engineering, BMU</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed font-light">
                  "Assignment help for my Data Structures course was exceptional. Clear explanations and perfect code!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    PT
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Priya Thakur</p>
                    <p className="text-sm text-gray-600 font-light">Computer Science, BMU Gurgaon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gray-400 text-gray-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed font-light">
                  "LinkedIn profile makeover helped me connect with industry professionals. Got 3 internship offers!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    AJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ankit Jain</p>
                    <p className="text-sm text-gray-600 font-light">MBA, BMU School of Management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking CTA Section - REMOVE THIS ENTIRE SECTION */}
      {/* 
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 font-light leading-relaxed">
              Book your service now and experience the CollegeGenie difference.
              <br />
              Our experts are ready to help you succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
              >
                <Users className="mr-2 h-5 w-5" />
                Get Custom Quote
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm opacity-80">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Money-back Guarantee
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">CollegeGenie</span>
              </Link>
              <p className="text-gray-600 mb-4 max-w-md font-light leading-relaxed">
                Empowering academic excellence through innovative solutions and expert guidance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Contact Information</h4>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">📧</span>
                  </div>
                  <span className="font-light">support@collegegenie.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  <span className="font-light">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">🕒</span>
                  </div>
                  <span className="font-light">24/7 Support Available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">💬</span>
                  </div>
                  <span className="font-light">Live Chat Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-6 text-center text-gray-600">
            <p className="font-light">
              &copy; {new Date().getFullYear()} CollegeGenie. All rights reserved. Crafted with excellence for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
