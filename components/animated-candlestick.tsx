'use client'

import { motion } from "framer-motion"

export function AnimatedCandlestick() {
  const candlesticks = [
    { x: 15, high: 15, low: 45, open: 25, close: 35, bullish: true },
    { x: 25, high: 20, low: 50, open: 40, close: 30, bullish: false },
    { x: 35, high: 10, low: 40, open: 35, close: 20, bullish: true },
    { x: 45, high: 25, low: 55, open: 45, close: 35, bullish: false },
    { x: 55, high: 20, low: 45, open: 40, close: 25, bullish: true },
    { x: 65, high: 15, low: 35, open: 30, close: 20, bullish: true }
  ]

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
        {/* Chart background */}
        <rect width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" rx="4" />
        
        {candlesticks.map((candle, i) => (
          <g key={i}>
            {/* High-Low line */}
            <motion.line
              x1={candle.x}
              y1={candle.high}
              x2={candle.x}
              y2={candle.low}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            />
            
            {/* Candle body */}
            <motion.rect
              x={candle.x - 3}
              y={Math.min(candle.open, candle.close)}
              width="6"
              height={Math.abs(candle.close - candle.open)}
              fill={candle.bullish ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
              style={{ transformOrigin: `${candle.x}px ${candle.open}px` }}
            />
          </g>
        ))}
        
        {/* Shield icon overlay */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <path
            d="M40 10 L50 15 L50 25 Q50 35 40 40 Q30 35 30 25 L30 15 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M35 22 L38 25 L45 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </div>
  )
}
