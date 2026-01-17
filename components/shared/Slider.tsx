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
    <div className={`space-y-3 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)', letterSpacing: '-0.01em' }}>
            {label}
          </span>
          {showValue && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ 
              color: 'var(--color-text)', 
              backgroundColor: 'var(--color-surface)',
              letterSpacing: '-0.01em'
            }}>
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
        className="slider w-full h-1.5 rounded-lg appearance-none cursor-pointer"
        style={{ 
          backgroundColor: 'var(--color-surface)',
          backgroundImage: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((value - min) / (max - min)) * 100}%, var(--color-surface) ${((value - min) / (max - min)) * 100}%, var(--color-surface) 100%)`
        }}
      />
    </div>
  )
}
