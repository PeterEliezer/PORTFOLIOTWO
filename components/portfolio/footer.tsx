"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Heart, MapPin, MessageCircle, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: MessageCircle, href: "https://wa.me/250794256192", label: "WhatsApp", color: "hover:bg-green-500/10 hover:text-green-500 hover:border-green-500/30" },
  { icon: Mail, href: "mailto:petereliezer8@gmail.com", label: "Email", color: "hover:bg-primary/10 hover:text-primary hover:border-primary/30" },
]

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

const services = [
  "Website Development",
  "Telegram Bots",
  "Graphic Design",
  "UI/UX Design",
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/30 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-secondary/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <Image
                src="/images/elitech-logo.jpeg"
                alt="Elitech Digital Services"
                width={64}
                height={64}
                className="rounded-xl shadow-lg"
              />
            </motion.a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Vision. Our Technology. Delivering affordable, professional, and reliable digital services in Rwanda and beyond.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl glass border border-transparent transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit group flex items-center gap-1"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {services.map((service, index) => (
                <motion.a
                  key={service}
                  href="#services"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {service}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/250794256192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-green-500 transition-colors"
              >
                <Phone size={16} />
                <span>+250 794 256 192</span>
              </a>
              <a
                href="tel:+250736353238"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+250 736 353 238</span>
              </a>
              <a
                href="mailto:petereliezer8@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>petereliezer8@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Rwanda</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30" />
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Elitech Digital Services. All rights reserved.
          </p>
          <motion.p
            className="text-sm text-muted-foreground flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>{" "}
            by Muvuzankwaya Peter Eliezer
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
