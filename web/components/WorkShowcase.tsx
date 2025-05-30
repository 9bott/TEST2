'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion'
import { 
  FaPlay, 
  FaPause,
  FaExpand,
  FaStar,
  FaEye,
  FaCog,
  FaMousePointer,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSort,
  FaTh,
  FaList,
  FaHeart,
  FaShare,
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaTools,
  FaCheck
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

interface Project {
  id: number
  image: string
  title: string
  category: string
  description: string
  fullDescription: string
  rating: number
  views: number
  duration: string
  client: string
  location: string
  completedDate: string
  images: string[]
  features: string[]
  technologies: string[]
}

const WorkShowcase = () => {
  // Basic states
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  // Interactive states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'carousel' | 'grid' | 'cards'>('carousel')
  const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'views'>('recent')
  const [favorites, setFavorites] = useState<number[]>([])
  
  // Refs and animations
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef(null)
  const showcaseRef = useRef(null)
  const thumbnailsRef = useRef(null)
  const ctaRef = useRef(null)
  
  const headerControls = useAnimation()
  const showcaseControls = useAnimation()
  const thumbnailsControls = useAnimation()
  const ctaControls = useAnimation()

  // Intersection observers
  const isHeaderInView = useInView(headerRef, { 
    amount: 0.3, 
    once: true,
    margin: "-100px 0px -100px 0px"
  })
  const isShowcaseInView = useInView(showcaseRef, { 
    amount: 0.2, 
    once: true,
    margin: "-50px 0px -50px 0px"
  })
  const isThumbnailsInView = useInView(thumbnailsRef, { 
    amount: 0.3, 
    once: true,
    margin: "-100px 0px -100px 0px"
  })
  const isCtaInView = useInView(ctaRef, { 
    amount: 0.3, 
    once: true,
    margin: "-100px 0px -100px 0px"
  })

  // Sample data with extended information
  const showcaseItems: Project[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
      title: 'إصلاح السباكة المتقدم',
      category: 'سباكة',
      description: 'تم إصلاح نظام السباكة بالكامل مع ضمان 5 سنوات',
      fullDescription: 'مشروع إصلاح شامل لنظام السباكة في فيلا فاخرة بالرياض. تم استبدال جميع الأنابيب القديمة بأنابيب حديثة مقاومة للصدأ، وتركيب نظام تصفية مياه متطور، وإصلاح جميع التسريبات. المشروع شمل أيضاً تحديث نظام التدفئة المركزية وتركيب صنابير ذكية.',
      rating: 4.9,
      views: 1250,
      duration: 'يومان',
      client: 'فيلا الرياض',
      location: 'الرياض، المملكة العربية السعودية',
      completedDate: '2024-01-15',
      images: [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop'
      ],
      features: ['ضمان 5 سنوات', 'مواد عالية الجودة', 'فريق متخصص', 'خدمة على مدار الساعة'],
      technologies: ['أنابيب PEX', 'نظام تصفية متقدم', 'صنابير ذكية', 'عزل حراري']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop',
      title: 'تركيب النظام الكهربائي',
      category: 'كهرباء',
      description: 'تركيب شبكة كهربائية حديثة مع أنظمة أمان متطورة',
      fullDescription: 'تصميم وتنفيذ نظام كهربائي متكامل لمكتب تجاري في جدة. يشمل المشروع تركيب لوحات توزيع ذكية، أنظمة الإضاءة LED الموفرة للطاقة، وأنظمة الأمان والحماية من الحريق. تم تطبيق أعلى معايير السلامة الدولية.',
      rating: 5.0,
      views: 2100,
      duration: '3 أيام',
      client: 'مكتب جدة',
      location: 'جدة، المملكة العربية السعودية',
      completedDate: '2024-02-10',
      images: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop'
      ],
      features: ['أنظمة أمان متطورة', 'إضاءة LED موفرة', 'لوحات ذكية', 'ضمان شامل'],
      technologies: ['لوحات ABB', 'كابلات عالية الجودة', 'أنظمة UPS', 'حساسات ذكية']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop',
      title: 'صيانة التكييف المركزي',
      category: 'تكييف',
      description: 'تنظيف وصيانة شاملة لأنظمة التكييف في مجمع تجاري',
      fullDescription: 'صيانة شاملة لنظام التكييف المركزي في مول الدمام التجاري. شملت الصيانة تنظيف الوحدات الداخلية والخارجية، استبدال الفلاتر، فحص المكثفات والمبخرات، وضبط مستويات غاز التبريد. تم أيضاً تحديث نظام التحكم الذكي.',
      rating: 4.8,
      views: 890,
      duration: 'يوم واحد',
      client: 'مول الدمام',
      location: 'الدمام، المملكة العربية السعودية',
      completedDate: '2024-01-28',
      images: [
        'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop'
      ],
      features: ['صيانة دورية', 'قطع غيار أصلية', 'فريق معتمد', 'خدمة طوارئ'],
      technologies: ['غاز R410A', 'فلاتر HEPA', 'تحكم ذكي', 'عزل حراري متقدم']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
      title: 'أعمال النجارة الفاخرة',
      category: 'نجارة',
      description: 'تصميم وتنفيذ أثاث مدمج بأجود أنواع الخشب',
      fullDescription: 'مشروع نجارة راقي لشقة في مكة المكرمة شمل تصميم وتنفيذ مكتبة مدمجة، خزائن مطبخ فاخرة، وغرف نوم مخصصة. استخدمنا أجود أنواع الخشب الطبيعي مع تطبيق أحدث تقنيات التشطيب والدهان.',
      rating: 4.9,
      views: 1560,
      duration: '5 أيام',
      client: 'شقة مكة',
      location: 'مكة المكرمة، المملكة العربية السعودية',
      completedDate: '2024-02-05',
      images: [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=800&fit=crop'
      ],
      features: ['خشب طبيعي 100%', 'تصميم مخصص', 'تشطيب فاخر', 'ضمان 10 سنوات'],
      technologies: ['خشب البلوط', 'دهانات إيطالية', 'مفصلات ألمانية', 'أقفال ذكية']
    }
  ]

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(showcaseItems.map(item => item.category)))]

  // Filter and sort items
  const filteredItems = showcaseItems
    .filter(item => filterCategory === 'all' || item.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'views':
          return b.views - a.views
        case 'recent':
        default:
          return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime()
      }
    })

  // Animation variants
  const slideInFromRight = {
    hidden: { 
      x: 100, 
      opacity: 0,
      rotateY: 15,
      scale: 0.95
    },
    visible: (delay = 0) => ({
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  }

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      y: -10, 
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || viewMode !== 'carousel') return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1
        if (nextSlide >= filteredItems.length) {
          return 0
        }
        return nextSlide
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying, filteredItems.length, viewMode])

  // Trigger animations based on scroll
  useEffect(() => {
    if (isHeaderInView) headerControls.start("visible")
  }, [isHeaderInView, headerControls])

  useEffect(() => {
    if (isShowcaseInView) showcaseControls.start("visible")
  }, [isShowcaseInView, showcaseControls])

  useEffect(() => {
    if (isThumbnailsInView) thumbnailsControls.start("visible")
  }, [isThumbnailsInView, thumbnailsControls])

  useEffect(() => {
    if (isCtaInView) ctaControls.start("visible")
  }, [isCtaInView, ctaControls])

  // Helper functions
  const openModal = (project: Project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedProject(null)
  }

  const openGallery = (project: Project, index = 0) => {
    setSelectedProject(project)
    setGalleryIndex(index)
    setShowGallery(true)
  }

  const closeGallery = () => {
    setShowGallery(false)
    setSelectedProject(null)
    setGalleryIndex(0)
  }

  const toggleFavorite = (projectId: number) => {
    setFavorites(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, filteredItems.length - 1))
    setIsPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
    setIsPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPlaying(false)
  }

  // Get current item safely
  const currentItem = filteredItems[currentSlide] || filteredItems[0]

  if (!filteredItems || filteredItems.length === 0) {
    return (
      <div className="py-20 bg-gray-900 text-white text-center">
        <p>لا توجد أعمال في هذه الفئة</p>
      </div>
    )
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-navy-super relative overflow-hidden min-h-screen"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
          <FloatingElement intensity={40} duration={20} className="absolute top-20 left-20">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          </FloatingElement>
        
          <FloatingElement intensity={30} duration={25} className="absolute bottom-40 right-40">
            <div className="w-64 h-64 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
          </FloatingElement>
        
          <FloatingElement intensity={35} duration={18} className="absolute top-1/2 left-1/3">
            <div className="w-48 h-48 bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-full blur-xl"></div>
          </FloatingElement>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 + i * 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2 + i * 0.05,
              ease: "easeOut"
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <motion.div
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="w-full h-full bg-white/20 rounded-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={slideInFromRight}
          initial="hidden"
          animate={headerControls}
          className="text-center mb-16"
        >
          <motion.div
            variants={slideInFromRight}
            custom={0.1}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            transition={{ rotate: { duration: 0.5 } }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/20 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <FaCog className="text-primary-400" />
            </motion.div>
            <span className="font-semibold">معرض أعمالنا التفاعلي</span>
          </motion.div>
          
          <motion.h2 
            variants={slideInFromRight}
            custom={0.2}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-300% bg-center"
            >
              أعمالنا تتحدث
            </motion.span>
            <br />
            <span className="text-white">عن نفسها</span>
          </motion.h2>
          
          <motion.p 
            variants={slideInFromRight}
            custom={0.3}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            شاهد مجموعة مختارة من أفضل مشاريعنا المنجزة بأعلى معايير الجودة والاحترافية
          </motion.p>
          
          {/* Interactive Controls */}
          <motion.div
            variants={slideInFromRight}
            custom={0.4}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            {/* View Mode Selector */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              {[
                { mode: 'carousel', icon: FaPlay, label: 'عرض شرائح' },
                { mode: 'grid', icon: FaTh, label: 'شبكة' },
                { mode: 'cards', icon: FaList, label: 'بطاقات' }
              ].map(({ mode, icon: Icon, label }) => (
                <motion.button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-full transition-all duration-300 ${
                    viewMode === mode 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="text-sm" />
                  <span className="text-sm">{label}</span>
                </motion.button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <FaFilter className="text-primary-400 mx-3" />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    filterCategory === category 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category === 'all' ? 'الكل' : category}
                </motion.button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <FaSort className="text-primary-400 mx-3" />
              {[
                { value: 'recent', label: 'الأحدث' },
                { value: 'rating', label: 'التقييم' },
                { value: 'views', label: 'المشاهدات' }
              ].map(({ value, label }) => (
                <motion.button
                  key={value}
                  onClick={() => setSortBy(value as any)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    sortBy === value 
                      ? 'bg-primary-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          ref={showcaseRef}
          variants={slideInFromRight}
          initial="hidden"
          animate={showcaseControls}
          custom={0.5}
          className="relative"
        >
          {/* Carousel View */}
          {viewMode === 'carousel' && (
            <div className="relative w-full h-[70vh] rounded-3xl overflow-hidden shadow-2xl mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100, rotateY: -15 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openModal(currentItem)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={currentItem?.image || '/placeholder-image.jpg'}
                    alt={currentItem?.title || 'مشروع صيانة'}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-end p-8 md:p-12">
                  <div className="w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                      {/* Project Info */}
                        <div className="lg:col-span-2 space-y-4">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            {currentItem?.category || 'صيانة'}
                            </span>
                            <div className="flex items-center space-x-1 space-x-reverse text-yellow-400">
                            <FaStar className="text-sm" />
                            <span className="text-sm font-medium">{currentItem?.rating || '5.0'}</span>
                            </div>
                            <div className="flex items-center space-x-1 space-x-reverse text-gray-300">
                            <FaEye className="text-sm" />
                            <span className="text-sm">{currentItem?.views?.toLocaleString() || '0'}</span>
                        </div>
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleFavorite(currentItem.id)
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`flex items-center space-x-1 space-x-reverse transition-colors ${
                                favorites.includes(currentItem.id) 
                                  ? 'text-red-400' 
                                  : 'text-gray-300 hover:text-red-400'
                              }`}
                            >
                              <FaHeart className="text-sm" />
                            </motion.button>
                          </div>

                          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          {currentItem?.title || 'مشروع صيانة متميز'}
                          </h3>
                          
                          <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-2xl">
                          {currentItem?.description || 'مشروع صيانة متكامل بأعلى معايير الجودة'}
                          </p>

                          <div className="flex flex-wrap items-center gap-6 text-gray-300">
                          <div className="flex items-center space-x-2 space-x-reverse">
                              <FaClock className="text-primary-400" />
                            <span>المدة: {currentItem?.duration || 'يوم واحد'}</span>
                          </div>
                          <div className="flex items-center space-x-2 space-x-reverse">
                              <FaUser className="text-green-400" />
                            <span>{currentItem?.client || 'عميل مميز'}</span>
                          </div>
                            <div className="flex items-center space-x-2 space-x-reverse">
                              <FaMapMarkerAlt className="text-blue-400" />
                              <span>{currentItem?.location || 'المملكة العربية السعودية'}</span>
                            </div>
                          </div>
                        </div>

                      {/* Action Buttons */}
                        <div className="flex flex-col space-y-4">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              openModal(currentItem)
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 px-6 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                          >
                            عرض التفاصيل
                          </motion.button>
                        
                        <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              openGallery(currentItem)
                            }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <FaExpand />
                            <span>معرض الصور</span>
                        </motion.button>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            <FaShare />
                            <span>مشاركة</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
              <div className="absolute bottom-8 left-8 flex items-center space-x-4 space-x-reverse">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </motion.button>

              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
                disabled={currentSlide === 0}
              >
                  <FaChevronLeft />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/20"
              >
                  <FaChevronRight />
              </motion.button>
              </div>

              {/* Progress Indicator */}
              <div className="absolute top-8 right-8 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                <div className="text-sm font-medium">
                  {currentSlide + 1} من {filteredItems.length}
                </div>
              </div>
            </div>
          )}

          {/* Grid View */}
          {viewMode === 'grid' && (
          <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 cursor-pointer group"
                  onClick={() => openModal(item)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex space-x-2 space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(item.id)
                        }}
                        whileHover={{ scale: 1.1 }}
                        className={`w-8 h-8 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors ${
                          favorites.includes(item.id) 
                            ? 'bg-red-500/80 text-white' 
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <FaHeart className="text-xs" />
                      </motion.button>
                      
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          openGallery(item)
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <FaExpand className="text-xs" />
                      </motion.button>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3 flex items-center space-x-1 space-x-reverse bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="text-white text-xs font-medium">{item.rating}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <FaClock />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <FaEye />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </motion.div>
          )}

          {/* Cards View */}
          {viewMode === 'cards' && (
        <motion.div
              variants={staggerContainer}
          initial="hidden"
              animate="visible"
              className="space-y-6 mb-8"
            >
              {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 cursor-pointer group"
                  onClick={() => openModal(item)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                    <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-3 left-3 flex items-center space-x-1 space-x-reverse bg-black/50 backdrop-blur-sm rounded-full px-2 py-1">
                        <FaStar className="text-yellow-400 text-xs" />
                        <span className="text-white text-xs font-medium">{item.rating}</span>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-white font-bold text-2xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="flex space-x-2 space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(item.id)
                            }}
                            whileHover={{ scale: 1.1 }}
                            className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-colors ${
                              favorites.includes(item.id) 
                                ? 'bg-red-500/80 text-white' 
                                : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <FaHeart className="text-sm" />
                          </motion.button>
                          
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              openGallery(item)
                            }}
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <FaExpand className="text-sm" />
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaClock className="text-primary-400" />
                          <span>المدة: {item.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaUser className="text-green-400" />
                          <span>{item.client}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaMapMarkerAlt className="text-blue-400" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <FaEye className="text-gray-400" />
                          <span>{item.views.toLocaleString()} مشاهدة</span>
                        </div>
                      </div>

                      <div className="flex space-x-3 space-x-reverse">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            openModal(item)
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                        >
                          عرض التفاصيل
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          طلب مماثل
                        </motion.button>
                      </div>
                    </div>
                  </div>
                        </motion.div>
              ))}
                      </motion.div>
                    )}

          {/* Slide Indicators for Carousel */}
          {viewMode === 'carousel' && (
            <div className="flex justify-center space-x-2 space-x-reverse">
              {filteredItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary-400 shadow-lg shadow-primary-400/50'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
                </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          variants={slideInFromRight}
          initial="hidden"
          animate={ctaControls}
          custom={0.7}
          className="text-center mt-16"
        >
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
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                مستعد لرؤية مشروعك هنا؟
              </h3>
              <p className="text-lg mb-6 opacity-90">
                انضم إلى قائمة عملائنا الراضين واحصل على نفس مستوى الجودة والاحترافية
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton
                  href="#contact"
                  variant="secondary"
                  className="bg-white text-primary-600 hover:bg-gray-100"
                >
                  ابدأ مشروعك الآن
                </InteractiveButton>
                
                <InteractiveButton
                  href="tel:+966920000000"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  استشارة مجانية
                </InteractiveButton>
              </div>
            </div>
          </motion.div>
              </motion.div>
            </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {showModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gray-900 rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
                >
                  <FaTimes />
                </motion.button>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.category}
                    </span>
                    <div className="flex items-center space-x-1 space-x-reverse text-yellow-400">
                      <FaStar className="text-sm" />
                      <span className="text-sm font-medium">{selectedProject.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse text-gray-300">
                      <FaEye className="text-sm" />
                      <span className="text-sm">{selectedProject.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">وصف المشروع</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">الميزات الرئيسية</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 space-x-reverse text-gray-300">
                            <FaCheck className="text-green-400 text-sm" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">التقنيات المستخدمة</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-600/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">معرض الصور</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.images.map((image, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => openGallery(selectedProject, index)}
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} - ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-4">تفاصيل المشروع</h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">العميل:</span>
                          <span className="text-white">{selectedProject.client}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">المدة:</span>
                          <span className="text-white">{selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">الموقع:</span>
                          <span className="text-white">{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">تاريخ الإنجاز:</span>
                          <span className="text-white">
                            {new Date(selectedProject.completedDate).toLocaleDateString('ar-SA')}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">التقييم:</span>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <FaStar className="text-yellow-400 text-sm" />
                            <span className="text-white">{selectedProject.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                      >
                        طلب مشروع مماثل
                      </motion.button>
                      
                      <motion.button
                        onClick={() => toggleFavorite(selectedProject.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-4 rounded-xl font-semibold transition-colors border ${
                          favorites.includes(selectedProject.id)
                            ? 'bg-red-600 text-white border-red-600 hover:bg-red-700'
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                          <FaHeart />
                          <span>
                            {favorites.includes(selectedProject.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
                          </span>
                        </div>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 px-4 bg-white/10 text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        <div className="flex items-center justify-center space-x-2 space-x-reverse">
                          <FaShare />
                          <span>مشاركة المشروع</span>
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showGallery && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center"
            onClick={closeGallery}
          >
            <motion.button
              onClick={closeGallery}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20 z-10"
            >
              <FaTimes />
            </motion.button>

            <div className="relative w-full max-w-6xl mx-auto px-4">
              <motion.div
                key={galleryIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video w-full rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.images[galleryIndex]}
                  alt={`${selectedProject.title} - ${galleryIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Navigation Buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setGalleryIndex(prev => prev > 0 ? prev - 1 : selectedProject.images.length - 1)
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
                  >
                    <FaChevronLeft />
                  </motion.button>

                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setGalleryIndex(prev => prev < selectedProject.images.length - 1 ? prev + 1 : 0)
                    }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
                  >
                    <FaChevronRight />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/20">
                {galleryIndex + 1} من {selectedProject.images.length}
      </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
                  {selectedProject.images.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        setGalleryIndex(index)
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === galleryIndex 
                          ? 'border-primary-400 opacity-100' 
                          : 'border-white/30 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`صورة ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default WorkShowcase 