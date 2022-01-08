import React from 'react'
import { HeadingProps } from './Heading.types'
import './Heading.css'

const Heading = ({
  children,
  size = 'md',
  color = 'default',
}: HeadingProps) => (
  <h1 className={`heading size-${size} color-${color}`}>{children}</h1>
)

export default Heading
