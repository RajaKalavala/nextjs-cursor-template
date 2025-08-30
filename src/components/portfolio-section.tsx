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
    title: 'ThoughtOfTheDay',
    description:
      'Gives a new quote on daily basis which you can reflect on and take action. Features personalized quote recommendations and mood tracking to help you.',
    image: '/images/thoughtoftheday.jpg',
    category: 'mobile',
    technologies: [
      'React Native',
      'Node.js',
      'MongoDB',
      'REST API',
      'Cron Jobs',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        "ThoughtOfTheDay is a mindfulness and personal development app that delivers curated inspirational quotes daily. It includes mood tracking, reflection tools, and personalized content to support users' mental well-being journey.",
      features: [
        'Daily curated inspirational quotes with push notifications',
        'Mood tracking and emotional wellness monitoring',
        'Personalized quote recommendations based on user preferences',
        'Reflection journal with guided prompts',
        'Progress tracking and achievement milestones',
        'Social sharing of favorite quotes and insights',
      ],
      challenges: [
        'Curating high-quality, diverse quote content',
        'Implementing effective push notification scheduling',
        'Creating engaging user experience for daily usage',
        'Building personalized recommendation system',
      ],
      solutions: [
        'Built comprehensive quote database with multiple categories',
        'Used cron jobs for reliable notification delivery',
        'Implemented gamification elements to encourage daily engagement',
        'Developed content-based filtering for personalization',
      ],
      impact:
        'Achieved 85% daily active user retention and helped users improve mood scores by 30%.',
    },
  },
  {
    id: 4,
    title: 'Dental Clinic Website',
    description:
      'Modern, responsive dental clinic website with appointment booking, patient portal, and online consultation features.',
    image: '/images/dental-clinic.jpg',
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
    title: 'N8N-Automations',
    description:
      'An automated flow for researching about a company from latest news and preparing the right pitch for your sales.',
    image: '/images/n8n-automations.jpg',
    category: 'ai',
    technologies: [
      'N8N',
      'OpenAI API',
      'News API',
      'CRM Integration',
      'Webhooks',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        'N8N-Automations is an intelligent workflow automation system that researches companies using real-time news data and generates personalized sales pitches. It streamlines the sales research process and improves outreach effectiveness.',
      features: [
        'Automated company research using multiple news sources',
        'AI-powered sales pitch generation with OpenAI',
        'CRM integration for lead management and tracking',
        'Real-time news monitoring and alerts',
        'Customizable pitch templates and tone adjustment',
        'Analytics dashboard for pitch performance tracking',
      ],
      challenges: [
        'Processing and analyzing large volumes of news data',
        'Generating contextually relevant sales pitches',
        'Integrating with multiple CRM systems',
        'Ensuring data accuracy and relevance',
      ],
      solutions: [
        'Implemented efficient data processing pipelines with N8N',
        "Used OpenAI's GPT models for intelligent pitch generation",
        'Built flexible API integrations for various CRM platforms',
        'Implemented data validation and quality checks',
      ],
      impact:
        'Reduced research time by 80% and increased response rates by 150%.',
    },
  },
  {
    id: 6,
    title: 'CustomerSupport',
    description:
      'Automated solution for getting faster resolutions, happier customers and Reduced Churn by routing issues to right people.',
    image: '/images/customersupport.jpg',
    category: 'ai',
    technologies: [
      'AI/ML',
      'NLP',
      'Zendesk API',
      'Slack Integration',
      'Analytics',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    details: {
      overview:
        'CustomerSupport is an AI-powered customer service automation platform that intelligently routes support tickets, provides instant responses, and ensures faster issue resolution. It integrates with existing support systems to enhance customer satisfaction.',
      features: [
        'Intelligent ticket routing based on issue complexity and agent expertise',
        'AI-powered instant responses for common queries',
        'Sentiment analysis for priority escalation',
        'Integration with Zendesk, Slack, and other support tools',
        'Real-time analytics and performance metrics',
        'Automated follow-up and satisfaction surveys',
      ],
      challenges: [
        'Accurately classifying and routing complex support issues',
        'Maintaining consistent response quality across different channels',
        'Integrating with multiple third-party support platforms',
        'Handling multilingual support requests',
      ],
      solutions: [
        'Trained custom NLP models for issue classification',
        'Implemented response templates with dynamic content generation',
        'Built comprehensive API integrations with webhook support',
        'Used translation APIs for multilingual support',
      ],
      impact:
        'Reduced response time by 70% and improved customer satisfaction scores by 40%.',
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
                    project.title === 'StreetBites' ? (
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
                  selectedProject.title === 'StreetBites' ? (
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
