'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Bot, Star, Check, Menu, X, Crown } from 'lucide-react'
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedTradingChart } from "@/components/animated-trading-chart"
import { AnimatedCandlestick } from "@/components/animated-candlestick"
import { AnimatedDashboard } from "@/components/animated-dashboard"
import { BitcoinChart } from "@/components/bitcoin-chart"
import { RatingsCarousel } from "@/components/ratings-carousel"
import { TradingDashboardChart } from "@/components/trading-dashboard-chart"
import { MarketOverview } from "@/components/market-overview"
import Image from "next/image"

export default function TradeLockerlandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const tradingWords = ["Tradelocker", "TradeMaster", "InvestPro", "MarketEdge", "TradingHub"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % tradingWords.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <Image 
                  src="/images/tradelocker-logo.png" 
                  alt="Tradelocker Logo" 
                  width={180} 
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#home" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
                <Link href="#features" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </Link>
                <Link href="#pricing" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
                <Link href="#home" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Home
                </Link>
                <Link href="#features" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Features
                </Link>
                <Link href="#pricing" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Pricing
                </Link>
                <Link href="#contact" className="text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video-like Effect */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video-like Background Effect */}
        <div className="absolute inset-0 w-full h-full">
          {/* Base image with instant loading */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-background.jpeg')",
              willChange: 'transform',
            }}
          />
          
          {/* Video-like overlay effects */}
          <div className="absolute inset-0">
            {/* Animated scanlines for video effect */}
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                background: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(255,255,255,0.03) 2px,
                  rgba(255,255,255,0.03) 4px
                )`
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 0.1,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Video noise effect */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(circle at 50% 50%, 
                  rgba(255,255,255,0.1) 0%, 
                  transparent 50%)`
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Subtle zoom effect for video feel */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-30"
              style={{
                backgroundImage: "url('/images/hero-background.jpeg')",
              }}
              animate={{
                scale: [1, 1.008, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Fast-moving data particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  x: [0, window.innerWidth || 1200],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* Digital glitch effect */}
            <motion.div
              className="absolute inset-0 mix-blend-screen opacity-20"
              animate={{
                x: [0, 2, -1, 0],
                opacity: [0, 0.3, 0, 0],
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(0, 255, 255, 0.1) 25%, 
                  rgba(255, 0, 255, 0.1) 50%, 
                  rgba(255, 255, 0, 0.1) 75%, 
                  transparent 100%)`
              }}
            />
            
            {/* Pulsing corner vignette */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at center, 
                  transparent 30%, 
                  rgba(0,0,0,0.4) 70%)`
              }}
              animate={{
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Matrix-style falling code */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute text-green-400/30 font-mono text-xs"
                style={{
                  left: `${15 + i * 15}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear"
                }}
              >
                {['01001', '11010', '00110', '10101'][Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
            
            {/* Trading chart overlay effect */}
            <motion.div
              className="absolute bottom-10 right-10 opacity-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <svg width="120" height="60" viewBox="0 0 120 60" className="text-blue-400">
                <motion.path
                  d="M10,50 Q30,30 50,35 T90,20 L110,15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Hero Content - keep existing content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Animated changing title */}
            <div className="h-24 lg:h-32 flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentWordIndex}
                  className="text-6xl lg:text-8xl font-bold text-white tracking-tight"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    textShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.8)",
                      "0 0 20px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ 
                    duration: 0.6,
                    textShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {tradingWords[currentWordIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <motion.p 
              className="text-2xl lg:text-3xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Smarter Investing Starts Here
            </motion.p>
          </motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Unlock the power of intelligent investing with our cutting-edge platform. 
            Get real-time insights, automated portfolio management, and secure transactions all in one place.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transform transition-all duration-200 shadow-lg shadow-blue-600/25"
              >
                Get Started
                {/* onClick{()>{}} */}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Bitcoin Chart Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Live Market Data
            </h2>
            <p className="text-xl text-gray-400">
              Real-time cryptocurrency and trading insights at your fingertips
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BitcoinChart />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Tradelocker?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform combines advanced technology with user-friendly design to give you the edge in today's markets.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
                    <AnimatedTradingChart />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Real-time Market Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Stay ahead of the market with live data, advanced analytics, and AI-powered insights that help you make informed investment decisions.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
                    <AnimatedDashboard />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Automated Portfolio Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Let our intelligent algorithms optimize your portfolio automatically, rebalancing and adjusting based on market conditions and your goals.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-24 h-24 mb-4 flex items-center justify-center">
                    <AnimatedCandlestick />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    Your investments are protected with bank-level security, multi-factor authentication, and encrypted transactions for complete peace of mind.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ratings and Reviews Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Investors Worldwide
            </h2>
            <p className="text-xl text-gray-400">
              See what our community is saying about us
            </p>
          </motion.div>

          {/* Overall Rating Stats */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Rating Stats */}
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <span className="text-6xl font-bold text-white mr-4">4.9</span>
                      <div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, rotate: -180 }}
                              whileInView={{ opacity: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1, duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <Star className="h-8 w-8 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-gray-400">Based on 2,847 reviews</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating Breakdown */}
                  <div className="space-y-3">
                    {[
                      { stars: 5, percentage: 78 },
                      { stars: 4, percentage: 15 },
                      { stars: 3, percentage: 4 },
                      { stars: 2, percentage: 2 },
                      { stars: 1, percentage: 1 }
                    ].map((rating, index) => (
                      <motion.div 
                        key={rating.stars}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-sm text-gray-400 w-8">{rating.stars}</span>
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-2" />
                        <div className="flex-1 bg-gray-700 rounded-full h-2 mr-4">
                          <motion.div 
                            className="bg-yellow-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${rating.percentage}%` }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 w-12">{rating.percentage}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <motion.p 
                      className="text-3xl font-bold text-blue-400 mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      50K+
                    </motion.p>
                    <p className="text-gray-400">Active Users</p>
                  </div>
                  <div className="text-center">
                    <motion.p 
                      className="text-3xl font-bold text-green-400 mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      $2.5B+
                    </motion.p>
                    <p className="text-gray-400">Assets Managed</p>
                  </div>
                  <div className="text-center">
                    <motion.p 
                      className="text-3xl font-bold text-purple-400 mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      99.9%
                    </motion.p>
                    <p className="text-gray-400">Uptime</p>
                  </div>
                  <div className="text-center">
                    <motion.p 
                      className="text-3xl font-bold text-orange-400 mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      24/7
                    </motion.p>
                    <p className="text-gray-400">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <RatingsCarousel />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-400">
              Select the perfect plan for your investment journey
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Basic Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Basic</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$9</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">Perfect for beginners</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Real-time market data</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Basic portfolio tracking</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Email support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Mobile app access</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-blue-500 relative h-full">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                  Most Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Pro</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">For serious investors</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Everything in Basic</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Advanced analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Automated rebalancing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">API access</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Premium</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-400">For professional traders</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">AI-powered insights</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Custom strategies</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">White-label solutions</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-gray-700 hover:bg-gray-600 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Retirement Plan */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-purple-900 to-purple-800 border-purple-500 relative h-full">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-white">Retirement Plan</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">$199</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  <CardDescription className="mt-2 text-gray-300">Long-term wealth building</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">Everything in Premium</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">Retirement planning tools</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">Tax optimization strategies</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">Estate planning support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-200">Personal financial advisor</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trading Dashboard Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Trading Dashboard
            </h2>
            <p className="text-xl text-gray-400">
              Monitor your portfolio performance with real-time analytics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TradingDashboardChart />
          </motion.div>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Market Analysis
            </h2>
            <p className="text-xl text-gray-400">
              Track multiple cryptocurrencies and make informed decisions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MarketOverview />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/images/tradelocker-logo.png" 
                alt="Tradelocker Logo" 
                width={180} 
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Smarter investing starts here. Join thousands of investors who trust our platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Press</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-400 transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tradelocker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
