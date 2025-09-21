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
        <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          {label}
        </span>
      )}
      <button
        onClick={() => onChange(!checked)}
        className={`relative inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]}`}
        style={{ 
          backgroundColor: checked ? 'var(--color-primary)' : 'var(--color-surface)',
          borderRadius: 'var(--radius)'
        }}
      >
        <span
          className={`inline-block transform transition-transform ${thumbSizeClasses[size]} ${translateClasses[size]}`}
          style={{ 
            backgroundColor: 'var(--color-bg)',
            borderRadius: 'var(--radius)'
          }}
        />
      </button>
    </div>
  )
}
