'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaPlay, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaWrench,
  FaCamera,
  FaVideo,
  FaEye,
  FaHeart
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const mediaItems = [
    {
      id: 1,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      title: 'إصلاح السباكة المتقدم',
      description: 'فريقنا المتخصص يقوم بإصلاح تسريبات المياه',
      category: 'plumbing',
      duration: '3:24',
      views: 1250
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop',
      title: 'أعمال الكهرباء الآمنة',
      description: 'مهندسونا يقومون بتركيب الأنظمة الكهربائية بأعلى معايير الأمان',
      category: 'electrical',
      likes: 89
    },
    {
      id: 3,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      title: 'صيانة التكييف المركزي',
      description: 'عملية تنظيف وصيانة شاملة لأنظمة التكييف',
      category: 'hvac',
      duration: '5:12',
      views: 2100
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop',
      title: 'فريق النجارة المحترف',
      description: 'أعمال النجارة والتركيبات الخشبية عالية الجودة',
      category: 'carpentry',
      likes: 156
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&h=300&fit=crop',
      title: 'أعمال الدهان الاحترافية',
      description: 'فريق الدهان ينجز مشروع تجديد منزل كامل',
      category: 'painting',
      likes: 203
    },
    {
      id: 6,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1607400201515-c2c41cc6d2d2?w=500&h=300&fit=crop',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      title: 'صيانة الأجهزة المنزلية',
      description: 'إصلاح الغسالات والثلاجات والأجهزة المنزلية',
      category: 'appliance',
      duration: '4:33',
      views: 890
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      title: 'خدمات التنظيف المتخصصة',
      description: 'فريق التنظيف ينظف وينظم المساحات السكنية',
      category: 'cleaning',
      likes: 78
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=300&fit=crop',
      title: 'الصيانة العامة',
      description: 'أعمال الصيانة الشاملة للمنازل والمكاتب',
      category: 'maintenance',
      likes: 134
    },
    {
      id: 9,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1585129777188-94600bc7d4b3?w=500&h=300&fit=crop',
      videoUrl: 'https://player.vimeo.com/video/76979871',
      title: 'مشروع تجديد شامل',
      description: 'تسجيل كامل لمشروع تجديد منزل من البداية للنهاية',
      category: 'renovation',
      duration: '8:45',
      views: 3200
    }
  ]

  const filters = [
    { id: 'all', label: 'الكل', icon: '🏠' },
    { id: 'plumbing', label: 'سباكة', icon: '🔧' },
    { id: 'electrical', label: 'كهرباء', icon: '⚡' },
    { id: 'hvac', label: 'تكييف', icon: '❄️' },
    { id: 'carpentry', label: 'نجارة', icon: '🪵' },
    { id: 'painting', label: 'دهان', icon: '🎨' },
    { id: 'appliance', label: 'أجهزة', icon: '🔌' },
    { id: 'cleaning', label: 'تنظيف', icon: '🧹' },
    { id: 'maintenance', label: 'صيانة عامة', icon: '🛠️' },
    { id: 'renovation', label: 'تجديد', icon: '🏗️' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter)

  const openModal = (item: any) => {
    setSelectedMedia(item)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedMedia(null)
    document.body.style.overflow = 'unset'
  }

  const nextItem = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedMedia(filteredItems[nextIndex])
  }

  const prevItem = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedMedia.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedMedia(filteredItems[prevIndex])
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={20} duration={15} className="absolute top-20 left-20">
          <div className="w-64 h-64 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement intensity={30} duration={12} className="absolute bottom-20 right-20">
          <div className="w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/20"
          >
            <FaCamera className="text-primary-400" />
            <span className="font-semibold">معرض أعمالنا</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            شاهد فريقنا{' '}
            <span className="bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent">
              في العمل
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اطلع على صور وفيديوهات حقيقية لفريق عملنا المتخصص أثناء تقديم خدمات الصيانة عالية الجودة
          </p>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span className="text-lg">{filter.icon}</span>
                <span className="font-medium">{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                                <HoverCard                   className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group"                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.type === 'video' ? item.thumbnail : item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button for Videos */}
                    {item.type === 'video' && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.button
                          onClick={() => openModal(item)}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group-hover:scale-110"
                          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                        >
                          <FaPlay className="text-xl ml-1" />
                        </motion.button>
                      </motion.div>
                    )}
                    
                    {/* View Button for Images */}
                    {item.type === 'image' && (
                      <motion.button
                        onClick={() => openModal(item)}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                      >
                        <FaEye />
                      </motion.button>
                    )}
                    
                    {/* Duration Badge for Videos */}
                    {item.type === 'video' && item.duration && (
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                        {item.duration}
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {filters.find(f => f.id === item.category)?.label}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {item.type === 'video' ? (
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaEye className="text-xs" />
                          <span>{item.views?.toLocaleString() || 0} مشاهدة</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaHeart className="text-xs text-red-400" />
                          <span>{item.likes || 0} إعجاب</span>
                        </div>
                      )}
                      
                      <motion.button
                        onClick={() => openModal(item)}
                        whileHover={{ scale: 1.05 }}
                        className="text-primary-400 hover:text-primary-300 font-medium"
                      >
                        {item.type === 'video' ? 'مشاهدة' : 'عرض'}
                      </motion.button>
                    </div>
                  </div>
                </HoverCard>
              </motion.div>
            ))}
          </AnimatePresence>
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
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                هل أنت مستعد لتجربة خدماتنا؟
              </h3>
              <p className="text-lg mb-6 opacity-90">
                احجز موعدك اليوم واحصل على نفس مستوى الجودة الذي شاهدته
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton
                  href="#contact"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  احجز موعد مجاني
                </InteractiveButton>
                
                <InteractiveButton
                  href="tel:+966920000000"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  اتصل للاستشارة
                </InteractiveButton>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaTimes />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                onClick={prevItem}
                whileHover={{ scale: 1.1 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft />
              </motion.button>

              <motion.button
                onClick={nextItem}
                whileHover={{ scale: 1.1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight />
              </motion.button>

              {/* Media Content */}
              <div className="aspect-video">
                {selectedMedia.type === 'video' ? (
                  <iframe
                    src={selectedMedia.videoUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedMedia.title}</h3>
                <p className="text-gray-300 mb-4">{selectedMedia.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{filters.find(f => f.id === selectedMedia.category)?.label}</span>
                  {selectedMedia.type === 'video' ? (
                    <span>{selectedMedia.views?.toLocaleString() || 0} مشاهدة</span>
                  ) : (
                    <span>{selectedMedia.likes || 0} إعجاب</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery 