import type { Metadata, Viewport } from 'next'
import './globals.css'
import './theme.css'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from './context/AppContext'
import LanguageSwitcher from './components/LanguageSwitcher'
import ThemeToggle from './components/ThemeToggle'
import CookieConsent from './components/CookieConsent'

export const metadata: Metadata = {
  title: 'الصيانة المنزلية المتقدمة | خدمات صيانة شاملة',
  description: 'شركة الصيانة المنزلية المتقدمة - نقدم خدمات صيانة شاملة للمنازل والمكاتب. سباكة، كهرباء، تكييف، وأكثر. خدمة 24/7 مع فريق من الخبراء.',
  keywords: 'صيانة منزلية، سباكة، كهرباء، تكييف، صيانة عامة، إصلاح أجهزة',
  authors: [{ name: 'شركة الصيانة المنزلية المتقدمة' }],
  robots: 'index, follow',
  openGraph: {
    title: 'الصيانة المنزلية المتقدمة',
    description: 'خدمات صيانة شاملة للمنازل والمكاتب',
    type: 'website',
    locale: 'ar_SA',
  },
  metadataBase: new URL('https://maintenance.sa'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000c24',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="font-primary scroll-smooth">
      <head>
        {/* Preload الخطوط المهمة */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
          as="style"
        />
        
        {/* تحسين الأداء - Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      
      <body className="min-h-screen bg-gradient-navy antialiased">
        <AppProvider>
          <div className="relative min-h-screen">
            {/* خلفية متحركة */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-navy-300/3 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>
            
            {/* شريط التنقل العلوي */}
            <nav className="fixed top-0 left-0 right-0 bg-navy-900/90 backdrop-blur-lg border-b border-navy-800/50 z-40">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
            
            {/* المحتوى الرئيسي */}
            <main className="relative z-10 pt-16" id="main-content">
              {children}
            </main>
          </div>
          
          {/* شريط قبول ملفات الارتباط */}
          <CookieConsent />
          
          {/* Toast notifications */}
          <Toaster 
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(0, 12, 36, 0.9)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                fontFamily: 'var(--font-family-primary)',
                fontSize: '14px',
                boxShadow: 'var(--shadow-floating)',
              },
              success: {
                style: {
                  background: 'rgba(34, 197, 94, 0.9)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'rgba(34, 197, 94, 0.9)',
                },
              },
              error: {
                style: {
                  background: 'rgba(239, 68, 68, 0.9)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'rgba(239, 68, 68, 0.9)',
                },
              },
              loading: {
                style: {
                  background: 'rgba(0, 12, 36, 0.9)',
                  border: '1px solid rgba(0, 12, 36, 0.3)',
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'rgba(0, 12, 36, 0.9)',
                },
              },
            }}
          />
          
          {/* Skip to content للوصولية */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-navy-800 text-white rounded-lg shadow-lg transition-all duration-200"
          >
            الانتقال إلى المحتوى الرئيسي
          </a>
        </AppProvider>
      </body>
    </html>
  )
} 