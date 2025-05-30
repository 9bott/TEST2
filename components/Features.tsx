'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaClock, 
  FaShieldAlt, 
  FaUserTie, 
  FaPhoneAlt,
  FaCertificate,
  FaMoneyBillWave
} from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: FaClock,
      title: 'خدمة 24/7',
      description: 'متاحون على مدار الساعة لخدمتكم في أي وقت',
      color: 'text-blue-500'
    },
    {
      icon: FaShieldAlt,
      title: 'ضمان الجودة',
      description: 'نضمن جودة العمل مع كفالة شاملة على جميع الخدمات',
      color: 'text-green-500'
    },
    {
      icon: FaUserTie,
      title: 'فريق خبير',
      description: 'فنيون مؤهلون ومدربون على أعلى المستويات',
      color: 'text-purple-500'
    },
    {
      icon: FaPhoneAlt,
      title: 'استجابة سريعة',
      description: 'نصل إليكم في أسرع وقت ممكن',
      color: 'text-red-500'
    },
    {
      icon: FaCertificate,
      title: 'مرخص ومعتمد',
      description: 'شركة مرخصة ومعتمدة من الجهات الرسمية',
      color: 'text-yellow-500'
    },
    {
      icon: FaMoneyBillWave,
      title: 'أسعار منافسة',
      description: 'أفضل الأسعار مع جودة متميزة',
      color: 'text-emerald-500'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            لماذا نحن الأفضل؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن نتميز بمجموعة من المزايا التي تجعلنا الخيار الأول لعملائنا في جميع أنحاء المملكة
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`text-2xl ${feature.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">5000+</h3>
                <p className="text-blue-100">عميل راضٍ</p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">10+</h3>
                <p className="text-blue-100">سنوات خبرة</p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">50+</h3>
                <p className="text-blue-100">فني متخصص</p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">24/7</h3>
                <p className="text-blue-100">دعم فني</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            ماذا يقول عملاؤنا
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'أحمد محمد',
                text: 'خدمة ممتازة ووصول سريع. تم إصلاح مشكلة السباكة بكفاءة عالية.',
                rating: 5
              },
              {
                name: 'فاطمة الأحمد',
                text: 'فريق محترف وأسعار معقولة. أنصح بهم بشدة لجميع خدمات الصيانة.',
                rating: 5
              },
              {
                name: 'خالد العتيبي',
                text: 'تعامل راقي وعمل متقن. شكراً لكم على الخدمة المميزة.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 