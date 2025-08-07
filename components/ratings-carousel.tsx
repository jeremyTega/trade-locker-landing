'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Portfolio Manager",
    rating: 5,
    text: "Tradelocker has completely transformed my investment strategy. The real-time insights are incredibly accurate.",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Day Trader",
    rating: 4,
    text: "Great platform with excellent automation features. The interface is intuitive and powerful.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    rating: 5,
    text: "Security features are top-notch. I trust this platform with all my client investments.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Hedge Fund Manager",
    rating: 5,
    text: "The AI-powered insights have helped me achieve 23% better returns this quarter.",
    avatar: "DK"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Crypto Investor",
    rating: 4,
    text: "Love the real-time market data and the automated rebalancing feature saves me hours.",
    avatar: "LW"
  },
  {
    id: 6,
    name: "James Miller",
    role: "Investment Banker",
    rating: 5,
    text: "Professional-grade tools with enterprise security. Perfect for institutional trading.",
    avatar: "JM"
  },
  {
    id: 7,
    name: "Anna Thompson",
    role: "Retail Investor",
    rating: 3,
    text: "Good platform overall, though the learning curve can be steep for beginners.",
    avatar: "AT"
  },
  {
    id: 8,
    name: "Robert Davis",
    role: "Quantitative Analyst",
    rating: 5,
    text: "The API integration is seamless and the data quality is exceptional for algorithmic trading.",
    avatar: "RD"
  }
]

export function RatingsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  }

  const currentReview = reviews[currentIndex]

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 max-w-md mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < currentReview.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              "{currentReview.text}"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold">{currentReview.avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-white">{currentReview.name}</p>
                <p className="text-sm text-gray-400">{currentReview.role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
