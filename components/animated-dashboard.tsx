'use client'

import { motion } from "framer-motion"

export function AnimatedDashboard() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
        {/* Dashboard background */}
        <rect width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" rx="4" />
        
        {/* Top bar */}
        <motion.rect
          x="5"
          y="5"
          width="70"
          height="8"
          fill="currentColor"
          opacity="0.3"
          rx="2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Left panel */}
        <motion.rect
          x="5"
          y="18"
          width="20"
          height="57"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          rx="2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        
        {/* Menu items */}
        {[25, 32, 39, 46].map((y, i) => (
          <motion.rect
            key={i}
            x="8"
            y={y}
            width="14"
            height="3"
            fill="currentColor"
            opacity="0.6"
            rx="1"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          />
        ))}
        
        {/* Main content area */}
        <motion.rect
          x="30"
          y="18"
          width="45"
          height="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          rx="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        {/* Chart in main area */}
        <motion.path
          d="M35,45 Q42,35 50,40 T65,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
        
        {/* Bottom widgets */}
        {[32, 50, 68].map((x, i) => (
          <motion.rect
            key={i}
            x={x}
            y="58"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
            rx="2"
            initial={{ y: 75 }}
            animate={{ y: 58 }}
            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
          />
        ))}
        
        {/* Bot/automation icon */}
        <motion.g
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <circle cx="52" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <circle cx="49" cy="32" r="1" fill="currentColor" />
          <circle cx="55" cy="32" r="1" fill="currentColor" />
          <path d="M48 38 Q52 40 56 38" fill="none" stroke="currentColor" strokeWidth="1" />
        </motion.g>
      </svg>
    </div>
  )
}
