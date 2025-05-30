/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        success: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        danger: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        warning: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e5edff',
          200: '#d1dfff',
          300: '#a7c2ff',
          400: '#739aff',
          500: '#4270ff',
          600: '#2847ff',
          700: '#1a33ff',
          800: '#1429cc',
          900: '#000c24',
          950: '#000614',
        },
        background: {
          primary: '#000c24',
          secondary: '#001635',
          tertiary: '#002147',
          card: '#001428',
          surface: '#002c5a',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          accent: '#60a5fa',
        },
        border: {
          primary: 'rgba(59, 130, 246, 0.2)',
          secondary: 'rgba(148, 163, 184, 0.1)',
          muted: 'rgba(148, 163, 184, 0.05)',
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
        serif: ['Amiri', 'serif'],
        mono: ['Fira Code', 'monospace'],
        primary: ['Cairo', 'Noto Sans Arabic', 'system-ui', 'sans-serif'],
        secondary: ['Amiri', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)',
        'gradient-hero': 'linear-gradient(135deg, #000614 0%, #000c24 30%, #001635 100%)',
        'gradient-dark': 'linear-gradient(135deg, #000614 0%, #000c24 50%, #001635 100%)',
        'gradient-blue': 'linear-gradient(135deg, #000080 0%, #001f3f 50%, #003366 100%)',
        'gradient-glassmorphism': 'linear-gradient(145deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)',
        'gradient-success': 'linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%)',
        'gradient-danger': 'linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f87171 100%)',
        'gradient-light': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue-cyan': 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
        'gradient-night': 'linear-gradient(135deg, #000614 0%, #000080 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #001f3f 0%, #0891b2 100%)',
        'gradient-navy': 'linear-gradient(135deg, #000614 0%, #000c24 50%, #002147 100%)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        card: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)',
        glow: '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-primary': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-secondary': '0 0 30px rgba(6, 182, 212, 0.5)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.3)',
        floating: '0 8px 30px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
        none: 'none',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'blue-pulse': 'bluePulse 2s ease-in-out infinite',
        'cyan-pulse': 'cyanPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.5',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        },
        bluePulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(59, 130, 246, 0.7), 0 0 40px rgba(59, 130, 246, 0.4)' },
        },
        cyanPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(6, 182, 212, 0.7), 0 0 40px rgba(6, 182, 212, 0.4)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glowPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            borderColor: 'rgba(59, 130, 246, 0.2)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            borderColor: 'rgba(59, 130, 246, 0.5)'
          },
        },
      },
      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
        128: '32rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        full: '9999px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      transitionDuration: {
        150: '0.15s',
        300: '0.3s',
        500: '0.5s',
        700: '0.7s',
        1000: '1s',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      opacity: {
        15: '0.15',
        85: '0.85',
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
      contrast: {
        25: '.25',
        175: '1.75',
      },
      saturate: {
        25: '.25',
        175: '1.75',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.theme-transition': {
          transition: 'all 0.3s ease',
        },
        '.theme-transition-fast': {
          transition: 'all 0.15s ease',
        },
        '.theme-transition-slow': {
          transition: 'all 0.5s ease',
        },
        '.theme-hover-lift': {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
          },
        },
        '.theme-hover-glow': {
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
          },
        },
        '.theme-hover-scale': {
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        '.theme-glassmorphism': {
          background: 'rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
        },
        '.theme-glassmorphism-dark': {
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
        },
        '.theme-glassmorphism-strong': {
          background: 'rgba(59, 130, 246, 0.15)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(59, 130, 246, 0.3)',
        },
        '.theme-text-gradient': {
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease-in-out infinite',
        },
        '.theme-text-gradient-cyan': {
          background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease-in-out infinite',
        },
        '.theme-card-dark': {
          background: '#1e293b',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
        },
        '.theme-card-glass': {
          background: 'rgba(30, 41, 59, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
        '.theme-button-dark': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.5rem',
          fontWeight: '600',
          borderRadius: '0.75rem',
          transition: 'all 0.3s ease',
          border: 'none',
          cursor: 'pointer',
        },
        '.theme-button-primary': {
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
          color: '#f8fafc',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
          },
        },
        '.theme-button-secondary': {
          background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)',
          color: '#f8fafc',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
          },
        },
        '.theme-input-dark': {
          width: '100%',
          padding: '0.75rem 1rem',
          background: '#0f172a',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '0.75rem',
          color: '#f8fafc',
          transition: 'all 0.3s ease',
          '&:focus': {
            outline: 'none',
            borderColor: '#3b82f6',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)',
          },
          '&::placeholder': {
            color: '#94a3b8',
          },
        },
        '.theme-container': {
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          '@media (min-width: 640px)': {
            padding: '0 1.5rem',
          },
          '@media (min-width: 1024px)': {
            padding: '0 2rem',
          },
        },
        '.theme-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0f172a',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#3b82f6',
            borderRadius: '9999px',
            '&:hover': {
              background: '#60a5fa',
            },
          },
        },
        '.theme-selection': {
          '&::selection': {
            backgroundColor: 'rgba(59, 130, 246, 0.4)',
            color: '#f8fafc',
          },
          '&::-moz-selection': {
            backgroundColor: 'rgba(59, 130, 246, 0.4)',
            color: '#f8fafc',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 