'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhoneAlt, 
  FaUserCheck, 
  FaTools, 
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa'

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: FaPhoneAlt,
      title: 'اطلب الخدمة',
      description: 'اتصل بنا أو املأ النموذج وصف مشكلتك بالتفصيل',
      color: 'bg-blue-500',
      delay: 0.1
    },
    {
      id: 2,
      icon: FaUserCheck,
      title: 'تأكيد الموعد',
      description: 'سنتواصل معك خلال 15 دقيقة لتأكيد الموعد المناسب',
      color: 'bg-green-500',
      delay: 0.2
    },
    {
      id: 3,
      icon: FaTools,
      title: 'تنفيذ الخدمة',
      description: 'يصل فريقنا المتخصص في الوقت المحدد لإنجاز العمل',
      color: 'bg-orange-500',
      delay: 0.3
    },
    {
      id: 4,
      icon: FaCheckCircle,
      title: 'ضمان الجودة',
      description: 'نتأكد من رضاك التام ونقدم ضمان على جميع أعمالنا',
      color: 'bg-purple-500',
      delay: 0.4
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            كيف نعمل؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            عملية بسيطة وواضحة للحصول على أفضل خدمات الصيانة المنزلية
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-1 bg-gradient-to-l from-blue-200 via-green-200 to-purple-200 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -left-4 text-gray-300">
                    <FaArrowLeft className="text-2xl transform rotate-180" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-700 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              هل أنت مستعد للبدء؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              احصل على خدمة فورية واحترافية الآن
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
              >
                اطلب خدمة الآن
              </a>
              <a
                href="tel:+966920000000"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                اتصل مباشرة
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProcess 