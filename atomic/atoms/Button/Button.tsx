import React from 'react'
import { Props } from './Button.types'
import './Button.css'

const Button = ({ children, type = 'primary', isBlock = true }: Props) => (
  <button
    className={`button type-${type} ${
      isBlock && type !== 'tertiary' && 'is-block'
    }`}
  >
    {children}
  </button>
)

export default Button
