import React from 'react'
import { HeadingProps } from './Heading.types'
import styles from './Heading.module.css'

const Heading = ({
  children,
  size = 'md',
  color = 'default',
}: HeadingProps) => (
  <h1
    className={`${styles.heading} ${styles[`size-${size}`]} ${
      styles[`color-${color}`]
    }`}
  >
    {children}
  </h1>
)

export default Heading
