"use client"

interface TextareaProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
  className?: string
}

export default function Textarea({ 
  label, 
  value, 
  onChange, 
  placeholder = '', 
  rows = 3,
  className = ''
}: TextareaProps) {
  return (
    <div className={className}>
      <label className="text-xs block mb-1 font-medium" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      <textarea 
        value={value} 
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 rounded-md text-sm focus:outline-none transition-colors resize-none"
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
