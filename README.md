# 🏠 موقع الصيانة المنزلية المتقدمة - الوضع المظلم الكحليموقع ويب حديث ومتطور لشركة صيانة منزلية باللغة العربية، مصمم بتقنية Next.js 14 مع الوضع المظلم الكحلي الفاخر.

## ✨ المميزات الجديدة

### 🎨 الوضع المظلم الكحلي- نظام ألوان موحد باللون الكحلي (Navy Blue) كخلفية رئيسية- تدرجات كحلية فاخرة ومظلمة- ظلال وتأثيرات بصرية محسنة مع الطابع الكحلي- تأثير Glassmorphism مطور بالألوان الكحلية

### 🚀 التقنيات المستخدمة
- **Next.js 14** - فريمووك React الحديث
- **Tailwind CSS** - مكتبة CSS للتصميم السريع
- **Framer Motion** - للرسوم المتحركة والتأثيرات
- **TypeScript** - للكتابة الآمنة
- **React Icons** - مجموعة شاملة من الأيقونات

### 🎭 نظام الثيم الموحد الكحلي- **الخلفية الأساسية**: #000c24 (كحلي داكن)- **الخلفية الثانوية**: #001635 (كحلي متوسط)- **الخلفية الثالثية**: #002147 (كحلي فاتح)- **الألوان التكميلية**: #3b82f6 (الأزرق) و #06b6d4 (السماوي)- **نصوص فاتحة**: #f8fafc إلى #94a3b8

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18.17 أو أحدث
- npm أو yarn

### خطوات التشغيل

1. **استنساخ المشروع**
```bash
git clone [repository-url]
cd web
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **تشغيل خادم التطوير**
```bash
npm run dev
```

4. **فتح الموقع**
افتح المتصفح واذهب إلى: `http://localhost:3000`

## 🎨 استخدام نظام الثيم

### الألوان المتاحة

#### الألوان الأساسية
```css
/* الأزرق - الأساسي */
bg-primary-400  /* #60a5fa */
bg-primary-500  /* #3b82f6 */
bg-primary-600  /* #2563eb */

/* السماوي - الثانوي */
bg-secondary-400  /* #22d3ee */
bg-secondary-500  /* #06b6d4 */
bg-secondary-600  /* #0891b2 */
```

#### خلفيات الوضع المظلم
```css
bg-background-primary    /* #020617 */
bg-background-secondary  /* #0f172a */
bg-background-card      /* #1e293b */
```

#### نصوص الوضع المظلم
```css
text-text-primary    /* #f8fafc */
text-text-secondary  /* #cbd5e1 */
text-text-muted     /* #94a3b8 */
```

### التدرجات الجاهزة

```css
bg-gradient-primary     /* تدرج أزرق أساسي */
bg-gradient-secondary   /* تدرج سماوي */
bg-gradient-hero        /* تدرج خلفية البطل */
bg-gradient-dark        /* تدرج مظلم */
```

### فئات المكونات الجاهزة

#### الأزرار
```html
<!-- زر أساسي -->
<button class="theme-button-dark theme-button-primary">
  النص
</button>

<!-- زر ثانوي -->
<button class="theme-button-dark theme-button-secondary">
  النص
</button>
```

#### البطاقات
```html
<!-- بطاقة مظلمة -->
<div class="theme-card-dark">
  المحتوى
</div>

<!-- بطاقة زجاجية -->
<div class="theme-card-glass">
  المحتوى
</div>
```

#### حقول الإدخال
```html
<input class="theme-input-dark" placeholder="أدخل النص هنا" />
```

### التأثيرات التفاعلية

```css
theme-hover-lift        /* رفع العنصر عند التحويم */
theme-hover-glow       /* توهج أزرق عند التحويم */
theme-hover-scale      /* تكبير العنصر عند التحويم */
```

### Glassmorphism

```css
theme-glassmorphism        /* تأثير زجاجي أساسي */
theme-glassmorphism-dark   /* تأثير زجاجي مظلم */
theme-glassmorphism-strong /* تأثير زجاجي قوي */
```

### النصوص المتدرجة

```css
theme-text-gradient      /* نص متدرج أزرق */
theme-text-gradient-cyan /* نص متدرج سماوي */
```

## 🔧 التخصيص

### إضافة ألوان جديدة

في `tailwind.config.js`:
```javascript
colors: {
  custom: {
    500: '#your-color',
  }
}
```

### إضافة تدرجات جديدة

في `app/globals.css`:
```css
:root {
  --gradient-custom: linear-gradient(135deg, #color1 0%, #color2 100%);
}
```

في `tailwind.config.js`:
```javascript
backgroundImage: {
  'gradient-custom': 'var(--gradient-custom)',
}
```

## 📱 التصميم المتجاوب

الموقع مصمم ليكون متجاوب بالكامل:

- **الهواتف الذكية**: أقل من 640px
- **الأجهزة اللوحية**: 640px - 1024px
- **أجهزة الكمبيوتر**: أكبر من 1024px

## ♿ الوصولية

- دعم قارئات الشاشة
- التنقل بلوحة المفاتيح
- تباين ألوان عالي
- دعم `prefers-reduced-motion`

## 🚀 الأداء

### التحسينات المطبقة
- **تحميل مسبق للخطوط**
- **ضغط الصور**
- **تقسيم الكود**
- **متغيرات CSS للتبديل السريع**

### نتائج الأداء
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📁 هيكل المشروع

```
├── app/
│   ├── globals.css          # الأنماط العامة - الوضع المظلم
│   ├── theme.css           # ثيم مخصص للوضع المظلم
│   ├── layout.tsx          # تخطيط الموقع
│   └── page.tsx            # الصفحة الرئيسية
├── components/
│   ├── AnimatedSection.tsx  # مكونات متحركة محدثة
│   ├── WorkShowcase.tsx    # عرض الأعمال
│   ├── Header.tsx          # رأس الموقع
│   ├── Hero.tsx            # قسم البطل
│   └── ...                 # باقي المكونات
├── lib/
│   └── theme.ts            # تكوين الثيم المحدث
└── tailwind.config.js      # تكوين Tailwind
```

## 🎯 أمثلة الاستخدام

### مثال شامل لبطاقة

```jsx
<div className="theme-card-dark theme-hover-lift p-6 rounded-2xl">
  <div className="flex items-center space-x-4 space-x-reverse mb-4">
    <div className="theme-glassmorphism p-3 rounded-xl">
      <Icon className="text-primary-400 w-6 h-6" />
    </div>
    <h3 className="theme-text-gradient text-xl font-bold">
      العنوان
    </h3>
  </div>
  
  <p className="text-text-secondary mb-6">
    وصف المحتوى هنا
  </p>
  
  <button className="theme-button-dark theme-button-primary w-full">
    الإجراء
  </button>
</div>
```

### مثال لنموذج تواصل

```jsx
<form className="theme-card-glass p-8 space-y-6">
  <h2 className="theme-text-gradient text-2xl font-bold text-center">
    تواصل معنا
  </h2>
  
  <div className="space-y-4">
    <input 
      className="theme-input-dark"
      placeholder="الاسم الكامل"
      type="text"
    />
    
    <input 
      className="theme-input-dark"
      placeholder="البريد الإلكتروني"
      type="email"
    />
    
    <textarea 
      className="theme-input-dark h-32"
      placeholder="الرسالة"
    />
  </div>
  
  <button className="theme-button-dark theme-button-primary w-full">
    إرسال الرسالة
  </button>
</form>
```

## 🐛 استكشاف الأخطاء

### مشاكل شائعة

1. **الألوان لا تظهر**
   - تأكد من استيراد `globals.css` و `theme.css`
   - تحقق من ترتيب ملفات CSS

2. **التأثيرات لا تعمل**
   - تأكد من تثبيت Framer Motion
   - تحقق من دعم المتصفح للـ CSS animations

3. **Tailwind classes لا تعمل**
   - أعد تشغيل الخادم بعد تعديل `tailwind.config.js`
   - تأكد من إضافة المسارات الصحيحة في `content`

## 📞 الدعم والمساعدة

للحصول على المساعدة:
- افتح issue في GitHub
- راجع الوثائق في `THEME_GUIDE.md`
- تحقق من أمثلة الكود في المكونات

## 📝 الترخيص

هذا المشروع مرخص تحت رخصة MIT.

---

**ملاحظة**: هذا الموقع مصمم خصيصاً للوضع المظلم الأزرق، ويوفر تجربة مستخدم حديثة ومتطورة مع أداء عالي وتصميم متجاوب. 