'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaWrench, 
  FaBolt, 
  FaSnowflake, 
  FaHammer,
  FaPaintRoller,
  FaBroom,
  FaCogs,
  FaStar,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa'
import AnimatedSection, { HoverCard, FloatingElement, InteractiveButton } from './AnimatedSection'

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'أحمد محمد العلي',
      position: 'رئيس فريق السباكة',
      specialty: 'سباكة',
      experience: '12 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'خبير في إصلاح التسريبات وتركيب الأنظمة الصحية',
      icon: FaWrench,
      color: 'from-blue-500 to-blue-600',
      projects: 150,
      rating: 4.9,
      skills: ['إصلاح التسريبات', 'تركيب المواسير', 'صيانة الخزانات']
    },
    {
      id: 2,
      name: 'سعد عبدالله الحربي',
      position: 'مهندس كهرباء معتمد',
      specialty: 'كهرباء',
      experience: '10 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'متخصص في الأنظمة الكهربائية والطاقة الشمسية',
      icon: FaBolt,
      color: 'from-yellow-500 to-orange-500',
      projects: 200,
      rating: 4.8,
      skills: ['تركيب الكهرباء', 'صيانة اللوحات', 'الطاقة الشمسية']
    },
    {
      id: 3,
      name: 'فيصل خالد المطيري',
      position: 'فني تكييف وتبريد',
      specialty: 'تكييف',
      experience: '8 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      description: 'خبير في صيانة وتركيب أنظمة التكييف المركزي',
      icon: FaSnowflake,
      color: 'from-cyan-500 to-blue-500',
      projects: 120,
      rating: 4.9,
      skills: ['تنظيف المكيفات', 'إصلاح الضواغط', 'تعبئة الغاز']
    },
    {
      id: 4,
      name: 'عبدالرحمن أحمد القحطاني',
      position: 'أستاذ نجارة ماهر',
      specialty: 'نجارة',
      experience: '15 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'متخصص في الأثاث المدمج والديكورات الخشبية',
      icon: FaHammer,
      color: 'from-amber-500 to-orange-500',
      projects: 180,
      rating: 5.0,
      skills: ['تركيب الأثاث', 'النجارة المدمجة', 'الديكور الخشبي']
    },
    {
      id: 5,
      name: 'محمد سالم الزهراني',
      position: 'خبير دهان وديكور',
      specialty: 'دهان',
      experience: '11 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'فنان في الدهان والديكورات الداخلية والخارجية',
      icon: FaPaintRoller,
      color: 'from-rose-500 to-red-500',
      projects: 220,
      rating: 4.7,
      skills: ['دهان الجدران', 'الرسم الجداري', 'الديكور الداخلي']
    },
    {
      id: 6,
      name: 'عبدالعزيز ناصر الدوسري',
      position: 'مسؤول خدمات التنظيف',
      specialty: 'تنظيف',
      experience: '7 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'خبير في التنظيف الشامل والمتخصص',
      icon: FaBroom,
      color: 'from-purple-500 to-pink-500',
      projects: 300,
      rating: 4.8,
      skills: ['تنظيف المباني', 'تطهير الخزانات', 'تنظيف السجاد']
    },
    {
      id: 7,
      name: 'طارق يوسف الغامدي',
      position: 'فني أجهزة منزلية',
      specialty: 'أجهزة',
      experience: '9 سنوات خبرة',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'متخصص في إصلاح جميع الأجهزة المنزلية',
      icon: FaCogs,
      color: 'from-indigo-500 to-purple-500',
      projects: 250,
      rating: 4.9,
      skills: ['إصلاح الغسالات', 'صيانة الثلاجات', 'إصلاح الأفران']
    },
    {
      id: 8,
      name: 'خالد عبدالله الشهري',
      position: 'مدير المشاريع',
      specialty: 'إدارة',
      experience: '14 سنة خبرة',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      description: 'مسؤول عن تنسيق وإدارة جميع المشاريع',
      icon: FaWrench,
      color: 'from-green-500 to-emerald-500',
      projects: 500,
      rating: 4.9,
      skills: ['إدارة المشاريع', 'تنسيق الفرق', 'ضمان الجودة']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement intensity={25} duration={10} className="absolute top-10 right-10">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
        </FloatingElement>
        <FloatingElement intensity={20} duration={12} className="absolute bottom-20 left-20">
          <div className="w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 space-x-reverse bg-primary-100 text-primary-600 px-6 py-3 rounded-full mb-6 shadow-lg border border-primary-200"
          >
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">فريق الخبراء</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            تعرف على{' '}
            <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              فريق العمل
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نخبة من أمهر العمال والمهندسين المعتمدين، كل منهم متخصص في مجاله ولديه سنوات من الخبرة العملية
          </p>
        </AnimatedSection>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon
            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="group"
              >
                                <HoverCard                   className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden h-full"                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Floating Sparkles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity
                      }}
                      className="w-6 h-6 text-primary-400"
                    >
                      <IconComponent />
                    </motion.div>
                  </div>

                  <div className="relative z-10 text-center">
                    {/* Profile Image */}
                    <motion.div 
                      className="relative mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-primary-200 transition-colors duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Rating Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg"
                      >
                        {member.rating}
                      </motion.div>
                    </motion.div>

                    {/* Member Info */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-primary-600 font-medium text-sm mb-2">
                      {member.position}
                    </p>
                    
                    <p className="text-gray-500 text-xs mb-3">
                      {member.experience}
                    </p>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-2 mb-4">
                      {member.skills.slice(0, 2).map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          className="flex items-center text-xs text-gray-500"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${member.color} rounded-full ml-2`}></div>
                          <span>{skill}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4 bg-gray-50 rounded-lg p-3">
                      <div className="text-center">
                        <div className="font-bold text-primary-600">{member.projects}</div>
                        <div>مشروع</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-yellow-500 flex items-center justify-center">
                          <FaStar className="text-xs ml-1" />
                          {member.rating}
                        </div>
                        <div>تقييم</div>
                      </div>
                    </div>

                    {/* Contact Button */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <InteractiveButton
                        href="#contact"
                        variant="primary"
                        className="w-full text-xs py-2 px-3"
                      >
                        <span className="flex items-center justify-center space-x-1 space-x-reverse">
                          <FaPhone className="text-xs" />
                          <span>تواصل معه</span>
                        </span>
                      </InteractiveButton>
                    </motion.div>
                  </div>
                </HoverCard>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Team Stats */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
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
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '80+', label: 'عامل محترف', icon: '👷' },
                { number: '15', label: 'سنة خبرة', icon: '⭐' },
                { number: '2000+', label: 'مشروع منجز', icon: '🏆' },
                { number: '99%', label: 'رضا العملاء', icon: '❤️' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              محتاج فريق محترف لمشروعك؟
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              تواصل معنا واحصل على استشارة مجانية من خبرائنا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton
                href="#contact"
                variant="primary"
                className="px-8 py-3"
              >
                احجز استشارة مجانية
              </InteractiveButton>
              
              <InteractiveButton
                href="https://wa.me/966500000000"
                variant="secondary"
                className="px-8 py-3"
              >
                <span className="flex items-center space-x-2 space-x-reverse">
                  <FaWhatsapp />
                  <span>واتساب مباشر</span>
                </span>
              </InteractiveButton>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Team 