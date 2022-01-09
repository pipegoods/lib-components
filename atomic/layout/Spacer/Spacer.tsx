import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import './Spacer.css'

const Spacer = ({ size, isVisibly }: SpacerProps) => (
  <div
    className={`spacer ${getSize(size)} ${isVisibly && 'spacer-visibly'}`}
    style={{
      display: 'inline-block',
      width: getSize(size),
      height: getSize(size),
    }}
  ></div>
)

export default Spacer
