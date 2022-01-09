import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import './Spacer.css'

const Horizontal = ({ size, isVisibly }: SpacerProps) => (
  <div
    className={`spacer ${getSize(size)} ${isVisibly && 'spacer-visibly'}`}
    style={{
      display: 'inline-block',
      width: '100%',
      height: getSize(size),
    }}
  ></div>
)

export default Horizontal
