'use client'

import { motion } from 'motion/react'
import React from 'react'

interface AnimatedPostGridProps {
  children: React.ReactNode
}

export function AnimatedPostGrid({ children }: AnimatedPostGridProps) {
  const items = React.Children.toArray(children)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
