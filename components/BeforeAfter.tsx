'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaChevronLeft, 
  FaChevronRight,
  FaEye,
  FaClock,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

const BeforeAfter = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const [isComparing, setIsComparing] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'تجديد المطبخ بالكامل',
      category: 'تجديد',
      duration: '5 أيام',
      beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&sat=100&contrast=120&bright=120',
      description: 'تحويل مطبخ قديم إلى مطبخ عصري بتصميم حديث',
      features: ['تركيب خزائن جديدة', 'تجديد الكهرباء', 'تركيب سيراميك جديد', 'دهان شامل'],
      location: 'الرياض، حي النرجس',
      rating: 5.0,
      clientName: 'أبو محمد العتيبي'
    },
    {
      id: 2,
      title: 'إصلاح نظام السباكة',
      category: 'سباكة',
      duration: '2 أيام',
      beforeImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&sat=50&bright=80',
      afterImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      description: 'إصلاح تسريبات المياه وتجديد نظام السباكة',
      features: ['إصلاح التسريبات', 'تجديد المواسير', 'تركيب أدوات جديدة', 'اختبار النظام'],
      location: 'جدة، حي الصفا',
      rating: 4.9,
      clientName: 'أم أحمد الأحمدي'
    },
    {
      id: 3,
      title: 'تجديد النظام الكهربائي',
      category: 'كهرباء',
      duration: '3 أيام',
      beforeImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&sat=30&bright=70',
      afterImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      description: 'تحديث النظام الكهربائي وتركيب إضاءة LED',
      features: ['تجديد اللوحة الكهربائية', 'تركيب إضاءة LED', 'إضافة مقابس جديدة', 'فحص الأمان'],
      location: 'الدمام، حي الفيصلية',
      rating: 4.8,
      clientName: 'خالد المطيري'
    },
    {
      id: 4,
      title: 'صيانة نظام التكييف',
      category: 'تكييف',
      duration: '1 يوم',
      beforeImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&sat=40&bright=75',
      afterImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      description: 'تنظيف وصيانة شاملة لنظام التكييف المركزي',
      features: ['تنظيف الوحدات', 'تعبئة الغاز', 'فحص الأنابيب', 'اختبار الأداء'],
      location: 'مكة المكرمة، العزيزية',
      rating: 4.9,
      clientName: 'سعد الغامدي'
    },
    {
      id: 5,
      title: 'تجديد الحمام بالكامل',
      category: 'تجديد',
      duration: '7 أيام',
      beforeImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&sat=30&bright=70',
      afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop',
      description: 'تحويل حمام قديم إلى حمام عصري فاخر',
      features: ['تركيب أدوات صحية جديدة', 'سيراميك فاخر', 'إضاءة LED', 'نظام تهوية محدث'],
      location: 'المدينة المنورة، حي العوالي',
      rating: 5.0,
      clientName: 'نورا السديري'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const current = projects[currentProject]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={30} duration={20} className="absolute top-10 left-10">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement intensity={40} duration={15} className="absolute bottom-20 right-20">
          <div className="w-48 h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/20"
          >
            <FaEye className="text-primary-400" />
            <span className="font-semibold">قبل وبعد</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            شاهد{' '}
            <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              التحول المذهل
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اكتشف كيف نحول المساحات العادية إلى أماكن استثنائية من خلال خبرتنا وحرفيتنا المتميزة
          </p>
        </AnimatedSection>

        {/* Main Project Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image Comparison */}
                    <AnimatedSection>            <HoverCard className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 relative">
              <div className="relative">
                {/* Before/After Toggle */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex bg-black/50 backdrop-blur-sm rounded-full p-1">
                    <button
                      onClick={() => setIsComparing(false)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        !isComparing ? 'bg-white text-black' : 'text-white hover:text-gray-300'
                      }`}
                    >
                      قبل
                    </button>
                    <button
                      onClick={() => setIsComparing(true)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isComparing ? 'bg-white text-black' : 'text-white hover:text-gray-300'
                      }`}
                    >
                      بعد
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div className="aspect-video relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={isComparing ? 'after' : 'before'}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      src={isComparing ? current.afterImage : current.beforeImage}
                      alt={current.title}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <motion.div
                        key={isComparing ? 'after-label' : 'before-label'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold mb-1"
                      >
                        {isComparing ? 'بعد التجديد ✨' : 'قبل التجديد 📋'}
                      </motion.div>
                      <p className="text-gray-300 text-sm">
                        {isComparing ? 'النتيجة النهائية المذهلة' : 'الحالة الأولية'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                >
                  <FaChevronLeft />
                </motion.button>

                <motion.button
                  onClick={nextProject}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                >
                  <FaChevronRight />
                </motion.button>
              </div>
            </HoverCard>
          </AnimatedSection>

          {/* Project Details */}
                    <AnimatedSection>            <div className="text-white space-y-6">
              {/* Project Header */}
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {current.category}
                  </span>
                  <div className="flex items-center space-x-1 space-x-reverse text-yellow-400">
                    <FaStar className="text-sm" />
                    <span className="text-sm font-medium">{current.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-3">{current.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {current.description}
                </p>
              </motion.div>

              {/* Project Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 space-x-reverse text-primary-400 mb-2">
                    <FaClock className="text-sm" />
                    <span className="text-sm font-medium">مدة المشروع</span>
                  </div>
                  <div className="text-xl font-bold">{current.duration}</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 space-x-reverse text-green-400 mb-2">
                    <FaCheckCircle className="text-sm" />
                    <span className="text-sm font-medium">العميل</span>
                  </div>
                  <div className="text-lg font-bold">{current.clientName}</div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-primary-400">الأعمال المنجزة:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {current.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-center space-x-3 space-x-reverse bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-400"
              >
                📍 {current.location}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <InteractiveButton
                  href="#contact"
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-3"
                >
                  احجز مشروعك الآن
                </InteractiveButton>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Project Thumbnails */}
                <AnimatedSection>          <div className="flex justify-center space-x-4 space-x-reverse overflow-x-auto pb-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setCurrentProject(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  currentProject === index
                    ? 'border-primary-400 shadow-lg shadow-primary-400/25'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <img
                  src={project.afterImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {currentProject === index && (
                  <motion.div
                    layoutId="activeProject"
                    className="absolute inset-0 bg-primary-400/20"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Stats Section */}
                <AnimatedSection className="text-center mt-16">          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '500+', label: 'مشروع مكتمل', icon: '🏆' },
                { number: '98%', label: 'رضا العملاء', icon: '😊' },
                { number: '15', label: 'سنة خبرة', icon: '⭐' },
                { number: '24/7', label: 'دعم مستمر', icon: '🕐' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default BeforeAfter 