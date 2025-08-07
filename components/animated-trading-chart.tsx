'use client'

import { motion } from "framer-motion"

export function AnimatedTradingChart() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
        {/* Chart background */}
        <rect width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" rx="4" />
        
        {/* Grid lines */}
        {[20, 40, 60].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="10"
            y1={y}
            x2="70"
            y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          />
        ))}
        
        {[20, 40, 60].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={x}
            y1="10"
            x2={x}
            y2="70"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.2 + 0.5 }}
          />
        ))}
        
        {/* Animated line chart */}
        <motion.path
          d="M10,60 Q20,45 30,50 T50,35 T70,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        
        {/* Data points */}
        {[
          { x: 10, y: 60 },
          { x: 30, y: 50 },
          { x: 50, y: 35 },
          { x: 70, y: 25 }
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + i * 0.2 }}
          />
        ))}
        
        {/* Trending arrow */}
        <motion.path
          d="M60,30 L70,25 L65,35"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        />
      </svg>
    </div>
  )
}
