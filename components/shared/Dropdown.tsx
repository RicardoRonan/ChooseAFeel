"use client"
import { useState, useEffect, useRef, ReactNode } from "react"

interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps<T = string> {
  options: DropdownOption[]
  value?: T
  onSelect: (value: T) => void
  placeholder?: string
  className?: string
  width?: string
  maxHeight?: string
}

export default function Dropdown<T = string>({ 
  options, 
  value, 
  onSelect, 
  placeholder = "Select an option",
  className = "",
  width = "w-full",
  maxHeight = "max-h-48"
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Reset button styles when theme changes (when CSS variables change)
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'var(--color-bg)'
    }
  }, [value]) // Re-run when value changes (which happens when theme changes)

  const selectedOption = options.find(option => option.value === value)
  const displayValue = selectedOption ? selectedOption.label : placeholder

  return (
    <div className={`relative ${width} ${className}`} ref={dropdownRef}>
      <button 
        ref={buttonRef}
        className={`${width} text-sm px-3 py-2 flex items-center justify-between transition-colors`}
        style={{ 
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)',
          borderRadius: 'var(--radius)'
        }}
        onMouseEnter={(e) => {
          if (typeof window === 'undefined') return
          const element = e.target as HTMLElement
          element.style.backgroundColor = 'var(--color-surface)'
        }}
        onMouseLeave={(e) => {
          if (typeof window === 'undefined') return
          const element = e.target as HTMLElement
          element.style.backgroundColor = 'var(--color-bg)'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{displayValue}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`absolute top-full left-0 right-0 mt-1 z-50 ${maxHeight} overflow-y-auto`}
          style={{ 
            backgroundColor: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {options.map((option, index) => (
            <button 
              key={option.value}
              className="w-full px-3 py-2 text-sm text-left transition-colors hover:bg-opacity-10"
              style={{ 
                color: 'var(--color-text)',
                borderBottom: index < options.length - 1 ? '1px solid var(--color-border)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (typeof window === 'undefined') return
                const element = e.target as HTMLElement
                element.style.backgroundColor = 'var(--color-surface)'
              }}
              onMouseLeave={(e) => {
                if (typeof window === 'undefined') return
                const element = e.target as HTMLElement
                element.style.backgroundColor = 'transparent'
              }}
              onClick={() => {
                onSelect(option.value as T)
                setIsOpen(false)
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
