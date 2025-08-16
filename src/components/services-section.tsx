'use client'

import { motion } from 'framer-motion'
import {
  Smartphone,
  Globe,
  Brain,
  Code,
  Palette,
  Cloud,
  ArrowRight,
  CheckCircle,
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
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Intelligent features and automation powered by artificial intelligence',
    features: [
      'ChatGPT Integration',
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Automation Workflows',
    ],
    gradient: 'from-purple-500 to-pink-600',
    delay: 0.3,
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions for your specific business needs',
    features: [
      'Enterprise Applications',
      'API Development',
      'Microservices Architecture',
      'Cloud Deployment',
      'Scalable Solutions',
      'Maintenance & Support',
    ],
    gradient: 'from-orange-500 to-red-600',
    delay: 0.4,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive user interfaces and exceptional user experiences',
    features: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Visual Design Systems',
      'Interactive Prototypes',
      'Accessibility Design',
      'Design Handoffs',
    ],
    gradient: 'from-pink-500 to-purple-600',
    delay: 0.5,
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions',
    features: [
      'AWS & Azure Services',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Database Management',
      'Security & Compliance',
      'Monitoring & Analytics',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    delay: 0.6,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                <button className="group/btn inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
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
              Let's discuss your requirements and create a custom solution that
              perfectly fits your business needs and goals.
            </p>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
