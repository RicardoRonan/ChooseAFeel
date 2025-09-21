"use client"
import { useState } from "react"
import { Dropdown } from "./shared"

export default function ScaleControl({ onChange }:{ onChange:(n:number)=>void }) {
  const [val, setVal] = useState(1)
  
  const scaleOptions = [
    { value: "0.75", label: "0.75x" },
    { value: "1", label: "1x" },
    { value: "1.5", label: "1.5x" }
  ]
  
  return (
    <div className="card p-2">
      <label className="text-xs text-gray-600 inline-flex items-center gap-2">
        Scale
        <Dropdown
          options={scaleOptions}
          value={val.toString()}
          onSelect={(value) => { 
            const n = Number(value); 
            setVal(n); 
            onChange(n) 
          }}
          width="w-20"
          className="text-xs"
        />
      </label>
    </div>
  )
}
