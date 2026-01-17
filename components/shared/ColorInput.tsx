"use client"
import { useState, useEffect } from "react"

interface ColorInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function ColorInput({ 
  label, 
  value, 
  onChange, 
  className = ''
}: ColorInputProps) {
  const [isChanging, setIsChanging] = useState(false)
  const [previousValue, setPreviousValue] = useState(value)

  // Handle color changes with smooth transitions
  useEffect(() => {
    if (value !== previousValue) {
      setIsChanging(true)
      setPreviousValue(value)
      
      // Reset changing state after animation
      const timer = setTimeout(() => {
        setIsChanging(false)
      }, 300)
      
      return () => clearTimeout(timer)
    }
  }, [value, previousValue])

  const handleChange = (newValue: string) => {
    setIsChanging(true)
    onChange(newValue)
    
    // Reset changing state after animation
    setTimeout(() => {
      setIsChanging(false)
    }, 300)
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-xs font-medium transition-colors duration-300" style={{ 
        color: 'var(--color-text-secondary)',
        letterSpacing: '-0.01em'
      }}>
        {label}
      </label>
      <div className="relative">
        <input 
          type="color" 
          className={`w-full h-10 cursor-pointer transition-all duration-300 ease-in-out ${
            isChanging ? 'scale-105 shadow-lg' : 'scale-100'
          }`}
          style={{ 
            borderRadius: 'var(--radius)',
            border: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'var(--shadow-sm)'
          }}
          value={value}
          onChange={e => handleChange(e.target.value)}
          onMouseEnter={(e) => {
            const element = e.target as HTMLElement
            element.style.boxShadow = 'var(--shadow-md)'
          }}
          onMouseLeave={(e) => {
            const element = e.target as HTMLElement
            if (!isChanging) {
              element.style.boxShadow = 'var(--shadow-sm)'
            }
          }}
        />
        {/* Subtle glow effect during color changes */}
        {isChanging && (
          <div 
            className="absolute inset-0 rounded pointer-events-none animate-colorPulse"
            style={{
              background: `linear-gradient(45deg, ${value}20, ${value}40)`,
              opacity: 0.6,
              borderRadius: 'var(--radius)'
            }}
          />
        )}
      </div>
    </div>
  )
}
