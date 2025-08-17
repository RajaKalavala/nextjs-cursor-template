'use client'

import { motion } from 'framer-motion'
import {
  Users,
  Target,
  Award,
  Star,
  ArrowRight,
} from 'lucide-react'

// Feature flags
const SHOW_TEAM_SECTION = false
const SHOW_ABOUT_HEADER = false

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Happy Clients',
    description: 'Satisfied customers worldwide',
  },
  {
    icon: Target,
    value: '100+',
    label: 'Projects Completed',
    description: 'Successful deliveries on time',
  },
  {
    icon: Award,
    value: '5+',
    label: 'Years Experience',
    description: 'Industry expertise and knowledge',
  },
  {
    icon: Star,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Consistent quality delivery',
  },
]

const values = [
  {
    title: 'Innovation First',
    description:
      'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.',
    icon: '🚀',
  },
  {
    title: 'Quality Excellence',
    description:
      'Every project undergoes rigorous testing and quality assurance to ensure flawless performance and user experience.',
    icon: '✨',
  },
  {
    title: 'Client Partnership',
    description:
      'We believe in building long-term relationships with our clients, understanding their needs and growing together.',
    icon: '🤝',
  },
  {
    title: 'Continuous Learning',
    description:
      'Our team constantly updates skills and knowledge to provide the most current and effective solutions.',
    icon: '📚',
  },
]

const team = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer',
    expertise: 'Full-Stack Development',
    experience: '8+ years',
    avatar: '👨‍💻',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    expertise: 'User Experience Design',
    experience: '6+ years',
    avatar: '👩‍🎨',
  },
  {
    name: 'Mike Rodriguez',
    role: 'AI Specialist',
    expertise: 'Machine Learning & AI',
    experience: '7+ years',
    avatar: '👨‍🔬',
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    expertise: 'Agile Project Management',
    experience: '5+ years',
    avatar: '👩‍💼',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Botiksha.in</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of developers, designers, and innovators
            dedicated to transforming ideas into powerful digital solutions that
            drive business success.
          </p>
        </motion.div>

        {/* Stats Section */}
        {SHOW_ABOUT_HEADER && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019, Botiksha.in started as a small team of
                passionate developers with a vision to create innovative digital
                solutions that make a difference.
              </p>
              <p>
                Today, we&apos;ve grown into a full-service development agency,
                serving clients across the globe with cutting-edge mobile apps,
                web applications, and AI solutions.
              </p>
              <p>
                Our mission is to empower businesses with technology that drives
                growth, enhances user experience, and creates lasting impact in
                the digital world.
              </p>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <div className="text-2xl font-bold text-foreground">
                  Our Journey
                </div>
                <div className="text-muted-foreground">
                  From startup to success
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4">
                <div className="text-4xl">{value.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        {SHOW_TEAM_SECTION && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-center mb-12">
              Meet Our <span className="gradient-text">Team</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-1">
                    {member.expertise}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {member.experience}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
