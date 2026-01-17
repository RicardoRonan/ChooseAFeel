"use client"

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  size?: 'sm' | 'md'
  className?: string
}

export default function Toggle({ 
  checked, 
  onChange, 
  label, 
  size = 'md',
  className = ''
}: ToggleProps) {
  const sizeClasses = {
    sm: "h-5 w-9",
    md: "h-6 w-11"
  }
  
  const thumbSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4"
  }
  
  const translateClasses = {
    sm: checked ? 'translate-x-4' : 'translate-x-0.5',
    md: checked ? 'translate-x-6' : 'translate-x-1'
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {label && (
        <span className="text-xs font-medium" style={{ 
          color: 'var(--color-text-secondary)',
          letterSpacing: '-0.01em'
        }}>
          {label}
        </span>
      )}
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex items-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]}`}
        style={{ 
          backgroundColor: checked ? 'var(--color-primary)' : 'var(--color-secondary)',
          borderRadius: 'var(--radius)',
          boxShadow: checked ? 'var(--shadow-sm)' : 'var(--shadow-sm)',
          border: '1px solid transparent'
        }}
        onMouseEnter={(e) => {
          const element = e.target as HTMLElement
          element.style.boxShadow = 'var(--shadow-md)'
        }}
        onMouseLeave={(e) => {
          const element = e.target as HTMLElement
          element.style.boxShadow = 'var(--shadow-sm)'
        }}
      >
        <span
          className={`inline-block transform transition-transform duration-200 ${thumbSizeClasses[size]} ${translateClasses[size]}`}
          style={{ 
            backgroundColor: 'var(--color-bg)',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        />
      </button>
    </div>
  )
}
