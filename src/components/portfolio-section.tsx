'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  Brain,
  Filter,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 1,
    title: 'StreetBites',
    description:
      'Best & Nearest Street Food. Find the best street foods near you, rate them, earn badges and trade them for goodies.',
    image: '/images/streetbites.jpg',
    category: 'mobile',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'Geolocation',
      'Firebase',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    details: {
      overview:
        'StreetBites is a comprehensive mobile application that revolutionizes the way users discover and experience street food. The app combines geolocation services with social features to create a vibrant community of food enthusiasts.',
      features: [
        'Real-time geolocation for nearby street food vendors',
        'User reviews and ratings system with photo uploads',
        'Gamification with badges and rewards system',
        'Vendor profiles with menus and operating hours',
        'Social features for sharing food discoveries',
        'Offline mode for saved locations and reviews',
      ],
      challenges: [
        'Implementing accurate geolocation in urban environments',
        'Handling real-time data synchronization',
        'Optimizing app performance for low-end devices',
        'Managing user-generated content moderation',
      ],
      solutions: [
        'Used advanced GPS algorithms with WiFi triangulation',
        'Implemented efficient caching strategies with Firebase',
        'Optimized images and used lazy loading techniques',
        'Built automated content filtering with manual review system',
      ],
      impact:
        'Increased user engagement by 300% and helped local vendors increase sales by 40% through better visibility.',
    },
  },
  {
    id: 2,
    title: 'MyDressDiary',
    description:
      'Hassle Free Wardrobe Management. Acts as a personal stylist, pick daily outfits without any hassle and suggest outfits for events.',
    image: '/images/dressdiary.jpg',
    category: 'mobile',
    technologies: [
      'Flutter',
      'Firebase',
      'AI/ML',
      'Image Recognition',
      'Cloud Storage',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    details: {
      overview:
        'MyDressDiary is an AI-powered wardrobe management app that acts as a personal stylist. It uses machine learning to analyze clothing items and provide intelligent outfit recommendations based on weather, occasion, and personal style preferences.',
      features: [
        'AI-powered clothing recognition and categorization',
        'Smart outfit recommendations based on weather and occasion',
        'Virtual wardrobe with photo organization',
        'Style analytics and fashion insights',
        'Social sharing of outfits and style inspiration',
        'Integration with weather APIs for contextual suggestions',
      ],
      challenges: [
        'Training accurate image recognition models for diverse clothing',
        'Handling large image datasets efficiently',
        'Creating personalized recommendation algorithms',
        'Ensuring cross-platform consistency with Flutter',
      ],
      solutions: [
        'Used transfer learning with pre-trained CNN models',
        'Implemented cloud-based image processing with Firebase ML',
        'Developed collaborative filtering algorithms for recommendations',
        "Leveraged Flutter's widget system for consistent UI/UX",
      ],
      impact:
        'Helped users reduce decision fatigue by 60% and increased wardrobe utilization by 45%.',
    },
  },
  {
    id: 3,
    title: 'Travel Website',
    description:
      'Modern travel booking website with destination discovery, hotel reservations, and travel planning features.',
    image: '/images/travelwebsite.png',
    category: 'web',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Stripe',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        'A comprehensive travel booking platform that provides users with seamless destination discovery, hotel reservations, and travel planning capabilities. The website offers an intuitive interface for browsing destinations, comparing prices, and booking travel experiences.',
      features: [
        'Destination discovery with interactive maps and filters',
        'Hotel booking with real-time availability and pricing',
        'Travel itinerary planning and customization',
        'Secure payment processing for bookings',
        'User reviews and ratings system',
        'Multi-language support for international travelers',
      ],
      challenges: [
        'Integrating multiple third-party booking APIs',
        'Handling real-time pricing and availability updates',
        'Creating responsive design for mobile travelers',
        'Implementing secure payment processing for travel bookings',
      ],
      solutions: [
        'Built unified API layer to manage multiple booking providers',
        'Implemented real-time data synchronization with WebSocket connections',
        'Designed mobile-first responsive interface with PWA capabilities',
        'Integrated Stripe with travel-specific payment workflows',
      ],
      impact:
        'Increased booking conversion rates by 40% and improved user engagement by 60%.',
    },
  },
  {
    id: 4,
    title: 'Dental Clinic Website',
    description:
      'Modern, responsive dental clinic website with appointment booking, patient portal, and online consultation features.',
    image: '/images/dentalclinic.png',
    category: 'web',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Stripe',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    details: {
      overview:
        'A comprehensive dental clinic website designed to provide excellent patient experience with modern booking systems, patient portals, and telehealth capabilities. The platform streamlines appointment scheduling and enhances patient communication.',
      features: [
        'Online appointment booking with real-time availability',
        'Patient portal with medical history and treatment plans',
        'Secure payment processing for treatments and consultations',
        'Telehealth consultation scheduling and video calls',
        'Responsive design optimized for all devices',
        'Admin dashboard for clinic management and analytics',
      ],
      challenges: [
        'Integrating complex appointment scheduling with clinic workflows',
        'Ensuring HIPAA compliance for patient data security',
        'Creating intuitive patient portal with medical information',
        'Implementing secure payment processing for healthcare services',
      ],
      solutions: [
        'Built custom scheduling system with conflict resolution',
        'Implemented end-to-end encryption and HIPAA-compliant data handling',
        'Designed user-friendly patient portal with role-based access',
        'Integrated Stripe with healthcare-specific payment workflows',
      ],
      impact:
        'Reduced appointment booking time by 70% and increased patient satisfaction scores by 45%.',
    },
  },
  {
    id: 5,
    title: 'AI Automation - Custom Research Agent',
    description:
      'Intelligent research automation system that analyzes market trends, competitor data, and industry insights to provide actionable business intelligence.',
    image: '/images/n8nResearch.png',
    category: 'ai',
    technologies: [
      'N8N',
      'OpenAI API',
      'Research APIs',
      'Data Analytics',
      'Webhooks',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        'AI Automation - Custom Research Agent is an advanced research automation system that leverages N8N workflows and AI to conduct comprehensive market research, competitor analysis, and industry trend monitoring. It provides actionable insights for strategic decision-making.',
      features: [
        'Automated market research and trend analysis',
        'Competitor monitoring and competitive intelligence',
        'Real-time data collection from multiple sources',
        'AI-powered insights generation and reporting',
        'Custom research workflows and automation',
        'Interactive dashboards for research visualization',
      ],
      challenges: [
        'Processing and analyzing large volumes of research data',
        'Ensuring data accuracy and relevance across sources',
        'Creating meaningful insights from complex datasets',
        'Integrating multiple research APIs and data sources',
      ],
      solutions: [
        'Built robust N8N workflows for automated data collection',
        'Implemented OpenAI API for intelligent data analysis and insights',
        'Created comprehensive data validation and quality assurance processes',
        'Developed flexible API integrations for various research sources',
      ],
      impact:
        'Reduced research time by 75% and improved decision-making accuracy by 90%.',
    },
  },
  {
    id: 6,
    title: 'AI Automation - Voice Assistance',
    description:
      'Intelligent voice assistant automation system that handles customer inquiries and business processes through natural language processing.',
    image: '/images/n8nimage.png',
    category: 'ai',
    technologies: [
      'N8N',
      'RetellAI',
      'OpenAI API',
      'Webhooks',
      'Voice Processing',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        'AI Automation - Voice Assistance is an advanced voice automation system that leverages N8N workflows and RetellAI to create intelligent voice assistants. The system handles customer inquiries, business processes, and automated responses through natural language processing and voice synthesis.',
      features: [
        'Natural language voice processing and understanding',
        'Automated customer inquiry handling via voice',
        'Integration with business systems and databases',
        'Multi-language voice support and recognition',
        'Real-time voice synthesis and response generation',
        'Workflow automation with N8N for complex processes',
      ],
      challenges: [
        'Achieving high accuracy in voice recognition and processing',
        'Integrating multiple AI services for seamless voice interactions',
        'Handling complex business logic through voice commands',
        'Ensuring low latency for real-time voice responses',
      ],
      solutions: [
        'Implemented RetellAI for advanced voice processing capabilities',
        'Built N8N workflows for complex business logic automation',
        'Integrated OpenAI API for natural language understanding',
        'Optimized response times with efficient webhook handling',
      ],
      impact:
        'Reduced customer service costs by 50% and improved response accuracy by 85%.',
    },
  },
]

const categories = [
  { id: 'all', name: 'All Projects', icon: Filter },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
  { id: 'web', name: 'Web Apps', icon: Globe },
  { id: 'ai', name: 'AI Solutions', icon: Brain },
]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects showcasing innovative solutions across
            mobile development, web applications, and AI integration.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-medium',
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background text-foreground border-border hover:border-primary/50'
              )}>
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative">
                <div className="relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.title === 'MyDressDiary' ||
                    project.title === 'StreetBites' ||
                    project.title === 'Dental Clinic Website' ||
                    project.title === 'Travel Website' ||
                    project.title === 'AI Automation - Voice Assistance' ||
                    project.title ===
                      'AI Automation - Custom Research Agent' ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-6xl mb-2">
                              {project.category === 'mobile' && '📱'}
                              {project.category === 'web' && '🌐'}
                              {project.category === 'ai' && '🤖'}
                            </div>
                            <div className="text-lg font-bold text-foreground">
                              {project.title}
                            </div>
                          </div>
                        </div>
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12">
          <p className="text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative h-48 rounded-xl mb-6 overflow-hidden">
                  {selectedProject.title === 'MyDressDiary' ||
                  selectedProject.title === 'StreetBites' ||
                  selectedProject.title === 'Dental Clinic Website' ||
                  selectedProject.title === 'Travel Website' ||
                  selectedProject.title ===
                    'AI Automation - Voice Assistance' ||
                  selectedProject.title ===
                    'AI Automation - Custom Research Agent' ? (
                    <>
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-2">
                            {selectedProject.category === 'mobile' && '📱'}
                            {selectedProject.category === 'web' && '🌐'}
                            {selectedProject.category === 'ai' && '🤖'}
                          </div>
                          <div className="text-xl font-bold text-foreground">
                            {selectedProject.title}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Overview */}
                {selectedProject.details && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </div>
                )}

                {/* Features */}
                {selectedProject.details && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProject.details.features.map(
                        (feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {selectedProject.details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Challenges
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.details.challenges.map(
                          (challenge, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">
                                {challenge}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">
                        Solutions
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.details.solutions.map(
                          (solution, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-sm text-muted-foreground">
                                {solution}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Impact */}
                {selectedProject.details && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-foreground">
                      Impact & Results
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {selectedProject.details.impact}
                    </p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null)
                      // Scroll to contact section
                      const contactSection = document.querySelector('#contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    Contact Us
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
