'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone,
  Globe,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android',
    features: [
      'React Native & Flutter',
      'Native iOS & Android',
      'App Store Optimization',
      'Push Notifications',
      'Offline Capabilities',
      'Performance Optimization',
    ],
    gradient: 'from-blue-500 to-purple-600',
    delay: 0.1,
    details: {
      overview:
        'We specialize in creating high-performance mobile applications that deliver exceptional user experiences across iOS and Android platforms. Our mobile development services combine cutting-edge technologies with industry best practices to build scalable, secure, and user-friendly applications.',
      benefits: [
        'Cross-platform development for cost efficiency',
        'Native performance and user experience',
        'App store optimization and marketing',
        'Real-time push notifications',
        'Offline functionality and data sync',
        'Performance monitoring and analytics',
      ],
      technologies: [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'AWS Mobile',
      ],
      process: [
        'Requirements Analysis & Planning',
        'UI/UX Design & Prototyping',
        'Development & Testing',
        'App Store Submission',
        'Launch & Maintenance',
      ],
    },
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Modern, responsive web applications with cutting-edge technologies',
    features: [
      'React & Next.js',
      'TypeScript & Node.js',
      'Progressive Web Apps',
      'SEO Optimization',
      'Performance & Security',
      'Database Integration',
    ],
    gradient: 'from-green-500 to-blue-600',
    delay: 0.2,
    details: {
      overview:
        'Our web development services focus on creating modern, scalable web applications that drive business growth. We leverage the latest technologies to build fast, secure, and SEO-optimized websites that provide exceptional user experiences across all devices.',
      benefits: [
        'Responsive design for all devices',
        'SEO optimization for better visibility',
        'Progressive Web App capabilities',
        'Fast loading and performance',
        'Secure and scalable architecture',
        'Database integration and management',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'MongoDB',
      ],
      process: [
        'Discovery & Planning',
        'Design & Prototyping',
        'Development & Testing',
        'Deployment & Optimization',
        'Ongoing Support',
      ],
    },
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description:
      'Advanced automation solutions powered by artificial intelligence',
    features: [
      'Process Automation',
      'Data Processing & Analysis',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Machine Learning Models',
    ],
    gradient: 'from-orange-500 to-red-600',
    delay: 0.3,
    details: {
      overview:
        'Transform your business operations with intelligent automation powered by cutting-edge AI technologies. Our AI automation solutions help businesses streamline processes, gain insights from data, and make data-driven decisions to improve efficiency and productivity.',
      benefits: [
        'Automated workflow processes',
        'Intelligent data analysis',
        'Predictive insights and forecasting',
        'Natural language understanding',
        'Computer vision applications',
        'Custom machine learning models',
      ],
      technologies: [
        'Python',
        'TensorFlow',
        'OpenAI API',
        'Computer Vision',
        'NLP',
        'AWS AI',
      ],
      process: [
        'Data Analysis & Planning',
        'Model Development & Training',
        'Integration & Testing',
        'Deployment & Monitoring',
        'Continuous Improvement',
      ],
    },
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null)

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive development services to transform your ideas
            into powerful digital solutions that drive business growth and user
            engagement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              transition={{ delay: service.delay }}
              className="group relative">
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon */}
                <div
                  className={cn(
                    'w-16 h-16 rounded-xl bg-gradient-to-r mb-6 flex items-center justify-center text-white',
                    service.gradient
                  )}>
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="group/btn inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create a custom solution
              that perfectly fits your business needs and goals.
            </p>
            <button
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
                // Set URL parameter to auto-select consultation
                setTimeout(() => {
                  window.history.pushState({}, '', '#contact?type=consultation')
                  // Trigger a custom event to notify contact form
                  window.dispatchEvent(
                    new CustomEvent('setProjectType', {
                      detail: { projectType: 'consultation' },
                    })
                  )
                }, 500)
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        'w-16 h-16 rounded-xl bg-gradient-to-r flex items-center justify-center text-white',
                        selectedService.gradient
                      )}>
                      <selectedService.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground">
                        {selectedService.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.details.overview}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.details.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    Technologies We Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    Our Process
                  </h4>
                  <div className="space-y-3">
                    {selectedService.details.process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-6 border-t border-border">
                  <button
                    onClick={() => {
                      setSelectedService(null)
                      // Scroll to contact section
                      const contactSection = document.querySelector('#contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    Get Started with {selectedService.title}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
