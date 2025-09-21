"use client"

interface InputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number'
  className?: string
}

export default function Input({ 
  label, 
  value, 
  onChange, 
  placeholder = '', 
  type = 'text',
  className = ''
}: InputProps) {
  return (
    <div className={className}>
      <label className="text-xs block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      <input 
        type={type}
        value={value} 
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 rounded-md text-sm focus:outline-none transition-colors"
        style={{ 
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg)',
          color: 'var(--color-text)'
        }}
        onFocus={(e) => {
          const element = e.target as HTMLElement
          const computedStyle = getComputedStyle(document.documentElement)
          element.style.borderColor = computedStyle.getPropertyValue('--color-primary')
          e.target.style.boxShadow = '0 0 0 3px rgb(103 80 164 / 0.1)'
        }}
        onBlur={(e) => {
          const element = e.target as HTMLElement
          const computedStyle = getComputedStyle(document.documentElement)
          element.style.borderColor = computedStyle.getPropertyValue('--color-border')
          e.target.style.boxShadow = 'none'
        }}
      />
    </div>
  )
}
