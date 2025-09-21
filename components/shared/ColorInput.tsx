"use client"

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
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </label>
      <input 
        type="color" 
        className="w-full h-8 cursor-pointer"
        style={{ 
          borderRadius: 'var(--radius)',
          border: '1px solid var(--color-border)'
        }}
        value={value}
        onChange={e => onChange(e.target.value)} 
      />
    </div>
  )
}
