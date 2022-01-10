import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import styles from './Spacer.module.css'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

const Spacer = ({ size, isVisibly }: SpacerProps) => (
  <div
    className={`${styles.spacer} ${styles[getSize(size)]} ${
      isVisibly && styles['spacer-visibly']
    }`}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  ></div>
)

Spacer.horizontal = Horizontal
Spacer.vertical = Vertical

export default Spacer
