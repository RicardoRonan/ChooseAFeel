"use client"
import { useEffect, useRef, ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className = ''
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl", 
    lg: "max-w-4xl"
  }

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      <div 
        ref={modalRef}
        className={`w-full ${sizeClasses[size]} max-h-[80vh] overflow-y-auto shadow-xl ${className}`}
        style={{ 
          backgroundColor: 'var(--color-bg)', 
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text)' }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 transition-colors"
              style={{ 
                borderRadius: 'var(--radius)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                if (typeof window === 'undefined') return
                const element = e.target as HTMLElement
                element.style.backgroundColor = 'var(--color-surface)'
              }}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              <svg className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
