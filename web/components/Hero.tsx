'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaPlay, FaStar, FaShieldAlt, FaTools } from 'react-icons/fa'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  
  // Mouse tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth mouse tracking
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  // Transform mouse values for different elements
  const springXReverse = useTransform(springX, (value) => value * -0.5)
  const springYReverse = useTransform(springY, (value) => value * -0.5)
  const springXSmall = useTransform(springX, (value) => value * 0.3)
  const springYSmall = useTransform(springY, (value) => value * 0.3)
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPct = (clientX - innerWidth / 2) / (innerWidth / 2)
      const yPct = (clientY - innerHeight / 2) / (innerHeight / 2)
      
      mouseX.set(xPct * 20)
      mouseY.set(yPct * 20)
      
      setMousePosition({
        x: (clientX / innerWidth) * 100,
        y: (clientY / innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.95 }
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear"
    }
  }

  const services = ['سباكة', 'كهرباء', 'تكييف', 'صيانة عامة', 'نجارة', 'دهان']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"
          style={{ y: y1 }}
        />
        
        {/* Interactive floating orbs */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl"
          animate={floatingAnimation}
        />
        
        <motion.div
          style={{ x: springXReverse, y: springYReverse }}
          className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />
        
        <motion.div
          style={{ x: springXSmall, y: springYSmall }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        
        {/* Background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: y2 }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNi00IDRoLTR2LTZoNHoiLz48L2c+PC9nPjwvc3ZnPg==')] bg-repeat"></div>
        </motion.div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-white">
          {/* Floating Icon */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={rotateAnimation}
              className="w-20 h-20 bg-gradient-to-r from-secondary-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <FaTools className="text-3xl text-white" />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span
              className="inline-block"
              whileHover={{ 
                scale: 1.05,
                color: '#fbbf24',
                transition: { duration: 0.3 }
              }}
            >
              خدمات الصيانة المنزلية
            </motion.span>
            <br />
            <motion.span 
              className="text-secondary-400 inline-block"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.5 }
              }}
            >
              المتقدمة
            </motion.span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.02, color: '#93c5fd' }}
            >
              نحن نقدم خدمات صيانة شاملة ومتخصصة للمنازل والمكاتب.
            </motion.span>
            <br />
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.02, color: '#fbbf24' }}
            >
              فريق من الخبراء متاح 24/7 لخدمتكم
            </motion.span>
          </motion.p>

          {/* Animated Features */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center items-center gap-8 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <FaStar className="text-yellow-400" />
              <span className="text-sm font-medium">أفضل تقييم</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              <FaShieldAlt className="text-green-400" />
              <span className="text-sm font-medium">ضمان شامل</span>
            </motion.div>
          </motion.div>

          {/* Services list */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base"
          >
            {services.map((service, index) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 1.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  y: -5
                }}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 cursor-pointer transition-all duration-300"
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.a
              href="#contact"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="group relative overflow-hidden flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-secondary-500 to-yellow-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="relative z-10"
              >
                <FaPhone />
              </motion.div>
              <span className="relative z-10">اطلب خدمة الآن</span>
            </motion.a>

            <motion.a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="group relative overflow-hidden flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <FaWhatsapp />
              </motion.div>
              <span className="relative z-10">واتساب</span>
            </motion.a>
          </motion.div>

          {/* Video button */}
          <motion.div
            variants={fadeInLeft}
            className="mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Create modal for video
                const modal = document.createElement('div')
                modal.className = 'fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4'
                modal.innerHTML = `
                  <div class="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden">
                    <button 
                      onclick="this.parentElement.parentElement.remove(); document.body.style.overflow='unset'"
                      class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                    >
                      ✕
                    </button>
                    <div class="aspect-video">
                      <iframe
                        src="https://player.vimeo.com/video/76979871?autoplay=1"
                        class="w-full h-full"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="p-6 text-white">
                      <h3 class="text-2xl font-bold mb-2">شاهد كيف نعمل</h3>
                      <p class="text-gray-300">فيديو توضيحي لخدماتنا وطريقة عملنا المحترفة</p>
                    </div>
                  </div>
                `
                document.body.appendChild(modal)
                document.body.style.overflow = 'hidden'
                modal.onclick = (e) => {
                  if (e.target === modal) {
                    modal.remove()
                    document.body.style.overflow = 'unset'
                  }
                }
              }}
              className="group flex items-center space-x-2 space-x-reverse text-white/80 hover:text-white transition-colors duration-300 mx-auto bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20"
            >
              <motion.div 
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaPlay className="text-sm mr-1" />
              </motion.div>
              <div className="text-right">
                <div className="font-semibold">شاهد أعمالنا</div>
                <div className="text-sm opacity-75">فيديو تعريفي</div>
              </div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { number: '50K+', label: 'عميل راضي', color: 'text-blue-400' },
              { number: '99%', label: 'رضا العملاء', color: 'text-green-400' },
              { number: '24/7', label: 'خدمة مستمرة', color: 'text-yellow-400' },
              { number: '5★', label: 'التقييم', color: 'text-purple-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <motion.div 
                  className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
        <motion.p 
          className="text-white/60 text-sm mt-2 text-center"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          مرر للأسفل
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero 