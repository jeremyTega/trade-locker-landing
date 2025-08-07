'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react'

export function TradingDashboardChart() {
  const [portfolioValue, setPortfolioValue] = useState(125420)
  const [dailyChange, setDailyChange] = useState(2.34)

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 2000
      setPortfolioValue(prev => Math.max(100000, prev + change))
      setDailyChange((Math.random() - 0.5) * 8)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const chartData = [
    { x: 10, y: 70, value: 98000 },
    { x: 30, y: 60, value: 105000 },
    { x: 50, y: 45, value: 112000 },
    { x: 70, y: 35, value: 118000 },
    { x: 90, y: 25, value: 125000 },
    { x: 110, y: 20, value: 132000 },
    { x: 130, y: 15, value: 138000 },
    { x: 150, y: 10, value: 145000 }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Portfolio Overview */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Portfolio Overview</h3>
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-8 w-8 text-green-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Total Value</p>
                    <motion.p 
                      className="text-2xl font-bold text-white"
                      key={portfolioValue}
                      initial={{ scale: 1.1, color: dailyChange > 0 ? "#10B981" : "#EF4444" }}
                      animate={{ scale: 1, color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      ${portfolioValue.toLocaleString()}
                    </motion.p>
                  </div>
                </div>
                <motion.div 
                  className={`flex items-center space-x-1 ${dailyChange > 0 ? 'text-green-400' : 'text-red-400'}`}
                  key={dailyChange}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {dailyChange > 0 ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                  <span className="font-semibold">{dailyChange > 0 ? '+' : ''}{dailyChange.toFixed(2)}%</span>
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Today's Gain</p>
                <p className="text-green-400 font-bold text-lg">+$2,847</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Total Gain</p>
                <p className="text-green-400 font-bold text-lg">+$28,420</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">6-Month Performance</h3>
          <div className="h-64 relative bg-gray-900 rounded-lg p-4">
            <svg width="100%" height="100%" viewBox="0 0 160 100" className="overflow-visible">
              {/* Grid lines */}
              {[20, 40, 60, 80].map((y, i) => (
                <line
                  key={`grid-${i}`}
                  x1="10"
                  y1={y}
                  x2="150"
                  y2={y}
                  stroke="#374151"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}

              {/* Chart area fill */}
              <motion.path
                d={`M10,70 ${chartData.map(point => `L${point.x},${point.y}`).join(' ')} L150,100 L10,100 Z`}
                fill="url(#portfolioGradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.5 }}
              />

              {/* Chart line */}
              <motion.path
                d={`M10,70 ${chartData.map(point => `L${point.x},${point.y}`).join(' ')}`}
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
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
                  r="3"
                  fill="#10B981"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + i * 0.1 }}
                />
              ))}

              <defs>
                <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
