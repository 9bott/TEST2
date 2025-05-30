'use client'

import React from 'react'
import { motion, MotionProps } from 'framer-motion'

// Interface موحد للخصائص الأساسية
interface BaseProps {
  children: React.ReactNode
  className?: string
}

// Interface للرسوم المتحركة
interface AnimationProps extends BaseProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

// المكون الرئيسي للقسم المتحرك
const AnimatedSection: React.FC<AnimationProps> = ({ 
  children, 
  className = "",
  delay = 0,
  duration = 0.6,
  direction = 'up'
}) => {
  // تحديد اتجاه الحركة
  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 }
      case 'down':
        return { opacity: 0, y: -50 }
      case 'left':
        return { opacity: 0, x: -50 }
      case 'right':
        return { opacity: 0, x: 50 }
      case 'scale':
        return { opacity: 0, scale: 0.8 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getFinalState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 }
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 }
      case 'scale':
        return { opacity: 1, scale: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.section
      initial={getInitialState()}
      whileInView={getFinalState()}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`theme-transition ${className}`}
    >
      {children}
    </motion.section>
  )
}

// مكون البطاقة التفاعلية محدث
interface HoverCardProps extends BaseProps {
  hoverScale?: number
  hoverY?: number
  variant?: 'default' | 'glass' | 'solid' | 'elevated'
}

export const HoverCard: React.FC<HoverCardProps> = ({ 
  children, 
  className = "",
  hoverScale = 1.02,
  hoverY = -4,
  variant = 'default'
}) => {
  // تحديد أنماط البطاقة حسب النوع
  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'theme-glassmorphism'
      case 'solid':
        return 'bg-white shadow-card border border-neutral-200'
      case 'elevated':
        return 'theme-card shadow-xl'
      default:
        return 'theme-card'
    }
  }

  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale, 
        y: hoverY,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={`theme-hover-lift ${getVariantClasses()} ${className}`}
    >
      {children}
    </motion.div>
  )
}

// مكون العنصر العائم محدث
interface FloatingElementProps extends BaseProps {
  intensity?: number
  duration?: number
  direction?: 'vertical' | 'horizontal' | 'circular'
}

export const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = "", 
  intensity = 20,
  duration = 3,
  direction = 'vertical'
}) => {
  // تحديد نوع الحركة العائمة
  const getFloatingAnimation = () => {
    switch (direction) {
      case 'vertical':
        return {
          y: [0, -intensity, 0],
        }
      case 'horizontal':
        return {
          x: [0, intensity, 0],
        }
      case 'circular':
        return {
          y: [0, -intensity, 0],
          x: [0, intensity/2, 0],
          rotate: [0, 5, 0]
        }
      default:
        return {
          y: [0, -intensity, 0],
        }
    }
  }

  return (
    <motion.div
      animate={getFloatingAnimation()}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// مكون الزر التفاعلي محدث
interface InteractiveButtonProps extends BaseProps {
  href?: string
  onClick?: (e?: React.MouseEvent) => void
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = "",
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left'
}) => {
  // تحديد أنماط الأزرار الموحدة
  const getBaseClasses = () => {
    return "theme-button focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-primary text-white hover:shadow-glow-primary focus:ring-primary-500'
      case 'secondary':
        return 'bg-gradient-secondary text-white hover:shadow-glow-secondary focus:ring-secondary-500'
      case 'success':
        return 'bg-gradient-success text-white hover:shadow-glow focus:ring-success-500'
      case 'danger':
        return 'bg-gradient-danger text-white hover:shadow-glow focus:ring-danger-500'
      case 'outline':
        return 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500'
      case 'ghost':
        return 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
      case 'glass':
        return 'theme-glassmorphism text-white hover:bg-white/20 focus:ring-white/50'
      default:
        return 'bg-gradient-primary text-white hover:shadow-glow-primary focus:ring-primary-500'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      case 'xl':
        return 'px-10 py-5 text-xl'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  const combinedClasses = `${getBaseClasses()} ${getVariantClasses()} ${getSizeClasses()} ${className}`

  const buttonContent = (
    <>
      {loading && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
        />
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
    </>
  )

  const motionProps: MotionProps = {
    whileHover: disabled ? {} : { scale: 1.05, y: -2 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 }
  }

  if (href && !disabled) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  )
}

// مكون الشارة المتحركة
interface AnimatedBadgeProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
  pulse?: boolean
}

export const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({
  children,
  className = "",
  variant = 'primary',
  size = 'md',
  pulse = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'badge-unified-primary'
      case 'secondary':
        return 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30'
      case 'success':
        return 'badge-unified-success'
      case 'danger':
        return 'badge-unified-danger'
      case 'warning':
        return 'badge-unified-warning'
      case 'neutral':
        return 'bg-neutral-500/20 text-neutral-300 border border-neutral-500/30'
      default:
        return 'badge-unified-primary'
    }
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-xs'
      case 'md':
        return 'px-3 py-1.5 text-sm'
      case 'lg':
        return 'px-4 py-2 text-base'
      default:
        return 'px-3 py-1.5 text-sm'
    }
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center rounded-full font-medium ${getVariantClasses()} ${getSizeClasses()} ${pulse ? 'animate-pulse-glow' : ''} ${className}`}
    >
      {children}
    </motion.span>
  )
}

// مكون النص المتدرج المتحرك
interface GradientTextProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  animated?: boolean
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  variant = 'primary',
  animated = true
}) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'primary':
        return 'text-unified-gradient'
      case 'secondary':
        return 'text-unified-gradient-secondary'
      case 'success':
        return 'bg-gradient-to-r from-success-400 to-success-600 bg-clip-text text-transparent'
      case 'danger':
        return 'bg-gradient-to-r from-danger-400 to-danger-600 bg-clip-text text-transparent'
      default:
        return 'text-unified-gradient'
    }
  }

  return (
    <span className={`${getGradientClasses()} ${animated ? 'animate-gradient-shift' : ''} ${className}`}>
      {children}
    </span>
  )
}

export default AnimatedSection 