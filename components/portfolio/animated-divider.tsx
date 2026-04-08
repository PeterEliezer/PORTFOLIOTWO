"use client"

import { motion } from "framer-motion"

export function AnimatedDivider() {
  return (
    <div className="relative h-px w-full max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <div className="absolute inset-0 bg-border/30" />
    </div>
  )
}
