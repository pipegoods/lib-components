import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import styles from './Spacer.module.css'

const Vertical = ({ size, isVisibly, maxHeight = '100%' }: SpacerProps) => (
  <div
    className={`${styles.spacer} ${styles[getSize(size)]} ${
      isVisibly && styles['spacer-visibly']
    }`}
    style={{
      display: 'inline-block',
      width: getSize(size),
      maxHeight,
      height: '100vh',
    }}
  ></div>
)

export default Vertical
