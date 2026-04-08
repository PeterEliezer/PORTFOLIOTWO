"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Sparkles } from "lucide-react"

const skills = [
  { name: "Website Development", level: 95 },
  { name: "Telegram Bot Development", level: 90 },
  { name: "Graphic Design", level: 88 },
  { name: "UI/UX Design", level: 85 },
  { name: "Branding", level: 82 },
]

const technologies = [
  "HTML/CSS", "JavaScript", "React", "Next.js", "Node.js", "Python",
  "Telegram Bot API", "Adobe Photoshop", "Figma", "Tailwind CSS", "MongoDB", "PostgreSQL"
]

const stats = [
  { value: "50+", label: "Projects Delivered", suffix: "" },
  { value: "30+", label: "Happy Clients", suffix: "" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "24/7", label: "Support Available", suffix: "" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-secondary/10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          {/* Left Column */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-balance"
              >
                Passionate about crafting{" "}
                <span className="text-gradient">digital solutions</span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed"
            >
              <p>
                {`I'm Muvuzankwaya Peter Eliezer, the founder of Elitech Digital Services. 
                I specialize in creating high-quality digital solutions that help businesses 
                and individuals establish a strong online presence.`}
              </p>
              <p>
                {`My expertise spans Website Development, where I build fast, responsive, and 
                secure websites for businesses and personal brands. I also develop custom 
                Telegram Bots including automation bots, payment bots, and notification systems.`}
              </p>
              <p>
                {`As a Graphic Designer, I create eye-catching posters, flyers, logos, branding 
                materials, and social media designs. My mission is to deliver affordable, 
                professional, and reliable digital services.`}
              </p>
            </motion.div>

            {/* Photo Placeholder 2 - Lifestyle/Working photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35 }}
              className="relative aspect-video rounded-2xl overflow-hidden glass"
            >
              <Image
                src="/images/about-photo.png"
                alt="Peter working"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling?.classList.remove('hidden')
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-center bg-gradient-to-br from-primary/5 to-accent/5">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold text-gradient-static mb-2">Photo 2</div>
                <p className="text-sm text-muted-foreground px-4">
                  Add your photo to<br/>/public/images/about-photo.jpg
                </p>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 text-sm font-medium rounded-xl glass glass-hover cursor-default text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-10 lg:sticky lg:top-32">
            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl glass"
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Core Services
              </h3>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                      >
                        {/* Shine effect */}
                        <motion.div
                          initial={{ x: "-100%" }}
                          animate={isInView ? { x: "200%" } : {}}
                          transition={{ delay: 1 + index * 0.1, duration: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="p-6 rounded-2xl glass glass-hover text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-4xl font-bold text-gradient-static mb-2"
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
