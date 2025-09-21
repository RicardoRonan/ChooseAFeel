"use client"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void)
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  title?: string
  style?: React.CSSProperties
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  type = 'button',
  title,
  style
}: ButtonProps) {
  const baseClasses = "font-medium transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-0.5rem focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "button",
    secondary: "button-secondary", 
    accent: "button-accent",
    ghost: "px-3 py-1.5 transition-colors"
  }
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm", 
    lg: "px-8 py-4 text-lg font-semibold"
  }
  
  const ghostStyles = variant === 'ghost' ? {
    borderRadius: 'var(--radius)',
    backgroundColor: 'transparent',
    color: 'var(--color-text-secondary)'
  } : {}
  
  const ghostHoverStyles = variant === 'ghost' ? {
    onMouseEnter: (e: React.MouseEvent<HTMLButtonElement>) => {
      const element = e.target as HTMLElement
      element.style.backgroundColor = 'var(--color-surface)'
      element.style.color = 'var(--color-text)'
    },
    onMouseLeave: (e: React.MouseEvent<HTMLButtonElement>) => {
      const element = e.target as HTMLElement
      element.style.backgroundColor = 'transparent'
      element.style.color = 'var(--color-text-secondary)'
    }
  } : {}

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      // Check if the function expects an event parameter by checking its length
      if (onClick.length === 1) {
        (onClick as (e: React.MouseEvent<HTMLButtonElement>) => void)(e)
      } else {
        (onClick as () => void)()
      }
    }
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{...ghostStyles, ...style}}
      onClick={handleClick}
      disabled={disabled}
      title={title}
      {...ghostHoverStyles}
    >
      {children}
    </button>
  )
}
