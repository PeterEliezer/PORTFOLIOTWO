"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ArrowUpRight, Globe, Bot, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Business Website",
    category: "Website Development",
    description:
      "A modern, responsive business website with a clean design, optimized for performance and SEO.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "E-commerce Store",
    category: "Website Development",
    description:
      "Full-featured online store with payment integration, inventory management, and customer dashboard.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    icon: Globe,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Telegram Payment Bot",
    category: "Bot Development",
    description:
      "Automated payment processing bot with multiple payment gateways, notifications, and admin panel.",
    image: "/images/project-3.jpg",
    technologies: ["Python", "Telegram API", "PostgreSQL"],
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Customer Service Bot",
    category: "Bot Development",
    description:
      "AI-powered customer support bot with natural language processing and seamless handoff to human agents.",
    image: "/images/project-4.jpg",
    technologies: ["Node.js", "Telegram API", "OpenAI"],
    icon: Bot,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Complete brand identity package including logo, business cards, letterhead, and social media templates.",
    image: "/images/project-5.jpg",
    technologies: ["Photoshop", "Illustrator", "Figma"],
    icon: Palette,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Social Media Campaign",
    category: "Graphic Design",
    description:
      "Eye-catching social media designs for marketing campaigns including posts, stories, and banners.",
    image: "/images/project-6.jpg",
    technologies: ["Photoshop", "Canva", "Figma"],
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const [isHovered, setIsHovered] = useState(false)

  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    x.set((mouseX / width) - 0.5)
    y.set((mouseY / height) - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl glass overflow-hidden">
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
          />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          
          {/* Icon overlay */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-2xl`}>
              <project.icon className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <Button
                asChild
                size="sm"
                className={`bg-gradient-to-r ${project.gradient} text-white hover:opacity-90`}
              >
                <a href="#contact">
                  <ExternalLink size={16} className="mr-2" />
                  Get Similar
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="absolute top-4 left-4"
          >
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full glass text-foreground">
              {project.category}
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-xl font-bold group-hover:text-primary transition-colors"
            >
              {project.title}
            </motion.h3>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
            >
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/50 text-muted-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isHovered ? { x: "100%", opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
        />
      </div>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-32 lg:py-40">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary"
              >
                Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Featured{" "}
                <span className="text-gradient">work</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                A showcase of projects that demonstrate my expertise across web development, bot development, and graphic design.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-semibold border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <a href="#contact" className="group">
                  Request a Project
                  <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
