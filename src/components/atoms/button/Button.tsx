import React, { ReactNode } from 'react'

import './Button.scss'

export type ButtonProps = {
  className?: string,
  onClick?: () => void,
  children: ReactNode,
  size: 'small' | 'medium' | 'large'
  backgroundColor?: 'light_red'
  border?: 'true' | 'false'
  borderRadius?: 'small' | 'medium'
}

export function Button({ className, onClick, children, size, backgroundColor, border, borderRadius }: ButtonProps) {
  return (
    <div>
      <button
        className={`button button__size_${size} button__background_${backgroundColor} button__border_${border} button__border_radius_${borderRadius} ${className}`}
        onClick={onClick}
      >{children}</button>
    </div>
  )
}
