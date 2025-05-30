'use client'

export default function TestNavy() {
  return (
    <div className="min-h-screen bg-navy-page flex items-center justify-center">
      <div className="bg-navy-super p-16 rounded-3xl text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-8 animate-pulse">
          🌊 الثيم الكحلي الجديد 🌊
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-navy-900 p-6 rounded-2xl border-2 border-blue-400">
            <h3 className="text-white text-xl font-bold mb-4">اللون الكحلي الداكن</h3>
            <div className="w-full h-20 bg-navy-950 rounded-lg"></div>
            <p className="text-gray-300 mt-2">#000614</p>
          </div>
          
          <div className="bg-navy-800 p-6 rounded-2xl border-2 border-blue-400">
            <h3 className="text-white text-xl font-bold mb-4">اللون الكحلي المتوسط</h3>
            <div className="w-full h-20 bg-navy-900 rounded-lg"></div>
            <p className="text-gray-300 mt-2">#000c24</p>
          </div>
          
          <div className="bg-navy-700 p-6 rounded-2xl border-2 border-blue-400">
            <h3 className="text-white text-xl font-bold mb-4">اللون الكحلي الفاتح</h3>
            <div className="w-full h-20 bg-navy-800 rounded-lg"></div>
            <p className="text-gray-300 mt-2">#001635</p>
          </div>
        </div>
        
        <p className="text-xl text-white mb-6">
          تم تطبيق الثيم الكحلي بنجاح! 🎉
        </p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
          العودة للموقع الرئيسي
        </button>
      </div>
    </div>
  )
} 