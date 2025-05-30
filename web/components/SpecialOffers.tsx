'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaPercent, 
  FaGift, 
  FaClock, 
  FaStar,
  FaArrowLeft,
  FaCheckCircle
} from 'react-icons/fa'

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'خصم 30% للعملاء الجدد',
      description: 'احصل على خصم 30% على أول خدمة صيانة',
      originalPrice: '200',
      discountedPrice: '140',
      validUntil: '31 ديسمبر 2024',
      icon: FaPercent,
      color: 'from-green-500 to-emerald-600',
      features: ['فحص مجاني', 'ضمان 6 أشهر', 'استشارة تقنية']
    },
    {
      id: 2,
      title: 'باقة الصيانة الشاملة',
      description: 'صيانة دورية لمنزلك بأفضل الأسعار',
      originalPrice: '800',
      discountedPrice: '599',
      validUntil: 'عرض دائم',
      icon: FaGift,
      color: 'from-blue-500 to-blue-600',
      features: ['4 زيارات سنوياً', 'خدمة طوارئ مجانية', 'قطع الغيار بخصم 50%']
    },
    {
      id: 3,
      title: 'خدمة الطوارئ المميزة',
      description: 'استجابة فورية للطوارئ على مدار الساعة',
      originalPrice: '150',
      discountedPrice: '99',
      validUntil: 'لفترة محدودة',
      icon: FaClock,
      color: 'from-red-500 to-red-600',
      features: ['وصول خلال 15 دقيقة', 'لا توجد رسوم إضافية', 'فريق متخصص']
    }
  ]

  const limitedOffers = [
    {
      title: 'عرض العيد الكبير',
      discount: '50%',
      description: 'خصم 50% على جميع خدمات التكييف',
      timeLeft: '3 أيام',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600'
    },
    {
      title: 'عرض نهاية الأسبوع',
      discount: '25%',
      description: 'خصم على خدمات السباكة والكهرباء',
      timeLeft: '2 أيام',
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaStar className="text-4xl text-yellow-500 ml-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              عروض حصرية
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استفد من عروضنا المميزة واحصل على أفضل خدمات الصيانة بأسعار لا تُقاوم
          </p>
        </motion.div>

        {/* Limited Time Offers Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {limitedOffers.map((offer, index) => (
              <div
                key={index}
                className={`${offer.color} rounded-2xl p-6 text-white relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <FaClock className="text-8xl" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{offer.title}</h3>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold">متبقي {offer.timeLeft}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-4xl font-bold ml-2">{offer.discount}</span>
                    <span className="text-sm opacity-90">خصم</span>
                  </div>
                  <p className="text-lg opacity-90 mb-4">{offer.description}</p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                    احجز الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${offer.color} p-6 text-white relative`}>
                  <div className="absolute top-4 left-4">
                    <offer.icon className="text-3xl opacity-80" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                    <p className="opacity-90">{offer.description}</p>
                  </div>
                </div>

                {/* Price Section */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-3xl font-bold text-gray-900 ml-2">
                          {offer.discountedPrice}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          {offer.originalPrice}
                        </span>
                        <span className="text-sm text-gray-600 mr-2">ريال</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        وفر {(parseInt(offer.originalPrice) - parseInt(offer.discountedPrice))} ريال
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">ما يشمله العرض:</h4>
                  <ul className="space-y-3 mb-6">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <FaCheckCircle className="text-green-500 ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Valid Until */}
                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500">
                      ساري حتى: <span className="font-semibold">{offer.validUntil}</span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${offer.color} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse`}>
                    <span>احجز العرض</span>
                    <FaArrowLeft className="transform rotate-180" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-400 to-blue-400"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                هل تريد عرض مخصص لاحتياجاتك؟
              </h3>
              <p className="text-lg mb-6 opacity-90">
                تواصل معنا وسنقدم لك عرض سعر مخصص يناسب متطلباتك وميزانيتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                >
                  احصل على عرض مخصص
                </a>
                <a
                  href="tel:+966920000000"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  اتصل للاستفسار
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffers 