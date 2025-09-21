"use client"

interface SliderProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  label?: string
  showValue?: boolean
  className?: string
}

export default function Slider({ 
  value, 
  onChange, 
  min = 0, 
  max = 100, 
  step = 1,
  label,
  showValue = true,
  className = ''
}: SliderProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
            {label}
          </span>
          {showValue && (
            <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
              {value}
            </span>
          )}
        </div>
      )}
      <input 
        type="range" 
        min={min} 
        max={max} 
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1 rounded-lg appearance-none cursor-pointer"
        style={{ backgroundColor: 'var(--color-surface)' }}
      />
    </div>
  )
}
