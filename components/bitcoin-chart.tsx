'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function BitcoinChart() {
  const [currentPrice, setCurrentPrice] = useState(67420)
  const [priceChange, setPriceChange] = useState(2.34)

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 1000
      setCurrentPrice(prev => Math.max(60000, prev + change))
      setPriceChange((Math.random() - 0.5) * 5)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { x: 10, y: 60 }, { x: 20, y: 45 }, { x: 30, y: 55 }, { x: 40, y: 40 },
    { x: 50, y: 35 }, { x: 60, y: 50 }, { x: 70, y: 30 }, { x: 80, y: 25 },
    { x: 90, y: 40 }, { x: 100, y: 20 }, { x: 110, y: 35 }, { x: 120, y: 15 }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">₿</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">Bitcoin</h3>
            <p className="text-gray-400 text-sm">BTC/USD</p>
          </div>
        </div>
        <div className="text-right">
          <motion.p 
            className="text-white font-bold text-lg"
            key={currentPrice}
            initial={{ scale: 1.1, color: priceChange > 0 ? "#10B981" : "#EF4444" }}
            animate={{ scale: 1, color: "#FFFFFF" }}
            transition={{ duration: 0.3 }}
          >
            ${currentPrice.toLocaleString()}
          </motion.p>
          <motion.p 
            className={`text-sm ${priceChange > 0 ? 'text-green-400' : 'text-red-400'}`}
            key={priceChange}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)}%
          </motion.p>
        </div>
      </div>

      <div className="h-32 relative">
        <svg width="100%" height="100%" viewBox="0 0 130 80" className="overflow-visible">
          {/* Grid lines */}
          {[20, 40, 60].map((y, i) => (
            <line
              key={`grid-${i}`}
              x1="10"
              y1={y}
              x2="120"
              y2={y}
              stroke="#374151"
              strokeWidth="0.5"
              opacity="0.3"
            />
          ))}

          {/* Chart area fill */}
          <motion.path
            d={`M10,60 ${chartData.map(point => `L${point.x},${point.y}`).join(' ')} L120,80 L10,80 Z`}
            fill="url(#bitcoinGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Chart line */}
          <motion.path
            d={`M10,60 ${chartData.map(point => `L${point.x},${point.y}`).join(' ')}`}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Data points */}
          {chartData.map((point, i) => (
            <motion.circle
              key={i}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="#F59E0B"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
            />
          ))}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="bitcoinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated price indicator */}
        <motion.div
          className="absolute top-2 right-2 bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Live
        </motion.div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-gray-400 text-xs">24h High</p>
          <p className="text-white text-sm font-semibold">$68,240</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">24h Low</p>
          <p className="text-white text-sm font-semibold">$66,180</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Volume</p>
          <p className="text-white text-sm font-semibold">2.4B</p>
        </div>
      </div>
    </div>
  )
}
