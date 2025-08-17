'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    image: '/api/placeholder/400/300',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Geolocation', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'MyDressDiary',
    description:
      'Hassle Free Wardrobe Management. Acts as a personal stylist, pick daily outfits without any hassle and suggest outfits for events.',
    image: '/api/placeholder/400/300',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'AI/ML', 'Image Recognition', 'Cloud Storage'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'ThoughtOfTheDay',
    description:
      'Gives a new quote on daily basis which you can reflect on and take action. Features personalized quote recommendations and mood tracking to help you.',
    image: '/api/placeholder/400/300',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'REST API', 'Cron Jobs'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'E-Commerce',
    description:
      'A fully featured, e-commerce web app with affiliate product integrations, discovery and seamless payment. Includes advanced search and personalized.',
    image: '/api/placeholder/400/300',
    category: 'web',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'N8N-Automations',
    description:
      'An automated flow for researching about a company from latest news and preparing the right pitch for your sales.',
    image: '/api/placeholder/400/300',
    category: 'ai',
    technologies: ['N8N', 'OpenAI API', 'News API', 'CRM Integration', 'Webhooks'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'CustomerSupport',
    description:
      'Automated solution for getting faster resolutions, happier customers and Reduced Churn by routing issues to right people.',
    image: '/api/placeholder/400/300',
    category: 'ai',
    technologies: ['AI/ML', 'NLP', 'Zendesk API', 'Slack Integration', 'Analytics'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
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
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-muted-foreground">
                      {project.title.split(' ')[0]}
                    </div>
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
                        className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        View Details
                      </button>
                      <button className="p-2 border border-border rounded-lg hover:bg-accent transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-border rounded-lg hover:bg-accent transition-colors">
                        <Github className="w-4 h-4" />
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

                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground">
                    {selectedProject.title.split(' ')[0]}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

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
                  <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    View Live Demo
                  </button>
                  <button className="flex-1 border border-border px-4 py-2 rounded-lg font-medium hover:bg-accent transition-colors">
                    View Source Code
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
