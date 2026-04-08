"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, Phone, MessageCircle, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import Image from "next/image"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+250 794 256 192",
    href: "https://wa.me/250794256192",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 736 353 238",
    href: "tel:+250736353238",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "petereliezer8@gmail.com",
    href: "mailto:petereliezer8@gmail.com",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rwanda",
    href: null,
    color: "from-orange-500 to-red-500",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
            >
              {`Let's work`}{" "}
              <span className="text-gradient">together!</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Have a project in mind? Get in touch and let&apos;s create something amazing together.
            </motion.p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-10"
            >
              {/* Photo Placeholder 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden glass"
              >
                <Image
                  src="/images/contact-photo.jpg"
                  alt="Peter Eliezer"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <Sparkles className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-gradient-static mb-2">Photo 3</div>
                  <p className="text-sm text-muted-foreground px-4">
                    Add your photo to<br/>/public/images/contact-photo.jpg
                  </p>
                </div>
              </motion.div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={`${item.label}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-5 rounded-xl glass glass-hover"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                          <item.icon size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                          <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 rounded-xl glass">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                          <item.icon size={22} className="text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                          <p className="font-semibold">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="relative p-8 rounded-2xl glass overflow-hidden"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Sparkles size={18} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Ready to start your project?</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Get affordable, professional, and reliable digital services for your business.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:opacity-90 transition-opacity"
                    >
                      <a href="https://wa.me/250794256192" target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={18} className="mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-border/50 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a href="mailto:petereliezer8@gmail.com">
                        <Mail size={18} className="mr-2" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="p-8 lg:p-10 rounded-2xl glass"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/30"
                  >
                    <CheckCircle size={40} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="text-2xl font-bold">Send a message</h3>
                    <p className="text-sm text-muted-foreground">Fill out the form and I&apos;ll respond promptly.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field>
                        <FieldLabel htmlFor="name" className="text-sm font-medium">Name</FieldLabel>
                        <motion.div
                          animate={{ scale: focusedField === "name" ? 1.01 : 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="bg-secondary/30 border-border/50 focus:border-primary focus:bg-secondary/50 transition-all h-12"
                          />
                        </motion.div>
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email" className="text-sm font-medium">Email</FieldLabel>
                        <motion.div
                          animate={{ scale: focusedField === "email" ? 1.01 : 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="bg-secondary/30 border-border/50 focus:border-primary focus:bg-secondary/50 transition-all h-12"
                          />
                        </motion.div>
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="service" className="text-sm font-medium">Service Needed</FieldLabel>
                      <motion.div
                        animate={{ scale: focusedField === "service" ? 1.01 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Input
                          id="service"
                          name="service"
                          placeholder="Website, Telegram Bot, or Graphic Design"
                          required
                          onFocus={() => setFocusedField("service")}
                          onBlur={() => setFocusedField(null)}
                          className="bg-secondary/30 border-border/50 focus:border-primary focus:bg-secondary/50 transition-all h-12"
                        />
                      </motion.div>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message" className="text-sm font-medium">Message</FieldLabel>
                      <motion.div
                        animate={{ scale: focusedField === "message" ? 1.01 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          required
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="bg-secondary/30 border-border/50 focus:border-primary focus:bg-secondary/50 transition-all resize-none"
                        />
                      </motion.div>
                    </Field>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="size-5 mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
