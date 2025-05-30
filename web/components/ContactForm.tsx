'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWrench,
  FaPaperPlane,
  FaClock,
  FaExclamationTriangle,
  FaCheck,
  FaSpinner
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  category: string
  priority: string
  description: string
  scheduledDate?: string
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormData>()

  const serviceCategories = [
    { value: 'PLUMBING', label: 'سباكة', icon: '🔧', color: 'text-blue-600' },
    { value: 'ELECTRICAL', label: 'كهرباء', icon: '⚡', color: 'text-yellow-600' },
    { value: 'HVAC', label: 'تكييف', icon: '❄️', color: 'text-cyan-600' },
    { value: 'APPLIANCE', label: 'أجهزة منزلية', icon: '🏠', color: 'text-green-600' },
    { value: 'CLEANING', label: 'تنظيف', icon: '🧹', color: 'text-purple-600' },
    { value: 'MAINTENANCE', label: 'صيانة عامة', icon: '🔨', color: 'text-orange-600' },
    { value: 'CARPENTRY', label: 'نجارة', icon: '🪵', color: 'text-amber-600' },
    { value: 'PAINTING', label: 'دهان', icon: '🎨', color: 'text-rose-600' },
    { value: 'OTHER', label: 'أخرى', icon: '🛠️', color: 'text-gray-600' }
  ]

  const priorities = [
    { value: 'LOW', label: 'عادي', color: 'bg-green-100 text-green-800', icon: '🟢' },
    { value: 'MEDIUM', label: 'متوسط', color: 'bg-yellow-100 text-yellow-800', icon: '🟡' },
    { value: 'HIGH', label: 'عالي', color: 'bg-orange-100 text-orange-800', icon: '🟠' },
    { value: 'URGENT', label: 'عاجل', color: 'bg-red-100 text-red-800', icon: '🔴' }
  ]

  const watchedFields = watch()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast.success('تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً.', {
          duration: 4000,
          position: 'top-center',
        })
        reset()
        setCurrentStep(1)
      } else {
        throw new Error('فشل في إرسال الطلب')
      }
    } catch (error) {
      toast.error('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#3b82f6',
      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      transition: { duration: 0.2 }
    },
    blur: {
      scale: 1,
      borderColor: '#d1d5db',
      boxShadow: '0 0 0 0px rgba(59, 130, 246, 0)',
      transition: { duration: 0.2 }
    }
  }

  const formProgress = (Object.keys(watchedFields).filter(key => 
    watchedFields[key as keyof FormData] && watchedFields[key as keyof FormData] !== ''
  ).length / 7) * 100

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={40} duration={10} className="absolute top-10 left-10">
          <div className="w-40 h-40 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        </FloatingElement>
        <FloatingElement intensity={30} duration={8} className="absolute bottom-20 right-20">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement intensity={25} duration={12} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full blur-lg"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-white/80 backdrop-blur-sm text-primary-600 px-6 py-3 rounded-full mb-6 shadow-lg border border-primary-100"
          >
            <FaWrench className="text-orange-500" />
            <span className="font-semibold">اطلب خدمة الصيانة</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            احجز موعدك{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              بسهولة
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            املأ النموذج أدناه وسيتواصل معك فريقنا المتخصص في أقرب وقت ممكن
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <HoverCard className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">تقدم النموذج</span>
                  <span className="text-sm font-medium text-primary-600">{Math.round(formProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${formProgress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary-600 to-blue-600 h-2 rounded-full"
                  />
                </div>
              </div>

              <div className="flex items-center mb-8">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl flex items-center justify-center ml-4"
                >
                  <FaWrench className="text-xl text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">نموذج طلب الخدمة</h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={focusedField === 'name' ? { scale: 1.1, color: '#3b82f6' } : { scale: 1, color: '#9ca3af' }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FaUser />
                    </motion.div>
                    <motion.input
                      type="text"
                      {...register('name', { required: 'الاسم مطلوب' })}
                      variants={inputVariants}
                      animate={focusedField === 'name' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200"
                      placeholder="أدخل اسمك الكامل"
                    />
                    <AnimatePresence>
                      {watchedFields.name && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.name.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={focusedField === 'email' ? { scale: 1.1, color: '#3b82f6' } : { scale: 1, color: '#9ca3af' }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FaEnvelope />
                    </motion.div>
                    <motion.input
                      type="email"
                      {...register('email', { 
                        required: 'البريد الإلكتروني مطلوب',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'عنوان بريد إلكتروني غير صحيح'
                        }
                      })}
                      variants={inputVariants}
                      animate={focusedField === 'email' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                    <AnimatePresence>
                      {watchedFields.email && !errors.email && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.email.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={focusedField === 'phone' ? { scale: 1.1, color: '#3b82f6' } : { scale: 1, color: '#9ca3af' }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FaPhone />
                    </motion.div>
                    <motion.input
                      type="tel"
                      {...register('phone', { required: 'رقم الهاتف مطلوب' })}
                      variants={inputVariants}
                      animate={focusedField === 'phone' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200"
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                    />
                    <AnimatePresence>
                      {watchedFields.phone && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.phone.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    العنوان *
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={focusedField === 'address' ? { scale: 1.1, color: '#3b82f6' } : { scale: 1, color: '#9ca3af' }}
                      className="absolute right-3 top-4"
                    >
                      <FaMapMarkerAlt />
                    </motion.div>
                    <motion.textarea
                      {...register('address', { required: 'العنوان مطلوب' })}
                      variants={inputVariants}
                      animate={focusedField === 'address' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('address')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="أدخل عنوانك بالتفصيل..."
                    />
                    <AnimatePresence>
                      {watchedFields.address && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-3 top-4"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {errors.address && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.address.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Service Category */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    نوع الخدمة *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {serviceCategories.map((category, index) => (
                      <motion.label
                        key={category.value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative cursor-pointer p-3 rounded-xl border-2 transition-all duration-200 ${
                          watchedFields.category === category.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          {...register('category', { required: 'نوع الخدمة مطلوب' })}
                          value={category.value}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <div className="text-2xl mb-1">{category.icon}</div>
                          <div className={`text-xs font-medium ${category.color}`}>
                            {category.label}
                          </div>
                        </div>
                        <AnimatePresence>
                          {watchedFields.category === category.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
                            >
                              <FaCheck className="text-white text-xs" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.label>
                    ))}
                  </div>
                  <AnimatePresence>
                    {errors.category && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.category.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Priority */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    الأولوية
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {priorities.map((priority, index) => (
                      <motion.label
                        key={priority.value}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative cursor-pointer p-3 rounded-xl border-2 transition-all duration-200 ${
                          watchedFields.priority === priority.value
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          {...register('priority')}
                          value={priority.value}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <span className="text-lg">{priority.icon}</span>
                          <span className="text-sm font-medium">{priority.label}</span>
                        </div>
                        <AnimatePresence>
                          {watchedFields.priority === priority.value && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
                            >
                              <FaCheck className="text-white text-xs" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* Scheduled Date */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    التاريخ المفضل (اختياري)
                  </label>
                  <div className="relative">
                    <motion.div
                      animate={focusedField === 'scheduledDate' ? { scale: 1.1, color: '#3b82f6' } : { scale: 1, color: '#9ca3af' }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <FaClock />
                    </motion.div>
                    <motion.input
                      type="datetime-local"
                      {...register('scheduledDate')}
                      variants={inputVariants}
                      animate={focusedField === 'scheduledDate' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('scheduledDate')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    وصف المشكلة *
                  </label>
                  <div className="relative">
                    <motion.textarea
                      {...register('description', { required: 'وصف المشكلة مطلوب' })}
                      variants={inputVariants}
                      animate={focusedField === 'description' ? 'focus' : 'blur'}
                      onFocus={() => setFocusedField('description')}
                      onBlur={() => setFocusedField(null)}
                      rows={4}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="اشرح المشكلة بالتفصيل..."
                    />
                    <AnimatePresence>
                      {watchedFields.description && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          className="absolute left-3 top-4"
                        >
                          <FaCheck className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <AnimatePresence>
                    {errors.description && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-600 flex items-center space-x-1 space-x-reverse"
                      >
                        <FaExclamationTriangle className="text-xs" />
                        <span>{errors.description.message}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <InteractiveButton
                    onClick={handleSubmit(onSubmit)}
                    variant="primary"
                    className={`w-full py-4 text-lg font-semibold ${
                      isSubmitting ? 'cursor-not-allowed opacity-75' : ''
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2 space-x-reverse">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <FaSpinner />
                          </motion.div>
                          <span>جاري الإرسال...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          <span>إرسال الطلب</span>
                        </>
                      )}
                    </span>
                  </InteractiveButton>
                </motion.div>
              </form>
            </HoverCard>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection className="space-y-8">
            {/* Quick Contact */}
            <HoverCard className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
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
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  تواصل معنا مباشرة
                </motion.h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4 space-x-reverse"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FloatingElement intensity={5} duration={2} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <FaPhone className="text-xl" />
                    </FloatingElement>
                    <div>
                      <p className="font-semibold">الهاتف</p>
                      <a href="tel:+966920000000" className="text-blue-100 hover:text-white transition-colors">920000000</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4 space-x-reverse"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FloatingElement intensity={5} duration={2.5} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <FaEnvelope className="text-xl" />
                    </FloatingElement>
                    <div>
                      <p className="font-semibold">البريد الإلكتروني</p>
                      <a href="mailto:info@maintenance.sa" className="text-blue-100 hover:text-white transition-colors">info@maintenance.sa</a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center space-x-4 space-x-reverse"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FloatingElement intensity={5} duration={3} className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="text-xl" />
                    </FloatingElement>
                    <div>
                      <p className="font-semibold">المكتب الرئيسي</p>
                      <p className="text-blue-100">الرياض، المملكة العربية السعودية</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </HoverCard>

            {/* Working Hours */}
            <HoverCard className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2 space-x-reverse"
                whileHover={{ scale: 1.05 }}
              >
                <FaClock className="text-primary-600" />
                <span>ساعات العمل</span>
              </motion.h3>
              
              <div className="space-y-4">
                {[
                  { days: 'السبت - الخميس', hours: '8:00 ص - 10:00 م', isToday: true },
                  { days: 'الجمعة', hours: '2:00 م - 10:00 م', isToday: false },
                  { days: 'الطوارئ', hours: '24/7', isSpecial: true }
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                    className={`flex justify-between items-center py-3 px-4 rounded-xl transition-all duration-200 ${
                      schedule.isToday ? 'bg-primary-50 border border-primary-200' : 
                      schedule.isSpecial ? 'bg-red-50 border border-red-200' : 'border border-gray-100'
                    }`}
                  >
                    <span className={`font-medium ${
                      schedule.isToday ? 'text-primary-700' : 
                      schedule.isSpecial ? 'text-red-700' : 'text-gray-900'
                    }`}>
                      {schedule.days}
                    </span>
                    <span className={`font-semibold ${
                      schedule.isToday ? 'text-primary-600' : 
                      schedule.isSpecial ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {schedule.hours}
                    </span>
                  </motion.div>
                ))}
              </div>
            </HoverCard>

            {/* Emergency */}
            <HoverCard className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-orange-400/30 to-red-400/30"
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-4 flex items-center space-x-2 space-x-reverse"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExclamationTriangle className="text-yellow-300" />
                  <span>حالات الطوارئ</span>
                </motion.h3>
                <p className="mb-6 opacity-90">للحالات العاجلة، اتصل بنا على الرقم المخصص:</p>
                
                <InteractiveButton
                  href="tel:+966500000000"
                  variant="outline"
                  className="bg-white/20 border-white text-white hover:bg-white hover:text-red-600 backdrop-blur-sm"
                >
                  <span className="flex items-center space-x-2 space-x-reverse">
                    <motion.div
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaPhone />
                    </motion.div>
                    <span>0500000000</span>
                  </span>
                </InteractiveButton>
              </div>
            </HoverCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default ContactForm 