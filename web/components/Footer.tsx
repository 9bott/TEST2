'use client'

import React from 'react'
import Link from 'next/link'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'سباكة',
    'كهرباء',
    'تكييف',
    'أجهزة منزلية',
    'تنظيف',
    'نجارة',
    'دهان',
    'صيانة عامة'
  ]

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' },
    { name: 'المدونة', href: '/blog' },
    { name: 'الأسئلة الشائعة', href: '/faq' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: '#', color: 'text-blue-600' },
    { name: 'Twitter', icon: FaTwitter, href: '#', color: 'text-blue-400' },
    { name: 'Instagram', icon: FaInstagram, href: '#', color: 'text-pink-600' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#', color: 'text-blue-700' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/966500000000', color: 'text-green-500' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center ml-3">
                <FaPhone className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold">الصيانة المنزلية المتقدمة</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              شركة رائدة في مجال الصيانة المنزلية، نقدم خدمات شاملة ومتخصصة 
              بأعلى معايير الجودة والاحترافية في جميع أنحاء المملكة.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaPhone className="text-primary-400" />
                <span className="text-gray-300">920000000</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaEnvelope className="text-primary-400" />
                <span className="text-gray-300">info@maintenance.sa</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <FaMapMarkerAlt className="text-primary-400" />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#services" 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">تابعنا</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 mb-4">اشترك في نشرتنا البريدية للحصول على آخر العروض</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-l-lg transition-colors duration-200">
                  اشتراك
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-300 mb-4">تواصل معنا على:</p>
              <div className="flex space-x-4 space-x-reverse">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} الصيانة المنزلية المتقدمة. جميع الحقوق محفوظة.
            </div>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                الشروط والأحكام
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                خريطة الموقع
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        ↑
      </button>
    </footer>
  )
}

export default Footer 