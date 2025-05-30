'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WorkShowcase from '@/components/WorkShowcase'
import Services from '@/components/Services'
import WorkProcess from '@/components/WorkProcess'
import Features from '@/components/Features'
import Team from '@/components/Team'
import Gallery from '@/components/Gallery'
import BeforeAfter from '@/components/BeforeAfter'
import Coverage from '@/components/Coverage'
import Certifications from '@/components/Certifications'
import SpecialOffers from '@/components/SpecialOffers'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
    return (    <main className="min-h-screen bg-navy-page theme-scrollbar theme-selection">      {/* شريط تأكيد الثيم الكحلي */}      <div className="fixed top-0 left-0 right-0 z-50 bg-navy-super border-b-2 border-blue-400 p-2 text-center">        <p className="text-white font-bold animate-pulse">          🌊 تم تطبيق الثيم الكحلي بنجاح! Navy Blue Theme Active 🌊        </p>      </div>            <div className="pt-16"> {/* إضافة padding-top لتجنب تداخل الشريط */}        <Header />        <Hero />
      <WorkShowcase />
      <Services />
      <WorkProcess />
      <Features />
      <Team />
      <Gallery />
      <BeforeAfter />
      <Coverage />
      <Certifications />
      <SpecialOffers />
      <FAQ />
              <ContactForm />        <Footer />      </div>    </main>  )
} 