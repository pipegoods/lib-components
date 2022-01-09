import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import './Spacer.css'

const Vertical = ({ size, isVisibly, maxHeight = '100%' }: SpacerProps) => (
  <div
    className={`spacer ${getSize(size)} ${isVisibly && 'spacer-visibly'}`}
    style={{
      display: 'inline-block',
      width: getSize(size),
      maxHeight,
      height: '100vh',
    }}
  ></div>
)

export default Vertical
