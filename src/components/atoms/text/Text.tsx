import React from 'react'

import './Text.scss'

export type TextProps = {
    className?: string,
    text: string,
    fontSize?: 'xxl' | 'xl' | 'x' | 'm' | 's' | 'xs',
    color?: 'black' | 'light_black' | 'white' | 'gray' | 'light_gray' | 'light_red',
    fontWeight?: 's' | 'm'
}

export function Text({ className, text, fontSize, fontWeight, color }: TextProps) {
  return (
    <div>
      <p className={`text text__font_size_${fontSize} text__font_color_${color} text__font_weight_${fontWeight} ${className}`}>{text}</p>
    </div>
  )
}
