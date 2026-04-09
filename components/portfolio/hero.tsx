"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Phone, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"

const socialLinks = [
  { icon: Phone, href: "https://wa.me/250794256192", label: "WhatsApp" },
  { icon: Mail, href: "mailto:petereliezer8@gmail.com", label: "Email" },
]

const textReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y, opacity }}>
        {/* Primary glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px]"
        />
        
        {/* Center gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/50"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-accent/50"
        />
      </motion.div>

      {/* Grid Pattern with Fade */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass glow-hover cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground/90">Available for new projects</span>
              <Sparkles size={14} className="text-primary" />
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.p
                custom={0}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                className="text-lg font-medium text-muted-foreground tracking-wide"
              >
                Hello, I&apos;m
              </motion.p>
              <motion.h1
                custom={1}
                variants={textReveal}
                initial="hidden"
                animate="visible"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="block text-foreground">Muvuzankwaya</span>
                <span className="block text-gradient mt-2">Peter Eliezer</span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              custom={2}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty"
            >
              Founder of <span className="text-primary font-semibold">Elitech Digital Services</span>. 
              I craft exceptional digital experiences through Website Development, Telegram Bot Development, and Graphic Design.
            </motion.p>

            {/* Tagline */}
            <motion.div
              custom={3}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
              <span className="text-sm italic text-primary/80 font-medium tracking-wide">
                {'"Your Vision. Our Technology."'}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton>
                <Button
                  asChild
                  size="lg"
                  className="relative group bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 text-primary-foreground px-8 h-14 text-base font-semibold"
                >
                  <a href="#projects">
                    <span className="relative z-10">View My Work</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="button-bg"
                    />
                  </a>
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <a href="#contact">Get in Touch</a>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 pt-6"
            >
              <span className="text-sm text-muted-foreground">Connect:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-xl glass glow-hover text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-border/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-border/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary/20"
              />
              
              {/* Gradient glow behind image */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl" />
              
              {/* Profile image container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-12 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-[3px] shadow-2xl shadow-primary/30"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden relative">
                  <Image
                    src="/images/profile-photo.jpeg"
                    alt="Muvuzankwaya Peter Eliezer"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center text-center p-4">
                    <div className="text-6xl font-bold text-gradient-static">PE</div>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      Add your photo to<br/>/public/images/profile-photo.jpg
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 px-5 py-3 rounded-xl glass shadow-xl"
              >
                <span className="text-sm font-semibold">Web Developer</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-20 -left-4 px-5 py-3 rounded-xl glass shadow-xl"
              >
                <span className="text-sm font-semibold">Bot Developer</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-4 right-12 px-5 py-3 rounded-xl glass shadow-xl"
              >
                <span className="text-sm font-semibold">Designer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll to explore</span>
            <motion.div
              className="p-2 rounded-full border border-border/50 group-hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
