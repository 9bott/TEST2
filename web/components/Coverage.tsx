'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaCar,
  FaCheck
} from 'react-icons/fa'

const Coverage = () => {
  const cities = [
    { name: 'الرياض', isMain: true, responseTime: '30 دقيقة' },
    { name: 'جدة', isMain: true, responseTime: '45 دقيقة' },
    { name: 'الدمام', isMain: true, responseTime: '45 دقيقة' },
    { name: 'مكة المكرمة', isMain: false, responseTime: '60 دقيقة' },
    { name: 'المدينة المنورة', isMain: false, responseTime: '60 دقيقة' },
    { name: 'الطائف', isMain: false, responseTime: '90 دقيقة' },
    { name: 'بريدة', isMain: false, responseTime: '90 دقيقة' },
    { name: 'الخبر', isMain: false, responseTime: '45 دقيقة' },
    { name: 'الأحساء', isMain: false, responseTime: '120 دقيقة' },
    { name: 'حائل', isMain: false, responseTime: '120 دقيقة' },
    { name: 'أبها', isMain: false, responseTime: '120 دقيقة' },
    { name: 'تبوك', isMain: false, responseTime: '120 دقيقة' }
  ]

  const coverageStats = [
    {
      icon: FaMapMarkerAlt,
      number: '13',
      label: 'منطقة',
      description: 'نغطي جميع المناطق الرئيسية'
    },
    {
      icon: FaClock,
      number: '24/7',
      label: 'خدمة',
      description: 'متاحون في أي وقت'
    },
    {
      icon: FaCar,
      number: '30',
      label: 'دقيقة',
      description: 'متوسط وقت الوصول'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            نخدمك في جميع أنحاء المملكة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تغطية شاملة للمدن والمناطق الرئيسية مع أسرع أوقات استجابة
          </p>
        </motion.div>

        {/* Coverage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {coverageStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cities Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              المدن والمناطق المخدومة
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    city.isMain 
                      ? 'bg-primary-50 border-primary-200 hover:border-primary-300' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className={`ml-2 ${city.isMain ? 'text-primary-600' : 'text-gray-500'}`} />
                    <span className={`font-medium ${city.isMain ? 'text-primary-900' : 'text-gray-900'}`}>
                      {city.name}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FaClock className="ml-1" />
                    <span>{city.responseTime}</span>
                  </div>
                  {city.isMain && (
                    <div className="mt-2">
                      <span className="inline-flex items-center text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                        <FaCheck className="w-3 h-3 ml-1" />
                        خدمة سريعة
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-primary-100 rounded-2xl p-8 text-center">
              {/* Saudi Arabia Outline Illustration */}
              <div className="w-64 h-64 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-blue-700 rounded-lg opacity-20"></div>
                <div className="absolute inset-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-6xl text-primary-600" />
                </div>
                {/* Animated dots */}
                <div className="absolute top-8 right-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute top-16 left-12 w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-16 right-16 w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                تغطية شاملة عبر المملكة
              </h4>
              <p className="text-gray-600 leading-relaxed">
                نحن نقدم خدماتنا في جميع المناطق الرئيسية بالمملكة العربية السعودية 
                مع ضمان أسرع أوقات الاستجابة والوصول إليك أينما كنت.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Emergency Service Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">خدمة الطوارئ 24/7</h3>
          <p className="text-lg mb-6 opacity-90">
            للحالات العاجلة، نصل إليك في أسرع وقت ممكن في جميع المدن الرئيسية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966500000000"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              اتصال طوارئ: 0500000000
            </a>
            <a
              href="https://wa.me/966500000000"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
            >
              واتساب فوري
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Coverage 