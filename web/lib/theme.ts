// ملف الثيم الموحد للموقع - نظام الألوان والأنماط المتسقة

export const theme = {
  // الألوان الأساسية
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',  // اللون الأساسي
      500: '#0ea5e9',
      600: '#0284c7',  // للأزرار والعناصر المهمة
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
    secondary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',  // اللون الثانوي
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',  // للنجاح والتأكيد
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    danger: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',  // للأخطاء والتحذيرات
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',  // للتنبيهات
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    // درجات الرمادي للخلفيات والنصوص
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // الألوان الداكنة للثيم المظلم
    dark: {
      background: '#0a0a0a',
      surface: '#1a1a1a',
      card: '#2a2a2a',
      border: '#404040',
      text: {
        primary: '#ffffff',
        secondary: '#a0a0a0',
        muted: '#666666',
      }
    }
  },

  // التدرجات المستخدمة في الموقع
  gradients: {
    primary: 'linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%)',
    secondary: 'linear-gradient(135deg, #ca8a04 0%, #eab308 50%, #facc15 100%)',
    success: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #4ade80 100%)',
    dark: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)',
    heroBackground: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2a2a2a 100%)',
    cardBackground: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
    glassmorphism: 'linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
  },

  // الظلال والتأثيرات
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(56, 189, 248, 0.3)',
    glowPrimary: '0 0 30px rgba(2, 132, 199, 0.4)',
    glowSecondary: '0 0 30px rgba(234, 179, 8, 0.4)',
    card: '0 4px 20px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.08)',
    floating: '0 8px 30px rgba(0, 0, 0, 0.12)',
  },

  // الخطوط وأحجامها
  typography: {
    fontFamily: {
      primary: ['Cairo', 'system-ui', 'sans-serif'],
      secondary: ['Amiri', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
      '7xl': '4.5rem',   // 72px
      '8xl': '6rem',     // 96px
      '9xl': '8rem',     // 128px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    }
  },

  // المسافات والهوامش
  spacing: {
    px: '1px',
    0: '0',
    1: '0.25rem',    // 4px
    2: '0.5rem',     // 8px
    3: '0.75rem',    // 12px
    4: '1rem',       // 16px
    5: '1.25rem',    // 20px
    6: '1.5rem',     // 24px
    8: '2rem',       // 32px
    10: '2.5rem',    // 40px
    12: '3rem',      // 48px
    16: '4rem',      // 64px
    20: '5rem',      // 80px
    24: '6rem',      // 96px
    32: '8rem',      // 128px
    40: '10rem',     // 160px
    48: '12rem',     // 192px
    56: '14rem',     // 224px
    64: '16rem',     // 256px
  },

  // نقاط التوقف للاستجابة
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // مدة الرسوم المتحركة
  animation: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '0.8s',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      spring: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }
  },

  // أنصاف أقطار الحدود
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // مكونات مخصصة للثيم
  components: {
    button: {
      base: 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
      sizes: {
        sm: 'px-3 py-1.5 text-sm rounded-lg',
        md: 'px-4 py-2 text-base rounded-xl',
        lg: 'px-6 py-3 text-lg rounded-xl',
        xl: 'px-8 py-4 text-xl rounded-2xl',
      },
      variants: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-400 shadow-lg hover:shadow-xl',
        success: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-400 shadow-lg hover:shadow-xl',
        danger: 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-400 shadow-lg hover:shadow-xl',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
        ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
        glass: 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20',
      }
    },
    card: {
      base: 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden',
      variants: {
        default: 'shadow-card hover:shadow-floating transition-all duration-300',
        elevated: 'shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300',
        glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
        solid: 'bg-white shadow-lg border border-gray-200',
      }
    },
    input: {
      base: 'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300',
      variants: {
        default: 'bg-white/10 border-white/20 text-white',
        solid: 'bg-white border-gray-300 text-gray-900',
        error: 'border-danger-500 focus:ring-danger-500',
        success: 'border-success-500 focus:ring-success-500',
      }
    },
    badge: {
      base: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      variants: {
        primary: 'bg-primary-600/20 text-primary-300 border border-primary-600/30',
        secondary: 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30',
        success: 'bg-success-500/20 text-success-300 border border-success-500/30',
        danger: 'bg-danger-500/20 text-danger-300 border border-danger-500/30',
        warning: 'bg-warning-500/20 text-warning-300 border border-warning-500/30',
        gray: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
      }
    }
  },

  // النماذج والأنماط المعاد استخدامها
  patterns: {
    glassmorphism: {
      background: 'bg-white/10',
      backdrop: 'backdrop-blur-sm',
      border: 'border border-white/20',
      full: 'bg-white/10 backdrop-blur-sm border border-white/20',
    },
    modernCard: {
      base: 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6',
      hover: 'hover:bg-white/20 hover:scale-105 transition-all duration-300',
      shadow: 'shadow-lg hover:shadow-xl',
    },
    gradient: {
      text: 'bg-gradient-to-r from-primary-400 via-blue-400 to-purple-400 bg-clip-text text-transparent',
      background: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
      overlay: 'bg-gradient-to-t from-black/80 via-black/20 to-transparent',
    },
    animation: {
      fadeInUp: 'animate-fade-in-up',
      fadeInLeft: 'animate-fade-in-left',
      fadeInRight: 'animate-fade-in-right',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce',
      spin: 'animate-spin',
    }
  }
}

// دوال مساعدة للوصول للثيم
export const getColor = (color: string) => {
  const keys = color.split('.')
  let result: any = theme.colors
  for (const key of keys) {
    result = result[key]
  }
  return result
}

export const getGradient = (name: keyof typeof theme.gradients) => {
  return theme.gradients[name]
}

export const getShadow = (name: keyof typeof theme.shadows) => {
  return theme.shadows[name]
}

export const getSpacing = (size: keyof typeof theme.spacing) => {
  return theme.spacing[size]
}

// CSS Variables للاستخدام في Tailwind
export const cssVariables = `
  :root {
    --color-primary: ${theme.colors.primary[600]};
    --color-primary-light: ${theme.colors.primary[400]};
    --color-primary-dark: ${theme.colors.primary[800]};
    --color-secondary: ${theme.colors.secondary[500]};
    --color-success: ${theme.colors.success[500]};
    --color-danger: ${theme.colors.danger[500]};
    --color-warning: ${theme.colors.warning[500]};
    
    --gradient-primary: ${theme.gradients.primary};
    --gradient-secondary: ${theme.gradients.secondary};
    --gradient-hero: ${theme.gradients.heroBackground};
    
    --shadow-card: ${theme.shadows.card};
    --shadow-glow: ${theme.shadows.glow};
    
    --border-radius-lg: ${theme.borderRadius.lg};
    --border-radius-xl: ${theme.borderRadius.xl};
    --border-radius-2xl: ${theme.borderRadius['2xl']};
    
    --font-family-primary: ${theme.typography.fontFamily.primary.join(', ')};
  }
`

export default theme 