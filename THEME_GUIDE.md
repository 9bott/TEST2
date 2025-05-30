# 🎨 دليل الثيم الموحد - موقع الصيانة المنزلية

## نظرة عامة

تم تطوير نظام ثيم موحد شامل لموقع الصيانة المنزلية يضمن التناسق والاحترافية عبر جميع مكونات الموقع. يتضمن النظام الألوان، الخطوط، الظلال، الرسوم المتحركة، والمكونات التفاعلية.

## 📁 هيكل الملفات

```
├── lib/
│   └── theme.ts          # تكوين الثيم الأساسي
├── app/
│   ├── globals.css       # الأنماط العامة
│   ├── theme.css         # متغيرات وأنماط الثيم
│   └── layout.tsx        # التخطيط الأساسي
├── components/
│   └── AnimatedSection.tsx # المكونات التفاعلية
└── tailwind.config.js    # تكوين Tailwind CSS
```

## 🎨 الألوان الموحدة

### الألوان الأساسية (Primary)
```css
--color-primary-50: #f0f9ff    /* أفتح درجة */
--color-primary-100: #e0f2fe
--color-primary-200: #bae6fd
--color-primary-300: #7dd3fc
--color-primary-400: #38bdf8   /* اللون الأساسي */
--color-primary-500: #0ea5e9
--color-primary-600: #0284c7   /* للأزرار والعناصر المهمة */
--color-primary-700: #0369a1
--color-primary-800: #075985
--color-primary-900: #0c4a6e   /* أغمق درجة */
```

### الألوان الثانوية (Secondary)
```css
--color-secondary-400: #facc15  /* اللون الثانوي */
--color-secondary-500: #eab308
--color-secondary-600: #ca8a04
```

### ألوان النظام
```css
--color-success-400: #4ade80   /* للنجاح */
--color-danger-400: #f87171    /* للأخطاء */
--color-warning-400: #fbbf24   /* للتحذيرات */
```

## 🎨 التدرجات الموحدة

```css
--gradient-primary: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)
--gradient-secondary: linear-gradient(135deg, #ca8a04 0%, #eab308 50%, #facc15 100%)
--gradient-hero: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2a2a2a 100%)
--gradient-glassmorphism: linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)
```

## 🔤 الخطوط الموحدة

### العائلات
- **الأساسي**: Cairo, Noto Sans Arabic, system-ui, sans-serif
- **الثانوي**: Amiri, serif
- **أحادي المسافة**: Fira Code, monospace

### الأحجام
```css
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
--font-size-5xl: 3rem      /* 48px */
--font-size-6xl: 3.75rem   /* 60px */
```

## 🌟 الظلال الموحدة

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.08)
--shadow-glow: 0 0 20px rgba(56, 189, 248, 0.3)
--shadow-glow-primary: 0 0 30px rgba(2, 132, 199, 0.4)
--shadow-floating: 0 8px 30px rgba(0, 0, 0, 0.12)
```

## 🧩 المكونات الموحدة

### 1. الأزرار (Buttons)

#### فئات CSS جاهزة:
```css
.btn-unified-primary    /* زر أساسي */
.btn-unified-secondary  /* زر ثانوي */
.btn-unified-outline    /* زر محدد */
.btn-unified-glass      /* زر زجاجي */
```

#### مكون React:
```jsx
import { InteractiveButton } from './components/AnimatedSection'

<InteractiveButton 
  variant="primary"     // primary | secondary | success | danger | outline | ghost | glass
  size="md"            // sm | md | lg | xl
  loading={false}      // حالة التحميل
  disabled={false}     // حالة التعطيل
  icon={<FaIcon />}    // أيقونة
  iconPosition="left"  // left | right
  href="/link"         // رابط (اختياري)
  onClick={handleClick} // دالة النقر
>
  النص
</InteractiveButton>
```

### 2. البطاقات (Cards)

#### فئات CSS:
```css
.card-unified          /* بطاقة أساسية */
.card-unified-solid    /* بطاقة صلبة */
.card-unified-elevated /* بطاقة مرتفعة */
```

#### مكون React:
```jsx
import { HoverCard } from './components/AnimatedSection'

<HoverCard 
  variant="default"    // default | glass | solid | elevated
  hoverScale={1.02}   // نسبة التكبير عند التحويم
  hoverY={-4}         // حركة Y عند التحويم
>
  المحتوى
</HoverCard>
```

### 3. الرسوم المتحركة (Animations)

#### مكون الأقسام المتحركة:
```jsx
import AnimatedSection from './components/AnimatedSection'

<AnimatedSection 
  direction="up"       // up | down | left | right | scale
  delay={0}           // تأخير بالثواني
  duration={0.6}      // مدة الحركة
>
  المحتوى
</AnimatedSection>
```

#### العناصر العائمة:
```jsx
import { FloatingElement } from './components/AnimatedSection'

<FloatingElement 
  intensity={20}      // شدة الحركة
  duration={3}        // مدة الدورة
  direction="vertical" // vertical | horizontal | circular
>
  العنصر
</FloatingElement>
```

### 4. الشارات (Badges)

```jsx
import { AnimatedBadge } from './components/AnimatedSection'

<AnimatedBadge 
  variant="primary"   // primary | secondary | success | danger | warning | neutral
  size="md"          // sm | md | lg
  pulse={false}      // نبضة متحركة
>
  النص
</AnimatedBadge>
```

### 5. النص المتدرج (Gradient Text)

```jsx
import { GradientText } from './components/AnimatedSection'

<GradientText 
  variant="primary"   // primary | secondary | success | danger
  animated={true}     // تحريك التدرج
>
  النص المتدرج
</GradientText>
```

## 📱 التصميم المتجاوب

### نقاط التوقف:
```css
sm: 640px    /* الهواتف الكبيرة */
md: 768px    /* الأجهزة اللوحية */
lg: 1024px   /* أجهزة الكمبيوتر الصغيرة */
xl: 1280px   /* أجهزة الكمبيوتر الكبيرة */
2xl: 1536px  /* الشاشات الكبيرة جداً */
```

### فئات الشبكة المتجاوبة:
```css
.grid-unified       /* شبكة أساسية */
.grid-unified-cards /* شبكة البطاقات */
.container-unified  /* حاوي متجاوب */
```

## 🎭 التأثيرات التفاعلية

### فئات التحويم:
```css
.hover-unified-lift  /* رفع العنصر */
.hover-unified-scale /* تكبير العنصر */
.hover-unified-glow  /* توهج العنصر */
```

### فئات الحركة:
```css
.animate-unified-fadeInUp    /* ظهور من الأسفل */
.animate-unified-fadeInLeft  /* ظهور من اليسار */
.animate-unified-fadeInRight /* ظهور من اليمين */
.animate-unified-scaleIn     /* ظهور بالتكبير */
.animate-unified-float       /* حركة عائمة */
.animate-unified-pulse       /* نبضة */
.animate-unified-bounce      /* ارتداد */
```

## 🔧 استخدام المتغيرات

### في CSS:
```css
.my-element {
  background: var(--gradient-primary);
  color: var(--color-primary-600);
  box-shadow: var(--shadow-card);
  border-radius: var(--border-radius-xl);
  font-family: var(--font-family-primary);
}
```

### في Tailwind:
```html
<div class="bg-gradient-primary text-primary-600 shadow-card rounded-xl font-primary">
  المحتوى
</div>
```

## 🎨 Glassmorphism

### فئة جاهزة:
```css
.theme-glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### استخدام في HTML:
```html
<div class="theme-glassmorphism rounded-2xl p-6">
  محتوى زجاجي
</div>
```

## ♿ الوصولية

### التحسينات المضمنة:
- **تقليل الحركة**: دعم `prefers-reduced-motion`
- **التركيز**: حلقات تركيز واضحة
- **التباين**: ألوان متباينة للقراءة
- **Skip Links**: روابط تخطي للمحتوى
- **ARIA Labels**: تسميات للقارئ الشاشة

### مثال على الاستخدام:
```jsx
<InteractiveButton 
  variant="primary"
  aria-label="إرسال النموذج"
  aria-describedby="form-help"
>
  إرسال
</InteractiveButton>
```

## 🚀 الأداء

### التحسينات المطبقة:
- **تحميل مسبق للخطوط**: Preload fonts
- **CSS Variables**: للتبديل السريع
- **Utility Classes**: فئات قابلة للإعادة الاستخدام
- **Tree Shaking**: إزالة CSS غير المستخدم

## 📋 قائمة التحقق

### عند إضافة مكون جديد:
- [ ] استخدم متغيرات الألوان الموحدة
- [ ] طبق الظلال المناسبة
- [ ] استخدم الخطوط الموحدة
- [ ] أضف حالات التحويم والتركيز
- [ ] تأكد من التجاوب
- [ ] اختبر الوصولية
- [ ] استخدم الرسوم المتحركة المناسبة

## 🐛 استكشاف الأخطاء

### مشاكل شائعة:

1. **الألوان لا تظهر**:
   - تأكد من استيراد `theme.css`
   - تحقق من ترتيب استيراد CSS

2. **الرسوم المتحركة لا تعمل**:
   - تأكد من استيراد Framer Motion
   - تحقق من دعم المتصفح للـ CSS animations

3. **Tailwind classes لا تعمل**:
   - تأكد من تحديث `tailwind.config.js`
   - أعد تشغيل الخادم بعد التغييرات

## 📖 أمثلة شاملة

### مثال على مكون كامل:
```jsx
import React from 'react'
import AnimatedSection, { 
  HoverCard, 
  InteractiveButton, 
  AnimatedBadge,
  GradientText 
} from './AnimatedSection'

const ExampleComponent = () => {
  return (
    <AnimatedSection direction="up" className="container-unified py-20">
      <div className="text-center mb-16">
        <AnimatedBadge variant="primary" className="mb-4">
          مثال
        </AnimatedBadge>
        
        <h2 className="text-4xl font-bold mb-4">
          <GradientText variant="primary">
            عنوان متدرج
          </GradientText>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          نص وصفي للمكون
        </p>
      </div>
      
      <div className="grid-unified-cards">
        <HoverCard variant="glass" className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">بطاقة زجاجية</h3>
          <p className="text-gray-300 mb-6">محتوى البطاقة</p>
          
          <InteractiveButton 
            variant="primary" 
            size="md"
            className="w-full"
          >
            إجراء
          </InteractiveButton>
        </HoverCard>
      </div>
    </AnimatedSection>
  )
}

export default ExampleComponent
```

## 🔄 التحديثات المستقبلية

### مخطط للتحسينات:
- [ ] إضافة المزيد من متغيرات الألوان
- [ ] تطوير مكونات جديدة
- [ ] تحسين الأداء
- [ ] إضافة المزيد من الرسوم المتحركة
- [ ] دعم الثيم المظلم
- [ ] إضافة المزيد من أنماط Glassmorphism

---

**ملاحظة**: هذا الدليل يتم تحديثه باستمرار مع تطوير النظام. 