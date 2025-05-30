'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaWrench, 
  FaBolt, 
  FaSnowflake, 
  FaHome, 
  FaBroom, 
  FaHammer, 
  FaPaintRoller, 
  FaCogs,
  FaArrowRight,
  FaStar
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: FaWrench,
      title: 'صيانة السباكة',
      description: 'إصلاح وتركيب جميع أنواع التمديدات والتسريبات',
      features: ['إصلاح التسريبات', 'تنظيف المجاري', 'تركيب الأدوات الصحية'],
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
      hoverShadow: 'hover:shadow-blue-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop'
    },
    {
      icon: FaBolt,
      title: 'صيانة الكهرباء',
      description: 'خدمات كهربائية شاملة وآمنة',
      features: ['تركيب المفاتيح', 'إصلاح الأعطال', 'صيانة اللوحات'],
      color: 'from-yellow-500 to-orange-500',
      shadowColor: 'shadow-yellow-500/20',
      hoverShadow: 'hover:shadow-yellow-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
    },
    {
      icon: FaSnowflake,
      title: 'صيانة التكييف',
      description: 'تركيب وصيانة أنظمة التكييف والتبريد',
      features: ['تنظيف المكيفات', 'إصلاح الأعطال', 'تعبئة الغاز'],
      color: 'from-cyan-500 to-blue-500',
      shadowColor: 'shadow-cyan-500/20',
      hoverShadow: 'hover:shadow-cyan-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop'
    },
    {
      icon: FaHome,
      title: 'الصيانة العامة',
      description: 'خدمات صيانة شاملة للمنزل',
      features: ['صيانة الأبواب', 'إصلاح النوافذ', 'أعمال التشطيبات'],
      color: 'from-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/20',
      hoverShadow: 'hover:shadow-green-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    },
    {
      icon: FaBroom,
      title: 'خدمات التنظيف',
      description: 'تنظيف شامل ومتخصص',
      features: ['تنظيف المباني', 'تطهير الخزانات', 'تنظيف السجاد'],
      color: 'from-purple-500 to-pink-500',
      shadowColor: 'shadow-purple-500/20',
      hoverShadow: 'hover:shadow-purple-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    },
    {
      icon: FaHammer,
      title: 'النجارة',
      description: 'أعمال النجارة والديكور',
      features: ['تركيب الأثاث', 'إصلاح الخشب', 'أعمال الديكور'],
      color: 'from-amber-500 to-orange-500',
      shadowColor: 'shadow-amber-500/20',
      hoverShadow: 'hover:shadow-amber-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
    },
    {
      icon: FaPaintRoller,
      title: 'أعمال الدهان',
      description: 'دهان الجدران والديكورات',
      features: ['دهان الجدران', 'الديكورات', 'تجديد الواجهات'],
      color: 'from-rose-500 to-red-500',
      shadowColor: 'shadow-rose-500/20',
      hoverShadow: 'hover:shadow-rose-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop'
    },
    {
      icon: FaCogs,
      title: 'صيانة الأجهزة',
      description: 'إصلاح وصيانة الأجهزة المنزلية',
      features: ['إصلاح الغسالات', 'صيانة الثلاجات', 'إصلاح الأفران'],
      color: 'from-indigo-500 to-purple-500',
      shadowColor: 'shadow-indigo-500/20',
      hoverShadow: 'hover:shadow-indigo-500/40',
      backgroundImage: 'https://images.unsplash.com/photo-1607400201515-c2c41cc6d2d2?w=800&h=600&fit=crop'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={30} duration={8} className="absolute top-20 left-10">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement intensity={25} duration={6} className="absolute bottom-32 right-16">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-4"
          >
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">خدماتنا المميزة</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            خدمات الصيانة{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              الشاملة
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات الصيانة المنزلية بأعلى معايير الجودة وبأيدي خبراء متخصصين
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                                <HoverCard                   className={`bg-white rounded-3xl shadow-lg transition-all duration-500 ${service.shadowColor} ${service.hoverShadow} hover:shadow-2xl border border-gray-100 relative overflow-hidden h-full`}                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <img
                      src={service.backgroundImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Background gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Floating particles effect */}
                  <AnimatePresence>
                    {hoveredService === index && (
                      <>
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, x: 20, y: 20 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: Math.random() * 100 - 50,
                              y: Math.random() * 100 - 50
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                              duration: 2,
                              delay: i * 0.1,
                              repeat: Infinity
                            }}
                            className="absolute w-2 h-2 bg-primary-400 rounded-full"
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 p-6">
                    {/* Service Preview Image */}
                    <motion.div 
                      className="w-full h-32 mb-4 rounded-2xl overflow-hidden relative group-hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon Overlay */}
                      <motion.div
                        className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="text-xl text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <motion.div 
                      className="space-y-2 mb-6"
                      initial={{ height: 0, opacity: 0 }}
                      whileHover={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full ml-2`}></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Action Button */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <InteractiveButton
                        href="#contact"
                        variant="primary"
                        className="w-full text-sm py-2 px-4"
                      >
                        <span className="flex items-center justify-center space-x-2 space-x-reverse">
                          <span>اطلب الخدمة</span>
                          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                        </span>
                      </InteractiveButton>
                    </motion.div>
                  </div>
                </HoverCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                هل تحتاج إلى خدمة فورية؟
              </h3>
              <p className="text-lg mb-6 opacity-90">
                تواصل معنا الآن وسنصل إليك خلال 30 دقيقة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton
                  href="tel:+966920000000"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  اتصل الآن: 920000000
                </InteractiveButton>
                
                <InteractiveButton
                  href="https://wa.me/966500000000"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  واتساب فوري
                </InteractiveButton>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Services 