"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Service data mapping
const servicesData: Record<string, any> = {
  "assignment-help": {
    title: "Assignment Help",
    description: "Expert assistance across all academic subjects with guaranteed quality and timely delivery",
    price: "₹300",
    features: ["All subjects covered", "Plagiarism-free content", "24-hour delivery", "Unlimited revisions"],
    detailedDescription: "Get comprehensive assignment help from our team of academic experts. We cover all subjects and ensure high-quality, plagiarism-free content delivered within 24 hours."
  },
  "project-assistance": {
    title: "Project Assistance",
    description: "End-to-end guidance for academic and professional projects with expert mentorship",
    price: "Based on project size",
    features: ["Project planning", "Code review", "Documentation", "Presentation support"],
    detailedDescription: "Complete project guidance from planning to execution. Our experts provide mentorship, code reviews, and comprehensive documentation support."
  },
  "ml-ai-model-development": {
    title: "ML/AI Model Development",
    description: "Custom machine learning models and AI solutions for your specific requirements",
    price: "₹350 - ₹750",
    features: ["Custom algorithms", "Data preprocessing", "Model training", "Performance optimization"],
    detailedDescription: "Develop cutting-edge ML/AI models tailored to your requirements. From data preprocessing to model optimization, we handle the complete pipeline."
  },
  "website-development": {
    title: "Website Development",
    description: "Modern, responsive websites built with latest technologies and best practices",
    price: "Starting from ₹250",
    features: ["Responsive design", "Modern frameworks", "SEO optimized", "Fast loading"],
    detailedDescription: "Create stunning, responsive websites using modern frameworks. Our websites are SEO-optimized and built for performance."
  },
  "app-development": {
    title: "App Development",
    description: "Cross-platform mobile applications with native performance and user experience",
    price: "Starting from ₹400",
    features: ["Cross-platform", "Native performance", "App store ready", "Backend integration"],
    detailedDescription: "Build powerful mobile applications that work seamlessly across platforms while maintaining native performance and user experience."
  },
  "cv-resume-making": {
    title: "CV/Resume Making",
    description: "Professional resumes that get you noticed by employers and ATS systems",
    price: "₹200",
    features: ["ATS-friendly format", "Professional design", "Industry-specific", "Cover letter included"],
    detailedDescription: "Craft professional resumes that stand out to employers and pass through ATS systems. Includes industry-specific formatting and cover letter."
  },
  "overleaf-bmu-cv-template": {
    title: "Overleaf BMU CV Template",
    description: "Premium CV templates specifically designed for BMU students with LaTeX formatting",
    price: "₹300",
    features: ["BMU-specific format", "LaTeX source code", "Multiple variations", "Easy customization"],
    detailedDescription: "Exclusive CV templates designed specifically for BMU students. Includes LaTeX source code and multiple professional variations."
  },
  "linkedin-profile-makeover": {
    title: "LinkedIn Profile Makeover",
    description: "Strategic profile enhancement for career advancement and networking opportunities",
    price: "₹300",
    features: ["Profile optimization", "Keyword research", "Content strategy", "Network building tips"],
    detailedDescription: "Transform your LinkedIn profile into a powerful networking tool. Includes optimization, keyword research, and strategic content planning."
  },
  "premium-packages": {
    title: "Premium Packages",
    description: "Comprehensive solutions combining multiple services for maximum impact and value",
    price: "Based on complexity",
    features: ["Multiple services", "Priority support", "Dedicated manager", "Custom solutions"],
    detailedDescription: "Get comprehensive solutions that combine multiple services. Includes priority support and a dedicated project manager for your success."
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const serviceId = params.serviceId as string
  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
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
              <Link href="/services">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Service Detail Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-4 py-2 text-sm font-medium">
              💎 Premium Service
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              {service.description}
            </p>
            
            <div className="text-3xl font-bold text-green-600 mb-8">
              {service.price}
            </div>
          </div>

          <Card className="mb-12 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {service.detailedDescription}
              </p>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Form CTA Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Fill out our form to get personalized assistance for your {service.title.toLowerCase()} needs.
              </p>
              
              <Link href={`/services/${serviceId}/form`}>
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Fill Application Form
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Button>
              </Link>
              
              <div className="mt-6 text-sm opacity-80">
                <CheckCircle className="inline h-4 w-4 mr-2" />
                Free consultation included
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}