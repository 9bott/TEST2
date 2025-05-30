'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'ما هي أوقات العمل؟',
      answer: 'نحن نعمل على مدار الساعة 24/7 في أيام الأسبوع. خدمة الطوارئ متاحة في أي وقت، بينما الخدمات العادية من 8 صباحاً حتى 10 مساءً.'
    },
    {
      question: 'كم تستغرق مدة الوصول؟',
      answer: 'نصل إليك في غضون 30 دقيقة في المدن الرئيسية (الرياض، جدة، الدمام) وخلال 45-120 دقيقة في المدن الأخرى حسب الموقع.'
    },
    {
      question: 'هل تقدمون ضمان على الأعمال؟',
      answer: 'نعم، نقدم ضمان شامل على جميع أعمالنا يتراوح من 3 أشهر إلى سنة واحدة حسب نوع الخدمة. كما نوفر صيانة مجانية خلال فترة الضمان.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع نقداً، بالبطاقات الائتمانية (فيزا، ماستركارد، مدى)، التحويل البنكي، وخدمات الدفع الإلكتروني مثل Apple Pay و Google Pay.'
    },
    {
      question: 'هل يمكنني تحديد موعد مسبق؟',
      answer: 'بالطبع! يمكنك تحديد موعد مسبق عبر الموقع، الهاتف، أو واتساب. نحن نلتزم بالمواعيد المحددة ونؤكد الحضور قبل الوصول.'
    },
    {
      question: 'ما هي التكلفة المتوقعة للخدمات؟',
      answer: 'التكلفة تعتمد على نوع الخدمة وحجم العمل. نقدم تقدير مجاني للتكلفة عبر الهاتف، وفي حالة الزيارة نحدد السعر النهائي قبل البدء في العمل.'
    },
    {
      question: 'هل فنيوكم مؤهلون ومعتمدون؟',
      answer: 'جميع فنيينا مؤهلون ومعتمدون ولديهم خبرة لا تقل عن 5 سنوات. كما يخضعون لدورات تدريبية مستمرة لمواكبة أحدث التقنيات.'
    },
    {
      question: 'ماذا لو لم أكن راضياً عن الخدمة؟',
      answer: 'رضاك هو أولويتنا. إذا لم تكن راضياً، سنعيد العمل مجاناً أو نسترد المبلغ كاملاً. لدينا سياسة ضمان الرضا 100%.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <FaQuestionCircle className="text-4xl text-primary-600 ml-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              الأسئلة الشائعة
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-right focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mr-4"
                  >
                    <FaChevronDown className="text-primary-600 text-xl" />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              لم تجد إجابة سؤالك؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              تواصل معنا مباشرة وسنجيب على جميع استفساراتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966920000000"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              >
                اتصل بنا: 920000000
              </a>
              <a
                href="https://wa.me/966500000000"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
              >
                واتساب مباشر
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 