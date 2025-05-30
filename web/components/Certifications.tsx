'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaAward, 
  FaCertificate, 
  FaMedal, 
  FaStar,
  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'شهادة إدارة الجودة الدولية',
      icon: FaCertificate,
      color: 'text-blue-600'
    },
    {
      title: 'معتمد من غرفة الرياض',
      description: 'عضوية فعالة في غرفة تجارة الرياض',
      icon: FaShieldAlt,
      color: 'text-green-600'
    },
    {
      title: 'رخصة البلدية',
      description: 'مرخص من أمانة المنطقة',
      icon: FaCheckCircle,
      color: 'text-purple-600'
    },
    {
      title: 'شهادة السلامة المهنية',
      description: 'معتمد من مؤسسة السلامة والصحة المهنية',
      icon: FaShieldAlt,
      color: 'text-orange-600'
    }
  ]

  const awards = [
    {
      year: '2023',
      title: 'أفضل شركة صيانة منزلية',
      organization: 'جوائز التميز التقني',
      icon: FaAward
    },
    {
      year: '2022',
      title: 'جائزة رضا العملاء',
      organization: 'مؤسسة جودة الخدمات',
      icon: FaMedal
    },
    {
      year: '2021',
      title: 'شركة العام للخدمات المنزلية',
      organization: 'غرفة تجارة الرياض',
      icon: FaStar
    }
  ]

  const partners = [
    'شركة أرامكو السعودية',
    'مجموعة سامبا المالية',
    'شركة سابك',
    'البنك الأهلي التجاري',
    'شركة الاتصالات السعودية',
    'مجموعة الراجحي المصرفية'
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
            شهادات واعتمادات
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن فخورون بحصولنا على أعلى المعايير والاعتمادات في مجال الصيانة المنزلية
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <cert.icon className={`text-2xl ${cert.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              الجوائز والتقديرات
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-6 flex items-center space-x-4 space-x-reverse"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <award.icon className="text-xl text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold ml-3">
                        {award.year}
                      </span>
                      <h4 className="font-bold text-gray-900">
                        {award.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {award.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              شركاؤنا الاستراتيجيون
            </h3>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-gray-600 text-center mb-6">
                نفخر بثقة الشركات الرائدة في المملكة بخدماتنا
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <p className="text-gray-800 font-medium text-sm">
                      {partner}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-4xl ml-3" />
            <h3 className="text-2xl md:text-3xl font-bold">
              ثقة وأمان مضمون
            </h3>
          </div>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            جميع أعمالنا مؤمنة ومضمونة. نحن ملتزمون بأعلى معايير الجودة والسلامة 
            في جميع خدماتنا لضمان راحة بالك وحماية ممتلكاتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <FaCheckCircle />
              <span>مؤمن بالكامل</span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <FaCheckCircle />
              <span>ضمان شامل</span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse">
              <FaCheckCircle />
              <span>معايير سلامة عالية</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 