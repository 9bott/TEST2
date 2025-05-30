'use client';

import { useApp } from '../context/AppContext';

export default function CookieConsent() {
  const { cookiesAccepted, acceptCookies, language } = useApp();

  if (cookiesAccepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy-900 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          {language === 'ar'
            ? 'نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدام موقعنا، فإنك توافق على استخدامنا لملفات تعريف الارتباط.'
            : 'We use cookies to enhance your experience on our website. By using our site, you agree to our use of cookies.'}
        </p>
        <button
          onClick={acceptCookies}
          className="px-6 py-2 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors"
        >
          {language === 'ar' ? 'قبول' : 'Accept'}
        </button>
      </div>
    </div>
  );
} 