'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaUser, FaTools } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform values based on scroll
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']
  )
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 4px 6px -1px rgba(0, 0, 0, 0.1)', '0 10px 25px -3px rgba(0, 0, 0, 0.1)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { href: '#hero', label: 'الرئيسية' },
    { href: '#services', label: 'الخدمات' },
    { href: '#features', label: 'المميزات' },
    { href: '#contact', label: 'تواصل معنا' }
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  }

  const navItemVariants = {
    initial: { y: 0 },
    hover: { 
      y: -3,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const staggerChildren = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const fadeInUp = {
    closed: { opacity: 0, y: 20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow
      }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="flex items-center cursor-pointer"
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl flex items-center justify-center ml-3"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaTools className="text-white text-lg" />
            </motion.div>
            <motion.div 
              className="text-primary-600 font-bold text-xl"
              whileHover={{ 
                color: '#1e40af',
                transition: { duration: 0.2 }
              }}
            >
              الصيانة المنزلية المتقدمة
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                variants={navItemVariants}
                initial="initial"
                whileHover="hover"
                className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-3 py-2"
                custom={index}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <motion.a
              href="tel:+966920000000"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -3px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 space-x-reverse bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-lg transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaPhone className="text-sm" />
              </motion.div>
              <span>اتصل الآن</span>
            </motion.a>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/login" 
                className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <FaUser className="text-sm" />
                <span>تسجيل دخول</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm overflow-hidden"
            >
              <motion.nav 
                variants={staggerChildren}
                initial="closed"
                animate="open"
                className="flex flex-col py-4"
              >
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    variants={fadeInUp}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-6 py-3 rounded-lg mx-2"
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col space-y-3 px-6 pt-4 border-t border-gray-200 mx-2 mt-2"
                >
                  <motion.a
                    href="tel:+966920000000"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-primary-600 to-blue-600 text-white px-4 py-3 rounded-xl text-sm font-medium shadow-lg"
                  >
                    <FaPhone className="text-sm" />
                    <span>اتصل الآن</span>
                  </motion.a>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link 
                      href="/login"
                      className="flex items-center justify-center space-x-2 space-x-reverse text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 border border-gray-300 px-4 py-3 rounded-xl hover:border-primary-300"
                    >
                      <FaUser className="text-sm" />
                      <span>تسجيل دخول</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header 