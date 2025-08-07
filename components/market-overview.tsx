'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from 'lucide-react'

const marketData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67420, change: 2.34, color: '#F59E0B' },
  { symbol: 'ETH', name: 'Ethereum', price: 3240, change: -1.23, color: '#6366F1' },
  { symbol: 'SOL', name: 'Solana', price: 142, change: 4.56, color: '#8B5CF6' },
  { symbol: 'ADA', name: 'Cardano', price: 0.48, change: 1.89, color: '#06B6D4' },
  { symbol: 'DOT', name: 'Polkadot', price: 7.23, change: -0.67, color: '#EC4899' },
  { symbol: 'LINK', name: 'Chainlink', price: 14.56, change: 3.21, color: '#10B981' }
]

export function MarketOverview() {
  const [currentData, setCurrentData] = useState(marketData)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(prev => prev.map(item => ({
        ...item,
        price: item.price + (Math.random() - 0.5) * item.price * 0.02,
        change: (Math.random() - 0.5) * 10
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-white">Market Overview</h3>
        <motion.div
          className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Live Data
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentData.map((crypto, index) => (
          <motion.div
            key={crypto.symbol}
            className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: crypto.color }}
                >
                  {crypto.symbol.slice(0, 2)}
                </div>
                <div>
                  <p className="text-white font-semibold">{crypto.name}</p>
                  <p className="text-gray-400 text-sm">{crypto.symbol}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <motion.p 
                className="text-2xl font-bold text-white"
                key={crypto.price}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                ${crypto.price.toFixed(crypto.price < 1 ? 4 : 2)}
              </motion.p>
              <motion.div 
                className={`flex items-center space-x-1 ${crypto.change > 0 ? 'text-green-400' : 'text-red-400'}`}
                key={crypto.change}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {crypto.change > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                <span className="font-semibold">{crypto.change > 0 ? '+' : ''}{crypto.change.toFixed(2)}%</span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
