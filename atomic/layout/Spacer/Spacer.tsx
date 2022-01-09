import React from 'react'
import { getSize } from './helpers'
import { SpacerProps } from './Spacer.types'
import './Spacer.css'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

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

Spacer.horizontal = Horizontal
Spacer.vertical = Vertical

export default Spacer