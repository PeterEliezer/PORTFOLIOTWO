"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Calendar, Phone, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Message = {
  id: string
  role: "assistant" | "user"
  content: string
  timestamp: Date
  actions?: { label: string; action: string }[]
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hi! I'm Elitech AI Assistant. I can help you learn about our services, book a consultation, or get in touch with Peter. What would you like to do?",
    timestamp: new Date(),
    actions: [
      { label: "Book Consultation", action: "book" },
      { label: "View Services", action: "services" },
      { label: "Contact Peter", action: "contact" },
    ],
  },
]

const botResponses: Record<string, Message> = {
  book: {
    id: "",
    role: "assistant",
    content: "I'd be happy to help you schedule a consultation with Peter. Please choose a preferred time slot:",
    timestamp: new Date(),
    actions: [
      { label: "Morning (9AM-12PM)", action: "book-morning" },
      { label: "Afternoon (2PM-5PM)", action: "book-afternoon" },
      { label: "Evening (6PM-8PM)", action: "book-evening" },
    ],
  },
  services: {
    id: "",
    role: "assistant",
    content: "Elitech Digital Services offers three main services:\n\n**Website Development** - Fast, responsive, and secure websites for businesses\n\n**Telegram Bot Development** - Automation, payment, and notification bots\n\n**Graphic Design** - Logos, posters, flyers, and social media designs\n\nWhich service interests you most?",
    timestamp: new Date(),
    actions: [
      { label: "Website Development", action: "service-web" },
      { label: "Telegram Bots", action: "service-bot" },
      { label: "Graphic Design", action: "service-design" },
    ],
  },
  contact: {
    id: "",
    role: "assistant",
    content: "You can reach Peter through multiple channels:\n\n**WhatsApp:** +250 794 256 192\n**Phone:** +250 736 353 238\n**Email:** petereliezer8@gmail.com\n\nOr would you like me to help you send a message?",
    timestamp: new Date(),
    actions: [
      { label: "WhatsApp Now", action: "whatsapp" },
      { label: "Send Email", action: "email" },
      { label: "Send Message Here", action: "message" },
    ],
  },
  "book-morning": {
    id: "",
    role: "assistant",
    content: "Morning slot selected (9AM-12PM). To complete your booking, please provide your name and preferred date. Peter will confirm via WhatsApp within 24 hours.",
    timestamp: new Date(),
    actions: [
      { label: "Complete via WhatsApp", action: "whatsapp" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  "book-afternoon": {
    id: "",
    role: "assistant",
    content: "Afternoon slot selected (2PM-5PM). To complete your booking, please provide your name and preferred date. Peter will confirm via WhatsApp within 24 hours.",
    timestamp: new Date(),
    actions: [
      { label: "Complete via WhatsApp", action: "whatsapp" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  "book-evening": {
    id: "",
    role: "assistant",
    content: "Evening slot selected (6PM-8PM). To complete your booking, please provide your name and preferred date. Peter will confirm via WhatsApp within 24 hours.",
    timestamp: new Date(),
    actions: [
      { label: "Complete via WhatsApp", action: "whatsapp" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  "service-web": {
    id: "",
    role: "assistant",
    content: "**Website Development Services:**\n\n- Business & Personal Websites\n- E-commerce Solutions\n- Portfolio & Landing Pages\n- SEO Optimization\n- Fast & Responsive Design\n\nPricing starts from affordable rates. Would you like a free quote?",
    timestamp: new Date(),
    actions: [
      { label: "Get Free Quote", action: "whatsapp" },
      { label: "View Portfolio", action: "portfolio" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  "service-bot": {
    id: "",
    role: "assistant",
    content: "**Telegram Bot Development:**\n\n- Automation Bots\n- Payment & Transaction Bots\n- Notification Systems\n- Customer Service Bots\n- Custom API Integrations\n\nEach bot is tailored to your specific needs. Want to discuss your requirements?",
    timestamp: new Date(),
    actions: [
      { label: "Discuss Requirements", action: "whatsapp" },
      { label: "See Examples", action: "portfolio" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  "service-design": {
    id: "",
    role: "assistant",
    content: "**Graphic Design Services:**\n\n- Logo Design & Branding\n- Posters & Flyers\n- Social Media Designs\n- Business Cards\n- Marketing Materials\n\nAll designs are original and tailored to your brand. Ready to start?",
    timestamp: new Date(),
    actions: [
      { label: "Start a Project", action: "whatsapp" },
      { label: "View Samples", action: "portfolio" },
      { label: "Back to Menu", action: "menu" },
    ],
  },
  whatsapp: {
    id: "",
    role: "assistant",
    content: "Opening WhatsApp to connect you with Peter...",
    timestamp: new Date(),
    actions: [],
  },
  email: {
    id: "",
    role: "assistant",
    content: "Opening your email client...",
    timestamp: new Date(),
    actions: [],
  },
  message: {
    id: "",
    role: "assistant",
    content: "Please type your message below and I'll make sure Peter receives it:",
    timestamp: new Date(),
    actions: [],
  },
  portfolio: {
    id: "",
    role: "assistant",
    content: "Scrolling to the portfolio section where you can see examples of our work...",
    timestamp: new Date(),
    actions: [],
  },
  menu: {
    id: "",
    role: "assistant",
    content: "How can I help you today?",
    timestamp: new Date(),
    actions: [
      { label: "Book Consultation", action: "book" },
      { label: "View Services", action: "services" },
      { label: "Contact Peter", action: "contact" },
    ],
  },
  default: {
    id: "",
    role: "assistant",
    content: "Thanks for your message! Peter will review it shortly. In the meantime, is there anything else I can help you with?",
    timestamp: new Date(),
    actions: [
      { label: "Book Consultation", action: "book" },
      { label: "View Services", action: "services" },
      { label: "Contact Peter", action: "contact" },
    ],
  },
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleAction = (action: string) => {
    // Handle special actions
    if (action === "whatsapp") {
      window.open("https://wa.me/250794256192?text=Hi%20Peter,%20I%27m%20interested%20in%20your%20services", "_blank")
    } else if (action === "email") {
      window.location.href = "mailto:petereliezer8@gmail.com?subject=Inquiry%20from%20Website"
    } else if (action === "portfolio") {
      setIsOpen(false)
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      return
    }

    // Add user action as message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: botResponses[action]?.actions?.find(a => a.action === action)?.label || action.charAt(0).toUpperCase() + action.slice(1).replace("-", " "),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = botResponses[action] || botResponses.default
      const botMessage: Message = {
        ...response,
        id: (Date.now() + 1).toString(),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate response
    setTimeout(() => {
      const response = botResponses.default
      const botMessage: Message = {
        ...response,
        id: (Date.now() + 1).toString(),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-25" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-md group-hover:blur-lg transition-all" />
          
          <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-2xl shadow-primary/25">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <Sparkles size={20} className="mr-1" />
                  <MessageCircle size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.button>

        {/* Label */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <span className="px-3 py-2 rounded-lg bg-card border border-border/50 text-sm font-medium shadow-xl">
                AI Assistant
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] overflow-hidden rounded-2xl bg-card border border-border/50 shadow-2xl shadow-black/20"
          >
            {/* Header */}
            <div className="relative p-4 border-b border-border/50 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Bot size={20} className="text-primary-foreground" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-card" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Elitech AI Assistant</h3>
                  <p className="text-xs text-muted-foreground">Online | Typically replies instantly</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            </div>

            {/* Messages */}
            <div className="h-[350px] overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                      message.role === "assistant"
                        ? "bg-gradient-to-br from-primary to-accent"
                        : "bg-secondary"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <Bot size={16} className="text-primary-foreground" />
                    ) : (
                      <User size={16} className="text-muted-foreground" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                    <div
                      className={`inline-block px-4 py-2 rounded-2xl text-sm ${
                        message.role === "assistant"
                          ? "bg-secondary/50 text-foreground rounded-tl-sm"
                          : "bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-tr-sm"
                      }`}
                    >
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                    
                    {/* Action buttons */}
                    {message.actions && message.actions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {message.actions.map((action) => (
                          <button
                            key={action.action}
                            onClick={() => handleAction(action.action)}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/50 border border-border/50 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all"
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Bot size={16} className="text-primary-foreground" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-secondary/50">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border/50 bg-secondary/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-secondary/50 border-border/50 focus:border-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim()}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                >
                  <Send size={18} />
                </Button>
              </form>
              
              {/* Quick actions */}
              <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-border/30">
                <a
                  href="https://wa.me/250794256192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-green-500 transition-colors"
                >
                  <Phone size={12} />
                  WhatsApp
                </a>
                <a
                  href="mailto:petereliezer8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={12} />
                  Email
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Calendar size={12} />
                  Contact Form
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
