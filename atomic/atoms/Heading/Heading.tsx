import React from 'react'
import { Props } from './Heading.types'
import './Heading.css'

const Heading = ({ children, size = 'md', color = 'default' }: Props) => (
  <h1 className={`heading size-${size} color-${color}`}>{children}</h1>
)

export default Heading
