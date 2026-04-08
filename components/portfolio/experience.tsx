"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Globe, Bot, Palette, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional websites for businesses and personal brands that are fast, responsive, and secure.",
    features: [
      "Business & Personal Websites",
      "E-commerce Solutions",
      "Fast & Responsive Design",
      "SEO Optimized",
      "Secure & Reliable",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "Telegram Bot Development",
    description: "Custom Telegram bots to automate your business processes and improve customer engagement.",
    features: [
      "Automation Bots",
      "Payment & Notification Bots",
      "Customer Service Bots",
      "Custom Solutions",
      "API Integrations",
    ],
    technologies: ["Python", "Node.js", "Telegram Bot API", "MongoDB", "Redis"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visual designs that communicate your brand message effectively.",
    features: [
      "Posters & Flyers",
      "Logos & Branding",
      "Social Media Designs",
      "Business Cards",
      "Marketing Materials",
    ],
    technologies: ["Adobe Photoshop", "Illustrator", "Figma", "Canva", "InDesign"],
    gradient: "from-pink-500 to-rose-500",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-2xl glass glass-hover overflow-hidden">
        {/* Background gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
        />

        {/* Icon */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg`}
        >
          <service.icon className="w-8 h-8 text-white" />
          
          {/* Glow effect */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.5 : 1 }}
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50`}
          />
        </motion.div>

        {/* Content */}
        <motion.h3
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-xl font-bold mb-4 group-hover:text-primary transition-colors"
        >
          {service.title}
        </motion.h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
              className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
            >
              <CheckCircle className={`w-4 h-4 flex-shrink-0 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} style={{ color: 'currentColor' }} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-border/30">
          {service.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + i * 0.03 + 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Corner decoration */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          className="absolute top-4 right-4"
        >
          <ArrowRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
    </motion.article>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary"
            >
              Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              What I{" "}
              <span className="text-gradient">offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty"
            >
              Affordable, Professional, and Reliable digital services to help your business grow and succeed in the digital age.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center space-y-6"
          >
            <p className="text-muted-foreground">Need a custom solution tailored to your needs?</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 text-primary-foreground h-14 px-10 text-base font-semibold"
            >
              <a href="#contact" className="group">
                {`Let's discuss your project`}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
