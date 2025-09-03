'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  { name: 'Mobile App Development', href: '#services' },
  { name: 'Web App Development', href: '#services' },
  { name: 'AI Automation', href: '#services' },
  // { name: 'UI/UX Design', href: '#services' },
  // { name: 'Cloud Solutions', href: '#services' },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              BotikshaAI
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming ideas into powerful digital solutions. We specialize
              in mobile development, web applications, and AI integration to
              drive your business forward.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>admin@botiksha.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 891 953 5478</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground transition-colors">
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary focus:outline-none text-sm"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 BotikshaAI. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Bangalore</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">•</span>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Back to Top
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
